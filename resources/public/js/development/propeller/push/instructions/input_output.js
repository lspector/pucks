// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.input_output');
goog.require('cljs.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.push.utils.macros');
propeller.push.instructions.input_output.handle_input_instruction = (function propeller$push$instructions$input_output$handle_input_instruction(state,instruction){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state),instruction)){
var input = instruction.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state));
return propeller.push.state.push_to_stack.call(null,state,new cljs.core.Keyword(null,"exec","exec",1625568743),input);
} else {
throw Error(["Undefined instruction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)].join(''));
}
});
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"print_newline","print_newline",-1016300999),cljs.core.with_meta((function (state){
var current_output = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
var popped_state = propeller.push.state.pop_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"print","print",1299562414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),"\n"].join(''));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414)], null)], null)));
propeller.push.instructions.input_output._print = cljs.core.with_meta((function propeller$push$instructions$input_output$_print(stack,state){
if(propeller.push.state.empty_stack_QMARK_.call(null,state,stack)){
return state;
} else {
var top_item = propeller.push.state.peek_stack.call(null,state,stack);
var top_item_str = ((((typeof top_item === 'string') || (cljs.core.char_QMARK_.call(null,top_item))))?top_item:cljs.core.pr_str.call(null,top_item));
var current_output = propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"print","print",1299562414));
var popped_state = propeller.push.state.pop_stack.call(null,propeller.push.state.pop_stack.call(null,state,stack),new cljs.core.Keyword(null,"print","print",1299562414));
return propeller.push.state.push_to_stack.call(null,popped_state,new cljs.core.Keyword(null,"print","print",1299562414),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_item_str)].join(''));
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"print","print",1299562414)], null),new cljs.core.Keyword(null,"name","name",1843675177),"_print"], null));
var seq__5442_5458 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283)], null));
var chunk__5449_5459 = null;
var count__5450_5460 = (0);
var i__5451_5461 = (0);
while(true){
if((i__5451_5461 < count__5450_5460)){
var stack__4333__auto___5462 = cljs.core._nth.call(null,chunk__5449_5459,i__5451_5461);
var seq__5452_5463 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__5454_5464 = null;
var count__5455_5465 = (0);
var i__5456_5466 = (0);
while(true){
if((i__5456_5466 < count__5455_5465)){
var func__4334__auto___5467 = cljs.core._nth.call(null,chunk__5454_5464,i__5456_5466);
var instruction_name__4335__auto___5468 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5462),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5467)))].join(''));
var metadata__4336__auto___5469 = ((function (seq__5452_5463,chunk__5454_5464,count__5455_5465,i__5456_5466,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5468,func__4334__auto___5467,stack__4333__auto___5462){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5452_5463,chunk__5454_5464,count__5455_5465,i__5456_5466,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5468,func__4334__auto___5467,stack__4333__auto___5462))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5467),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5462,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5462)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5467)))))));
var new_func__4337__auto___5470 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5467,stack__4333__auto___5462),metadata__4336__auto___5469);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5468,new_func__4337__auto___5470);


var G__5471 = seq__5452_5463;
var G__5472 = chunk__5454_5464;
var G__5473 = count__5455_5465;
var G__5474 = (i__5456_5466 + (1));
seq__5452_5463 = G__5471;
chunk__5454_5464 = G__5472;
count__5455_5465 = G__5473;
i__5456_5466 = G__5474;
continue;
} else {
var temp__5735__auto___5475 = cljs.core.seq.call(null,seq__5452_5463);
if(temp__5735__auto___5475){
var seq__5452_5476__$1 = temp__5735__auto___5475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5452_5476__$1)){
var c__4550__auto___5477 = cljs.core.chunk_first.call(null,seq__5452_5476__$1);
var G__5478 = cljs.core.chunk_rest.call(null,seq__5452_5476__$1);
var G__5479 = c__4550__auto___5477;
var G__5480 = cljs.core.count.call(null,c__4550__auto___5477);
var G__5481 = (0);
seq__5452_5463 = G__5478;
chunk__5454_5464 = G__5479;
count__5455_5465 = G__5480;
i__5456_5466 = G__5481;
continue;
} else {
var func__4334__auto___5482 = cljs.core.first.call(null,seq__5452_5476__$1);
var instruction_name__4335__auto___5483 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5462),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5482)))].join(''));
var metadata__4336__auto___5484 = ((function (seq__5452_5463,chunk__5454_5464,count__5455_5465,i__5456_5466,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5483,func__4334__auto___5482,seq__5452_5476__$1,temp__5735__auto___5475,stack__4333__auto___5462){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5452_5463,chunk__5454_5464,count__5455_5465,i__5456_5466,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5483,func__4334__auto___5482,seq__5452_5476__$1,temp__5735__auto___5475,stack__4333__auto___5462))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5462,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5462)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5482)))))));
var new_func__4337__auto___5485 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5482,stack__4333__auto___5462),metadata__4336__auto___5484);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5483,new_func__4337__auto___5485);


var G__5486 = cljs.core.next.call(null,seq__5452_5476__$1);
var G__5487 = null;
var G__5488 = (0);
var G__5489 = (0);
seq__5452_5463 = G__5486;
chunk__5454_5464 = G__5487;
count__5455_5465 = G__5488;
i__5456_5466 = G__5489;
continue;
}
} else {
}
}
break;
}

