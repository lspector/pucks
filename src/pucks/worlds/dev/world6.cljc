(ns pucks.worlds.dev.world6
  (:require [pucks.agents.zigzag :as zigzag]
            [pucks.agents.startstop :as startstop]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.linear :as linear]
            [pucks.agents.stone :as stone]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.swarmer :as swarmer]
            [pucks.agents.beacon :as beacon]
            ))

(defn agents []
  (concat (for [y (take 15 (iterate #(+ % 20) 100))]
            (merge (stone/stone) {:position [400 y]}))
          (for [x (take 10 (iterate #(+ % 20) 500))]
            (merge (stone/stone) {:position [x 100]}))
          [(merge (vent/vent) {:position [600 600]})
           (merge (vent/vent) {:position [700 600]})
           (merge (vent/vent) {:position [650 687]})
           (merge (vent/vent) {:position [550 687]})
           (merge (beacon/beacon) {:position [600 400] :id 'AREA-B})
           (merge (zapper/zapper) {:position [200 200]})
           (merge (beacon/beacon) {:position [150 600] :id 'AREA-A})
           (merge (nursery/nursery linear/linear) {:position [400 500]})
           (merge (nursery/nursery swarmer/swarmer) {:position [300 650]})
           (merge (nursery/nursery #(merge (startstop/startstop) {:color [0 255 255]})) {:position [600 200]})
           (merge (nursery/nursery zigzag/zigzag) {:position [100 400]})]
          ))


(defn settings []
  {})

;(run-pucks (agents) (settings))