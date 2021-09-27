;; Definitions for generic agents. All other agents should be merged
;; with (generic), either directly or indirectly.

;; All default agent values are defined here.


(ns pucks.agents.generic
  (:require [pucks.globals :as globals]
            [pucks.util :as util]))

(defn generic []
  {:id (gensym "puck-")
   :mobile false
   :solid true
   :radius 20
   :position (util/rand-xy)
   :velocity [(* 5 (- (rand) 0.5)) (* 5 (- (rand) 0.5))]
   :rotation (* globals/two-pi (rand))
   :thrust-angle 0
   :color [255 255 255]
   :energy 1
   :steps 0
   :neighbors []
   :overlaps []
   :memory {}
   :inventory []
   :bound-to []
   :draw-function (fn [p] false)
   :proposal-function (fn [p] {})
   :spawn-function (fn [p] {})})