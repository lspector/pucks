;; A pucks world.

(ns pucks.worlds.ai.world3
  (:use [pucks core globals]
        [pucks.agents stone vent zapper user beacon nursery]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 100 701 200)
          y (range 100 701 200)]
      (merge (beacon) {:position [x y]
                       :id [x y]}))
    ;; walls
    ;; vertical internal
    (for [y (range 0 201 20)]
      (merge (stone) {:position [400 y]}))
    (for [y (range 400 801 20)]
      (merge (stone) {:position [400 y]}))
    ;; horizontal internal
    (for [x (range 400 601 20)]
      (merge (stone) {:position [x 400]}))
    ;; room on right
    ;; top/bottom
    (for [x (range 400 800 20)]
      (merge (stone) {:position [x 0]}))
    (for [x (range 400 800 20)]
      (merge (stone) {:position [x 799]}))
    ;; side
    (for [y (range 0 801 20)]
      (merge (stone) {:position [0 y]}))
        (for [y (range 0 801 20)]
      (merge (stone) {:position [799 y]}))
    ;; zappers
    [(merge (zapper) {:position [200 600]})
     (merge (zapper) {:position [600 200]})]
    ;; vent
    [(merge (vent) {:position [600 600]})]
    ;; user nursery
    [(merge (nursery user) {:position [200 200]})]))

(defn settings []
  {})

;(run-pucks (agents) (settings))