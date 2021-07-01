;; A pucks world.

(ns pucks.worlds.dev.world8
  (:require [pucks.globals :as globals]
            [pucks.util :as util]
            [pucks.agents.linear :as linear]))

(defn agents []
  [(merge (linear/linear) {:position [100 400]
                    :rotation globals/half-pi
                    :velocity [2 0]
                    :inventory [:thing]
                    :proposal-function 
                    (fn [p]
                        {:acceleration 0
                         :rotation (util/relative-position->rotation (:velocity p))
                         :transfer (for [anyone (:overlaps p)]
                                     {:self (:id p)
                                      :other (:id anyone)
                                      :bid {:inventory :thing}
                                      :ask (fn [my-bid your-bid]
                                             (:secret (:memory your-bid)))})})})
   (merge (linear/linear) {:position [400 700]
                    :rotation 0
                    :velocity [0 -2]
                    :memory {:secret :foo}
                    :proposal-function 
                    (fn [p]
                        {:acceleration 0
                         :rotation (util/relative-position->rotation (:velocity p))
                         :transfer (for [anyone (:overlaps p)]
                                     {:self (:id p)
                                      :other (:id anyone)
                                      :bid {:memory {:secret (:secret (:memory p))}}
                                      :ask {:inventory :thing}})})})])
    
(defn settings []
  {})

;(run-pucks (agents) (settings))