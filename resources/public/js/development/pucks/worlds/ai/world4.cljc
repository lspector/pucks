
;; A pucks world.

(ns pucks.worlds.ai.world4
  (:require [pucks.agents.stone :as stone]
            [pucks.agents.user :as user]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.beacon :as beacon]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.gate :as gate]
            [pucks.agents.chest :as chest]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 100 701 200)
          y (range 100 701 200)]
      (merge (beacon/beacon) {:position [x y]
                       :id [x y]}))
    ;; walls
    ;; horizontal
    (for [x (range 500 701 20)
          y [300 500]]
      (merge (stone/stone) {:position [x y]}))
    ;; vertical, left (with gap for gate)
    (for [y (range 300 361 20)]
      (merge (stone/stone) {:position [500 y]}))
    (for [y (range 440 501 20)]
      (merge (stone/stone) {:position [500 y]}))
    ;; right
    (for [y (range 300 501 20)]
      (merge (stone/stone) {:position [700 y]}))
    ;; gate
    [(merge (gate/gate) {:position [500 400]})]
    ;; chest with key
    [(merge (chest/chest) {:position [250 430]
                     :inventory [:key]})]
    ;; vent
    [(merge (vent/vent) {:position [600 430]
                    :radius 30})]
    ;; zappers
    [(merge (zapper/zapper) {:position [200 600]})
     (merge (zapper/zapper) {:position [600 200]})]
    ;; user nursery
    [(merge (nursery/nursery user/user) {:position [200 200]})]
    ))

(defn settings []
  {})

;(run-pucks (agents) (settings))