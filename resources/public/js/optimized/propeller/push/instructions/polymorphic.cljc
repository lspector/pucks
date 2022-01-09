(ns propeller.push.instructions.polymorphic
  #?(:cljs (:require-macros
             [propeller.push.utils.macros :refer [def-instruction
                                                  generate-instructions]]))
  (:require [propeller.utils :as utils]
            [propeller.push.state :as state]
            [propeller.push.utils.helpers :refer [make-instruction]]
            [propeller.push.utils.globals :as globals]
            #?(:clj [propeller.push.utils.macros :refer [def-instruction
                                                         generate-instructions]])))

;; =============================================================================
;; Polymorphic Instructions
;;
;; (for all stacks, with the exception of non-data ones like input and output)
;; =============================================================================

;; Duplicates the top item of the stack. Does not pop its argument (since that
;; would negate the effect of the duplication)
(def _dup
  ^{:stacks #{}
    :name "_dup"}
  (fn [stack state]
    (let [top-item (state/peek-stack state stack)]
      (if (state/empty-stack? state stack)
        state
        (state/push-to-stack state stack top-item)))))

;; Duplicates n copies of the top item (i.e leaves n copies there). Does not pop
;; its argument (since that would negate the effect of the duplication). The
;; number n is determined by the top INTEGER. For n = 0, equivalent to POP.
;; For n = 1, equivalent to NOOP. For n = 2, equivalent to DUP. Negative values
;; of n are treated as 0. The final number of items on the stack is limited to
;; globals/max-stack-items.
(def _dup_times
  ^{:stacks #{:integer}
    :name "_dup_times"}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [n (min (state/peek-stack state :integer)
                   (inc (- globals/max-stack-items (state/stack-size state stack))))
            popped-state (state/pop-stack state :integer)
            top-item (state/peek-stack popped-state stack)
            top-item-dup (take (- n 1) (repeat top-item))]
        (cond
          (< 0 n) (state/push-to-stack-many popped-state stack top-item-dup)
          :else (state/pop-stack popped-state stack)))
      state)))

;; Duplicates the top n items on the stack, one time each. The number n is
;; determined by the top INTEGER. If n <= 0, no items will be duplicated. If
;; fewer than n items are on the stack, the entire stack will be duplicated.
;; The final number of items on the stack is limited to globals/max-stack-items.
(def _dup_items
  ^{:stacks #{:integer}
    :name "_dup_items"}
  (fn [stack state]
    (if (state/empty-stack? state :integer)
      state
      (let [n (min (state/peek-stack state :integer)
                   (- globals/max-stack-items (state/stack-size state stack)))
            popped-state (state/pop-stack state :integer)
            top-items (take n (get popped-state stack))]
        (state/push-to-stack-many popped-state stack top-items)))))

;; Pushes TRUE onto the BOOLEAN stack if the stack is empty. Otherwise FALSE
(def _empty
  ^{:stacks #{:boolean}
    :name "_empty"}
  (fn [stack state]
    (state/push-to-stack state :boolean (state/empty-stack? state stack))))

;; Pushes TRUE onto the BOOLEAN stack if the top two items are equal.
;; Otherwise FALSE
(def _eq
  ^{:stacks #{:boolean}
    :name "_eq"}
  (fn [stack state]
    (make-instruction state = [stack stack] :boolean)))

;; Empties the given stack
(def _flush
  ^{:stacks #{}
    :name "_flush"}
  (fn [stack state]
    (assoc state stack '())))

;; Pops the given stack
(def _pop
  ^{:stacks #{}
    :name "_pop"}
  (fn [stack state]
    (state/pop-stack state stack)))

;; Rotates the top three items on the stack (i.e. pulls the third item out and
;; pushes it on top). Equivalent to (yank state stack-type 2)
(def _rot
  ^{:stacks #{}
    :name "_rot"}
  (fn [stack state]
    (if (<= 3 (count (get state stack)))
      (let [top-three (state/peek-stack-many state stack 3)
            popped-state (state/pop-stack-many state stack 3)
            top-three-rot (take 3 (conj top-three (last top-three)))]
        (state/push-to-stack-many popped-state stack top-three-rot))
      state)))

;; Inserts the top item deeper into the stack, using the top INTEGER to
;; determine how deep
(def _shove
  ^{:stacks #{:integer}
    :name "_shove"}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            top-item (state/peek-stack popped-state stack)
            popped-state (state/pop-stack popped-state stack)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))]
        (update popped-state stack #(utils/not-lazy (concat (take index %)
                                                            (list top-item)
                                                            (drop index %)))))
      state)))

;; Pushes the given stack's depth onto the INTEGER stack
(def _stack_depth
  ^{:stacks #{:integer}
    :name "_stack_depth"}
  (fn [stack state]
    (let [stack-depth (count (get state stack))]
      (state/push-to-stack state :integer stack-depth))))

;; Swaps the top two items on the stack
(def _swap
  ^{:stacks #{}
    :name "_swap"}
  (fn [stack state]
    (if (<= 2 (count (get state stack)))
      (let [top-two (state/peek-stack-many state stack 2)
            popped-state (state/pop-stack-many state stack 2)]
        (state/push-to-stack-many popped-state stack (reverse top-two)))
      state)))

;; Pushes an indexed item from deep in the stack, removing it. The top INTEGER
;; is used to determine how deep to yank from
(def _yank
  ^{:stacks #{:integer}
    :name "_yank"}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))
            indexed-item (nth (get popped-state stack) index)]
        (update popped-state stack #(utils/not-lazy
                                      (concat (list indexed-item)
                                              (take index %)
                                              (rest (drop index %))))))
      state)))

;; Pushes a copy of an indexed item from deep in the stack, without removing it.
;; The top INTEGER is used to determine how deep to yankdup from
(def _yank_dup
  ^{:stacks #{:integer}
    :name "_yank_dup"}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))
            indexed-item (nth (get popped-state stack) index)]
        (state/push-to-stack popped-state stack indexed-item))
      state)))

;; Pushes a copy of an indexed item from deep in the stack, without removing it.
;; The top INTEGER is used to determine the index from the BOTTOM of the stack.
(def _deep_dup
  ^{:stacks #{:integer}
    :name "_deep_dup"}
  (fn [stack state]
    (if (or (and (= stack :integer)
                 (<= 2 (count (:integer state))))
            (and (not= stack :integer)
                 (not (state/empty-stack? state :integer))
                 (not (state/empty-stack? state stack))))
      (let [index-raw (state/peek-stack state :integer)
            popped-state (state/pop-stack state :integer)
            index (max 0 (min index-raw (dec (count (get popped-state stack)))))
            indexed-item (nth (reverse (get popped-state stack)) index)]
        (state/push-to-stack popped-state stack indexed-item))
      state)))

;; 11 types x 13 functions = 143 instructions
(generate-instructions
  [:boolean :char :code :exec :float :integer :string
   :vector_boolean :vector_float :vector_integer :vector_string]
  [_dup _dup_times _dup_items _empty _eq _flush _pop _rot _shove
   _stack_depth _swap _yank _yank_dup _deep_dup])
