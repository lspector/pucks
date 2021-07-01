// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.zapper');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.zapper.draw_zapper = (function pucks$agents$zapper$draw_zapper(p){
var vec__3364 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3364,(0),null);
var y = cljs.core.nth.call(null,vec__3364,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3367 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3367,(0),null);
var g = cljs.core.nth.call(null,vec__3367,(1),null);
var b = cljs.core.nth.call(null,vec__3367,(2),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.fill.call(null,r,g,b,(100));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.call(null,r,g,b);

quil.core.ellipse.call(null,(0),(0),radius,radius);

return quil.core.pop_matrix.call(null);
});
pucks.agents.zapper.zapper_proposals = (function pucks$agents$zapper$zapper_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$zapper$zapper_proposals_$_iter__3370(s__3371){
return (new cljs.core.LazySeq(null,(function (){
var s__3371__$1 = s__3371;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3371__$1);
if(temp__5735__auto__){
var s__3371__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3371__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3371__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3373 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3372 = (0);
while(true){
if((i__3372 < size__4522__auto__)){
var victim = cljs.core._nth.call(null,c__4521__auto__,i__3372);
cljs.core.chunk_append.call(null,b__3373,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(victim),new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.1], null)], null));

var G__3374 = (i__3372 + (1));
i__3372 = G__3374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3373),pucks$agents$zapper$zapper_proposals_$_iter__3370.call(null,cljs.core.chunk_rest.call(null,s__3371__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3373),null);
}
} else {
var victim = cljs.core.first.call(null,s__3371__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(victim),new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.1], null)], null),pucks$agents$zapper$zapper_proposals_$_iter__3370.call(null,cljs.core.rest.call(null,s__3371__$2)));
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
pucks.agents.zapper.zapper = (function pucks$agents$zapper$zapper(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"zapper","zapper",362355558),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(207),(19),(200)], null),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.zapper.draw_zapper,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.zapper.zapper_proposals], null));
});

//# sourceMappingURL=zapper.js.map
