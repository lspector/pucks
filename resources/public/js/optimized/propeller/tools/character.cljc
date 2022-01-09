(ns propeller.tools.character)

(defn get-ascii
  "Gets the ASCII code of a char"
  [c]
  #?(:clj (int c)
     :cljs (.charCodeAt c 0)))

(defn is-letter
  "Returns true if the given character is a letter, A-Z or a-z."
  [c]
  (<= (get-ascii \A) (get-ascii c) (get-ascii \z)))


(defn is-digit
  "Returns true if the given character is a digit, 0-9."
  [c]
  (<= (get-ascii \0) (get-ascii c) (get-ascii \9)))


(defn is-whitespace
  "Returns true if the given character is whitespace (newline, space, tab)."
  [c]
  (contains? #{(get-ascii \newline) (get-ascii \tab) (get-ascii \space)} (get-ascii c)))
