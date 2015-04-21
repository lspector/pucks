;; Definitions for active agent corpse.

(ns pucks.agents.corpse
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-corpse [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        [core-r core-g core-b] [78 18 50]
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

(defn corpse-proposals [p]
  {:transfer (into [] (for [recipient (filter (complement :torpedo)
                                              (filter :mobile (:overlaps p)))]
                        {:self (:id p)
                         :other (:id recipient)
                         :bid {:energy 0.01}
                         :ask {}}))})

(defn corpse [energy-left]
  (merge (generic)
         {:corpse true
          :radius 50
          :energy energy-left
          :draw-function draw-corpse
          :proposal-function corpse-proposals}))
