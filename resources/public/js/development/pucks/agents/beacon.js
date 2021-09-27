// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.beacon');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.beacon.draw_beacon = (function pucks$agents$beacon$draw_beacon(p){
var vec__3322 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3322,(0),null);
var y = cljs.core.nth.call(null,vec__3322,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3325 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3325,(0),null);
var g = cljs.core.nth.call(null,vec__3325,(1),null);
var b = cljs.core.nth.call(null,vec__3325,(2),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.fill.call(null,r,g,b,(32));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.fill.call(null,(0),(0),(0));

quil.core.text_align.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),(0),(0));

return quil.core.pop_matrix.call(null);
});
pucks.agents.beacon.beacon_proposals = (function pucks$agents$beacon$beacon_proposals(p){
return cljs.core.PersistentArrayMap.EMPTY;
});
pucks.agents.beacon.beacon = (function pucks$agents$beacon$beacon(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"beacon","beacon",830759079),true,new cljs.core.Keyword(null,"solid","solid",-2023773691),false,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(128)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)) - new cljs.core.Keyword(null,"sensor-range","sensor-range",354078975).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings))),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.beacon.draw_beacon,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.beacon.beacon_proposals,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null,"beacon-"),new cljs.core.Keyword(null,"position","position",-2011731912),pucks.util.rand_xy.call(null)], null));
});

//# sourceMappingURL=beacon.js.map
