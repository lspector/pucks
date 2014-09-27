(ns pucks.core
  (:use quil.core clojure.pprint
        [pucks globals util vec2D physics neighbors sensors draw]
        clojure.inspector)
  (:gen-class))

(defn setup []
  (smooth)
  (no-stroke)
  (reset! iteration 0))

(defn draw
  []
  (when (not @paused)
    (swap! iteration inc)
    (swap! world-objects (fn [objs] (mapv #(assoc % :steps (inc (:steps %))) objs))) ;; update step clocks in agents
    (update-neighbors) 
    (run-sensors)
    (generate-proposals) ;; should access only :sensed, not :neighbors (still needed for arbitration) and not :position
    (arbitrate-proposals)
    (reap)
    (draw-world-objects))
  (when (and (key-pressed?)
             (> (ms) (+ 500 @last-input-ms))) ;; avoid triggering multiple times for one key press
    (reset! last-input-ms (ms))
    (when (= (raw-key) \space) 
      (swap! paused not)))
  (when (and (mouse-pressed?)
             (> (ms) (+ 500 @last-input-ms)))
    (reset! last-input-ms (ms))
    (pprint (objects-overlapping-xy (mouse-x) (mouse-y)))
    (inspect-tree (objects-overlapping-xy (mouse-x) (mouse-y)))))

(defn run-pucks [agents settings]
  (reset! world-objects agents)
  (swap! pucks-settings #(merge % settings))
  (sketch
      :title "pucks"
      :setup setup
      :draw draw
      :size [(:screen-size @pucks-settings) (:screen-size @pucks-settings)]
      ;:mouse-moved mouse-moved
      ;:on-close #(System/exit 0)
      ))

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


