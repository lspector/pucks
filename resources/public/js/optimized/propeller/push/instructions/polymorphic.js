// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.polymorphic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.globals');
propeller.push.instructions.polymorphic._dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup(stack,state){
var top_item = propeller.push.state.peek_stack(state,stack);
if(propeller.push.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
return propeller.push.state.push_to_stack(state,stack,top_item);
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_dup"], null));
propeller.push.instructions.polymorphic._dup_times = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_times(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var n = (function (){var x__4222__auto__ = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var y__4223__auto__ = ((propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size(state,stack)) + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_item = propeller.push.state.peek_stack(popped_state,stack);
var top_item_dup = cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(top_item));
if(((0) < n)){
return propeller.push.state.push_to_stack_many(popped_state,stack,top_item_dup);
} else {
return propeller.push.state.pop_stack(popped_state,stack);

}
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_dup_times"], null));
propeller.push.instructions.polymorphic._dup_items = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_dup_items(stack,state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)){
return state;
} else {
var n = (function (){var x__4222__auto__ = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var y__4223__auto__ = (propeller.push.utils.globals.max_stack_items - propeller.push.state.stack_size(state,stack));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_items = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack));
return propeller.push.state.push_to_stack_many(popped_state,stack,top_items);
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_dup_items"], null));
propeller.push.instructions.polymorphic._empty = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_empty(stack,state){
return propeller.push.state.push_to_stack(state,cljs.core.cst$kw$boolean,propeller.push.state.empty_stack_QMARK_(state,stack));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_empty"], null));
propeller.push.instructions.polymorphic._eq = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_eq(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_eq"], null));
propeller.push.instructions.polymorphic._flush = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_flush(stack,state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,stack,cljs.core.List.EMPTY);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_flush"], null));
propeller.push.instructions.polymorphic._pop = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_pop(stack,state){
return propeller.push.state.pop_stack(state,stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_pop"], null));
propeller.push.instructions.polymorphic._rot = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_rot(stack,state){
if(((3) <= cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack)))){
var top_three = propeller.push.state.peek_stack_many(state,stack,(3));
var popped_state = propeller.push.state.pop_stack_many(state,stack,(3));
var top_three_rot = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(top_three,cljs.core.last(top_three)));
return propeller.push.state.push_to_stack_many(popped_state,stack,top_three_rot);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_rot"], null));
propeller.push.instructions.polymorphic._shove = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_shove(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var top_item = propeller.push.state.peek_stack(popped_state,stack);
var popped_state__$1 = propeller.push.state.pop_stack(popped_state,stack);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state__$1,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(popped_state__$1,stack,((function (index_raw,popped_state,top_item,popped_state__$1,index){
return (function (p1__15986_SHARP_){
return propeller.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p1__15986_SHARP_),(new cljs.core.List(null,top_item,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,p1__15986_SHARP_)], 0)));
});})(index_raw,popped_state,top_item,popped_state__$1,index))
);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_shove"], null));
propeller.push.instructions.polymorphic._stack_depth = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_stack_depth(stack,state){
var stack_depth = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
return propeller.push.state.push_to_stack(state,cljs.core.cst$kw$integer,stack_depth);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_stack_depth"], null));
propeller.push.instructions.polymorphic._swap = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_swap(stack,state){
if(((2) <= cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack)))){
var top_two = propeller.push.state.peek_stack_many(state,stack,(2));
var popped_state = propeller.push.state.pop_stack_many(state,stack,(2));
return propeller.push.state.push_to_stack_many(popped_state,stack,cljs.core.reverse(top_two));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_swap"], null));
propeller.push.instructions.polymorphic._yank = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack),index);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(popped_state,stack,((function (index_raw,popped_state,index,indexed_item){
return (function (p1__15987_SHARP_){
return propeller.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,indexed_item,null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p1__15987_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,p1__15987_SHARP_))], 0)));
});})(index_raw,popped_state,index,indexed_item))
);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_yank"], null));
propeller.push.instructions.polymorphic._yank_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_yank_dup(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack),index);
return propeller.push.state.push_to_stack(popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_yank_dup"], null));
propeller.push.instructions.polymorphic._deep_dup = cljs.core.with_meta((function propeller$push$instructions$polymorphic$_deep_dup(stack,state){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && (((2) <= cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)))))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer)) && ((!(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)))) && ((!(propeller.push.state.empty_stack_QMARK_(state,stack)))))))){
var index_raw = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer);
var index = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = index_raw;
var y__4223__auto__ = (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)) - (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var indexed_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(cljs.core.get.cljs$core$IFn$_invoke$arity$2(popped_state,stack)),index);
return propeller.push.state.push_to_stack(popped_state,stack,indexed_item);
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$integer,null], null), null),cljs.core.cst$kw$name,"_deep_dup"], null));
var seq__15988_16036 = cljs.core.seq(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$char,cljs.core.cst$kw$code,cljs.core.cst$kw$exec,cljs.core.cst$kw$float,cljs.core.cst$kw$integer,cljs.core.cst$kw$string,cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
var chunk__15995_16037 = null;
var count__15996_16038 = (0);
var i__15997_16039 = (0);
while(true){
if((i__15997_16039 < count__15996_16038)){
var stack__2790__auto___16040 = chunk__15995_16037.cljs$core$IIndexed$_nth$arity$2(null,i__15997_16039);
var seq__15998_16041 = cljs.core.seq(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__16000_16042 = null;
var count__16001_16043 = (0);
var i__16002_16044 = (0);
while(true){
if((i__16002_16044 < count__16001_16043)){
var func__2791__auto___16045 = chunk__16000_16042.cljs$core$IIndexed$_nth$arity$2(null,i__16002_16044);
var instruction_name__2792__auto___16046 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16040),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16045)))].join(''));
var metadata__2793__auto___16047 = (function (){var G__16025 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16040,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16040)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16045))))));
var fexpr__16024 = ((function (seq__15998_16041,chunk__16000_16042,count__16001_16043,i__16002_16044,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16025,instruction_name__2792__auto___16046,func__2791__auto___16045,stack__2790__auto___16040){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__15998_16041,chunk__16000_16042,count__16001_16043,i__16002_16044,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16025,instruction_name__2792__auto___16046,func__2791__auto___16045,stack__2790__auto___16040))
;
return fexpr__16024(G__16025);
})();
var new_func__2794__auto___16048 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16045,stack__2790__auto___16040),metadata__2793__auto___16047);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16046,new_func__2794__auto___16048);


