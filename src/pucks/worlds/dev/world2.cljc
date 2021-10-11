;; A pucks world.

(ns pucks.worlds.dev.world2
  (:require [pucks.globals :as globals]
            [pucks.agents.vent :as vent]
            [pucks.agents.linear :as linear]))

(defn agents []
  [(merge (linear/linear)
          {:position [100 300] 
           :rotation (/ globals/pi 2)
           :velocity [2 0]})
   (merge (vent/vent)
          {:position [500 300]})])

(defn settings []
  {})

;(run-pucks (agents) (settings))
