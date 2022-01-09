// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.sensors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.util');
pucks.sensors.sense = (function pucks$sensors$sense(p){

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$sensed,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13624_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13624_SHARP_,cljs.core.cst$kw$neighbors,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$overlaps,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$memory,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$inventory,cljs.core.PersistentVector.EMPTY);
}),cljs.core.filterv((function (p1__13625_SHARP_){
var and__4120__auto__ = (function (){var angular_difference = (function (){var G__13627 = (cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p) - pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p1__13625_SHARP_)));
return Math.abs(G__13627);
})();
return (((angular_difference <= pucks.globals.half_pi)) || ((angular_difference >= (pucks.globals.pi + pucks.globals.half_pi))));
})();
if(and__4120__auto__){
return ((pucks.vec2D.length(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p1__13625_SHARP_)) - cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p1__13625_SHARP_)) <= cljs.core.cst$kw$sensor_DASH_range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)));
} else {
return and__4120__auto__;
}
}),cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(p))));
});
/**
 * Annotates all agents with the other agents that they can sense, as the value
 * for the :sensed key.
 */
pucks.sensors.run_sensors = (function pucks$sensors$run_sensors(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pucks.globals.all_agents,(function (objs){
return pucks.util.pmapallv(pucks.sensors.sense,objs);
}));
});
