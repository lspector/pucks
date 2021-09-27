(ns pucks.worlds.dev.world23
  (:require [pucks.agents.stone :as stone]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]
            [pucks.agents.shooter :as shooter]))

(defn horizontal-wall [[x-min x-max] y]
  (for [x (range x-min x-max 20)]
    (merge (stone/stone) {:position [x y]})))

(defn vertical-wall [x [y-min y-max]]
  (for [y (range y-min y-max 20)]
    (merge (stone/stone) {:position [x y]})))

(defn agents []
  [(assoc (nursery/nursery shooter/shooter) :position [200 200] :solid false)
   (assoc (vent/vent) :position [400 400] :solid false)
   (assoc (vent/vent) :position [500 100] :solid false)
   (assoc (vent/vent) :position [100 500] :solid false)
   (assoc (vent/vent) :position [266 466] :solid false)
   (assoc (vent/vent) :position [466 266] :solid false)])

(defn settings []
  {:screen-size        600
   :scale              1.0
   :single-thread-mode false
   :nursery-threshold  1000
   :neighborhood-size  150
   :cost-of-collision  0.01
   })

;(run-pucks (agents) (settings))