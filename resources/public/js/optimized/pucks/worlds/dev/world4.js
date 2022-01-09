// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world4');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world4.agents = (function pucks$worlds$dev$world4$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = (function pucks$worlds$dev$world4$agents_$_iter__13365(s__13366){
return (new cljs.core.LazySeq(null,(function (){
var s__13366__$1 = s__13366;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13366__$1);
if(temp__5735__auto__){
var s__13366__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13366__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13366__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13368 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13367 = (0);
while(true){
if((i__13367 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13367);
cljs.core.chunk_append(b__13368,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)));

var G__13373 = (i__13367 + (1));
i__13367 = G__13373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13368),pucks$worlds$dev$world4$agents_$_iter__13365(cljs.core.chunk_rest(s__13366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13368),null);
}
} else {
var y = cljs.core.first(s__13366__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)], 0)),pucks$worlds$dev$world4$agents_$_iter__13365(cljs.core.rest(s__13366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((15),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__13363_SHARP_){
return (p1__13363_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world4$agents_$_iter__13369(s__13370){
return (new cljs.core.LazySeq(null,(function (){
var s__13370__$1 = s__13370;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13370__$1);
if(temp__5735__auto__){
var s__13370__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13370__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13370__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13372 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13371 = (0);
while(true){
if((i__13371 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13371);
cljs.core.chunk_append(b__13372,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)], 0)));

var G__13374 = (i__13371 + (1));
i__13371 = G__13374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13372),pucks$worlds$dev$world4$agents_$_iter__13369(cljs.core.chunk_rest(s__13370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13372),null);
}
} else {
var x = cljs.core.first(s__13370__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.stone.stone(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)], 0)),pucks$worlds$dev$world4$agents_$_iter__13369(cljs.core.rest(s__13370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((16),cljs.core.iterate(((function (iter__4523__auto__){
return (function (p1__13364_SHARP_){
return (p1__13364_SHARP_ + (20));
});})(iter__4523__auto__))
,(50))));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null),cljs.core.cst$kw$rotation,(pucks.globals.pi / (2)),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null)], 0))], null)], 0));
});
pucks.worlds.dev.world4.settings = (function pucks$worlds$dev$world4$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
