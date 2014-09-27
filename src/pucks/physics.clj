(ns pucks.physics
  (:use quil.core 
        pucks.globals pucks.util pucks.vec2D))

(defn generate-proposals
  []
  (swap! world-objects
         (fn [objs]
           (into [] 
                 (pmapallv #(assoc % :proposals ((:proposal-function %) 
                                                  (-> %
                                                    (assoc :neighbors [])
                                                    (assoc :position [0 0]))))
                          objs)))))

(defn colliding?
  [self neighbor]
  (< (length (:position neighbor))
     (+ (/ (:radius self) 2)
        (/ (:radius neighbor) 2))))

(defn arbitrate-proposals
  []
  (swap! world-objects       
         (fn [objs]
           (let [;; Each transaction is a vector of all proposed transfers between the same pair
                 ;; of objects.
                 ;; Transactions are processed one at a time in random order.
                 ;; Each is accepted if the source would not be depeleted and
                 ;; no other constaints would be violated.
                 affects-same-agents? (fn [xfer1 xfer2]
                                        (= #{(:self xfer1) (:other xfer1)}
                                           #{(:self xfer2) (:other xfer2)}))
                 transactions (loop [remaining (apply concat
                                                      (mapv :transfer
                                                            (mapv :proposals objs)))
                                     result []]
                                (if (empty? remaining)
                                  (shuffle result)
                                  (recur (filter #(not (affects-same-agents? % (first remaining)))
                                                 remaining)
                                         (conj result 
                                               (filterv #(affects-same-agents? % (first remaining))
                                                        remaining)))))
                 post-xfer-objs (loop [remaining transactions
                                       obj-map (zipmap (map :id objs) objs)]
                                  (if (empty? remaining)
                                    (vec (vals obj-map))
                                    (let [t (first remaining)
                                          self-id (:self (first t))
                                          self (self-id obj-map)
                                          other-id (:other (first t))
                                          other (other-id obj-map)]
                                      (cond 
                                        ;; vent
                                        (:vent self)
                                        (if (and (:mobile other)
                                                 (>= (:energy self)
                                                     (:energy (:bid (first t)))))
                                          (recur (rest remaining)
                                                 (-> obj-map
                                                   (dissoc self-id)
                                                   (dissoc other-id)
                                                   (assoc self-id (assoc self
                                                                         :energy
                                                                         (- (:energy self) (:energy (:bid (first t))))))
                                                   (assoc other-id (assoc other
                                                                          :energy
                                                                          (min 1 (+ (:energy other) 
                                                                                    (:energy (:bid (first t)))))))))
                                          (recur (rest remaining)
                                                 obj-map))
                                        ;; zapper
                                        (:zapper self)
                                        (if (:mobile other)
                                          (recur (rest remaining)
                                                 (assoc obj-map 
                                                        other-id 
                                                        (assoc other :energy (max 0 (- (:energy other)
                                                                                       (:energy (:ask (first t))))))))
                                          (recur (rest remaining)
                                                 obj-map))
                                        ;; other transactions (currently ignored)
                                        :else
                                        (recur (rest remaining) obj-map)))))]
             (vec (apply concat
                         (pmapallv
                           (fn [{:keys [position velocity rotation neighbors proposals mobile energy radius] :as obj}]
                             (let [proposed-a (*v (or (:acceleration proposals) 0) 
                                                  (rotation->direction rotation)) ;; vec from proposed scalar * rotation
                                   anti-collision-a (if mobile
                                                      (let [colliding-neighbors (filter #(and (:solid %)
                                                                                              (colliding? obj %))
                                                                                        neighbors)]
                                                        (if (empty? colliding-neighbors)
                                                          [0 0]
                                                          (*v (:collision-resolution-force @parameters)
                                                              (apply avgv 
                                                                     (mapv -v (mapv :position
                                                                                    colliding-neighbors))))))
                                                      [0 0])
                                   ;_ (when mobile (println "anti-collision-a" anti-collision-a))
                                   just-collided (not (zero? (length anti-collision-a)))
                                   new-a (limit-vec2D (+v proposed-a anti-collision-a) (:max-acceleration @parameters))
                                   ;_ (when mobile (println "new-a" new-a))
                                   proposed-v (+v velocity new-a)
                                   ;_ (when mobile (println "proposed-v" proposed-v))
                                   new-v (if mobile (limit-vec2D proposed-v (* (:max-velocity @parameters) radius)) [0 0])
                                   ;_ (when mobile (println "new-v" new-v))
                                   new-p (wrap-position (+v position new-v))
                                   ;_ (when mobile (println "new-p" new-p))
                                   proposed-r (if (= (:rotation proposals) :from-velocity)
                                                (direction->rotation new-v)
                                                (or (:rotation proposals) 0))
                                   new-r (if mobile
                                           (wrap-rotation
                                             (let [max-rotational-velocity (:max-rotational-velocity @parameters)]
                                               (cond 
                                                 ;; already there
                                                 (== proposed-r rotation) 
                                                 rotation
                                                 ;; go up normal
                                                 (and (> proposed-r rotation) 
                                                      (< (- proposed-r rotation) pi))
                                                 (+ rotation (min max-rotational-velocity
                                                                  (- proposed-r rotation)))
                                                 ;; go up to wrap
                                                 (and (< proposed-r rotation)
                                                      (> (- rotation proposed-r) pi))
                                                 (+ rotation (min max-rotational-velocity
                                                                  (+ (- pi rotation)
                                                                     (- proposed-r minus-pi))))
                                                 ;; go down normal
                                                 (< proposed-r rotation)
                                                 (- rotation (min max-rotational-velocity
                                                                  (- rotation proposed-r)))
                                                 ;; go down to wrap
                                                 :else
                                                 (- rotation (min max-rotational-velocity
                                                                  (+ (- rotation minus-pi)
                                                                     (- pi proposed-r)))))))
                                           rotation)]
                               (concat (or (mapv #(derelativize-position position %)
                                                 (:spawn proposals))
                                           [])
                                       [(-> obj
                                          (assoc :velocity new-v)
                                          (assoc :position new-p)
                                          (assoc :rotation new-r)
                                          (assoc :energy (min 1
                                                              (max 0
                                                                   (- energy 
                                                                      (if mobile (:cost-of-living @parameters) 0)
                                                                      (if just-collided (:cost-of-collision @parameters) 0)
                                                                      (if (:vent obj) -0.005 0)))))
                                          (assoc :just-collided just-collided)
                                          (assoc :memory (:memory proposals)))])))
                           post-xfer-objs)))))))

(defn reap
  []
  (swap! world-objects
         (fn [objs]
           (let [with-corpses
                 (mapv #(if (and (:mobile %) (not (pos? (:energy %))))
                          (merge-agents % {:corpse true
                                           :death-step (:steps %)
                                           :mobile false
                                           :color [100 100 100] 
                                           :proposal-function (fn [p] {})})
                          %)
                       objs)]
             ;; eliminate corpses that are fully rotted
             (filterv #(not (and (:corpse %)
                                 (> (:steps %)
                                    (+ (:death-step %) 30))))
                      with-corpses)))))



