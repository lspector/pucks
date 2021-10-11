;; Neighbor maintenance for pucks.

(ns pucks.neighbors
  (:require [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [pucks.util :as util]
            [cljs.core :as cljs]))

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

(defn neighborhood-grid
  "Returns a neighborhood grid containing all agents."
  [agents]
  (let [grid-size (int (/ (:screen-size @globals/pucks-settings)  
                          (:neighborhood-size @globals/pucks-settings)))]
    (loop [grid (vec (repeat grid-size (vec (repeat grid-size []))))
           remaining agents]
      (if (empty? remaining)
        grid
        (recur (update-in grid 
                          (mapv #(int (/ % (:neighborhood-size @globals/pucks-settings))) 
                                (:position (first remaining)))
                          conj
                          (first remaining))
               (rest remaining))))))

(defn get-neighboring-grid-spaces
  "Returns a vector of the indices for the neighborhood grid where neighbors
could be found."
  [grid-size [x y]]
  (vec (for [dx [-1 0 1]
             dy [-1 0 1]]
         [(mod (+ x dx) grid-size)
          (mod (+ y dy) grid-size)])))

(defn get-potential-neighbors
  "Gets the potential neighbors of an agent."
  [grid a]
  (let [grid-size (count grid)]
    (apply concat
           (mapv #(get-in grid %)
                 (get-neighboring-grid-spaces
                   grid-size
                   (mapv #(int (/ % (:neighborhood-size @globals/pucks-settings))) 
                         (:position a)))))))
(defn update-neighbors
  "Annotates each agent in the simulation with :neighbors and :overlaps."
  []
  #?(:clj (swap!
            globals/all-agents
            (fn [objs]
              (let [stripped (mapv strip-embedded-agents objs)
                    grid (neighborhood-grid stripped)]
                (util/pmapallv
                  (fn [obj]
                    (if (or (:stone obj) ;; these kinds of pucks don't need neighbors
                            (:beacon obj)
                            (:nursery obj))
                      obj
                      (let [potential-neighs (get-potential-neighbors grid obj)
                            neighs (mapv #(util/relativize-position % (:position obj));; positions are relative to the agent
                                         (filterv #(and (not (= (:id obj) (:id %)))
                                                        (<= (vec2D/distance (:position obj) (:position %))
                                                            (:neighborhood-size @globals/pucks-settings)))
                                                  potential-neighs))]
                        (-> obj
                            (assoc :neighbors neighs)
                            (assoc :overlaps
                                   (filterv #(<= (vec2D/length (:position %))
                                                 (+ (:radius obj) (:radius %)))
                                            neighs))))))
                  stripped)
                )))
      :cljs (cljs/swap!
              globals/all-agents
              (fn [objs]
                (let [stripped (mapv strip-embedded-agents objs)
                      grid (neighborhood-grid stripped)]
                  (util/pmapallv
                    (fn [obj]
                      (if (or (:stone obj) ;; these kinds of pucks don't need neighbors
                              (:beacon obj)
                              (:nursery obj))
                        obj
                        (let [potential-neighs (get-potential-neighbors grid obj)
                              neighs (mapv #(util/relativize-position % (:position obj));; positions are relative to the agent
                                           (filterv #(and (not (= (:id obj) (:id %)))
                                                          (<= (vec2D/distance (:position obj) (:position %))
                                                              (:neighborhood-size @globals/pucks-settings)))
                                                    potential-neighs))]
                          (-> obj
                              (assoc :neighbors neighs)
                              (assoc :overlaps
                                     (filterv #(<= (vec2D/length (:position %))
                                                   (+ (:radius obj) (:radius %)))
                                              neighs))))))
                    stripped)
                  )))
     )
  )
