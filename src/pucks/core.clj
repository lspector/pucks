;; This is the main program file for pucks. It defines setup and draw functions,
;; which are used by Quil (a.k.a. the Processing library, packaged for Clojure)
;; to set up a simulation. The top-level function, run-pucks, runs a Quil
;; sketch using the provided setup and draw functions. A -main function is
;; also defined so that simulations can be launced from a "lein run" command
;; line.

(ns pucks.core
  (:require [quil.core :as q]
            [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [pucks.util :as util]
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
            [clojure.inspector :as inspector])
 (:gen-class)
  )

(defn setup 
  "The Quil setup function for pucks. Initializes drawing parameters and
the global iteration counter."
  []
  (q/smooth)
  (q/no-stroke)
  (reset! globals/iteration 0)
  (when-let [limit (:ms-limit @globals/pucks-settings)]
    (reset! globals/end-ms (+ (util/ms) limit))))

(defn draw
  "The Quil draw function for pucks. In addition to stepping forward the
simulation and actually drawing the world to the display, it also handles
GUI interactions."
  []
  (when (and (:ms-limit @globals/pucks-settings)
             (> (util/ms) @globals/end-ms))
    (println "Iterations completed:" @globals/iteration)
    (System/exit 0)
    )
  (when (not @globals/paused)     ;; only step forward and draw if not paused
    (swap! globals/iteration inc) ;; increment the global interation counter
    (swap! globals/all-agents     ;; update step clocks in agents
           (fn [objs]
             (mapv #(if (:stone %)
                      %
                      (assoc % :steps (inc (:steps %))))
                   objs)))
    (reset! globals/number-of-active-agents
            (count (filter :active @globals/all-agents))) ;; track # of active agents
    (neighbors/update-neighbors)    ;; update the neighbors in all agents
    (sensors/run-sensors)         ;; augment each agent with sensed objects
    (physics/generate-proposals)  ;; generate proposals from each agent
    (physics/arbitrate-proposals) ;; arbitrate proposals and make changes to world
    (reap/reap)                ;; eliminate any dead agents
  (draw/draw-agents)      ;; draw the world to the display
  ;; handle space-key presses to pause/unpause the simulation
  (when (and (q/key-pressed?)
             ;; avoid triggering multiple times for one key press
             (> (util/ms) (+ 500 @globals/last-input-ms)))
    (reset! globals/last-input-ms (util/ms))
    (when (= (q/raw-key) \space)
      (swap! globals/paused not)))
   ;handle mouse clicks by printing and inspecting objects at click location
  (when (and (q/mouse-pressed?)
             ;; avoid triggering multiple times for one click
             (> (util/ms) (+ 500 @globals/last-input-ms)))
    (reset! globals/last-input-ms (util/ms))
    (let [scaled-x (int (/ (q/mouse-x) (:scale @globals/pucks-settings)))
          scaled-y (int (/ (q/mouse-y) (:scale @globals/pucks-settings)))]
      (inspector/inspect-tree (mapv util/abbreviate-embedded-agents (util/objects-overlapping-xy scaled-x scaled-y)))))))

(defn run-pucks [agents settings]
  "Run a pucks simulation with the provided agents and settings (which will
be merged with the defaults)."
  (reset! globals/all-agents agents)
  (swap! globals/pucks-settings #(merge % settings))
  (when (:pause-on-start @globals/pucks-settings)
    (reset! globals/paused true))
  (let [scaled-screen-size (* (:scale @globals/pucks-settings)
                              (:screen-size @globals/pucks-settings))]
        (q/sketch
          :title "Pucks"
          :setup setup
          :draw draw
          :size [scaled-screen-size scaled-screen-size]
          :features [:exit-on-close])))



(defn -main
  "This main function allows simulations to be run from the command line with:
      lein run <world-namespace> <setting-keyword> <setting-value>
   with any number of keyword/value pairs."
  [& args]
  (let [world-ns (symbol (first args))
        settings (apply hash-map (map read-string (rest args)))]
    (ns-resolve world-ns 'agents)
    (merge ((ns-resolve world-ns 'settings)) settings)
    (require world-ns)
    (run-pucks ((ns-resolve world-ns 'agents))
               (merge ((ns-resolve world-ns 'settings)) settings))))

; uncomment this line to reset the sketch:
; (run-sketch)

