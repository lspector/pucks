// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world8');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('pucks.util');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world8.agents = (function pucks$worlds$dev$world8$agents(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.linear.linear.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.globals.half_pi,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thing","thing",270525715)], null),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"transfer","transfer",327423400),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world8$agents_$_iter__7263(s__7264){
return (new cljs.core.LazySeq(null,(function (){
var s__7264__$1 = s__7264;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7264__$1);
if(temp__5735__auto__){
var s__7264__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7264__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7264__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7266 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7265 = (0);
while(true){
if((i__7265 < size__4522__auto__)){
var anyone = cljs.core._nth.call(null,c__4521__auto__,i__7265);
cljs.core.chunk_append.call(null,b__7266,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"thing","thing",270525715)], null),new cljs.core.Keyword(null,"ask","ask",707712414),((function (i__7265,anyone,c__4521__auto__,size__4522__auto__,b__7266,s__7264__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
return new cljs.core.Keyword(null,"secret","secret",618547054).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(your_bid));
});})(i__7265,anyone,c__4521__auto__,size__4522__auto__,b__7266,s__7264__$2,temp__5735__auto__))
], null));

var G__7271 = (i__7265 + (1));
i__7265 = G__7271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7266),pucks$worlds$dev$world8$agents_$_iter__7263.call(null,cljs.core.chunk_rest.call(null,s__7264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7266),null);
}
} else {
var anyone = cljs.core.first.call(null,s__7264__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"thing","thing",270525715)], null),new cljs.core.Keyword(null,"ask","ask",707712414),((function (anyone,s__7264__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
return new cljs.core.Keyword(null,"secret","secret",618547054).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(your_bid));
});})(anyone,s__7264__$2,temp__5735__auto__))
], null),pucks$worlds$dev$world8$agents_$_iter__7263.call(null,cljs.core.rest.call(null,s__7264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p));
})()], null);
})], null)),cljs.core.merge.call(null,pucks.agents.linear.linear.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(700)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secret","secret",618547054),new cljs.core.Keyword(null,"foo","foo",1268894036)], null),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),(function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"transfer","transfer",327423400),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world8$agents_$_iter__7267(s__7268){
return (new cljs.core.LazySeq(null,(function (){
var s__7268__$1 = s__7268;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7268__$1);
if(temp__5735__auto__){
var s__7268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7268__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7268__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7270 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7269 = (0);
while(true){
if((i__7269 < size__4522__auto__)){
var anyone = cljs.core._nth.call(null,c__4521__auto__,i__7269);
cljs.core.chunk_append.call(null,b__7270,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secret","secret",618547054),new cljs.core.Keyword(null,"secret","secret",618547054).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"thing","thing",270525715)], null)], null));

var G__7272 = (i__7269 + (1));
i__7269 = G__7272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7270),pucks$worlds$dev$world8$agents_$_iter__7267.call(null,cljs.core.chunk_rest.call(null,s__7268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7270),null);
}
} else {
var anyone = cljs.core.first.call(null,s__7268__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secret","secret",618547054),new cljs.core.Keyword(null,"secret","secret",618547054).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p))], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"thing","thing",270525715)], null)], null),pucks$worlds$dev$world8$agents_$_iter__7267.call(null,cljs.core.rest.call(null,s__7268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p));
})()], null);
})], null))], null);
});
pucks.worlds.dev.world8.settings = (function pucks$worlds$dev$world8$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world8.js.map
