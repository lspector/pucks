(ns pucks.agents.linear
  (:use [pucks globals util]
        [pucks.agents active]))
  
(defn linear-proposals [p]
  {:acceleration 0
   :rotation (direction->rotation (:velocity p))})

(defn linear []
  (merge-agents (active)
                {:agent-types #{:linear}
                 :proposal-function linear-proposals
                 :color [0 0 255]}))

