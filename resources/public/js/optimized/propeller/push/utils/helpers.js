// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.utils.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.globals');
goog.require('goog.string');
goog.require('goog.string.format');
propeller.push.utils.helpers.keep_number_reasonable = (function propeller$push$utils$helpers$keep_number_reasonable(n){
if(cljs.core.integer_QMARK_(n)){
if((n > propeller.push.utils.globals.max_number_magnitude)){
return cljs.core.long$(propeller.push.utils.globals.max_number_magnitude);
} else {
if((n < (- propeller.push.utils.globals.max_number_magnitude))){
return cljs.core.long$((- propeller.push.utils.globals.max_number_magnitude));
} else {
return n;

}
}
} else {
if(cljs.core.truth_(isNaN(n))){
return 0.0;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,Infinity)) || ((n > propeller.push.utils.globals.max_number_magnitude)))){
return propeller.push.utils.globals.max_number_magnitude;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,-Infinity)) || ((n < (- propeller.push.utils.globals.max_number_magnitude))))){
return (- propeller.push.utils.globals.max_number_magnitude);
} else {
if(((((- propeller.push.utils.globals.min_number_magnitude) < n)) && ((n < propeller.push.utils.globals.min_number_magnitude)))){
return 0.0;
} else {
return n;

}
}
}
}

}
});
propeller.push.utils.helpers.reasonable_string_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_string_length_QMARK_(string){
var length = cljs.core.count(string);
return (length <= propeller.push.utils.globals.max_string_length);
});
propeller.push.utils.helpers.reasonable_vector_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_vector_length_QMARK_(vector){
var length = cljs.core.count(vector);
return (length <= propeller.push.utils.globals.max_vector_length);
});
propeller.push.utils.helpers.get_args_from_stacks = (function propeller$push$utils$helpers$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse(stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,state__$1,cljs.core.cst$kw$args,args], null);
} else {
var current_stack = cljs.core.first(stacks__$1);
if(propeller.push.state.empty_stack_QMARK_(state__$1,current_stack)){
return cljs.core.cst$kw$not_DASH_enough_DASH_args;
} else {
var G__13245 = propeller.push.state.pop_stack(state__$1,current_stack);
var G__13246 = cljs.core.rest(stacks__$1);
var G__13247 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args,propeller.push.state.peek_stack(state__$1,current_stack));
state__$1 = G__13245;
stacks__$1 = G__13246;
args = G__13247;
continue;
}
}
break;
}
});
propeller.push.utils.helpers.make_instruction = (function propeller$push$utils$helpers$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = propeller.push.utils.helpers.get_args_from_stacks(state,arg_stacks);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(popped_args,cljs.core.cst$kw$not_DASH_enough_DASH_args)){
return state;
} else {
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(popped_args);
if(typeof result === 'number'){
return propeller.push.state.push_to_stack(new_state,return_stack,propeller.push.utils.helpers.keep_number_reasonable(result));
} else {
if(((typeof result === 'string') && ((!(propeller.push.utils.helpers.reasonable_string_length_QMARK_(result)))))){
return state;
} else {
if(((cljs.core.vector_QMARK_(result)) && ((!(propeller.push.utils.helpers.reasonable_vector_length_QMARK_(result)))))){
return state;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$ignore_DASH_instruction)){
return state;
} else {
return propeller.push.state.push_to_stack(new_state,return_stack,result);

}
}
}
}
}
});
propeller.push.utils.helpers.get_stack_instructions = (function propeller$push$utils$helpers$get_stack_instructions(stacks){
var seq__13248_13290 = cljs.core.seq(cljs.core.deref(propeller.push.core.instruction_table));
var chunk__13249_13291 = null;
var count__13250_13292 = (0);
var i__13251_13293 = (0);
while(true){
if((i__13251_13293 < count__13250_13292)){
var vec__13266_13294 = chunk__13249_13291.cljs$core$IIndexed$_nth$arity$2(null,i__13251_13293);
var instruction_name_13295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13266_13294,(0),null);
var function_13296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13266_13294,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function_13296)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13271 = "ERROR: Instruction %s does not have :stacks defined in metadata.";
var G__13272 = cljs.core.name(instruction_name_13295);
return goog.string.format(G__13271,G__13272);
})()),"\n","(:stacks (meta function))"].join('')));
}


