;; Definitions for zigzag agents, which achieve their zigzags by using
;; memory.

(ns pucks.agents.zigzag
  (:require [pucks.globals :as globals]
            [pucks.agents.active :as active]))


(def leftmost (/ globals/pi 4))

(def rightmost (* 3 (/ globals/pi 4)))

(defn zigzag-proposals [p]
  (let [switch-to-right (<= (:rotation p) leftmost)
        switch-to-left (>= (:rotation p) rightmost)
        direction (if (or switch-to-right 
                          (and (= (:turning (:memory p)) :right)
                               (not switch-to-left)))
                    :right
                    :left)]
    {:acceleration 1
     :rotation (if (= direction :left)
                 leftmost
                 rightmost)
     :memory {:turning direction}}))

(defn zigzag []
  (merge (active/active)
         {:zigzag true
          :proposal-function zigzag-proposals
          :color [255 0 255]
          :memory {:turning :left}}))