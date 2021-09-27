// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world20');
goog.require('cljs.core');
goog.require('pucks.agents.bondevolver');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world20.agents = (function pucks$worlds$dev$world20$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world20$agents_$_iter__4494(s__4495){
return (new cljs.core.LazySeq(null,(function (){
var s__4495__$1 = s__4495;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4495__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4495__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world20$agents_$_iter__4494_$_iter__4496(s__4497){
return (new cljs.core.LazySeq(null,((function (s__4495__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4497__$1 = s__4497;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4497__$1);
if(temp__5735__auto____$1){
var s__4497__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4497__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4497__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4499 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4498 = (0);
while(true){
if((i__4498 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4498);
cljs.core.chunk_append.call(null,b__4499,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__4500 = (i__4498 + (1));
i__4498 = G__4500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4499),pucks$worlds$dev$world20$agents_$_iter__4494_$_iter__4496.call(null,cljs.core.chunk_rest.call(null,s__4497__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4499),null);
}
} else {
var y = cljs.core.first.call(null,s__4497__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world20$agents_$_iter__4494_$_iter__4496.call(null,cljs.core.rest.call(null,s__4497__$2)));
}
} else {
return null;
}
break;
}
});})(s__4495__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4495__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1200),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world20$agents_$_iter__4494.call(null,cljs.core.rest.call(null,s__4495__$1)));
} else {
var G__4501 = cljs.core.rest.call(null,s__4495__$1);
s__4495__$1 = G__4501;
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
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.bondevolver.bondevolver),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null))], null)));
});
pucks.worlds.dev.world20.settings = (function pucks$worlds$dev$world20$settings(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1200),new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),(5),new cljs.core.Keyword(null,"max-velocity","max-velocity",-1012892068),(40)], null);
});

//# sourceMappingURL=world20.js.map
