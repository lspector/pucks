// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world6');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.donor');
/**
 * Returns a positive or negative random number with magnitude less than n.
 */
pucks.worlds.ai.world6.rand_PLUS__ = (function pucks$worlds$ai$world6$rand_PLUS__(n){
return (cljs.core.rand.call(null,((2) * n)) - n);
});
/**
 * Returns a sequence of pucks that form a box of stones with a vent in the
 * middle and a gate on each side.
 */
pucks.worlds.ai.world6.ventbox = (function pucks$worlds$ai$world6$ventbox(p__4251){
var vec__4252 = p__4251;
var center_x = cljs.core.nth.call(null,vec__4252,(0),null);
var center_y = cljs.core.nth.call(null,vec__4252,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null))], null));
});
pucks.worlds.ai.world6.agents = (function pucks$worlds$ai$world6$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__4255(s__4256){
return (new cljs.core.LazySeq(null,(function (){
var s__4256__$1 = s__4256;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4256__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4256__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__4255_$_iter__4257(s__4258){
return (new cljs.core.LazySeq(null,((function (s__4256__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4258__$1 = s__4258;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4258__$1);
if(temp__5735__auto____$1){
var s__4258__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4258__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4258__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4260 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4259 = (0);
while(true){
if((i__4259 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4259);
cljs.core.chunk_append.call(null,b__4260,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__4291 = (i__4259 + (1));
i__4259 = G__4291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4260),pucks$worlds$ai$world6$agents_$_iter__4255_$_iter__4257.call(null,cljs.core.chunk_rest.call(null,s__4258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4260),null);
}
} else {
var y = cljs.core.first.call(null,s__4258__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$ai$world6$agents_$_iter__4255_$_iter__4257.call(null,cljs.core.rest.call(null,s__4258__$2)));
}
} else {
return null;
}
break;
}
});})(s__4256__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4256__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world6$agents_$_iter__4255.call(null,cljs.core.rest.call(null,s__4256__$1)));
} else {
var G__4292 = cljs.core.rest.call(null,s__4256__$1);
s__4256__$1 = G__4292;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(50),(751),(100)));
})(),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__4261(s__4262){
return (new cljs.core.LazySeq(null,(function (){
var s__4262__$1 = s__4262;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4262__$1);
if(temp__5735__auto__){
var s__4262__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4262__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4262__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4264 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4263 = (0);
while(true){
if((i__4263 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4263);
cljs.core.chunk_append.call(null,b__4264,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4263,start,stop,y,c__4521__auto__,size__4522__auto__,b__4264,s__4262__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__4261_$_iter__4265(s__4266){
return (new cljs.core.LazySeq(null,((function (i__4263,start,stop,y,c__4521__auto__,size__4522__auto__,b__4264,s__4262__$2,temp__5735__auto__){
return (function (){
var s__4266__$1 = s__4266;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4266__$1);
if(temp__5735__auto____$1){
var s__4266__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4266__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4266__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4268 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4267 = (0);
while(true){
if((i__4267 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__4267);
cljs.core.chunk_append.call(null,b__4268,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4293 = (i__4267 + (1));
i__4267 = G__4293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4268),pucks$worlds$ai$world6$agents_$_iter__4261_$_iter__4265.call(null,cljs.core.chunk_rest.call(null,s__4266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4268),null);
}
} else {
var x = cljs.core.first.call(null,s__4266__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__4261_$_iter__4265.call(null,cljs.core.rest.call(null,s__4266__$2)));
}
} else {
return null;
}
break;
}
});})(i__4263,start,stop,y,c__4521__auto__,size__4522__auto__,b__4264,s__4262__$2,temp__5735__auto__))
,null,null));
});})(i__4263,start,stop,y,c__4521__auto__,size__4522__auto__,b__4264,s__4262__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4294 = (i__4263 + (1));
i__4263 = G__4294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4264),pucks$worlds$ai$world6$agents_$_iter__4261.call(null,cljs.core.chunk_rest.call(null,s__4262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4264),null);
}
} else {
var y = cljs.core.first.call(null,s__4262__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,y,s__4262__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__4261_$_iter__4269(s__4270){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__4262__$2,temp__5735__auto__){
return (function (){
var s__4270__$1 = s__4270;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4270__$1);
if(temp__5735__auto____$1){
var s__4270__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4270__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4270__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4272 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4271 = (0);
while(true){
if((i__4271 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4271);
cljs.core.chunk_append.call(null,b__4272,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4295 = (i__4271 + (1));
i__4271 = G__4295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4272),pucks$worlds$ai$world6$agents_$_iter__4261_$_iter__4269.call(null,cljs.core.chunk_rest.call(null,s__4270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4272),null);
}
} else {
var x = cljs.core.first.call(null,s__4270__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__4261_$_iter__4269.call(null,cljs.core.rest.call(null,s__4270__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__4262__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__4262__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world6$agents_$_iter__4261.call(null,cljs.core.rest.call(null,s__4262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__4273(s__4274){
return (new cljs.core.LazySeq(null,(function (){
var s__4274__$1 = s__4274;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4274__$1);
if(temp__5735__auto__){
var s__4274__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4274__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4274__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4276 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4275 = (0);
while(true){
if((i__4275 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4275);
cljs.core.chunk_append.call(null,b__4276,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4275,start,stop,x,c__4521__auto__,size__4522__auto__,b__4276,s__4274__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__4273_$_iter__4277(s__4278){
return (new cljs.core.LazySeq(null,((function (i__4275,start,stop,x,c__4521__auto__,size__4522__auto__,b__4276,s__4274__$2,temp__5735__auto__){
return (function (){
var s__4278__$1 = s__4278;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4278__$1);
if(temp__5735__auto____$1){
var s__4278__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4278__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4278__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4280 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4279 = (0);
while(true){
if((i__4279 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__4279);
cljs.core.chunk_append.call(null,b__4280,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4296 = (i__4279 + (1));
i__4279 = G__4296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4280),pucks$worlds$ai$world6$agents_$_iter__4273_$_iter__4277.call(null,cljs.core.chunk_rest.call(null,s__4278__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4280),null);
}
} else {
var y = cljs.core.first.call(null,s__4278__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__4273_$_iter__4277.call(null,cljs.core.rest.call(null,s__4278__$2)));
}
} else {
return null;
}
break;
}
});})(i__4275,start,stop,x,c__4521__auto__,size__4522__auto__,b__4276,s__4274__$2,temp__5735__auto__))
,null,null));
});})(i__4275,start,stop,x,c__4521__auto__,size__4522__auto__,b__4276,s__4274__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4297 = (i__4275 + (1));
i__4275 = G__4297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4276),pucks$worlds$ai$world6$agents_$_iter__4273.call(null,cljs.core.chunk_rest.call(null,s__4274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4276),null);
}
} else {
var x = cljs.core.first.call(null,s__4274__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__4274__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__4273_$_iter__4281(s__4282){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__4274__$2,temp__5735__auto__){
return (function (){
var s__4282__$1 = s__4282;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4282__$1);
if(temp__5735__auto____$1){
var s__4282__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4282__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4282__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4284 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4283 = (0);
while(true){
if((i__4283 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4283);
cljs.core.chunk_append.call(null,b__4284,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4298 = (i__4283 + (1));
i__4283 = G__4298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4284),pucks$worlds$ai$world6$agents_$_iter__4273_$_iter__4281.call(null,cljs.core.chunk_rest.call(null,s__4282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4284),null);
}
} else {
var y = cljs.core.first.call(null,s__4282__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__4273_$_iter__4281.call(null,cljs.core.rest.call(null,s__4282__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__4274__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__4274__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world6$agents_$_iter__4273.call(null,cljs.core.rest.call(null,s__4274__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),(function (){var locations = cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__4285(s__4286){
return (new cljs.core.LazySeq(null,(function (){
var s__4286__$1 = s__4286;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4286__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4286__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__4285_$_iter__4287(s__4288){
return (new cljs.core.LazySeq(null,((function (s__4286__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4288__$1 = s__4288;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4288__$1);
if(temp__5735__auto____$1){
var s__4288__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4288__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4288__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4290 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4289 = (0);
while(true){
if((i__4289 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4289);
cljs.core.chunk_append.call(null,b__4290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__4299 = (i__4289 + (1));
i__4289 = G__4299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4290),pucks$worlds$ai$world6$agents_$_iter__4285_$_iter__4287.call(null,cljs.core.chunk_rest.call(null,s__4288__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4290),null);
}
} else {
var y = cljs.core.first.call(null,s__4288__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world6$agents_$_iter__4285_$_iter__4287.call(null,cljs.core.rest.call(null,s__4288__$2)));
}
} else {
return null;
}
break;
}
});})(s__4286__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4286__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world6$agents_$_iter__4285.call(null,cljs.core.rest.call(null,s__4286__$1)));
} else {
var G__4300 = cljs.core.rest.call(null,s__4286__$1);
s__4286__$1 = G__4300;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null));
})());
return cljs.core.concat.call(null,pucks.worlds.ai.world6.ventbox.call(null,cljs.core.first.call(null,locations)),pucks.worlds.ai.world6.ventbox.call(null,cljs.core.second.call(null,locations)),cljs.core.mapv.call(null,((function (locations){
return (function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
});})(locations))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.user.user),pucks.agents.nursery.nursery.call(null,((function (locations){
return (function (){
return cljs.core.merge.call(null,pucks.agents.donor.donor.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.worlds.ai.world6.rand_PLUS__.call(null,(5)),pucks.worlds.ai.world6.rand_PLUS__.call(null,(5))], null)], null));
});})(locations))
),pucks.agents.zapper.zapper.call(null),pucks.agents.zapper.zapper.call(null)], null),cljs.core.rest.call(null,cljs.core.rest.call(null,locations))));
})());
});
pucks.worlds.ai.world6.settings = (function pucks$worlds$ai$world6$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world6.js.map
