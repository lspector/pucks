// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.state');
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_butlast","string_butlast",-423894022),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6817_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,p1__6817_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_concat","string_concat",436456642),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_conj_char","string_conj_char",-240030590),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_contains","string_contains",-1941396875),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6819_SHARP_,p2__6818_SHARP_){
return clojure.string.includes_QMARK_.call(null,p2__6818_SHARP_,p1__6819_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_contains_char","string_contains_char",-893616931),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6821_SHARP_,p2__6820_SHARP_){
return clojure.string.includes_QMARK_.call(null,p2__6820_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6821_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_drop","string_drop",766159267),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6822_SHARP_,p2__6823_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,p1__6822_SHARP_,p2__6823_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_empty_string","string_empty_string",-27937244),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_first","string_first",-1563072804),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6824_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__6824_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.first.call(null,p1__6824_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_from_boolean","string_from_boolean",1479699034),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_from_char","string_from_char",-1912206496),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_from_float","string_from_float",-480999084),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_from_integer","string_from_integer",1336228065),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_indexof_char","string_indexof_char",1655469338),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6825_SHARP_,p2__6826_SHARP_){
var index = clojure.string.index_of.call(null,p1__6825_SHARP_,p2__6826_SHARP_);
if(cljs.core.truth_(index)){
return index;
} else {
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_iterate","string_iterate",-370509678),cljs.core.with_meta((function (state){
if(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state))))){
return state;
} else {
var top_item = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
if(cljs.core.empty_QMARK_.call(null,top_item)){
return propeller.push.state.pop_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743));
} else {
if(cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,top_item))){
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.first.call(null,top_item));
} else {
return propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"string_iterate","string_iterate",-370509678)),new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,top_item))),new cljs.core.Keyword(null,"exec","exec",1625568743),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743))),new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.first.call(null,top_item));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exec","exec",1625568743),null,new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_last","string_last",217993441),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6827_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__6827_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.last.call(null,p1__6827_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_length","string_length",802916246),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_nth","string_nth",1884212715),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6829_SHARP_,p2__6828_SHARP_){
var str_length = cljs.core.count.call(null,p2__6828_SHARP_);
if(cljs.core._EQ_.call(null,(0),str_length)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
return cljs.core.nth.call(null,p2__6828_SHARP_,cljs.core.mod.call(null,p1__6829_SHARP_,str_length));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_occurencesof_char","string_occurencesof_char",837803501),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (char$,string){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__6830_SHARP_){
return cljs.core._EQ_.call(null,char$,p1__6830_SHARP_);
}),string));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_parse_to_chars","string_parse_to_chars",-1554868748),cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586))){
return state;
} else {
var top_string = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
var char_list = clojure.string.split.call(null,top_string,(new RegExp("")));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
return propeller.push.state.push_to_stack_many.call(null,popped_state,new cljs.core.Keyword(null,"string","string",-1989541586),char_list);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_remove_char","string_remove_char",1672307146),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (char$,string){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.filter.call(null,(function (p1__6831_SHARP_){
return cljs.core.not_EQ_.call(null,char$,p1__6831_SHARP_);
}),string));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_replace","string_replace",-1754819987),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6832_SHARP_,p2__6833_SHARP_,p3__6834_SHARP_){
return clojure.string.replace.call(null,p1__6832_SHARP_,p2__6833_SHARP_,p3__6834_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_replace_char","string_replace_char",394415794),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6836_SHARP_,p2__6837_SHARP_,p3__6835_SHARP_){
return clojure.string.replace.call(null,p3__6835_SHARP_,p1__6836_SHARP_,p2__6837_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_replace_first","string_replace_first",117277095),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6838_SHARP_,p2__6839_SHARP_,p3__6840_SHARP_){
return clojure.string.replace_first.call(null,p1__6838_SHARP_,p2__6839_SHARP_,p3__6840_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_replace_first_char","string_replace_first_char",-384330039),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6842_SHARP_,p2__6843_SHARP_,p3__6841_SHARP_){
return clojure.string.replace_first.call(null,p3__6841_SHARP_,p1__6842_SHARP_,p2__6843_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_rest","string_rest",-696799949),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6844_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,p1__6844_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_reverse","string_reverse",373360031),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6845_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,p1__6845_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_set_char","string_set_char",-122651554),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6848_SHARP_,p2__6847_SHARP_,p3__6846_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p3__6846_SHARP_)){
return new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031);
} else {
var index = cljs.core.mod.call(null,p2__6847_SHARP_,cljs.core.count.call(null,p3__6846_SHARP_));
var beginning = cljs.core.take.call(null,index,p3__6846_SHARP_);
var end = cljs.core.drop.call(null,(index + (1)),p3__6846_SHARP_);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,beginning,(new cljs.core.List(null,p1__6848_SHARP_,null,(1),null)),end));
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_split","string_split",-221154733),cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586))){
return state;
} else {
var top_item = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
var top_item_trimmed = clojure.string.trim.call(null,top_item);
var string_list = clojure.string.split.call(null,top_item_trimmed,/\s+/);
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
return propeller.push.state.push_to_stack_many.call(null,popped_state,new cljs.core.Keyword(null,"string","string",-1989541586),string_list);
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_substr","string_substr",314410935),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (start,stop,string){
var length = cljs.core.count.call(null,string);
var start__$1 = (function (){var x__4222__auto__ = length;
var y__4223__auto__ = (function (){var x__4219__auto__ = (0);
var y__4220__auto__ = start;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var stop__$1 = (function (){var x__4222__auto__ = length;
var y__4223__auto__ = (function (){var x__4219__auto__ = start__$1;
var y__4220__auto__ = stop;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.subs.call(null,string,start__$1,stop__$1);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"string_take","string_take",-218815961),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6849_SHARP_,p2__6850_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,p1__6849_SHARP_,p2__6850_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"string","string",-1989541586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));

//# sourceMappingURL=string.js.map
