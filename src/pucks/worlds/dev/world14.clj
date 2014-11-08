(ns pucks.worlds.dev.world14  
  (:use [pucks core globals]
        [pucks.agents vent nursery linear spawner]))

(defn agents []
  (vec (concat 
         (for [x (range 100 1901 200)
               y (range 100 1901 200)]
           (assoc (vent) :position [x y]))
         [(assoc (nursery spawner) :position [1000 1000])])))

(defn settings []
  {:screen-size 2000
   :scale 0.4
   :single-thread-mode false
   :nursery-threshold 10})

;(run-pucks (agents) (settings))