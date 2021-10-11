// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.numeric');
goog.require('cljs.core');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.math');
goog.require('cljs.reader');
propeller.push.instructions.numeric._gt = cljs.core.with_meta((function propeller$push$instructions$numeric$_gt(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_gt"], null));
propeller.push.instructions.numeric._gte = cljs.core.with_meta((function propeller$push$instructions$numeric$_gte(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_gte"], null));
propeller.push.instructions.numeric._lt = cljs.core.with_meta((function propeller$push$instructions$numeric$_lt(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_lt"], null));
propeller.push.instructions.numeric._lte = cljs.core.with_meta((function propeller$push$instructions$numeric$_lte(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_lte"], null));
propeller.push.instructions.numeric._add = cljs.core.with_meta((function propeller$push$instructions$numeric$_add(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_add"], null));
propeller.push.instructions.numeric._subtract = cljs.core.with_meta((function propeller$push$instructions$numeric$_subtract(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_subtract"], null));
propeller.push.instructions.numeric._mult = cljs.core.with_meta((function propeller$push$instructions$numeric$_mult(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_mult"], null));
propeller.push.instructions.numeric._quot = cljs.core.with_meta((function propeller$push$instructions$numeric$_quot(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5331_SHARP_,p2__5330_SHARP_){
if((p2__5330_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot.call(null,p1__5331_SHARP_,p2__5330_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_quot"], null));
propeller.push.instructions.numeric._mod = cljs.core.with_meta((function propeller$push$instructions$numeric$_mod(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5333_SHARP_,p2__5332_SHARP_){
if((p2__5332_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod.call(null,p1__5333_SHARP_,p2__5332_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_mod"], null));
propeller.push.instructions.numeric._max = cljs.core.with_meta((function propeller$push$instructions$numeric$_max(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_max"], null));
propeller.push.instructions.numeric._min = cljs.core.with_meta((function propeller$push$instructions$numeric$_min(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_min"], null));
propeller.push.instructions.numeric._from_boolean = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_boolean(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5334_SHARP_){
return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,(cljs.core.truth_(p1__5334_SHARP_)?(1):(0)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_boolean"], null));
propeller.push.instructions.numeric._from_char = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_char(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char","char",-641587586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_char"], null));
propeller.push.instructions.numeric._from_string = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_string(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__5335_SHARP_){
try{return ((cljs.core._EQ_.call(null,stack,new cljs.core.Keyword(null,"integer","integer",-604721710)))?cljs.core.int$:cljs.core.float$).call(null,cljs.reader.read_string.call(null,p1__5335_SHARP_));
}catch (e5336){if((e5336 instanceof Error)){
var e = e5336;
return null;
} else {
throw e5336;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586)], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),null], null), null),new cljs.core.Keyword(null,"name","name",1843675177),"_from_string"], null));
propeller.push.instructions.numeric._inc = cljs.core.with_meta((function propeller$push$instructions$numeric$_inc(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_inc"], null));
propeller.push.instructions.numeric._dec = cljs.core.with_meta((function propeller$push$instructions$numeric$_dec(stack,state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"_dec"], null));
var seq__5337_5353 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"integer","integer",-604721710)], null));
var chunk__5344_5354 = null;
var count__5345_5355 = (0);
var i__5346_5356 = (0);
while(true){
if((i__5346_5356 < count__5345_5355)){
var stack__4333__auto___5357 = cljs.core._nth.call(null,chunk__5344_5354,i__5346_5356);
var seq__5347_5358 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__5349_5359 = null;
var count__5350_5360 = (0);
var i__5351_5361 = (0);
while(true){
if((i__5351_5361 < count__5350_5360)){
var func__4334__auto___5362 = cljs.core._nth.call(null,chunk__5349_5359,i__5351_5361);
var instruction_name__4335__auto___5363 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5357),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5362)))].join(''));
var metadata__4336__auto___5364 = ((function (seq__5347_5358,chunk__5349_5359,count__5350_5360,i__5351_5361,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5363,func__4334__auto___5362,stack__4333__auto___5357){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5347_5358,chunk__5349_5359,count__5350_5360,i__5351_5361,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5363,func__4334__auto___5362,stack__4333__auto___5357))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5362),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5357,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5357)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5362)))))));
var new_func__4337__auto___5365 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5362,stack__4333__auto___5357),metadata__4336__auto___5364);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5363,new_func__4337__auto___5365);


var G__5366 = seq__5347_5358;
var G__5367 = chunk__5349_5359;
var G__5368 = count__5350_5360;
var G__5369 = (i__5351_5361 + (1));
seq__5347_5358 = G__5366;
chunk__5349_5359 = G__5367;
count__5350_5360 = G__5368;
i__5351_5361 = G__5369;
continue;
} else {
var temp__5735__auto___5370 = cljs.core.seq.call(null,seq__5347_5358);
if(temp__5735__auto___5370){
var seq__5347_5371__$1 = temp__5735__auto___5370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5347_5371__$1)){
var c__4550__auto___5372 = cljs.core.chunk_first.call(null,seq__5347_5371__$1);
var G__5373 = cljs.core.chunk_rest.call(null,seq__5347_5371__$1);
var G__5374 = c__4550__auto___5372;
var G__5375 = cljs.core.count.call(null,c__4550__auto___5372);
var G__5376 = (0);
seq__5347_5358 = G__5373;
chunk__5349_5359 = G__5374;
count__5350_5360 = G__5375;
i__5351_5361 = G__5376;
continue;
} else {
var func__4334__auto___5377 = cljs.core.first.call(null,seq__5347_5371__$1);
var instruction_name__4335__auto___5378 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5357),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5377)))].join(''));
var metadata__4336__auto___5379 = ((function (seq__5347_5358,chunk__5349_5359,count__5350_5360,i__5351_5361,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5378,func__4334__auto___5377,seq__5347_5371__$1,temp__5735__auto___5370,stack__4333__auto___5357){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5347_5358,chunk__5349_5359,count__5350_5360,i__5351_5361,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5378,func__4334__auto___5377,seq__5347_5371__$1,temp__5735__auto___5370,stack__4333__auto___5357))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5357,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5357)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5377)))))));
var new_func__4337__auto___5380 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5377,stack__4333__auto___5357),metadata__4336__auto___5379);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5378,new_func__4337__auto___5380);


var G__5381 = cljs.core.next.call(null,seq__5347_5371__$1);
var G__5382 = null;
var G__5383 = (0);
var G__5384 = (0);
seq__5347_5358 = G__5381;
chunk__5349_5359 = G__5382;
count__5350_5360 = G__5383;
i__5351_5361 = G__5384;
continue;
}
} else {
}
}
break;
}

