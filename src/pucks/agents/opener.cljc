(ns pucks.agents.opener
  (:require [pucks.util :as util]
            [pucks.agents.active :as active]))

(defn opener-proposals [p]
  {:acceleration 0
   :rotation (util/relative-position->rotation (:velocity p))
   :transfer (vec (concat 
                    ;; ask for a key from anyone
                    (for [anyone (:overlaps p)]
                      {:self (:id p)
                       :other (:id anyone)
                       :bid {:request {:inventory :key}}
                       :ask {:inventory :key}})
                    ;; offer a key to a gate that promises to open for a positive amount of time
                    (for [gate (filter :gate (:overlaps p))]
                      {:self (:id p)
                       :other (:id gate)
                       :bid {:inventory :key}
                       :ask (fn [my-bid your-bid]
                              (when-let [open-promise (:open (:promise your-bid))]
                                (pos? open-promise)))})))})

(defn opener []
  (merge (active/active)
         {:opener true
          :proposal-function opener-proposals}))
