// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.chest');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.globals');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.chest.draw_chest = (function pucks$agents$chest$draw_chest(p){
var vec__13576 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13576,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13576,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13579 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(2),null);
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.cljs$core$IFn$_invoke$arity$4((((128) + ((128) * (function (){var G__13582 = (cljs.core.deref(pucks.globals.iteration) / (2));
return Math.sin(G__13582);
})())) | (0)),(((128) + ((128) * (function (){var G__13583 = (cljs.core.deref(pucks.globals.iteration) / (3));
return Math.sin(G__13583);
})())) | (0)),(((128) + ((128) * (function (){var G__13584 = (cljs.core.deref(pucks.globals.iteration) / (5));
return Math.sin(G__13584);
})())) | (0)),(100));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(196));

quil.core.ellipse((0),(0),radius,radius);

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.ellipse((0),(0),(radius * 0.2),(radius * 0.2));
}

return quil.core.pop_matrix();
});
pucks.agents.chest.chest_proposals = (function pucks$agents$chest$chest_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$chest$chest_proposals_$_iter__13585(s__13586){
return (new cljs.core.LazySeq(null,(function (){
var s__13586__$1 = s__13586;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13586__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var recipient = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__13586__$1,recipient,xs__6292__auto__,temp__5735__auto__){
return (function pucks$agents$chest$chest_proposals_$_iter__13585_$_iter__13587(s__13588){
return (new cljs.core.LazySeq(null,((function (s__13586__$1,recipient,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__13588__$1 = s__13588;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__13588__$1);
if(temp__5735__auto____$1){
var s__13588__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13588__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13588__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13590 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13589 = (0);
while(true){
if((i__13589 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13589);
cljs.core.chunk_append(b__13590,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,item], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,item], null)], null)], null));

var G__13591 = (i__13589 + (1));
i__13589 = G__13591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13590),pucks$agents$chest$chest_proposals_$_iter__13585_$_iter__13587(cljs.core.chunk_rest(s__13588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13590),null);
}
} else {
var item = cljs.core.first(s__13588__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(recipient),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,item], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inventory,item], null)], null)], null),pucks$agents$chest$chest_proposals_$_iter__13585_$_iter__13587(cljs.core.rest(s__13588__$2)));
}
} else {
return null;
}
break;
}
});})(s__13586__$1,recipient,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__13586__$1,recipient,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(p)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,pucks$agents$chest$chest_proposals_$_iter__13585(cljs.core.rest(s__13586__$1)));
} else {
var G__13592 = cljs.core.rest(s__13586__$1);
s__13586__$1 = G__13592;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})())], null);
});
pucks.agents.chest.chest = (function pucks$agents$chest$chest(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$chest,true,cljs.core.cst$kw$radius,(30),cljs.core.cst$kw$draw_DASH_function,pucks.agents.chest.draw_chest,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.chest.chest_proposals], null)], 0));
});
