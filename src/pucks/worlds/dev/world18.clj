;; for speed testing, by Eddie Pantridge (modified by Lee Spector)
;; will terminate and print iterations completed

(ns pucks.worlds.dev.world18
  (:use [pucks core globals]
        [pucks.agents vent nursery swarmer]))

(defn agents []
  (concat 
    (for [x (range 100 1800 200)
          y (range 100 1800 200)]
      (merge (nursery swarmer) {:position [x y]}))))

(defn settings []
  {:screen-size 1800
   :scale 0.5
   :neighborhood-size 100
   :ms-limit 60000})

;(run-pucks (agents) (settings)) 