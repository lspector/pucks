;; A pucks world.

(ns pucks.worlds.dev.world8
  (:use [pucks core globals]
        [pucks.agents linear]))

(defn agents []
  [(merge (linear) {:position [100 400]
                    :rotation half-pi
                    :velocity [2 0]})
   (merge (linear) {:position [400 700]
                    :rotation 0
                    :velocity [0 -2]})])
    
(defn settings []
  {})

;(run-pucks (agents) (settings))