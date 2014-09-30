;; A pucks world.

(ns pucks.worlds.ai.world1  
  (:use [pucks core globals]
        [pucks.agents stone vent zapper user]))

(defn agents []
  (concat (for [y (take 20 (iterate #(+ % 20) 100))]
            (merge (stone) {:position [400 y]}))
          [(merge (vent) {:position [600 300]})
           (merge (zapper) {:position [300 300]})
           (merge (user) {:position [200 300]})]))

(defn settings []
  {})

;(run-pucks (agents) (settings))