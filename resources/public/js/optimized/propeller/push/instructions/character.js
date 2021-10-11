// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.character');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.character');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$char_is_letter,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.character.is_letter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$boolean,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$char_is_digit,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.character.is_digit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$boolean,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$char_is_whitespace,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.character.is_whitespace,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$boolean,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$char_from_float,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13349_SHARP_){
return cljs.core.char$(cljs.core.mod(cljs.core.long$(p1__13349_SHARP_),(128)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$char);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$char_from_integer,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__13350_SHARP_){
return cljs.core.char$(cljs.core.mod(p1__13350_SHARP_,(128)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer], null),cljs.core.cst$kw$char);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$integer,null,cljs.core.cst$kw$char,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$char_all_from_string,cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_(state,cljs.core.cst$kw$string)){
return state;
} else {
var top_string = propeller.push.state.peek_stack(state,cljs.core.cst$kw$string);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$string);
return propeller.push.state.push_to_stack_many(popped_state,cljs.core.cst$kw$char,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,top_string));
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$string,null,cljs.core.cst$kw$char,null], null), null)], null)));
