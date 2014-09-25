(ns pucks.draw
  (:use quil.core pucks.globals))

(defn draw-world-objects
  []
  (background 230 180 230)
  (doseq [obj @world-objects] 
    (doseq [f (:draw-functions obj)]
      (f obj))))