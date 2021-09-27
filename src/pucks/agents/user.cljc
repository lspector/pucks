;; Definition for user agents. This is a good template to build on to produce
;; smarter agents.

(ns pucks.agents.user
  (:require [pucks.util :as util]
            [pucks.agents.active :as active]))

(defn user-proposals [p]
  {:acceleration 0
   :rotation (util/relative-position->rotation (:velocity p))})

(defn user []
  (merge (active/active)
         {:user true
          :proposal-function user-proposals}))
