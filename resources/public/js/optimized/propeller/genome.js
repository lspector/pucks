// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.genome');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.core');
goog.require('propeller.utils');
/**
 * Creates and returns a new plushy.
 */
propeller.genome.make_random_plushy = (function propeller$genome$make_random_plushy(instructions,max_initial_plushy_size){
return cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_int(max_initial_plushy_size),(function (){
return propeller.utils.random_instruction(instructions);
}));
});
/**
 * Returns the Push program expressed by the given plushy representation.
 */
propeller.genome.plushy__GT_push = (function propeller$genome$plushy__GT_push(var_args){
var G__16116 = arguments.length;
switch (G__16116) {
case 1:
return propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$1 = (function (plushy){
return propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$2(plushy,cljs.core.PersistentArrayMap.EMPTY);
});

propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$2 = (function (plushy,argmap){
var plushy__$1 = (cljs.core.truth_(cljs.core.cst$kw$diploid.cljs$core$IFn$_invoke$arity$1(argmap))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy)):plushy);
var opener_QMARK_ = ((function (plushy__$1){
return (function (p1__16113_SHARP_){
return ((cljs.core.vector_QMARK_(p1__16113_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__16113_SHARP_),cljs.core.cst$sym$open)));
});})(plushy__$1))
;
var push = cljs.core.List.EMPTY;
var plushy__$2 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (push,plushy__$1,opener_QMARK_){
return (function (p1__16114_SHARP_){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(propeller.push.core.opens,p1__16114_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16114_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$open,n], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16114_SHARP_], null);
}
});})(push,plushy__$1,opener_QMARK_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([plushy__$1], 0));
while(true){
if(cljs.core.empty_QMARK_(plushy__$2)){
if(cljs.core.truth_(cljs.core.some(opener_QMARK_,push))){
var G__16118 = push;
var G__16119 = cljs.core.list(cljs.core.cst$sym$close);
push = G__16118;
plushy__$2 = G__16119;
continue;
} else {
return push;
}
} else {
var i = cljs.core.first(plushy__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.cst$sym$close)){
if(cljs.core.truth_(cljs.core.some(opener_QMARK_,push))){
var G__16120 = (function (){var post_open = cljs.core.reverse(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,opener_QMARK_),cljs.core.reverse(push)));
var open_index = ((cljs.core.count(push) - cljs.core.count(post_open)) - (1));
var num_open = cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(push,open_index));
var pre_open = cljs.core.take.cljs$core$IFn$_invoke$arity$2(open_index,push);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_open)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_open,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [post_open], null));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [post_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$open,(num_open - (1))], null)], null));
}
})();
var G__16121 = cljs.core.rest(plushy__$2);
push = G__16120;
plushy__$2 = G__16121;
continue;
} else {
var G__16122 = push;
var G__16123 = cljs.core.rest(plushy__$2);
push = G__16122;
plushy__$2 = G__16123;
continue;
}
} else {
var G__16124 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(push,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null));
var G__16125 = cljs.core.rest(plushy__$2);
push = G__16124;
plushy__$2 = G__16125;
continue;
}
}
break;
}
});

propeller.genome.plushy__GT_push.cljs$lang$maxFixedArity = 2;

