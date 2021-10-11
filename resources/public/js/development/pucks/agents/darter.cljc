;; Definition for darter agents. These use memory to cycle among four tasks:
;; orienting, stopping, re-orienting, and darting.

(ns pucks.agents.darter
  (:require [pucks.util :as util]
            [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [quil.core :as q]
            [pucks.agents.active :as active]))

(defn rotation-velocity-mismatch [p]
  (q/abs (- (:rotation p)
          (util/relative-position->rotation (:velocity p)))))
  
(defn darter-proposals [p]
  (case (:task (:memory p))
    ;; if orienting, then if not rotated close to direction of velocity then 
    ;; rotate in that direction; if close enough then switch to stopping task
    :orienting (if (> (rotation-velocity-mismatch p) 0.1)
                 {:rotation (util/relative-position->rotation (:velocity p))}
                 {:memory {:task :stopping}})
    ;; if stopping, then if still going too fast then accelerate against velocity;
    ;; if slow enough then switch to re-orienting task with a randomly chosen target rotation
    :stopping (if (> (vec2D/length (:velocity p)) 0.5)
                ;; if got twisted around then untwist
                (if (> (rotation-velocity-mismatch p) 0.1)
                  {:memory {:task :orienting}}
                  ;; orientation still okay, accelerate against velocity
                  {:acceleration (* 0.5 (if (< (rotation-velocity-mismatch p)
                                               (/ globals/pi 2)) ;; pointing in direction of velocity
                                        -1
                                        1))})
                {:acceleration 0
                 :memory {:task :re-orienting
                          :target-orientation (util/wrap-rotation (rand globals/two-pi))}})
    ;; if re-orienting, then if not close enough to target then rotate more;
    ;; if close enough then switch to darting task for 20 steps
    :re-orienting (if (> (q/abs (- (:rotation p) (:target-orientation (:memory p)))) 0.1)
                    {:rotation (:target-orientation (:memory p))}
                    {:memory {:task :darting
                              :dart-steps 20}})
    ;; if darting then if still have steps to do then accelerate and decrement steps;
    ;; if done then switch to orienting task
    :darting (if (> (:dart-steps (:memory p)) 1)
               {:acceleration 10
                :memory {:dart-steps (dec (:dart-steps (:memory p)))}}
               {:memory {:task :orienting}})
    ;; if no task yet then orient
    {:memory {:task :orienting}}))

(defn darter []
  (merge (active/active)
         {:darter true
          :proposal-function darter-proposals}))
