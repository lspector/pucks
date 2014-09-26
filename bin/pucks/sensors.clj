(ns pucks.sensors
  (:use [pucks globals util vec2D]))

(defn sense 
  [p]
  "Sense everything in neighborhood, in the direction puck is facing, that is
within sensor range."
  (assoc p
         :sensed 
         (filter #(and (let [angular-difference ;; in front of me
                             (Math/abs (- (:rotation p) 
                                          (direction->rotation (:position %))))]
                         (or (<= angular-difference half-pi)
                             (>= angular-difference (+ pi half-pi)))) 
                       (<= (- (length (:position %)) (:radius %)) ;; within range
                           (:sensor-range @parameters)))
                 (:neighbors p))))

(defn run-sensors
  []
  (swap! world-objects
         (fn [objs]
           (pmapallv sense objs))))