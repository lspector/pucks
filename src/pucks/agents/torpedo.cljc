;; Definitions for torpedo agents.

(ns pucks.agents.torpedo
  (:require [pucks.util :as util]
           [pucks.agents.zapper :as zapper]
  ))
  
(defn torpedo-proposals [p]
  {:rotation (util/relative-position->rotation (:velocity p))
   :transfer (into [] (for [victim (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id victim)
                         :bid {}
                         :ask {:energy 1.0}}))})

(defn torpedo []
  (merge (zapper/zapper)
         {:torpedo true
          :mobile true
          :proposal-function torpedo-proposals
          :color [200 100 0]
          :radius 8}))
