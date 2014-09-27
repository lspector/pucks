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

(defn zapper-proposals [p]
  {:transfer (into [] (for [victim (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :self-types (:agent-types p)
                         :other (:id victim)
                         :other-types (:agent-types victim)
                         :bid {}
                         :ask {:energy 0.1}}))})

(defn zapper []
  (merge-agents (generic)
                {:zapper true
                 :radius 50
                 :color [207 19 200]
                 :draw-functions [draw-zapper]
                 :energy 1
                 :proposal-function zapper-proposals}))