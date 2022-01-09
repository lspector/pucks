(ns pucks.worlds.dev.world14
  (:require [pucks.agents.spawner :as spawner]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]))

(defn agents []
  (vec (concat 
         (for [x (range 100 1901 200)
               y (range 100 1901 200)]
           (assoc (vent/vent) :position [x y]))
         [(assoc (nursery/nursery spawner/spawner) :position [1000 1000])])))

(defn settings []
  {:screen-size 2000
   :scale 0.4
   :single-thread-mode false
   :nursery-threshold 10})

;(run-pucks (agents) (settings))