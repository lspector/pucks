// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world4');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world4.agents = (function pucks$worlds$dev$world4$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world4$agents_$_iter__3490(s__3491){
return (new cljs.core.LazySeq(null,(function (){
var s__3491__$1 = s__3491;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3491__$1);
if(temp__5735__auto__){
var s__3491__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3491__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3491__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3493 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3492 = (0);
while(true){
if((i__3492 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3492);
cljs.core.chunk_append.call(null,b__3493,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3498 = (i__3492 + (1));
i__3492 = G__3498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3493),pucks$worlds$dev$world4$agents_$_iter__3490.call(null,cljs.core.chunk_rest.call(null,s__3491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3493),null);
}
} else {
var y = cljs.core.first.call(null,s__3491__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world4$agents_$_iter__3490.call(null,cljs.core.rest.call(null,s__3491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(15),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__3488_SHARP_){
return (p1__3488_SHARP_ + (20));
});})(iter__4523__auto__))
,(100))));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world4$agents_$_iter__3494(s__3495){
return (new cljs.core.LazySeq(null,(function (){
var s__3495__$1 = s__3495;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3495__$1);
if(temp__5735__auto__){
var s__3495__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3495__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3495__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3497 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3496 = (0);
while(true){
if((i__3496 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3496);
cljs.core.chunk_append.call(null,b__3497,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)));

var G__3499 = (i__3496 + (1));
i__3496 = G__3499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3497),pucks$worlds$dev$world4$agents_$_iter__3494.call(null,cljs.core.chunk_rest.call(null,s__3495__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3497),null);
}
} else {
var x = cljs.core.first.call(null,s__3495__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(100)], null)], null)),pucks$worlds$dev$world4$agents_$_iter__3494.call(null,cljs.core.rest.call(null,s__3495__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(16),cljs.core.iterate.call(null,((function (iter__4523__auto__){
return (function (p1__3489_SHARP_){
return (p1__3489_SHARP_ + (20));
});})(iter__4523__auto__))
,(50))));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.linear.linear.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(pucks.globals.pi / (2)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null))], null));
});
pucks.worlds.dev.world4.settings = (function pucks$worlds$dev$world4$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world4.js.map
