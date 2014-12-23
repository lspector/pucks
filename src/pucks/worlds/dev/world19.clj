(ns pucks.worlds.dev.world19
  (:use [pucks core globals]
        [pucks.agents vent nursery linear]))

(defn agents []
  [(nursery linear)])

(defn settings []
  {})

;(run-pucks (agents) (settings)) 