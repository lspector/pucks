// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world7');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.donor');
goog.require('pucks.agents.shooter');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.ai.world7.rand_PLUS__ = (function pucks$worlds$ai$world7$rand_PLUS__(n){
return (cljs.core.rand.call(null,((2) * n)) - n);
});
/**
 * Returns a sequence of pucks that form a box of stones with a vent in the
 * middle and a gate on each side.
 */
pucks.worlds.ai.world7.ventbox = (function pucks$worlds$ai$world7$ventbox(p__4095){
var vec__4096 = p__4095;
var center_x = cljs.core.nth.call(null,vec__4096,(0),null);
var center_y = cljs.core.nth.call(null,vec__4096,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null))], null));
});
pucks.worlds.ai.world7.agents = (function pucks$worlds$ai$world7$agents(){
return cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__4100(s__4101){
return (new cljs.core.LazySeq(null,(function (){
var s__4101__$1 = s__4101;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4101__$1);
if(temp__5735__auto__){
var s__4101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4101__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4101__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4103 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4102 = (0);
while(true){
if((i__4102 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4102);
cljs.core.chunk_append.call(null,b__4103,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (i__4102,start,stop,y,c__4521__auto__,size__4522__auto__,b__4103,s__4101__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__4100_$_iter__4104(s__4105){
return (new cljs.core.LazySeq(null,((function (i__4102,start,stop,y,c__4521__auto__,size__4522__auto__,b__4103,s__4101__$2,temp__5735__auto__){
return (function (){
var s__4105__$1 = s__4105;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4105__$1);
if(temp__5735__auto____$1){
var s__4105__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4105__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4105__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4107 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4106 = (0);
while(true){
if((i__4106 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__4106);
cljs.core.chunk_append.call(null,b__4107,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4130 = (i__4106 + (1));
i__4106 = G__4130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4107),pucks$worlds$ai$world7$agents_$_iter__4100_$_iter__4104.call(null,cljs.core.chunk_rest.call(null,s__4105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4107),null);
}
} else {
var x = cljs.core.first.call(null,s__4105__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__4100_$_iter__4104.call(null,cljs.core.rest.call(null,s__4105__$2)));
}
} else {
return null;
}
break;
}
});})(i__4102,start,stop,y,c__4521__auto__,size__4522__auto__,b__4103,s__4101__$2,temp__5735__auto__))
,null,null));
});})(i__4102,start,stop,y,c__4521__auto__,size__4522__auto__,b__4103,s__4101__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4131 = (i__4102 + (1));
i__4102 = G__4131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4103),pucks$worlds$ai$world7$agents_$_iter__4100.call(null,cljs.core.chunk_rest.call(null,s__4101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4103),null);
}
} else {
var y = cljs.core.first.call(null,s__4101__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (start,stop,y,s__4101__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__4100_$_iter__4108(s__4109){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__4101__$2,temp__5735__auto__){
return (function (){
var s__4109__$1 = s__4109;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4109__$1);
if(temp__5735__auto____$1){
var s__4109__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4109__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4109__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4111 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4110 = (0);
while(true){
if((i__4110 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4110);
cljs.core.chunk_append.call(null,b__4111,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4132 = (i__4110 + (1));
i__4110 = G__4132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4111),pucks$worlds$ai$world7$agents_$_iter__4100_$_iter__4108.call(null,cljs.core.chunk_rest.call(null,s__4109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4111),null);
}
} else {
var x = cljs.core.first.call(null,s__4109__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__4100_$_iter__4108.call(null,cljs.core.rest.call(null,s__4109__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__4101__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__4101__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world7$agents_$_iter__4100.call(null,cljs.core.rest.call(null,s__4101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__4112(s__4113){
return (new cljs.core.LazySeq(null,(function (){
var s__4113__$1 = s__4113;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4113__$1);
if(temp__5735__auto__){
var s__4113__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4113__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4113__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4115 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4114 = (0);
while(true){
if((i__4114 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4114);
cljs.core.chunk_append.call(null,b__4115,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4114,start,stop,x,c__4521__auto__,size__4522__auto__,b__4115,s__4113__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__4112_$_iter__4116(s__4117){
return (new cljs.core.LazySeq(null,((function (i__4114,start,stop,x,c__4521__auto__,size__4522__auto__,b__4115,s__4113__$2,temp__5735__auto__){
return (function (){
var s__4117__$1 = s__4117;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4117__$1);
if(temp__5735__auto____$1){
var s__4117__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4117__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4117__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4119 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4118 = (0);
while(true){
if((i__4118 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__4118);
cljs.core.chunk_append.call(null,b__4119,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4133 = (i__4118 + (1));
i__4118 = G__4133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4119),pucks$worlds$ai$world7$agents_$_iter__4112_$_iter__4116.call(null,cljs.core.chunk_rest.call(null,s__4117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4119),null);
}
} else {
var y = cljs.core.first.call(null,s__4117__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__4112_$_iter__4116.call(null,cljs.core.rest.call(null,s__4117__$2)));
}
} else {
return null;
}
break;
}
});})(i__4114,start,stop,x,c__4521__auto__,size__4522__auto__,b__4115,s__4113__$2,temp__5735__auto__))
,null,null));
});})(i__4114,start,stop,x,c__4521__auto__,size__4522__auto__,b__4115,s__4113__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4134 = (i__4114 + (1));
i__4114 = G__4134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4115),pucks$worlds$ai$world7$agents_$_iter__4112.call(null,cljs.core.chunk_rest.call(null,s__4113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4115),null);
}
} else {
var x = cljs.core.first.call(null,s__4113__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__4113__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__4112_$_iter__4120(s__4121){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__4113__$2,temp__5735__auto__){
return (function (){
var s__4121__$1 = s__4121;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4121__$1);
if(temp__5735__auto____$1){
var s__4121__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4121__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4121__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4123 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4122 = (0);
while(true){
if((i__4122 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4122);
cljs.core.chunk_append.call(null,b__4123,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4135 = (i__4122 + (1));
i__4122 = G__4135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4123),pucks$worlds$ai$world7$agents_$_iter__4112_$_iter__4120.call(null,cljs.core.chunk_rest.call(null,s__4121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4123),null);
}
} else {
var y = cljs.core.first.call(null,s__4121__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__4112_$_iter__4120.call(null,cljs.core.rest.call(null,s__4121__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__4113__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__4113__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world7$agents_$_iter__4112.call(null,cljs.core.rest.call(null,s__4113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,(function (p1__4099_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ventbox","ventbox",433425519).cljs$core$IFn$_invoke$arity$1(p1__4099_SHARP_))){
return pucks.worlds.ai.world7.ventbox.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__4099_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4099_SHARP_], null);
}
}),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.user.user)], null),cljs.core.repeatedly.call(null,(4),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ventbox","ventbox",433425519),true], null);
})),cljs.core.repeatedly.call(null,(8),pucks.agents.zapper.zapper),cljs.core.repeatedly.call(null,(4),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.shooter.shooter);
})),cljs.core.repeatedly.call(null,(4),(function (){
return pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.donor.donor.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world7.rand_PLUS__.call(null,(5)),pucks.worlds.ai.world7.rand_PLUS__.call(null,(5))], null)], null));
}));
}))),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__4124(s__4125){
return (new cljs.core.LazySeq(null,(function (){
var s__4125__$1 = s__4125;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4125__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4125__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__4124_$_iter__4126(s__4127){
return (new cljs.core.LazySeq(null,((function (s__4125__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4127__$1 = s__4127;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4127__$1);
if(temp__5735__auto____$1){
var s__4127__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4127__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4127__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4129 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4128 = (0);
while(true){
if((i__4128 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4128);
cljs.core.chunk_append.call(null,b__4129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__4136 = (i__4128 + (1));
i__4128 = G__4136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4129),pucks$worlds$ai$world7$agents_$_iter__4124_$_iter__4126.call(null,cljs.core.chunk_rest.call(null,s__4127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4129),null);
}
} else {
var y = cljs.core.first.call(null,s__4127__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world7$agents_$_iter__4124_$_iter__4126.call(null,cljs.core.rest.call(null,s__4127__$2)));
}
} else {
return null;
}
break;
}
});})(s__4125__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4125__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world7$agents_$_iter__4124.call(null,cljs.core.rest.call(null,s__4125__$1)));
} else {
var G__4137 = cljs.core.rest.call(null,s__4125__$1);
s__4125__$1 = G__4137;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200)));
})())))));
});
pucks.worlds.ai.world7.settings = (function pucks$worlds$ai$world7$settings(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1600),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false], null);
});

//# sourceMappingURL=world7.js.map
