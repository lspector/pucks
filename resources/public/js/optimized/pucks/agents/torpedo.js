// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.torpedo');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.agents.zapper');
pucks.agents.torpedo.torpedo_proposals = (function pucks$agents$torpedo$torpedo_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$transfer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$torpedo$torpedo_proposals_$_iter__13390(s__13391){
return (new cljs.core.LazySeq(null,(function (){
var s__13391__$1 = s__13391;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13391__$1);
if(temp__5735__auto__){
var s__13391__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13391__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13391__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13393 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13392 = (0);
while(true){
if((i__13392 < size__4522__auto__)){
var victim = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13392);
cljs.core.chunk_append(b__13393,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(victim),cljs.core.cst$kw$bid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,1.0], null)], null));

var G__13394 = (i__13392 + (1));
i__13392 = G__13394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13393),pucks$agents$torpedo$torpedo_proposals_$_iter__13390(cljs.core.chunk_rest(s__13391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13393),null);
}
} else {
var victim = cljs.core.first(s__13391__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(victim),cljs.core.cst$kw$bid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,1.0], null)], null),pucks$agents$torpedo$torpedo_proposals_$_iter__13390(cljs.core.rest(s__13391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})())], null);
});
pucks.agents.torpedo.torpedo = (function pucks$agents$torpedo$torpedo(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.zapper.zapper(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$torpedo,true,cljs.core.cst$kw$mobile,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.torpedo.torpedo_proposals,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(100),(0)], null),cljs.core.cst$kw$radius,(8)], null)], 0));
});
