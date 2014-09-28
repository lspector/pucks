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
    (pop-matrix)))

(defn nursery-proposals [p]
  (if (zero? (rand-int 50))
    {:spawn [(assoc ((:spawn-function p))
                    :position [(+ (first (:position p)) (- (rand-int 3) 1))
                               (+ (second (:position p)) (- (rand-int 3) 1))])]}
    {}))

(defn nursery [spawn-function]
  (merge (generic)
         {:nursery true
          :radius 50
          :draw-function draw-nursery
          :energy 1
          :color [139 0 0]
          :proposal-function nursery-proposals
          :spawn-function spawn-function}))
