// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.instructions.input_output');
goog.require('propeller.push.utils.helpers');
/**
 * Takes a Push state and executes the next instruction on the exec stack.
 */
propeller.push.interpreter.interpret_one_step = (function propeller$push$interpreter$interpret_one_step(state){
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$exec);
var instruction = cljs.core.first(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(state));
var literal_type = propeller.push.utils.helpers.get_literal_type(instruction);
if((instruction instanceof cljs.core.Keyword)){
var temp__5733__auto__ = instruction.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(propeller.push.core.instruction_table));
if(cljs.core.truth_(temp__5733__auto__)){
var function$ = temp__5733__auto__;
return (function$.cljs$core$IFn$_invoke$arity$1 ? function$.cljs$core$IFn$_invoke$arity$1(popped_state) : function$.call(null,popped_state));
} else {
return propeller.push.instructions.input_output.handle_input_instruction(popped_state,instruction);
}
} else {
if(cljs.core.truth_(literal_type)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$generic_DASH_vector,literal_type)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (popped_state,instruction,literal_type){
return (function (p1__16141_SHARP_,p2__16142_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__16141_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__16142_SHARP_], null),cljs.core.conj,cljs.core.PersistentVector.EMPTY);
});})(popped_state,instruction,literal_type))
,popped_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
} else {
return propeller.push.state.push_to_stack(popped_state,literal_type,instruction);
}
} else {
if(cljs.core.seq_QMARK_(instruction)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(popped_state,cljs.core.cst$kw$exec,((function (popped_state,instruction,literal_type){
return (function (p1__16144_SHARP_,p2__16143_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p2__16143_SHARP_,p1__16144_SHARP_);
});})(popped_state,instruction,literal_type))
,instruction);
} else {
throw (new Error(["Unrecognized Push instruction in program: ",cljs.core.name(instruction)].join('')));

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
var state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(start_state,cljs.core.cst$kw$exec,(new cljs.core.List(null,program,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$step,(1)], 0));
var history = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(cljs.core.cst$kw$exec.cljs$core$IFn$_invoke$arity$1(state))) || ((cljs.core.cst$kw$step.cljs$core$IFn$_invoke$arity$1(state) > step_limit)))){
if(cljs.core.truth_(cljs.core.cst$kw$keep_DASH_history.cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$history,history);
} else {
return state;
}
} else {
var G__16145 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(propeller.push.interpreter.interpret_one_step(state),cljs.core.cst$kw$step,cljs.core.inc);
var G__16146 = (cljs.core.truth_(cljs.core.cst$kw$keep_DASH_history.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(history,state):null);
state = G__16145;
history = G__16146;
continue;
}
break;
}
});
