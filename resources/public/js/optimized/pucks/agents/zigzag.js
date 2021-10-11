// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.zigzag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('pucks.agents.active');
pucks.agents.zigzag.leftmost = (pucks.globals.pi / (4));
pucks.agents.zigzag.rightmost = ((3) * (pucks.globals.pi / (4)));
pucks.agents.zigzag.zigzag_proposals = (function pucks$agents$zigzag$zigzag_proposals(p){
var switch_to_right = (cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p) <= pucks.agents.zigzag.leftmost);
var switch_to_left = (cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p) >= pucks.agents.zigzag.rightmost);
var direction = ((((switch_to_right) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$turning.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)),cljs.core.cst$kw$right)) && ((!(switch_to_left)))))))?cljs.core.cst$kw$right:cljs.core.cst$kw$left);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$acceleration,(1),cljs.core.cst$kw$rotation,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,cljs.core.cst$kw$left))?pucks.agents.zigzag.leftmost:pucks.agents.zigzag.rightmost),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$turning,direction], null)], null);
});
pucks.agents.zigzag.zigzag = (function pucks$agents$zigzag$zigzag(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$zigzag,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.zigzag.zigzag_proposals,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$turning,cljs.core.cst$kw$left], null)], null)], 0));
});
