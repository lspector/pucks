// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world18');
goog.require('cljs.core');
goog.require('pucks.agents.swarmer');
goog.require('pucks.agents.nursery');
pucks.worlds.dev.world18.agents = (function pucks$worlds$dev$world18$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world18$agents_$_iter__3454(s__3455){
return (new cljs.core.LazySeq(null,(function (){
var s__3455__$1 = s__3455;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3455__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3455__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world18$agents_$_iter__3454_$_iter__3456(s__3457){
return (new cljs.core.LazySeq(null,((function (s__3455__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3457__$1 = s__3457;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3457__$1);
if(temp__5735__auto____$1){
var s__3457__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3457__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3457__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3459 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3458 = (0);
while(true){
if((i__3458 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3458);
cljs.core.chunk_append.call(null,b__3459,cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__3460 = (i__3458 + (1));
i__3458 = G__3460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3459),pucks$worlds$dev$world18$agents_$_iter__3454_$_iter__3456.call(null,cljs.core.chunk_rest.call(null,s__3457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3459),null);
}
} else {
var y = cljs.core.first.call(null,s__3457__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world18$agents_$_iter__3454_$_iter__3456.call(null,cljs.core.rest.call(null,s__3457__$2)));
}
} else {
return null;
}
break;
}
});})(s__3455__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3455__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1800),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world18$agents_$_iter__3454.call(null,cljs.core.rest.call(null,s__3455__$1)));
} else {
var G__3461 = cljs.core.rest.call(null,s__3455__$1);
s__3455__$1 = G__3461;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(1800),(200)));
})());
});
pucks.worlds.dev.world18.settings = (function pucks$worlds$dev$world18$settings(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1800),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744),(100),new cljs.core.Keyword(null,"ms-limit","ms-limit",-1908703534),(60000)], null);
});

//# sourceMappingURL=world18.js.map
