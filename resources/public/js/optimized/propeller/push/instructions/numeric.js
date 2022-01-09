// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.numeric');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.utils.helpers');
goog.require('propeller.tools.math');
goog.require('cljs.reader');
propeller.push.instructions.numeric._gt = cljs.core.with_meta((function propeller$push$instructions$numeric$_gt(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_gt"], null));
propeller.push.instructions.numeric._gte = cljs.core.with_meta((function propeller$push$instructions$numeric$_gte(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._GT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_gte"], null));
propeller.push.instructions.numeric._lt = cljs.core.with_meta((function propeller$push$instructions$numeric$_lt(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._LT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_lt"], null));
propeller.push.instructions.numeric._lte = cljs.core.with_meta((function propeller$push$instructions$numeric$_lte(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._LT__EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_lte"], null));
propeller.push.instructions.numeric._add = cljs.core.with_meta((function propeller$push$instructions$numeric$_add(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_add"], null));
propeller.push.instructions.numeric._subtract = cljs.core.with_meta((function propeller$push$instructions$numeric$_subtract(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_subtract"], null));
propeller.push.instructions.numeric._mult = cljs.core.with_meta((function propeller$push$instructions$numeric$_mult(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_mult"], null));
propeller.push.instructions.numeric._quot = cljs.core.with_meta((function propeller$push$instructions$numeric$_quot(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14212_SHARP_,p2__14211_SHARP_){
if((p2__14211_SHARP_ === (0))){
return (1);
} else {
return cljs.core.quot(p1__14212_SHARP_,p2__14211_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_quot"], null));
propeller.push.instructions.numeric._mod = cljs.core.with_meta((function propeller$push$instructions$numeric$_mod(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14214_SHARP_,p2__14213_SHARP_){
if((p2__14213_SHARP_ === (0))){
return (1);
} else {
return cljs.core.mod(p1__14214_SHARP_,p2__14213_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_mod"], null));
propeller.push.instructions.numeric._max = cljs.core.with_meta((function propeller$push$instructions$numeric$_max(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.max,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_max"], null));
propeller.push.instructions.numeric._min = cljs.core.with_meta((function propeller$push$instructions$numeric$_min(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.min,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_min"], null));
propeller.push.instructions.numeric._from_boolean = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_boolean(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14215_SHARP_){
var G__14217 = (cljs.core.truth_(p1__14215_SHARP_)?(1):(0));
var fexpr__14216 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$);
return (fexpr__14216.cljs$core$IFn$_invoke$arity$1 ? fexpr__14216.cljs$core$IFn$_invoke$arity$1(G__14217) : fexpr__14216.call(null,G__14217));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null),cljs.core.cst$kw$name,"_from_boolean"], null));
propeller.push.instructions.numeric._from_char = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_char(stack,state){
return propeller.push.utils.helpers.make_instruction(state,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$char], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$char,null], null), null),cljs.core.cst$kw$name,"_from_char"], null));
propeller.push.instructions.numeric._from_string = cljs.core.with_meta((function propeller$push$instructions$numeric$_from_string(stack,state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__14218_SHARP_){
try{var G__14221 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__14218_SHARP_);
var fexpr__14220 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.cst$kw$integer))?cljs.core.int$:cljs.core.float$);
return (fexpr__14220.cljs$core$IFn$_invoke$arity$1 ? fexpr__14220.cljs$core$IFn$_invoke$arity$1(G__14221) : fexpr__14220.call(null,G__14221));
}catch (e14219){if((e14219 instanceof Error)){
var e = e14219;
return null;
} else {
throw e14219;

}
}}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,null], null), null),cljs.core.cst$kw$name,"_from_string"], null));
propeller.push.instructions.numeric._inc = cljs.core.with_meta((function propeller$push$instructions$numeric$_inc(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.inc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_inc"], null));
propeller.push.instructions.numeric._dec = cljs.core.with_meta((function propeller$push$instructions$numeric$_dec(stack,state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.dec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null),stack);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stacks,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$name,"_dec"], null));
var seq__14222_14270 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float,cljs.core.cst$kw$integer], null));
var chunk__14229_14271 = null;
var count__14230_14272 = (0);
var i__14231_14273 = (0);
while(true){
if((i__14231_14273 < count__14230_14272)){
var stack__2790__auto___14274 = chunk__14229_14271.cljs$core$IIndexed$_nth$arity$2(null,i__14231_14273);
var seq__14232_14275 = cljs.core.seq(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__14234_14276 = null;
var count__14235_14277 = (0);
var i__14236_14278 = (0);
while(true){
if((i__14236_14278 < count__14235_14277)){
var func__2791__auto___14279 = chunk__14234_14276.cljs$core$IIndexed$_nth$arity$2(null,i__14236_14278);
var instruction_name__2792__auto___14280 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14274),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14279)))].join(''));
var metadata__2793__auto___14281 = (function (){var G__14259 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14279),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14274,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14274)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14279))))));
var fexpr__14258 = ((function (seq__14232_14275,chunk__14234_14276,count__14235_14277,i__14236_14278,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14259,instruction_name__2792__auto___14280,func__2791__auto___14279,stack__2790__auto___14274){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14232_14275,chunk__14234_14276,count__14235_14277,i__14236_14278,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14259,instruction_name__2792__auto___14280,func__2791__auto___14279,stack__2790__auto___14274))
;
return fexpr__14258(G__14259);
})();
var new_func__2794__auto___14282 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14279,stack__2790__auto___14274),metadata__2793__auto___14281);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14280,new_func__2794__auto___14282);


var G__14283 = seq__14232_14275;
var G__14284 = chunk__14234_14276;
var G__14285 = count__14235_14277;
var G__14286 = (i__14236_14278 + (1));
seq__14232_14275 = G__14283;
chunk__14234_14276 = G__14284;
count__14235_14277 = G__14285;
i__14236_14278 = G__14286;
continue;
} else {
var temp__5735__auto___14287 = cljs.core.seq(seq__14232_14275);
if(temp__5735__auto___14287){
var seq__14232_14288__$1 = temp__5735__auto___14287;
if(cljs.core.chunked_seq_QMARK_(seq__14232_14288__$1)){
var c__4550__auto___14289 = cljs.core.chunk_first(seq__14232_14288__$1);
var G__14290 = cljs.core.chunk_rest(seq__14232_14288__$1);
var G__14291 = c__4550__auto___14289;
var G__14292 = cljs.core.count(c__4550__auto___14289);
var G__14293 = (0);
seq__14232_14275 = G__14290;
chunk__14234_14276 = G__14291;
count__14235_14277 = G__14292;
i__14236_14278 = G__14293;
continue;
} else {
var func__2791__auto___14294 = cljs.core.first(seq__14232_14288__$1);
var instruction_name__2792__auto___14295 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14274),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14294)))].join(''));
var metadata__2793__auto___14296 = (function (){var G__14261 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14274,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14274)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14294))))));
var fexpr__14260 = ((function (seq__14232_14275,chunk__14234_14276,count__14235_14277,i__14236_14278,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14261,instruction_name__2792__auto___14295,func__2791__auto___14294,seq__14232_14288__$1,temp__5735__auto___14287,stack__2790__auto___14274){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14232_14275,chunk__14234_14276,count__14235_14277,i__14236_14278,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14261,instruction_name__2792__auto___14295,func__2791__auto___14294,seq__14232_14288__$1,temp__5735__auto___14287,stack__2790__auto___14274))
;
return fexpr__14260(G__14261);
})();
var new_func__2794__auto___14297 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14294,stack__2790__auto___14274),metadata__2793__auto___14296);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14295,new_func__2794__auto___14297);


