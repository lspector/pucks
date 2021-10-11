// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.polymorphic');
goog.require('cljs.core');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.globals');
propeller.push.instructions.polymorphic._dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup(stack,state){
var top_item = propeller.push.state.peek_stack.call(null,state,stack);
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
return propeller.push.state.push_to_stack.call(null,state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dup"], null));
propeller.push.instructions.polymorphic._dup_times = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_times(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var n = (function (){var x__4222__auto__ = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var y__4223__auto__ = ((propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size.call(null,state,stack)) + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = propeller.push.state.peek_stack.call(null,popped_state,stack);
var top_item_dup = cljs.core.take.call(null,(n - (1)),cljs.core.repeat.call(null,top_item));
if(((0) < n)){
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_item_dup);
} else {
return propeller.push.state.pop_stack.call(null,popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_dup_times"], null));
propeller.push.instructions.polymorphic._dup_items = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_items(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))){
return state;
} else {
var n = (function (){var x__4222__auto__ = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var y__4223__auto__ = (propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size.call(null,state,stack));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_items = cljs.core.take.call(null,n,cljs.core.get.call(null,popped_state,stack));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_dup_items"], null));
propeller.push.instructions.polymorphic._empty = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_empty(stack,state){
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),propeller.push.state.empty_stack_QMARK_.call(null,state,stack));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_empty"], null));
propeller.push.instructions.polymorphic._eq = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_eq(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_eq"], null));
propeller.push.instructions.polymorphic._flush = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_flush(stack,state){
return cljs.core.assoc.call(null,state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_flush"], null));
propeller.push.instructions.polymorphic._pop = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_pop(stack,state){
return propeller.push.state.pop_stack.call(null,state,stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_pop"], null));
propeller.push.instructions.polymorphic._rot = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_rot(stack,state){
if(((3) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_three = propeller.push.state.peek_stack_many.call(null,state,stack,(3));
var popped_state = propeller.push.state.pop_stack_many.call(null,state,stack,(3));
var top_three_rot = cljs.core.take.call(null,(3),cljs.core.conj.call(null,top_three,cljs.core.last.call(null,top_three)));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_rot"], null));
propeller.push.instructions.polymorphic._shove = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_shove(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var top_item = propeller.push.state.peek_stack.call(null,popped_state,stack);
var popped_state__$1 = propeller.push.state.pop_stack.call(null,popped_state,stack);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state__$1,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.update.call(null,popped_state__$1,stack,((function (index_raw,popped_state,top_item,popped_state__$1,index){
return (function (p1__6853_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,cljs.core.take.call(null,index,p1__6853_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.drop.call(null,index,p1__6853_SHARP_)));
});})(index_raw,popped_state,top_item,popped_state__$1,index))
);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_shove"], null));
propeller.push.instructions.polymorphic._stack_depth = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_stack_depth(stack,state){
var stack_depth = cljs.core.count.call(null,cljs.core.get.call(null,state,stack));
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710),stack_depth);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_stack_depth"], null));
propeller.push.instructions.polymorphic._swap = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_swap(stack,state){
if(((2) <= cljs.core.count.call(null,cljs.core.get.call(null,state,stack)))){
var top_two = propeller.push.state.peek_stack_many.call(null,state,stack,(2));
var popped_state = propeller.push.state.pop_stack_many.call(null,state,stack,(2));
return propeller.push.state.push_to_stack_many.call(null,popped_state,stack,cljs.core.reverse.call(null,top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_swap"], null));
propeller.push.instructions.polymorphic._yank = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return cljs.core.update.call(null,popped_state,stack,((function (index_raw,popped_state,index,indexed_item){
return (function (p1__6854_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.call(null,index,p1__6854_SHARP_),cljs.core.rest.call(null,cljs.core.drop.call(null,index,p1__6854_SHARP_))));
});})(index_raw,popped_state,index,indexed_item))
);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_yank"], null));
propeller.push.instructions.polymorphic._yank_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank_dup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.get.call(null,popped_state,stack),index);
return propeller.push.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_yank_dup"], null));
propeller.push.instructions.polymorphic._deep_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_deep_dup(stack,state){
if(((((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && (((2) <= cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))))) && ((!(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)))))))){
var index_raw = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count.call(null,cljs.core.get.call(null,popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.call(null,cljs.core.reverse.call(null,cljs.core.get.call(null,popped_state,stack)),index);
return propeller.push.state.push_to_stack.call(null,popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_deep_dup"], null));
var seq__6855_6871 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__6862_6872 = null;
var count__6863_6873 = (0);
var i__6864_6874 = (0);
while(true){
if((i__6864_6874 < count__6863_6873)){
var stack__4333__auto___6875 = cljs.core._nth.call(null,chunk__6862_6872,i__6864_6874);
var seq__6865_6876 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__6867_6877 = null;
var count__6868_6878 = (0);
var i__6869_6879 = (0);
while(true){
if((i__6869_6879 < count__6868_6878)){
var func__4334__auto___6880 = cljs.core._nth.call(null,chunk__6867_6877,i__6869_6879);
var instruction_name__4335__auto___6881 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___6875),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6880)))].join(''));
var metadata__4336__auto___6882 = ((function (seq__6865_6876,chunk__6867_6877,count__6868_6878,i__6869_6879,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6881,func__4334__auto___6880,stack__4333__auto___6875){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__6865_6876,chunk__6867_6877,count__6868_6878,i__6869_6879,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6881,func__4334__auto___6880,stack__4333__auto___6875))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___6880),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___6875,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___6875)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6880)))))));
var new_func__4337__auto___6883 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___6880,stack__4333__auto___6875),metadata__4336__auto___6882);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___6881,new_func__4337__auto___6883);


var G__6884 = seq__6865_6876;
var G__6885 = chunk__6867_6877;
var G__6886 = count__6868_6878;
var G__6887 = (i__6869_6879 + (1));
seq__6865_6876 = G__6884;
chunk__6867_6877 = G__6885;
count__6868_6878 = G__6886;
i__6869_6879 = G__6887;
continue;
} else {
var temp__5735__auto___6888 = cljs.core.seq.call(null,seq__6865_6876);
if(temp__5735__auto___6888){
var seq__6865_6889__$1 = temp__5735__auto___6888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6865_6889__$1)){
var c__4550__auto___6890 = cljs.core.chunk_first.call(null,seq__6865_6889__$1);
var G__6891 = cljs.core.chunk_rest.call(null,seq__6865_6889__$1);
var G__6892 = c__4550__auto___6890;
var G__6893 = cljs.core.count.call(null,c__4550__auto___6890);
var G__6894 = (0);
seq__6865_6876 = G__6891;
chunk__6867_6877 = G__6892;
count__6868_6878 = G__6893;
i__6869_6879 = G__6894;
continue;
} else {
var func__4334__auto___6895 = cljs.core.first.call(null,seq__6865_6889__$1);
var instruction_name__4335__auto___6896 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___6875),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6895)))].join(''));
var metadata__4336__auto___6897 = ((function (seq__6865_6876,chunk__6867_6877,count__6868_6878,i__6869_6879,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6896,func__4334__auto___6895,seq__6865_6889__$1,temp__5735__auto___6888,stack__4333__auto___6875){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__6865_6876,chunk__6867_6877,count__6868_6878,i__6869_6879,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6896,func__4334__auto___6895,seq__6865_6889__$1,temp__5735__auto___6888,stack__4333__auto___6875))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___6895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___6875,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___6875)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6895)))))));
var new_func__4337__auto___6898 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___6895,stack__4333__auto___6875),metadata__4336__auto___6897);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___6896,new_func__4337__auto___6898);


