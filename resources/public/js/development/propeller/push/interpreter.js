// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.interpreter');
goog.require('cljs.core');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.instructions.input_output');
goog.require('propeller.push.utils.helpers');
/**
 * Takes a Push state and executes the next instruction on the exec stack.
 */
propeller.push.interpreter.interpret_one_step = (function propeller$push$interpreter$interpret_one_step(state){
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743));
var instruction = cljs.core.first.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state));
var literal_type = propeller.push.utils.helpers.get_literal_type.call(null,instruction);
if((instruction instanceof cljs.core.Keyword)){
var temp__5733__auto__ = instruction.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,propeller.push.core.instruction_table));
if(cljs.core.truth_(temp__5733__auto__)){
var function$ = temp__5733__auto__;
return function$.call(null,popped_state);
} else {
return propeller.push.instructions.input_output.handle_input_instruction.call(null,popped_state,instruction);
}
} else {
if(cljs.core.truth_(literal_type)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"generic-vector","generic-vector",1279149583),literal_type)){
return cljs.core.reduce.call(null,((function (popped_state,instruction,literal_type){
return (function (p1__6970_SHARP_,p2__6971_SHARP_){
return cljs.core.update_in.call(null,p1__6970_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__6971_SHARP_], null),cljs.core.conj,cljs.core.PersistentVector.EMPTY);
});})(popped_state,instruction,literal_type))
,popped_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
} else {
return propeller.push.state.push_to_stack.call(null,popped_state,literal_type,instruction);
}
} else {
if(cljs.core.seq_QMARK_.call(null,instruction)){
return cljs.core.update.call(null,popped_state,new cljs.core.Keyword(null,"exec","exec",1625568743),((function (popped_state,instruction,literal_type){
return (function (p1__6973_SHARP_,p2__6972_SHARP_){
return cljs.core.concat.call(null,p2__6972_SHARP_,p1__6973_SHARP_);
});})(popped_state,instruction,literal_type))
,instruction);
} else {
throw (new Error(["Unrecognized Push instruction in program: ",cljs.core.name.call(null,instruction)].join('')));

}
}
}
});
/**
 * Runs the given problem starting with the stacks in start-state. If the
 *   start-state includes the key :keep-history with a truthy value, then
 *   the returned state will include the key :history with a value that is a
 *   vector containing all states prior to the final state.
 */
propeller.push.interpreter.interpret_program = (function propeller$push$interpreter$interpret_program(program,start_state,step_limit){
var state = cljs.core.assoc.call(null,start_state,new cljs.core.Keyword(null,"exec","exec",1625568743),(new cljs.core.List(null,program,null,(1),null)),new cljs.core.Keyword(null,"step","step",1288888124),(1));
var history = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"exec","exec",1625568743).cljs$core$IFn$_invoke$arity$1(state))) || ((new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(state) > step_limit)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"keep-history","keep-history",1232813028).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"history","history",-247395220),history);
} else {
return state;
}
} else {
var G__6974 = cljs.core.update.call(null,propeller.push.interpreter.interpret_one_step.call(null,state),new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.inc);
var G__6975 = (cljs.core.truth_(new cljs.core.Keyword(null,"keep-history","keep-history",1232813028).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.conj.call(null,history,state):null);
state = G__6974;
history = G__6975;
continue;
}
break;
}
});

//# sourceMappingURL=interpreter.js.map
