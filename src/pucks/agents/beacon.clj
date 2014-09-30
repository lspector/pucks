;; Definitions for beacon agents.

(ns pucks.agents.beacon
    (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-beacon [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (push-matrix)
    (translate x y)
    ;; membrane
    (fill r g b 32)
    (ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (ellipse 0 0 radius radius)
    (fill 0 0 0)
    (text-align :center)
    (text (str (:id p)) 0 0)
    (pop-matrix)))

(defn beacon-proposals [p]
  {})

;; Beacons are defined to be the maximal size compatible with the provided
;; sensor range and neighborhood size:
;; 
;; beacon-radius + sensor-range = neighborhood-size
;; => beacon-radius = neighborhood-size - sensor-range

(defn beacon []
  (merge (generic)
         {:beacon true
          :solid false
          :color [255 255 128]
          :radius (- (:neighborhood-size @pucks-settings) 
                     (:sensor-range @pucks-settings))
          :draw-function draw-beacon
          :proposal-function beacon-proposals
          :id (gensym "beacon-")
          :position (rand-xy)}))