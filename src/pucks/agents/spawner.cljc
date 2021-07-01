
;; Definitions for spawner agents.

(ns pucks.agents.spawner
  (:require [pucks.util :as util]
            [pucks.globals :as globals]
            [pucks.agents.active :as active]))

  
(defn spawner-proposals [p]
  (merge {:acceleration 0
          :rotation (util/relative-position->rotation (:velocity p))}
         (if (zero? (rand-int 250))
           {:spawn [((:spawn-function p) p)]}
           {})))

(defn spawner []
  (merge (active/active)
         {:spawner true
          :proposal-function spawner-proposals
          :color [0 128 255]
          :spawn-function #(merge % 
                                  {:velocity [(* 5 (- (rand) 0.5)) (* 5 (- (rand) 0.5))]
                                   :rotation (* globals/two-pi (rand))
                                   ;; position will be relative to position of parent
                                   :position [(- (rand-int 3) 1) (- (rand-int 3) 1)]})}))
