// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.stone');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.stone.draw_stone = (function pucks$agents$stone$draw_stone(p){
var vec__3332 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3332,(0),null);
var y = cljs.core.nth.call(null,vec__3332,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3335 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3335,(0),null);
var g = cljs.core.nth.call(null,vec__3335,(1),null);
var b = cljs.core.nth.call(null,vec__3335,(2),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.fill.call(null,r,g,b,(128));

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.fill.call(null,r,g,b,(16));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

return quil.core.pop_matrix.call(null);
});
pucks.agents.stone.stone_proposals = (function pucks$agents$stone$stone_proposals(p){
return cljs.core.PersistentArrayMap.EMPTY;
});
pucks.agents.stone.stone = (function pucks$agents$stone$stone(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stone","stone",-59276120),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(40),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.stone.draw_stone,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.stone.stone_proposals], null));
});

//# sourceMappingURL=stone.js.map
