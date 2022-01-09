// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.gate');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.gate.draw_gate = (function pucks$agents$gate$draw_gate(p){
var vec__13563 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13566 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13566,(2),null);
var half_radius = (radius / (2));
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(16));

quil.core.stroke_weight((5));

if((cljs.core.cst$kw$open.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)) > (0))){
} else {
quil.core.stroke.cljs$core$IFn$_invoke$arity$4(r,g,b,(255));
}

quil.core.ellipse((0),(0),radius,radius);

quil.core.no_stroke();

quil.core.push_matrix();

quil.core.rotate.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(pucks.globals.iteration) / pucks.globals.two_pi));

quil.core.stroke_weight((5));

quil.core.stroke.cljs$core$IFn$_invoke$arity$4(r,g,b,(64));

quil.core.line.cljs$core$IFn$_invoke$arity$4((- half_radius),(0),half_radius,(0));

quil.core.line.cljs$core$IFn$_invoke$arity$4((0),half_radius,(0),(- half_radius));

quil.core.no_stroke();

quil.core.pop_matrix();

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.ellipse((0),(0),(radius * 0.2),(radius * 0.2));
}

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(16));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

return quil.core.pop_matrix();
});
pucks.agents.gate.gate_proposals = (function pucks$agents$gate$gate_proposals(p){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$transfer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$gate$gate_proposals_$_iter__13569(s__13570){
return (new cljs.core.LazySeq(null,(function (){
var s__13570__$1 = s__13570;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13570__$1);
if(temp__5735__auto__){
var s__13570__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13570__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13570__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13572 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13571 = (0);
while(true){
if((i__13571 < size__4522__auto__)){
var other = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13571);
cljs.core.chunk_append(b__13572,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(other),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$promise,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open,(100)], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null)], null));

var G__13573 = (i__13571 + (1));
i__13571 = G__13573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13572),pucks$agents$gate$gate_proposals_$_iter__13569(cljs.core.chunk_rest(s__13570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13572),null);
}
} else {
var other = cljs.core.first(s__13570__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(other),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$promise,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open,(100)], null)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,cljs.core.cst$kw$key], null)], null),pucks$agents$gate$gate_proposals_$_iter__13569(cljs.core.rest(s__13570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})()),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open,(cljs.core.cst$kw$open.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)) - (1))], null),cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$solid,(!((cljs.core.cst$kw$open.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)) > (0))))], null)], null);
});
pucks.agents.gate.gate = (function pucks$agents$gate$gate(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$gate,true,cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$open,(0)], null),cljs.core.cst$kw$radius,(40),cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.cst$kw$draw_DASH_function,pucks.agents.gate.draw_gate,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.gate.gate_proposals], null)], 0));
});
