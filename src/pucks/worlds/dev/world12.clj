(ns pucks.worlds.dev.world12
  (:use [pucks core globals]
        [pucks.agents nursery linear stone vent zapper 
                      startstop zigzag swarmer beacon]))

(defn agents []
  (concat (for [y (take 15 (iterate #(+ % 20) 100))]
            (merge (stone) {:position [400 y]}))
          (for [x (take 10 (iterate #(+ % 20) 500))]
            (merge (stone) {:position [x 100]}))
          [(merge (vent) {:position [600 600]})
           (merge (vent) {:position [700 600]})
           (merge (vent) {:position [650 687]})
           (merge (vent) {:position [550 687]})
           (merge (beacon) {:position [600 400] :id 'AREA-B})
           (merge (zapper) {:position [200 200]})
           (merge (beacon) {:position [150 600] :id 'AREA-A})
           (merge (nursery linear) {:position [400 500]})
           (merge (nursery swarmer) {:position [300 650]})
           (merge (nursery #(merge (startstop) {:color [0 255 255]})) {:position [600 200]})
           (merge (nursery zigzag) {:position [100 400]})]
          ))


(defn settings []
  {:screen-size 1600
   :scale 0.5})

;(run-pucks (agents) (settings))