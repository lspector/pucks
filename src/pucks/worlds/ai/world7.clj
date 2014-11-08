
;; A pucks world.

(ns pucks.worlds.ai.world7
  (:use [pucks core globals]
        [pucks.agents stone vent gate zapper nursery user donor shooter]))

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
    ;; walls
    ;; horizontal
    (apply concat
           (for [y (range 0 1581 200)]
             (let [start (rand-int 1600)
                   stop (+ start 100 (rand-int 600))]
               (for [x (range start stop 20)]
                 (merge (stone) {:position [x y]})))))   
    ;; vertical
    (apply concat
           (for [x (range 0 1581 200)]
             (let [start (rand-int 1600)
                   stop (+ start 100 (rand-int 300))]
               (for [y (range start stop 20)]
                 (merge (stone) {:position [x y]})))))
    ;; other pucks
    (apply concat
           (mapv #(if (:ventbox %)
                    (ventbox (:position %))
                    [%])
                 (mapv (fn [p loc]
                         (merge p {:position loc}))
                       (concat [(nursery user)]
                               (repeatedly 4 #(do {:ventbox true}))
                               (repeatedly 8 zapper)
                               (repeatedly 4 #(nursery shooter))
                               (repeatedly 4 (fn [] 
                                               (nursery 
                                                 #(merge (donor :key) 
                                                         {:color [0 0 255]
                                                          :velocity [(rand+- 5) (rand+- 5)]})))))
                       (shuffle (for [x (range 100 1501 200)
                                      y (range 100 1501 200)]
                                  [x y])))))))

(defn settings []
  {:screen-size 1600
   :scale 0.5
   :single-thread-mode false})

;(run-pucks (agents) (settings))