(ns pucks.vec2D)

(defn distance [[x1 y1][x2 y2]]
  (Math/sqrt (+ (* (- x1 x2) (- x1 x2))
                (* (- y1 y2) (- y1 y2)))))

(defn length [[x y]]
  (Math/sqrt (+ (* x x) (* y y))))

(defn *v [& vecs-or-nums]
  (vec (apply map * (map #(if (number? %) [% %] %) vecs-or-nums))))

(defn +v [& vecs-or-nums]
  (vec (apply map + (map #(if (number? %) [% %] %) vecs-or-nums))))

(defn -v [& vecs-or-nums]
  (vec (apply map - (map #(if (number? %) [% %] %) vecs-or-nums))))

(defn avgv [& vecs-or-nums]
  (if (empty? vecs-or-nums)
    [0 0]
    (vec (map #(/ % (count vecs-or-nums)) 
              (apply +v vecs-or-nums)))))

(defn nrm [xy]
  (let [len (length xy)]
    (if (zero? len)
      xy
      (vec (map #(/ % len) xy)))))

(defn nrm-wrt [xy limit]
  (*v (min (length xy) limit)
      (nrm xy)))

(defn limit-vec2D [xy limit]
  (if (< (length xy) limit)
    xy
    (nrm-wrt xy limit)))

(defn relativize-positions
  [world-objects position]
  (mapv #(assoc % :position (-v (:position %) position))
        world-objects))
