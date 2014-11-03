;; A pucks world.

(ns pucks.worlds.dev.world8
  (:use [pucks core globals util]
        [pucks.agents linear]))

(defn agents []
  [(merge (linear) {:position [100 400]
                    :rotation half-pi
                    :velocity [2 0]
                    :inventory [:thing]
                    :proposal-function 
                    (fn [p]
                        {:acceleration 0
                         :rotation (direction->rotation (:velocity p))
                         :transfer (for [anyone (:overlaps p)]
                                     {:self (:id p)
                                      :other (:id anyone)
                                      :bid {:inventory :thing}
                                      :ask (fn [my-bid your-bid]
                                             (:secret (:memory your-bid)))})})})
   (merge (linear) {:position [400 700]
                    :rotation 0
                    :velocity [0 -2]
                    :memory {:secret :foo}
                    :proposal-function 
                    (fn [p]
                        {:acceleration 0
                         :rotation (direction->rotation (:velocity p))
                         :transfer (for [anyone (:overlaps p)]
                                     {:self (:id p)
                                      :other (:id anyone)
                                      :bid {:memory {:secret (:secret (:memory p))}}
                                      :ask {:inventory :thing}})})})])
    
(defn settings []
  {})

;(run-pucks (agents) (settings))