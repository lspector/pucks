
;; Definitions for shooter agents.

(ns pucks.agents.shooter
  (:use [pucks globals util]
        [pucks.agents active]))
  
(defn shooter-proposals [p]
  {:acceleration 0
   :rotation (direction->rotation (:velocity p))
   :fire-torpedo (zero? (rand-int 20))})

(defn shooter []
  (merge (active)
         {:linear true
          :proposal-function shooter-proposals
          :color [255 0 0]}))

