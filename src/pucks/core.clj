;; This is the main program file for pucks. It defines setup and draw functions,
;; which are used by Quil (a.k.a. the Processing library, packaged for Clojure)
;; to set up a simulation. The top-level function, run-pucks, runs a Quil
;; sketch using the provided setup and draw functions. A -main function is
;; also defined so that simulations can be launced from a "lein run" command
;; line.

(ns pucks.core
  (:use quil.core clojure.pprint
        [pucks globals util vec2D physics reap neighbors sensors draw]
        clojure.inspector)
  (:gen-class))

(defn setup 
  "The Quil setup function for pucks. Initializes drawing parameters and
the global iteration counter."
  []
  (smooth)
  (no-stroke)
  (reset! iteration 0))

(defn draw
  "The Quil draw function for pucks. In addition to stepping forward the
simulation and actually drawing the world to the display, it also handles
GUI interactions."
  []
  (when (not @paused)     ;; only step forward and draw if not paused
    (swap! iteration inc) ;; increment the global interation counter
    (swap! all-agents     ;; update step clocks in agents
           (fn [objs] (mapv #(assoc % :steps (inc (:steps %))) objs))) 
    (reset! number-of-active-agents
            (count (filter :active @all-agents))) ;; track # of active agents
    (update-neighbors)    ;; update the neighbors in all agents
    (run-sensors)         ;; augment each agent with sensed objects
    (generate-proposals)  ;; generate proposals from each agent
    (arbitrate-proposals) ;; arbitrate proposals and make changes to world
    (reap)                ;; eliminate any dead agents
    (draw-agents))        ;; draw the world to the display
  ;; handle space-key presses to pause/unpause the simulation
  (when (and (key-pressed?)
             ;; avoid triggering multiple times for one key press
             (> (ms) (+ 500 @last-input-ms))) 
    (reset! last-input-ms (ms))
    (when (= (raw-key) \space) 
      (swap! paused not)))
  ;; handle mouse clicks by printing and inspecting objects at click location
  (when (and (mouse-pressed?)
             ;; avoid triggering multiple times for one click
             (> (ms) (+ 500 @last-input-ms)))
    (reset! last-input-ms (ms))
    (let [scaled-x (int (/ (mouse-x) (:scale @pucks-settings)))
          scaled-y (int (/ (mouse-y) (:scale @pucks-settings)))]
      (pprint (mapv abbreviate-embedded-agents
                    (objects-overlapping-xy scaled-x scaled-y)))
      (inspect-tree (objects-overlapping-xy scaled-x scaled-y)))))

(defn run-pucks [agents settings]
  "Run a pucks simulation with the provided agents and settings (which will
be merged with the defaults)."
  (reset! all-agents agents)
  (swap! pucks-settings #(merge % settings))
  (let [scaled-screen-size (* (:scale @pucks-settings) 
                              (:screen-size @pucks-settings))]
        (sketch
          :title "pucks"
          :setup setup
          :draw draw
          :size [scaled-screen-size scaled-screen-size])))

(defn -main 
  "This main function allows simulations to be run from the command line with:
      lein run <world-namespace> <setting-keyword> <setting-value>
   with any number of keyword/value pairs."
  [& args]
  (let [world-ns (symbol (first args))
        settings (apply hash-map (map read-string (rest args)))]
    (require world-ns)
    (run-pucks ((ns-resolve world-ns 'agents))
               (merge ((ns-resolve world-ns 'settings)) settings))))
