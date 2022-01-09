// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world19');
goog.require('cljs.core');
goog.require('pucks.agents.active');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.vec2D');
goog.require('pucks.util');
goog.require('pucks.globals');
pucks.worlds.dev.world19.agents = (function pucks$worlds$dev$world19$agents(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.vent.vent.call(null),pucks.agents.vent.vent.call(null),pucks.agents.vent.vent.call(null),pucks.agents.vent.vent.call(null),pucks.agents.vent.vent.call(null),pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.rand.call(null,pucks.globals.two_pi),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.call(null,4.0) - 2.0),(cljs.core.rand.call(null,4.0) - 2.0)], null),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(cljs.core.rand.call(null,0.2) - 0.1),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,pucks.vec2D._PLUS_v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.call(null,0.2) - 0.1),(cljs.core.rand.call(null,0.2) - 0.1)], null),pucks.util.rotation__GT_relative_position.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p)))),new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world19$agents_$_iter__6814(s__6815){
return (new cljs.core.LazySeq(null,(function (){
var s__6815__$1 = s__6815;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6815__$1);
if(temp__5735__auto__){
var s__6815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6815__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6815__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6817 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6816 = (0);
while(true){
if((i__6816 < size__4522__auto__)){
var anyone = cljs.core._nth.call(null,c__4521__auto__,i__6816);
cljs.core.chunk_append.call(null,b__6817,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone)], null)], null));

var G__6822 = (i__6816 + (1));
i__6816 = G__6822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6817),pucks$worlds$dev$world19$agents_$_iter__6814.call(null,cljs.core.chunk_rest.call(null,s__6815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6817),null);
}
} else {
var anyone = cljs.core.first.call(null,s__6815__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone)], null)], null),pucks$worlds$dev$world19$agents_$_iter__6814.call(null,cljs.core.rest.call(null,s__6815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world19$agents_$_iter__6818(s__6819){
return (new cljs.core.LazySeq(null,(function (){
var s__6819__$1 = s__6819;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6819__$1);
if(temp__5735__auto__){
var s__6819__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6819__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6819__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6821 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6820 = (0);
while(true){
if((i__6820 < size__4522__auto__)){
var weaker = cljs.core._nth.call(null,c__4521__auto__,i__6820);
cljs.core.chunk_append.call(null,b__6821,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null));

var G__6823 = (i__6820 + (1));
i__6820 = G__6823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6821),pucks$worlds$dev$world19$agents_$_iter__6818.call(null,cljs.core.chunk_rest.call(null,s__6819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6821),null);
}
} else {
var weaker = cljs.core.first.call(null,s__6819__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null),pucks$worlds$dev$world19$agents_$_iter__6818.call(null,cljs.core.rest.call(null,s__6819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__){
return (function (p1__6813_SHARP_){
return (new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p1__6813_SHARP_) < new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p))));
})())], null);
})], null));
}))], null);
});
pucks.worlds.dev.world19.settings = (function pucks$worlds$dev$world19$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world19.js.map
