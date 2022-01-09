// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world8');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.util');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world8.agents = (function pucks$worlds$dev$world8$agents(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),cljs.core.cst$kw$rotation,pucks.globals.half_pi,cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thing], null),cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world8$agents_$_iter__13673(s__13674){
return (new cljs.core.LazySeq(null,(function (){
var s__13674__$1 = s__13674;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13674__$1);
if(temp__5735__auto__){
var s__13674__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13674__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13674__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13676 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13675 = (0);
while(true){
if((i__13675 < size__4522__auto__)){
var anyone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13675);
cljs.core.chunk_append(b__13676,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null),cljs.core.cst$kw$ask,((function (i__13675,anyone,c__4521__auto__,size__4522__auto__,b__13676,s__13674__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
return cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(your_bid));
});})(i__13675,anyone,c__4521__auto__,size__4522__auto__,b__13676,s__13674__$2,temp__5735__auto__))
], null));

var G__13681 = (i__13675 + (1));
i__13675 = G__13681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13676),pucks$worlds$dev$world8$agents_$_iter__13673(cljs.core.chunk_rest(s__13674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13676),null);
}
} else {
var anyone = cljs.core.first(s__13674__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null),cljs.core.cst$kw$ask,((function (anyone,s__13674__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
return cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(your_bid));
});})(anyone,s__13674__$2,temp__5735__auto__))
], null),pucks$worlds$dev$world8$agents_$_iter__13673(cljs.core.rest(s__13674__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p));
})()], null);
})], null)], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(700)], null),cljs.core.cst$kw$rotation,(0),cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$secret,cljs.core.cst$kw$foo], null),cljs.core.cst$kw$proposal_DASH_function,(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world8$agents_$_iter__13677(s__13678){
return (new cljs.core.LazySeq(null,(function (){
var s__13678__$1 = s__13678;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13678__$1);
if(temp__5735__auto__){
var s__13678__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13678__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13678__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13680 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13679 = (0);
while(true){
if((i__13679 < size__4522__auto__)){
var anyone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13679);
cljs.core.chunk_append(b__13680,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$secret,cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null)], null));

var G__13682 = (i__13679 + (1));
i__13679 = G__13682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13680),pucks$worlds$dev$world8$agents_$_iter__13677(cljs.core.chunk_rest(s__13678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13680),null);
}
} else {
var anyone = cljs.core.first(s__13678__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(anyone),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$secret,cljs.core.cst$kw$secret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$thing], null)], null),pucks$worlds$dev$world8$agents_$_iter__13677(cljs.core.rest(s__13678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p));
})()], null);
})], null)], 0))], null);
});
pucks.worlds.dev.world8.settings = (function pucks$worlds$dev$world8$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
