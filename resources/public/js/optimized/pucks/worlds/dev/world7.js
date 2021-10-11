// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world7');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.opener');
goog.require('pucks.globals');
goog.require('pucks.agents.chest');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.gate');
pucks.worlds.dev.world7.agents = (function pucks$worlds$dev$world7$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13595(s__13596){
return (new cljs.core.LazySeq(null,(function (){
var s__13596__$1 = s__13596;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13596__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13596__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world7$agents_$_iter__13595_$_iter__13597(s__13598){
return (new cljs.core.LazySeq(null,((function (s__13596__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13598__$1 = s__13598;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13598__$1);
if(temp__5735__auto____$1){
var s__13598__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13598__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13598__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13600 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13599 = (0);
while(true){
if((i__13599 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13599);
cljs.core.chunk_append(b__13600,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13613 = (i__13599 + (1));
i__13599 = G__13613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13600),pucks$worlds$dev$world7$agents_$_iter__13595_$_iter__13597(cljs.core.chunk_rest(s__13598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13600),null);
}
} else {
var y = cljs.core.first(s__13598__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13595_$_iter__13597(cljs.core.rest(s__13598__$2)));
}
} else {
return null;
}
break;
}
});})(s__13596__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13596__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world7$agents_$_iter__13595(cljs.core.rest(s__13596__$1)));
} else {
var G__13614 = cljs.core.rest(s__13596__$1);
s__13596__$1 = G__13614;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((500),(701),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13601(s__13602){
return (new cljs.core.LazySeq(null,(function (){
var s__13602__$1 = s__13602;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13602__$1);
if(temp__5735__auto__){
var s__13602__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13602__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13602__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13604 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13603 = (0);
while(true){
if((i__13603 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13603);
cljs.core.chunk_append(b__13604,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__13615 = (i__13603 + (1));
i__13603 = G__13615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13604),pucks$worlds$dev$world7$agents_$_iter__13601(cljs.core.chunk_rest(s__13602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13604),null);
}
} else {
var y = cljs.core.first(s__13602__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13601(cljs.core.rest(s__13602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(361),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13605(s__13606){
return (new cljs.core.LazySeq(null,(function (){
var s__13606__$1 = s__13606;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13606__$1);
if(temp__5735__auto__){
var s__13606__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13606__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13606__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13608 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13607 = (0);
while(true){
if((i__13607 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13607);
cljs.core.chunk_append(b__13608,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)));

var G__13616 = (i__13607 + (1));
i__13607 = G__13616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13608),pucks$worlds$dev$world7$agents_$_iter__13605(cljs.core.chunk_rest(s__13606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13608),null);
}
} else {
var y = cljs.core.first(s__13606__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13605(cljs.core.rest(s__13606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__13609(s__13610){
return (new cljs.core.LazySeq(null,(function (){
var s__13610__$1 = s__13610;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13610__$1);
if(temp__5735__auto__){
var s__13610__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13610__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13610__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13612 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13611 = (0);
while(true){
if((i__13611 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13611);
cljs.core.chunk_append(b__13612,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)));

var G__13617 = (i__13611 + (1));
i__13611 = G__13617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13612),pucks$worlds$dev$world7$agents_$_iter__13609(cljs.core.chunk_rest(s__13610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13612),null);
}
} else {
var y = cljs.core.first(s__13610__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)], 0)),pucks$worlds$dev$world7$agents_$_iter__13609(cljs.core.rest(s__13610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.gate.gate(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.chest.chest(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.opener.opener(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),cljs.core.cst$kw$rotation,pucks.globals.half_pi,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(0)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),cljs.core.cst$kw$radius,(30)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world7.settings = (function pucks$worlds$dev$world7$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
