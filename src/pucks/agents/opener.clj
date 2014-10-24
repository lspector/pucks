(ns pucks.agents.opener
  (:use [pucks globals util]
        [pucks.agents active]))

(defn opener-proposals [p]
  {:acceleration 0
   :rotation (direction->rotation (:velocity p))
   :transfer (vec (for [gate (filter :gate (:overlaps p))]
                    {:self (:id p)
                     :other (:id gate)
                     :bid {:inventory :key}
                     :ask (fn [my-bid your-bid]
                            (let [your-open-promise (:open (:memory (:promise your-bid)))]
                              (and your-open-promise
                                   (pos? your-open-promise))))}))})

(defn opener []
  (merge (active)
         {:user true
          :proposal-function opener-proposals
          :inventory #{:key}}))