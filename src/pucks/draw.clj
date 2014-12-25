;; Draws the pucks world by setting the background color and 
;; drawing all agents to the display using their :draw-functions.

(ns pucks.draw
  (:use quil.core 
        [pucks globals util vec2D]))

(defn draw-agents
  "Sets the background color and calls the :draw-functions of all agents."
  []
  (background 230 180 230)
  (let [s (:scale @pucks-settings)]
    (scale s s))
  (doseq [a @all-agents] 
    ((:draw-function a) a))
  ;; draw bonds, but only if they don't cross a world edge
  (let [agent-map (zipmap (map :id @all-agents) @all-agents)]
    (stroke 196)
    (stroke-weight 2)
    (doseq [a @all-agents] 
      (doseq [bound-id (:bound-to a)]
        (let [[ax ay] (:position a)
              [bx by] (:position (get agent-map bound-id))]
          (when (< (- (length (-v [ax ay] [bx by])) 1)
                   (distance [ax ay] [bx by]))
            (line ax ay bx by)))))
    (no-stroke)))
