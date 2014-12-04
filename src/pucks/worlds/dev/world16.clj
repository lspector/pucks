
(ns pucks.worlds.dev.world16
  (:use [pucks core globals util vec2D]
        [pucks.agents beacon active vent mapdonor]))

(defn rand+-
  "Returns a positive or negative random number with magnitude less than n."
  [n]
  (- (rand (* 2 n)) n))

(defn agents []
  (concat
    ;; beacons
    (for [x (range 50 751 100)
          y (range 50 751 100)]
      (merge (beacon) {:position [x y]
                       :id [x y]
                       :radius 70}))
    ;; vent
    [(merge (vent) {:position [700 400]})]
    ;; a single map donor, headed down
    [(merge (mapdonor)
            {:position [200 200]
             :velocity [0 2]})]
    ;; a single map user, headed up
    [(merge (active)
            {:proposal-function 
             (fn [p]
               {:acceleration 1
                :rotation (let [the-map (:map (:memory p))
                                vent-on-map (first (filter :vent the-map))
                                sensed-beacon (first (filter :beacon (:sensed p)))
                                sensed-vent (first (filter :vent (:sensed p)))]
                            (if sensed-vent
                              (relative-position->rotation (:position sensed-vent))
                              (if (and the-map vent-on-map sensed-beacon)
                                (relative-position->rotation (-v (:position vent-on-map)
                                                                 (:id sensed-beacon)))
                                (relative-position->rotation (:velocity p)))))})
             :position [200 600]
             :rotation 0
             :velocity [0 -2]})]))
    
(defn settings []
  {})

;(run-pucks (agents) (settings))