var G__13297 = seq__13248_13290;
var G__13298 = chunk__13249_13291;
var G__13299 = count__13250_13292;
var G__13300 = (i__13251_13293 + (1));
seq__13248_13290 = G__13297;
chunk__13249_13291 = G__13298;
count__13250_13292 = G__13299;
i__13251_13293 = G__13300;
continue;
} else {
var temp__5735__auto___13301 = cljs.core.seq(seq__13248_13290);
if(temp__5735__auto___13301){
var seq__13248_13302__$1 = temp__5735__auto___13301;
if(cljs.core.chunked_seq_QMARK_(seq__13248_13302__$1)){
var c__4550__auto___13303 = cljs.core.chunk_first(seq__13248_13302__$1);
var G__13304 = cljs.core.chunk_rest(seq__13248_13302__$1);
var G__13305 = c__4550__auto___13303;
var G__13306 = cljs.core.count(c__4550__auto___13303);
var G__13307 = (0);
seq__13248_13290 = G__13304;
chunk__13249_13291 = G__13305;
count__13250_13292 = G__13306;
i__13251_13293 = G__13307;
continue;
} else {
var vec__13273_13308 = cljs.core.first(seq__13248_13302__$1);
var instruction_name_13309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13273_13308,(0),null);
var function_13310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13273_13308,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function_13310)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__13278 = "ERROR: Instruction %s does not have :stacks defined in metadata.";
var G__13279 = cljs.core.name(instruction_name_13309);
return goog.string.format(G__13278,G__13279);
})()),"\n","(:stacks (meta function))"].join('')));
}


var G__13311 = cljs.core.next(seq__13248_13302__$1);
var G__13312 = null;
var G__13313 = (0);
var G__13314 = (0);
seq__13248_13290 = G__13311;
chunk__13249_13291 = G__13312;
count__13250_13292 = G__13313;
i__13251_13293 = G__13314;
continue;
}
} else {
}
}
break;
}

