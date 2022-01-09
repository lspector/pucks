// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world1');
goog.require('cljs.core');
goog.require('pucks.agents.shooter');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.swarmer');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world1.agents = (function pucks$worlds$dev$world1$agents(){
return cljs.core.concat.call(null,cljs.core.repeatedly.call(null,(10),pucks.agents.stone.stone),cljs.core.repeatedly.call(null,(10),pucks.agents.vent.vent),cljs.core.repeatedly.call(null,(5),pucks.agents.zapper.zapper),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.linear.linear.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"something","something",295416317)], null)], null));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.swarmer.swarmer.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"something","something",295416317),new cljs.core.Keyword(null,"rembered","rembered",-1022994603)], null)], null));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
if((cljs.core.rand_int.call(null,(2)) === (0))){
return pucks.agents.linear.linear.call(null);
} else {
return pucks.agents.shooter.shooter.call(null);
}
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer)], null),cljs.core.repeatedly.call(null,(2),pucks.agents.beacon.beacon));
});
pucks.worlds.dev.world1.settings = (function pucks$worlds$dev$world1$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world1.js.map
