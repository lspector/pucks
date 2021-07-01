;; Definitions for active agents.

(ns pucks.agents.active
  (:require [quil.core :as q]
            [pucks.globals :as globals]
            [pucks.agents.generic :as generic]
  ))
  
(defn draw-active [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        [eye-r eye-g eye-b] (:eye-color p)
        [core-r core-g core-b] (:core-color p)
        core-diameter (* radius (:energy p))]
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
    ;; inventory
    (when-not (empty? (:inventory p))
      (q/fill 0 0 0 #_128)
      (q/ellipse 0 0 (* radius 0.2) (* radius 0.2)))
    ;; show sensor range, but only in forward direction
    (q/fill 255 255 255 20)
    (let [s (* (:sensor-range @globals/pucks-settings) 2)]
      (q/arc 0 0 s s globals/pi globals/two-pi))
    ;; show collisions
    (when (:just-collided p)
      (q/fill 0 0 0 0)
      (q/stroke-weight 5)
      (q/stroke 255 0 0 196)
      (q/ellipse 0 0 radius radius)
      (q/no-stroke))
    ;; heading, relative to 12 o'clock
    (q/fill eye-r eye-g eye-b 196)
    (q/ellipse 0 (* radius -0.75) (* radius 0.5) (* radius 0.5))
    ;; memory
    (when-not (empty? (:memory p))
      (q/fill 0 0 0)
      (q/ellipse 0 (* radius -0.75) (* radius 0.2) (* radius 0.2)))
    (q/pop-matrix)))

(defn active []
  (merge (generic/generic)
         {:mobile true
          :active true
          :color [128 255 0]
          :eye-color [255 255 0]
          :core-color [0 255 0]
          :draw-function draw-active}))

