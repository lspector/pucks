;; A pucks world.

(ns pucks.worlds.dev.world3
  (:use [pucks globals]
        [pucks.agents zigzag startstop]))

(defn agents []
  [(merge (zigzag)
          {:position [400 400]
           :velocity [2 0]})
   (merge (startstop)
          {:position [600 400]
           :velocity [2 0]})])

(defn settings []
  {})

;(run-pucks (agents) (settings))