var G__16049 = seq__15998_16041;
var G__16050 = chunk__16000_16042;
var G__16051 = count__16001_16043;
var G__16052 = (i__16002_16044 + (1));
seq__15998_16041 = G__16049;
chunk__16000_16042 = G__16050;
count__16001_16043 = G__16051;
i__16002_16044 = G__16052;
continue;
} else {
var temp__5735__auto___16053 = cljs.core.seq(seq__15998_16041);
if(temp__5735__auto___16053){
var seq__15998_16054__$1 = temp__5735__auto___16053;
if(cljs.core.chunked_seq_QMARK_(seq__15998_16054__$1)){
var c__4550__auto___16055 = cljs.core.chunk_first(seq__15998_16054__$1);
var G__16056 = cljs.core.chunk_rest(seq__15998_16054__$1);
var G__16057 = c__4550__auto___16055;
var G__16058 = cljs.core.count(c__4550__auto___16055);
var G__16059 = (0);
seq__15998_16041 = G__16056;
chunk__16000_16042 = G__16057;
count__16001_16043 = G__16058;
i__16002_16044 = G__16059;
continue;
} else {
var func__2791__auto___16060 = cljs.core.first(seq__15998_16054__$1);
var instruction_name__2792__auto___16061 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16040),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16060)))].join(''));
var metadata__2793__auto___16062 = (function (){var G__16027 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16060),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16040,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16040)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16060))))));
var fexpr__16026 = ((function (seq__15998_16041,chunk__16000_16042,count__16001_16043,i__16002_16044,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16027,instruction_name__2792__auto___16061,func__2791__auto___16060,seq__15998_16054__$1,temp__5735__auto___16053,stack__2790__auto___16040){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__15998_16041,chunk__16000_16042,count__16001_16043,i__16002_16044,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16027,instruction_name__2792__auto___16061,func__2791__auto___16060,seq__15998_16054__$1,temp__5735__auto___16053,stack__2790__auto___16040))
;
return fexpr__16026(G__16027);
})();
var new_func__2794__auto___16063 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16060,stack__2790__auto___16040),metadata__2793__auto___16062);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16061,new_func__2794__auto___16063);


var G__16064 = cljs.core.next(seq__15998_16054__$1);
var G__16065 = null;
var G__16066 = (0);
var G__16067 = (0);
seq__15998_16041 = G__16064;
chunk__16000_16042 = G__16065;
count__16001_16043 = G__16066;
i__16002_16044 = G__16067;
continue;
}
} else {
}
}
break;
}