var iter__4523__auto__ = (function propeller$push$utils$helpers$get_stack_instructions_$_iter__13280(s__13281){
return (new cljs.core.LazySeq(null,(function (){
var s__13281__$1 = s__13281;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13281__$1);
if(temp__5735__auto__){
var s__13281__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13281__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13281__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13283 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13282 = (0);
while(true){
if((i__13282 < size__4522__auto__)){
var vec__13284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13282);
var instruction_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13284,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13284,(1),null);
if(clojure.set.subset_QMARK_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function$)),stacks)){
cljs.core.chunk_append(b__13283,instruction_name);

var G__13315 = (i__13282 + (1));
i__13282 = G__13315;
continue;
} else {
var G__13316 = (i__13282 + (1));
i__13282 = G__13316;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13283),propeller$push$utils$helpers$get_stack_instructions_$_iter__13280(cljs.core.chunk_rest(s__13281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13283),null);
}
} else {
var vec__13287 = cljs.core.first(s__13281__$2);
var instruction_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13287,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13287,(1),null);
if(clojure.set.subset_QMARK_(cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(function$)),stacks)){
return cljs.core.cons(instruction_name,propeller$push$utils$helpers$get_stack_instructions_$_iter__13280(cljs.core.rest(s__13281__$2)));
} else {
var G__13317 = cljs.core.rest(s__13281__$2);
s__13281__$1 = G__13317;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(propeller.push.core.instruction_table));
});
propeller.push.utils.helpers.get_literal_type = (function propeller$push$utils$helpers$get_literal_type(data){
var literals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,(function (thing){
return ((thing === true) || (thing === false));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer,cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float,cljs.core.float_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string,cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char,cljs.core.char_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_boolean,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (((cljs.core.first(thing) === true) || (cljs.core.first(thing) === false))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_float,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (cljs.core.float_QMARK_(cljs.core.first(thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_integer,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (cljs.core.integer_QMARK_(cljs.core.first(thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vector_string,(function (thing){
return ((cljs.core.vector_QMARK_(thing)) && (typeof cljs.core.first(thing) === 'string'));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$generic_DASH_vector,(function (thing){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,thing);
})], null)], null);
return cljs.core.first((function (){var iter__4523__auto__ = ((function (literals){
return (function propeller$push$utils$helpers$get_literal_type_$_iter__13318(s__13319){
return (new cljs.core.LazySeq(null,((function (literals){
return (function (){
var s__13319__$1 = s__13319;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13319__$1);
if(temp__5735__auto__){
var s__13319__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13319__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13319__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13321 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13320 = (0);
while(true){
if((i__13320 < size__4522__auto__)){
var vec__13322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13320);
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13322,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13322,(1),null);
if(cljs.core.truth_((function$.cljs$core$IFn$_invoke$arity$1 ? function$.cljs$core$IFn$_invoke$arity$1(data) : function$.call(null,data)))){
cljs.core.chunk_append(b__13321,stack);

var G__13328 = (i__13320 + (1));
i__13320 = G__13328;
continue;
} else {
var G__13329 = (i__13320 + (1));
i__13320 = G__13329;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13321),propeller$push$utils$helpers$get_literal_type_$_iter__13318(cljs.core.chunk_rest(s__13319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13321),null);
}
} else {
var vec__13325 = cljs.core.first(s__13319__$2);
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13325,(0),null);
var function$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13325,(1),null);
if(cljs.core.truth_((function$.cljs$core$IFn$_invoke$arity$1 ? function$.cljs$core$IFn$_invoke$arity$1(data) : function$.call(null,data)))){
return cljs.core.cons(stack,propeller$push$utils$helpers$get_literal_type_$_iter__13318(cljs.core.rest(s__13319__$2)));
} else {
var G__13330 = cljs.core.rest(s__13319__$2);
s__13319__$1 = G__13330;
continue;
}
}
} else {
return null;
}
break;
}
});})(literals))
,null,null));
});})(literals))
;
return iter__4523__auto__(literals);
})());
});
/**
 * Returns the literal stack corresponding to some vector stack.
 */
propeller.push.utils.helpers.get_vector_literal_type = (function propeller$push$utils$helpers$get_vector_literal_type(vector_stack){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(propeller.push.state.vec_stacks,vector_stack);
});
propeller.push.utils.helpers.print_state = (function propeller$push$utils$helpers$print_state(state){
var seq__13331 = cljs.core.seq(cljs.core.keys(propeller.push.state.empty_state));
var chunk__13332 = null;
var count__13333 = (0);
var i__13334 = (0);
while(true){
if((i__13334 < count__13333)){
var stack = chunk__13332.cljs$core$IIndexed$_nth$arity$2(null,i__13334);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.string.format("%-15s = ",stack)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack):cljs.core.List.EMPTY)], 0));

cljs.core.flush();


var G__13335 = seq__13331;
var G__13336 = chunk__13332;
var G__13337 = count__13333;
var G__13338 = (i__13334 + (1));
seq__13331 = G__13335;
chunk__13332 = G__13336;
count__13333 = G__13337;
i__13334 = G__13338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13331);
if(temp__5735__auto__){
var seq__13331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13331__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13331__$1);
var G__13339 = cljs.core.chunk_rest(seq__13331__$1);
var G__13340 = c__4550__auto__;
var G__13341 = cljs.core.count(c__4550__auto__);
var G__13342 = (0);
seq__13331 = G__13339;
chunk__13332 = G__13340;
count__13333 = G__13341;
i__13334 = G__13342;
continue;
} else {
var stack = cljs.core.first(seq__13331__$1);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.string.format("%-15s = ",stack)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack):cljs.core.List.EMPTY)], 0));

cljs.core.flush();


var G__13343 = cljs.core.next(seq__13331__$1);
var G__13344 = null;
var G__13345 = (0);
var G__13346 = (0);
seq__13331 = G__13343;
chunk__13332 = G__13344;
count__13333 = G__13345;
i__13334 = G__13346;
continue;
}
} else {
return null;
}
}
break;
}
});
