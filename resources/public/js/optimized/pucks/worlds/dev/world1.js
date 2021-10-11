// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.worlds.dev.world1');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.agents.shooter');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.swarmer');
goog.require('pucks.agents.linear');
pucks.worlds.dev.world1.agents = (function pucks$worlds$dev$world1$agents(){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((10),pucks.agents.stone.stone),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((10),pucks.agents.vent.vent),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((5),pucks.agents.zapper.zapper),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.linear.linear(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$something], null)], null)], 0));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery((function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.swarmer.swarmer(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$something,cljs.core.cst$kw$rembered], null)], null)], 0));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery((function (){
if((cljs.core.rand_int((2)) === (0))){
return pucks.agents.linear.linear();
} else {
return pucks.agents.shooter.shooter();
}
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery(pucks.agents.swarmer.swarmer)], null),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),pucks.agents.beacon.beacon)], 0));
});
pucks.worlds.dev.world1.settings = (function pucks$worlds$dev$world1$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});
