(ns pucks.worlds.dev.world13
  (:use [pucks core globals]
        [pucks.agents beacon stone vent zapper nursery linear swarmer zigzag]))

(defn agents []
  (vec (concat 
         ;; beacons
         (for [x (range 50 1551 100)
               y (range 50 1551 100)]
           (merge (beacon) {:position [x y]
                            :id [x y]
                            :radius 70}))
         ;; walls
         ;; horizontal
         (apply concat
                (for [y (range 0 1581 200)]
                  (let [start (rand-int 1600)
                        stop (+ start 100 (rand-int 600))]
                    (for [x (range start stop 20)]
                      (merge (stone) {:position [x y]})))))   
         ;; vertical
         (apply concat
                (for [x (range 0 1581 200)]
                  (let [start (rand-int 1600)
                        stop (+ start 100 (rand-int 300))]
                    (for [y (range start stop 20)]
                      (merge (stone) {:position [x y]})))))
         ;; other pucks
         (mapv (fn [p loc]
                 (merge p {:position loc}))
               (concat (repeatedly 8 #(nursery linear))
                       (repeatedly 8 #(nursery swarmer))
                       (repeatedly 8 #(nursery zigzag))
                       (repeatedly 24 #(vent))
                       (repeatedly 8 #(zapper)))
               (shuffle (for [x (range 100 1501 200)
                              y (range 100 1501 200)]
                          [x y]))))))


(defn settings []
  {:screen-size 1600
   :scale 0.5
   :single-thread-mode false})

;(run-pucks (agents) (settings))