// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.vector');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
propeller.push.instructions.vector._butlast = cljs.core.with_meta((function propeller$push$instructions$vector$_butlast(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13922_SHARP_){
return cljs.core.vec(cljs.core.butlast(p1__13922_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_butlast"], null));
propeller.push.instructions.vector._concat = cljs.core.with_meta((function propeller$push$instructions$vector$_concat(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13924_SHARP_,p2__13923_SHARP_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p2__13923_SHARP_,p1__13924_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_concat"], null));
propeller.push.instructions.vector._conj = cljs.core.with_meta((function propeller$push$instructions$vector$_conj(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__13926_SHARP_,p2__13925_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__13925_SHARP_,p1__13926_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_conj"], null));
propeller.push.instructions.vector._contains = cljs.core.with_meta((function propeller$push$instructions$vector$_contains(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__13928_SHARP_,p2__13927_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(p2__13927_SHARP_),p1__13928_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_contains"], null));
propeller.push.instructions.vector._emptyvector = cljs.core.with_meta((function propeller$push$instructions$vector$_emptyvector(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_emptyvector"], null));
propeller.push.instructions.vector._first = cljs.core.with_meta((function propeller$push$instructions$vector$_first(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__13929_SHARP_){
if(cljs.core.empty_QMARK_(p1__13929_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.first(p1__13929_SHARP_);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_first"], null));
propeller.push.instructions.vector._indexof = cljs.core.with_meta((function propeller$push$instructions$vector$_indexof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__13930_SHARP_,p2__13931_SHARP_){
return propeller.utils.indexof(p1__13930_SHARP_,p2__13931_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_indexof"], null));
propeller.push.instructions.vector._iterate = cljs.core.with_meta((function propeller$push$instructions$vector$_iterate(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
if(((propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)) || (propeller.push.state.empty_stack_QMARK_(state,stack)))){
return state;
} else {
var vect = propeller.push.state.peek_stack(state,stack);
var popped_state = propeller.push.state.pop_stack(state,stack);
if(cljs.core.empty_QMARK_(vect)){
return propeller.push.state.pop_stack(popped_state,cljs.core.cst$kw$exec);
} else {
if(cljs.core.empty_QMARK_(cljs.core.rest(vect))){
return propeller.push.state.push_to_stack(popped_state,lit_stack,cljs.core.first(vect));
} else {
return propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack),"_iterate"].join(''))),cljs.core.cst$kw$exec,cljs.core.vec(cljs.core.rest(vect))),cljs.core.cst$kw$exec,propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec)),lit_stack,cljs.core.first(vect));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_iterate"], null));
propeller.push.instructions.vector._last = cljs.core.with_meta((function propeller$push$instructions$vector$_last(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__13932_SHARP_){
if(cljs.core.empty_QMARK_(p1__13932_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.last(p1__13932_SHARP_);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_last"], null));
propeller.push.instructions.vector._length = cljs.core.with_meta((function propeller$push$instructions$vector$_length(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_length"], null));
propeller.push.instructions.vector._nth = cljs.core.with_meta((function propeller$push$instructions$vector$_nth(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (p1__13934_SHARP_,p2__13933_SHARP_){
if(cljs.core.empty_QMARK_(p2__13933_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__13933_SHARP_,cljs.core.mod(p1__13934_SHARP_,cljs.core.count(p2__13933_SHARP_)));
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_nth"], null));
propeller.push.instructions.vector._occurrencesof = cljs.core.with_meta((function propeller$push$instructions$vector$_occurrencesof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit,vect){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (lit_stack){
return (function (p1__13935_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lit,p1__13935_SHARP_);
});})(lit_stack))
,vect));
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_occurrencesof"], null));
propeller.push.instructions.vector._pushall = cljs.core.with_meta((function propeller$push$instructions$vector$_pushall(stack,state){
if(propeller.push.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
var top_vector = propeller.push.state.peek_stack(state,stack);
var popped_state = propeller.push.state.pop_stack(state,stack);
return propeller.push.state.push_to_stack_many(popped_state,lit_stack,top_vector);
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_pushall"], null));
propeller.push.instructions.vector._remove = cljs.core.with_meta((function propeller$push$instructions$vector$_remove(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit,vect){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (lit_stack){
return (function (p1__13936_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lit,p1__13936_SHARP_);
});})(lit_stack))
,vect));
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_remove"], null));
propeller.push.instructions.vector._replace = cljs.core.with_meta((function propeller$push$instructions$vector$_replace(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit1,lit2,vect){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lit1,lit2]),vect);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_replace"], null));
propeller.push.instructions.vector._replacefirst = cljs.core.with_meta((function propeller$push$instructions$vector$_replacefirst(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit1,lit2,vect){
var replaceindex = propeller.utils.indexof(lit1,vect);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(replaceindex,(-1))){
return vect;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vect,replaceindex,lit2);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,null], null), null),cljs.core.cst$kw$name,"_replacefirst"], null));
propeller.push.instructions.vector._rest = cljs.core.with_meta((function propeller$push$instructions$vector$_rest(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13937_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__13937_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_rest"], null));
propeller.push.instructions.vector._reverse = cljs.core.with_meta((function propeller$push$instructions$vector$_reverse(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13938_SHARP_){
return cljs.core.vec(cljs.core.reverse(p1__13938_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_reverse"], null));
propeller.push.instructions.vector._set = cljs.core.with_meta((function propeller$push$instructions$vector$_set(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type(stack);
return propeller.push.utils.helpers.make_instruction(state,((function (lit_stack){
return (function (lit,n,vect){
if(cljs.core.empty_QMARK_(vect)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vect,cljs.core.mod(n,cljs.core.count(vect)),lit);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,cljs.core.cst$kw$integer,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elem,null,cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_set"], null));
propeller.push.instructions.vector._subvec = cljs.core.with_meta((function propeller$push$instructions$vector$_subvec(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (start_raw,stop_raw,vect){
var start = (function (){var x__4222__auto__ = cljs.core.count(vect);
var y__4223__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var stop = (function (){var x__4222__auto__ = cljs.core.count(vect);
var y__4223__auto__ = (function (){var x__4219__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4220__auto__ = stop_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,start,stop);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$integer,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_subvec"], null));
propeller.push.instructions.vector._take = cljs.core.with_meta((function propeller$push$instructions$vector$_take(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13939_SHARP_,p2__13940_SHARP_){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__13939_SHARP_,p2__13940_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_take"], null));
var seq__13941_13989 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
var chunk__13948_13990 = null;
var count__13949_13991 = (0);
var i__13950_13992 = (0);
while(true){
if((i__13950_13992 < count__13949_13991)){
var stack__2790__auto___13993 = chunk__13948_13990.cljs$core$IIndexed$_nth$arity$2(null,i__13950_13992);
var seq__13951_13994 = cljs.core.seq(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__13953_13995 = null;
var count__13954_13996 = (0);
var i__13955_13997 = (0);
while(true){
if((i__13955_13997 < count__13954_13996)){
var func__2791__auto___13998 = chunk__13953_13995.cljs$core$IIndexed$_nth$arity$2(null,i__13955_13997);
var instruction_name__2792__auto___13999 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___13993),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___13998)))].join(''));
var metadata__2793__auto___14000 = (function (){var G__13978 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___13998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___13993,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___13993)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___13998))))));
var fexpr__13977 = ((function (seq__13951_13994,chunk__13953_13995,count__13954_13996,i__13955_13997,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13978,instruction_name__2792__auto___13999,func__2791__auto___13998,stack__2790__auto___13993){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__13951_13994,chunk__13953_13995,count__13954_13996,i__13955_13997,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13978,instruction_name__2792__auto___13999,func__2791__auto___13998,stack__2790__auto___13993))
;
return fexpr__13977(G__13978);
})();
var new_func__2794__auto___14001 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___13998,stack__2790__auto___13993),metadata__2793__auto___14000);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___13999,new_func__2794__auto___14001);


var G__14002 = seq__13951_13994;
var G__14003 = chunk__13953_13995;
var G__14004 = count__13954_13996;
var G__14005 = (i__13955_13997 + (1));
seq__13951_13994 = G__14002;
chunk__13953_13995 = G__14003;
count__13954_13996 = G__14004;
i__13955_13997 = G__14005;
continue;
} else {
var temp__5735__auto___14006 = cljs.core.seq(seq__13951_13994);
if(temp__5735__auto___14006){
var seq__13951_14007__$1 = temp__5735__auto___14006;
if(cljs.core.chunked_seq_QMARK_(seq__13951_14007__$1)){
var c__4550__auto___14008 = cljs.core.chunk_first(seq__13951_14007__$1);
var G__14009 = cljs.core.chunk_rest(seq__13951_14007__$1);
var G__14010 = c__4550__auto___14008;
var G__14011 = cljs.core.count(c__4550__auto___14008);
var G__14012 = (0);
seq__13951_13994 = G__14009;
chunk__13953_13995 = G__14010;
count__13954_13996 = G__14011;
i__13955_13997 = G__14012;
continue;
} else {
var func__2791__auto___14013 = cljs.core.first(seq__13951_14007__$1);
var instruction_name__2792__auto___14014 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___13993),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14013)))].join(''));
var metadata__2793__auto___14015 = (function (){var G__13980 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14013),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___13993,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___13993)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14013))))));
var fexpr__13979 = ((function (seq__13951_13994,chunk__13953_13995,count__13954_13996,i__13955_13997,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13980,instruction_name__2792__auto___14014,func__2791__auto___14013,seq__13951_14007__$1,temp__5735__auto___14006,stack__2790__auto___13993){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__13951_13994,chunk__13953_13995,count__13954_13996,i__13955_13997,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13980,instruction_name__2792__auto___14014,func__2791__auto___14013,seq__13951_14007__$1,temp__5735__auto___14006,stack__2790__auto___13993))
;
return fexpr__13979(G__13980);
})();
var new_func__2794__auto___14016 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14013,stack__2790__auto___13993),metadata__2793__auto___14015);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14014,new_func__2794__auto___14016);


var G__14017 = cljs.core.next(seq__13951_14007__$1);
var G__14018 = null;
var G__14019 = (0);
var G__14020 = (0);
seq__13951_13994 = G__14017;
chunk__13953_13995 = G__14018;
count__13954_13996 = G__14019;
i__13955_13997 = G__14020;
continue;
}
} else {
}
}
break;
}

var G__14021 = seq__13941_13989;
var G__14022 = chunk__13948_13990;
var G__14023 = count__13949_13991;
var G__14024 = (i__13950_13992 + (1));
seq__13941_13989 = G__14021;
chunk__13948_13990 = G__14022;
count__13949_13991 = G__14023;
i__13950_13992 = G__14024;
continue;
} else {
var temp__5735__auto___14025 = cljs.core.seq(seq__13941_13989);
if(temp__5735__auto___14025){
var seq__13941_14026__$1 = temp__5735__auto___14025;
if(cljs.core.chunked_seq_QMARK_(seq__13941_14026__$1)){
var c__4550__auto___14027 = cljs.core.chunk_first(seq__13941_14026__$1);
var G__14028 = cljs.core.chunk_rest(seq__13941_14026__$1);
var G__14029 = c__4550__auto___14027;
var G__14030 = cljs.core.count(c__4550__auto___14027);
var G__14031 = (0);
seq__13941_13989 = G__14028;
chunk__13948_13990 = G__14029;
count__13949_13991 = G__14030;
i__13950_13992 = G__14031;
continue;
} else {
var stack__2790__auto___14032 = cljs.core.first(seq__13941_14026__$1);
var seq__13942_14033 = cljs.core.seq(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__13944_14034 = null;
var count__13945_14035 = (0);
var i__13946_14036 = (0);
while(true){
if((i__13946_14036 < count__13945_14035)){
var func__2791__auto___14037 = chunk__13944_14034.cljs$core$IIndexed$_nth$arity$2(null,i__13946_14036);
var instruction_name__2792__auto___14038 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14037)))].join(''));
var metadata__2793__auto___14039 = (function (){var G__13986 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14037),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14032,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14032)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14037))))));
var fexpr__13985 = ((function (seq__13942_14033,chunk__13944_14034,count__13945_14035,i__13946_14036,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13986,instruction_name__2792__auto___14038,func__2791__auto___14037,stack__2790__auto___14032,seq__13941_14026__$1,temp__5735__auto___14025){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__13942_14033,chunk__13944_14034,count__13945_14035,i__13946_14036,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13986,instruction_name__2792__auto___14038,func__2791__auto___14037,stack__2790__auto___14032,seq__13941_14026__$1,temp__5735__auto___14025))
;
return fexpr__13985(G__13986);
})();
var new_func__2794__auto___14040 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14037,stack__2790__auto___14032),metadata__2793__auto___14039);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14038,new_func__2794__auto___14040);


var G__14041 = seq__13942_14033;
var G__14042 = chunk__13944_14034;
var G__14043 = count__13945_14035;
var G__14044 = (i__13946_14036 + (1));
seq__13942_14033 = G__14041;
chunk__13944_14034 = G__14042;
count__13945_14035 = G__14043;
i__13946_14036 = G__14044;
continue;
} else {
var temp__5735__auto___14045__$1 = cljs.core.seq(seq__13942_14033);
if(temp__5735__auto___14045__$1){
var seq__13942_14046__$1 = temp__5735__auto___14045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13942_14046__$1)){
var c__4550__auto___14047 = cljs.core.chunk_first(seq__13942_14046__$1);
var G__14048 = cljs.core.chunk_rest(seq__13942_14046__$1);
var G__14049 = c__4550__auto___14047;
var G__14050 = cljs.core.count(c__4550__auto___14047);
var G__14051 = (0);
seq__13942_14033 = G__14048;
chunk__13944_14034 = G__14049;
count__13945_14035 = G__14050;
i__13946_14036 = G__14051;
continue;
} else {
var func__2791__auto___14052 = cljs.core.first(seq__13942_14046__$1);
var instruction_name__2792__auto___14053 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14052)))].join(''));
var metadata__2793__auto___14054 = (function (){var G__13988 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14052),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14032,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14032)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14052))))));
var fexpr__13987 = ((function (seq__13942_14033,chunk__13944_14034,count__13945_14035,i__13946_14036,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13988,instruction_name__2792__auto___14053,func__2791__auto___14052,seq__13942_14046__$1,temp__5735__auto___14045__$1,stack__2790__auto___14032,seq__13941_14026__$1,temp__5735__auto___14025){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__13942_14033,chunk__13944_14034,count__13945_14035,i__13946_14036,seq__13941_13989,chunk__13948_13990,count__13949_13991,i__13950_13992,G__13988,instruction_name__2792__auto___14053,func__2791__auto___14052,seq__13942_14046__$1,temp__5735__auto___14045__$1,stack__2790__auto___14032,seq__13941_14026__$1,temp__5735__auto___14025))
;
return fexpr__13987(G__13988);
})();
var new_func__2794__auto___14055 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14052,stack__2790__auto___14032),metadata__2793__auto___14054);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14053,new_func__2794__auto___14055);


var G__14056 = cljs.core.next(seq__13942_14046__$1);
var G__14057 = null;
var G__14058 = (0);
var G__14059 = (0);
seq__13942_14033 = G__14056;
chunk__13944_14034 = G__14057;
count__13945_14035 = G__14058;
i__13946_14036 = G__14059;
continue;
}
} else {
}
}
break;
}

var G__14060 = cljs.core.next(seq__13941_14026__$1);
var G__14061 = null;
var G__14062 = (0);
var G__14063 = (0);
seq__13941_13989 = G__14060;
chunk__13948_13990 = G__14061;
count__13949_13991 = G__14062;
i__13950_13992 = G__14063;
continue;
}
} else {
}
}
break;
}
