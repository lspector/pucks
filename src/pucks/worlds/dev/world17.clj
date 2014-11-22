(ns pucks.worlds.dev.world17
  (:use [pucks core globals util vec2D]
        [pucks.agents active]))

(defn agents []
  [(merge (active)
          {:proposal-function 
           (fn [p]
             {:acceleration 1
              :thrust-angle (+ (:thrust-angle p) 0.1)})
           :position [500 500]
           :rotation 0
           :velocity [0 -2]})
   (merge (active)
          {:proposal-function 
           (fn [p]
             {:acceleration 1
              :thrust-angle (+ (:thrust-angle p) 0.1)
              :rotation (- (:rotation p) 0.03)})
           :position [200 200]
           :rotation 0
           :velocity [0 1]})])
    
(defn settings []
  {})

;(run-pucks (agents) (settings))
