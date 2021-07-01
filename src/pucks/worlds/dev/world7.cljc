
;; A pucks world.

(ns pucks.worlds.dev.world7
  (:require [pucks.agents.opener :as opener]
            [pucks.globals :as globals]
            [pucks.agents.chest :as chest]
            [pucks.agents.stone :as stone]
            [pucks.agents.vent :as vent]
            [pucks.agents.gate :as gate]))

(defn agents []
  (concat 
    ;; walls
    ;; horizontal
    (for [x (range 500 701 20)
          y [300 500]]
      (merge (stone/stone) {:position [x y]}))
    ;; vertical, left (with gap for gate)
    (for [y (range 300 361 20)]
      (merge (stone/stone) {:position [500 y]}))
    (for [y (range 440 501 20)]
      (merge (stone/stone) {:position [500 y]}))
    ;; right
    (for [y (range 300 501 20)]
      (merge (stone/stone) {:position [700 y]}))
    ;; gate
    [(merge (gate/gate) {:position [500 400]})]
    ;; chest with key
    [(merge (chest/chest) {:position [250 430]
                     :inventory [:key]})]
    ;; opener
    [(merge (opener/opener) {:position [100 400]
                      :rotation globals/half-pi
                      :velocity [1.0 0]})]
    ;; vent
    [(merge (vent/vent) {:position [600 430]
                    :radius 30})]
    ))

(defn settings []
  {})

;(run-pucks (agents) (settings))