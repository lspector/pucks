;; A pucks world.

(ns pucks.worlds.dev.world2
  (:use [pucks core globals]
        [pucks.agents linear vent]))

(defn agents []
  [(merge (linear)
          {:position [100 300] 
           :rotation (/ pi 2)
           :velocity [2 0]})
   (merge (vent)
          {:position [500 300]})])

(defn settings []
  {})

;(run-pucks (agents) (settings))
