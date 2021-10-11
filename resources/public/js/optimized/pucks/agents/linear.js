// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.linear');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.linear.linear_proposals = (function pucks$agents$linear$linear_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$acceleration,(0),cljs.core.cst$kw$rotation,pucks.util.relative_position__GT_rotation(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))], null);
});
pucks.agents.linear.linear = (function pucks$agents$linear$linear(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$linear,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.linear.linear_proposals,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null)], null)], 0));
});
