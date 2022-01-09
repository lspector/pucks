
;; Definitions for gates.

(ns pucks.agents.gate
  (:require [pucks.util :as util]
            [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [quil.core :as q]
            [pucks.agents.generic :as generic]))


(defn draw-gate [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        half-radius (/ radius 2)]
    (q/push-matrix)
    (q/translate x y)
    ;; core
    (q/fill r g b 16)
    (q/stroke-weight 5)
    (when-not (pos? (:open (:memory p)))
      (q/stroke r g b 255))
    (q/ellipse 0 0 radius radius)
    (q/no-stroke)
    (q/push-matrix)
    (q/rotate (/ @globals/iteration globals/two-pi))
    (q/stroke-weight 5)
    (q/stroke r g b 64)
    (q/line (- half-radius) 0 half-radius 0)
    (q/line 0 half-radius 0 (- half-radius))
    (q/no-stroke)
    (q/pop-matrix)
    ;; inventory
    (when-not (empty? (:inventory p))
      (q/fill 0 0 0)
      (q/ellipse 0 0 (* radius 0.2) (* radius 0.2)))
    ;; membrane
    (q/fill r g b 16)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    (q/pop-matrix)))

(defn gate-proposals [p]
 {:transfer (into [] (for [other (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id other)
                         :bid {:promise {:open 100}}
                         :ask {:inventory :key}}))
  :memory {:open (dec (:open (:memory p)))}
  :properties {:solid (not (pos? (:open (:memory p))))}})

(defn gate []
  (merge (generic/generic)
         {:gate true
          :memory {:open 0} ;; initially closed
          :radius 40
          :color [0 0 0]
          :draw-function draw-gate
          :proposal-function gate-proposals}))

