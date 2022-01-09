(ns pucks.worlds.dev.world24
  (:require [pucks.agents.vent :as vent]
            [pucks.agents.pushed :as pushed]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.parasite :as parasite]
            [pucks.agents.stone :as stone]
            [pucks.agents.gate :as gate]))
(defn rand+-
  "Returns a positive or negative random number with magnitude less than n."
  [n]
  (- (rand (* 2 n)) n))

(defn ventbox
  "Returns a sequence of pucks that form a box of stones with a vent in the
   middle and a gate on each side."
  [[center-x center-y]]
  (concat
    ;; stones
    [(merge (stone/stone) {:position [(- center-x 50)(- center-y 50)]})
     (merge (stone/stone) {:position [(- center-x 50)(+ center-y 50)]})
     (merge (stone/stone) {:position [(+ center-x 50)(- center-y 50)]})
     (merge (stone/stone) {:position [(+ center-x 50)(+ center-y 50)]})]
    ;; gates
    [(merge (gate/gate) {:position [(- center-x 50) center-y]})
     (merge (gate/gate) {:position [(+ center-x 50) center-y]})
     (merge (gate/gate) {:position [center-x (- center-y 50)]})
     (merge (gate/gate) {:position [center-x (+ center-y 50)]})]
    ;; vent
    [(merge (vent/vent) {:position [center-x center-y]})]))





(defn agents []
  [(assoc (nursery/nursery pushed/pushed) :position [200 200] :solid false)
   (assoc (nursery/nursery parasite/parasite) :position [300 700] :solid false)
   (assoc (vent/vent) :position [400 400] :solid false)
   (assoc (vent/vent) :position [500 100] :solid false)
   (assoc (vent/vent) :position [100 500] :solid false)
   (assoc (vent/vent) :position [266 466] :solid false)
   (assoc (vent/vent) :position [466 266] :solid false)
   (merge (zapper/zapper) {:position [300 300]})
   (merge (zapper/zapper) {:position [150 650]})
   (merge (zapper/zapper) {:position [75 375]})
   (merge (zapper/zapper) {:position [375 75]})
   (merge (zapper/zapper) {:position [750 300]})

   ])


(defn settings []
  {
   :scale 1.0
   :single-thread-mode false
   :nursery-threshold  20
   :neighborhood-size  250
   :cost-of-living 0.0001
   :cost-of-collision 0.001
   :energy-transfer-to-child 0.2
   })

