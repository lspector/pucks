
;; Definitions for pusher agents.

(ns pucks.agents.pusher
  (:use [pucks globals util vec2D]
        pucks.agents.active)
  (:require [clojush.interpreter :as interpreter]
            [clojush.pushstate :as pushstate]
            [clojush.pushgp.genetic-operators :as genetic-operators]
            [clojush.args :as args]
            [clojush.random :as random]
            [clojush.translate :as translate]
            [clojush.instructions.tag :as tag]))

(args/reset-globals
  {:max-points 100 
   :evalpush-limit 200
   :uniform-mutation-rate 0.1
   :atom-generators (concat (pushstate/registered-for-stacks [:integer :float :boolean :exec])
                            (repeat 100 (fn [] (- 100.0 (random/lrand 201.0))))
                            (repeat 100 (fn [] (- 100 (random/lrand-int 201))))
                            ['tag_float_5000 ;; enrich concentration of tags for actions
                             'tagged_5000
                             'tag_float_6000
                             'tagged_6000
                             'tag_float_7000
                             'tagged_7000
                             'tag_float_8000
                             'tagged_8000
                             'tag_float_8100
                             'tagged_8100
                             'tag_float_8200
                             'tagged_8200
                             'tag_float_8300
                             'tagged_8300
                             'tag_float_8400
                             'tagged_8400
                             'tag_float_8500
                             'tagged_8500
                             'tag_float_8600
                             'tagged_8600
                             'tag_float_8700
                             'tagged_8700
                             'tag_float_8800
                             'tagged_8800
                             (tag/tag-instruction-erc [:float] 10000)
                             ;(tag/untag-instruction-erc 10000)
                             (tag/tagged-instruction-erc 10000)])})

(defn self [p1 p2 tolerance color-key]
  "Returns true if puck p1 would consider puck p2 to be 'self' rather than
'other', meaning that each color component is within p1's color difference
tolerance."
  (let [[r1 g1 b1] (color-key p1)
        [r2 g2 b2] (color-key p2)]
    (and (< (Math/abs (float (- r1 r2))) tolerance)
         (< (Math/abs (float (- g1 g2))) tolerance)
         (< (Math/abs (float (- b1 b2))) tolerance))))

(defn top-with-default 
  [type default pushstate]
  (let [t (pushstate/top-item type pushstate)]
    (if (= t :no-stack-item)
      default
      t)))

(defn keep-number-reasonable
  "Returns a version of n that obeys limit parameters. LOCAL VERSION WITH ITS OWN LIMITS."
  [n]
  (let [max-number-magnitude 1000000
        min-number-magnitude 0.0000001]
    (cond
      (integer? n)
      (cond
        (> n max-number-magnitude) max-number-magnitude
        (< n (- max-number-magnitude)) (- max-number-magnitude)
        :else n)
      :else
      (cond
        (> n max-number-magnitude) (* 1.0 max-number-magnitude)
        (< n (- max-number-magnitude)) (* 1.0 (- max-number-magnitude))
        (and (< n min-number-magnitude) (> n (- min-number-magnitude))) 0.0
        :else n))))

(defn tagged-float [tag push-state]
  (let [tagged-value (second (tag/closest-association tag push-state))]
    (keep-number-reasonable
      (cond (float? tagged-value) tagged-value
            (integer? tagged-value) (float (keep-number-reasonable tagged-value))
            :else 1.0))))

(defn tagged-integer [tag push-state]
  (let [tagged-value (second (tag/closest-association tag push-state))]
    (keep-number-reasonable
      (cond (integer? tagged-value) tagged-value
            (float? tagged-value) (int (keep-number-reasonable tagged-value))
            :else 1))))

