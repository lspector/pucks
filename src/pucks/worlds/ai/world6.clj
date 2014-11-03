
;; A pucks world.

(ns pucks.worlds.ai.world6
  (:use [pucks core globals]
        [pucks.agents beacon stone vent gate zapper nursery user donor]))

(defn diff
  "Returns the absolute value of the difference between the two arguments."
  [n m]
  (Math/abs (- n m)))

(defn rand+-
  "Returns a positive or negative random number with magnitude less than n."
  [n]
  (- (rand (* 2 n)) n))

(defn ventbox
  "Returns a sequence of pucks that form a box of stones with a vent in the
   middle and a gate on each side."
  [[center-x center-y]]
  ;; walls
  ;; horizontal
  (concat
    (for [x (range (- center-x 50) (+ center-x 51) 20)
          y (range (- center-y 50) (+ center-y 51) 20)
          :when (or (and (== (diff x center-x) 50)
                         (> (diff y center-y) 20))
                    (and (== (diff y center-y) 50)
                         (> (diff x center-x) 20)))]
      (merge (stone) {:position [x y]}))
    ;; gates
    [(merge (gate) {:position [(- center-x 50) center-y]})
     (merge (gate) {:position [(+ center-x 50) center-y]})
     (merge (gate) {:position [center-x (- center-y 50)]})
     (merge (gate) {:position [center-x (+ center-y 50)]})]
    ;; vent
    [(merge (vent) {:position [center-x center-y]})]))

(defn agents []
  (concat 
    ;; beacons
    (for [x (range 50 751 100)
          y (range 50 751 100)]
      (merge (beacon) {:position [x y]
                       :id [x y]
                       :radius 70}))
    ;; random walls
    ;; horizontal
    (apply concat
           (for [y (range 0 781 200)]
             (let [start (rand-int 800)
                   stop (+ start 100 (rand-int 300))]
               (for [x (range start stop 20)]
                 (merge (stone) {:position [x y]})))))   
    ;; vertical
    (apply concat
           (for [x (range 0 781 200)]
             (let [start (rand-int 800)
                   stop (+ start 100 (rand-int 300))]
               (for [y (range start stop 20)]
                 (merge (stone) {:position [x y]})))))
    ;; other pucks
    (let [locations (shuffle 
                      (for [x [100 300 500 700]
                            y [100 300 500 700]]
                        [x y]))]
      (concat (ventbox (first locations))
              (ventbox (second locations))
              (mapv (fn [p loc]
                      (merge p {:position loc}))
                    [(nursery user)
                     (nursery #(merge (donor :key) 
                                      {:velocity [(rand+- 5) (rand+- 5)]}))
                     (zapper)
                     (zapper)]
                    (rest (rest locations)))))))

(defn settings []
  {})

;(run-pucks (agents) (settings))