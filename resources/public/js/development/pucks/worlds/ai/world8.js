// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world8');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.mapdonor');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.donor');
goog.require('pucks.agents.shooter');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.ai.world8.rand_PLUS__ = (function pucks$worlds$ai$world8$rand_PLUS__(n){
return (cljs.core.rand.call(null,((2) * n)) - n);
});
/**
 * Returns a sequence of pucks that form a box of stones with a vent in the
 * middle and a gate on each side.
 */
pucks.worlds.ai.world8.ventbox = (function pucks$worlds$ai$world8$ventbox(p__7755){
var vec__7756 = p__7755;
var center_x = cljs.core.nth.call(null,vec__7756,(0),null);
var center_y = cljs.core.nth.call(null,vec__7756,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null))], null));
});
pucks.worlds.ai.world8.agents = (function pucks$worlds$ai$world8$agents(){
return cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__7760(s__7761){
return (new cljs.core.LazySeq(null,(function (){
var s__7761__$1 = s__7761;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7761__$1);
if(temp__5735__auto__){
var s__7761__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7761__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7761__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7763 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7762 = (0);
while(true){
if((i__7762 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7762);
cljs.core.chunk_append.call(null,b__7763,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (i__7762,start,stop,y,c__4521__auto__,size__4522__auto__,b__7763,s__7761__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__7760_$_iter__7764(s__7765){
return (new cljs.core.LazySeq(null,((function (i__7762,start,stop,y,c__4521__auto__,size__4522__auto__,b__7763,s__7761__$2,temp__5735__auto__){
return (function (){
var s__7765__$1 = s__7765;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7765__$1);
if(temp__5735__auto____$1){
var s__7765__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7765__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7765__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7767 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7766 = (0);
while(true){
if((i__7766 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__7766);
cljs.core.chunk_append.call(null,b__7767,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7790 = (i__7766 + (1));
i__7766 = G__7790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7767),pucks$worlds$ai$world8$agents_$_iter__7760_$_iter__7764.call(null,cljs.core.chunk_rest.call(null,s__7765__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7767),null);
}
} else {
var x = cljs.core.first.call(null,s__7765__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__7760_$_iter__7764.call(null,cljs.core.rest.call(null,s__7765__$2)));
}
} else {
return null;
}
break;
}
});})(i__7762,start,stop,y,c__4521__auto__,size__4522__auto__,b__7763,s__7761__$2,temp__5735__auto__))
,null,null));
});})(i__7762,start,stop,y,c__4521__auto__,size__4522__auto__,b__7763,s__7761__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7791 = (i__7762 + (1));
i__7762 = G__7791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7763),pucks$worlds$ai$world8$agents_$_iter__7760.call(null,cljs.core.chunk_rest.call(null,s__7761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7763),null);
}
} else {
var y = cljs.core.first.call(null,s__7761__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (start,stop,y,s__7761__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__7760_$_iter__7768(s__7769){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__7761__$2,temp__5735__auto__){
return (function (){
var s__7769__$1 = s__7769;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7769__$1);
if(temp__5735__auto____$1){
var s__7769__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7769__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7769__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7771 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7770 = (0);
while(true){
if((i__7770 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7770);
cljs.core.chunk_append.call(null,b__7771,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7792 = (i__7770 + (1));
i__7770 = G__7792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7771),pucks$worlds$ai$world8$agents_$_iter__7760_$_iter__7768.call(null,cljs.core.chunk_rest.call(null,s__7769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7771),null);
}
} else {
var x = cljs.core.first.call(null,s__7769__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__7760_$_iter__7768.call(null,cljs.core.rest.call(null,s__7769__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__7761__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__7761__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world8$agents_$_iter__7760.call(null,cljs.core.rest.call(null,s__7761__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__7772(s__7773){
return (new cljs.core.LazySeq(null,(function (){
var s__7773__$1 = s__7773;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7773__$1);
if(temp__5735__auto__){
var s__7773__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7773__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7773__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7775 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7774 = (0);
while(true){
if((i__7774 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7774);
cljs.core.chunk_append.call(null,b__7775,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7774,start,stop,x,c__4521__auto__,size__4522__auto__,b__7775,s__7773__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__7772_$_iter__7776(s__7777){
return (new cljs.core.LazySeq(null,((function (i__7774,start,stop,x,c__4521__auto__,size__4522__auto__,b__7775,s__7773__$2,temp__5735__auto__){
return (function (){
var s__7777__$1 = s__7777;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7777__$1);
if(temp__5735__auto____$1){
var s__7777__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7777__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7777__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7779 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7778 = (0);
while(true){
if((i__7778 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__7778);
cljs.core.chunk_append.call(null,b__7779,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7793 = (i__7778 + (1));
i__7778 = G__7793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7779),pucks$worlds$ai$world8$agents_$_iter__7772_$_iter__7776.call(null,cljs.core.chunk_rest.call(null,s__7777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7779),null);
}
} else {
var y = cljs.core.first.call(null,s__7777__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__7772_$_iter__7776.call(null,cljs.core.rest.call(null,s__7777__$2)));
}
} else {
return null;
}
break;
}
});})(i__7774,start,stop,x,c__4521__auto__,size__4522__auto__,b__7775,s__7773__$2,temp__5735__auto__))
,null,null));
});})(i__7774,start,stop,x,c__4521__auto__,size__4522__auto__,b__7775,s__7773__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7794 = (i__7774 + (1));
i__7774 = G__7794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7775),pucks$worlds$ai$world8$agents_$_iter__7772.call(null,cljs.core.chunk_rest.call(null,s__7773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7775),null);
}
} else {
var x = cljs.core.first.call(null,s__7773__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__7773__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__7772_$_iter__7780(s__7781){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__7773__$2,temp__5735__auto__){
return (function (){
var s__7781__$1 = s__7781;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7781__$1);
if(temp__5735__auto____$1){
var s__7781__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7781__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7781__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7783 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7782 = (0);
while(true){
if((i__7782 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7782);
cljs.core.chunk_append.call(null,b__7783,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7795 = (i__7782 + (1));
i__7782 = G__7795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7783),pucks$worlds$ai$world8$agents_$_iter__7772_$_iter__7780.call(null,cljs.core.chunk_rest.call(null,s__7781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7783),null);
}
} else {
var y = cljs.core.first.call(null,s__7781__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__7772_$_iter__7780.call(null,cljs.core.rest.call(null,s__7781__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__7773__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__7773__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world8$agents_$_iter__7772.call(null,cljs.core.rest.call(null,s__7773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,(function (p1__7759_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ventbox","ventbox",433425519).cljs$core$IFn$_invoke$arity$1(p1__7759_SHARP_))){
return pucks.worlds.ai.world8.ventbox.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__7759_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7759_SHARP_], null);
}
}),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.user.user)], null),cljs.core.repeatedly.call(null,(4),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ventbox","ventbox",433425519),true], null);
})),cljs.core.repeatedly.call(null,(8),pucks.agents.zapper.zapper),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.shooter.shooter)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.donor.donor.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world8.rand_PLUS__.call(null,(5)),pucks.worlds.ai.world8.rand_PLUS__.call(null,(5))], null)], null));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.mapdonor.mapdonor.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world8.rand_PLUS__.call(null,(5)),pucks.worlds.ai.world8.rand_PLUS__.call(null,(5))], null)], null));
}))], null)),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__7784(s__7785){
return (new cljs.core.LazySeq(null,(function (){
var s__7785__$1 = s__7785;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7785__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7785__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__7784_$_iter__7786(s__7787){
return (new cljs.core.LazySeq(null,((function (s__7785__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7787__$1 = s__7787;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7787__$1);
if(temp__5735__auto____$1){
var s__7787__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7787__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7787__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7789 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7788 = (0);
while(true){
if((i__7788 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7788);
cljs.core.chunk_append.call(null,b__7789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__7796 = (i__7788 + (1));
i__7788 = G__7796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7789),pucks$worlds$ai$world8$agents_$_iter__7784_$_iter__7786.call(null,cljs.core.chunk_rest.call(null,s__7787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7789),null);
}
} else {
var y = cljs.core.first.call(null,s__7787__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world8$agents_$_iter__7784_$_iter__7786.call(null,cljs.core.rest.call(null,s__7787__$2)));
}
} else {
return null;
}
break;
}
});})(s__7785__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7785__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world8$agents_$_iter__7784.call(null,cljs.core.rest.call(null,s__7785__$1)));
} else {
var G__7797 = cljs.core.rest.call(null,s__7785__$1);
s__7785__$1 = G__7797;
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
pucks.worlds.ai.world8.settings = (function pucks$worlds$ai$world8$settings(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1600),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"max-velocity","max-velocity",-1012892068),(40),new cljs.core.Keyword(null,"torpedo-energy","torpedo-energy",290470477),0.02], null);
});

//# sourceMappingURL=world8.js.map
