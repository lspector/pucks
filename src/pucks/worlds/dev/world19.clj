(ns pucks.worlds.dev.world19
  (:use [pucks core globals util vec2D]
        [pucks.agents vent nursery active]))

(defn agents []
  [(vent)
   (vent)
   (vent)
   (vent)
   (vent)
   (nursery (fn []
              (merge (active)
                     {:rotation (rand two-pi)
                      :velocity [(- (rand 4.0) 2.0) (- (rand 4.0) 2.0)]
                      :proposal-function 
                      (fn [p]
                        {:acceleration (- (rand 0.2) 0.1)
                         :rotation (relative-position->rotation
                                     (+v [(- (rand 0.2) 0.1) (- (rand 0.2) 0.1)]
                                         (rotation->relative-position (:rotation p)) 
                                         #_(if (empty? (filter :vent (:sensed p)))
                                            (rotation->relative-position (:rotation p)) 
                                            (:position (first (filter :vent (:sensed p)))))
                                         ))
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

;(wrap-rotation (+ (:rotation p) (- (rand 0.2) 0.1)))
   
(defn settings []
  {})

;(run-pucks (agents) (settings)) 