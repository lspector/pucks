(ns pucks.worlds.dev.world15
  (:require [pucks.agents.swarmevolver :as swarmevolver]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]))

(defn agents []
  (vec (concat 
         (for [x (range 100 1200 200)
               y (range 100 1200 200)]
           (assoc (vent/vent) :position [x y]))
         [(assoc (zapper/zapper) :position [600 450])
          (assoc (zapper/zapper) :position [450 600])
          (assoc (zapper/zapper) :position [750 600])
          (assoc (zapper/zapper) :position [600 750])]
         [(assoc (nursery/nursery swarmevolver/swarmevolver) :position [600 600])])))

(defn settings []
  {:screen-size 1200
   :scale 0.6
   :single-thread-mode false
   :nursery-threshold 5
   :max-velocity 40
   :torpedo-energy 0.02})

;(run-pucks (agents) (settings))