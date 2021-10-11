
;; A pucks world.

(ns pucks.worlds.dev.world10
  (:require [pucks.agents.beacon :as beacon]
            [pucks.agents.darter :as darter]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.stone :as stone]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 100 701 200)
          y (range 100 701 200)]
      (merge (beacon/beacon) {:position [x y]
                       :id [x y]}))
    ;; walls
    ;; vertical internal
    (for [y (range 0 201 20)]
      (merge (stone/stone) {:position [400 y]}))
    (for [y (range 400 801 20)]
      (merge (stone/stone) {:position [400 y]}))
    ;; horizontal internal
    (for [x (range 400 601 20)]
      (merge (stone/stone) {:position [x 400]}))
    ;; room on right
    ;; top/bottom
    (for [x (range 400 800 20)]
      (merge (stone/stone) {:position [x 0]}))
    (for [x (range 400 800 20)]
      (merge (stone/stone) {:position [x 799]}))
    ;; side
    (for [y (range 0 801 20)]
      (merge (stone/stone) {:position [0 y]}))
        (for [y (range 0 801 20)]
      (merge (stone/stone) {:position [799 y]}))
    ;; zappers
    [(merge (zapper/zapper) {:position [200 600]})
     (merge (zapper/zapper) {:position [600 200]})]
    [(merge (vent/vent) {:position [600 600]})]
    ;; darter nursery
    [(merge (nursery/nursery darter/darter)
            {:position [200 200]})]))

(defn settings []
  {})

;(run-pucks (agents) (settings))