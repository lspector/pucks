;; A pucks world.

(ns pucks.worlds.dev.world4
  (:require [pucks.globals :as globals]
            [pucks.agents.stone :as stone]
            [pucks.agents.linear :as linear]))

(defn agents []
  (concat (for [y (take 15 (iterate #(+ % 20) 100))]
            (merge (stone/stone) {:position [400 y]}))
          (for [x (take 16 (iterate #(+ % 20) 50))]
            (merge (stone/stone) {:position [x 100]}))
          [(merge (linear/linear)
                  {:position [100 300] 
                   :rotation (/ globals/pi 2)
                   :velocity [2 0]})]))

(defn settings []
  {})

;(run-pucks (agents) (settings))