var G__6899 = cljs.core.next.call(null,seq__6865_6889__$1);
var G__6900 = null;
var G__6901 = (0);
var G__6902 = (0);
seq__6865_6876 = G__6899;
chunk__6867_6877 = G__6900;
count__6868_6878 = G__6901;
i__6869_6879 = G__6902;
continue;
}
} else {
}
}
break;
}

var G__6903 = seq__6855_6871;
var G__6904 = chunk__6862_6872;
var G__6905 = count__6863_6873;
var G__6906 = (i__6864_6874 + (1));
seq__6855_6871 = G__6903;
chunk__6862_6872 = G__6904;
count__6863_6873 = G__6905;
i__6864_6874 = G__6906;
continue;
} else {
var temp__5735__auto___6907 = cljs.core.seq.call(null,seq__6855_6871);
if(temp__5735__auto___6907){
var seq__6855_6908__$1 = temp__5735__auto___6907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6855_6908__$1)){
var c__4550__auto___6909 = cljs.core.chunk_first.call(null,seq__6855_6908__$1);
var G__6910 = cljs.core.chunk_rest.call(null,seq__6855_6908__$1);
var G__6911 = c__4550__auto___6909;
var G__6912 = cljs.core.count.call(null,c__4550__auto___6909);
var G__6913 = (0);
seq__6855_6871 = G__6910;
chunk__6862_6872 = G__6911;
count__6863_6873 = G__6912;
i__6864_6874 = G__6913;
continue;
} else {
var stack__4333__auto___6914 = cljs.core.first.call(null,seq__6855_6908__$1);
var seq__6856_6915 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__6858_6916 = null;
var count__6859_6917 = (0);
var i__6860_6918 = (0);
while(true){
if((i__6860_6918 < count__6859_6917)){
var func__4334__auto___6919 = cljs.core._nth.call(null,chunk__6858_6916,i__6860_6918);
var instruction_name__4335__auto___6920 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___6914),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6919)))].join(''));
var metadata__4336__auto___6921 = ((function (seq__6856_6915,chunk__6858_6916,count__6859_6917,i__6860_6918,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6920,func__4334__auto___6919,stack__4333__auto___6914,seq__6855_6908__$1,temp__5735__auto___6907){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__6856_6915,chunk__6858_6916,count__6859_6917,i__6860_6918,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6920,func__4334__auto___6919,stack__4333__auto___6914,seq__6855_6908__$1,temp__5735__auto___6907))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___6919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___6914,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___6914)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6919)))))));
var new_func__4337__auto___6922 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___6919,stack__4333__auto___6914),metadata__4336__auto___6921);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___6920,new_func__4337__auto___6922);


