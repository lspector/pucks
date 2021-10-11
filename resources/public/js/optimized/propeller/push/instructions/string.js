// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.string');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.state');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_butlast,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15950_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.butlast(p1__15950_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_concat,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_conj_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.str,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$char], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_contains,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15952_SHARP_,p2__15951_SHARP_){
return clojure.string.includes_QMARK_(p2__15951_SHARP_,p1__15952_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_contains_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15954_SHARP_,p2__15953_SHARP_){
return clojure.string.includes_QMARK_(p2__15953_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15954_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.cst$kw$string], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$boolean,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_drop,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15955_SHARP_,p2__15956_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(p1__15955_SHARP_,p2__15956_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_empty_string,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_first,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15957_SHARP_){
if(cljs.core.empty_QMARK_(p1__15957_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.first(p1__15957_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$char);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_from_boolean,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_from_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_from_float,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_from_integer,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.str,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_indexof_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15958_SHARP_,p2__15959_SHARP_){
var index = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p1__15958_SHARP_,p2__15959_SHARP_);
if(cljs.core.truth_(index)){
return index;
} else {
return cljs.core.cst$kw$ignore_DASH_instruction;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$char], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_iterate,cljs.core.with_meta((function (state){
if(((cljs.core.empty_QMARK_(cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(state))))){
return state;
} else {
var top_item = propeller.push.state.peek_stack(state,cljs.core.cst$kw$string);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$string);
if(cljs.core.empty_QMARK_(top_item)){
return propeller.push.state.pop_stack(popped_state,cljs.core.cst$kw$exec);
} else {
if(cljs.core.empty_QMARK_(cljs.core.rest(top_item))){
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$char,cljs.core.first(top_item));
} else {
return propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$exec,cljs.core.cst$kw$string_iterate),cljs.core.cst$kw$exec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(top_item))),cljs.core.cst$kw$exec,propeller.push.state.peek_stack(state,cljs.core.cst$kw$exec)),cljs.core.cst$kw$char,cljs.core.first(top_item));

}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$exec,null,cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_last,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15960_SHARP_){
if(cljs.core.empty_QMARK_(p1__15960_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.last(p1__15960_SHARP_);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$char);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_length,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.count,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_nth,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15962_SHARP_,p2__15961_SHARP_){
var str_length = cljs.core.count(p2__15961_SHARP_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),str_length)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p2__15961_SHARP_,cljs.core.mod(p1__15962_SHARP_,str_length));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$char);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_occurencesof_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (char$,string){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(char$,p1__15963_SHARP_);
}),string));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.cst$kw$string], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_parse_to_chars,cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$string)){
return state;
} else {
var top_string = propeller.push.state.peek_stack(state,cljs.core.cst$kw$string);
var char_list = clojure.string.split.cljs$core$IFn$_invoke$arity$2(top_string,(new RegExp("")));
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$string);
return propeller.push.state.push_to_stack_many(popped_state,cljs.core.cst$kw$string,char_list);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_remove_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (char$,string){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15964_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(char$,p1__15964_SHARP_);
}),string));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_replace,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15965_SHARP_,p2__15966_SHARP_,p3__15967_SHARP_){
return clojure.string.replace(p1__15965_SHARP_,p2__15966_SHARP_,p3__15967_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_replace_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15969_SHARP_,p2__15970_SHARP_,p3__15968_SHARP_){
return clojure.string.replace(p3__15968_SHARP_,p1__15969_SHARP_,p2__15970_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.cst$kw$char,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_replace_first,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15971_SHARP_,p2__15972_SHARP_,p3__15973_SHARP_){
return clojure.string.replace_first(p1__15971_SHARP_,p2__15972_SHARP_,p3__15973_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.cst$kw$string,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_replace_first_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15975_SHARP_,p2__15976_SHARP_,p3__15974_SHARP_){
return clojure.string.replace_first(p3__15974_SHARP_,p1__15975_SHARP_,p2__15976_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.cst$kw$char,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_rest,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15977_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(p1__15977_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_reverse,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15978_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(p1__15978_SHARP_));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_set_char,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15981_SHARP_,p2__15980_SHARP_,p3__15979_SHARP_){
if(cljs.core.empty_QMARK_(p3__15979_SHARP_)){
return cljs.core.cst$kw$ignore_DASH_instruction;
} else {
var index = cljs.core.mod(p2__15980_SHARP_,cljs.core.count(p3__15979_SHARP_));
var beginning = cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,p3__15979_SHARP_);
var end = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((index + (1)),p3__15979_SHARP_);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beginning,(new cljs.core.List(null,p1__15981_SHARP_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0)));
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_split,cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$string)){
return state;
} else {
var top_item = propeller.push.state.peek_stack(state,cljs.core.cst$kw$string);
var top_item_trimmed = clojure.string.trim(top_item);
var string_list = clojure.string.split.cljs$core$IFn$_invoke$arity$2(top_item_trimmed,/\s+/);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$string);
return propeller.push.state.push_to_stack_many(popped_state,cljs.core.cst$kw$string,string_list);
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_substr,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (start,stop,string){
var length = cljs.core.count(string);
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
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,start__$1,stop__$1);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$string_take,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15982_SHARP_,p2__15983_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__15982_SHARP_,p2__15983_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.cst$kw$string], null),cljs.core.cst$kw$string);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$integer,null], null), null)], null)));
