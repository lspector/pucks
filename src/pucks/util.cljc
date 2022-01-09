;; General utility functions for pucks.

(ns pucks.util
  (:require [quil.core :as q]
            [pucks.globals :as globals]
            [pucks.vec2D :as vec2D]
            [clojure.repl :as repl]))

(defn wrap-rotation 
  "Wraps rotation angle r to -pi <= r <= pi"
  [r]
  (cond (< r globals/minus-pi) (+ globals/two-pi r)
       (> r globals/pi) (- r globals/two-pi)
       :else r))

(defn rotational-difference
  "Returns the number of radians separating rot1 and rot2, the shortest way
around."
  [rot1 rot2]
  (let [r1wrapped (wrap-rotation rot1)
        r2wrapped (wrap-rotation rot2)
        diff (Math/abs (- r1wrapped r2wrapped))]
    (min diff (- globals/two-pi diff))))

(defn ms 
  "Returns the current time in milliseconds."
  []
  (java.lang.System/currentTimeMillis))

(defn wrap-position 
  "Returns the given coordinate if it refers to a position in the world. If not,
then this returns the coordinate resulting from wrapping the coordinate around
the world, assuming it is torroidal, so that the returned coordinate will indeed
refer to a position in the world." 
  [[x y]]
  (let [screen-size (:screen-size @globals/pucks-settings)]
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

(defn relative-position->rotation 
  "Returns a rotation corresponding to a provided [x y] relative position."
  [[x y]]
  ;; from http://stackoverflow.com/questions/2276855/xna-2d-vector-angles-whats-the-correct-way-to-calculate
  (if (and (zero? x) (zero? y))
    (- (rand globals/two-pi) globals/pi)
    (q/atan2 x (- y))))

(defn direction->rotation   ;; retained for legacy code
  "Returns a rotation corresponding to a provided [x y] relative position."
  [[x y]]
  (relative-position->rotation [x y]))

(defn relativize-position
  "Returns agent but will its position converted to be relative to the provided
position in a toroidal world."
  [agent position]
  (assoc agent :position 
         (let [[ax ay] (:position agent)
               [px py] position
               sz (:screen-size @globals/pucks-settings)]
           [(if (< (q/abs (- ax px)) ;; if true, within plane, if not, wrap
                   (min (+ ax (- sz px))
                        (+ px (- sz ax))))
              (- ax px)
              (if (> ax px)
                (- (+ px (- sz ax)))
                (+ ax (- sz px))))
            (if (< (q/abs (- ay py)) ;; if true, within plane, if not, wrap
                   (min (+ ay (- sz py))
                        (+ py (- sz ay))))
              (- ay py)
              (if (> ay py)
                (- (+ py (- sz ay)))
                (+ ay (- sz py))))])))

(defn derelativize-position 
  "Returns agent but with its position augmented by reference-xy."
  [reference-xy agent]
  (assoc agent :position (wrap-position (vec2D/+v reference-xy (:position agent)))))

(defn rotation->relative-position
  "Returns an [x y] relative position in the direction of the given rotation."
  [theta]
  [(Math/sin theta) (Math/cos (- theta Math/PI))])

(defn rotation->direction ;; retained for legacy code
  "Returns an [x y] relative position in the direction of the given rotation."
  [theta]
  (rotation->relative-position theta))

(defn objects-overlapping-xy
  "Returns a vector of all objects in the world that overlap the given 
position."
  [x y]
  (filterv (fn [o]
             (< (vec2D/distance (:position o) [x y])
                (:radius o)))
           @globals/all-agents))

(defn rand-xy 
  "Returns a random [x y] where x and y can range from 0 (inclusive)
to (:screen-size @pucks-settings) (exclusive)."
  []
  [(rand-int (:screen-size @globals/pucks-settings)) (rand-int (:screen-size @globals/pucks-settings))])

(defn pret 
  "Println and then return value v."
  [v]
  (do (println v)
    v))

(defn abbreviate-embedded-agents
  "Replaces embedded agents with {:abbrev (:id agent)}. This is indended
for use in printing agents, to keep the printed form readible and of reasonable
size."
  [a]
  (-> a
    (assoc :neighbors (mapv #(do {:abbrev (:id %)}) (:neighbors a)))
    (assoc :sensed (mapv #(do {:abbrev (:id %)}) (:sensed a)))
    (assoc :overlaps (mapv #(do {:abbrev (:id %)}) (:overlaps a)))
    (assoc :proposals (assoc (:proposals a) :spawn :abbrev))))

(defn print-stats []
  "Prints a statistics about the state of the world."
  (println "World objects:" (count @globals/all-agents))
  (println "Avg neighbors" (float (/ (reduce + (map count (map :neighbors @globals/all-agents)))
                                     (count @globals/all-agents)))))

(defn pmapallv
  "A utility for concurrent execution of a function on items in a collection.
In single-thread-mode this acts like mapv. Otherwise it acts like pmap but: 
1) coll should be finite, 2) the returned sequence will not be lazy, and will
in fact be a vector, 3) calls to f may occur in any order, to maximize
multicore processor utilization, and 4) takes only one coll so far."
  [f coll]
  #?(:clj (vec (if (:single-thread-mode @globals/pucks-settings)
                 (doall (map f coll))
                 (let [agents (map #(agent % :error-handler
                                           (fn [agnt except] (clojure.repl/pst except 1000) (System/exit 0)))
                                   coll)]
                   (dorun (map #(send % f) agents))
                   (apply await agents)
                   (doall (map deref agents)))))
     :cljs (mapv f coll)
  ))

(defn remove-one
  "Returns sequence s without the first instance of item."
  [item s]
  (let [[without-item with-item] (split-with #(not (= item %)) s)]
    (concat without-item (rest with-item))))

(defn clamp01
  "Returns number n if it is between 0.0 and 1.0, 0.0 if n is negative, and 
   1.0 if it is greater than 1.0."
  [n]
  (if (neg? n)
    0.0
    (if (> n 1.0)
      1.0
      n)))

