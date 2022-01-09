// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world14');
goog.require('cljs.core');
goog.require('pucks.agents.spawner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world14.agents = (function pucks$worlds$dev$world14$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world14$agents_$_iter__7856(s__7857){
return (new cljs.core.LazySeq(null,(function (){
var s__7857__$1 = s__7857;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7857__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7857__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world14$agents_$_iter__7856_$_iter__7858(s__7859){
return (new cljs.core.LazySeq(null,((function (s__7857__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7859__$1 = s__7859;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7859__$1);
if(temp__5735__auto____$1){
var s__7859__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7859__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7859__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7861 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7860 = (0);
while(true){
if((i__7860 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7860);
cljs.core.chunk_append.call(null,b__7861,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__7862 = (i__7860 + (1));
i__7860 = G__7862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7861),pucks$worlds$dev$world14$agents_$_iter__7856_$_iter__7858.call(null,cljs.core.chunk_rest.call(null,s__7859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7861),null);
}
} else {
var y = cljs.core.first.call(null,s__7859__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world14$agents_$_iter__7856_$_iter__7858.call(null,cljs.core.rest.call(null,s__7859__$2)));
}
} else {
return null;
}
break;
}
});})(s__7857__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7857__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1901),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world14$agents_$_iter__7856.call(null,cljs.core.rest.call(null,s__7857__$1)));
} else {
var G__7863 = cljs.core.rest.call(null,s__7857__$1);
s__7857__$1 = G__7863;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(1901),(200)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.spawner.spawner),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(1000)], null))], null)));
});
pucks.worlds.dev.world14.settings = (function pucks$worlds$dev$world14$settings(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(2000),new cljs.core.Keyword(null,"scale","scale",-230427353),0.4,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),(10)], null);
});

//# sourceMappingURL=world14.js.map
