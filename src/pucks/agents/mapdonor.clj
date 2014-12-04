(ns pucks.agents.mapdonor
  (:use quil.core
        [pucks globals util vec2D]
        [pucks.agents active]))

(defn mapdonor-proposals [p]
  (merge {:rotation (relative-position->rotation (:velocity p))}
         {:transfer (vec (for [recipient (filter :mobile (:overlaps p))]
                           {:self (:id p)
                            :other (:id recipient)
                            :bid {:memory {:map (:map (:memory p))}}
                            :ask {}}))}
         {:memory {:map (let [unmapped [:neighbors :overlaps :sensed 
                                        :inventory :memory :draw-function 
                                        :proposals :proposal-function :spawn-function]]
                          (mapv #(apply dissoc (cons % unmapped)) @all-agents))}}))

(defn mapdonor []
  (merge (active)
         {:mapdonor true
          :proposal-function mapdonor-proposals
          :color [255 96 255]
          :core-color [255 96 255]}))
