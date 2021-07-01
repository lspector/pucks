
;; A pucks world.

(ns pucks.worlds.ai.world8
  (:require [pucks.agents.stone :as stone]
            [pucks.agents.user :as user]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.mapdonor :as mapdonor]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.gate :as gate]
            [pucks.agents.donor :as donor]
            [pucks.agents.shooter :as shooter]))

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
    ;; walls
    ;; horizontal
    (apply concat
           (for [y (range 0 1581 200)]
             (let [start (rand-int 1600)
                   stop (+ start 100 (rand-int 600))]
               (for [x (range start stop 20)]
                 (merge (stone/stone) {:position [x y]})))))
    ;; vertical
    (apply concat
           (for [x (range 0 1581 200)]
             (let [start (rand-int 1600)
                   stop (+ start 100 (rand-int 300))]
               (for [y (range start stop 20)]
                 (merge (stone/stone) {:position [x y]})))))
    ;; other pucks
    (apply concat
           (mapv #(if (:ventbox %) ;; expand ventbox specifications
                    (ventbox (:position %))
                    [%])
                 (mapv (fn [p loc]
                         (merge p {:position loc}))
                       (concat [(nursery/nursery user/user)]
                               (repeatedly 4 #(do {:ventbox true})) ;; will be expanded later
                               (repeatedly 8 zapper/zapper)
                               [(nursery/nursery shooter/shooter)]
                               [(nursery/nursery
                                  #(merge (donor/donor :key)
                                          {:color [0 0 255]
                                           :velocity [(rand+- 5) (rand+- 5)]}))]
                               [(nursery/nursery
                                  (fn [] 
                                    (merge (mapdonor/mapdonor)
                                           {:velocity [(rand+- 5) (rand+- 5)]})))])
                       (shuffle (for [x (range 100 1501 200)
                                      y (range 100 1501 200)]
                                  [x y])))))))

(defn settings []
  {:screen-size 1600
   :scale 0.5
   :single-thread-mode false
   :max-velocity 40
   :torpedo-energy 0.02})

;(run-pucks (agents) (settings))