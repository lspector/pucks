(ns propeller.push.instructions.bool
  #?(:cljs (:require-macros [propeller.push.utils.macros :refer [def-instruction]]))
  (:require [propeller.push.utils.helpers :refer [make-instruction]]
            #?(:clj [propeller.push.utils.macros :refer [def-instruction]])))

;; =============================================================================
;; BOOLEAN Instructions
;; =============================================================================

;; Pushes the logical AND of the top two BOOLEANs
(def-instruction
  :boolean_and
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(and %1 %2) [:boolean :boolean] :boolean)))

;; Pushes the logical OR of the top two BOOLEANs
(def-instruction
  :boolean_or
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(or %1 %2) [:boolean :boolean] :boolean)))

;; Pushes the logical NOT of the top BOOLEAN
(def-instruction
  :boolean_not
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state not [:boolean] :boolean)))

;; Pushes the logical XOR of the top two BOOLEAN
(def-instruction
  :boolean_xor
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(or (and %1 (not %2))
                                 (and (not %1) %2))
                      [:boolean :boolean]
                      :boolean)))

;; Pushes the logical AND of the top two BOOLEANs, after applying NOT to the
;; first one
(def-instruction
  :boolean_invert_first_then_and
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(and %1 (not %2)) [:boolean :boolean] :boolean)))

;; Pushes the logical AND of the top two BOOLEANs, after applying NOT to the
;; second one
(def-instruction
  :boolean_invert_second_then_and
  ^{:stacks #{:boolean}}
  (fn [state]
    (make-instruction state #(and (not %1) %2) [:boolean :boolean] :boolean)))

;; Pushes FALSE if the top FLOAT is 0.0, and TRUE otherwise
(def-instruction
  :boolean_from_float
  ^{:stacks #{:boolean :float}}
  (fn [state]
    (make-instruction state #(not (zero? %)) [:float] :boolean)))

;; Pushes FALSE if the top INTEGER is 0, and TRUE otherwise
(def-instruction
  :boolean_from_integer
  ^{:stacks #{:boolean :integer}}
  (fn [state]
    (make-instruction state #(not (zero? %)) [:integer] :boolean)))
