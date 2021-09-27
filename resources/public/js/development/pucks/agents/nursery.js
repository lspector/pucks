// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.nursery');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.nursery.draw_nursery = (function pucks$agents$nursery$draw_nursery(p){
var vec__3340 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3340,(0),null);
var y = cljs.core.nth.call(null,vec__3340,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3343 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3343,(0),null);
var g = cljs.core.nth.call(null,vec__3343,(1),null);
var b = cljs.core.nth.call(null,vec__3343,(2),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.rotate.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.call(null,r,g,b,(100));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.fill.call(null,(32),(32),(32),(196));

if((cljs.core.deref.call(null,pucks.globals.number_of_active_agents) >= new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)))){
quil.core.ellipse.call(null,(0),(0),(0.8 * radius),(0.8 * radius));
} else {
}

return quil.core.pop_matrix.call(null);
});
pucks.agents.nursery.nursery_proposals = (function pucks$agents$nursery$nursery_proposals(p){
if((((cljs.core.deref.call(null,pucks.globals.number_of_active_agents) < new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)))) && ((cljs.core.rand_int.call(null,(50)) === (0))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620).cljs$core$IFn$_invoke$arity$1(p).call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(3)) - (1)),(cljs.core.rand_int.call(null,(3)) - (1))], null))], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
pucks.agents.nursery.nursery = (function pucks$agents$nursery$nursery(spawn_function){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nursery","nursery",813370890),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.nursery.draw_nursery,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(0),(0)], null),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.nursery.nursery_proposals,new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620),spawn_function], null));
});

//# sourceMappingURL=nursery.js.map
