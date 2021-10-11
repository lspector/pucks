;; Sensor functions for pucks.

(ns pucks.sensors
  (:use [pucks globals util vec2D]))

(defn sense 
  [p]
  "Sense everything in neighborhood, in the direction puck is facing, that is
within sensor range."
  (assoc p
         :sensed 
         (mapv #(-> % ;; strip features that can't be sensed
                  (assoc :neighbors [])
                  (assoc :overlaps [])
                  (assoc :memory {})
                  (assoc :inventory []))
               (filterv #(and (let [angular-difference ;; in front of me
                                    (Math/abs (- (:rotation p) 
                                                 (relative-position->rotation (:position %))))]
                                (or (<= angular-difference half-pi)
                                    (>= angular-difference (+ pi half-pi)))) 
                              (<= (- (length (:position %)) (:radius %)) ;; within range
                                  (:sensor-range @pucks-settings)))
                       (:neighbors p)))))

(defn run-sensors
  "Annotates all agents with the other agents that they can sense, as the value
   for the :sensed key."
  []
  (swap! all-agents
         (fn [objs]
           (pmapallv sense objs))))