var G__16068 = seq__15988_16036;
var G__16069 = chunk__15995_16037;
var G__16070 = count__15996_16038;
var G__16071 = (i__15997_16039 + (1));
seq__15988_16036 = G__16068;
chunk__15995_16037 = G__16069;
count__15996_16038 = G__16070;
i__15997_16039 = G__16071;
continue;
} else {
var temp__5735__auto___16072 = cljs.core.seq(seq__15988_16036);
if(temp__5735__auto___16072){
var seq__15988_16073__$1 = temp__5735__auto___16072;
if(cljs.core.chunked_seq_QMARK_(seq__15988_16073__$1)){
var c__4550__auto___16074 = cljs.core.chunk_first(seq__15988_16073__$1);
var G__16075 = cljs.core.chunk_rest(seq__15988_16073__$1);
var G__16076 = c__4550__auto___16074;
var G__16077 = cljs.core.count(c__4550__auto___16074);
var G__16078 = (0);
seq__15988_16036 = G__16075;
chunk__15995_16037 = G__16076;
count__15996_16038 = G__16077;
i__15997_16039 = G__16078;
continue;
} else {
var stack__2790__auto___16079 = cljs.core.first(seq__15988_16073__$1);
var seq__15989_16080 = cljs.core.seq(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.polymorphic._dup,propeller.push.instructions.polymorphic._dup_times,propeller.push.instructions.polymorphic._dup_items,propeller.push.instructions.polymorphic._empty,propeller.push.instructions.polymorphic._eq,propeller.push.instructions.polymorphic._flush,propeller.push.instructions.polymorphic._pop,propeller.push.instructions.polymorphic._rot,propeller.push.instructions.polymorphic._shove,propeller.push.instructions.polymorphic._stack_depth,propeller.push.instructions.polymorphic._swap,propeller.push.instructions.polymorphic._yank,propeller.push.instructions.polymorphic._yank_dup,propeller.push.instructions.polymorphic._deep_dup], null));
var chunk__15991_16081 = null;
var count__15992_16082 = (0);
var i__15993_16083 = (0);
while(true){
if((i__15993_16083 < count__15992_16082)){
var func__2791__auto___16084 = chunk__15991_16081.cljs$core$IIndexed$_nth$arity$2(null,i__15993_16083);
var instruction_name__2792__auto___16085 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16079),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16084)))].join(''));
var metadata__2793__auto___16086 = (function (){var G__16033 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16084),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16079,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16079)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16084))))));
var fexpr__16032 = ((function (seq__15989_16080,chunk__15991_16081,count__15992_16082,i__15993_16083,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16033,instruction_name__2792__auto___16085,func__2791__auto___16084,stack__2790__auto___16079,seq__15988_16073__$1,temp__5735__auto___16072){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__15989_16080,chunk__15991_16081,count__15992_16082,i__15993_16083,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16033,instruction_name__2792__auto___16085,func__2791__auto___16084,stack__2790__auto___16079,seq__15988_16073__$1,temp__5735__auto___16072))
;
return fexpr__16032(G__16033);
})();
var new_func__2794__auto___16087 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16084,stack__2790__auto___16079),metadata__2793__auto___16086);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16085,new_func__2794__auto___16087);


var G__16088 = seq__15989_16080;
var G__16089 = chunk__15991_16081;
var G__16090 = count__15992_16082;
var G__16091 = (i__15993_16083 + (1));
seq__15989_16080 = G__16088;
chunk__15991_16081 = G__16089;
count__15992_16082 = G__16090;
i__15993_16083 = G__16091;
continue;
} else {
var temp__5735__auto___16092__$1 = cljs.core.seq(seq__15989_16080);
if(temp__5735__auto___16092__$1){
var seq__15989_16093__$1 = temp__5735__auto___16092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15989_16093__$1)){
var c__4550__auto___16094 = cljs.core.chunk_first(seq__15989_16093__$1);
var G__16095 = cljs.core.chunk_rest(seq__15989_16093__$1);
var G__16096 = c__4550__auto___16094;
var G__16097 = cljs.core.count(c__4550__auto___16094);
var G__16098 = (0);
seq__15989_16080 = G__16095;
chunk__15991_16081 = G__16096;
count__15992_16082 = G__16097;
i__15993_16083 = G__16098;
continue;
} else {
var func__2791__auto___16099 = cljs.core.first(seq__15989_16093__$1);
var instruction_name__2792__auto___16100 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___16079),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16099)))].join(''));
var metadata__2793__auto___16101 = (function (){var G__16035 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___16099),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___16079,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___16079)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___16099))))));
var fexpr__16034 = ((function (seq__15989_16080,chunk__15991_16081,count__15992_16082,i__15993_16083,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16035,instruction_name__2792__auto___16100,func__2791__auto___16099,seq__15989_16093__$1,temp__5735__auto___16092__$1,stack__2790__auto___16079,seq__15988_16073__$1,temp__5735__auto___16072){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__15989_16080,chunk__15991_16081,count__15992_16082,i__15993_16083,seq__15988_16036,chunk__15995_16037,count__15996_16038,i__15997_16039,G__16035,instruction_name__2792__auto___16100,func__2791__auto___16099,seq__15989_16093__$1,temp__5735__auto___16092__$1,stack__2790__auto___16079,seq__15988_16073__$1,temp__5735__auto___16072))
;
return fexpr__16034(G__16035);
})();
var new_func__2794__auto___16102 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___16099,stack__2790__auto___16079),metadata__2793__auto___16101);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___16100,new_func__2794__auto___16102);


var G__16103 = cljs.core.next(seq__15989_16093__$1);
var G__16104 = null;
var G__16105 = (0);
var G__16106 = (0);
seq__15989_16080 = G__16103;
chunk__15991_16081 = G__16104;
count__15992_16082 = G__16105;
i__15993_16083 = G__16106;
continue;
}
} else {
}
}
break;
}

var G__16107 = cljs.core.next(seq__15988_16073__$1);
var G__16108 = null;
var G__16109 = (0);
var G__16110 = (0);
seq__15988_16036 = G__16107;
chunk__15995_16037 = G__16108;
count__15996_16038 = G__16109;
i__15997_16039 = G__16110;
continue;
}
} else {
}
}
break;
}
