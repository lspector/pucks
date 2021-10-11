;; This is the main program file for the Javascript version of pucks. It defines setup and draw functions,
;; which are used by Quil (a.k.a. the Processing library, packaged for Clojure)
;; to set up a simulation. The top-level function, run-pucks, runs a Quil
;; sketch using the provided setup and draw functions. A -main function is
;; also defined so that simulations can be ran on a html page.

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
              [pucks.worlds.dev.world11 :as world11]
              [pucks.worlds.dev.world12 :as world12]
              [pucks.worlds.dev.world13 :as world13]
              [pucks.worlds.dev.world14 :as world14]
              [pucks.worlds.dev.world15 :as world15]
              [pucks.worlds.dev.world16 :as world16]
              [pucks.worlds.dev.world17 :as world17]
              [pucks.worlds.dev.world18 :as world18]
              [pucks.worlds.dev.world19 :as world19]
              [pucks.worlds.dev.world20 :as world20]
              [pucks.worlds.dev.world21 :as world21]
              [pucks.worlds.dev.world22 :as world22]
              [pucks.worlds.dev.world23 :as world23]
              [pucks.worlds.dev.world24 :as world24]
              [pucks.worlds.ai.world1 :as aiworld1]
              [pucks.worlds.ai.world2 :as aiworld2]
              [pucks.worlds.ai.world3 :as aiworld3]
              [pucks.worlds.ai.world4 :as aiworld4]
              [pucks.worlds.ai.world5 :as aiworld5]
              [pucks.worlds.ai.world6 :as aiworld6]
              [pucks.worlds.ai.world7 :as aiworld7]
              [pucks.worlds.ai.world8 :as aiworld8]
              [cljs.core :as cljs]))

(defn setup []
  "The Quil setup function for pucks. Initializes drawing parameters and
the global iteration counter."
  (q/smooth)
  (q/no-stroke)
  )

(defn draw-state []
  "The Quil draw function for pucks. In addition to stepping forward the
simulation and actually drawing the world to the display, it also handles
GUI interactions."
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



(defn ^:export -main [& args]
  "This main function allows simulations to be run in Javascript by calling
lein cljsbuild once, and opening resources/public/index.html"
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
  (if (= args (list "World11"))
    (run-pucks (world11/agents)
               (world11/settings)))
  (if (= args (list "World12"))
    (run-pucks (world12/agents)
               (world12/settings)))
  (if (= args (list "World13"))
    (run-pucks (world13/agents)
               (world13/settings)))
  (if (= args (list "World14"))
    (run-pucks (world14/agents)
               (world14/settings)))
  (if (= args (list "World15"))
    (run-pucks (world15/agents)
               (world15/settings)))
  (if (= args (list "World16"))
    (run-pucks (world16/agents)
               (world16/settings)))
  (if (= args (list "World17"))
    (run-pucks (world17/agents)
               (world17/settings)))
  (if (= args (list "World18"))
    (run-pucks (world18/agents)
               (world18/settings)))
  (if (= args (list "World19"))
    (run-pucks (world19/agents)
               (world19/settings)))
  (if (= args (list "World20"))
    (run-pucks (world20/agents)
               (world20/settings)))
  (if (= args (list "World21"))
    (run-pucks (world21/agents)
               (world21/settings)))
  (if (= args (list "World22"))
    (run-pucks (world22/agents)
               (world22/settings)))
  (if (= args (list "World23"))
    (run-pucks (world23/agents)
               (world23/settings)))
  (if (= args (list "World24"))
    (run-pucks (world24/agents)
               (world24/settings)))
  (if (= args (list "aiWorld1"))
    (run-pucks (aiworld1/agents)
               (aiworld1/settings)))
  (if (= args (list "aiWorld2"))
    (run-pucks (aiworld2/agents)
               (aiworld2/settings)))
  (if (= args (list "aiWorld3"))
    (run-pucks (aiworld3/agents)
               (aiworld3/settings)))
  (if (= args (list "aiWorld4"))
    (run-pucks (aiworld4/agents)
               (aiworld4/settings)))
  (if (= args (list "aiWorld5"))
    (run-pucks (aiworld5/agents)
               (aiworld5/settings)))
  (if (= args (list "aiWorld6"))
    (run-pucks (aiworld6/agents)
               (aiworld6/settings)))
  (if (= args (list "aiWorld7"))
    (run-pucks (aiworld7/agents)
               (aiworld7/settings)))
  (if (= args (list "aiWorld8"))
    (run-pucks (aiworld8/agents)
               (aiworld8/settings)))
  )

; uncomment this line to reset the sketch:
; (run-sketch)
