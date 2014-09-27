(ns pucks.globals)

;; the state of the world is stored in atoms

(def world-objects (atom []))

(def iteration (atom 0))

(def last-input-ms (atom 0))

(def paused (atom false))

;; simulation parameters

(def pucks-settings
  (atom {:screen-size 800
         :neighborhood-size 200 ;; should be at least the sensor range + largest radius
         :sensor-range 100
         :single-thread-mode true
         :max-velocity 0.2
         :max-acceleration 1
         :max-rotational-velocity 0.05
         :collision-resolution-force 100.0
         :cost-of-living 0.001
         :cost-of-collision 0.01}))

;; handy constants

(def pi Math/PI)

(def two-pi (* 2 Math/PI))

(def half-pi (/ Math/PI 2))

(def four-pi (* 2 two-pi))

(def minus-pi (- pi))

(def minus-two-pi (- two-pi))
