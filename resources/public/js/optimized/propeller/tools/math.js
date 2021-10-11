// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.tools.math');
goog.require('cljs.core');
goog.require('cljs.core.constants');
if((typeof propeller !== 'undefined') && (typeof propeller.tools !== 'undefined') && (typeof propeller.tools.math !== 'undefined') && (typeof propeller.tools.math.PI !== 'undefined')){
} else {
propeller.tools.math.PI = Math.PI;
}
if((typeof propeller !== 'undefined') && (typeof propeller.tools !== 'undefined') && (typeof propeller.tools.math !== 'undefined') && (typeof propeller.tools.math.E !== 'undefined')){
} else {
propeller.tools.math.E = Math.PI;
}
/**
 * Returns the absolute value of a number.
 */
propeller.tools.math.abs = (function propeller$tools$math$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
propeller.tools.math.approx_EQ_ = (function propeller$tools$math$approx_EQ_(x,y,epsilon){

return (propeller.tools.math.abs((y - x)) <= epsilon);
});
/**
 * Returns the smallest integer greater than or equal to x.
 */
propeller.tools.math.ceil = (function propeller$tools$math$ceil(x){
return Math.ceil(x);
});
/**
 * Returns the cosine of an angle (specified in radians).
 */
propeller.tools.math.cos = (function propeller$tools$math$cos(x){
return Math.cos(x);
});
/**
 * Returns the result of floating point division between x and y.
 */
propeller.tools.math.div = (function propeller$tools$math$div(x,y){
return (x / y);
});
/**
 * Returns Euler's number (approx. 2.71) raised to the given power.
 */
propeller.tools.math.exp = (function propeller$tools$math$exp(x){
return Math.exp(x);
});
/**
 * Returns the largest integer less than or equal to x.
 */
propeller.tools.math.floor = (function propeller$tools$math$floor(x){
return Math.floor(x);
});
/**
 * Returns the logarithm of x with the given base. If called with only one
 *   argument, returns the natural logarithm (base e) of the given value.
 */
propeller.tools.math.log = (function propeller$tools$math$log(var_args){
var G__14079 = arguments.length;
switch (G__14079) {
case 2:
return propeller.tools.math.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return propeller.tools.math.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

propeller.tools.math.log.cljs$core$IFn$_invoke$arity$2 = (function (x,base){
return (propeller.tools.math.log.cljs$core$IFn$_invoke$arity$1(x) / propeller.tools.math.log.cljs$core$IFn$_invoke$arity$1(base));
});

propeller.tools.math.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return Math.log(x);
});

propeller.tools.math.log.cljs$lang$maxFixedArity = 2;

/**
 * Returns the value obtained by raising the first argument to the power of
 *   the second argument.
 */
propeller.tools.math.pow = (function propeller$tools$math$pow(x,n){
return Math.pow(x,n);
});
/**
 * Returns the root of x with base n.
 */
propeller.tools.math.root = (function propeller$tools$math$root(x,n){
return propeller.tools.math.pow(x,((1) / n));
});
/**
 * Returns the value of x rounded to the nearest integer.
 */
propeller.tools.math.round = (function propeller$tools$math$round(x){
return Math.round(x);
});
/**
 * Returns the 1 if the argument is positive, -1 if the argument is negative,
 *   and 0 if the argument is zero.
 */
propeller.tools.math.sign = (function propeller$tools$math$sign(x){
if((x < (0))){
return (-1);
} else {
if((x > (0))){
return (1);
} else {
return (0);

}
}
});
/**
 * Returns the sine of an angle (specified in radians).
 */
propeller.tools.math.sin = (function propeller$tools$math$sin(x){
return Math.sin(x);
});
/**
 * Returns the square root of the given value.
 */
propeller.tools.math.sqrt = (function propeller$tools$math$sqrt(x){
return Math.sqrt(x);
});
/**
 * Returns the square of the given value.
 */
propeller.tools.math.square = (function propeller$tools$math$square(x){
return (x * x);
});
/**
 * Returns the tangent of an angle (specified in radians).
 */
propeller.tools.math.tan = (function propeller$tools$math$tan(x){
return Math.tan(x);
});
