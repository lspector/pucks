
;; Definitions for gates.

(ns pucks.agents.gate
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-gate [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (push-matrix)
    (translate x y)
    ;; core
    (fill r g b 
          (if (pos? (:close-in (:memory p)))
            16
            (+ 64 (* 128 (/ (+ 1 (Math/sin (/ @iteration two-pi))) 2)))))
    (ellipse 0 0 radius radius)
    ;; membrane
    (fill r g b 
          (if (pos? (:close-in (:memory p)))
            (+ 16 (* 32 (/ (+ 1 (Math/sin (/ @iteration two-pi))) 2)))
            16))
    (ellipse 0 0 (* radius 2) (* radius 2))
    (pop-matrix)))

(defn gate-proposals [p]
 {:transfer (into [] (for [other (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id other)
                         :bid {:memory {:close-in 100}}
                         :ask {:inventory :key}}))
  :memory {:close-in (dec (:close-in (:memory p)))}})

(defn gate []
  (merge (generic)
         {:gate true
          :memory {:close-in 200}
          :radius 40
          :color [0 0 0]
          :draw-function draw-gate
          :proposal-function gate-proposals}))

