(ns pucks.agents.user  
  (:use [pucks globals util]
        [pucks.agents active]))

(defn user-proposals [p]
  {:acceleration 0
   :rotation (direction->rotation (:velocity p))})

(defn user []
  (merge-agents (active)
                {:proposal-function user-proposals}))