(ns pucks.agents.generic
  (:use [pucks globals util]))

(defn generic []
  {:id (gensym "puck-")
   :mobile false ;; not sure if this currently has utility beyond being a synonym for :active
   :solid true
   :radius 20
   :position (rand-xy)
   :velocity [(* 5 (- (rand) 0.5)) (* 5 (- (rand) 0.5))]
   :rotation (* two-pi (rand))
   :color [255 255 255]
   :energy 0
   :steps 0
   :neighbors []
   :overlaps []
   :memory {}
   :inventory #{}
   :draw-functions [(fn [p] false)]
   :proposal-function (fn [p] {})})