;; Definitions for swarmer agents.

(ns pucks.agents.swarmer
  (:use [pucks globals util vec2D]
        pucks.agents.active))

(defn rand-direction []
  (rotation->relative-position (- (rand two-pi) pi)))

(defn swarmer-proposals [p]
  {:acceleration 1
   :rotation (relative-position->rotation 
              (+v (if (empty? (filter :mobile (:sensed p)))
                    (rotation->relative-position (:rotation p)) 
                    (apply avgv (map :velocity (filter :mobile (:sensed p)))))
                  (rand-direction)))})

(defn swarmer []
  (merge (active)
         {:swarmer true
          :proposal-function swarmer-proposals}))