var G__6923 = seq__6856_6915;
var G__6924 = chunk__6858_6916;
var G__6925 = count__6859_6917;
var G__6926 = (i__6860_6918 + (1));
seq__6856_6915 = G__6923;
chunk__6858_6916 = G__6924;
count__6859_6917 = G__6925;
i__6860_6918 = G__6926;
continue;
} else {
var temp__5735__auto___6927__$1 = cljs.core.seq.call(null,seq__6856_6915);
if(temp__5735__auto___6927__$1){
var seq__6856_6928__$1 = temp__5735__auto___6927__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6856_6928__$1)){
var c__4550__auto___6929 = cljs.core.chunk_first.call(null,seq__6856_6928__$1);
var G__6930 = cljs.core.chunk_rest.call(null,seq__6856_6928__$1);
var G__6931 = c__4550__auto___6929;
var G__6932 = cljs.core.count.call(null,c__4550__auto___6929);
var G__6933 = (0);
seq__6856_6915 = G__6930;
chunk__6858_6916 = G__6931;
count__6859_6917 = G__6932;
i__6860_6918 = G__6933;
continue;
} else {
var func__4334__auto___6934 = cljs.core.first.call(null,seq__6856_6928__$1);
var instruction_name__4335__auto___6935 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___6914),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6934)))].join(''));
var metadata__4336__auto___6936 = ((function (seq__6856_6915,chunk__6858_6916,count__6859_6917,i__6860_6918,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6935,func__4334__auto___6934,seq__6856_6928__$1,temp__5735__auto___6927__$1,stack__4333__auto___6914,seq__6855_6908__$1,temp__5735__auto___6907){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__6856_6915,chunk__6858_6916,count__6859_6917,i__6860_6918,seq__6855_6871,chunk__6862_6872,count__6863_6873,i__6864_6874,instruction_name__4335__auto___6935,func__4334__auto___6934,seq__6856_6928__$1,temp__5735__auto___6927__$1,stack__4333__auto___6914,seq__6855_6908__$1,temp__5735__auto___6907))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___6934),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___6914,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___6914)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___6934)))))));
var new_func__4337__auto___6937 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___6934,stack__4333__auto___6914),metadata__4336__auto___6936);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___6935,new_func__4337__auto___6937);


var G__6938 = cljs.core.next.call(null,seq__6856_6928__$1);
var G__6939 = null;
var G__6940 = (0);
var G__6941 = (0);
seq__6856_6915 = G__6938;
chunk__6858_6916 = G__6939;
count__6859_6917 = G__6940;
i__6860_6918 = G__6941;
continue;
}
} else {
}
}
break;
}

var G__6942 = cljs.core.next.call(null,seq__6855_6908__$1);
var G__6943 = null;
var G__6944 = (0);
var G__6945 = (0);
seq__6855_6871 = G__6942;
chunk__6862_6872 = G__6943;
count__6863_6873 = G__6944;
i__6864_6874 = G__6945;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=polymorphic.js.map