var G__5490 = seq__5442_5458;
var G__5491 = chunk__5449_5459;
var G__5492 = count__5450_5460;
var G__5493 = (i__5451_5461 + (1));
seq__5442_5458 = G__5490;
chunk__5449_5459 = G__5491;
count__5450_5460 = G__5492;
i__5451_5461 = G__5493;
continue;
} else {
var temp__5735__auto___5494 = cljs.core.seq.call(null,seq__5442_5458);
if(temp__5735__auto___5494){
var seq__5442_5495__$1 = temp__5735__auto___5494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5442_5495__$1)){
var c__4550__auto___5496 = cljs.core.chunk_first.call(null,seq__5442_5495__$1);
var G__5497 = cljs.core.chunk_rest.call(null,seq__5442_5495__$1);
var G__5498 = c__4550__auto___5496;
var G__5499 = cljs.core.count.call(null,c__4550__auto___5496);
var G__5500 = (0);
seq__5442_5458 = G__5497;
chunk__5449_5459 = G__5498;
count__5450_5460 = G__5499;
i__5451_5461 = G__5500;
continue;
} else {
var stack__4333__auto___5501 = cljs.core.first.call(null,seq__5442_5495__$1);
var seq__5443_5502 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.input_output._print], null));
var chunk__5445_5503 = null;
var count__5446_5504 = (0);
var i__5447_5505 = (0);
while(true){
if((i__5447_5505 < count__5446_5504)){
var func__4334__auto___5506 = cljs.core._nth.call(null,chunk__5445_5503,i__5447_5505);
var instruction_name__4335__auto___5507 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5501),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5506)))].join(''));
var metadata__4336__auto___5508 = ((function (seq__5443_5502,chunk__5445_5503,count__5446_5504,i__5447_5505,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5507,func__4334__auto___5506,stack__4333__auto___5501,seq__5442_5495__$1,temp__5735__auto___5494){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5443_5502,chunk__5445_5503,count__5446_5504,i__5447_5505,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5507,func__4334__auto___5506,stack__4333__auto___5501,seq__5442_5495__$1,temp__5735__auto___5494))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5506),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5501,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5501)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5506)))))));
var new_func__4337__auto___5509 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5506,stack__4333__auto___5501),metadata__4336__auto___5508);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5507,new_func__4337__auto___5509);


var G__5510 = seq__5443_5502;
var G__5511 = chunk__5445_5503;
var G__5512 = count__5446_5504;
var G__5513 = (i__5447_5505 + (1));
seq__5443_5502 = G__5510;
chunk__5445_5503 = G__5511;
count__5446_5504 = G__5512;
i__5447_5505 = G__5513;
continue;
} else {
var temp__5735__auto___5514__$1 = cljs.core.seq.call(null,seq__5443_5502);
if(temp__5735__auto___5514__$1){
var seq__5443_5515__$1 = temp__5735__auto___5514__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5443_5515__$1)){
var c__4550__auto___5516 = cljs.core.chunk_first.call(null,seq__5443_5515__$1);
var G__5517 = cljs.core.chunk_rest.call(null,seq__5443_5515__$1);
var G__5518 = c__4550__auto___5516;
var G__5519 = cljs.core.count.call(null,c__4550__auto___5516);
var G__5520 = (0);
seq__5443_5502 = G__5517;
chunk__5445_5503 = G__5518;
count__5446_5504 = G__5519;
i__5447_5505 = G__5520;
continue;
} else {
var func__4334__auto___5521 = cljs.core.first.call(null,seq__5443_5515__$1);
var instruction_name__4335__auto___5522 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5501),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5521)))].join(''));
var metadata__4336__auto___5523 = ((function (seq__5443_5502,chunk__5445_5503,count__5446_5504,i__5447_5505,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5522,func__4334__auto___5521,seq__5443_5515__$1,temp__5735__auto___5514__$1,stack__4333__auto___5501,seq__5442_5495__$1,temp__5735__auto___5494){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5443_5502,chunk__5445_5503,count__5446_5504,i__5447_5505,seq__5442_5458,chunk__5449_5459,count__5450_5460,i__5451_5461,instruction_name__4335__auto___5522,func__4334__auto___5521,seq__5443_5515__$1,temp__5735__auto___5514__$1,stack__4333__auto___5501,seq__5442_5495__$1,temp__5735__auto___5494))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5521),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5501,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5501)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5521)))))));
var new_func__4337__auto___5524 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5521,stack__4333__auto___5501),metadata__4336__auto___5523);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5522,new_func__4337__auto___5524);


var G__5525 = cljs.core.next.call(null,seq__5443_5515__$1);
var G__5526 = null;
var G__5527 = (0);
var G__5528 = (0);
seq__5443_5502 = G__5525;
chunk__5445_5503 = G__5526;
count__5446_5504 = G__5527;
i__5447_5505 = G__5528;
continue;
}
} else {
}
}
break;
}

var G__5529 = cljs.core.next.call(null,seq__5442_5495__$1);
var G__5530 = null;
var G__5531 = (0);
var G__5532 = (0);
seq__5442_5458 = G__5529;
chunk__5449_5459 = G__5530;
count__5450_5460 = G__5531;
i__5451_5461 = G__5532;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=input_output.js.map
