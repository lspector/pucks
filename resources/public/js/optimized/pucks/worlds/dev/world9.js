// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world9');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.shooter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world9.agents = (function pucks$worlds$dev$world9$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13506(s__13507){
return (new cljs.core.LazySeq(null,(function (){
var s__13507__$1 = s__13507;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13507__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13507__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world9$agents_$_iter__13506_$_iter__13508(s__13509){
return (new cljs.core.LazySeq(null,((function (s__13507__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13509__$1 = s__13509;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13509__$1);
if(temp__5735__auto____$1){
var s__13509__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13509__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13509__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13511 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13510 = (0);
while(true){
if((i__13510 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13510);
cljs.core.chunk_append(b__13511,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)));

var G__13540 = (i__13510 + (1));
i__13510 = G__13540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13511),pucks$worlds$dev$world9$agents_$_iter__13506_$_iter__13508(cljs.core.chunk_rest(s__13509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13511),null);
}
} else {
var y = cljs.core.first(s__13509__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.beacon.beacon(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13506_$_iter__13508(cljs.core.rest(s__13509__$2)));
}
} else {
return null;
}
break;
}
});})(s__13507__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13507__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$worlds$dev$world9$agents_$_iter__13506(cljs.core.rest(s__13507__$1)));
} else {
var G__13541 = cljs.core.rest(s__13507__$1);
s__13507__$1 = G__13541;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(701),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13512(s__13513){
return (new cljs.core.LazySeq(null,(function (){
var s__13513__$1 = s__13513;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13513__$1);
if(temp__5735__auto__){
var s__13513__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13513__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13513__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13515 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13514 = (0);
while(true){
if((i__13514 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13514);
cljs.core.chunk_append(b__13515,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13542 = (i__13514 + (1));
i__13514 = G__13542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13515),pucks$worlds$dev$world9$agents_$_iter__13512(cljs.core.chunk_rest(s__13513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13515),null);
}
} else {
var y = cljs.core.first(s__13513__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13512(cljs.core.rest(s__13513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(201),(20)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13516(s__13517){
return (new cljs.core.LazySeq(null,(function (){
var s__13517__$1 = s__13517;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13517__$1);
if(temp__5735__auto__){
var s__13517__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13517__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13517__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13519 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13518 = (0);
while(true){
if((i__13518 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13518);
cljs.core.chunk_append(b__13519,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13543 = (i__13518 + (1));
i__13518 = G__13543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13519),pucks$worlds$dev$world9$agents_$_iter__13516(cljs.core.chunk_rest(s__13517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13519),null);
}
} else {
var y = cljs.core.first(s__13517__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13516(cljs.core.rest(s__13517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13520(s__13521){
return (new cljs.core.LazySeq(null,(function (){
var s__13521__$1 = s__13521;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13521__$1);
if(temp__5735__auto__){
var s__13521__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13521__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13521__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13523 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13522 = (0);
while(true){
if((i__13522 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13522);
cljs.core.chunk_append(b__13523,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)));

var G__13544 = (i__13522 + (1));
i__13522 = G__13544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13523),pucks$worlds$dev$world9$agents_$_iter__13520(cljs.core.chunk_rest(s__13521__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13523),null);
}
} else {
var x = cljs.core.first(s__13521__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13520(cljs.core.rest(s__13521__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13524(s__13525){
return (new cljs.core.LazySeq(null,(function (){
var s__13525__$1 = s__13525;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13525__$1);
if(temp__5735__auto__){
var s__13525__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13525__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13525__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13527 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13526 = (0);
while(true){
if((i__13526 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13526);
cljs.core.chunk_append(b__13527,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)));

var G__13545 = (i__13526 + (1));
i__13526 = G__13545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13527),pucks$worlds$dev$world9$agents_$_iter__13524(cljs.core.chunk_rest(s__13525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13527),null);
}
} else {
var x = cljs.core.first(s__13525__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13524(cljs.core.rest(s__13525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13528(s__13529){
return (new cljs.core.LazySeq(null,(function (){
var s__13529__$1 = s__13529;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13529__$1);
if(temp__5735__auto__){
var s__13529__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13529__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13529__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13531 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13530 = (0);
while(true){
if((i__13530 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13530);
cljs.core.chunk_append(b__13531,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)));

var G__13546 = (i__13530 + (1));
i__13530 = G__13546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13531),pucks$worlds$dev$world9$agents_$_iter__13528(cljs.core.chunk_rest(s__13529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13531),null);
}
} else {
var x = cljs.core.first(s__13529__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13528(cljs.core.rest(s__13529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13532(s__13533){
return (new cljs.core.LazySeq(null,(function (){
var s__13533__$1 = s__13533;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13533__$1);
if(temp__5735__auto__){
var s__13533__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13533__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13533__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13535 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13534 = (0);
while(true){
if((i__13534 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13534);
cljs.core.chunk_append(b__13535,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)));

var G__13547 = (i__13534 + (1));
i__13534 = G__13547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13535),pucks$worlds$dev$world9$agents_$_iter__13532(cljs.core.chunk_rest(s__13533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13535),null);
}
} else {
var y = cljs.core.first(s__13533__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13532(cljs.core.rest(s__13533__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__13536(s__13537){
return (new cljs.core.LazySeq(null,(function (){
var s__13537__$1 = s__13537;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13537__$1);
if(temp__5735__auto__){
var s__13537__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13537__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13537__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13539 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13538 = (0);
while(true){
if((i__13538 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13538);
cljs.core.chunk_append(b__13539,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)));

var G__13548 = (i__13538 + (1));
i__13538 = G__13548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13539),pucks$worlds$dev$world9$agents_$_iter__13536(cljs.core.chunk_rest(s__13537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13539),null);
}
} else {
var y = cljs.core.first(s__13537__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)], 0)),pucks$worlds$dev$world9$agents_$_iter__13536(cljs.core.rest(s__13537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.vent.vent(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)], 0))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.nursery.nursery(pucks.agents.shooter.shooter),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world9.settings = (function pucks$worlds$dev$world9$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
