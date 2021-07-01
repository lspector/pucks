;; Pucks utilities for manipulating [x y] (2D) points and vectors.

(ns pucks.vec2D
  (:use pucks.globals quil.core))

(defn distance 
  "Returns the distance between two points on a toroidal world."
  ;; http://stackoverflow.com/questions/2123947/calculate-distance-between-two-x-y-coordinates
  ;; sqrt(min(|x1 - x2|, w - |x1 - x2|)^2 + min(|y1 - y2|, h - |y1-y2|)^2)
  [[x1 y1][x2 y2]]
  (let [wh (:screen-size @pucks-settings)]
    (Math/sqrt (+ (#(* % %) (min (abs (- x1 x2)) (- wh (abs (- x1 x2)))))
                  (#(* % %) (min (abs (- y1 y2)) (- wh (abs (- y1 y2)))))))))

(defn length 
  "Returns the length of the [x y] vector."
  [[x y]]
  (Math/sqrt (+ (* x x) (* y y))))

(defn *v 
  "Returns the result of multiplying any number of [x y] vectors.
Single numbers n will be treated as [n n] vectors."
  [& vecs-or-nums]
  (vec (apply map * (map #(if (number? %) [% %] %) vecs-or-nums))))

(defn +v 
  "Returns the result of adding any number of [x y] vectors.
Single numbers n will be treated as [n n] vectors."
  [& vecs-or-nums]
  (vec (apply map + (map #(if (number? %) [% %] %) vecs-or-nums))))

(defn -v 
  "Returns the result of subtracting any number of [x y] vectors.
Single numbers n will be treated as [n n] vectors."
  [& vecs-or-nums]
  (vec (apply map - (map #(if (number? %) [% %] %) vecs-or-nums))))

(defn avgv 
  "Returns the result of averaging any number of [x y] vectors.
Single numbers n will be treated as [n n] vectors."
  [& vecs-or-nums]
  (if (empty? vecs-or-nums)
    [0 0]
    (vec (map #(/ % (count vecs-or-nums)) 
              (apply +v vecs-or-nums)))))

(defn limit-vec2D [xy limit]
  "Returns the given xy vector if its length is no longer than limit. If its
length is longer than limit then returns xy scale to have limit as its length."
  (if (<= (length xy) limit)
    xy
    (*v limit
        (vec (map #(/ % (length xy)) xy)))))

(defn limit1
  "An abbreviation for (limit-vec2D n 1.0)."
  [n]
  (limit-vec2D n 1.0))
  