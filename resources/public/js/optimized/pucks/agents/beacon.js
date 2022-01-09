// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.beacon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.beacon.draw_beacon = (function pucks$agents$beacon$draw_beacon(p){
var vec__13471 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13474 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13474,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13474,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13474,(2),null);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(32));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

quil.core.ellipse((0),(0),radius,radius);

quil.core.fill.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.text_align.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$center);

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)),(0),(0));

return quil.core.pop_matrix();
});
pucks.agents.beacon.beacon_proposals = (function pucks$agents$beacon$beacon_proposals(p){
return cljs.core.PersistentArrayMap.EMPTY;
});
pucks.agents.beacon.beacon = (function pucks$agents$beacon$beacon(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$beacon,true,cljs.core.cst$kw$solid,false,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(128)], null),cljs.core.cst$kw$radius,(cljs.core.cst$kw$neighborhood_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)) - cljs.core.cst$kw$sensor_DASH_range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings))),cljs.core.cst$kw$draw_DASH_function,pucks.agents.beacon.draw_beacon,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.beacon.beacon_proposals,cljs.core.cst$kw$id,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("beacon-"),cljs.core.cst$kw$position,pucks.util.rand_xy()], null)], 0));
});
