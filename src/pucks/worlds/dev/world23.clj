(ns pucks.worlds.dev.world23
  (:use [pucks core globals]
        [pucks.agents stone vent nursery zapper pusher linear shooter startstop zigzag]))

(defn horizontal-wall [[x-min x-max] y] 
  (for [x (range x-min x-max 20)]
    (merge (stone) {:position [x y]})))

(defn vertical-wall [x [y-min y-max]]
  (for [y (range y-min y-max 20)]
    (merge (stone) {:position [x y]})))

(defn agents []
  [(assoc (nursery pusher) :position [200 200] :solid false)
   (assoc (vent) :position [400 400] :solid false)
   (assoc (vent) :position [500 100] :solid false)
   (assoc (vent) :position [100 500] :solid false)
   (assoc (vent) :position [266 466] :solid false)
   (assoc (vent) :position [466 266] :solid false)]

(defn settings []
  {:screen-size 600
   :scale 1.0
   :single-thread-mode false
   :nursery-threshold 1000
   :neighborhood-size 150
   :cost-of-collision 0.01
   })

;(run-pucks (agents) (settings))