;; Definitions for linear agents.

(ns pucks.agents.linear
  (:require [pucks.util :as util]
            [pucks.agents.active :as active]))
  
(defn linear-proposals [p]
  {:acceleration 0
   :rotation (util/relative-position->rotation (:velocity p))})

(defn linear []
  (merge (active/active)
         {:linear true
          :proposal-function linear-proposals
          :color [0 0 255]}))

