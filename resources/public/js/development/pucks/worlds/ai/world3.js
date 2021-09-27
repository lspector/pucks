// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world3');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
pucks.worlds.ai.world3.agents = (function pucks$worlds$ai$world3$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4439(s__4440){
return (new cljs.core.LazySeq(null,(function (){
var s__4440__$1 = s__4440;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4440__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4440__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world3$agents_$_iter__4439_$_iter__4441(s__4442){
return (new cljs.core.LazySeq(null,((function (s__4440__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4442__$1 = s__4442;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4442__$1);
if(temp__5735__auto____$1){
var s__4442__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4442__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4442__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4444 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4443 = (0);
while(true){
if((i__4443 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4443);
cljs.core.chunk_append.call(null,b__4444,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4473 = (i__4443 + (1));
i__4443 = G__4473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4444),pucks$worlds$ai$world3$agents_$_iter__4439_$_iter__4441.call(null,cljs.core.chunk_rest.call(null,s__4442__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4444),null);
}
} else {
var y = cljs.core.first.call(null,s__4442__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4439_$_iter__4441.call(null,cljs.core.rest.call(null,s__4442__$2)));
}
} else {
return null;
}
break;
}
});})(s__4440__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4440__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world3$agents_$_iter__4439.call(null,cljs.core.rest.call(null,s__4440__$1)));
} else {
var G__4474 = cljs.core.rest.call(null,s__4440__$1);
s__4440__$1 = G__4474;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(701),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4445(s__4446){
return (new cljs.core.LazySeq(null,(function (){
var s__4446__$1 = s__4446;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4446__$1);
if(temp__5735__auto__){
var s__4446__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4446__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4446__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4448 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4447 = (0);
while(true){
if((i__4447 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4447);
cljs.core.chunk_append.call(null,b__4448,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__4475 = (i__4447 + (1));
i__4447 = G__4475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4448),pucks$worlds$ai$world3$agents_$_iter__4445.call(null,cljs.core.chunk_rest.call(null,s__4446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4448),null);
}
} else {
var y = cljs.core.first.call(null,s__4446__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4445.call(null,cljs.core.rest.call(null,s__4446__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(201),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4449(s__4450){
return (new cljs.core.LazySeq(null,(function (){
var s__4450__$1 = s__4450;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4450__$1);
if(temp__5735__auto__){
var s__4450__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4450__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4450__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4452 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4451 = (0);
while(true){
if((i__4451 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4451);
cljs.core.chunk_append.call(null,b__4452,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__4476 = (i__4451 + (1));
i__4451 = G__4476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4452),pucks$worlds$ai$world3$agents_$_iter__4449.call(null,cljs.core.chunk_rest.call(null,s__4450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4452),null);
}
} else {
var y = cljs.core.first.call(null,s__4450__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4449.call(null,cljs.core.rest.call(null,s__4450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4453(s__4454){
return (new cljs.core.LazySeq(null,(function (){
var s__4454__$1 = s__4454;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4454__$1);
if(temp__5735__auto__){
var s__4454__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4454__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4454__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4456 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4455 = (0);
while(true){
if((i__4455 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4455);
cljs.core.chunk_append.call(null,b__4456,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)));

var G__4477 = (i__4455 + (1));
i__4455 = G__4477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4456),pucks$worlds$ai$world3$agents_$_iter__4453.call(null,cljs.core.chunk_rest.call(null,s__4454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4456),null);
}
} else {
var x = cljs.core.first.call(null,s__4454__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4453.call(null,cljs.core.rest.call(null,s__4454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4457(s__4458){
return (new cljs.core.LazySeq(null,(function (){
var s__4458__$1 = s__4458;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4458__$1);
if(temp__5735__auto__){
var s__4458__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4458__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4458__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4460 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4459 = (0);
while(true){
if((i__4459 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4459);
cljs.core.chunk_append.call(null,b__4460,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)));

var G__4478 = (i__4459 + (1));
i__4459 = G__4478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4460),pucks$worlds$ai$world3$agents_$_iter__4457.call(null,cljs.core.chunk_rest.call(null,s__4458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4460),null);
}
} else {
var x = cljs.core.first.call(null,s__4458__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4457.call(null,cljs.core.rest.call(null,s__4458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4461(s__4462){
return (new cljs.core.LazySeq(null,(function (){
var s__4462__$1 = s__4462;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4462__$1);
if(temp__5735__auto__){
var s__4462__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4462__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4462__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4464 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4463 = (0);
while(true){
if((i__4463 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4463);
cljs.core.chunk_append.call(null,b__4464,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)));

var G__4479 = (i__4463 + (1));
i__4463 = G__4479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4464),pucks$worlds$ai$world3$agents_$_iter__4461.call(null,cljs.core.chunk_rest.call(null,s__4462__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4464),null);
}
} else {
var x = cljs.core.first.call(null,s__4462__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4461.call(null,cljs.core.rest.call(null,s__4462__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4465(s__4466){
return (new cljs.core.LazySeq(null,(function (){
var s__4466__$1 = s__4466;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4466__$1);
if(temp__5735__auto__){
var s__4466__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4466__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4466__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4468 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4467 = (0);
while(true){
if((i__4467 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4467);
cljs.core.chunk_append.call(null,b__4468,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)));

var G__4480 = (i__4467 + (1));
i__4467 = G__4480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4468),pucks$worlds$ai$world3$agents_$_iter__4465.call(null,cljs.core.chunk_rest.call(null,s__4466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4468),null);
}
} else {
var y = cljs.core.first.call(null,s__4466__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4465.call(null,cljs.core.rest.call(null,s__4466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__4469(s__4470){
return (new cljs.core.LazySeq(null,(function (){
var s__4470__$1 = s__4470;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4470__$1);
if(temp__5735__auto__){
var s__4470__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4470__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4470__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4472 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4471 = (0);
while(true){
if((i__4471 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4471);
cljs.core.chunk_append.call(null,b__4472,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)));

var G__4481 = (i__4471 + (1));
i__4471 = G__4481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4472),pucks$worlds$ai$world3$agents_$_iter__4469.call(null,cljs.core.chunk_rest.call(null,s__4470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4472),null);
}
} else {
var y = cljs.core.first.call(null,s__4470__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__4469.call(null,cljs.core.rest.call(null,s__4470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.user.user),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null))], null));
});
pucks.worlds.ai.world3.settings = (function pucks$worlds$ai$world3$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world3.js.map
