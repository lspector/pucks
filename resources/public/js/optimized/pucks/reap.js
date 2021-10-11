// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.reap');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
/**
 * Converts agents with no remaining energy to corpses and eventually
 * removes them from the world.
 */
pucks.reap.reap = (function pucks$reap$reap(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pucks.globals.all_agents,(function (objs){
var with_corpses = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16221_SHARP_){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$mobile.cljs$core$IFn$_invoke$arity$1(p1__16221_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p1__16221_SHARP_) > (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16221_SHARP_,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$corpse,true,cljs.core.cst$kw$solid,false,cljs.core.cst$kw$death_DASH_step,cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(p1__16221_SHARP_),cljs.core.cst$kw$mobile,false,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null),cljs.core.cst$kw$proposal_DASH_function,(function (p){
return cljs.core.PersistentArrayMap.EMPTY;
})], null)], 0));
} else {
return p1__16221_SHARP_;
}
}),objs);
return cljs.core.filterv(((function (with_corpses){
return (function (p1__16222_SHARP_){
return cljs.core.not((function (){var and__4120__auto__ = cljs.core.cst$kw$corpse.cljs$core$IFn$_invoke$arity$1(p1__16222_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(p1__16222_SHARP_) > (cljs.core.cst$kw$death_DASH_step.cljs$core$IFn$_invoke$arity$1(p1__16222_SHARP_) + (30)));
} else {
return and__4120__auto__;
}
})());
});})(with_corpses))
,with_corpses);
}));
});
