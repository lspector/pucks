// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.generic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.util');
pucks.agents.generic.generic = (function pucks$agents$generic$generic(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rotation,cljs.core.cst$kw$proposal_DASH_function,cljs.core.cst$kw$color,cljs.core.cst$kw$solid,cljs.core.cst$kw$steps,cljs.core.cst$kw$memory,cljs.core.cst$kw$energy,cljs.core.cst$kw$radius,cljs.core.cst$kw$thrust_DASH_angle,cljs.core.cst$kw$inventory,cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$draw_DASH_function,cljs.core.cst$kw$spawn_DASH_function,cljs.core.cst$kw$overlaps,cljs.core.cst$kw$id,cljs.core.cst$kw$position,cljs.core.cst$kw$neighbors,cljs.core.cst$kw$mobile,cljs.core.cst$kw$velocity],[(pucks.globals.two_pi * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),(function (p){
return cljs.core.PersistentArrayMap.EMPTY;
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),true,(0),cljs.core.PersistentArrayMap.EMPTY,(1),(20),(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(function (p){
return false;
}),(function (p){
return cljs.core.PersistentArrayMap.EMPTY;
}),cljs.core.PersistentVector.EMPTY,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("puck-"),pucks.util.rand_xy(),cljs.core.PersistentVector.EMPTY,false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),((5) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null)]);
});
