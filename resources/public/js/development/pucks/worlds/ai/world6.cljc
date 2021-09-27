
;; A pucks world.

(ns pucks.worlds.ai.world6
  (:require [pucks.agents.stone :as stone]
            [pucks.agents.user :as user]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.beacon :as beacon]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.gate :as gate]
            [pucks.agents.donor :as donor]))

(defn rand+-
  "Returns a positive or negative random number with magnitude less than n."
  [n]
  (- (rand (* 2 n)) n))

(defn ventbox
  "Returns a sequence of pucks that form a box of stones with a vent in the
   middle and a gate on each side."
  [[center-x center-y]]
  (concat
    ;; stones
    [(merge (stone/stone) {:position [(- center-x 50)(- center-y 50)]})
     (merge (stone/stone) {:position [(- center-x 50)(+ center-y 50)]})
     (merge (stone/stone) {:position [(+ center-x 50)(- center-y 50)]})
     (merge (stone/stone) {:position [(+ center-x 50)(+ center-y 50)]})]
    ;; gates
    [(merge (gate/gate) {:position [(- center-x 50) center-y]})
     (merge (gate/gate) {:position [(+ center-x 50) center-y]})
     (merge (gate/gate) {:position [center-x (- center-y 50)]})
     (merge (gate/gate) {:position [center-x (+ center-y 50)]})]
    ;; vent
    [(merge (vent/vent) {:position [center-x center-y]})]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 50 751 100)
          y (range 50 751 100)]
      (merge (beacon/beacon) {:position [x y]
                       :id [x y]
                       :radius 70}))
    ;; random walls
    ;; horizontal
    (apply concat
           (for [y (range 0 781 200)]
             (let [start (rand-int 800)
                   stop (+ start 100 (rand-int 300))]
               (for [x (range start stop 20)]
                 (merge (stone/stone) {:position [x y]})))))
    ;; vertical
    (apply concat
           (for [x (range 0 781 200)]
             (let [start (rand-int 800)
                   stop (+ start 100 (rand-int 300))]
               (for [y (range start stop 20)]
                 (merge (stone/stone) {:position [x y]})))))
    ;; other pucks
    (let [locations (shuffle 
                      (for [x [100 300 500 700]
                            y [100 300 500 700]]
                        [x y]))]
      (concat (ventbox (first locations))
              (ventbox (second locations))
              (mapv (fn [p loc]
                      (merge p {:position loc}))
                    [(nursery/nursery user/user)
                     (nursery/nursery #(merge (donor/donor :key)
                                      {:velocity [(rand+- 5) (rand+- 5)]}))
                     (zapper/zapper)
                     (zapper/zapper)]
                    (rest (rest locations)))))))

(defn settings []
  {})

;(run-pucks (agents) (settings))