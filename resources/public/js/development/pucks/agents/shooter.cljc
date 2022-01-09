
;; Definitions for shooter agents.

(ns pucks.agents.shooter
  (:require [pucks.util :as util]
            [pucks.agents.active :as active]))

  
(defn shooter-proposals [p]
  {:acceleration 0
   :rotation (util/relative-position->rotation (:velocity p))
   :fire-torpedo (zero? (rand-int 20))})

(defn shooter []
  (merge (active/active)
         {:linear true
          :proposal-function shooter-proposals
          :color [255 0 0]}))
