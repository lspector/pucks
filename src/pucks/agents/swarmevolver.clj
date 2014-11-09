;; Definitions for swarmevolver agents.

(ns pucks.agents.swarmevolver
  (:use [pucks globals util vec2D]
        pucks.agents.active))

(defn rand-direction []
  (rotation->direction (- (rand two-pi) pi)))

(defn swarmevolver-proposals [p]
  {:acceleration 1
   :properties {:color [(rand-int 256)(rand-int 256)(rand-int 256)]}
   :rotation (direction->rotation 
              (+v (if (empty? (filter :mobile (:sensed p)))
                    (rotation->direction (:rotation p)) 
                    (apply avgv (map :velocity (filter :mobile (:sensed p)))))
                  (rand-direction)))})

(defn swarmevolver []
  (merge (active)
         {:swarmevolver true
          :proposal-function swarmevolver-proposals}))
