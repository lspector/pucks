// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world5');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
pucks.worlds.ai.world5.agents = (function pucks$worlds$ai$world5$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__4305(s__4306){
return (new cljs.core.LazySeq(null,(function (){
var s__4306__$1 = s__4306;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4306__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4306__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__4305_$_iter__4307(s__4308){
return (new cljs.core.LazySeq(null,((function (s__4306__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4308__$1 = s__4308;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4308__$1);
if(temp__5735__auto____$1){
var s__4308__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4308__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4308__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4310 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4309 = (0);
while(true){
if((i__4309 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4309);
cljs.core.chunk_append.call(null,b__4310,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__4341 = (i__4309 + (1));
i__4309 = G__4341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4310),pucks$worlds$ai$world5$agents_$_iter__4305_$_iter__4307.call(null,cljs.core.chunk_rest.call(null,s__4308__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4310),null);
}
} else {
var y = cljs.core.first.call(null,s__4308__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$ai$world5$agents_$_iter__4305_$_iter__4307.call(null,cljs.core.rest.call(null,s__4308__$2)));
}
} else {
return null;
}
break;
}
});})(s__4306__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4306__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world5$agents_$_iter__4305.call(null,cljs.core.rest.call(null,s__4306__$1)));
} else {
var G__4342 = cljs.core.rest.call(null,s__4306__$1);
s__4306__$1 = G__4342;
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
})(),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__4311(s__4312){
return (new cljs.core.LazySeq(null,(function (){
var s__4312__$1 = s__4312;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4312__$1);
if(temp__5735__auto__){
var s__4312__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4312__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4312__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4314 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4313 = (0);
while(true){
if((i__4313 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4313);
cljs.core.chunk_append.call(null,b__4314,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4313,start,stop,y,c__4521__auto__,size__4522__auto__,b__4314,s__4312__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__4311_$_iter__4315(s__4316){
return (new cljs.core.LazySeq(null,((function (i__4313,start,stop,y,c__4521__auto__,size__4522__auto__,b__4314,s__4312__$2,temp__5735__auto__){
return (function (){
var s__4316__$1 = s__4316;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4316__$1);
if(temp__5735__auto____$1){
var s__4316__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4316__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4316__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4318 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4317 = (0);
while(true){
if((i__4317 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__4317);
cljs.core.chunk_append.call(null,b__4318,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4343 = (i__4317 + (1));
i__4317 = G__4343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4318),pucks$worlds$ai$world5$agents_$_iter__4311_$_iter__4315.call(null,cljs.core.chunk_rest.call(null,s__4316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4318),null);
}
} else {
var x = cljs.core.first.call(null,s__4316__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__4311_$_iter__4315.call(null,cljs.core.rest.call(null,s__4316__$2)));
}
} else {
return null;
}
break;
}
});})(i__4313,start,stop,y,c__4521__auto__,size__4522__auto__,b__4314,s__4312__$2,temp__5735__auto__))
,null,null));
});})(i__4313,start,stop,y,c__4521__auto__,size__4522__auto__,b__4314,s__4312__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4344 = (i__4313 + (1));
i__4313 = G__4344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4314),pucks$worlds$ai$world5$agents_$_iter__4311.call(null,cljs.core.chunk_rest.call(null,s__4312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4314),null);
}
} else {
var y = cljs.core.first.call(null,s__4312__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,y,s__4312__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__4311_$_iter__4319(s__4320){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__4312__$2,temp__5735__auto__){
return (function (){
var s__4320__$1 = s__4320;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4320__$1);
if(temp__5735__auto____$1){
var s__4320__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4320__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4320__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4322 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4321 = (0);
while(true){
if((i__4321 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4321);
cljs.core.chunk_append.call(null,b__4322,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4345 = (i__4321 + (1));
i__4321 = G__4345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4322),pucks$worlds$ai$world5$agents_$_iter__4311_$_iter__4319.call(null,cljs.core.chunk_rest.call(null,s__4320__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4322),null);
}
} else {
var x = cljs.core.first.call(null,s__4320__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__4311_$_iter__4319.call(null,cljs.core.rest.call(null,s__4320__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__4312__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__4312__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world5$agents_$_iter__4311.call(null,cljs.core.rest.call(null,s__4312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__4323(s__4324){
return (new cljs.core.LazySeq(null,(function (){
var s__4324__$1 = s__4324;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4324__$1);
if(temp__5735__auto__){
var s__4324__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4324__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4324__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4326 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4325 = (0);
while(true){
if((i__4325 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4325);
cljs.core.chunk_append.call(null,b__4326,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4325,start,stop,x,c__4521__auto__,size__4522__auto__,b__4326,s__4324__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__4323_$_iter__4327(s__4328){
return (new cljs.core.LazySeq(null,((function (i__4325,start,stop,x,c__4521__auto__,size__4522__auto__,b__4326,s__4324__$2,temp__5735__auto__){
return (function (){
var s__4328__$1 = s__4328;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4328__$1);
if(temp__5735__auto____$1){
var s__4328__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4328__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4328__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4330 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4329 = (0);
while(true){
if((i__4329 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__4329);
cljs.core.chunk_append.call(null,b__4330,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4346 = (i__4329 + (1));
i__4329 = G__4346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4330),pucks$worlds$ai$world5$agents_$_iter__4323_$_iter__4327.call(null,cljs.core.chunk_rest.call(null,s__4328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4330),null);
}
} else {
var y = cljs.core.first.call(null,s__4328__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__4323_$_iter__4327.call(null,cljs.core.rest.call(null,s__4328__$2)));
}
} else {
return null;
}
break;
}
});})(i__4325,start,stop,x,c__4521__auto__,size__4522__auto__,b__4326,s__4324__$2,temp__5735__auto__))
,null,null));
});})(i__4325,start,stop,x,c__4521__auto__,size__4522__auto__,b__4326,s__4324__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4347 = (i__4325 + (1));
i__4325 = G__4347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4326),pucks$worlds$ai$world5$agents_$_iter__4323.call(null,cljs.core.chunk_rest.call(null,s__4324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4326),null);
}
} else {
var x = cljs.core.first.call(null,s__4324__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__4324__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__4323_$_iter__4331(s__4332){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__4324__$2,temp__5735__auto__){
return (function (){
var s__4332__$1 = s__4332;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4332__$1);
if(temp__5735__auto____$1){
var s__4332__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4332__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4332__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4334 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4333 = (0);
while(true){
if((i__4333 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4333);
cljs.core.chunk_append.call(null,b__4334,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4348 = (i__4333 + (1));
i__4333 = G__4348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4334),pucks$worlds$ai$world5$agents_$_iter__4323_$_iter__4331.call(null,cljs.core.chunk_rest.call(null,s__4332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4334),null);
}
} else {
var y = cljs.core.first.call(null,s__4332__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__4323_$_iter__4331.call(null,cljs.core.rest.call(null,s__4332__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__4324__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__4324__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world5$agents_$_iter__4323.call(null,cljs.core.rest.call(null,s__4324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.user.user),pucks.agents.vent.vent.call(null),pucks.agents.zapper.zapper.call(null),pucks.agents.zapper.zapper.call(null)], null),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__4335(s__4336){
return (new cljs.core.LazySeq(null,(function (){
var s__4336__$1 = s__4336;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4336__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4336__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__4335_$_iter__4337(s__4338){
return (new cljs.core.LazySeq(null,((function (s__4336__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4338__$1 = s__4338;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4338__$1);
if(temp__5735__auto____$1){
var s__4338__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4338__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4338__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4340 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4339 = (0);
while(true){
if((i__4339 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4339);
cljs.core.chunk_append.call(null,b__4340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__4349 = (i__4339 + (1));
i__4339 = G__4349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4340),pucks$worlds$ai$world5$agents_$_iter__4335_$_iter__4337.call(null,cljs.core.chunk_rest.call(null,s__4338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4340),null);
}
} else {
var y = cljs.core.first.call(null,s__4338__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world5$agents_$_iter__4335_$_iter__4337.call(null,cljs.core.rest.call(null,s__4338__$2)));
}
} else {
return null;
}
break;
}
});})(s__4336__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4336__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world5$agents_$_iter__4335.call(null,cljs.core.rest.call(null,s__4336__$1)));
} else {
var G__4350 = cljs.core.rest.call(null,s__4336__$1);
s__4336__$1 = G__4350;
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
})())));
});
pucks.worlds.ai.world5.settings = (function pucks$worlds$ai$world5$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world5.js.map
