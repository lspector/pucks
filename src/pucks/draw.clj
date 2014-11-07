;; Draws the pucks world by setting the background color and 
;; drawing all agents to the display using their :draw-functions.

(ns pucks.draw
  (:use quil.core pucks.globals))

(defn draw-agents
  "Sets the background color and calls the :draw-functions of all agents."
  []
  (background 230 180 230)
  (let [s (:scale @pucks-settings)]
    (scale s s))
  (doseq [a @all-agents] 
    ((:draw-function a) a)))