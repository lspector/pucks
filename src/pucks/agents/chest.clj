;; Definitions for chest agents.

(ns pucks.agents.chest
  (:use quil.core 
        [pucks globals util vec2D]
        pucks.agents.generic))

(defn draw-chest [p]
  (let [[x y] (:position p)
        radius (:radius p)
        [r g b] (:color p)]
    (push-matrix)
    (translate x y)
    (rotate (:rotation p))
    ;; membrane
    (fill (int (+ 128 (* 128 (Math/sin (/ @iteration 2)))))
          (int (+ 128 (* 128 (Math/sin (/ @iteration 3)))))
          (int (+ 128 (* 128 (Math/sin (/ @iteration 5)))))
          100)
    (ellipse 0 0 (* radius 2) (* radius 2))
    ;; core
    (fill r g b 196) 
    (ellipse 0 0 radius radius)
    ;; inventory
    (when-not (empty? (:inventory p))
      (fill 0 0 0)
      (ellipse 0 0 (* radius 0.2) (* radius 0.2)))
    (pop-matrix)))

(defn chest-proposals [p]
  {:transfer (into [] (for [recipient (filter :mobile (:overlaps p))
                            item (:inventory p)]
                        {:self (:id p)
                         :other (:id recipient)
                         :bid {:inventory item}
                         :ask {:request {:inventory item}}}))})

(defn chest []
  (merge (generic)
         {:chest true
          :radius 30
          :draw-function draw-chest
          :proposal-function chest-proposals}))
