(ns pucks.agents.barbarian
    (:use [pucks globals util vec2D]
        pucks.agents.active pucks.agents.swarmer))

(defn barbarianr-proposals [p]
  {:acceleration 1
   :rotation (relative-position->rotation 
              (+v (if (empty? (filter (fn [other] (and
                                                    (:active other)
                                                    (not (:barbarian other)))) 
                                      (:sensed p)))
                    (rotation->relative-position (:rotation p)) 
                    (apply avgv (map :velocity (filter (fn [other] (and
                                                                     (:active other)
                                                                     (not (:barbarian other))))
                                                       (:sensed p)))))
                  (rand-direction)))
   :transfer (into [] (for [victim (filter :mobile (:overlaps p))]
                        {:self (:id p)
                         :other (:id victim)
                         :bid {:energy 0.0}
                         :ask {:energy 0.1}
                         :wound {:energy 0.05}}))})

(defn barbarian []
  (merge (active)
         {:barbarian true
          :proposal-function barbarianr-proposals
         :color [255 0 0]}))