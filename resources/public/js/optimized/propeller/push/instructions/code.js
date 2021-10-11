// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.code');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$code_append,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14067_SHARP_,p2__14066_SHARP_){
return propeller.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(propeller.utils.ensure_list(p2__14066_SHARP_),propeller.utils.ensure_list(p1__14067_SHARP_)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.cst$kw$code], null),cljs.core.cst$kw$code);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$code,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_do_range,cljs.core.with_meta((function (state){
if(((propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)) || ((cljs.core.count(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state)) < (2))))){
return state;
} else {
var to_do = propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec);
var destination_index = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var current_index = propeller.push.state.peek_stack(propeller.push.state.pop_stack(state,cljs.core.cst$kw$integer),cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(propeller.push.state.pop_stack(propeller.push.state.pop_stack(state,cljs.core.cst$kw$exec),cljs.core.cst$kw$integer),cljs.core.cst$kw$integer);
var increment = (((current_index < destination_index))?(1):(((current_index > destination_index))?(-1):(0)
));
var continuation = (((increment === (0)))?popped_state:propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,(new cljs.core.List(null,(current_index + increment),(new cljs.core.List(null,destination_index,(new cljs.core.List(null,cljs.core.cst$kw$exec_do_range,(new cljs.core.List(null,to_do,null,(1),null)),(2),null)),(3),null)),(4),null))));
return propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(continuation,cljs.core.cst$kw$integer,current_index),cljs.core.cst$kw$exec,to_do);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_do_count,cljs.core.with_meta((function (state){
if(((propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)) || (propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)) || ((propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer) < (1))))){
return state;
} else {
var to_do = propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec);
var index = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(propeller.push.state.pop_stack(state,cljs.core.cst$kw$exec),cljs.core.cst$kw$integer);
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,(new cljs.core.List(null,(0),(new cljs.core.List(null,(index - (1)),(new cljs.core.List(null,cljs.core.cst$kw$exec_do_range,(new cljs.core.List(null,to_do,null,(1),null)),(2),null)),(3),null)),(4),null)));
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_do_times,cljs.core.with_meta((function (state){
if(((propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$integer)) || (propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)) || ((propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer) < (1))))){
return state;
} else {
var to_do = propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec);
var to_do_with_pop = cljs.core.cons(cljs.core.cst$kw$integer_pop,propeller.utils.ensure_list(to_do));
var index = propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer);
var popped_state = propeller.push.state.pop_stack(propeller.push.state.pop_stack(state,cljs.core.cst$kw$exec),cljs.core.cst$kw$integer);
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,(new cljs.core.List(null,(0),(new cljs.core.List(null,(index - (1)),(new cljs.core.List(null,cljs.core.cst$kw$exec_do_range,(new cljs.core.List(null,to_do_with_pop,null,(1),null)),(2),null)),(3),null)),(4),null)));
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_if,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14068_SHARP_,p2__14070_SHARP_,p3__14069_SHARP_){
if(cljs.core.truth_(p1__14068_SHARP_)){
return p3__14069_SHARP_;
} else {
return p2__14070_SHARP_;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$exec,cljs.core.cst$kw$exec], null),cljs.core.cst$kw$exec);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_when,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14071_SHARP_,p2__14072_SHARP_){
if(cljs.core.truth_(p1__14071_SHARP_)){
return p2__14072_SHARP_;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$exec], null),cljs.core.cst$kw$exec);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_while,cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)){
return state;
} else {
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$boolean)){
return propeller.push.state.pop_stack(state,cljs.core.cst$kw$exec);
} else {
if(cljs.core.truth_(propeller.push.state.peek_stack(state,cljs.core.cst$kw$boolean))){
var to_do = propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$boolean);
return propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,cljs.core.cst$kw$exec_while),cljs.core.cst$kw$exec,to_do);
} else {
return propeller.push.state.pop_stack(propeller.push.state.pop_stack(state,cljs.core.cst$kw$boolean),cljs.core.cst$kw$exec);
}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_do_while,cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)){
return state;
} else {
var to_do = propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec);
return propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(state,cljs.core.cst$kw$exec,cljs.core.cst$kw$exec_while),cljs.core.cst$kw$exec,to_do);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_k,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (_,first){
return first;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exec,cljs.core.cst$kw$exec], null),cljs.core.cst$kw$exec);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exec,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_s,cljs.core.with_meta((function (state){
if((cljs.core.count(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(state)) < (3))){
return state;
} else {
var vec__14073 = propeller.push.state.peek_stack_many(state,cljs.core.cst$kw$exec,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(2),null);
var popped_state = propeller.push.state.pop_stack_many(state,cljs.core.cst$kw$exec,(3));
var to_push_back = (new cljs.core.List(null,a,(new cljs.core.List(null,c,(new cljs.core.List(null,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
return propeller.push.state.push_to_stack_many(popped_state,cljs.core.cst$kw$exec,to_push_back);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exec,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$exec_y,cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$exec)){
return state;
} else {
var top_item = propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$exec);
var to_push_back = (new cljs.core.List(null,top_item,(new cljs.core.List(null,(new cljs.core.List(null,cljs.core.cst$kw$exec_y,(new cljs.core.List(null,top_item,null,(1),null)),(2),null)),null,(1),null)),(2),null));
return propeller.push.state.push_to_stack_many(popped_state,cljs.core.cst$kw$exec,to_push_back);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$exec,null], null), null)], null)));
