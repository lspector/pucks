(ns pucks.neighbors
  (:use pucks.globals pucks.util pucks.vec2D))

(defn wrap-grid-coordinate 
  [c]
  (if (< c 0)
    (dec (:grid-steps @parameters))
    (if (>= c (:grid-steps @parameters))
      0
      c)))
  
(defn wrap-gridxy
  [xy]
  (vec (map wrap-grid-coordinate xy)))

(defn xy->gridxy
  [xy]
  (wrap-gridxy (map (fn [c] (int (/ c (:grid-step-size @parameters)))) xy)))

(defn strip-neighbors
  [obj]
  (-> obj
    (dissoc :neighbors)
    (dissoc :sensed)
    (dissoc :overlaps)))

(defn make-world-grid
  [objs]
  (let [grid-steps (max 1 (int (/ (:screen-size @parameters)
                                  (:neighborhood-size @parameters))))]
    (swap! parameters
           (fn [params]
               (-> params 
                 (assoc :grid-steps grid-steps)
                 (assoc :grid-step-size (max 1 (int (/ (:screen-size params) 
                                                       grid-steps)))))))
    (loop [grid (vec (repeat grid-steps (vec (repeat grid-steps []))))
           remaining (into [] (map strip-neighbors objs))]
      (if (empty? remaining)
        grid
        (recur (update-in grid 
                          (xy->gridxy (:position (first remaining)))
                          conj
                          (first remaining))
               (rest remaining))))))
  
(defn update-neighbors
  "Annotates each world object with :neighbors and :overlaps."
  []
  (swap! 
   world-objects
   (fn [objs]
     (let [grid (make-world-grid objs)
           window (fn [c] (mapv #(wrap-grid-coordinate (+ c %)) [-1 0 1]))]
       (into []
             (pmapall (fn [obj]
                        (let [neighs (vec 
                                       (relativize-positions
                                         (filter #(and (not (= (:id obj) (:id %)))
                                                       (<= (length (map - (:position obj) (:position %)))
                                                           (:neighborhood-size @parameters)))
                                                 (apply concat
                                                        (let [[x y] (xy->gridxy (:position obj))]
                                                          (doall
                                                            (for [xs (window x)
                                                                  ys (window y)]
                                                              (get-in grid (wrap-gridxy [xs ys])))))))
                                         (:position obj)))]
                          (-> obj
                            (assoc :neighbors neighs)
                            (assoc :overlaps
                                   (vec (filter #(<= (length (:position %))
                                                      (+ (:radius obj) (:radius %)))
                                                neighs))))))
                      objs))))))


