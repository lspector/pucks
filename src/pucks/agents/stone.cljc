;; Definitions for stones.

(ns pucks.agents.stone
  (:require [quil.core :as q]
            [pucks.agents.generic :as generic]))

(defn draw-stone [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (q/push-matrix)
    (q/translate x y)
    ;; core
    (q/fill r g b 128)
    (q/ellipse 0 0 radius radius)
    ;; membrane
    (q/fill r g b 16)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    (q/pop-matrix)))

(defn stone-proposals [p]
  {})

(defn stone []
  (merge (generic/generic)
         {:stone true
          :radius 40
          :color [0 0 0]
          :draw-function draw-stone
          :proposal-function stone-proposals}))

