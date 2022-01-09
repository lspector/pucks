// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.stone');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.stone.draw_stone = (function pucks$agents$stone$draw_stone(p){
var vec__13355 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13355,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13355,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13358 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13358,(2),null);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(128));

quil.core.ellipse((0),(0),radius,radius);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(16));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

return quil.core.pop_matrix();
});
pucks.agents.stone.stone_proposals = (function pucks$agents$stone$stone_proposals(p){
return cljs.core.PersistentArrayMap.EMPTY;
});
pucks.agents.stone.stone = (function pucks$agents$stone$stone(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$stone,true,cljs.core.cst$kw$radius,(40),cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.cst$kw$draw_DASH_function,pucks.agents.stone.draw_stone,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.stone.stone_proposals], null)], 0));
});