var G__14298 = cljs.core.next(seq__14232_14288__$1);
var G__14299 = null;
var G__14300 = (0);
var G__14301 = (0);
seq__14232_14275 = G__14298;
chunk__14234_14276 = G__14299;
count__14235_14277 = G__14300;
i__14236_14278 = G__14301;
continue;
}
} else {
}
}
break;
}

var G__14302 = seq__14222_14270;
var G__14303 = chunk__14229_14271;
var G__14304 = count__14230_14272;
var G__14305 = (i__14231_14273 + (1));
seq__14222_14270 = G__14302;
chunk__14229_14271 = G__14303;
count__14230_14272 = G__14304;
i__14231_14273 = G__14305;
continue;
} else {
var temp__5735__auto___14306 = cljs.core.seq(seq__14222_14270);
if(temp__5735__auto___14306){
var seq__14222_14307__$1 = temp__5735__auto___14306;
if(cljs.core.chunked_seq_QMARK_(seq__14222_14307__$1)){
var c__4550__auto___14308 = cljs.core.chunk_first(seq__14222_14307__$1);
var G__14309 = cljs.core.chunk_rest(seq__14222_14307__$1);
var G__14310 = c__4550__auto___14308;
var G__14311 = cljs.core.count(c__4550__auto___14308);
var G__14312 = (0);
seq__14222_14270 = G__14309;
chunk__14229_14271 = G__14310;
count__14230_14272 = G__14311;
i__14231_14273 = G__14312;
continue;
} else {
var stack__2790__auto___14313 = cljs.core.first(seq__14222_14307__$1);
var seq__14223_14314 = cljs.core.seq(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [propeller.push.instructions.numeric._gt,propeller.push.instructions.numeric._gte,propeller.push.instructions.numeric._lt,propeller.push.instructions.numeric._lte,propeller.push.instructions.numeric._add,propeller.push.instructions.numeric._subtract,propeller.push.instructions.numeric._mult,propeller.push.instructions.numeric._quot,propeller.push.instructions.numeric._mod,propeller.push.instructions.numeric._max,propeller.push.instructions.numeric._min,propeller.push.instructions.numeric._inc,propeller.push.instructions.numeric._dec,propeller.push.instructions.numeric._from_boolean,propeller.push.instructions.numeric._from_char,propeller.push.instructions.numeric._from_string], null));
var chunk__14225_14315 = null;
var count__14226_14316 = (0);
var i__14227_14317 = (0);
while(true){
if((i__14227_14317 < count__14226_14316)){
var func__2791__auto___14318 = chunk__14225_14315.cljs$core$IIndexed$_nth$arity$2(null,i__14227_14317);
var instruction_name__2792__auto___14319 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14313),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14318)))].join(''));
var metadata__2793__auto___14320 = (function (){var G__14267 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14318),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14313,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14313)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14318))))));
var fexpr__14266 = ((function (seq__14223_14314,chunk__14225_14315,count__14226_14316,i__14227_14317,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14267,instruction_name__2792__auto___14319,func__2791__auto___14318,stack__2790__auto___14313,seq__14222_14307__$1,temp__5735__auto___14306){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14223_14314,chunk__14225_14315,count__14226_14316,i__14227_14317,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14267,instruction_name__2792__auto___14319,func__2791__auto___14318,stack__2790__auto___14313,seq__14222_14307__$1,temp__5735__auto___14306))
;
return fexpr__14266(G__14267);
})();
var new_func__2794__auto___14321 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14318,stack__2790__auto___14313),metadata__2793__auto___14320);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14319,new_func__2794__auto___14321);


