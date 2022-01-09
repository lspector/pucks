// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.input_output');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.macros');
propeller.push.instructions.input_output.handle_input_instruction = (function propeller$push$instructions$input_output$handle_input_instruction(state,instruction){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(state),instruction)){
var input = (function (){var G__14359 = cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(state);
return (instruction.cljs$core$IFn$_invoke$arity$1 ? instruction.cljs$core$IFn$_invoke$arity$1(G__14359) : instruction.call(null,G__14359));
})();
return propeller.push.state.push_to_stack(state,cljs.core.cst$kw$exec,input);
} else {
throw Error(["Undefined instruction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)].join(''));
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$print_newline,cljs.core.with_meta((function (state){
var current_output = propeller.push.state.peek_stack(state,cljs.core.cst$kw$print);
var popped_state = propeller.push.state.pop_stack(state,cljs.core.cst$kw$print);
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$print,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),"\n"].join(''));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$print], null)], null)));
propeller.push.instructions.input_output._print = cljs.core.with_meta((function propeller$push$instructions$input_output$_print(stack,state){
if(propeller.push.state.empty_stack_QMARK_(state,stack)){
return state;
} else {
var top_item = propeller.push.state.peek_stack(state,stack);
var top_item_str = ((((typeof top_item === 'string') || (cljs.core.char_QMARK_(top_item))))?top_item:cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_item], 0)));
var current_output = propeller.push.state.peek_stack(state,cljs.core.cst$kw$print);
var popped_state = propeller.push.state.pop_stack(propeller.push.state.pop_stack(state,stack),cljs.core.cst$kw$print);
return propeller.push.state.push_to_stack(popped_state,cljs.core.cst$kw$print,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_item_str)].join(''));
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$print], null),cljs.core.cst$kw$name,"_print"], null));
var seq__14360_14408 = cljs.core.seq(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$char,cljs.core.cst$kw$code,cljs.core.cst$kw$exec,cljs.core.cst$kw$float,cljs.core.cst$kw$integer,cljs.core.cst$kw$string,cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$vector_string], null));
var chunk__14367_14409 = null;
var count__14368_14410 = (0);
var i__14369_14411 = (0);
while(true){
if((i__14369_14411 < count__14368_14410)){
var stack__2790__auto___14412 = chunk__14367_14409.cljs$core$IIndexed$_nth$arity$2(null,i__14369_14411);
var seq__14370_14413 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__14372_14414 = null;
var count__14373_14415 = (0);
var i__14374_14416 = (0);
while(true){
if((i__14374_14416 < count__14373_14415)){
var func__2791__auto___14417 = chunk__14372_14414.cljs$core$IIndexed$_nth$arity$2(null,i__14374_14416);
var instruction_name__2792__auto___14418 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14412),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14417)))].join(''));
var metadata__2793__auto___14419 = (function (){var G__14397 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14417),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14412,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14412)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14417))))));
var fexpr__14396 = ((function (seq__14370_14413,chunk__14372_14414,count__14373_14415,i__14374_14416,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14397,instruction_name__2792__auto___14418,func__2791__auto___14417,stack__2790__auto___14412){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14370_14413,chunk__14372_14414,count__14373_14415,i__14374_14416,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14397,instruction_name__2792__auto___14418,func__2791__auto___14417,stack__2790__auto___14412))
;
return fexpr__14396(G__14397);
})();
var new_func__2794__auto___14420 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14417,stack__2790__auto___14412),metadata__2793__auto___14419);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14418,new_func__2794__auto___14420);


var G__14421 = seq__14370_14413;
var G__14422 = chunk__14372_14414;
var G__14423 = count__14373_14415;
var G__14424 = (i__14374_14416 + (1));
seq__14370_14413 = G__14421;
chunk__14372_14414 = G__14422;
count__14373_14415 = G__14423;
i__14374_14416 = G__14424;
continue;
} else {
var temp__5735__auto___14425 = cljs.core.seq(seq__14370_14413);
if(temp__5735__auto___14425){
var seq__14370_14426__$1 = temp__5735__auto___14425;
if(cljs.core.chunked_seq_QMARK_(seq__14370_14426__$1)){
var c__4550__auto___14427 = cljs.core.chunk_first(seq__14370_14426__$1);
var G__14428 = cljs.core.chunk_rest(seq__14370_14426__$1);
var G__14429 = c__4550__auto___14427;
var G__14430 = cljs.core.count(c__4550__auto___14427);
var G__14431 = (0);
seq__14370_14413 = G__14428;
chunk__14372_14414 = G__14429;
count__14373_14415 = G__14430;
i__14374_14416 = G__14431;
continue;
} else {
var func__2791__auto___14432 = cljs.core.first(seq__14370_14426__$1);
var instruction_name__2792__auto___14433 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14412),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14432)))].join(''));
var metadata__2793__auto___14434 = (function (){var G__14399 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14412,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14412)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14432))))));
var fexpr__14398 = ((function (seq__14370_14413,chunk__14372_14414,count__14373_14415,i__14374_14416,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14399,instruction_name__2792__auto___14433,func__2791__auto___14432,seq__14370_14426__$1,temp__5735__auto___14425,stack__2790__auto___14412){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14370_14413,chunk__14372_14414,count__14373_14415,i__14374_14416,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14399,instruction_name__2792__auto___14433,func__2791__auto___14432,seq__14370_14426__$1,temp__5735__auto___14425,stack__2790__auto___14412))
;
return fexpr__14398(G__14399);
})();
var new_func__2794__auto___14435 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14432,stack__2790__auto___14412),metadata__2793__auto___14434);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14433,new_func__2794__auto___14435);


