(ns propeller.genome
  (:require [propeller.push.core :as push]
            [propeller.utils :as utils]))

(defn make-random-plushy
  "Creates and returns a new plushy."
  [instructions max-initial-plushy-size]
  (repeatedly
    (rand-int max-initial-plushy-size)
    #(utils/random-instruction instructions)))

(defn plushy->push
  "Returns the Push program expressed by the given plushy representation."
  ([plushy] (plushy->push plushy {}))
  ([plushy argmap]
   (let [plushy (if (:diploid argmap) (map first (partition 2 plushy)) plushy)
         opener? #(and (vector? %) (= (first %) 'open))]    ;; [open <n>] marks opens
     (loop [push ()                                         ;; iteratively build the Push program from the plushy
            plushy (mapcat #(if-let [n (get push/opens %)] [% ['open n]] [%]) plushy)]
       (if (empty? plushy)                                  ;; maybe we're done?
         (if (some opener? push)                            ;; done with plushy, but unclosed open
           (recur push '(close))                            ;; recur with one more close
           push)                                            ;; otherwise, really done, return push
         (let [i (first plushy)]
           (if (= i 'close)
             (if (some opener? push)                        ;; process a close when there's an open
               (recur (let [post-open (reverse (take-while (comp not opener?)
                                                           (reverse push)))
                            open-index (- (count push) (count post-open) 1)
                            num-open (second (nth push open-index))
                            pre-open (take open-index push)]
                        (if (= 1 num-open)
                          (concat pre-open [post-open])
                          (concat pre-open [post-open ['open (dec num-open)]])))
                      (rest plushy))
               (recur push (rest plushy)))                  ;; unmatched close, ignore
             (recur (concat push [i]) (rest plushy))))))))) ;; anything else
