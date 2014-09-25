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

(defn vent-proposals [p]
  {:transfer (into [] (for [recipient (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         ;:full-self p
                         :self-types (:agent-types p)
                         :other (:id recipient)
                         ;:full-other recipient
                         :other-types (:agent-types recipient)
                         :bid {:energy 0.01}
                         :ask {}}))})

(defn vent []
  (merge-agents (generic)
         {:agent-types #{:vent}
          :radius 50
          :draw-functions [draw-vent]
          :energy 1
          :proposal-function vent-proposals}))
