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
pucks.worlds.ai.world7.ventbox = (function pucks$worlds$ai$world7$ventbox(p__7004){
var vec__7005 = p__7004;
var center_x = cljs.core.nth.call(null,vec__7005,(0),null);
var center_y = cljs.core.nth.call(null,vec__7005,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null))], null));
});
pucks.worlds.ai.world7.agents = (function pucks$worlds$ai$world7$agents(){
return cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__7009(s__7010){
return (new cljs.core.LazySeq(null,(function (){
var s__7010__$1 = s__7010;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7010__$1);
if(temp__5735__auto__){
var s__7010__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7010__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7010__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7012 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7011 = (0);
while(true){
if((i__7011 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7011);
cljs.core.chunk_append.call(null,b__7012,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (i__7011,start,stop,y,c__4521__auto__,size__4522__auto__,b__7012,s__7010__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__7009_$_iter__7013(s__7014){
return (new cljs.core.LazySeq(null,((function (i__7011,start,stop,y,c__4521__auto__,size__4522__auto__,b__7012,s__7010__$2,temp__5735__auto__){
return (function (){
var s__7014__$1 = s__7014;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7014__$1);
if(temp__5735__auto____$1){
var s__7014__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7014__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7014__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7016 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7015 = (0);
while(true){
if((i__7015 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__7015);
cljs.core.chunk_append.call(null,b__7016,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7039 = (i__7015 + (1));
i__7015 = G__7039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7016),pucks$worlds$ai$world7$agents_$_iter__7009_$_iter__7013.call(null,cljs.core.chunk_rest.call(null,s__7014__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7016),null);
}
} else {
var x = cljs.core.first.call(null,s__7014__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__7009_$_iter__7013.call(null,cljs.core.rest.call(null,s__7014__$2)));
}
} else {
return null;
}
break;
}
});})(i__7011,start,stop,y,c__4521__auto__,size__4522__auto__,b__7012,s__7010__$2,temp__5735__auto__))
,null,null));
});})(i__7011,start,stop,y,c__4521__auto__,size__4522__auto__,b__7012,s__7010__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7040 = (i__7011 + (1));
i__7011 = G__7040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7012),pucks$worlds$ai$world7$agents_$_iter__7009.call(null,cljs.core.chunk_rest.call(null,s__7010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7012),null);
}
} else {
var y = cljs.core.first.call(null,s__7010__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (start,stop,y,s__7010__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__7009_$_iter__7017(s__7018){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__7010__$2,temp__5735__auto__){
return (function (){
var s__7018__$1 = s__7018;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7018__$1);
if(temp__5735__auto____$1){
var s__7018__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7018__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7018__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7020 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7019 = (0);
while(true){
if((i__7019 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7019);
cljs.core.chunk_append.call(null,b__7020,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7041 = (i__7019 + (1));
i__7019 = G__7041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7020),pucks$worlds$ai$world7$agents_$_iter__7009_$_iter__7017.call(null,cljs.core.chunk_rest.call(null,s__7018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7020),null);
}
} else {
var x = cljs.core.first.call(null,s__7018__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__7009_$_iter__7017.call(null,cljs.core.rest.call(null,s__7018__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__7010__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__7010__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world7$agents_$_iter__7009.call(null,cljs.core.rest.call(null,s__7010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__7021(s__7022){
return (new cljs.core.LazySeq(null,(function (){
var s__7022__$1 = s__7022;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7022__$1);
if(temp__5735__auto__){
var s__7022__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7022__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7022__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7024 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7023 = (0);
while(true){
if((i__7023 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7023);
cljs.core.chunk_append.call(null,b__7024,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7023,start,stop,x,c__4521__auto__,size__4522__auto__,b__7024,s__7022__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__7021_$_iter__7025(s__7026){
return (new cljs.core.LazySeq(null,((function (i__7023,start,stop,x,c__4521__auto__,size__4522__auto__,b__7024,s__7022__$2,temp__5735__auto__){
return (function (){
var s__7026__$1 = s__7026;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7026__$1);
if(temp__5735__auto____$1){
var s__7026__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7026__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7026__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7028 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7027 = (0);
while(true){
if((i__7027 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__7027);
cljs.core.chunk_append.call(null,b__7028,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7042 = (i__7027 + (1));
i__7027 = G__7042;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7028),pucks$worlds$ai$world7$agents_$_iter__7021_$_iter__7025.call(null,cljs.core.chunk_rest.call(null,s__7026__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7028),null);
}
} else {
var y = cljs.core.first.call(null,s__7026__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__7021_$_iter__7025.call(null,cljs.core.rest.call(null,s__7026__$2)));
}
} else {
return null;
}
break;
}
});})(i__7023,start,stop,x,c__4521__auto__,size__4522__auto__,b__7024,s__7022__$2,temp__5735__auto__))
,null,null));
});})(i__7023,start,stop,x,c__4521__auto__,size__4522__auto__,b__7024,s__7022__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7043 = (i__7023 + (1));
i__7023 = G__7043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7024),pucks$worlds$ai$world7$agents_$_iter__7021.call(null,cljs.core.chunk_rest.call(null,s__7022__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7024),null);
}
} else {
var x = cljs.core.first.call(null,s__7022__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__7022__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__7021_$_iter__7029(s__7030){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__7022__$2,temp__5735__auto__){
return (function (){
var s__7030__$1 = s__7030;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7030__$1);
if(temp__5735__auto____$1){
var s__7030__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7030__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7030__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7032 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7031 = (0);
while(true){
if((i__7031 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7031);
cljs.core.chunk_append.call(null,b__7032,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7044 = (i__7031 + (1));
i__7031 = G__7044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7032),pucks$worlds$ai$world7$agents_$_iter__7021_$_iter__7029.call(null,cljs.core.chunk_rest.call(null,s__7030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7032),null);
}
} else {
var y = cljs.core.first.call(null,s__7030__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world7$agents_$_iter__7021_$_iter__7029.call(null,cljs.core.rest.call(null,s__7030__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__7022__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__7022__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world7$agents_$_iter__7021.call(null,cljs.core.rest.call(null,s__7022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,(function (p1__7008_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ventbox","ventbox",433425519).cljs$core$IFn$_invoke$arity$1(p1__7008_SHARP_))){
return pucks.worlds.ai.world7.ventbox.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__7008_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7008_SHARP_], null);
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
}))),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world7$agents_$_iter__7033(s__7034){
return (new cljs.core.LazySeq(null,(function (){
var s__7034__$1 = s__7034;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7034__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7034__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world7$agents_$_iter__7033_$_iter__7035(s__7036){
return (new cljs.core.LazySeq(null,((function (s__7034__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7036__$1 = s__7036;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7036__$1);
if(temp__5735__auto____$1){
var s__7036__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7036__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7036__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7038 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7037 = (0);
while(true){
if((i__7037 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7037);
cljs.core.chunk_append.call(null,b__7038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__7045 = (i__7037 + (1));
i__7037 = G__7045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7038),pucks$worlds$ai$world7$agents_$_iter__7033_$_iter__7035.call(null,cljs.core.chunk_rest.call(null,s__7036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7038),null);
}
} else {
var y = cljs.core.first.call(null,s__7036__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world7$agents_$_iter__7033_$_iter__7035.call(null,cljs.core.rest.call(null,s__7036__$2)));
}
} else {
return null;
}
break;
}
});})(s__7034__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7034__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world7$agents_$_iter__7033.call(null,cljs.core.rest.call(null,s__7034__$1)));
} else {
var G__7046 = cljs.core.rest.call(null,s__7034__$1);
s__7034__$1 = G__7046;
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
