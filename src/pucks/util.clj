(ns pucks.util
  (:require [clojure.core.reducers :as r])
  (:use clojure.repl clojure.pprint quil.core pucks.globals pucks.vec2D))

(defn wrap-rotation 
  "Wraps rotation angle r to -pi <= r <= pi"
  [r]
  (cond (< r minus-pi) (+ two-pi r)
       (> r pi) (- r two-pi)
       :else r))

(defn ms []
  (java.lang.System/currentTimeMillis))

(defn wrap-position [[x y]]
  (let [screen-size (:screen-size @parameters)]
    [(if (< x 0) 
       (+ screen-size x)
       (if (>= x screen-size)
         (- x screen-size)
         x))
     (if (< y 0) 
       (+ screen-size y)
       (if (>= y screen-size)
         (- y screen-size)
         y))]))

(defn direction->rotation [[x y]]
  ;;http://stackoverflow.com/questions/2276855/xna-2d-vector-angles-whats-the-correct-way-to-calculate
  (if (and (zero? x) (zero? y))
    (- (rand two-pi) pi)
    (atan2 x (- y))))

(defn rotation->direction [theta]
  [(Math/sin theta) (Math/cos (- theta Math/PI))])

(defn merge-agents
  "Like merge for all keys except :draw-functions, for which 
this acts like merge-with concat, and :agent-types, for which this
acts like merge-with clojure.set/union."
  [& maps]
  (-> (apply merge maps)
    (assoc :draw-functions (apply concat (mapv :draw-functions maps)))
    (assoc :agent-types (apply clojure.set/union (mapv :agent-types maps)))))

(defn objects-overlapping-xy
  [x y]
  (filterv (fn [o]
             (< (distance (:position o) [x y])
                (:radius o)))
           @world-objects))

(defn rand-xy 
  "Returns a random [x y] where x and y can range from 0 (inclusive)
to (:screen-size parameters) (exclusive)."
  []
  [(rand-int (:screen-size @parameters)) (rand-int (:screen-size @parameters))])

(defn pret 
  "Println and then return value v."
  [v]
  (do (println v)
    v))

(defn print-stats []
  (println "World objects:" (count @world-objects))
  (println "Avg neighbors" (float (/ (reduce + (map count (map :neighbors @world-objects)))
                                     (count @world-objects))))
  (when (zero? (mod @iteration 100)) 
    (println)
    (pprint (first @world-objects))))
            

#_(defn pmapall
   "Like pmap but: 1) coll should be finite, 2) the returned sequence
   will not be lazy, 3) calls to f may occur in any order, to maximize
   multicore processor utilization, and 4) takes only one coll so far."
   [f coll]
   (if (:single-thread-mode @parameters)
     (doall (map f coll))
     (let [agents (map #(agent % :error-handler 
                               (fn [agnt except] (clojure.repl/pst except 1000) (System/exit 0))) 
                       coll)]
       (dorun (map #(send % f) agents))
       (apply await agents)
       (doall (map deref agents)))))

(defn pmapall
   "Like pmap but: 1) coll should be finite, 2) the returned sequence
   will not be lazy, 3) calls to f may occur in any order, to maximize
   multicore processor utilization, and 4) takes only one coll so far."
   [f coll]
   (if (:single-thread-mode @parameters)
     (doall (map f coll))
     (r/fold 1 r/cat r/append! (r/map f coll))))

(defn pmapallv
   "Like pmap but: 1) coll should be finite, 2) the returned sequence
   will be a vector, 3) calls to f may occur in any order, to maximize
   multicore processor utilization, and 4) takes only one coll so far."
   [f coll]
   (into []
         (if (:single-thread-mode @parameters)
           (doall (map f coll))
           (r/fold 1 r/cat r/append! (r/map f coll)))))
