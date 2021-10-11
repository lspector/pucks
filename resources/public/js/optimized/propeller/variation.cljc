(ns propeller.variation
    (:require [propeller.selection :as selection]
      [propeller.utils :as utils]))

(defn crossover
  "Crosses over two individuals using uniform crossover. Pads shorter one."
  [plushy-a plushy-b]
  (let [shorter (min-key count plushy-a plushy-b)
        longer (if (= shorter plushy-a)
                 plushy-b
                 plushy-a)
        length-diff (- (count longer) (count shorter))
        shorter-padded (concat shorter (repeat length-diff :crossover-padding))]
    (remove #(= % :crossover-padding)
            (map #(if (< (rand) 0.5) %1 %2)
                 shorter-padded
                 longer))))

(defn tail-aligned-crossover
  "Crosses over two individuals using uniform crossover. Pads shorter one on the left."
  [plushy-a plushy-b]
  (let [shorter (min-key count plushy-a plushy-b)
        longer (if (= shorter plushy-a)
                 plushy-b
                 plushy-a)
        length-diff (- (count longer) (count shorter))
        shorter-padded (concat (repeat length-diff :crossover-padding) shorter)]
    (remove #(= % :crossover-padding)
            (map #(if (< (rand) 0.5) %1 %2)
                 shorter-padded
                 longer))))

(defn diploid-crossover
  "Crosses over two individuals using uniform crossover. Pads shorter one."
  [plushy-a plushy-b]
  (let [plushy-a (partition 2 plushy-a)
        plushy-b (partition 2 plushy-b)
        shorter (min-key count plushy-a plushy-b)
        longer (if (= shorter plushy-a)
                 plushy-b
                 plushy-a)
        length-diff (- (count longer) (count shorter))
        shorter-padded (concat shorter (repeat length-diff :crossover-padding))]
    (flatten (remove #(= % :crossover-padding)
                     (map #(if (< (rand) 0.5) %1 %2)
                          shorter-padded
                          longer)))))

(defn tail-aligned-diploid-crossover
  "Crosses over two individuals using uniform crossover. Pads shorter one on the left."
  [plushy-a plushy-b]
  (let [plushy-a (partition 2 plushy-a)
        plushy-b (partition 2 plushy-b)
        shorter (min-key count plushy-a plushy-b)
        longer (if (= shorter plushy-a)
                 plushy-b
                 plushy-a)
        length-diff (- (count longer) (count shorter))
        shorter-padded (concat (repeat length-diff :crossover-padding) shorter)]
    (flatten (remove #(= % :crossover-padding)
                     (map #(if (< (rand) 0.5) %1 %2)
                          shorter-padded
                          longer)))))

(defn uniform-addition
  "Returns plushy with new instructions possibly added before or after each
  existing instruction."
  [plushy instructions umad-rate]
  (apply concat
         (map #(if (< (rand) umad-rate)
                 (shuffle [% (utils/random-instruction instructions)])
                 [%])
              plushy)))

(defn uniform-replacement
  "Returns plushy with new instructions possibly replacing existing
   instructions."
  [plushy instructions replacement-rate]
  (map #(if (< (rand) replacement-rate)
          (utils/random-instruction instructions)
          %)
       plushy))

(defn diploid-uniform-silent-replacement
  "Returns plushy with new instructions possibly replacing existing
   instructions, but only among the silent member of each pair."
  [plushy instructions replacement-rate]
  (interleave (map first (partition 2 plushy))
              (map #(if (< (rand) replacement-rate)
                      (utils/random-instruction instructions)
                      %)
                   (map second (partition 2 plushy)))))

