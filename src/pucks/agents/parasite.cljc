(ns pucks.agents.parasite
  #?(:cljs (:require-macros [propeller.push.utils.macros :refer [def-instruction]]))
  (:require [pucks.vec2D :as vec2D]
            [pucks.agents.active :as active]
            [propeller.genome :as genome]
            [propeller.push.interpreter :as interpreter]
            [propeller.push.state :as state]
            [propeller.variation :as variation]
            [propeller.gp]
            [propeller.utils :as utils]
            [pucks.globals :as globals]
            [pucks.util :as util]
            [clojure.set :as set]
            [propeller.push.utils.helpers :refer [get-stack-instructions]]
            #?(:clj [propeller.push.utils.macros :refer [def-instruction]])))

(defn random-int [] (- (rand-int 201) 100))

(defn self [p1 p2 tolerance color-key]
  "Returns true if puck p1 would consider puck p2 to be 'self' rather than
'other', meaning that each color component is within p1's color difference
tolerance."
  (let [[r1 g1 b1] (color-key p1)
        [r2 g2 b2] (color-key p2)]
    (and (< (Math/abs (float (- r1 r2))) tolerance)
         (< (Math/abs (float (- g1 g2))) tolerance)
         (< (Math/abs (float (- b1 b2))) tolerance))))

(def-instruction
  :output-rotation
  ^{:stacks #{:float :output}}
  (fn [state]
    (if (not (empty? (:float state)))
      (assoc state :output (assoc (:output state)
                             :rotation (state/peek-stack state :float)))
      state)))

(def-instruction
  :output-thrust-angle
  ^{:stacks #{:float :output}}
  (fn [state]
    (if (not (empty? (:float state)))
      (assoc state :output (assoc (:output state)
                             :thrust-angle (state/peek-stack state :float)))
      state)))

(def-instruction
  :output-color
  ^{:stacks #{:integer :output}}
  (fn [state]
    (if (not (empty? (:integer state)))
      (assoc state :output (assoc (:output state)
                             :color (state/peek-stack state :integer)))
      state)))
;(def-instruction
;  :output-acceleration
;  ^{:stacks #{:float :output}}
;  (fn [state]
;    (if (not (empty? (:float state)))
;      (assoc state :output (assoc (:output state)
;                             :acceleration (first (:float state))))
;      state)))
(def instructions
  (utils/not-lazy
    (concat
      (list
        :integer_add
        :integer_subtract
        :integer_mult
        :integer_quot
        :integer_eq
        :exec_while
        :exec_when
        :exec_if
        :exec_dup
        'close)
      ;; stack-specific instructions
      (get-stack-instructions #{:boolean :float})
      (list :output-rotation
            :output-thrust-angle
            :output-color)
      ;; input instructions
      (list :in1 :in2 :in3 :in4 :in5 :in6 :in7 :in8)
      ;; ERCs (constants)
      (list random-int))))


(defn parasite-proposals [p]
  (let [program (genome/plushy->push (:genome (:memory p)))
        ;; selves and others
        selves (filter #(self p % 0.1 :color)
                       (filter :mobile (:sensed p)))
        average-selves-velocity (apply vec2D/avgv (map :velocity selves))
        average-selves-position (apply vec2D/avgv (map :position selves))
        others (set/difference (set (filter :mobile (:sensed p)))
                               (set selves))
        average-others-velocity (apply vec2D/avgv (map :velocity others))
        average-others-position (apply vec2D/avgv (map :position others))
        average-others-rotation (util/relative-position->rotation average-others-velocity)
        average-others-direction (util/relative-position->rotation average-others-position)
        average-others-distance (vec2D/length average-others-position)
        average-selves-rotation (util/relative-position->rotation average-selves-velocity)
        average-selves-direction (util/relative-position->rotation average-selves-position)
        ;; vents
        vents (filter :vent (:sensed p))
        average-vents-position (apply vec2D/avgv (map :position vents))
        average-vents-direction (util/relative-position->rotation average-vents-position)
        average-vents-distance (vec2D/length average-vents-position)
        ;; zappers
        zappers (filter :zapper (:sensed p))
        average-zappers-position (apply vec2D/avgv (map :position zappers))
        average-zappers-direction (util/relative-position->rotation average-zappers-position)
        average-zappers-distance (vec2D/length average-zappers-position)
        ;;stones
        stones (filter :stone (:sensed p))
        average-stones-position (apply vec2D/avgv (map :position stones))
        average-stones-direction (util/relative-position->rotation average-stones-position)
        average-stones-distance (vec2D/length average-stones-position)
        init-state (assoc state/empty-state :output {})

        output (interpreter/interpret-program
                 program
                 (assoc init-state :input {:in1 average-others-direction
                                           :in2 average-zappers-direction
                                           :in3 (:energy p)
                                           :in4 average-others-rotation
                                           :in5 average-zappers-distance
                                           :in6 average-vents-distance
                                           :in7 average-others-distance
                                           :in8 average-stones-direction
                                           }) 400)]

    (merge
      {:acceleration (if (< (mod (:steps p) 50) 25)
                       1
                       (* 0.25 (- (vec2D/length (:velocity p)))))
       :rotation     (if (number? (:rotation (:output output)))
                       (:rotation (:output output))
                       0)
       :thrust-angle (if (number? (:thrust-angle (:output output)))
                       (:thrust-angle (:output output))
                       0)
       :properties {:color (if (number? (:color (:output output)))
                             [(:color (:output output)) (:color (:output output)) (:color (:output output))]
                             [1 1 1])}
       }
      (if (and (> (:energy p) 0.8) (not(empty? (filter :pushed (:overlaps p)))) (> (:steps p) 50))
        {:spawn [((:spawn-function p) p)]}
        {:transfer (concat (for [binder (filter :pushed (:overlaps p))]
                             {:self (:id p)
                              :other (:id binder)
                              :bid {:bound-to (:id p)}
                              :ask {:bound-to (:id binder)}})
                           (for [vents (filter :vent (:overlaps p))]
                                 {:self (:id p)
                                  :other (:id vents)
                                  :bid {:energy 0.01}
                                  :ask {}})
                           (for [bound (filter :pushed (:overlaps p))]
                             {:self (:id p)
                              :other (:id bound)
                              :bid {}
                              :ask {:energy 0.2}})
                           )}
        ))
    ))



(defn umad
  [plushy-genome]
  (variation/uniform-addition plushy-genome instructions 0.2)
  (variation/uniform-deletion plushy-genome 0.2))
;(lazy-seq '(:in4 :in6 :float_quot :in3 :float_add :float_gte :in1 :output-rotation :integer_mult :float_gt :float_dec :in6 :float_from_boolean :float_lte :float_mod :float_cos :boolean_swap :integer_eq :in3 :float_dec 95 :exec_dup :integer_add :exec_when :integer_subtract :float_max :boolean_swap :float_add :integer_quot 49 :in2 :float_add :boolean_or :float_min :float_inc :float_swap :in7 :float_gte :float_pop :float_sin :exec_if :boolean_swap :float_flush))}
(defn parasite []
  (merge (active/active)
         {:parasite true
          :proposal-function parasite-proposals
          :memory {:genome (genome/make-random-plushy instructions 200)}
          :spawn-function #(merge % {:velocity [(* 10 (- (rand) 0.5)) (* 10 (- (rand) 0.5))]
                                     :rotation (* globals/two-pi (rand))
                                     :position [(* 10 (- (rand-int 3) 1)) (* 10 (- (rand-int 3) 1))]
                                     :memory {:genome (umad (:genome(:memory %)))}})
          }))
