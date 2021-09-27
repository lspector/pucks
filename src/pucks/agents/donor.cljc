(ns pucks.agents.donor
  (:require [pucks.util :as util]
            [pucks.agents.active :as active]))

(defn donor-proposals [p item]
  {:rotation (util/relative-position->rotation (:velocity p))
   :transfer (into [] (for [recipient (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id recipient)
                         :bid {:inventory item}
                         :ask {}}))})

(defn donor [item]
  (merge (active/active)
         {:donor true
          :inventory [item]
          :proposal-function #(donor-proposals % item)
          :color [255 0 0]}))