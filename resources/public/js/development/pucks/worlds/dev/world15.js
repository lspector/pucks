// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world15');
goog.require('cljs.core');
goog.require('pucks.agents.swarmevolver');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world15.agents = (function pucks$worlds$dev$world15$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world15$agents_$_iter__3478(s__3479){
return (new cljs.core.LazySeq(null,(function (){
var s__3479__$1 = s__3479;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3479__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3479__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world15$agents_$_iter__3478_$_iter__3480(s__3481){
return (new cljs.core.LazySeq(null,((function (s__3479__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3481__$1 = s__3481;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3481__$1);
if(temp__5735__auto____$1){
var s__3481__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3481__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3481__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3483 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3482 = (0);
while(true){
if((i__3482 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3482);
cljs.core.chunk_append.call(null,b__3483,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__3484 = (i__3482 + (1));
i__3482 = G__3484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3483),pucks$worlds$dev$world15$agents_$_iter__3478_$_iter__3480.call(null,cljs.core.chunk_rest.call(null,s__3481__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3483),null);
}
} else {
var y = cljs.core.first.call(null,s__3481__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world15$agents_$_iter__3478_$_iter__3480.call(null,cljs.core.rest.call(null,s__3481__$2)));
}
} else {
return null;
}
break;
}
});})(s__3479__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3479__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1200),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world15$agents_$_iter__3478.call(null,cljs.core.rest.call(null,s__3479__$1)));
} else {
var G__3485 = cljs.core.rest.call(null,s__3479__$1);
s__3479__$1 = G__3485;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(1200),(200)));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(450)], null)),cljs.core.assoc.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(450),(600)], null)),cljs.core.assoc.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(600)], null)),cljs.core.assoc.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(750)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.swarmevolver.swarmevolver),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null))], null)));
});
pucks.worlds.dev.world15.settings = (function pucks$worlds$dev$world15$settings(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1200),new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),(5),new cljs.core.Keyword(null,"max-velocity","max-velocity",-1012892068),(40),new cljs.core.Keyword(null,"torpedo-energy","torpedo-energy",290470477),0.02], null);
});

//# sourceMappingURL=world15.js.map
