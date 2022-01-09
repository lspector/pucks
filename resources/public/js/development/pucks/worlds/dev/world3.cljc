;; A pucks world.

(ns pucks.worlds.dev.world3
  (:require [pucks.agents.zigzag :as zigzag]
            [pucks.agents.startstop :as startstop])
  )

(defn agents []
  [(merge (zigzag/zigzag)
          {:position [400 400]
           :velocity [2 0]})
   (merge (startstop/startstop)
          {:position [600 400]
           :velocity [2 0]})])

(defn settings []
  {})

;(run-pucks (agents) (settings))