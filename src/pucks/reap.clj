;; Reaper for pucks; converts dead agents to corpses and eventually removes them.

(ns pucks.reap
  (:use pucks.globals
        pucks.agents.corpse))

(defn reap
  "Converts agents with no remaining energy to decayed-corpses and eventually
   removes them from the world."
  []
  (swap! all-agents
         (fn [objs]
           (let [with-decayed
                 (mapv #(if (and (or (and (:corpse %) 
                                          (<= (:energy %) 0.01))
                                     (and (:mobile %)
                                          (not (pos? (:energy %)))))
                                 (not (:decayed %)))
                          (merge % {:decayed true
                                    :death-step (:steps %)
                                    :mobile false
                                    :energy 0
                                    :color [100 100 100] 
                                    :proposal-function (fn [p] {})})
                          %)
                       objs)]
             ;; eliminate corpses that are fully rotted
             (filterv #(not (and (:decayed %)
                                 (> (:steps %)
                                    (+ (:death-step %) 30))))
                      with-decayed)))))

(defn leave-corpses
  "Leaves corpes that have energy that can be drained like vents."
  []
  (swap! all-agents
         (fn [objs]
           (let [wounded
                 (mapv #(if (and (:mobile %) (> (:wound %) (:energy %)))
                          (corpse (:energy %))
                          %)
                       objs)]
             wounded))))