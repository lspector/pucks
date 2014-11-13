;; Definitions for nursery agents.

(ns pucks.agents.nursery
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-nursery [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (push-matrix)
    (translate x y)
    (rotate (:rotation p))
    ;; membrane
    (fill r g b 100)
    (ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (ellipse 0 0 radius radius)
    (fill 32 32 32 196)
    (when (>= @number-of-active-agents (:nursery-threshold @pucks-settings))
      (ellipse 0 0 (* 0.8 radius) (* 0.8 radius)))
    (pop-matrix)))

(defn nursery-proposals [p]
  (if (and (< @number-of-active-agents (:nursery-threshold @pucks-settings))
           (zero? (rand-int 50)))
    {:spawn [(assoc ((:spawn-function p))
                    ;; position will be relative to position of parent
                    :position [(- (rand-int 3) 1) (- (rand-int 3) 1)])]}
    {}))

;; The nursery function, which creates a nursery agent, must be called with 
;; a spawn function argument, which will be called to produce child agents.

(defn nursery [spawn-function]
  (merge (generic)
         {:nursery true
          :radius 50
          :draw-function draw-nursery
          :color [139 0 0]
          :proposal-function nursery-proposals
          :spawn-function spawn-function}))
