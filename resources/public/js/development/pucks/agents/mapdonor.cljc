(ns pucks.agents.mapdonor
  (:require [pucks.util :as util]
            [pucks.globals :as globals]
            [pucks.agents.active :as active]))


(defn mapdonor-proposals [p]
  (merge {:rotation (util/relative-position->rotation (:velocity p))}
         {:transfer (vec (for [recipient (filter :mobile (:overlaps p))]
                           {:self (:id p)
                            :other (:id recipient)
                            :bid {:memory {:map (:map (:memory p))}}
                            :ask {}}))}
         {:memory {:map (let [unmapped [:neighbors :overlaps :sensed 
                                        :inventory :memory :draw-function 
                                        :proposals :proposal-function :spawn-function]]
                          (mapv #(apply dissoc (cons % unmapped)) @globals/all-agents))}}))

(defn mapdonor []
  (merge (active/active)
         {:mapdonor true
          :proposal-function mapdonor-proposals
          :color [255 96 255]
          :core-color [255 96 255]}))
