;; A pucks world.

(ns pucks.worlds.ai.world2
  (:require [pucks.agents.stone :as stone]
            [pucks.agents.user :as user]
            [pucks.agents.vent :as vent]
            [pucks.agents.zapper :as zapper]
            [pucks.globals :as globals]))

(defn agents []
  (concat (for [y (take 20 (iterate #(+ % 20) 100))]
            (merge (stone/stone) {:position [400 y]}))
          [(merge (vent/vent) {:position [600 300]})
           (merge (zapper/zapper) {:position [300 300]})
           (merge (user/user) {:position [200 300]
                          :rotation (/ globals/pi 2)
                          :velocity [0.1 0]})]))

(defn settings []
  {})

;(run-pucks (agents) (settings))