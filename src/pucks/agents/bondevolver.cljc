
;; Definitions for bondevolver agents.

(ns pucks.agents.bondevolver
  (:require [pucks.util :as util]
            [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [pucks.agents.active :as active]))

(defn rand-relative-position 
  "Returns a random relative-position vector."
  []
  (util/rotation->relative-position (- (rand globals/two-pi) globals/pi)))

(defn rand-urge
  "Returns a random urge level, which will be between -1.0 and 1.0."
  []
  (- (rand 2.0) 1.0))

(defn rand-probability
  "Returns a random probability between 0 and 1.0."
  []
  (rand 1.0))

(defn rand-color
  "Returns a random color."
  []
  [(rand-int 256) (rand-int 256) (rand-int 256)])

(defn rand-color-difference
  "Returns a random color difference (an integer between 0 and 255)."
  []
  (rand-int 256))

(defn self [p1 p2 tolerance color-key]
  "Returns true if puck p1 would consider puck p2 to be 'self' rather than
'other', meaning that each color component is within p1's color difference
tolerance."
  (let [[r1 g1 b1] (color-key p1)
        [r2 g2 b2] (color-key p2)]
    (and (< (Math/abs (- r1 r2)) tolerance)
         (< (Math/abs (- g1 g2)) tolerance)
         (< (Math/abs (- b1 b2)) tolerance))))

(defn facing [p1 p2]
  "Returns true if puck p1 is facing puck p2, assuming p1 is sensing p2 
and that p2's position is relative to p1's."
  (< (util/rotational-difference (:rotation p1)
                            (util/relative-position->rotation (:position p2)))
     globals/quarter-pi))

(defn bondevolver-proposals [p]
  (if-let [g (:genome (:memory p))]
    (let [selves (filter #(self p % (:color-difference g) :color)
                         (filter :mobile (:sensed p)))
          others (filter #(not (self p % (:color-difference g) :color))
                        (filter :mobile (:sensed p)))
          vents (filter :vent (:sensed p))
          zappers (filter :zapper (:sensed p))]
      (merge {:acceleration 1
              :properties {:color (:color g)
                           :eye-color (:eye-color g)
                           :core-color (:core-color g)}
              :rotation (util/relative-position->rotation
                          (vec2D/+v (util/rotation->relative-position (:rotation p))
                              (if (empty? selves)
                                [0 0]
                                (vec2D/*v (:self-flock-urge g)
                                    (vec2D/limit1 (apply vec2D/avgv (map :velocity selves)))))
                              (if (empty? others)
                                [0 0]
                                (vec2D/*v (:other-flock-urge g)
                                    (vec2D/limit1 (apply vec2D/avgv (map :velocity others)))))
                              (if (empty? selves)
                                [0 0]
                                (vec2D/*v (:self-cluster-urge g)
                                    (vec2D/limit1 (apply vec2D/avgv (map :position selves)))))
                              (if (empty? others)
                                [0 0]
                                (vec2D/*v (:other-cluster-urge g)
                                    (vec2D/limit1 (apply vec2D/avgv (map :position others)))))
                              (if (empty? vents)
                                [0 0]
                                (vec2D/*v (:vent-urge g)
                                    (vec2D/limit1 (apply vec2D/avgv (map :position vents)))))
                              (if (empty? zappers)
                                [0 0]
                                (vec2D/*v (:zapper-urge g)
                                    (vec2D/limit1 (apply vec2D/avgv (map :position zappers)))))
                              (vec2D/*v (:random-urge g)
                                  (rand-relative-position))))}
             (if (> (* (max (:spawn-probability g) 0.01)
                       (/ (:energy p) 100))
                    (rand))
               {:spawn [((:spawn-function p) p)]}
               {})
             {:transfer (concat (for [binder
                                      (filter #(self p % (:color-difference g) :eye-color)
                                              (filter :bondevolver (:overlaps p)))]
                                  {:self (:id p)
                                   :other (:id binder)
                                   :bid {:bound-to (:id p)}
                                   :ask {:bound-to (:id binder)}})
                                (for [weaker (filter #(< (:energy %)
                                                         (:energy p))
                                                     (filter #(self p % (:color-difference g) :core-color)
                                                            (filter :bondevolver (:overlaps p))))]
                                  {:self (:id p)
                                   :other (:id weaker)
                                   :bid {:energy 0.01}
                                   :ask {}}))}))))

(defn mutate-color
  "Returns a mutated version of color vector c."
  [c]
  (mapv #(mod (+ % (- (rand-int 33) 16)) 256) c))

(defn mutate-urge
  "Returns a mutated version of urge value u."
  [u]
  (max -1.0 (min 1.0 (+ u (- (rand 0.1) 0.05)))))

(defn mutate-probability
  "Returns a mutated version of probability value p."
  [p]
  (max 0.0 (min 1.0 (+ p (- (rand 0.05) 0.025)))))

(defn mutate-color-difference
  "Returns a mutated version of color-difference value d."
  [d]
  (max 0 (min 255 (+ d (- (rand-int 17) 8)))))

(defn mutate
  "Returns a mutated version of the provided genome."
  [genome]
  (-> genome
    (assoc :color (mutate-color (:color genome)))
    (assoc :eye-color (mutate-color (:eye-color genome)))
    (assoc :core-color (mutate-color (:core-color genome)))
    (assoc :self-flock-urge (mutate-urge (:self-flock-urge genome)))
    (assoc :other-flock-urge (mutate-urge (:other-flock-urge genome)))
    (assoc :self-cluster-urge (mutate-urge (:self-cluster-urge genome)))
    (assoc :other-cluster-urge (mutate-urge (:other-cluster-urge genome)))
    (assoc :color-difference (mutate-color-difference (:color-difference genome)))
    (assoc :random-urge (mutate-urge (:random-urge genome)))
    (assoc :vent-urge (mutate-urge (:vent-urge genome)))
    (assoc :zapper-urge (mutate-urge (:zapper-urge genome)))
    (assoc :spawn-probability (mutate-probability (:spawn-probability genome)))))

(defn bondevolver 
  "Returns a random swarmevolver puck."
  []
  (merge (active/active)
         {:bondevolver true
          :proposal-function bondevolver-proposals
          :memory {:genome {:color (rand-color)
                            :eye-color (rand-color)
                            :core-color (rand-color)
                            :self-flock-urge (rand-urge)
                            :other-flock-urge (rand-urge)
                            :self-cluster-urge (rand-urge)
                            :other-cluster-urge (rand-urge)
                            :color-difference (rand-color-difference)
                            :random-urge (rand-urge)
                            :vent-urge (rand-urge)
                            :zapper-urge (rand-urge)
                            :spawn-probability (rand-probability)}}
          :spawn-function #(merge %
                                  {:velocity [(* 5 (- (rand) 0.5)) (* 5 (- (rand) 0.5))]
                                   :rotation (* globals/two-pi (rand))
                                   ;; position will be relative to position of parent
                                   :position [(- (rand-int 3) 1) (- (rand-int 3) 1)]
                                   :memory {:genome (mutate (:genome (:memory %)))}})}))
