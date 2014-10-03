;; Neighbor maintenance for pucks. This is currently O(n^2) for n agents
;; in the world. Faster methods are possible and should be considered for
;; large simulations.

(ns pucks.neighbors
  (:use pucks.globals pucks.util pucks.vec2D))

(defn strip-embedded-agents
  "Strips the embedded agents, which might be in the values of :neighbors, 
:sensed, and :overlaps, from agent a. This prevents the accumulation of long
or infinite chains of recursive agent references and also prevents agents
from inappropriately learning about agents that they have not sensed directly."
  [a]
  (-> a
    (dissoc :neighbors)
    (dissoc :sensed)
    (dissoc :overlaps)))

(defn update-neighbors
  "Annotates each agent in the simulation with :neighbors and :overlaps."
  []
  (swap! 
   all-agents
   (fn [objs]
     (let [stripped (mapv strip-embedded-agents objs)]
       (pmapallv ;; do this concurrently if not in single-thread-mode
         (fn [obj]
           (if (:stone obj) ;; stones don't need neighbors
             obj
             (let [neighs 
                   (mapv #(relativize-position % (:position obj));; positions are relative to the agent
                         (filterv #(and (not (= (:id obj) (:id %)))
                                        (<= (distance (:position obj) (:position %))
                                            (:neighborhood-size @pucks-settings)))
                                  stripped))]
               (-> obj
                 (assoc :neighbors neighs)
                 (assoc :overlaps
                        (filterv #(<= (length (:position %))
                                      (+ (:radius obj) (:radius %)))
                                 neighs))))))
         stripped)))))

