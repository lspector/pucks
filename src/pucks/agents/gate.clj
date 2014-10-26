
;; Definitions for gates.

(ns pucks.agents.gate
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-gate [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        half-radius (/ radius 2)]
    (push-matrix)
    (translate x y)
    ;; core
    (fill r g b 16)
    (stroke-weight 5)
    (when-not (pos? (:open (:memory p)))
      (stroke r g b 255))
    (ellipse 0 0 radius radius)
    (no-stroke)
    (push-matrix)
    (rotate (/ @iteration two-pi))
    (stroke-weight 5)
    (stroke r g b 64)
    (line (- half-radius) 0 half-radius 0)
    (line 0 half-radius 0 (- half-radius))
    (no-stroke)
    (pop-matrix)
    ;; inventory
    (when-not (empty? (:inventory p))
      (fill 0 0 0)
      (ellipse 0 0 (* radius 0.2) (* radius 0.2)))
    ;; membrane
    (fill r g b 16)
    (ellipse 0 0 (* radius 2) (* radius 2))
    (pop-matrix)))

(defn gate-proposals [p]
 {:transfer (into [] (for [other (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id other)
                         :bid {:promise {:open 100}}
                         :ask {:inventory :key}}))
  :memory {:open (dec (:open (:memory p)))}
  :properties {:solid (not (pos? (:open (:memory p))))}})

(defn gate []
  (merge (generic)
         {:gate true
          :memory {:open 0} ;; initially closed
          :radius 40
          :color [0 0 0]
          :draw-function draw-gate
          :proposal-function gate-proposals}))

