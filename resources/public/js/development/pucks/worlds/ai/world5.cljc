;; A pucks world.

(ns pucks.worlds.ai.world5
  (:require [pucks.agents.stone :as stone]
            [pucks.agents.user :as user]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.beacon :as beacon]
            [pucks.agents.nursery :as nursery]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 50 751 100)
          y (range 50 751 100)]
      (merge (beacon/beacon) {:position [x y]
                       :id [x y]
                       :radius 70}))
    ;; walls
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
    (mapv (fn [p loc]
            (merge p {:position loc}))
          [(nursery/nursery user/user)
           (vent/vent)
           (zapper/zapper)
           (zapper/zapper)]
          (shuffle (for [x [100 300 500 700]
                         y [100 300 500 700]]
                     [x y])))))

(defn settings []
  {})

;(run-pucks (agents) (settings))