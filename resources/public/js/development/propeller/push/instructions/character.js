// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.character');
goog.require('cljs.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.character');
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_is_letter","char_is_letter",544468447),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.character.is_letter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_is_digit","char_is_digit",327563184),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.character.is_digit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_is_whitespace","char_is_whitespace",566609929),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.character.is_whitespace,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_from_float","char_from_float",-1011986170),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__4345_SHARP_){
return cljs.core.char$.call(null,cljs.core.mod.call(null,cljs.core.long$.call(null,p1__4345_SHARP_),(128)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_from_integer","char_from_integer",1914025369),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__4346_SHARP_){
return cljs.core.char$.call(null,cljs.core.mod.call(null,p1__4346_SHARP_,(128)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"char","char",-641587586));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"char_all_from_string","char_all_from_string",-1727094648),cljs.core.with_meta((function (state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586))){
return state;
} else {
var top_string = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"string","string",-1989541586));
return propeller.push.state.push_to_stack_many.call(null,popped_state,new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.map.call(null,cljs.core.char$,top_string));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string","string",-1989541586),null,new cljs.core.Keyword(null,"char","char",-641587586),null], null), null)], null)));

//# sourceMappingURL=character.js.map
