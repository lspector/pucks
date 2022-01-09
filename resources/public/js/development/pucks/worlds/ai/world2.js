// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world2');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.globals');
pucks.worlds.ai.world2.agents = (function pucks$worlds$ai$world2$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world2$agents_$_iter__7744(s__7745){
return (new cljs.core.LazySeq(null,(function (){
var s__7745__$1 = s__7745;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7745__$1);
if(temp__5735__auto__){
var s__7745__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7745__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7745__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7747 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7746 = (0);
while(true){
if((i__7746 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7746);
cljs.core.chunk_append.call(null,b__7747,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__7748 = (i__7746 + (1));
i__7746 = G__7748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7747),pucks$worlds$ai$world2$agents_$_iter__7744.call(null,cljs.core.chunk_rest.call(null,s__7745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7747),null);
}
} else {
var y = cljs.core.first.call(null,s__7745__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$ai$world2$agents_$_iter__7744.call(null,cljs.core.rest.call(null,s__7745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(20),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__7743_SHARP_){
return (p1__7743_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(300)], null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null)], null)),cljs.core.merge.call(null,pucks.agents.user.user.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(300)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(pucks.globals.pi / (2)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,(0)], null)], null))], null));
});
pucks.worlds.ai.world2.settings = (function pucks$worlds$ai$world2$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world2.js.map
