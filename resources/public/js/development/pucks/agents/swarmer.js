// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.swarmer');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
pucks.agents.swarmer.rand_direction = (function pucks$agents$swarmer$rand_direction(){
return pucks.util.rotation__GT_relative_position.call(null,(cljs.core.rand.call(null,pucks.globals.two_pi) - pucks.globals.pi));
});
pucks.agents.swarmer.swarmer_proposals = (function pucks$agents$swarmer$swarmer_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(1),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,pucks.vec2D._PLUS_v.call(null,((cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p))))?pucks.util.rotation__GT_relative_position.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p))))),pucks.agents.swarmer.rand_direction.call(null)))], null);
});
pucks.agents.swarmer.swarmer = (function pucks$agents$swarmer$swarmer(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swarmer","swarmer",727916998),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.swarmer.swarmer_proposals], null));
});

//# sourceMappingURL=swarmer.js.map
