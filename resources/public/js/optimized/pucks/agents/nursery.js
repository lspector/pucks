// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.nursery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.nursery.draw_nursery = (function pucks$agents$nursery$draw_nursery(p){
var vec__13481 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13484 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13484,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13484,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13484,(2),null);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(100));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

quil.core.ellipse((0),(0),radius,radius);

quil.core.fill.cljs$core$IFn$_invoke$arity$4((32),(32),(32),(196));

if((cljs.core.deref(pucks.globals.number_of_active_agents) >= cljs.core.cst$kw$nursery_DASH_threshold.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)))){
quil.core.ellipse((0),(0),(0.8 * radius),(0.8 * radius));
} else {
}

return quil.core.pop_matrix();
});
pucks.agents.nursery.nursery_proposals = (function pucks$agents$nursery$nursery_proposals(p){
if((((cljs.core.deref(pucks.globals.number_of_active_agents) < cljs.core.cst$kw$nursery_DASH_threshold.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)))) && ((cljs.core.rand_int((50)) === (0))))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spawn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var fexpr__13487 = cljs.core.cst$kw$spawn_DASH_function.cljs$core$IFn$_invoke$arity$1(p);
return (fexpr__13487.cljs$core$IFn$_invoke$arity$0 ? fexpr__13487.cljs$core$IFn$_invoke$arity$0() : fexpr__13487.call(null));
})(),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int((3)) - (1)),(cljs.core.rand_int((3)) - (1))], null))], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
pucks.agents.nursery.nursery = (function pucks$agents$nursery$nursery(spawn_function){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$nursery,true,cljs.core.cst$kw$radius,(50),cljs.core.cst$kw$draw_DASH_function,pucks.agents.nursery.draw_nursery,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(0),(0)], null),cljs.core.cst$kw$proposal_DASH_function,pucks.agents.nursery.nursery_proposals,cljs.core.cst$kw$spawn_DASH_function,spawn_function], null)], 0));
});
