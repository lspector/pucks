(ns pucks.worlds.dev.world20
  (:require [pucks.agents.bondevolver :as bondevolver]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]))

(defn agents []
  (vec (concat 
         (for [x (range 100 1200 200)
               y (range 100 1200 200)]
           (assoc (vent/vent) :position [x y]))
         [(assoc (nursery/nursery bondevolver/bondevolver) :position [600 600])])))

(defn settings []
  {:screen-size 1200
   :scale 0.6
   :single-thread-mode false
   :nursery-threshold 5
   :max-velocity 40})

;(run-pucks (agents) (settings))