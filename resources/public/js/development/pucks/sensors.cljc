;; Sensor functions for pucks.

(ns pucks.sensors
  (:require [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [pucks.util :as util]))

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
                                                 (util/relative-position->rotation (:position %))))]
                                (or (<= angular-difference globals/half-pi)
                                    (>= angular-difference (+ globals/pi globals/half-pi))))
                              (<= (- (vec2D/length (:position %)) (:radius %)) ;; within range
                                  (:sensor-range @globals/pucks-settings)))
                       (:neighbors p)))))

(defn run-sensors
  "Annotates all agents with the other agents that they can sense, as the value
   for the :sensed key."
  []
  (swap! globals/all-agents
         (fn [objs]
           (util/pmapallv sense objs))))