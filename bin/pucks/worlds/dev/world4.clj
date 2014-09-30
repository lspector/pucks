;; A pucks world.

(ns pucks.worlds.dev.world4
  (:use [pucks core globals]
        [pucks.agents linear stone]))

(defn agents []
  (concat (for [y (take 15 (iterate #(+ % 20) 100))]
            (merge (stone) {:position [400 y]}))
          (for [x (take 16 (iterate #(+ % 20) 50))]
            (merge (stone) {:position [x 100]}))
          [(merge (linear)
                  {:position [100 300] 
                   :rotation (/ pi 2)
                   :velocity [2 0]})]))

(defn settings []
  {:screen-size 500})

;(run-pucks (agents) (settings))