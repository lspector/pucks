(ns pucks.worlds.dev.world1
  (:use [pucks core globals]
       [pucks.agents nursery linear stone vent zapper swarmer beacon]))

(defn agents []
  (concat (repeatedly 10 stone)
          (repeatedly 10 vent)
          (repeatedly 5 zapper)
          (repeatedly 2 #(nursery linear))
          (repeatedly 2 #(nursery swarmer))
          (repeatedly 2 beacon)))


(defn settings []
  {})

;(run-pucks (agents) (settings))