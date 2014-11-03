;; A pucks world.

(ns pucks.worlds.dev.world1
  (:use [pucks core globals]
       [pucks.agents nursery linear stone vent zapper swarmer beacon shooter]))

(defn agents []
  (concat (repeatedly 10 stone)
          (repeatedly 10 vent)
          (repeatedly 5 zapper)
          [(nursery #(merge (linear) {:inventory [:something]}))]
          [(nursery #(merge (swarmer) {:memory {:something :rembered}}))]
          [(nursery #(if (zero? (rand-int 2)) (linear) (shooter)))]
          [(nursery swarmer)]
          (repeatedly 2 beacon)))


(defn settings []
  {})

;(run-pucks (agents) (settings))