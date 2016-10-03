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
   (assoc (vent) :position [466 266] :solid false)
   ]
  #_(vec (concat 
          #_(for [x (range 100 600 400 #_200)
                 y (range 100 600 400 #_200)]
             (assoc (vent) :position [x y] :mobile false :solid false))
          #_(for [x (range 50 600 100)
                 y (range 50 600 100)]
             (assoc (stone) :position [x y] :mobile false))
          [(assoc (nursery pusher) :position [200 200] :solid false)])))

(defn settings []
  {:screen-size 600
   :scale 1.0
   :single-thread-mode false
   :nursery-threshold 1000
   :neighborhood-size 150
   :cost-of-collision 0.01
   })

;(run-pucks (agents) (settings))