// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.startstop');
goog.require('cljs.core');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
pucks.agents.startstop.startstop_proposals = (function pucks$agents$startstop$startstop_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(((cljs.core.mod.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p),(50)) < (25)))?(1):(0.25 * (- pucks.vec2D.length.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)))))], null);
});
pucks.agents.startstop.startstop = (function pucks$agents$startstop$startstop(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"startstop","startstop",1058765070),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.startstop.startstop_proposals,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(96),(255),(96)], null)], null));
});

//# sourceMappingURL=startstop.js.map
