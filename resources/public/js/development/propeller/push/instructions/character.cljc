(ns propeller.push.instructions.character
  #?(:cljs (:require-macros [propeller.push.utils.macros :refer [def-instruction]]))
  (:require [propeller.push.state :as state]
            [propeller.push.utils.helpers :refer [make-instruction]]
            [propeller.tools.character :as char]
            #?(:clj [propeller.push.utils.macros :refer [def-instruction]])))

;; =============================================================================
;; CHAR Instructions
;; =============================================================================

;; Pushes TRUE onto the BOOLEAN stack if the popped character is a letter
(def-instruction
  :char_is_letter
  ^{:stacks #{:boolean :char}}
  (fn [state]
    (make-instruction state char/is-letter [:char] :boolean)))

;; Pushes TRUE onto the BOOLEAN stack if the popped character is a digit
(def-instruction
  :char_is_digit
  ^{:stacks #{:boolean :char}}
  (fn [state]
    (make-instruction state char/is-digit [:char] :boolean)))

;; Pushes TRUE onto the BOOLEAN stack if the popped character is whitespace
;; (newline, space, or tab)
(def-instruction
  :char_is_whitespace
  ^{:stacks #{:boolean :char}}
  (fn [state]
    (make-instruction state char/is-whitespace [:char] :boolean)))

;; Pops the FLOAT stack, converts the top item to a whole number, and pushes
;; its corresponding ASCII value onto the CHAR stack. Whole numbers larger than
;; 128 will be reduced modulo 128. For instance, 248.45 will result in x being
;; pushed.
(def-instruction
  :char_from_float
  ^{:stacks #{:char :float}}
  (fn [state]
    (make-instruction state #(char (mod (long %) 128)) [:float] :char)))

;; Pops the INTEGER stack and pushes the top element's corresponding ASCII
;; value onto the CHAR stack. Integers larger than 128 will be reduced modulo
;; 128. For instance, 248 will result in x being pushed
(def-instruction
  :char_from_integer
  ^{:stacks #{:char :integer}}
  (fn [state]
    (make-instruction state #(char (mod % 128)) [:integer] :char)))

;; Pops the STRING stack and pushes the top element's constituent characters
;; onto the CHAR stack, in order. For instance, "hello" will result in the
;; top of the CHAR stack being \h \e \l \l \o
(def-instruction
  :char_all_from_string
  ^{:stacks #{:char :string}}
  (fn [state]
    (if (state/empty-stack? state :string)
      state
      (let [top-string (state/peek-stack state :string)
            popped-state (state/pop-stack state :string)]
        (state/push-to-stack-many popped-state :char (map char top-string))))))