(defn diploid-uniform-addition
  "Returns plushy with new instructions possibly added before or after each
  existing instruction."
  [plushy instructions umad-rate]
  (flatten
    (map (fn [pair]
           (if (< (rand) umad-rate)
             (shuffle [pair (repeatedly 2 #(utils/random-instruction instructions))])
             [pair]))
         (partition 2 plushy))))

(defn uniform-deletion
  "Randomly deletes instructions from plushy at some rate."
  [plushy umad-rate]
  (if (zero? umad-rate)
    plushy
    (remove (fn [_] (< (rand)
                       (/ 1 (+ 1 (/ 1 umad-rate)))))
            plushy)))

(defn diploid-uniform-deletion
  "Randomly deletes instructions from plushy at some rate."
  [plushy umad-rate]
  (flatten (remove (fn [_] (< (rand)
                              (/ 1 (+ 1 (/ 1 umad-rate)))))
                   (partition 2 plushy))))

(defn diploid-flip
  "Randomly flips pairs in a diploid plushy at some rate."
  [plushy flip-rate]
  (flatten (map #(if (< (rand) flip-rate)
                   (reverse %)
                   %)
                (partition 2 plushy))))

(defn new-individual
  "Returns a new individual produced by selection and variation of
  individuals in the population."
  [pop argmap]
  {:plushy
   (let [r (rand)
         op (loop [accum 0.0
                   ops-probs (vec (:variation argmap))]
              (if (empty? ops-probs)
                :reproduction
                (let [[op1 prob1] (first ops-probs)]
                  (if (>= (+ accum prob1) r)
                    op1
                    (recur (+ accum prob1)
                           (rest ops-probs))))))]
     (case op
       :crossover
       (crossover
         (:plushy (selection/select-parent pop argmap))
         (:plushy (selection/select-parent pop argmap)))
       ;
       :tail-aligned-crossover
       (tail-aligned-crossover
         (:plushy (selection/select-parent pop argmap))
         (:plushy (selection/select-parent pop argmap)))
       ;
       :umad
       (-> (:plushy (selection/select-parent pop argmap))
           (uniform-addition (:instructions argmap) (:umad-rate argmap))
           (uniform-deletion (:umad-rate argmap)))
       ;
       :rumad
       (let [parent-genome (:plushy (selection/select-parent pop argmap))
             after-addition (uniform-addition parent-genome
                                              (:instructions argmap)
                                              (:umad-rate argmap))
             effective-addition-rate (/ (- (count after-addition)
                                           (count parent-genome))
                                        (count parent-genome))]
         (uniform-deletion after-addition effective-addition-rate))
       ;
       :uniform-addition
       (-> (:plushy (selection/select-parent pop argmap))
           (uniform-addition (:instructions argmap) (:umad-rate argmap)))
       ;
       :uniform-replacement
       (-> (:plushy (selection/select-parent pop argmap))
           (uniform-replacement (:instructions argmap) (:replacement-rate argmap)))
       ;
       :diploid-uniform-silent-replacement
       (-> (:plushy (selection/select-parent pop argmap))
           (diploid-uniform-silent-replacement (:instructions argmap) (:replacement-rate argmap)))
       ;
       :uniform-deletion
       (-> (:plushy (selection/select-parent pop argmap))
           (uniform-deletion (:umad-rate argmap)))
       ;
       :diploid-crossover
       (diploid-crossover
         (:plushy (selection/select-parent pop argmap))
         (:plushy (selection/select-parent pop argmap)))
       ;
       :tail-aligned-diploid-crossover
       (tail-aligned-diploid-crossover
         (:plushy (selection/select-parent pop argmap))
         (:plushy (selection/select-parent pop argmap)))
       ;
       :diploid-umad
       (-> (:plushy (selection/select-parent pop argmap))
           (diploid-uniform-addition (:instructions argmap) (:umad-rate argmap))
           (diploid-uniform-deletion (:umad-rate argmap)))
       ;
       :diploid-uniform-addition
       (-> (:plushy (selection/select-parent pop argmap))
           (diploid-uniform-addition (:instructions argmap) (:umad-rate argmap)))
       ;
       :diploid-uniform-deletion
       (-> (:plushy (selection/select-parent pop argmap))
           (diploid-uniform-deletion (:umad-rate argmap)))
       ;
       :diploid-flip
       (-> (:plushy (selection/select-parent pop argmap))
           (diploid-flip (:diploid-flip-rate argmap)))
       ;
       :reproduction
       (:plushy (selection/select-parent pop argmap))
       ;
       :else
       (throw #?(:clj  (Exception. (str "No match in new-individual for " op))
                 :cljs (js/Error
                         (str "No match in new-individual for " op))))))})
