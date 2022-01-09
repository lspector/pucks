// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.vector');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
propeller.push.instructions.vector._butlast = cljs.core.with_meta((function propeller$push$instructions$vector$_butlast(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5093_SHARP_){
return cljs.core.vec.call(null,cljs.core.butlast.call(null,p1__5093_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_butlast"], null));
propeller.push.instructions.vector._concat = cljs.core.with_meta((function propeller$push$instructions$vector$_concat(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5095_SHARP_,p2__5094_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,p2__5094_SHARP_,p1__5095_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_concat"], null));
propeller.push.instructions.vector._conj = cljs.core.with_meta((function propeller$push$instructions$vector$_conj(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (p1__5097_SHARP_,p2__5096_SHARP_){
return cljs.core.conj.call(null,p2__5096_SHARP_,p1__5097_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_conj"], null));
propeller.push.instructions.vector._contains = cljs.core.with_meta((function propeller$push$instructions$vector$_contains(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (p1__5099_SHARP_,p2__5098_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,p2__5098_SHARP_),p1__5099_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_contains"], null));
propeller.push.instructions.vector._emptyvector = cljs.core.with_meta((function propeller$push$instructions$vector$_emptyvector(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_emptyvector"], null));
propeller.push.instructions.vector._first = cljs.core.with_meta((function propeller$push$instructions$vector$_first(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (p1__5100_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__5100_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.first.call(null,p1__5100_SHARP_);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_first"], null));
propeller.push.instructions.vector._indexof = cljs.core.with_meta((function propeller$push$instructions$vector$_indexof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (p1__5101_SHARP_,p2__5102_SHARP_){
return propeller.utils.indexof.call(null,p1__5101_SHARP_,p2__5102_SHARP_);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_indexof"], null));
propeller.push.instructions.vector._iterate = cljs.core.with_meta((function propeller$push$instructions$vector$_iterate(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
if(((propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))) || (propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))){
return state;
} else {
var vect = propeller.push.state.peek_stack.call(null,state,stack);
var popped_state = propeller.push.state.pop_stack.call(null,state,stack);
if(cljs.core.empty_QMARK_.call(null,vect)){
return propeller.push.state.pop_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743));
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,vect))){
return propeller.push.state.push_to_stack.call(null,popped_state,lit_stack,cljs.core.first.call(null,vect));
} else {
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.keyword.call(null,[cljs.core.name.call(null,stack),"_iterate"].join(''))),new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.vec.call(null,cljs.core.rest.call(null,vect))),new cljs.core.Keyword(null,"exec","exec",1625568743),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))),lit_stack,cljs.core.first.call(null,vect));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_iterate"], null));
propeller.push.instructions.vector._last = cljs.core.with_meta((function propeller$push$instructions$vector$_last(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (p1__5103_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__5103_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.last.call(null,p1__5103_SHARP_);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_last"], null));
propeller.push.instructions.vector._length = cljs.core.with_meta((function propeller$push$instructions$vector$_length(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_length"], null));
propeller.push.instructions.vector._nth = cljs.core.with_meta((function propeller$push$instructions$vector$_nth(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (p1__5105_SHARP_,p2__5104_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p2__5104_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.get.call(null,p2__5104_SHARP_,cljs.core.mod.call(null,p1__5105_SHARP_,cljs.core.count.call(null,p2__5104_SHARP_)));
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),lit_stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_nth"], null));
propeller.push.instructions.vector._occurrencesof = cljs.core.with_meta((function propeller$push$instructions$vector$_occurrencesof(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (lit,vect){
return cljs.core.count.call(null,cljs.core.filter.call(null,((function (lit_stack){
return (function (p1__5106_SHARP_){
return cljs.core._EQ_.call(null,lit,p1__5106_SHARP_);
});})(lit_stack))
,vect));
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_occurrencesof"], null));
propeller.push.instructions.vector._pushall = cljs.core.with_meta((function propeller$push$instructions$vector$_pushall(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
var top_vector = propeller.push.state.peek_stack.call(null,state,stack);
var popped_state = propeller.push.state.pop_stack.call(null,state,stack);
return propeller.push.state.push_to_stack_many.call(null,popped_state,lit_stack,top_vector);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_pushall"], null));
propeller.push.instructions.vector._remove = cljs.core.with_meta((function propeller$push$instructions$vector$_remove(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (lit,vect){
return cljs.core.vec.call(null,cljs.core.filter.call(null,((function (lit_stack){
return (function (p1__5107_SHARP_){
return cljs.core.not_EQ_.call(null,lit,p1__5107_SHARP_);
});})(lit_stack))
,vect));
});})(lit_stack))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_remove"], null));
propeller.push.instructions.vector._replace = cljs.core.with_meta((function propeller$push$instructions$vector$_replace(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (lit1,lit2,vect){
return cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([lit1,lit2]),vect);
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_replace"], null));
propeller.push.instructions.vector._replacefirst = cljs.core.with_meta((function propeller$push$instructions$vector$_replacefirst(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (lit1,lit2,vect){
var replaceindex = propeller.utils.indexof.call(null,lit1,vect);
if(cljs.core._EQ_.call(null,replaceindex,(-1))){
return vect;
} else {
return cljs.core.assoc.call(null,vect,replaceindex,lit2);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,lit_stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_replacefirst"], null));
propeller.push.instructions.vector._rest = cljs.core.with_meta((function propeller$push$instructions$vector$_rest(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5108_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__5108_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rest"], null));
propeller.push.instructions.vector._reverse = cljs.core.with_meta((function propeller$push$instructions$vector$_reverse(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5109_SHARP_){
return cljs.core.vec.call(null,cljs.core.reverse.call(null,p1__5109_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_reverse"], null));
propeller.push.instructions.vector._set = cljs.core.with_meta((function propeller$push$instructions$vector$_set(stack,state){
var lit_stack = propeller.push.utils.helpers.get_vector_literal_type.call(null,stack);
return propeller.push.utils.helpers.make_instruction.call(null,state,((function (lit_stack){
return (function (lit,n,vect){
if(cljs.core.empty_QMARK_.call(null,vect)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.assoc.call(null,vect,cljs.core.mod.call(null,n,cljs.core.count.call(null,vect)),lit);
}
});})(lit_stack))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lit_stack,new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",618631056),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_set"], null));
propeller.push.instructions.vector._subvec = cljs.core.with_meta((function propeller$push$instructions$vector$_subvec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (start_raw,stop_raw,vect){
var start = (function (){var x__4222__auto__ = cljs.core.count.call(null,vect);
var y__4223__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var stop = (function (){var x__4222__auto__ = cljs.core.count.call(null,vect);
var y__4223__auto__ = (function (){var x__4219__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4220__auto__ = stop_raw;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.subvec.call(null,vect,start,stop);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_subvec"], null));
propeller.push.instructions.vector._take = cljs.core.with_meta((function propeller$push$instructions$vector$_take(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5110_SHARP_,p2__5111_SHARP_){
return cljs.core.vec.call(null,cljs.core.take.call(null,p1__5110_SHARP_,p2__5111_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_take"], null));
var seq__5112_5128 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__5119_5129 = null;
var count__5120_5130 = (0);
var i__5121_5131 = (0);
while(true){
if((i__5121_5131 < count__5120_5130)){
var stack__4333__auto___5132 = cljs.core._nth.call(null,chunk__5119_5129,i__5121_5131);
var seq__5122_5133 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__5124_5134 = null;
var count__5125_5135 = (0);
var i__5126_5136 = (0);
while(true){
if((i__5126_5136 < count__5125_5135)){
var func__4334__auto___5137 = cljs.core._nth.call(null,chunk__5124_5134,i__5126_5136);
var instruction_name__4335__auto___5138 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5132),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5137)))].join(''));
var metadata__4336__auto___5139 = ((function (seq__5122_5133,chunk__5124_5134,count__5125_5135,i__5126_5136,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5138,func__4334__auto___5137,stack__4333__auto___5132){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5122_5133,chunk__5124_5134,count__5125_5135,i__5126_5136,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5138,func__4334__auto___5137,stack__4333__auto___5132))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5137),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5132,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5132)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5137)))))));
var new_func__4337__auto___5140 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5137,stack__4333__auto___5132),metadata__4336__auto___5139);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5138,new_func__4337__auto___5140);


var G__5141 = seq__5122_5133;
var G__5142 = chunk__5124_5134;
var G__5143 = count__5125_5135;
var G__5144 = (i__5126_5136 + (1));
seq__5122_5133 = G__5141;
chunk__5124_5134 = G__5142;
count__5125_5135 = G__5143;
i__5126_5136 = G__5144;
continue;
} else {
var temp__5735__auto___5145 = cljs.core.seq.call(null,seq__5122_5133);
if(temp__5735__auto___5145){
var seq__5122_5146__$1 = temp__5735__auto___5145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5122_5146__$1)){
var c__4550__auto___5147 = cljs.core.chunk_first.call(null,seq__5122_5146__$1);
var G__5148 = cljs.core.chunk_rest.call(null,seq__5122_5146__$1);
var G__5149 = c__4550__auto___5147;
var G__5150 = cljs.core.count.call(null,c__4550__auto___5147);
var G__5151 = (0);
seq__5122_5133 = G__5148;
chunk__5124_5134 = G__5149;
count__5125_5135 = G__5150;
i__5126_5136 = G__5151;
continue;
} else {
var func__4334__auto___5152 = cljs.core.first.call(null,seq__5122_5146__$1);
var instruction_name__4335__auto___5153 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5132),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5152)))].join(''));
var metadata__4336__auto___5154 = ((function (seq__5122_5133,chunk__5124_5134,count__5125_5135,i__5126_5136,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5153,func__4334__auto___5152,seq__5122_5146__$1,temp__5735__auto___5145,stack__4333__auto___5132){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5122_5133,chunk__5124_5134,count__5125_5135,i__5126_5136,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5153,func__4334__auto___5152,seq__5122_5146__$1,temp__5735__auto___5145,stack__4333__auto___5132))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5152),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5132,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5132)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5152)))))));
var new_func__4337__auto___5155 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5152,stack__4333__auto___5132),metadata__4336__auto___5154);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5153,new_func__4337__auto___5155);


var G__5156 = cljs.core.next.call(null,seq__5122_5146__$1);
var G__5157 = null;
var G__5158 = (0);
var G__5159 = (0);
seq__5122_5133 = G__5156;
chunk__5124_5134 = G__5157;
count__5125_5135 = G__5158;
i__5126_5136 = G__5159;
continue;
}
} else {
}
}
break;
}

var G__5160 = seq__5112_5128;
var G__5161 = chunk__5119_5129;
var G__5162 = count__5120_5130;
var G__5163 = (i__5121_5131 + (1));
seq__5112_5128 = G__5160;
chunk__5119_5129 = G__5161;
count__5120_5130 = G__5162;
i__5121_5131 = G__5163;
continue;
} else {
var temp__5735__auto___5164 = cljs.core.seq.call(null,seq__5112_5128);
if(temp__5735__auto___5164){
var seq__5112_5165__$1 = temp__5735__auto___5164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5112_5165__$1)){
var c__4550__auto___5166 = cljs.core.chunk_first.call(null,seq__5112_5165__$1);
var G__5167 = cljs.core.chunk_rest.call(null,seq__5112_5165__$1);
var G__5168 = c__4550__auto___5166;
var G__5169 = cljs.core.count.call(null,c__4550__auto___5166);
var G__5170 = (0);
seq__5112_5128 = G__5167;
chunk__5119_5129 = G__5168;
count__5120_5130 = G__5169;
i__5121_5131 = G__5170;
continue;
} else {
var stack__4333__auto___5171 = cljs.core.first.call(null,seq__5112_5165__$1);
var seq__5113_5172 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.vector._butlast,propeller.push.instructions.vector._concat,propeller.push.instructions.vector._conj,propeller.push.instructions.vector._contains,propeller.push.instructions.vector._emptyvector,propeller.push.instructions.vector._first,propeller.push.instructions.vector._indexof,propeller.push.instructions.vector._iterate,propeller.push.instructions.vector._last,propeller.push.instructions.vector._length,propeller.push.instructions.vector._nth,propeller.push.instructions.vector._occurrencesof,propeller.push.instructions.vector._pushall,propeller.push.instructions.vector._remove,propeller.push.instructions.vector._replace,propeller.push.instructions.vector._replacefirst,propeller.push.instructions.vector._rest,propeller.push.instructions.vector._reverse,propeller.push.instructions.vector._set,propeller.push.instructions.vector._subvec,propeller.push.instructions.vector._take], null));
var chunk__5115_5173 = null;
var count__5116_5174 = (0);
var i__5117_5175 = (0);
while(true){
if((i__5117_5175 < count__5116_5174)){
var func__4334__auto___5176 = cljs.core._nth.call(null,chunk__5115_5173,i__5117_5175);
var instruction_name__4335__auto___5177 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5176)))].join(''));
var metadata__4336__auto___5178 = ((function (seq__5113_5172,chunk__5115_5173,count__5116_5174,i__5117_5175,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5177,func__4334__auto___5176,stack__4333__auto___5171,seq__5112_5165__$1,temp__5735__auto___5164){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5113_5172,chunk__5115_5173,count__5116_5174,i__5117_5175,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5177,func__4334__auto___5176,stack__4333__auto___5171,seq__5112_5165__$1,temp__5735__auto___5164))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5176),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5171,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5171)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5176)))))));
var new_func__4337__auto___5179 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5176,stack__4333__auto___5171),metadata__4336__auto___5178);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5177,new_func__4337__auto___5179);


var G__5180 = seq__5113_5172;
var G__5181 = chunk__5115_5173;
var G__5182 = count__5116_5174;
var G__5183 = (i__5117_5175 + (1));
seq__5113_5172 = G__5180;
chunk__5115_5173 = G__5181;
count__5116_5174 = G__5182;
i__5117_5175 = G__5183;
continue;
} else {
var temp__5735__auto___5184__$1 = cljs.core.seq.call(null,seq__5113_5172);
if(temp__5735__auto___5184__$1){
var seq__5113_5185__$1 = temp__5735__auto___5184__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5113_5185__$1)){
var c__4550__auto___5186 = cljs.core.chunk_first.call(null,seq__5113_5185__$1);
var G__5187 = cljs.core.chunk_rest.call(null,seq__5113_5185__$1);
var G__5188 = c__4550__auto___5186;
var G__5189 = cljs.core.count.call(null,c__4550__auto___5186);
var G__5190 = (0);
seq__5113_5172 = G__5187;
chunk__5115_5173 = G__5188;
count__5116_5174 = G__5189;
i__5117_5175 = G__5190;
continue;
} else {
var func__4334__auto___5191 = cljs.core.first.call(null,seq__5113_5185__$1);
var instruction_name__4335__auto___5192 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5171),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5191)))].join(''));
var metadata__4336__auto___5193 = ((function (seq__5113_5172,chunk__5115_5173,count__5116_5174,i__5117_5175,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5192,func__4334__auto___5191,seq__5113_5185__$1,temp__5735__auto___5184__$1,stack__4333__auto___5171,seq__5112_5165__$1,temp__5735__auto___5164){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5113_5172,chunk__5115_5173,count__5116_5174,i__5117_5175,seq__5112_5128,chunk__5119_5129,count__5120_5130,i__5121_5131,instruction_name__4335__auto___5192,func__4334__auto___5191,seq__5113_5185__$1,temp__5735__auto___5184__$1,stack__4333__auto___5171,seq__5112_5165__$1,temp__5735__auto___5164))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5191),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5171,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5171)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5191)))))));
var new_func__4337__auto___5194 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5191,stack__4333__auto___5171),metadata__4336__auto___5193);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5192,new_func__4337__auto___5194);


var G__5195 = cljs.core.next.call(null,seq__5113_5185__$1);
var G__5196 = null;
var G__5197 = (0);
var G__5198 = (0);
seq__5113_5172 = G__5195;
chunk__5115_5173 = G__5196;
count__5116_5174 = G__5197;
i__5117_5175 = G__5198;
continue;
}
} else {
}
}
break;
}

var G__5199 = cljs.core.next.call(null,seq__5112_5165__$1);
var G__5200 = null;
var G__5201 = (0);
var G__5202 = (0);
seq__5112_5128 = G__5199;
chunk__5119_5129 = G__5200;
count__5120_5130 = G__5201;
i__5121_5131 = G__5202;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=vector.js.map
