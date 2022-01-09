(ns propeller.push.instructions.string
  #?(:cljs (:require-macros
             [propeller.push.utils.macros :refer [def-instruction]]))
  (:require [clojure.string :as string]
            [propeller.push.utils.helpers :refer [make-instruction]]
            [propeller.push.state :as state]
            #?(:clj [propeller.push.utils.macros :refer [def-instruction]])))

;; =============================================================================
;; STRING Instructions
;; =============================================================================

;; Pushes the butlast of the top STRING (i.e. the string without its last letter)
(def-instruction
  :string_butlast
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state #(apply str (butlast %)) [:string] :string)))

;; Pushes the concatenation of the top two STRINGs (second + first)
(def-instruction
  :string_concat
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state str [:string :string] :string)))

;; Pushes the concatenation of the top STRING and the top CHAR (STRING + CHAR)
(def-instruction
  :string_conj_char
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state str [:string :char] :string)))

;; Pushes TRUE if the top STRING is a substring of the second STRING, and FALSE
;; otherwise
(def-instruction
  :string_contains
  ^{:stacks #{:boolean :string}}
  (fn [state]
    (make-instruction state #(string/includes? %2 %1) [:string :string] :boolean)))

;; Pushes TRUE if the top CHAR is contained in the top STRING, and FALSE
;; otherwise
(def-instruction
  :string_contains_char
  ^{:stacks #{:boolean :char :string}}
  (fn [state]
    (make-instruction state #(string/includes? %2 (str %1)) [:char :string] :boolean)))

;; Pushes the top STRING with n characters dropped, where n is taken from the
;; top of the INTEGER stack
(def-instruction
  :string_drop
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state #(apply str (drop %1 %2)) [:integer :string] :string)))

;; Pushes TRUE if the top STRING is the empty string
(def-instruction
  :string_empty_string
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state empty? [:string] :boolean)))

;; Pushes the first CHAR of the top STRING
(def-instruction
  :string_first
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state
                      #(if (empty? %) :ignore-instruction (first %))
                      [:string] :char)))

;; Pushes the STRING version of the top BOOLEAN, e.g. "true"
(def-instruction
  :string_from_boolean
  ^{:stacks #{:boolean :string}}
  (fn [state]
    (make-instruction state str [:boolean] :string)))

;; Pushes the STRING version of the top CHAR, e.g. "a"
(def-instruction
  :string_from_char
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state str [:char] :string)))

;; Pushes the STRING version of the top FLOAT e.g. "2.05"
(def-instruction
  :string_from_float
  ^{:stacks #{:float :string}}
  (fn [state]
    (make-instruction state str [:float] :string)))

;; Pushes the STRING version of the top INTEGER, e.g. "3"
(def-instruction
  :string_from_integer
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state str [:integer] :string)))

;; Pushes the index of the top CHAR in the top STRING onto the INTEGER stack.
;; If the top CHAR is not present in the top string, acts as a NOOP
(def-instruction
  :string_indexof_char
  ^{:stacks #{:char :integer :string}}
  (fn [state]
    (make-instruction state 
                      #(let [index (string/index-of %1 %2)] 
                               (if index index :ignore-instruction)) 
                      [:string :char]
                      :integer)))

;; Iterates over the top STRING using code on the EXEC stack
(def-instruction
  :string_iterate
  ^{:stacks #{:char :exec :string}}
  (fn [state]
    (if (or (empty? (:string state))
            (empty? (:exec state)))
      state
      (let [top-item (state/peek-stack state :string)
            popped-state (state/pop-stack state :string)]
        (cond
          (empty? top-item)
          (state/pop-stack popped-state :exec)
          ;;
          (empty? (rest top-item))
          (state/push-to-stack popped-state :char (first top-item))
          ;;
          :else
          (-> popped-state
              (state/push-to-stack :exec :string_iterate)
              (state/push-to-stack :exec (apply str (rest top-item)))
              (state/push-to-stack :exec (state/peek-stack state :exec))
              (state/push-to-stack :char (first top-item))))))))

;; Pushes the last CHAR of the top STRING. 
;; If the string is empty, do nothing
(def-instruction
  :string_last
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state #(if (empty? %) :ignore-instruction (last %)) [:string] :char)))

;; Pushes the length of the top STRING onto the INTEGER stack
(def-instruction
  :string_length
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state count [:string] :integer)))

;; Pushes the nth CHAR of the top STRING, where n is taken from the top of the
;; INTEGER stack. If n exceeds the length of the string, it is reduced modulo
;; the length of the string
(def-instruction
  :string_nth
  ^{:stacks #{:char :integer :string}}
  (fn [state]
    (make-instruction state 
                      #(let [str-length (count %2)]
                               (if (= 0 str-length)
                                 :ignore-instruction
                                 (nth %2 (mod %1 str-length))))
                      [:integer :string] 
                      :char)))

;; Pushes the number of times the top CHAR occurs in the top STRING onto the
;; INTEGER stack
(def-instruction
  :string_occurencesof_char
  ^{:stacks #{:char :integer :string}}
  (fn [state]
    (make-instruction state
                      (fn [char string]
                        (count (filter #(= char %) string)))
                      [:char :string]
                      :integer)))

;; Splits the top string into substrings of length 1 (i.e. into its component
;; characters) and pushes them back onto the STRING stack in the same order
(def-instruction
  :string_parse_to_chars
  ^{:stacks #{:string}}
  (fn [state]
    (if (state/empty-stack? state :string)
      state
      (let [top-string (state/peek-stack state :string)
            char-list (string/split top-string #"")
            popped-state (state/pop-stack state :string)]
        (state/push-to-stack-many popped-state :string char-list)))))

;; Pushes the top STRING, with all occurrences of the top CHAR removed
(def-instruction
  :string_remove_char
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state
                      (fn [char string]
                        (apply str (filter #(not= char %) string)))
                      [:char :string]
                      :string)))

;; Pushes the third topmost STRING on stack, with all occurences of the second
;; topmost STRING replaced by the top STRING
(def-instruction
  :string_replace
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state
                      #(string/replace %1 %2 %3)
                      [:string :string :string]
                      :string)))

;; Pushes the top STRING, with all occurences of the second topmost CHAR
;; replaced with the top CHAR
(def-instruction
  :string_replace_char
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state
                      #(string/replace %3 %1 %2)
                      [:char :char :string]
                      :string)))

;; Pushes the third topmost STRING on stack, with the first occurence of the
;; second topmost STRING replaced by the top STRING
(def-instruction
  :string_replace_first
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state
                      #(string/replace-first %1 %2 %3)
                      [:string :string :string]
                      :string)))

;; Pushes the top STRING, with the first occurence of the second topmost CHAR
;; replaced with the top CHAR
(def-instruction
  :string_replace_first_char
  ^{:stacks #{:char :string}}
  (fn [state]
    (make-instruction state
                      #(string/replace-first %3 %1 %2)
                      [:char :char :string]
                      :string)))

;; Pushes the rest of the top STRING (i.e. the string without its first letter)
(def-instruction
  :string_rest
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state #(apply str (rest %)) [:string] :string)))

;; Pushes the reverse of the top STRING
(def-instruction
  :string_reverse
  ^{:stacks #{:string}}
  (fn [state]
    (make-instruction state #(apply str (reverse %)) [:string] :string)))

;; Pushes the top STRING, with the letter at index n (where n is taken from the
;; INTEGER stack) replaced with the top CHAR. If n is out of bounds, it is
;; reduced modulo the length of the string
(def-instruction
  :string_set_char
  ^{:stacks #{:char :integer :string}}
  (fn [state]
    (make-instruction state
                      #(if (empty? %3)
                         :ignore-instruction
                         (let [index (mod %2 (count %3))
                             beginning (take index %3)
                             end (drop (inc index) %3)]
                         (apply str (concat beginning (list %1) end))))
                      [:char :integer :string]
                      :string)))

;; Splits the top STRING on whitespace, and pushes back the resulting components
;; in the same order
(def-instruction
  :string_split
  ^{:stacks #{:string}}
  (fn [state]
    (if (state/empty-stack? state :string)
      state
      (let [top-item (state/peek-stack state :string)
            top-item-trimmed (string/trim top-item)
            string-list (string/split top-item-trimmed #"\s+")
            popped-state (state/pop-stack state :string)]
        (state/push-to-stack-many popped-state :string string-list)))))

;; Pushes the substring of the top STRING, with beginning and end indices
;; determined by the second topmost and topmost INTEGERs respectively. If an
;; index is out of bounds, the beginning/end of the string is used instead
(def-instruction
  :string_substr
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state
                      (fn [start stop string]
                        (let [length (count string)
                              start (min length (max 0 start))
                              stop (min length (max start stop))]
                          (subs string start stop)))
                      [:integer :integer :string]
                      :string)))

;; Pushes the substring of the top STRING consisting of its first n letters,
;; where n is determined by the top INTEGER
(def-instruction
  :string_take
  ^{:stacks #{:integer :string}}
  (fn [state]
    (make-instruction state #(apply str (take %1 %2)) [:integer :string] :string)))