(defn pusher-proposals [p]
  (if-let [g (:genome (:memory p))]
    (let [;; neighboring puck info
          selves (filter #(self p % 0.1 :color) 
                         (filter :mobile (:sensed p)))
          average-selves-velocity (apply avgv (map :velocity selves))
          average-selves-position (apply avgv (map :position selves))
          others (vec (clojure.set/difference (set (filter :mobile (:sensed p)))
                                              (set selves)))
          average-others-velocity (apply avgv (map :velocity others))
          average-others-position (apply avgv (map :position others))
          vents (filter :vent (:sensed p))
          average-vents-position (apply avgv (map :position vents))
          zappers (filter :zapper (:sensed p))
          average-zappers-position (apply avgv (map :position zappers))
          stones (filter :stone (:sensed p))
          average-stones-position (apply avgv (map :position stones))
          ;; ==== sensor info to be made available in tag space ====
          ;; selves
          average-selves-speed (length average-selves-velocity)
          average-selves-rotation (relative-position->rotation average-selves-velocity)
          average-selves-direction (relative-position->rotation average-selves-position)
          average-selves-distance (length average-selves-position)
          ;; others
          average-others-speed (length average-others-velocity)
          average-others-rotation (relative-position->rotation average-others-velocity)
          average-others-direction (relative-position->rotation average-others-position)
          average-others-distance (length average-others-position)
          ;; vents
          average-vents-direction (relative-position->rotation average-vents-position)
          average-vents-distance (length average-vents-position)
          ;; zappers
          average-zappers-direction (relative-position->rotation average-zappers-position)
          average-zappers-distance (length average-zappers-position)
          ;; stones
          average-stones-direction (relative-position->rotation average-stones-position)
          average-stones-distance (length average-stones-position)
          ;; self properties
          rotation (:rotation p)
          thrust-angle (:thrust-angle p)
          steps (:steps p)
          energy (:energy p)
          [red green blue] (:color p)
          [eye-red eye-green eye-blue] (:eye-color p)
          [core-red core-green core-blue] (:core-color p)
          speed (length (:velocity p))
          direction-of-motion (relative-position->rotation (:velocity p))
          ;; ==== program result ====
          push-result (interpreter/run-push 
                        (:push g)
                        (merge (pushstate/make-push-state)
                               {:tag (merge (into (sorted-map) (:tag (:memory p)))
                                            (let [to-tag [average-vents-direction
                                                          average-vents-distance 
                                                          average-zappers-direction
                                                          average-zappers-distance
                                                          average-stones-direction
                                                          average-stones-distance
                                                          average-selves-speed
                                                          average-selves-rotation 
                                                          average-selves-direction
                                                          average-selves-distance
                                                          average-others-speed 
                                                          average-others-rotation
                                                          average-others-direction
                                                          average-others-distance
                                                          rotation
                                                          thrust-angle
                                                          steps
                                                          energy
                                                          red
                                                          green 
                                                          blue
                                                          eye-red
                                                          eye-green
                                                          eye-blue
                                                          core-red
                                                          core-green
                                                          core-blue
                                                          speed
                                                          direction-of-motion]]
                                              (zipmap (iterate (partial + (quot 5000 (count to-tag))) 0)
                                                      to-tag)))}))]
      (merge {:acceleration (tagged-float 5000 push-result)
              :rotation (tagged-float 6000 push-result)
              :thrust-angle (tagged-float 7000 push-result)
              :properties {:color [(tagged-integer 8000 push-result)
                                   (tagged-integer 8100 push-result)
                                   (tagged-integer 8200 push-result)]
                           :eye-color [(tagged-integer 8300 push-result)
                                       (tagged-integer 8400 push-result)
                                       (tagged-integer 8500 push-result)]
                           :core-color [(tagged-integer 8600 push-result)
                                        (tagged-integer 8700 push-result)
                                        (tagged-integer 8800 push-result)]
                           }
              :memory {:tag (:tag push-result)}
              }
             (if (zero? (mod (:steps p) 20))
               {:spawn [((:spawn-function p) p)]}
               {:transfer (concat (for [binder (filter :pusher (:overlaps p))]
                                    {:self (:id p)
                                     :other (:id binder)
                                     :bid {:bound-to (:id p)}
                                     :ask {:bound-to (:id binder)}})
                                  (for [weaker (filter #(< (:energy %)
                                                           (:energy p))
                                                       (filter :pusher (:overlaps p)))]
                                    {:self (:id p)
                                     :other (:id weaker)
                                     :bid {:energy 0.01}
                                     :ask {}}))})))))

(defn mutate
  "Returns a mutated version of the provided genome."
  [plush-genome]
  (let [new-plush-genome (:genome (genetic-operators/alternation
                                    (genetic-operators/uniform-mutation 
                                      {:genome plush-genome} 
                                      @args/push-argmap)
                                    (genetic-operators/uniform-mutation 
                                      {:genome plush-genome} 
                                      @args/push-argmap)
                                    @args/push-argmap))]
    {:plush new-plush-genome
     :push (translate/translate-plush-genome-to-push-program 
             {:genome new-plush-genome} 
             @args/push-argmap)}))

(defn pusher 
  "Returns a random pusher puck."
  []
  (let [plush-genome (random/random-plush-genome 
                       (/ (:max-points @args/push-argmap) 4)
                       (:atom-generators @args/push-argmap))]
    (merge (active)
           {:color [0 0 255]
            :pusher true
            :proposal-function pusher-proposals
            :memory {:genome {:plush plush-genome
                              :push (translate/translate-plush-genome-to-push-program 
                                      {:genome plush-genome} 
                                      @args/push-argmap)}}
            :spawn-function #(merge %
                                    {:velocity [(* 10 (- (rand) 0.5)) (* 10 (- (rand) 0.5))]
                                     :rotation (* two-pi (rand))
                                     ;; position will be relative to position of parent
                                     :position [(* 10 (- (rand-int 3) 1)) (* 10 (- (rand-int 3) 1))]
                                     :memory {:genome (mutate (:plush (:genome (:memory %))))}})})))
