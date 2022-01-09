// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.swarmer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
pucks.agents.swarmer.rand_direction = (function pucks$agents$swarmer$rand_direction(){
return pucks.util.rotation__GT_relative_position((cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi) - pucks.globals.pi));
});
pucks.agents.swarmer.swarmer_proposals = (function pucks$agents$swarmer$swarmer_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p))))?pucks.util.rotation__GT_relative_position(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p)):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p))))),pucks.agents.swarmer.rand_direction()], 0)))], null);
});
pucks.agents.swarmer.swarmer = (function pucks$agents$swarmer$swarmer(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$swarmer,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.swarmer.swarmer_proposals], null)], 0));
});
