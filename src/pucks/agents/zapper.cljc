;; Definitions for zapper agents.

(ns pucks.agents.zapper
  (:require [quil.core :as q]
            [pucks.agents.generic :as generic]))

(defn draw-zapper [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (q/push-matrix)
    (q/translate x y)
    ;; membrane
    (q/fill r g b 100)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (q/fill r g b)
    (q/ellipse 0 0 radius radius)
    (q/pop-matrix)))

;; Take energy from any overlapping mobile agent, without giving anything in
;; return.

(defn zapper-proposals [p]
  {:transfer (into [] (for [victim (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id victim)
                         :bid {}
                         :ask {:energy 0.1}}))})

(defn zapper []
  (merge (generic/generic)
         {:zapper true
          :radius 50
          :color [207 19 200]
          :draw-function draw-zapper
          :proposal-function zapper-proposals}))