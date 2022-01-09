// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.utils');
goog.require('cljs.core');
/**
 * Returns the first index of an element in a collection. If the element is not
 *   present in the collection, returns -1.
 */
propeller.utils.indexof = (function propeller$utils$indexof(element,coll){
var or__4131__auto__ = cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__3707_SHARP_,p2__3706_SHARP_){
if(cljs.core._EQ_.call(null,element,p2__3706_SHARP_)){
return p1__3707_SHARP_;
} else {
return null;
}
}),coll));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
});
/**
 * Returns lst if it is not a seq, or a non-lazy version of lst if it is.
 */
propeller.utils.not_lazy = (function propeller$utils$not_lazy(lst){
if(cljs.core.seq_QMARK_.call(null,lst)){
return cljs.core.apply.call(null,cljs.core.list,lst);
} else {
return lst;
}
});
/**
 * Returns a non-lazy list if passed a seq argument. Othwrwise, returns a list
 *   containing the argument.
 */
propeller.utils.ensure_list = (function propeller$utils$ensure_list(thing){
if(cljs.core.seq_QMARK_.call(null,thing)){
return propeller.utils.not_lazy.call(null,thing);
} else {
return (new cljs.core.List(null,thing,null,(1),null));
}
});
/**
 * Returns a random instruction from a supplied pool of instructions, evaluating
 *   ERC-producing functions to a constant literal.
 */
propeller.utils.random_instruction = (function propeller$utils$random_instruction(instructions){
var instruction = cljs.core.rand_nth.call(null,instructions);
if(cljs.core.fn_QMARK_.call(null,instruction)){
return instruction.call(null);
} else {
return instruction;
}
});

//# sourceMappingURL=utils.js.map
