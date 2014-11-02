;; A pucks world.

(ns pucks.worlds.ai.world5
  (:use [pucks core globals]
        [pucks.agents beacon stone vent gate zapper nursery user chest]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 50 751 100)
          y (range 50 751 100)]
      (merge (beacon) {:position [x y]
                       :id [x y]
                       :radius 70}))
    ;; walls
    ;; horizontal
    (apply concat
           (for [y (range 0 781 200)]
             (let [start (rand-int 800)
                   stop (+ start 100 (rand-int 300))]
               (for [x (range start stop 20)]
                 (merge (stone) {:position [x y]})))))   
    ;; vertical
    (apply concat
           (for [x (range 0 781 200)]
             (let [start (rand-int 800)
                   stop (+ start 100 (rand-int 300))]
               (for [y (range start stop 20)]
                 (merge (stone) {:position [x y]})))))
    ;; other pucks
    (mapv (fn [p loc]
            (merge p {:position loc}))
          [(nursery user)
           (vent) 
           (zapper) 
           (zapper)]
          (shuffle (for [x [100 300 500 700]
                         y [100 300 500 700]]
                     [x y])))))

(defn settings []
  {})

;(run-pucks (agents) (settings))