(ns pucks.worlds.dev.world13
  (:require [pucks.agents.beacon :as beacon]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.stone :as stone]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.linear :as linear]
            [pucks.agents.zigzag :as zigzag]
            [pucks.agents.swarmer :as swarmer]
            [pucks.agents.beacon :as beacon]))

(defn agents []
  (vec (concat 
         ;; beacons
         (for [x (range 50 1551 100)
               y (range 50 1551 100)]
           (merge (beacon/beacon) {:position [x y]
                            :id [x y]
                            :radius 70}))
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
         (mapv (fn [p loc]
                 (merge p {:position loc}))
               (concat (repeatedly 8 #(nursery/nursery linear/linear))
                       (repeatedly 8 #(nursery/nursery swarmer/swarmer))
                       (repeatedly 8 #(nursery/nursery zigzag/zigzag))
                       (repeatedly 24 #(vent/vent))
                       (repeatedly 8 #(zapper/zapper)))
               (shuffle (for [x (range 100 1501 200)
                              y (range 100 1501 200)]
                          [x y]))))))


(defn settings []
  {:screen-size 1600
   :scale 0.5
   :single-thread-mode false})

;(run-pucks (agents) (settings))