var G__14322 = seq__14223_14314;
var G__14323 = chunk__14225_14315;
var G__14324 = count__14226_14316;
var G__14325 = (i__14227_14317 + (1));
seq__14223_14314 = G__14322;
chunk__14225_14315 = G__14323;
count__14226_14316 = G__14324;
i__14227_14317 = G__14325;
continue;
} else {
var temp__5735__auto___14326__$1 = cljs.core.seq(seq__14223_14314);
if(temp__5735__auto___14326__$1){
var seq__14223_14327__$1 = temp__5735__auto___14326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14223_14327__$1)){
var c__4550__auto___14328 = cljs.core.chunk_first(seq__14223_14327__$1);
var G__14329 = cljs.core.chunk_rest(seq__14223_14327__$1);
var G__14330 = c__4550__auto___14328;
var G__14331 = cljs.core.count(c__4550__auto___14328);
var G__14332 = (0);
seq__14223_14314 = G__14329;
chunk__14225_14315 = G__14330;
count__14226_14316 = G__14331;
i__14227_14317 = G__14332;
continue;
} else {
var func__2791__auto___14333 = cljs.core.first(seq__14223_14327__$1);
var instruction_name__2792__auto___14334 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(stack__2790__auto___14313),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14333)))].join(''));
var metadata__2793__auto___14335 = (function (){var G__14269 = cljs.core.assoc_in(cljs.core.meta(func__2791__auto___14333),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stacks], null),cljs.core.set(cljs.core.cons(stack__2790__auto___14313,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elem,propeller.push.utils.helpers.get_vector_literal_type(stack__2790__auto___14313)], null),cljs.core.cst$kw$stacks.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(func__2791__auto___14333))))));
var fexpr__14268 = ((function (seq__14223_14314,chunk__14225_14315,count__14226_14316,i__14227_14317,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14269,instruction_name__2792__auto___14334,func__2791__auto___14333,seq__14223_14327__$1,temp__5735__auto___14326__$1,stack__2790__auto___14313,seq__14222_14307__$1,temp__5735__auto___14306){
return (function (p1__2783__2784__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__2783__2784__auto__,cljs.core.cst$kw$name);
});})(seq__14223_14314,chunk__14225_14315,count__14226_14316,i__14227_14317,seq__14222_14270,chunk__14229_14271,count__14230_14272,i__14231_14273,G__14269,instruction_name__2792__auto___14334,func__2791__auto___14333,seq__14223_14327__$1,temp__5735__auto___14326__$1,stack__2790__auto___14313,seq__14222_14307__$1,temp__5735__auto___14306))
;
return fexpr__14268(G__14269);
})();
var new_func__2794__auto___14336 = cljs.core.with_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(func__2791__auto___14333,stack__2790__auto___14313),metadata__2793__auto___14335);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,instruction_name__2792__auto___14334,new_func__2794__auto___14336);


var G__14337 = cljs.core.next(seq__14223_14327__$1);
var G__14338 = null;
var G__14339 = (0);
var G__14340 = (0);
seq__14223_14314 = G__14337;
chunk__14225_14315 = G__14338;
count__14226_14316 = G__14339;
i__14227_14317 = G__14340;
continue;
}
} else {
}
}
break;
}

var G__14341 = cljs.core.next(seq__14222_14307__$1);
var G__14342 = null;
var G__14343 = (0);
var G__14344 = (0);
seq__14222_14270 = G__14341;
chunk__14229_14271 = G__14342;
count__14230_14272 = G__14343;
i__14231_14273 = G__14344;
continue;
}
} else {
}
}
break;
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_cos,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.math.cos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_sin,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.math.sin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_tan,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,propeller.tools.math.tan,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$float_from_integer,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.float$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer], null),cljs.core.cst$kw$float);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$integer,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$integer_from_float,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.int$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$integer);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$integer,null], null), null)], null)));
