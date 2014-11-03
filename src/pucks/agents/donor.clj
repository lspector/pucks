(ns pucks.agents.donor  
  (:use quil.core
        [pucks globals util vec2D]
        [pucks.agents active]))

(defn donor-proposals [p item]
  {:rotation (direction->rotation (:velocity p))
   :transfer (into [] (for [recipient (filter :mobile (:overlaps p))]
                        {:self (:id p)
                        :other (:id recipient)
                        :bid {:inventory item}
                        :ask {}}))})

(defn donor [item]
  (merge (active)
         {:donor true
          :inventory [item]
          :proposal-function #(donor-proposals % item)
          :color [255 0 0]}))