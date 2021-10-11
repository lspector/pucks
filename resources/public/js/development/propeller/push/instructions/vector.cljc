(ns propeller.push.instructions.vector
  #?(:cljs (:require-macros [propeller.push.utils.macros :refer [generate-instructions]]))
  (:require [clojure.string]
            [propeller.utils :as utils]
            [propeller.push.state :as state]
            [propeller.push.utils.helpers :refer [get-vector-literal-type
                                                  make-instruction]]
            #?(:clj [propeller.push.utils.macros :refer [generate-instructions]])))

;; =============================================================================
;; VECTOR Instructions
;;
;; (common for all vector element subtypes: BOOLEAN, FLOAT, INTEGER, and STRING)
;; =============================================================================

;; Pushes the butlast of the top item
(def _butlast
  ^{:stacks #{}
    :name "_butlast"}
  (fn [stack state]
    (make-instruction state #(vec (butlast %)) [stack] stack)))

;; Concats and pushes the top two vectors of the stack
(def _concat
  ^{:stacks #{}
    :name "_concat"}
  (fn [stack state]
    (make-instruction state #(vec (concat %2 %1)) [stack stack] stack)))

;; Conj's the top item of the appropriately-typed literal stack onto the vector
;; stack (e.g. pop the top INTEGER and conj it onto the top VECTOR_INTEGER)
(def _conj
  ^{:stacks #{:elem}
    :name "_conj"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state #(conj %2 %1) [lit-stack stack] stack))))

;; Pushes TRUE onto the BOOLEAN stack if the top element of the vector stack
;; contains the top element of the appropriately-typed literal stack. Otherwise,
;; pushes FALSE
(def _contains
  ^{:stacks #{:boolean}
    :name "_contains"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state #(contains? (set %2) %1) [lit-stack stack] :boolean))))

;; Pushes TRUE onto the BOOLEAN stack if the top element is an empty vector.
;; Otherwise, pushes FALSE
(def _emptyvector
  ^{:stacks #{:boolean}
    :name "_emptyvector"}
  (fn [stack state]
    (make-instruction state empty? [stack] :boolean)))

;; Pushes the first item of the top element of the vector stack onto the
;; appropriately-typed literal stack. If the vector is empty, return
;; :ignore-instruction so that nothing is changed on the stacks.
(def _first
  ^{:stacks #{:elem}
    :name "_first"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        #(if (empty? %) :ignore-instruction (first %))
                        [stack]
                        lit-stack))))

;; Pushes onto the INTEGER stack the index of the top element of the
;; appropriately-typed literal stack within the top element of the vector stack
(def _indexof
  ^{:stacks #{:elem :integer}
    :name "_indexof"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state #(utils/indexof %1 %2) [lit-stack stack] :integer))))

;; Iterates over the vector using the code on the exec stack
(def _iterate
  ^{:stacks #{:elem :integer}
    :name "_iterate"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (if (or (state/empty-stack? state :exec)
              (state/empty-stack? state stack))
        state
        (let [vect (state/peek-stack state stack)
              popped-state (state/pop-stack state stack)]
          (cond
            (empty? vect)
            (state/pop-stack popped-state :exec)
            ;;
            (empty? (rest vect))
            (state/push-to-stack popped-state lit-stack (first vect))
            ;;
            :else
            (-> popped-state
                (state/push-to-stack :exec (keyword (str (name stack) "_iterate")))
                (state/push-to-stack :exec (vec (rest vect)))
                (state/push-to-stack :exec (state/peek-stack state :exec))
                (state/push-to-stack lit-stack (first vect)))))))))

;; Pushes the last item of the top element of the vector stack onto the
;; approrpiately-typed literal stack
(def _last
  ^{:stacks #{:elem}
    :name "_last"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction
        state
        #(if (empty? %) :ignore-instruction (last %))
        [stack]
        lit-stack))))

;; Pushes the length of the top item onto the INTEGER stack
(def _length
  ^{:stacks #{:integer}
    :name "_length"}
  (fn [stack state]
    (make-instruction state count [stack] :integer)))

;; Pushes the Nth item of the top element of the vector stack onto the
;; approrpiately-typed literal stack, where N is taken from the INTEGER stack.
;; To insure the index is within bounds, N is taken mod the vector length
(def _nth
  ^{:stacks #{:elem :integer}
    :name "_nth"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        #(if (empty? %2)
                           :ignore-instruction
                           (get %2 (mod %1 (count %2))))
                        [:integer stack]
                        lit-stack))))

;; Pushes onto the INTEGER stack the number of occurrences of the top element of
;; the appropriately-typed literal stack within the top element of the vector
;; stack
(def _occurrencesof
  ^{:stacks #{:elem :integer}
    :name "_occurrencesof"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        (fn [lit vect] (count (filter #(= lit %) vect)))
                        [lit-stack stack]
                        :integer))))

;; Pushes every item of the top element onto the appropriately-typed stack
(def _pushall
  ^{:stacks #{:elem}
    :name "_pushall"}
  (fn [stack state]
    (if (state/empty-stack? state stack)
      state
      (let [lit-stack (get-vector-literal-type stack)
            top-vector (state/peek-stack state stack)
            popped-state (state/pop-stack state stack)]
        (state/push-to-stack-many popped-state lit-stack top-vector)))))

;; Removes all occurrences of the top element of the appropriately-typed literal
;; stack from the first element of the vector stack
(def _remove
  ^{:stacks #{:elem}
    :name "_remove"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        (fn [lit vect] (vec (filter #(not= lit %) vect)))
                        [lit-stack stack]
                        stack))))

;; Replaces all occurrences of the second element of the appropriately-typed
;; literal stack with the top element of the appropriately-typed literal stack
;; within the top item of the vector stack
(def _replace
  ^{:stacks #{:elem}
    :name "_replace"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        (fn [lit1 lit2 vect]
                          (replace {lit1 lit2} vect))
                        [lit-stack lit-stack stack]
                        stack))))

;; Replaces the first occurrence of the second element of the appropriately-typed
;; literal stack with the top element of the appropriately-typed literal stack
;; within the top item of the vector stack
(def _replacefirst
  ^{:stacks #{:elem}
    :name "_replacefirst"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        (fn [lit1 lit2 vect]
                          (let [replaceindex (utils/indexof lit1 vect)]
                            (if (= replaceindex -1)
                              vect
                              (assoc vect replaceindex lit2))))
                        [lit-stack lit-stack stack]
                        stack))))

;; Pushes the rest of the top item
(def _rest
  ^{:stacks #{}
    :name "_rest"}
  (fn [stack state]
    (make-instruction state #(vec (rest %)) [stack] stack)))

;; Pushes the reverse of the top item
(def _reverse
  ^{:stacks #{}
    :name "_reverse"}
  (fn [stack state]
    (make-instruction state #(vec (reverse %)) [stack] stack)))

;; Replaces in the top vector the item at index N (taken from the INTEGER stack)
;; with the top item from the appropriately-typed literal stack. To insure the
;; index is within bounds, N is taken mod the vector length
(def _set
  ^{:stacks #{:elem :integer}
    :name "_set"}
  (fn [stack state]
    (let [lit-stack (get-vector-literal-type stack)]
      (make-instruction state
                        (fn [lit n vect]
                          (if (empty? vect)
                            :ignore-instruction
                            (assoc vect (mod n (count vect)) lit)))
                        [lit-stack :integer stack]
                        stack))))

;; Pushes a subvector of the top item, with start and end indices determined by
;; the second and top items of the INTEGER stack respectively
(def _subvec
  ^{:stacks #{:integer}
    :name "_subvec"}
  (fn [stack state]
    (make-instruction state
                      (fn [start-raw stop-raw vect]
                        (let [start (min (count vect) (max 0 start-raw))
                              stop (min (count vect) (max 0 start-raw stop-raw))]
                          (subvec vect start stop)))
                      [:integer :integer stack]
                      stack)))

;; Pushes the first N items of the top element, where N is taken from the top of
;; the INTEGER stack
(def _take
  ^{:stacks #{:integer}
    :name "_take"}
  (fn [stack state]
    (make-instruction state #(vec (take %1 %2)) [:integer stack] stack)))

;; 4 types x 21 functions = 84 instructions
(generate-instructions
  [:vector_boolean :vector_float :vector_integer :vector_string]
  [_butlast _concat _conj _contains _emptyvector _first _indexof _iterate
   _last _length _nth _occurrencesof _pushall _remove _replace _replacefirst
   _rest _reverse _set _subvec _take])
