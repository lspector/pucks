// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world16');
goog.require('cljs.core');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.active');
goog.require('pucks.agents.mapdonor');
goog.require('pucks.vec2D');
goog.require('pucks.util');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.dev.world16.rand_PLUS__ = (function pucks$worlds$dev$world16$rand_PLUS__(n){
return (cljs.core.rand.call(null,((2) * n)) - n);
});
pucks.worlds.dev.world16.agents = (function pucks$worlds$dev$world16$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world16$agents_$_iter__4241(s__4242){
return (new cljs.core.LazySeq(null,(function (){
var s__4242__$1 = s__4242;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4242__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4242__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world16$agents_$_iter__4241_$_iter__4243(s__4244){
return (new cljs.core.LazySeq(null,((function (s__4242__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4244__$1 = s__4244;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4244__$1);
if(temp__5735__auto____$1){
var s__4244__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4244__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4244__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4246 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4245 = (0);
while(true){
if((i__4245 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4245);
cljs.core.chunk_append.call(null,b__4246,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__4247 = (i__4245 + (1));
i__4245 = G__4247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4246),pucks$worlds$dev$world16$agents_$_iter__4241_$_iter__4243.call(null,cljs.core.chunk_rest.call(null,s__4244__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4246),null);
}
} else {
var y = cljs.core.first.call(null,s__4244__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$dev$world16$agents_$_iter__4241_$_iter__4243.call(null,cljs.core.rest.call(null,s__4244__$2)));
}
} else {
return null;
}
break;
}
});})(s__4242__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4242__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world16$agents_$_iter__4241.call(null,cljs.core.rest.call(null,s__4242__$1)));
} else {
var G__4248 = cljs.core.rest.call(null,s__4242__$1);
s__4242__$1 = G__4248;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(50),(751),(100)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(400)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.mapdonor.mapdonor.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),(function (p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(1),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(function (){var the_map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p));
var vent_on_map = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"vent","vent",-1467857469),the_map));
var sensed_beacon = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"beacon","beacon",830759079),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
var sensed_vent = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"vent","vent",-1467857469),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
if(cljs.core.truth_(sensed_vent)){
return pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(sensed_vent));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = the_map;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = vent_on_map;
if(cljs.core.truth_(and__4120__auto____$1)){
return sensed_beacon;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return pucks.util.relative_position__GT_rotation.call(null,pucks.vec2D._v.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(vent_on_map),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sensed_beacon)));
} else {
return pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p));
}
}
})()], null);
}),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-2)], null)], null))], null));
});
pucks.worlds.dev.world16.settings = (function pucks$worlds$dev$world16$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world16.js.map
