// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.shooter');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.shooter.shooter_proposals = (function pucks$agents$shooter$shooter_proposals(p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"fire-torpedo","fire-torpedo",-299372637),(cljs.core.rand_int.call(null,(20)) === (0))], null);
});
pucks.agents.shooter.shooter = (function pucks$agents$shooter$shooter(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"linear","linear",872268697),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.shooter.shooter_proposals,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null)], null));
});

//# sourceMappingURL=shooter.js.map
