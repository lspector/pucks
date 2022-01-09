// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.vent');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.vent.draw_vent = (function pucks$agents$vent$draw_vent(p){
var vec__13490 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13490,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13493 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(2),null);
var vec__13496 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(238),(118),(0)], null);
var core_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(0),null);
var core_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(1),null);
var core_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(2),null);
var core_diameter = ((radius * cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p)) | (0));
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(100));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.ellipse((0),(0),radius,radius);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(core_r,core_g,core_b,(196));

quil.core.ellipse((0),(0),core_diameter,core_diameter);

return quil.core.pop_matrix();
});
pucks.agents.vent.vent_proposals = (function pucks$agents$vent$vent_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$vent$vent_proposals_$_iter__13499(s__13500){
return (new cljs.core.LazySeq(null,(function (){
var s__13500__$1 = s__13500;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13500__$1);
if(temp__5735__auto__){
var s__13500__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13500__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13500__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13502 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13501 = (0);
while(true){
if((i__13501 < size__4522__auto__)){
var recipient = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13501);
cljs.core.chunk_append(b__13502,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__13503 = (i__13501 + (1));
i__13501 = G__13503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13502),pucks$agents$vent$vent_proposals_$_iter__13499(cljs.core.chunk_rest(s__13500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13502),null);
}
} else {
var recipient = cljs.core.first(s__13500__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$vent$vent_proposals_$_iter__13499(cljs.core.rest(s__13500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.cst$kw$torpedo),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.cst$kw$stone),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)))));
})())], null);
});
pucks.agents.vent.vent = (function pucks$agents$vent$vent(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$vent,true,cljs.core.cst$kw$radius,(50),cljs.core.cst$kw$draw_DASH_function,pucks.agents.vent.draw_vent,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.vent.vent_proposals], null)], 0));
});
