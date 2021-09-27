;; Definitions for active agents.

(ns pucks.agents.active
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))
  
(defn draw-active [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)
        [eye-r eye-g eye-b] (:eye-color p)
        [core-r core-g core-b] (:core-color p)
        core-diameter (* radius (:energy p))]
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
    ;; inventory
    (when-not (empty? (:inventory p))
      (fill 0 0 0 #_128)
      (ellipse 0 0 (* radius 0.2) (* radius 0.2)))
    ;; show sensor range, but only in forward direction
    (fill 255 255 255 20)
    (let [s (* (:sensor-range @pucks-settings) 2)]
      (arc 0 0 s s pi two-pi))
    ;; show collisions
    (when (:just-collided p)
      (fill 0 0 0 0)
      (stroke-weight 5)
      (stroke 255 0 0 196)
      (ellipse 0 0 radius radius)
      (no-stroke))
    ;; heading, relative to 12 o'clock
    (fill eye-r eye-g eye-b 196)
    (ellipse 0 (* radius -0.75) (* radius 0.5) (* radius 0.5))
    ;; memory
    (when-not (empty? (:memory p))
      (fill 0 0 0)
      (ellipse 0 (* radius -0.75) (* radius 0.2) (* radius 0.2)))
    (pop-matrix)))

(defn active []
  (merge (generic)
         {:mobile true
          :active true
          :color [128 255 0]
          :eye-color [255 255 0]
          :core-color [0 255 0]
          :draw-function draw-active}))

