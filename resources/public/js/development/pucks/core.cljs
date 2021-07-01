(ns pucks.core
  (:require [quil.core :as q :include-macros true]
              [pucks.globals :as globals]
              [pucks.physics :as physics]
              [pucks.reap :as reap]
              [pucks.neighbors :as neighbors]
              [pucks.sensors :as sensors]
              [pucks.draw :as draw]
              [pucks.worlds.dev.world1 :as world1]
              [pucks.worlds.dev.world2 :as world2]
              [pucks.worlds.dev.world3 :as world3]
              [pucks.worlds.dev.world4 :as world4]
              [pucks.worlds.dev.world5 :as world5]
              [pucks.worlds.dev.world6 :as world6]
              [pucks.worlds.dev.world7 :as world7]
              [pucks.worlds.dev.world8 :as world8]
              [pucks.worlds.dev.world9 :as world9]
              [pucks.worlds.dev.world10 :as world10]
              [cljs.core :as cljs]))

(defn setup []
  (q/smooth)
  (q/no-stroke)
  )

(defn draw-state []
  (when (not @globals/paused)
    (cljs/swap! globals/iteration inc)
    (cljs/swap! globals/all-agents     ;; update step clocks in agents
                (fn [objs]
                  (mapv #(if (:stone %)
                           %
                           (assoc % :steps (inc (:steps %))))
                        objs)))
    (cljs/reset! globals/number-of-active-agents
                 (cljs/count (cljs/filter :active @globals/all-agents))) ;; track # of active agents
    (neighbors/update-neighbors) ;; update the neighbors in all agents
    (sensors/run-sensors)         ;; augment each agent with sensed objects
    (physics/generate-proposals)  ;; generate proposals from each agent
    (physics/arbitrate-proposals) ;; arbitrate proposals and make changes to world
    (reap/reap))
  (draw/draw-agents)   ;; draw the world to the display
  )
(declare pucks)
(defn run-pucks [agents settings]
  "Run a pucks simulation with the provided agents and settings (which will
be merged with the defaults)."
  (reset! globals/all-agents agents)
  (swap! globals/pucks-settings #(merge % settings))
  (when (:pause-on-start @globals/pucks-settings)
    (reset! globals/paused true))
  (let [scaled-screen-size (* (:scale @globals/pucks-settings)
                              (:screen-size @globals/pucks-settings))]
    (q/defsketch pucks
                 :host "pucks"
                 :size [scaled-screen-size scaled-screen-size]
                 ; setup function called only once, during sketch initialization.
                 :setup setup
                 :draw draw-state
                 :features [:exit-on-close])))

; this function is called in index.html
(defn ^:export -main [& args]
  (if (= args (list "World1"))
    (run-pucks (world1/agents)
               (world1/settings)))
  (if (= args (list "World2"))
      (run-pucks (world2/agents)
                 (world2/settings)))
  (if (= args (list "World3"))
    (run-pucks (world3/agents)
               (world3/settings)))
  (if (= args (list "World4"))
    (run-pucks (world4/agents)
               (world4/settings)))
  (if (= args (list "World5"))
    (run-pucks (world5/agents)
               (world5/settings)))
  (if (= args (list "World6"))
    (run-pucks (world6/agents)
               (world6/settings)))
  (if (= args (list "World7"))
    (run-pucks (world7/agents)
               (world7/settings)))
  (if (= args (list "World8"))
    (run-pucks (world8/agents)
               (world8/settings)))
  (if (= args (list "World9"))
    (run-pucks (world9/agents)
               (world9/settings)))
  (if (= args (list "World10"))
    (run-pucks (world10/agents)
               (world10/settings)))
  )

; uncomment this line to reset the sketch:
; (run-sketch)
