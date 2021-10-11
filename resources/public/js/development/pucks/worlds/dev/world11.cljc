(ns pucks.worlds.dev.world11
  (:require [pucks.globals :as globals]
            [pucks.agents.donor :as donor]
            [pucks.agents.linear :as linear]))

(defn agents []
  [(merge (linear/linear) {:position [100 400]
                    :rotation globals/half-pi
                    :velocity [2 0]})
   (merge (donor/donor :key) {:position [400 700]
                        :rotation 0
                        :velocity [0 -2]})])
    
(defn settings []
  {})

;(run-pucks (agents) (settings))