;; Definition for user agents. This is a good template to build on to produce
;; smarter agents.

(ns pucks.agents.user  
  (:use [pucks globals util]
        [pucks.agents active]))

(defn user-proposals [p]
  {:acceleration 0
   :rotation (relative-position->rotation (:velocity p))})

(defn user []
  (merge (active)
         {:user true
          :proposal-function user-proposals}))
