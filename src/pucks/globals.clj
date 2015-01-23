;; Global variables for pucks.

(ns pucks.globals)

;; the state of the world is stored in atoms

(def all-agents (atom []))   ;; all agents in the simulation

(def iteration (atom 0))     ;; the number of simulation steps completed

(def last-input-ms (atom 0)) ;; the time (in ms) at which the last GUI input was received

(def paused (atom false))    ;; true if the simulation is paused

(def number-of-active-agents (atom 0)) ;; the current number of active agents

(def end-ms (atom 0))        ;; the time (in ms) at which the simulation should 
                             ;; be terminated, if (:ms-limit @pucks-settings) is non-nil

;; simulation parameters

(def pucks-settings
  (atom {:screen-size 800
         :scale 1.0
         :neighborhood-size 200 ;; should be at least the sensor range + largest radius
         :sensor-range 100
         :single-thread-mode true
         :max-velocity 80
         :max-acceleration 1
         :max-rotational-velocity 0.05
         :collision-resolution-acceleration 100.0
         :cost-of-living 0.001
         :cost-of-collision 0.01
         :nursery-threshold 1000
         :torpedo-energy 0.1
         :ms-limit nil
         :pause-on-start nil}))

;; handy constants

(def pi Math/PI)

(def two-pi (* 2 Math/PI))

(def half-pi (/ Math/PI 2))

(def quarter-pi (/ Math/PI 4))

(def four-pi (* 2 two-pi))

(def minus-pi (- pi))

(def minus-two-pi (- two-pi))
