;; Definitions for swarmer agents.

(ns pucks.agents.swarmer
  (:require [pucks.util :as util]
           [pucks.globals :as globals]
           [pucks.vec2D :as vec2D]
           [pucks.agents.active :as active]))


(defn rand-direction []
  (util/rotation->relative-position (- (rand globals/two-pi) globals/pi)))

(defn swarmer-proposals [p]
  {:acceleration 1
   :rotation (util/relative-position->rotation
              (vec2D/+v (if (empty? (filter :mobile (:sensed p)))
                    (util/rotation->relative-position (:rotation p))
                    (apply vec2D/avgv (map :velocity (filter :mobile (:sensed p)))))
                  (rand-direction)))})

(defn swarmer []
  (merge (active/active)
         {:swarmer true
          :proposal-function swarmer-proposals}))
