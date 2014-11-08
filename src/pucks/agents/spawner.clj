
;; Definitions for spawner agents.

(ns pucks.agents.spawner
  (:use [pucks globals util]
        [pucks.agents active]))
  
(defn spawner-proposals [p]
  (merge {:acceleration 0
          :rotation (direction->rotation (:velocity p))}
         (if (zero? (rand-int 250))
           {:spawn [((:spawn-function p) p)]}
           {})))

(defn spawner []
  (merge (active)
         {:spawner true
          :proposal-function spawner-proposals
          :color [0 128 255]
          :spawn-function #(merge % 
                                  {:velocity [(* 5 (- (rand) 0.5)) (* 5 (- (rand) 0.5))]
                                   :rotation (* two-pi (rand))
                                   ;; position will be relative to position of parent
                                   :position [(- (rand-int 3) 1) (- (rand-int 3) 1)]})}))

