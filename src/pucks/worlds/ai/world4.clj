
;; A pucks world.

(ns pucks.worlds.ai.world4
  (:use [pucks core globals]
        [pucks.agents beacon stone vent gate zapper nursery user chest]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 100 701 200)
          y (range 100 701 200)]
      (merge (beacon) {:position [x y]
                       :id [x y]}))
    ;; walls
    ;; horizontal
    (for [x (range 500 701 20)
          y [300 500]]
      (merge (stone) {:position [x y]}))
    ;; vertical, left (with gap for gate)
    (for [y (range 300 361 20)]
      (merge (stone) {:position [500 y]}))
    (for [y (range 440 501 20)]
      (merge (stone) {:position [500 y]}))
    ;; right
    (for [y (range 300 501 20)]
      (merge (stone) {:position [700 y]}))
    ;; gate
    [(merge (gate) {:position [500 400]})]
    ;; chest with key
    [(merge (chest) {:position [250 430]
                     :inventory [:key]})]
    ;; vent
    [(merge (vent) {:position [600 430]
                    :radius 30})]
    ;; zappers
    [(merge (zapper) {:position [200 600]})
     (merge (zapper) {:position [600 200]})]
    ;; user nursery
    [(merge (nursery user) {:position [200 200]})]
    ))

(defn settings []
  {})

;(run-pucks (agents) (settings))