var G__14436 = cljs.core.next(seq__14370_14426__$1);
var G__14437 = null;
var G__14438 = (0);
var G__14439 = (0);
seq__14370_14413 = G__14436;
chunk__14372_14414 = G__14437;
count__14373_14415 = G__14438;
i__14374_14416 = G__14439;
continue;
}
} else {
}
}
break;
}

var G__14440 = seq__14360_14408;
var G__14441 = chunk__14367_14409;
var G__14442 = count__14368_14410;
var G__14443 = (i__14369_14411 + (1));
seq__14360_14408 = G__14440;
chunk__14367_14409 = G__14441;
count__14368_14410 = G__14442;
i__14369_14411 = G__14443;
continue;
} else {
var temp__5735__auto___14444 = cljs.core.seq(seq__14360_14408);
if(temp__5735__auto___14444){
var seq__14360_14445__$1 = temp__5735__auto___14444;
if(cljs.core.chunked_seq_QMARK_(seq__14360_14445__$1)){
var c__4550__auto___14446 = cljs.core.chunk_first(seq__14360_14445__$1);
var G__14447 = cljs.core.chunk_rest(seq__14360_14445__$1);
var G__14448 = c__4550__auto___14446;
var G__14449 = cljs.core.count(c__4550__auto___14446);
var G__14450 = (0);
seq__14360_14408 = G__14447;
chunk__14367_14409 = G__14448;
count__14368_14410 = G__14449;
i__14369_14411 = G__14450;
continue;
} else {
var stack__2790__auto___14451 = cljs.core.first(seq__14360_14445__$1);
var seq__14361_14452 = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__14363_14453 = null;
var count__14364_14454 = (0);
var i__14365_14455 = (0);
while(true){
if((i__14365_14455 < count__14364_14454)){
var func__2791__auto___14456 = chunk__14363_14453.cljs$core$IIndexed$_nth$arity$2(null,i__14365_14455);
var instruction_name__2792__auto___14457 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14451),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14456)))].join(''));
var metadata__2793__auto___14458 = (function (){var G__14405 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14451,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14451)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14456))))));
var fexpr__14404 = ((function (seq__14361_14452,chunk__14363_14453,count__14364_14454,i__14365_14455,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14405,instruction_name__2792__auto___14457,func__2791__auto___14456,stack__2790__auto___14451,seq__14360_14445__$1,temp__5735__auto___14444){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14361_14452,chunk__14363_14453,count__14364_14454,i__14365_14455,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14405,instruction_name__2792__auto___14457,func__2791__auto___14456,stack__2790__auto___14451,seq__14360_14445__$1,temp__5735__auto___14444))
;
return fexpr__14404(G__14405);
})();
var new_func__2794__auto___14459 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14456,stack__2790__auto___14451),metadata__2793__auto___14458);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14457,new_func__2794__auto___14459);


var G__14460 = seq__14361_14452;
var G__14461 = chunk__14363_14453;
var G__14462 = count__14364_14454;
var G__14463 = (i__14365_14455 + (1));
seq__14361_14452 = G__14460;
chunk__14363_14453 = G__14461;
count__14364_14454 = G__14462;
i__14365_14455 = G__14463;
continue;
} else {
var temp__5735__auto___14464__$1 = cljs.core.seq(seq__14361_14452);
if(temp__5735__auto___14464__$1){
var seq__14361_14465__$1 = temp__5735__auto___14464__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14361_14465__$1)){
var c__4550__auto___14466 = cljs.core.chunk_first(seq__14361_14465__$1);
var G__14467 = cljs.core.chunk_rest(seq__14361_14465__$1);
var G__14468 = c__4550__auto___14466;
var G__14469 = cljs.core.count(c__4550__auto___14466);
var G__14470 = (0);
seq__14361_14452 = G__14467;
chunk__14363_14453 = G__14468;
count__14364_14454 = G__14469;
i__14365_14455 = G__14470;
continue;
} else {
var func__2791__auto___14471 = cljs.core.first(seq__14361_14465__$1);
var instruction_name__2792__auto___14472 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14451),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14471)))].join(''));
var metadata__2793__auto___14473 = (function (){var G__14407 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14451,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14451)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14471))))));
var fexpr__14406 = ((function (seq__14361_14452,chunk__14363_14453,count__14364_14454,i__14365_14455,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14407,instruction_name__2792__auto___14472,func__2791__auto___14471,seq__14361_14465__$1,temp__5735__auto___14464__$1,stack__2790__auto___14451,seq__14360_14445__$1,temp__5735__auto___14444){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14361_14452,chunk__14363_14453,count__14364_14454,i__14365_14455,seq__14360_14408,chunk__14367_14409,count__14368_14410,i__14369_14411,G__14407,instruction_name__2792__auto___14472,func__2791__auto___14471,seq__14361_14465__$1,temp__5735__auto___14464__$1,stack__2790__auto___14451,seq__14360_14445__$1,temp__5735__auto___14444))
;
return fexpr__14406(G__14407);
})();
var new_func__2794__auto___14474 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14471,stack__2790__auto___14451),metadata__2793__auto___14473);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14472,new_func__2794__auto___14474);


var G__14475 = cljs.core.next(seq__14361_14465__$1);
var G__14476 = null;
var G__14477 = (0);
var G__14478 = (0);
seq__14361_14452 = G__14475;
chunk__14363_14453 = G__14476;
count__14364_14454 = G__14477;
i__14365_14455 = G__14478;
continue;
}
} else {
}
}
break;
}

var G__14479 = cljs.core.next(seq__14360_14445__$1);
var G__14480 = null;
var G__14481 = (0);
var G__14482 = (0);
seq__14360_14408 = G__14479;
chunk__14367_14409 = G__14480;
count__14368_14410 = G__14481;
i__14369_14411 = G__14482;
continue;
}
} else {
}
}
break;
}
