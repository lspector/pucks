// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.zigzag');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('pucks.agents.active');
pucks.agents.zigzag.leftmost = (pucks.globals.pi / (4));
pucks.agents.zigzag.rightmost = ((3) * (pucks.globals.pi / (4)));
pucks.agents.zigzag.zigzag_proposals = (function pucks$agents$zigzag$zigzag_proposals(p){
var switch_to_right = (new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p) <= pucks.agents.zigzag.leftmost);
var switch_to_left = (new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p) >= pucks.agents.zigzag.rightmost);
var direction = ((((switch_to_right) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turning","turning",-702791588).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"right","right",-452581833))) && ((!(switch_to_left)))))))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(1),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937)))?pucks.agents.zigzag.leftmost:pucks.agents.zigzag.rightmost),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turning","turning",-702791588),direction], null)], null);
});
pucks.agents.zigzag.zigzag = (function pucks$agents$zigzag$zigzag(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zigzag","zigzag",897792479),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.zigzag.zigzag_proposals,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turning","turning",-702791588),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null));
});

//# sourceMappingURL=zigzag.js.map
