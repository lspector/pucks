// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world21');
goog.require('cljs.core');
goog.require('pucks.agents.spanner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world21.agents = (function pucks$worlds$dev$world21$agents(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100)], null)),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300)], null)),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(100)], null)),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null)),cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.spanner.spanner),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null))], null);
});
pucks.worlds.dev.world21.agents = (function pucks$worlds$dev$world21$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world21$agents_$_iter__4075(s__4076){
return (new cljs.core.LazySeq(null,(function (){
var s__4076__$1 = s__4076;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4076__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4076__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world21$agents_$_iter__4075_$_iter__4077(s__4078){
return (new cljs.core.LazySeq(null,((function (s__4076__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4078__$1 = s__4078;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4078__$1);
if(temp__5735__auto____$1){
var s__4078__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4078__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4078__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4080 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4079 = (0);
while(true){
if((i__4079 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4079);
cljs.core.chunk_append.call(null,b__4080,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));

var G__4081 = (i__4079 + (1));
i__4079 = G__4081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4080),pucks$worlds$dev$world21$agents_$_iter__4075_$_iter__4077.call(null,cljs.core.chunk_rest.call(null,s__4078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4080),null);
}
} else {
var y = cljs.core.first.call(null,s__4078__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pucks$worlds$dev$world21$agents_$_iter__4075_$_iter__4077.call(null,cljs.core.rest.call(null,s__4078__$2)));
}
} else {
return null;
}
break;
}
});})(s__4076__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4076__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(600),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world21$agents_$_iter__4075.call(null,cljs.core.rest.call(null,s__4076__$1)));
} else {
var G__4082 = cljs.core.rest.call(null,s__4076__$1);
s__4076__$1 = G__4082;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(600),(200)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.spanner.spanner),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null))], null)));
});
pucks.worlds.dev.world21.settings = (function pucks$worlds$dev$world21$settings(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(400),new cljs.core.Keyword(null,"scale","scale",-230427353),1.5,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),(25),new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744),(150),new cljs.core.Keyword(null,"max-velocity","max-velocity",-1012892068),(40),new cljs.core.Keyword(null,"cost-of-living","cost-of-living",-336787505),1.0E-4,new cljs.core.Keyword(null,"cost-of-collision","cost-of-collision",1056331992),0.01], null);
});

//# sourceMappingURL=world21.js.map
