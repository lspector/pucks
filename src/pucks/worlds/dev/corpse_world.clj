(ns pucks.worlds.dev.corpse-world 
  (:use [pucks core globals]
        [pucks.agents vent nursery linear corpse barbarian]))

(defn agents []
  (vec (concat 
         (for [x (range 100 1901 400)
               y (range 100 1901 400)]
           (assoc (vent) :position [x y]))
         [(assoc (nursery linear) :position [1000 1000])
          (assoc (nursery linear) :position [1100 1100])
          (assoc (nursery barbarian) :position [1000 1100])
          (assoc (nursery barbarian) :position [1100 1000])])))

(defn settings []
  {:screen-size 2000
   :scale 0.4
   :single-thread-mode false
   :nursery-threshold 10})

;(run-pucks (agents) (settings))