(ns propeller.push.state)

;; Empty push state - all available stacks are empty
(defonce empty-state {:boolean        '()
                      :char           '()
                      :code           '()
                      :exec           '()
                      :float          '()
                      :input          {}
                      :output         {}
                      :integer        '()
                      :print          '("")
                      :string         '()
                      :vector_boolean '()
                      :vector_float   '()
                      :vector_integer '()
                      :vector_string  '()})

;; All stack types available in a Push state
(defonce stacks (set (keys empty-state)))

;; All vector stack types available in a Push state, with their corresponding
;; element types
(defonce vec-stacks {:vector_boolean :boolean
                     :vector_float   :float
                     :vector_integer :integer
                     :vector_string  :string})

(def example-state {:exec    '()
                    :integer '(1 2 3 4 5 6 7)
                    :string  '("abc")
                    :input   {:in1 4}})

;; Returns true if the stack is empty
(defn empty-stack?
  [state stack]
  (empty? (get state stack)))

;; Returns the stack size
(defn stack-size
  [state stack]
  (count (get state stack)))

;; Returns the top item on the stack
(defn peek-stack
  [state stack]
  (if (empty? (get state stack))
    :no-stack-item
    (first (get state stack))))

;; Returns the top n items on the stack, as a chunk. If there are less than n
;; items on the stack, returns the entire stack
(defn peek-stack-many
  [state stack n]
  (take n (get state stack)))

;; Removes the top item of stack
(defn pop-stack
  [state stack]
  (update state stack rest))

;; Pops the top n items of the stack. If there are less than n items on the
;; stack, pops the entire stack
(defn pop-stack-many
  [state stack n]
  (update state stack #(drop n %)))

;; Pushes an item onto the stack
(defn push-to-stack
  [state stack item]
  (if (nil? item)
    state
    (update state stack conj item)))

;; Pushes a collection of items onto the stack, as a chunk (i.e. leaving them in
;; the order they are in)
(defn push-to-stack-many
  [state stack items]
  (let [items (if (coll? items) items (list items))
        items-no-nil (filter #(not (nil? %)) items)]
    (update state stack into (reverse items-no-nil))))
