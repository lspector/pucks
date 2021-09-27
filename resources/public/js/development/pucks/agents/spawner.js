// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.spawner');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.agents.active');
pucks.agents.spawner.spawner_proposals = (function pucks$agents$spawner$spawner_proposals(p){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p))], null),(((cljs.core.rand_int.call(null,(250)) === (0)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620).cljs$core$IFn$_invoke$arity$1(p).call(null,p)], null)], null):cljs.core.PersistentArrayMap.EMPTY));
});
pucks.agents.spawner.spawner = (function pucks$agents$spawner$spawner(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spawner","spawner",804504391),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.spawner.spawner_proposals,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(255)], null),new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620),(function (p1__4072_SHARP_){
return cljs.core.merge.call(null,p1__4072_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.call(null) - 0.5)),((5) * (cljs.core.rand.call(null) - 0.5))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(pucks.globals.two_pi * cljs.core.rand.call(null)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(3)) - (1)),(cljs.core.rand_int.call(null,(3)) - (1))], null)], null));
})], null));
});

//# sourceMappingURL=spawner.js.map
