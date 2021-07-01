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
pucks.worlds.ai.world8.ventbox = (function pucks$worlds$ai$world8$ventbox(p__4386){
var vec__4387 = p__4386;
var center_x = cljs.core.nth.call(null,vec__4387,(0),null);
var center_y = cljs.core.nth.call(null,vec__4387,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null))], null));
});
pucks.worlds.ai.world8.agents = (function pucks$worlds$ai$world8$agents(){
return cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__4391(s__4392){
return (new cljs.core.LazySeq(null,(function (){
var s__4392__$1 = s__4392;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4392__$1);
if(temp__5735__auto__){
var s__4392__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4392__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4392__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4394 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4393 = (0);
while(true){
if((i__4393 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4393);
cljs.core.chunk_append.call(null,b__4394,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (i__4393,start,stop,y,c__4521__auto__,size__4522__auto__,b__4394,s__4392__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__4391_$_iter__4395(s__4396){
return (new cljs.core.LazySeq(null,((function (i__4393,start,stop,y,c__4521__auto__,size__4522__auto__,b__4394,s__4392__$2,temp__5735__auto__){
return (function (){
var s__4396__$1 = s__4396;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4396__$1);
if(temp__5735__auto____$1){
var s__4396__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4396__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4396__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4398 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4397 = (0);
while(true){
if((i__4397 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__4397);
cljs.core.chunk_append.call(null,b__4398,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4421 = (i__4397 + (1));
i__4397 = G__4421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4398),pucks$worlds$ai$world8$agents_$_iter__4391_$_iter__4395.call(null,cljs.core.chunk_rest.call(null,s__4396__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4398),null);
}
} else {
var x = cljs.core.first.call(null,s__4396__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__4391_$_iter__4395.call(null,cljs.core.rest.call(null,s__4396__$2)));
}
} else {
return null;
}
break;
}
});})(i__4393,start,stop,y,c__4521__auto__,size__4522__auto__,b__4394,s__4392__$2,temp__5735__auto__))
,null,null));
});})(i__4393,start,stop,y,c__4521__auto__,size__4522__auto__,b__4394,s__4392__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4422 = (i__4393 + (1));
i__4393 = G__4422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4394),pucks$worlds$ai$world8$agents_$_iter__4391.call(null,cljs.core.chunk_rest.call(null,s__4392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4394),null);
}
} else {
var y = cljs.core.first.call(null,s__4392__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (start,stop,y,s__4392__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__4391_$_iter__4399(s__4400){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__4392__$2,temp__5735__auto__){
return (function (){
var s__4400__$1 = s__4400;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4400__$1);
if(temp__5735__auto____$1){
var s__4400__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4400__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4400__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4402 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4401 = (0);
while(true){
if((i__4401 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4401);
cljs.core.chunk_append.call(null,b__4402,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4423 = (i__4401 + (1));
i__4401 = G__4423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4402),pucks$worlds$ai$world8$agents_$_iter__4391_$_iter__4399.call(null,cljs.core.chunk_rest.call(null,s__4400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4402),null);
}
} else {
var x = cljs.core.first.call(null,s__4400__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__4391_$_iter__4399.call(null,cljs.core.rest.call(null,s__4400__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__4392__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__4392__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world8$agents_$_iter__4391.call(null,cljs.core.rest.call(null,s__4392__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__4403(s__4404){
return (new cljs.core.LazySeq(null,(function (){
var s__4404__$1 = s__4404;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4404__$1);
if(temp__5735__auto__){
var s__4404__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4404__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4404__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4406 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4405 = (0);
while(true){
if((i__4405 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4405);
cljs.core.chunk_append.call(null,b__4406,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4405,start,stop,x,c__4521__auto__,size__4522__auto__,b__4406,s__4404__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__4403_$_iter__4407(s__4408){
return (new cljs.core.LazySeq(null,((function (i__4405,start,stop,x,c__4521__auto__,size__4522__auto__,b__4406,s__4404__$2,temp__5735__auto__){
return (function (){
var s__4408__$1 = s__4408;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4408__$1);
if(temp__5735__auto____$1){
var s__4408__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4408__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4408__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4410 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4409 = (0);
while(true){
if((i__4409 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__4409);
cljs.core.chunk_append.call(null,b__4410,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4424 = (i__4409 + (1));
i__4409 = G__4424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4410),pucks$worlds$ai$world8$agents_$_iter__4403_$_iter__4407.call(null,cljs.core.chunk_rest.call(null,s__4408__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4410),null);
}
} else {
var y = cljs.core.first.call(null,s__4408__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__4403_$_iter__4407.call(null,cljs.core.rest.call(null,s__4408__$2)));
}
} else {
return null;
}
break;
}
});})(i__4405,start,stop,x,c__4521__auto__,size__4522__auto__,b__4406,s__4404__$2,temp__5735__auto__))
,null,null));
});})(i__4405,start,stop,x,c__4521__auto__,size__4522__auto__,b__4406,s__4404__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4425 = (i__4405 + (1));
i__4405 = G__4425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4406),pucks$worlds$ai$world8$agents_$_iter__4403.call(null,cljs.core.chunk_rest.call(null,s__4404__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4406),null);
}
} else {
var x = cljs.core.first.call(null,s__4404__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__4404__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__4403_$_iter__4411(s__4412){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__4404__$2,temp__5735__auto__){
return (function (){
var s__4412__$1 = s__4412;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4412__$1);
if(temp__5735__auto____$1){
var s__4412__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4412__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4412__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4414 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4413 = (0);
while(true){
if((i__4413 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4413);
cljs.core.chunk_append.call(null,b__4414,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4426 = (i__4413 + (1));
i__4413 = G__4426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4414),pucks$worlds$ai$world8$agents_$_iter__4403_$_iter__4411.call(null,cljs.core.chunk_rest.call(null,s__4412__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4414),null);
}
} else {
var y = cljs.core.first.call(null,s__4412__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world8$agents_$_iter__4403_$_iter__4411.call(null,cljs.core.rest.call(null,s__4412__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__4404__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__4404__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world8$agents_$_iter__4403.call(null,cljs.core.rest.call(null,s__4404__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,(function (p1__4390_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ventbox","ventbox",433425519).cljs$core$IFn$_invoke$arity$1(p1__4390_SHARP_))){
return pucks.worlds.ai.world8.ventbox.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__4390_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4390_SHARP_], null);
}
}),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.user.user)], null),cljs.core.repeatedly.call(null,(4),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ventbox","ventbox",433425519),true], null);
})),cljs.core.repeatedly.call(null,(8),pucks.agents.zapper.zapper),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.shooter.shooter)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.donor.donor.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world8.rand_PLUS__.call(null,(5)),pucks.worlds.ai.world8.rand_PLUS__.call(null,(5))], null)], null));
}))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,(function (){
return cljs.core.merge.call(null,pucks.agents.mapdonor.mapdonor.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world8.rand_PLUS__.call(null,(5)),pucks.worlds.ai.world8.rand_PLUS__.call(null,(5))], null)], null));
}))], null)),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world8$agents_$_iter__4415(s__4416){
return (new cljs.core.LazySeq(null,(function (){
var s__4416__$1 = s__4416;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4416__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4416__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world8$agents_$_iter__4415_$_iter__4417(s__4418){
return (new cljs.core.LazySeq(null,((function (s__4416__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4418__$1 = s__4418;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4418__$1);
if(temp__5735__auto____$1){
var s__4418__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4418__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4418__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4420 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4419 = (0);
while(true){
if((i__4419 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4419);
cljs.core.chunk_append.call(null,b__4420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__4427 = (i__4419 + (1));
i__4419 = G__4427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4420),pucks$worlds$ai$world8$agents_$_iter__4415_$_iter__4417.call(null,cljs.core.chunk_rest.call(null,s__4418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4420),null);
}
} else {
var y = cljs.core.first.call(null,s__4418__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world8$agents_$_iter__4415_$_iter__4417.call(null,cljs.core.rest.call(null,s__4418__$2)));
}
} else {
return null;
}
break;
}
});})(s__4416__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4416__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world8$agents_$_iter__4415.call(null,cljs.core.rest.call(null,s__4416__$1)));
} else {
var G__4428 = cljs.core.rest.call(null,s__4416__$1);
s__4416__$1 = G__4428;
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
