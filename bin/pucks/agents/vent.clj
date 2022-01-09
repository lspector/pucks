;; Definitions for vent agents.

(ns pucks.agents.vent
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-vent [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        [core-r core-g core-b] [238 118 0]
        core-diameter (int (* (float radius) (:energy p)))]
    (push-matrix)
    (translate x y)
    (rotate (:rotation p))
    ;; membrane
    (fill r g b 100)
    (ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (fill 255 255 255)
    (ellipse 0 0 radius radius)
    (fill core-r core-g core-b 196) 
    (ellipse 0 0 core-diameter core-diameter)
    (pop-matrix)))

;; Give energy to any overlapping mobile agent, asking nothing in return.

(defn vent-proposals [p]
  {:transfer (into [] (for [recipient (filter (complement :torpedo)
                                              (filter (complement :stone)
                                                      (filter :mobile (:overlaps p))))]
                        {:self (:id p)
                         :other (:id recipient)
                         :bid {:energy 0.01}
                         :ask {}}))})

(defn vent []
  (merge (generic)
         {:vent true
          :radius 50
          :draw-function draw-vent
          :proposal-function vent-proposals}))
