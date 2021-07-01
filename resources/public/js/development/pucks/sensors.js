// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.sensors');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.util');
pucks.sensors.sense = (function pucks$sensors$sense(p){

return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"sensed","sensed",1518013926),cljs.core.mapv.call(null,(function (p1__3762_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,p1__3762_SHARP_,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"inventory","inventory",860201871),cljs.core.PersistentVector.EMPTY);
}),cljs.core.filterv.call(null,(function (p1__3763_SHARP_){
var and__4120__auto__ = (function (){var angular_difference = Math.abs((new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p) - pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__3763_SHARP_))));
return (((angular_difference <= pucks.globals.half_pi)) || ((angular_difference >= (pucks.globals.pi + pucks.globals.half_pi))));
})();
if(and__4120__auto__){
return ((pucks.vec2D.length.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__3763_SHARP_)) - new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p1__3763_SHARP_)) <= new cljs.core.Keyword(null,"sensor-range","sensor-range",354078975).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)));
} else {
return and__4120__auto__;
}
}),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(p))));
});
/**
 * Annotates all agents with the other agents that they can sense, as the value
 * for the :sensed key.
 */
pucks.sensors.run_sensors = (function pucks$sensors$run_sensors(){
return cljs.core.swap_BANG_.call(null,pucks.globals.all_agents,(function (objs){
return pucks.util.pmapallv.call(null,pucks.sensors.sense,objs);
}));
});

//# sourceMappingURL=sensors.js.map
