// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.code');
goog.require('cljs.core');
goog.require('propeller.utils');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"code_append","code_append",290946085),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5206_SHARP_,p2__5205_SHARP_){
return propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,propeller.utils.ensure_list.call(null,p2__5205_SHARP_),propeller.utils.ensure_list.call(null,p1__5206_SHARP_)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"code","code",1586293142)], null),new cljs.core.Keyword(null,"code","code",1586293142));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_do_range","exec_do_range",1586205019),cljs.core.with_meta((function (state){
if(((propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))) || ((cljs.core.count.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state)) < (2))))){
return state;
} else {
var to_do = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var destination_index = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var current_index = propeller.push.state.peek_stack.call(null,propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710)),new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743)),new cljs.core.Keyword(null,"integer","integer",-604721710)),new cljs.core.Keyword(null,"integer","integer",-604721710));
var increment = (((current_index < destination_index))?(1):(((current_index > destination_index))?(-1):(0)
));
var continuation = (((increment === (0)))?popped_state:propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),(new cljs.core.List(null,(current_index + increment),(new cljs.core.List(null,destination_index,(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_do_range","exec_do_range",1586205019),(new cljs.core.List(null,to_do,null,(1),null)),(2),null)),(3),null)),(4),null))));
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,continuation,new cljs.core.Keyword(null,"integer","integer",-604721710),current_index),new cljs.core.Keyword(null,"exec","exec",1625568743),to_do);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_do_count","exec_do_count",557049463),cljs.core.with_meta((function (state){
if(((propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))) || (propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))) || ((propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710)) < (1))))){
return state;
} else {
var to_do = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var index = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743)),new cljs.core.Keyword(null,"integer","integer",-604721710));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),(new cljs.core.List(null,(0),(new cljs.core.List(null,(index - (1)),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_do_range","exec_do_range",1586205019),(new cljs.core.List(null,to_do,null,(1),null)),(2),null)),(3),null)),(4),null)));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_do_times","exec_do_times",1645428450),cljs.core.with_meta((function (state){
if(((propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))) || (propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))) || ((propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710)) < (1))))){
return state;
} else {
var to_do = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var to_do_with_pop = cljs.core.cons.call(null,new cljs.core.Keyword(null,"integer_pop","integer_pop",-1086812652),propeller.utils.ensure_list.call(null,to_do));
var index = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710));
var popped_state = propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743)),new cljs.core.Keyword(null,"integer","integer",-604721710));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),(new cljs.core.List(null,(0),(new cljs.core.List(null,(index - (1)),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_do_range","exec_do_range",1586205019),(new cljs.core.List(null,to_do_with_pop,null,(1),null)),(2),null)),(3),null)),(4),null)));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_if","exec_if",-1891127445),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5207_SHARP_,p2__5209_SHARP_,p3__5208_SHARP_){
if(cljs.core.truth_(p1__5207_SHARP_)){
return p3__5208_SHARP_;
} else {
return p2__5209_SHARP_;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"exec","exec",1625568743)], null),new cljs.core.Keyword(null,"exec","exec",1625568743));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_when","exec_when",1360752950),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5210_SHARP_,p2__5211_SHARP_){
if(cljs.core.truth_(p1__5210_SHARP_)){
return p2__5211_SHARP_;
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"exec","exec",1625568743)], null),new cljs.core.Keyword(null,"exec","exec",1625568743));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_while","exec_while",205430888),cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))){
return state;
} else {
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404))){
return propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
} else {
if(cljs.core.truth_(propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)))){
var to_do = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"exec_while","exec_while",205430888)),new cljs.core.Keyword(null,"exec","exec",1625568743),to_do);
} else {
return propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),new cljs.core.Keyword(null,"exec","exec",1625568743));
}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_do_while","exec_do_while",-1777621384),cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))){
return state;
} else {
var to_do = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"exec_while","exec_while",205430888)),new cljs.core.Keyword(null,"exec","exec",1625568743),to_do);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_k","exec_k",-1544818208),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (_,first){
return first;
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"exec","exec",1625568743)], null),new cljs.core.Keyword(null,"exec","exec",1625568743));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exec","exec",1625568743),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_s","exec_s",1598630000),cljs.core.with_meta((function (state){
if((cljs.core.count.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state)) < (3))){
return state;
} else {
var vec__5212 = propeller.push.state.peek_stack_many.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),(3));
var a = cljs.core.nth.call(null,vec__5212,(0),null);
var b = cljs.core.nth.call(null,vec__5212,(1),null);
var c = cljs.core.nth.call(null,vec__5212,(2),null);
var popped_state = propeller.push.state.pop_stack_many.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),(3));
var to_push_back = (new cljs.core.List(null,a,(new cljs.core.List(null,c,(new cljs.core.List(null,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
return propeller.push.state.push_to_stack_many.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),to_push_back);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exec","exec",1625568743),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"exec_y","exec_y",1050974042),cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))){
return state;
} else {
var top_item = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var to_push_back = (new cljs.core.List(null,top_item,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_y","exec_y",1050974042),(new cljs.core.List(null,top_item,null,(1),null)),(2),null)),null,(1),null)),(2),null));
return propeller.push.state.push_to_stack_many.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),to_push_back);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exec","exec",1625568743),null], null), null)], null)));

//# sourceMappingURL=code.js.map
