// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world6');
goog.require('cljs.core');
goog.require('pucks.agents.zigzag');
goog.require('pucks.agents.startstop');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.linear');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.swarmer');
goog.require('pucks.agents.beacon');
pucks.worlds.dev.world6.agents = (function pucks$worlds$dev$world6$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world6$agents_$_iter__3768(s__3769){
return (new cljs.core.LazySeq(null,(function (){
var s__3769__$1 = s__3769;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3769__$1);
if(temp__5735__auto__){
var s__3769__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3769__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3769__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3771 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3770 = (0);
while(true){
if((i__3770 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3770);
cljs.core.chunk_append.call(null,b__3771,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3776 = (i__3770 + (1));
i__3770 = G__3776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3771),pucks$worlds$dev$world6$agents_$_iter__3768.call(null,cljs.core.chunk_rest.call(null,s__3769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3771),null);
}
} else {
var y = cljs.core.first.call(null,s__3769__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world6$agents_$_iter__3768.call(null,cljs.core.rest.call(null,s__3769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(15),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__3766_SHARP_){
return (p1__3766_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world6$agents_$_iter__3772(s__3773){
return (new cljs.core.LazySeq(null,(function (){
var s__3773__$1 = s__3773;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3773__$1);
if(temp__5735__auto__){
var s__3773__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3773__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3773__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3775 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3774 = (0);
while(true){
if((i__3774 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3774);
cljs.core.chunk_append.call(null,b__3775,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)));

var G__3777 = (i__3774 + (1));
i__3774 = G__3777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3775),pucks$worlds$dev$world6$agents_$_iter__3772.call(null,cljs.core.chunk_rest.call(null,s__3773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3775),null);
}
} else {
var x = cljs.core.first.call(null,s__3773__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)),pucks$worlds$dev$world6$agents_$_iter__3772.call(null,cljs.core.rest.call(null,s__3773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(10),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__3767_SHARP_){
return (p1__3767_SHARP_ + (20));
});})(iter__4523__auto__))
,(500))));
})(),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(650),(687)], null)], null)),cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(687)], null)], null)),cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(400)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"AREA-B","AREA-B",-809331693,null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null)),cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(600)], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"AREA-A","AREA-A",-1527812802,null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.linear.linear),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(500)], null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(650)], null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.startstop.startstop.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null)], null));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null)),cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.zigzag.zigzag),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null)], null))], null));
});
pucks.worlds.dev.world6.settings = (function pucks$worlds$dev$world6$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world6.js.map
