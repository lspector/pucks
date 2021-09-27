// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world12');
goog.require('cljs.core');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.linear');
goog.require('pucks.agents.zigzag');
goog.require('pucks.agents.startstop');
goog.require('pucks.agents.swarmer');
pucks.worlds.dev.world12.agents = (function pucks$worlds$dev$world12$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world12$agents_$_iter__3381(s__3382){
return (new cljs.core.LazySeq(null,(function (){
var s__3382__$1 = s__3382;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3382__$1);
if(temp__5735__auto__){
var s__3382__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3382__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3382__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3384 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3383 = (0);
while(true){
if((i__3383 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3383);
cljs.core.chunk_append.call(null,b__3384,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3389 = (i__3383 + (1));
i__3383 = G__3389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3384),pucks$worlds$dev$world12$agents_$_iter__3381.call(null,cljs.core.chunk_rest.call(null,s__3382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3384),null);
}
} else {
var y = cljs.core.first.call(null,s__3382__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world12$agents_$_iter__3381.call(null,cljs.core.rest.call(null,s__3382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(15),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__3379_SHARP_){
return (p1__3379_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world12$agents_$_iter__3385(s__3386){
return (new cljs.core.LazySeq(null,(function (){
var s__3386__$1 = s__3386;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3386__$1);
if(temp__5735__auto__){
var s__3386__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3386__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3386__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3388 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3387 = (0);
while(true){
if((i__3387 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3387);
cljs.core.chunk_append.call(null,b__3388,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)));

var G__3390 = (i__3387 + (1));
i__3387 = G__3390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3388),pucks$worlds$dev$world12$agents_$_iter__3385.call(null,cljs.core.chunk_rest.call(null,s__3386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3388),null);
}
} else {
var x = cljs.core.first.call(null,s__3386__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)),pucks$worlds$dev$world12$agents_$_iter__3385.call(null,cljs.core.rest.call(null,s__3386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(10),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__3380_SHARP_){
return (p1__3380_SHARP_ + (20));
});})(iter__4523__auto__))
,(500))));
})(),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(650),(687)], null)], null)),cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(687)], null)], null)),cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(400)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"AREA-B","AREA-B",-809331693,null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)),cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(600)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"AREA-A","AREA-A",-1527812802,null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.linear.linear),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(500)], null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(650)], null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.startstop.startstop.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null)], null));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.zigzag.zigzag),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null)], null))], null));
});
pucks.worlds.dev.world12.settings = (function pucks$worlds$dev$world12$settings(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1600),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5], null);
});

//# sourceMappingURL=world12.js.map
