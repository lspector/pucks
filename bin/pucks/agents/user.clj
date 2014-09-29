(ns pucks.agents.user  
  (:use [pucks globals util]
        [pucks.agents active]))

(defn user-proposals [p]
  {:acceleration 0
  ; :rotation (direction->rotation (:velocity p))
  }
  )

(defn user []
  (merge (active)
         {:user true
          :proposal-function user-proposals
          :rotation (/ pi 3/2)
          :velocity [0 0]}))