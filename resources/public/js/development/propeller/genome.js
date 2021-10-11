// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.genome');
goog.require('cljs.core');
goog.require('propeller.push.core');
goog.require('propeller.utils');
/**
 * Creates and returns a new plushy.
 */
propeller.genome.make_random_plushy = (function propeller$genome$make_random_plushy(instructions,max_initial_plushy_size){
return cljs.core.repeatedly.call(null,cljs.core.rand_int.call(null,max_initial_plushy_size),(function (){
return propeller.utils.random_instruction.call(null,instructions);
}));
});
/**
 * Returns the Push program expressed by the given plushy representation.
 */
propeller.genome.plushy__GT_push = (function propeller$genome$plushy__GT_push(var_args){
var G__6951 = arguments.length;
switch (G__6951) {
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
return propeller.genome.plushy__GT_push.call(null,plushy,cljs.core.PersistentArrayMap.EMPTY);
});

propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$2 = (function (plushy,argmap){
var plushy__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"diploid","diploid",1687980470).cljs$core$IFn$_invoke$arity$1(argmap))?cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),plushy)):plushy);
var opener_QMARK_ = ((function (plushy__$1){
return (function (p1__6948_SHARP_){
return ((cljs.core.vector_QMARK_.call(null,p1__6948_SHARP_)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__6948_SHARP_),new cljs.core.Symbol(null,"open","open",-123064921,null))));
});})(plushy__$1))
;
var push = cljs.core.List.EMPTY;
var plushy__$2 = cljs.core.mapcat.call(null,((function (push,plushy__$1,opener_QMARK_){
return (function (p1__6949_SHARP_){
var temp__5733__auto__ = cljs.core.get.call(null,propeller.push.core.opens,p1__6949_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6949_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"open","open",-123064921,null),n], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6949_SHARP_], null);
}
});})(push,plushy__$1,opener_QMARK_))
,plushy__$1);
while(true){
if(cljs.core.empty_QMARK_.call(null,plushy__$2)){
if(cljs.core.truth_(cljs.core.some.call(null,opener_QMARK_,push))){
var G__6953 = push;
var G__6954 = cljs.core.list(new cljs.core.Symbol(null,"close","close",-819286187,null));
push = G__6953;
plushy__$2 = G__6954;
continue;
} else {
return push;
}
} else {
var i = cljs.core.first.call(null,plushy__$2);
if(cljs.core._EQ_.call(null,i,new cljs.core.Symbol(null,"close","close",-819286187,null))){
if(cljs.core.truth_(cljs.core.some.call(null,opener_QMARK_,push))){
var G__6955 = (function (){var post_open = cljs.core.reverse.call(null,cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,opener_QMARK_),cljs.core.reverse.call(null,push)));
var open_index = ((cljs.core.count.call(null,push) - cljs.core.count.call(null,post_open)) - (1));
var num_open = cljs.core.second.call(null,cljs.core.nth.call(null,push,open_index));
var pre_open = cljs.core.take.call(null,open_index,push);
if(cljs.core._EQ_.call(null,(1),num_open)){
return cljs.core.concat.call(null,pre_open,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [post_open], null));
} else {
return cljs.core.concat.call(null,pre_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [post_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"open","open",-123064921,null),(num_open - (1))], null)], null));
}
})();
var G__6956 = cljs.core.rest.call(null,plushy__$2);
push = G__6955;
plushy__$2 = G__6956;
continue;
} else {
var G__6957 = push;
var G__6958 = cljs.core.rest.call(null,plushy__$2);
push = G__6957;
plushy__$2 = G__6958;
continue;
}
} else {
var G__6959 = cljs.core.concat.call(null,push,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null));
var G__6960 = cljs.core.rest.call(null,plushy__$2);
push = G__6959;
plushy__$2 = G__6960;
continue;
}
}
break;
}
});

propeller.genome.plushy__GT_push.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=genome.js.map
