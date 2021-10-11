(ns propeller.push.instructions.code
  #?(:cljs (:require-macros [propeller.push.utils.macros :refer [def-instruction]]))
  (:require [propeller.utils :as utils]
            [propeller.push.state :as state]
            [propeller.push.utils.helpers :refer [make-instruction]]
            #?(:clj [propeller.push.utils.macros :refer [def-instruction]])))

;; =============================================================================
;; CODE Instructions
;; =============================================================================

;; Concatenates the top two instructions on the :code stack and pushes the
;; result back onto the stack
(def-instruction
  :code_append
  ^{:stacks #{:code}}
  (fn [state]
    (make-instruction state
                      #(utils/not-lazy
                         (concat (utils/ensure-list %2)
                                 (utils/ensure-list %1)))
                      [:code :code]
                      :code)))

;; Unfinished...

;; =============================================================================
;; EXEC Instructions
;; =============================================================================

;; Executes the top EXEC instruction (i.e. loops) a number of times determined
;; by the top two INTEGERs, while also pushing the loop counter onto the INTEGER
;; stack. The top INTEGER is the "destination index" and the second INTEGER is
;; the "current index". If the integers are equal, then the current index is
;; pushed onto the INTEGER stack and the code (which is the "body" of the loop)
;; is pushed onto the EXEC stack for subsequent execution. If the integers are
;; not equal, then the current index will still be pushed onto the INTEGER stack
;; but two items will be pushed onto the EXEC stack - first a recursive call to
;; :exec_do_range (with the same code and destination index, but with a current
;; index that has been either incremented or decremented by 1 to be closer to
;; the destination index) and then the body code. Note that the range is
;; inclusive of both endpoints; a call with integer arguments 3 and 5 will cause
;; its body to be executed 3 times, with the loop counter having the values 3,
;; 4, and 5. Note also that one can specify a loop that "counts down" by
;; providing a destination index that is less than the specified current index.
(def-instruction
  :exec_do_range
  ^{:stacks #{:exec :integer}}
  (fn [state]
    (if (or (state/empty-stack? state :exec)
            (< (count (:integer state)) 2))
      state
      (let [to-do (state/peek-stack state :exec)
            destination-index (state/peek-stack state :integer)
            current-index (state/peek-stack
                            (state/pop-stack state :integer) :integer)
            popped-state (state/pop-stack
                           (state/pop-stack
                             (state/pop-stack state :exec) :integer) :integer)
            increment (cond (< current-index destination-index) 1
                            (> current-index destination-index) -1
                            :else 0)
            continuation (if (zero? increment)
                           popped-state
                           (state/push-to-stack popped-state
                                                :exec
                                                (list #? (:clj
                                                          (+' current-index increment)
                                                          :cljs
                                                          (+ current-index increment))
                                                          destination-index
                                                      :exec_do_range
                                                      to-do)))]
        (state/push-to-stack
          (state/push-to-stack continuation :integer current-index) :exec to-do)))))

;; Executes the top EXEC instruction (i.e. loops) a number of times determined
;; by the top INTEGER, pushing an index (which runs from 0 to one less than the
;; total number of iterations) onto the INTEGER stack prior to each execution
;; of the loop body. If the top INTEGER argument is <= 0, this becomes a NOOP
(def-instruction
  :exec_do_count
  ^{:stacks #{:exec :integer}}
  (fn [state]
    (if (or (state/empty-stack? state :integer)
            (state/empty-stack? state :exec)
            (< (state/peek-stack state :integer) 1))
      state
      (let [to-do (state/peek-stack state :exec)
            index (state/peek-stack state :integer)
            popped-state (state/pop-stack (state/pop-stack state :exec) :integer)]
        (state/push-to-stack popped-state :exec (list 0
                                                      (dec index)
                                                      :exec_do_range
                                                      to-do))))))

;; Like :exec_do_count, but does not push the loop counter onto the INTEGER stack
(def-instruction
  :exec_do_times
  ^{:stacks #{:exec :integer}}
  (fn [state]
    (if (or (state/empty-stack? state :integer)
            (state/empty-stack? state :exec)
            (< (state/peek-stack state :integer) 1))
      state
      (let [to-do (state/peek-stack state :exec)
            to-do-with-pop (cons :integer_pop (utils/ensure-list to-do))
            index (state/peek-stack state :integer)
            popped-state (state/pop-stack (state/pop-stack state :exec) :integer)]
        (state/push-to-stack popped-state :exec (list 0
                                                      (dec index)
                                                      :exec_do_range
                                                      to-do-with-pop))))))

;; If the top BOOLEAN is TRUE, removes the the second item on the EXEC stack,
;; leaving the first item to be executed. Otherwise, removes the first item,
;; leaving the second to be executed. Acts as a NOOP unless there are at least
;; two items on the EXEC stack and one item on the BOOLEAN stack
(def-instruction
  :exec_if
  ^{:stacks #{:boolean :exec}}
  (fn [state]
    (make-instruction state #(if %1 %3 %2) [:boolean :exec :exec] :exec)))

;; If the top BOOLEAN is TRUE, leaves the first item on the EXEC stack to be
;; executed. Otherwise, it removes it. Acts as a NOOP unless there is at least
;; one item on the EXEC stack and one item on the BOOLEAN stack
(def-instruction
  :exec_when
  ^{:stacks #{:boolean :exec}}
  (fn [state]
    (make-instruction state #(when %1 %2) [:boolean :exec] :exec)))

;; Keeps executing the top instruction on the EXEC stack while the top item on
;; the BOOLEAN stack is true
(def-instruction
  :exec_while
  ^{:stacks #{:boolean :exec}}
  (fn [state]
    (if (state/empty-stack? state :exec)
      state
      (if (state/empty-stack? state :boolean)
        (state/pop-stack state :exec)
        (if (state/peek-stack state :boolean)
          (let [to-do (state/peek-stack state :exec)
                popped-state (state/pop-stack state :boolean)]
            (state/push-to-stack
              (state/push-to-stack popped-state :exec :exec_while) :exec to-do))
          (state/pop-stack (state/pop-stack state :boolean) :exec))))))

;; Keeps executing the top instruction on the EXEC stack while the top item on
;; the BOOLEAN stack is true. Differs from :exec_while in that it executes
;; the top instruction at least once
(def-instruction
  :exec_do_while
  ^{:stacks #{:boolean :exec}}
  (fn [state]
    (if (state/empty-stack? state :exec)
      state
      (let [to-do (state/peek-stack state :exec)]
        (state/push-to-stack
          (state/push-to-stack state :exec :exec_while) :exec to-do)))))

;; The "K combinator" - removes the second item on the EXEC stack
(def-instruction
  :exec_k
  ^{:stacks #{:exec}}
  (fn [state]
    (make-instruction state (fn [_ first] first) [:exec :exec] :exec)))

;; The "S combinator" - pops 3 items from the EXEC stack, which we will call A,
;; B, and C (with A being the first one popped), and then pushes a list
;; containing B and C back onto the EXEC stack, followed by another instance of
;; C, followed by another instance of A
(def-instruction
  :exec_s
  ^{:stacks #{:exec}}
  (fn [state]
    (if (< (count (:exec state)) 3)
      state
      (let [[a b c] (state/peek-stack-many state :exec 3)
            popped-state (state/pop-stack-many state :exec 3)
            to-push-back (list a c (list b c))]
        (state/push-to-stack-many popped-state :exec to-push-back)))))

;; The "Y combinator" - inserts beneath the top item of the EXEC stack a new
;; item of the form "(:exec_y TOP_ITEM)"
(def-instruction
  :exec_y
  ^{:stacks #{:exec}}
  (fn [state]
    (if (state/empty-stack? state :exec)
      state
      (let [top-item (state/peek-stack state :exec)
            popped-state (state/pop-stack state :exec)
            to-push-back (list top-item (list :exec_y top-item))]
        (state/push-to-stack-many popped-state :exec to-push-back)))))
