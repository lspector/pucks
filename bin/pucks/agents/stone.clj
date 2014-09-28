(ns pucks.agents.stone
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-stone [p]
  (let [[x y] (:position p)
        radius (:radius p)]
    (push-matrix)
    (translate x y)
    ;; core
    (fill 0 0 0 128) 
    (ellipse 0 0 radius radius)
    ;; membrane
    (fill 0 0 0 16)
    (ellipse 0 0 (* radius 2) (* radius 2))
    (pop-matrix)))

(defn stone-proposals [p]
  {})

(defn stone []
  (merge (generic)
         {:stone true
          :radius 40
          :draw-functions [draw-stone]
          :proposal-function stone-proposals}))