var G__5385 = seq__5337_5353;
var G__5386 = chunk__5344_5354;
var G__5387 = count__5345_5355;
var G__5388 = (i__5346_5356 + (1));
seq__5337_5353 = G__5385;
chunk__5344_5354 = G__5386;
count__5345_5355 = G__5387;
i__5346_5356 = G__5388;
continue;
} else {
var temp__5735__auto___5389 = cljs.core.seq.call(null,seq__5337_5353);
if(temp__5735__auto___5389){
var seq__5337_5390__$1 = temp__5735__auto___5389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5337_5390__$1)){
var c__4550__auto___5391 = cljs.core.chunk_first.call(null,seq__5337_5390__$1);
var G__5392 = cljs.core.chunk_rest.call(null,seq__5337_5390__$1);
var G__5393 = c__4550__auto___5391;
var G__5394 = cljs.core.count.call(null,c__4550__auto___5391);
var G__5395 = (0);
seq__5337_5353 = G__5392;
chunk__5344_5354 = G__5393;
count__5345_5355 = G__5394;
i__5346_5356 = G__5395;
continue;
} else {
var stack__4333__auto___5396 = cljs.core.first.call(null,seq__5337_5390__$1);
var seq__5338_5397 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__5340_5398 = null;
var count__5341_5399 = (0);
var i__5342_5400 = (0);
while(true){
if((i__5342_5400 < count__5341_5399)){
var func__4334__auto___5401 = cljs.core._nth.call(null,chunk__5340_5398,i__5342_5400);
var instruction_name__4335__auto___5402 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5396),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5401)))].join(''));
var metadata__4336__auto___5403 = ((function (seq__5338_5397,chunk__5340_5398,count__5341_5399,i__5342_5400,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5402,func__4334__auto___5401,stack__4333__auto___5396,seq__5337_5390__$1,temp__5735__auto___5389){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5338_5397,chunk__5340_5398,count__5341_5399,i__5342_5400,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5402,func__4334__auto___5401,stack__4333__auto___5396,seq__5337_5390__$1,temp__5735__auto___5389))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5396,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5396)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5401)))))));
var new_func__4337__auto___5404 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5401,stack__4333__auto___5396),metadata__4336__auto___5403);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5402,new_func__4337__auto___5404);


