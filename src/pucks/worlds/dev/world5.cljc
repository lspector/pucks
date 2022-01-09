;; A pucks world.

(ns pucks.worlds.dev.world5
  (:require [pucks.agents.zigzag :as zigzag]
            [pucks.agents.startstop :as startstop]))

(defn agents []
  [(merge (zigzag/zigzag) ;; zigzag has memory
          {:position [200 200]
           :velocity [2 0]})
   (merge (zigzag/zigzag) ;; zigzag has memory
          {:position [200 400]
           :velocity [2 0]
           :inventory [:cheese]})
   (merge (startstop/startstop)
       {:position [600 400]
        :velocity [2 0]
        :inventory [:cheese]})])

(defn settings []
  {})

;(run-pucks (agents) (settings))