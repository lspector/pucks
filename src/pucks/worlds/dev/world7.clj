
;; A pucks world.

(ns pucks.worlds.dev.world7
  (:use [pucks core globals]
        [pucks.agents stone vent user gate opener]))

(defn agents []
  (concat 
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
    ;; user
    [(merge (opener) {:position [100 400]
                      :rotation half-pi
                      :velocity [1.0 0]})]
    ))

(defn settings []
  {})

;(run-pucks (agents) (settings))