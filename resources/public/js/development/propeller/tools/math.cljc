(ns propeller.tools.math)

(defonce PI #?(:clj  Math/PI
               :cljs js/Math.PI))

(defonce E #?(:clj  Math/E
              :cljs js/Math.PI))

(defn abs
  "Returns the absolute value of a number."
  [x]
  (if (neg? x) (- x) x))

(defn approx= [x y epsilon]
  "Returns true if the absolute difference between x and y is less than or
  equal to some specified error level, epsilon."
  (<= (abs (- y x)) epsilon))

(defn ceil
  "Returns the smallest integer greater than or equal to x."
  [x]
  #?(:clj  (Math/ceil x)
     :cljs (js/Math.ceil x)))

(defn cos
  "Returns the cosine of an angle (specified in radians)."
  [x]
  #?(:clj  (Math/cos x)
     :cljs (js/Math.cos x)))

(defn div
  "Returns the result of floating point division between x and y."
  [x y]
  (double (/ x y)))

(defn exp
  "Returns Euler's number (approx. 2.71) raised to the given power."
  [x]
  #?(:clj  (Math/exp x)
     :cljs (js/Math.exp x)))

(defn floor
  "Returns the largest integer less than or equal to x."
  [x]
  #?(:clj  (Math/floor x)
     :cljs (js/Math.floor x)))

(defn log
  "Returns the logarithm of x with the given base. If called with only one
  argument, returns the natural logarithm (base e) of the given value."
  ([x base]
   (/ (log x) (log base)))
  ([x]
   #?(:clj  (Math/log x)
      :cljs (js/Math.log x))))

(defn pow
  "Returns the value obtained by raising the first argument to the power of
  the second argument."
  [x n]
  #?(:clj  (Math/pow x n)
     :cljs (js/Math.pow x n)))

(defn root
  "Returns the root of x with base n."
  [x n]
  (pow x (/ 1 n)))

(defn round
  "Returns the value of x rounded to the nearest integer."
  [x]
  #?(:clj  (Math/round x)
     :cljs (js/Math.round x)))

(defn sign
  "Returns the 1 if the argument is positive, -1 if the argument is negative,
  and 0 if the argument is zero."
  [x]
  (cond (< x 0) -1
        (> x 0) 1
        :else 0))

(defn sin
  "Returns the sine of an angle (specified in radians)."
  [x]
  #?(:clj  (Math/sin x)
     :cljs (js/Math.sin x)))

(defn sqrt
  "Returns the square root of the given value."
  [x]
  #?(:clj  (Math/sqrt x)
     :cljs (js/Math.sqrt x)))

(defn square
  "Returns the square of the given value."
  [x]
  (* x x))

(defn tan
  "Returns the tangent of an angle (specified in radians)."
  [x]
  #?(:clj  (Math/tan x)
     :cljs (js/Math.tan x)))
