;; Draws the pucks world by setting the background color and 
;; drawing all agents to the display using their :draw-functions.

(ns pucks.draw
  (:require [quil.core :as q]
            [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]))


(defn draw-agents
  "Sets the background color and calls the :draw-functions of all agents."
  []
  (q/background 230 180 230)
  (let [s (:scale @globals/pucks-settings)]
    (q/scale s s))
  (doseq [a @globals/all-agents] 
    ((:draw-function a) a))
  ;; draw bonds, but only if they don't cross a world edge
  (let [agent-map (zipmap (map :id @globals/all-agents) @globals/all-agents)]
    (q/stroke 196)
    (q/stroke-weight 2)
    (doseq [a @globals/all-agents] 
      (doseq [bound-id (:bound-to a)]
        (let [[ax ay] (:position a)
              [bx by] (:position (get agent-map bound-id))]
          (when (< (- (vec2D/length (vec2D/-v [ax ay] [bx by])) 1)
                   (vec2D/distance [ax ay] [bx by]))
            (q/line ax ay bx by)))))
    (q/no-stroke)))
