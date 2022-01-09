;; Definitions for vent agents.

(ns pucks.agents.vent
  (:require [quil.core :as q]
            [pucks.agents.generic :as generic]))

(defn draw-vent [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        [core-r core-g core-b] [238 118 0]
        core-diameter (int (* (float radius) (:energy p)))]
    (q/push-matrix)
    (q/translate x y)
    (q/rotate (:rotation p))
    ;; membrane
    (q/fill r g b 100)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (q/fill 255 255 255)
    (q/ellipse 0 0 radius radius)
    (q/fill core-r core-g core-b 196)
    (q/ellipse 0 0 core-diameter core-diameter)
    (q/pop-matrix)))

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
  (merge (generic/generic)
         {:vent true
          :radius 50
          :draw-function draw-vent
          :proposal-function vent-proposals}))
