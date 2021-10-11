(ns propeller.push.interpreter
  (:require [propeller.push.core :as push]
            [propeller.push.state :as state]
            [propeller.push.instructions.input-output :as io]
            [propeller.push.utils.helpers :refer [get-literal-type]]))

(defn interpret-one-step
  "Takes a Push state and executes the next instruction on the exec stack."
  [state]
  (let [popped-state (state/pop-stack state :exec)
        instruction (first (:exec state))
        literal-type (get-literal-type instruction)]     ; nil for non-literals
    (cond
      ;;
      ;; Recognize functional instruction or input instruction
      (keyword? instruction)
      (if-let [function (instruction @push/instruction-table)]
        (function popped-state)
        (io/handle-input-instruction popped-state instruction))
      ;;
      ;; Recognize constant literal instruction
      literal-type
      (if (= :generic-vector literal-type)
        ;; Empty vector gets pushed on all vector stacks
        (reduce #(update-in % [%2] conj []) popped-state
                [:vector_boolean :vector_float :vector_integer :vector_string])
        (state/push-to-stack popped-state literal-type instruction))
      ;;
      ;; Recognize parenthesized group of instructions
      (seq? instruction)
      (update popped-state :exec #(concat %2 %1) instruction)
      ;;
      :else
      (throw #?(:clj  (Exception. (str "Unrecognized Push instruction in program: "
                                       (name instruction)))
                :cljs (js/Error. (str "Unrecognized Push instruction in program: "
                                      (name instruction))))))))

(defn interpret-program
  "Runs the given problem starting with the stacks in start-state. If the
  start-state includes the key :keep-history with a truthy value, then
  the returned state will include the key :history with a value that is a
  vector containing all states prior to the final state."
  [program start-state step-limit]
  (loop [state (assoc start-state :exec (list program) :step 1)
         history []]
    (if (or (empty? (:exec state))
            (> (:step state) step-limit))
      (if (:keep-history state)
        (assoc state :history history)
        state)
      (recur (update (interpret-one-step state) :step inc)
             (when (:keep-history state) (conj history state))))))
