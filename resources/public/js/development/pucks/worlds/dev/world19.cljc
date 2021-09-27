(ns pucks.worlds.dev.world19
  (:require [pucks.agents.active :as active]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]
            [pucks.vec2D :as vec2D]
            [pucks.util :as util]
            [pucks.globals :as globals]))

(defn agents []
  [(vent/vent)
   (vent/vent)
   (vent/vent)
   (vent/vent)
   (vent/vent)
   (nursery/nursery (fn []
              (merge (active/active)
                     {:rotation (rand globals/two-pi)
                      :velocity [(- (rand 4.0) 2.0) (- (rand 4.0) 2.0)]
                      :proposal-function 
                      (fn [p]
                        {:acceleration (- (rand 0.2) 0.1)
                         :rotation (util/relative-position->rotation
                                     (vec2D/+v [(- (rand 0.2) 0.1) (- (rand 0.2) 0.1)]
                                         (util/rotation->relative-position (:rotation p))))
                         :transfer (concat (for [anyone (:overlaps p)]
                                             {:self (:id p)
                                              :other (:id anyone)
                                              :bid {:bound-to (:id p)}
                                              :ask {:bound-to (:id anyone)}})
                                           (for [weaker (filter #(< (:energy %)
                                                                    (:energy p))
                                                                (filter :mobile (:overlaps p)))]
                                             {:self (:id p)
                                              :other (:id weaker)
                                              :bid {:energy 0.01}
                                              :ask {}}))})})))])
   
(defn settings []
  {})

;(run-pucks (agents) (settings)) 