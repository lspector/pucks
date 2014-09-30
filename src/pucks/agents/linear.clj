;; Definitions for linear agents.

(ns pucks.agents.linear
  (:use [pucks globals util]
        [pucks.agents active]))
  
(defn linear-proposals [p]
  {:acceleration 0
   :rotation (direction->rotation (:velocity p))})

(defn linear []
  (merge (active)
         {:linear true
          :proposal-function linear-proposals
          :color [0 0 255]}))

