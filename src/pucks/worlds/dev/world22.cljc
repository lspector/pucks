(ns pucks.worlds.dev.world22
  (:require
            [pucks.agents.spanner :as spanner]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.stone :as stone]
            [pucks.agents.vent :as vent]))

(defn horizontal-wall [[x-min x-max] y] 
  (for [x (range x-min x-max 20)]
    (merge (stone/stone) {:position [x y]})))

(defn vertical-wall [x [y-min y-max]]
  (for [y (range y-min y-max 20)]
    (merge (stone/stone) {:position [x y]})))

(defn agents []
  (vec (concat 
         (for [x (range 100 1200 200)
               y (range 100 1200 200)]
           (assoc (vent/vent) :position [x y] :mobile false :solid false))
         (for [x (range 50 1200 100)
               y (range 50 1200 100)]
           (assoc (stone/stone) :position [x y] :mobile false))
         [(assoc (nursery/nursery spanner/spanner) :position [600 600] :solid false)])))

(defn settings []
  {:screen-size 1200
   :scale 0.6
   :single-thread-mode false
   :nursery-threshold 1 ;20 ;1000
   :neighborhood-size 150
   :cost-of-collision 0.01
   })

;(run-pucks (agents) (settings))