(ns pucks.worlds.dev.world21
  (:require [pucks.agents.spanner :as spanner]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]))

(defn agents []
  [(assoc (vent/vent) :position [100 100])
   (assoc (vent/vent) :position [100 300])
   (assoc (vent/vent) :position [300 100])
   (assoc (vent/vent) :position [300 300])
   (assoc (nursery/nursery spanner/spanner) :position [200 200])])

(defn agents []
  (vec (concat 
         (for [x (range 100 600 200)
               y (range 100 600 200)]
           (assoc (vent/vent) :position [x y]))
         [(assoc (nursery/nursery spanner/spanner) :position [200 200])])))

(defn settings []
  {:screen-size 400
   :scale 1.5
   :single-thread-mode false
   :nursery-threshold 25
   :neighborhood-size 150
   :max-velocity 40
   :cost-of-living 0.0001
   :cost-of-collision 0.01})

;(run-pucks (agents) (settings))