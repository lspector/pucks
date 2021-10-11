;; Definitions for chest agents.

(ns pucks.agents.chest
  (:require
            [pucks.globals :as globals]
            [quil.core :as q]
            [pucks.agents.generic :as generic]))

(defn draw-chest [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (q/push-matrix)
    (q/translate x y)
    (q/rotate (:rotation p))
    ;; membrane
    (q/fill (int (+ 128 (* 128 (Math/sin (/ @globals/iteration 2)))))
          (int (+ 128 (* 128 (Math/sin (/ @globals/iteration 3)))))
          (int (+ 128 (* 128 (Math/sin (/ @globals/iteration 5)))))
          100)
    (q/ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (q/fill r g b 196)
    (q/ellipse 0 0 radius radius)
    ;; inventory
    (when-not (empty? (:inventory p))
      (q/fill 0 0 0)
      (q/ellipse 0 0 (* radius 0.2) (* radius 0.2)))
    (q/pop-matrix)))

(defn chest-proposals [p]
  {:transfer (into [] (for [recipient (filter :mobile (:overlaps p))
                            item (:inventory p)]
                        {:self (:id p)
                         :other (:id recipient)
                         :bid {:inventory item}
                         :ask {:request {:inventory item}}}))})

(defn chest []
  (merge (generic/generic)
         {:chest true
          :radius 30
          :draw-function draw-chest
          :proposal-function chest-proposals}))
