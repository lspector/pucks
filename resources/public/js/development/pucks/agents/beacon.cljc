;; Definitions for beacon agents.

(ns pucks.agents.beacon
  (:require [pucks.util :as util]
            [pucks.globals :as globals]
            [quil.core :as q]
            [pucks.agents.generic :as generic]))

(defn draw-beacon [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (q/push-matrix)
    (q/translate x y)
    ;; membrane
    (q/fill r g b 32)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (q/ellipse 0 0 radius radius)
    (q/fill 0 0 0)
    (q/text-align :center)
    (q/text (str (:id p)) 0 0)
    (q/pop-matrix)))

(defn beacon-proposals [p]
  {})

;; Beacons are defined to be the maximal size compatible with the provided
;; sensor range and neighborhood size:
;; 
;; beacon-radius + sensor-range = neighborhood-size
;; => beacon-radius = neighborhood-size - sensor-range

(defn beacon []
  (merge (generic/generic)
         {:beacon true
          :solid false
          :color [255 255 128]
          :radius (- (:neighborhood-size @globals/pucks-settings)
                     (:sensor-range @globals/pucks-settings))
          :draw-function draw-beacon
          :proposal-function beacon-proposals
          :id (gensym "beacon-")
          :position (util/rand-xy)}))