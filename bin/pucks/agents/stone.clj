;; Definitions for stones.

(ns pucks.agents.stone
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-stone [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (push-matrix)
    (translate x y)
    ;; core
    (fill r g b 128) 
    (ellipse 0 0 radius radius)
    ;; membrane
    (fill r g b 16)
    (ellipse 0 0 (* radius 2) (* radius 2))
    (pop-matrix)))

(defn stone-proposals [p]
  {})

(defn stone []
  (merge (generic)
         {:stone true
          :radius 40
          :color [0 0 0]
          :draw-function draw-stone
          :proposal-function stone-proposals}))

