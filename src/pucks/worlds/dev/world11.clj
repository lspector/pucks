(ns pucks.worlds.dev.world11  
  (:use [pucks core globals util]
        [pucks.agents linear donor]))

(defn agents []
  [(merge (linear) {:position [100 400]
                    :rotation half-pi
                    :velocity [2 0]})
   (merge (donor :key) {:position [400 700]
                        :rotation 0
                        :velocity [0 -2]})])
    
(defn settings []
  {})

;(run-pucks (agents) (settings))