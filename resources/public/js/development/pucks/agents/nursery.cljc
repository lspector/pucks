; Definitions for nursery agents.

(ns pucks.agents.nursery
  (:require [pucks.globals :as globals]
            [quil.core :as q]
            [pucks.agents.generic :as generic]))



(defn draw-nursery [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (q/push-matrix)
    (q/translate x y)
    (q/rotate (:rotation p))
    ;; membrane
    (q/fill r g b 100)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (q/ellipse 0 0 radius radius)
    (q/fill 32 32 32 196)
    (when (>= @globals/number-of-active-agents (:nursery-threshold @globals/pucks-settings))
      (q/ellipse 0 0 (* 0.8 radius) (* 0.8 radius)))
    (q/pop-matrix)))

(defn nursery-proposals [p]
  (if (and (< @globals/number-of-active-agents (:nursery-threshold @globals/pucks-settings))
           (zero? (rand-int 50)))
    {:spawn [(assoc ((:spawn-function p))
                    ;; position will be relative to position of parent
                    :position [(- (rand-int 3) 1) (- (rand-int 3) 1)])]}
    {}))

;; The nursery function, which creates a nursery agent, must be called with 
;; a spawn function argument, which will be called to produce child agents.

(defn nursery [spawn-function]
  (merge (generic/generic)
         {:nursery true
          :radius 50
          :draw-function draw-nursery
          :color [139 0 0]
          :proposal-function nursery-proposals
          :spawn-function spawn-function}))
