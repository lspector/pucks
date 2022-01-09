
(ns pucks.worlds.dev.world16
  (:require [pucks.agents.beacon :as beacon]
            [pucks.agents.vent :as vent]
            [pucks.agents.active :as active]
            [pucks.agents.mapdonor :as mapdonor]
            [pucks.vec2D :as vec2D]
            [pucks.util :as util]))

(defn rand+-
  "Returns a positive or negative random number with magnitude less than n."
  [n]
  (- (rand (* 2 n)) n))

(defn agents []
  (concat
    ;; beacons
    (for [x (range 50 751 100)
          y (range 50 751 100)]
      (merge (beacon/beacon) {:position [x y]
                       :id [x y]
                       :radius 70}))
    ;; vent
    [(merge (vent/vent) {:position [700 400]})]
    ;; a single map donor, headed down
    [(merge (mapdonor/mapdonor)
            {:position [200 200]
             :velocity [0 2]})]
    ;; a single map user, headed up
    [(merge (active/active)
            {:proposal-function 
             (fn [p]
               {:acceleration 1
                :rotation (let [the-map (:map (:memory p))
                                vent-on-map (first (filter :vent the-map))
                                sensed-beacon (first (filter :beacon (:sensed p)))
                                sensed-vent (first (filter :vent (:sensed p)))]
                            (if sensed-vent
                              (util/relative-position->rotation (:position sensed-vent))
                              (if (and the-map vent-on-map sensed-beacon)
                                (util/relative-position->rotation (vec2D/-v (:position vent-on-map)
                                                                 (:id sensed-beacon)))
                                (util/relative-position->rotation (:velocity p)))))})
             :position [200 600]
             :rotation 0
             :velocity [0 -2]})]))
    
(defn settings []
  {})

;(run-pucks (agents) (settings))
