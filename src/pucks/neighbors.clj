(ns pucks.neighbors
  (:use pucks.globals pucks.util pucks.vec2D))

(defn strip-neighbors
  [obj]
  (-> obj
    (dissoc :neighbors)
    (dissoc :sensed)
    (dissoc :overlaps)))

(defn update-neighbors
  "Annotates each world object with :neighbors and :overlaps."
  []
  (swap! 
   world-objects
   (fn [objs]
     (let [stripped (mapv strip-neighbors objs)]
       (pmapallv (fn [obj]
                   (let [neighs (vec 
                                  (relativize-positions
                                    (filterv #(and (not (= (:id obj) (:id %)))
                                                   (<= (length (mapv - (:position obj) (:position %)))
                                                       (:neighborhood-size @pucks-settings)))
                                             stripped)
                                    (:position obj)))]
                     (-> obj
                       (assoc :neighbors neighs)
                       (assoc :overlaps
                              (filterv #(<= (length (:position %))
                                             (+ (:radius obj) (:radius %)))
                                      neighs)))))
                 stripped)))))

