;; A pucks world.

(ns pucks.worlds.dev.world1
  (:require [pucks.agents.shooter :as shooter]
            [pucks.agents.zapper :as zapper]
            [pucks.agents.nursery :as nursery]
            [pucks.agents.vent :as vent]
            [pucks.agents.beacon :as beacon]
            [pucks.agents.shooter :as shooter]
            [pucks.agents.stone :as stone]
            [pucks.agents.swarmer :as swarmer]
            [pucks.agents.linear :as linear]))

(defn agents []
  (concat (repeatedly 10 stone/stone)
          (repeatedly 10 vent/vent)
          (repeatedly 5 zapper/zapper)
          [(nursery/nursery #(merge (linear/linear) {:inventory [:something]}))]
          [(nursery/nursery #(merge (swarmer/swarmer) {:memory {:something :rembered}}))]
          [(nursery/nursery #(if (zero? (rand-int 2)) (linear/linear) (shooter/shooter)))]
          [(nursery/nursery swarmer/swarmer)]
          (repeatedly 2 beacon/beacon)))


(defn settings []
  {})

;(run-pucks (agents) (settings))