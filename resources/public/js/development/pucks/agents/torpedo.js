// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.torpedo');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.agents.zapper');
pucks.agents.torpedo.torpedo_proposals = (function pucks$agents$torpedo$torpedo_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$torpedo$torpedo_proposals_$_iter__3502(s__3503){
return (new cljs.core.LazySeq(null,(function (){
var s__3503__$1 = s__3503;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3503__$1);
if(temp__5735__auto__){
var s__3503__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3503__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3503__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3505 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3504 = (0);
while(true){
if((i__3504 < size__4522__auto__)){
var victim = cljs.core._nth.call(null,c__4521__auto__,i__3504);
cljs.core.chunk_append.call(null,b__3505,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(victim),new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),1.0], null)], null));

var G__3506 = (i__3504 + (1));
i__3504 = G__3506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3505),pucks$agents$torpedo$torpedo_proposals_$_iter__3502.call(null,cljs.core.chunk_rest.call(null,s__3503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3505),null);
}
} else {
var victim = cljs.core.first.call(null,s__3503__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(victim),new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),1.0], null)], null),pucks$agents$torpedo$torpedo_proposals_$_iter__3502.call(null,cljs.core.rest.call(null,s__3503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)));
})())], null);
});
pucks.agents.torpedo.torpedo = (function pucks$agents$torpedo$torpedo(){
return cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"torpedo","torpedo",275681140),true,new cljs.core.Keyword(null,"mobile","mobile",1403078170),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.torpedo.torpedo_proposals,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(100),(0)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(8)], null));
});

//# sourceMappingURL=torpedo.js.map