var G__5405 = seq__5338_5397;
var G__5406 = chunk__5340_5398;
var G__5407 = count__5341_5399;
var G__5408 = (i__5342_5400 + (1));
seq__5338_5397 = G__5405;
chunk__5340_5398 = G__5406;
count__5341_5399 = G__5407;
i__5342_5400 = G__5408;
continue;
} else {
var temp__5735__auto___5409__$1 = cljs.core.seq.call(null,seq__5338_5397);
if(temp__5735__auto___5409__$1){
var seq__5338_5410__$1 = temp__5735__auto___5409__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5338_5410__$1)){
var c__4550__auto___5411 = cljs.core.chunk_first.call(null,seq__5338_5410__$1);
var G__5412 = cljs.core.chunk_rest.call(null,seq__5338_5410__$1);
var G__5413 = c__4550__auto___5411;
var G__5414 = cljs.core.count.call(null,c__4550__auto___5411);
var G__5415 = (0);
seq__5338_5397 = G__5412;
chunk__5340_5398 = G__5413;
count__5341_5399 = G__5414;
i__5342_5400 = G__5415;
continue;
} else {
var func__4334__auto___5416 = cljs.core.first.call(null,seq__5338_5410__$1);
var instruction_name__4335__auto___5417 = cljs.core.keyword.call(null,[cljs.core.name.call(null,stack__4333__auto___5396),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5416)))].join(''));
var metadata__4336__auto___5418 = ((function (seq__5338_5397,chunk__5340_5398,count__5341_5399,i__5342_5400,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5417,func__4334__auto___5416,seq__5338_5410__$1,temp__5735__auto___5409__$1,stack__4333__auto___5396,seq__5337_5390__$1,temp__5735__auto___5389){
return (function (p1__4326__4327__auto__){
return cljs.core.dissoc.call(null,p1__4326__4327__auto__,new cljs.core.Keyword(null,"name","name",1843675177));
});})(seq__5338_5397,chunk__5340_5398,count__5341_5399,i__5342_5400,seq__5337_5353,chunk__5344_5354,count__5345_5355,i__5346_5356,instruction_name__4335__auto___5417,func__4334__auto___5416,seq__5338_5410__$1,temp__5735__auto___5409__$1,stack__4333__auto___5396,seq__5337_5390__$1,temp__5735__auto___5389))
.call(null,cljs.core.assoc_in.call(null,cljs.core.meta.call(null,func__4334__auto___5416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stacks","stacks",-456633410)], null),cljs.core.set.call(null,cljs.core.cons.call(null,stack__4333__auto___5396,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elem","elem",618631056),propeller.push.utils.helpers.get_vector_literal_type.call(null,stack__4333__auto___5396)], null),new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,func__4334__auto___5416)))))));
var new_func__4337__auto___5419 = cljs.core.with_meta.call(null,cljs.core.partial.call(null,func__4334__auto___5416,stack__4333__auto___5396),metadata__4336__auto___5418);
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__4335__auto___5417,new_func__4337__auto___5419);


var G__5420 = cljs.core.next.call(null,seq__5338_5410__$1);
var G__5421 = null;
var G__5422 = (0);
var G__5423 = (0);
seq__5338_5397 = G__5420;
chunk__5340_5398 = G__5421;
count__5341_5399 = G__5422;
i__5342_5400 = G__5423;
continue;
}
} else {
}
}
break;
}

var G__5424 = cljs.core.next.call(null,seq__5337_5390__$1);
var G__5425 = null;
var G__5426 = (0);
var G__5427 = (0);
seq__5337_5353 = G__5424;
chunk__5344_5354 = G__5425;
count__5345_5355 = G__5426;
i__5346_5356 = G__5427;
continue;
}
} else {
}
}
break;
}
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_cos","float_cos",-95039530),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.cos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_sin","float_sin",-1816563777),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.sin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_tan","float_tan",1899962771),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,propeller.tools.math.tan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"float_from_integer","float_from_integer",-1946851415),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.float$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"float","float",-1732389368));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"integer_from_float","integer_from_float",-175769178),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.int$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"integer","integer",-604721710));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));

//# sourceMappingURL=numeric.js.map
