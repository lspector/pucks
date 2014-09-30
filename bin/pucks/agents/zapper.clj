;; Definitions for zapper agents.

(ns pucks.agents.zapper
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-zapper [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (push-matrix)
    (translate x y)
    ;; membrane
    (fill r g b 100)
    (ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (fill r g b)
    (ellipse 0 0 radius radius)
    (pop-matrix)))

;; Take energy from any overlapping mobile agent, without giving anything in
;; return.

(defn zapper-proposals [p]
  {:transfer (into [] (for [victim (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id victim)
                         :bid {}
                         :ask {:energy 0.1}}))})

(defn zapper []
  (merge (generic)
         {:zapper true
          :radius 50
          :color [207 19 200]
          :draw-function draw-zapper
          :proposal-function zapper-proposals}))