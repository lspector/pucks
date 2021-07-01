// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.mapdonor');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.agents.active');
pucks.agents.mapdonor.mapdonor_proposals = (function pucks$agents$mapdonor$mapdonor_proposals(p){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function pucks$agents$mapdonor$mapdonor_proposals_$_iter__3582(s__3583){
return (new cljs.core.LazySeq(null,(function (){
var s__3583__$1 = s__3583;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3583__$1);
if(temp__5735__auto__){
var s__3583__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3583__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3583__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3585 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3584 = (0);
while(true){
if((i__3584 < size__4522__auto__)){
var recipient = cljs.core._nth.call(null,c__4521__auto__,i__3584);
cljs.core.chunk_append.call(null,b__3585,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null));

var G__3586 = (i__3584 + (1));
i__3584 = G__3586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3585),pucks$agents$mapdonor$mapdonor_proposals_$_iter__3582.call(null,cljs.core.chunk_rest.call(null,s__3583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3585),null);
}
} else {
var recipient = cljs.core.first.call(null,s__3583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$mapdonor$mapdonor_proposals_$_iter__3582.call(null,cljs.core.rest.call(null,s__3583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),(function (){var unmapped = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),new cljs.core.Keyword(null,"sensed","sensed",1518013926),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),new cljs.core.Keyword(null,"proposals","proposals",-1859752048),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620)], null);
return cljs.core.mapv.call(null,((function (unmapped){
return (function (p1__3581_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,cljs.core.cons.call(null,p1__3581_SHARP_,unmapped));
});})(unmapped))
,cljs.core.deref.call(null,pucks.globals.all_agents));
})()], null)], null));
});
pucks.agents.mapdonor.mapdonor = (function pucks$agents$mapdonor$mapdonor(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mapdonor","mapdonor",346339552),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.mapdonor.mapdonor_proposals,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(96),(255)], null),new cljs.core.Keyword(null,"core-color","core-color",278930388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(96),(255)], null)], null));
});

//# sourceMappingURL=mapdonor.js.map
