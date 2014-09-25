(ns pucks.scrap)

;; just a place to store scrap code that might be useful later

; (def benchmark-start-ms (atom 0))

;  (when (= @iteration 100) 
;    (reset! benchmark-start-ms (java.lang.System/currentTimeMillis))
;    ;(print-stats)
;    )
;  (when (= @iteration 1100) 
;    (println "benchmark time:" (- (java.lang.System/currentTimeMillis) @benchmark-start-ms)))

#_(doseq [s (apply concat 
                  (for [x [-1 0 1]] 
                    (for [y [-1 0 1]]
                      {:x x 
                       :y y 
                       :d->r (direction->rotation [x y]) 
                       :d->r->d (rotation->direction (direction->rotation [x y]))})))]
   (println s))

#_(defn mouse-moved []
   (let [x (mouse-x)  y (mouse-y)]
     (reset! (state :mouse-position) [x y])))