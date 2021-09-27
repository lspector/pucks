// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world13');
goog.require('cljs.core');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.linear');
goog.require('pucks.agents.zigzag');
goog.require('pucks.agents.swarmer');
pucks.worlds.dev.world13.agents = (function pucks$worlds$dev$world13$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__4193(s__4194){
return (new cljs.core.LazySeq(null,(function (){
var s__4194__$1 = s__4194;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4194__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4194__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__4193_$_iter__4195(s__4196){
return (new cljs.core.LazySeq(null,((function (s__4194__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4196__$1 = s__4196;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4196__$1);
if(temp__5735__auto____$1){
var s__4196__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4196__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4196__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4198 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4197 = (0);
while(true){
if((i__4197 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4197);
cljs.core.chunk_append.call(null,b__4198,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__4229 = (i__4197 + (1));
i__4197 = G__4229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4198),pucks$worlds$dev$world13$agents_$_iter__4193_$_iter__4195.call(null,cljs.core.chunk_rest.call(null,s__4196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4198),null);
}
} else {
var y = cljs.core.first.call(null,s__4196__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$dev$world13$agents_$_iter__4193_$_iter__4195.call(null,cljs.core.rest.call(null,s__4196__$2)));
}
} else {
return null;
}
break;
}
});})(s__4194__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4194__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(1551),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world13$agents_$_iter__4193.call(null,cljs.core.rest.call(null,s__4194__$1)));
} else {
var G__4230 = cljs.core.rest.call(null,s__4194__$1);
s__4194__$1 = G__4230;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(50),(1551),(100)));
})(),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__4199(s__4200){
return (new cljs.core.LazySeq(null,(function (){
var s__4200__$1 = s__4200;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4200__$1);
if(temp__5735__auto__){
var s__4200__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4200__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4200__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4202 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4201 = (0);
while(true){
if((i__4201 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4201);
cljs.core.chunk_append.call(null,b__4202,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (i__4201,start,stop,y,c__4521__auto__,size__4522__auto__,b__4202,s__4200__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__4199_$_iter__4203(s__4204){
return (new cljs.core.LazySeq(null,((function (i__4201,start,stop,y,c__4521__auto__,size__4522__auto__,b__4202,s__4200__$2,temp__5735__auto__){
return (function (){
var s__4204__$1 = s__4204;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4204__$1);
if(temp__5735__auto____$1){
var s__4204__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4204__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4204__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4206 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4205 = (0);
while(true){
if((i__4205 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__4205);
cljs.core.chunk_append.call(null,b__4206,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4231 = (i__4205 + (1));
i__4205 = G__4231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4206),pucks$worlds$dev$world13$agents_$_iter__4199_$_iter__4203.call(null,cljs.core.chunk_rest.call(null,s__4204__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4206),null);
}
} else {
var x = cljs.core.first.call(null,s__4204__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__4199_$_iter__4203.call(null,cljs.core.rest.call(null,s__4204__$2)));
}
} else {
return null;
}
break;
}
});})(i__4201,start,stop,y,c__4521__auto__,size__4522__auto__,b__4202,s__4200__$2,temp__5735__auto__))
,null,null));
});})(i__4201,start,stop,y,c__4521__auto__,size__4522__auto__,b__4202,s__4200__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4232 = (i__4201 + (1));
i__4201 = G__4232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4202),pucks$worlds$dev$world13$agents_$_iter__4199.call(null,cljs.core.chunk_rest.call(null,s__4200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4202),null);
}
} else {
var y = cljs.core.first.call(null,s__4200__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (start,stop,y,s__4200__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__4199_$_iter__4207(s__4208){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__4200__$2,temp__5735__auto__){
return (function (){
var s__4208__$1 = s__4208;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4208__$1);
if(temp__5735__auto____$1){
var s__4208__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4208__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4208__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4210 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4209 = (0);
while(true){
if((i__4209 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4209);
cljs.core.chunk_append.call(null,b__4210,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4233 = (i__4209 + (1));
i__4209 = G__4233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4210),pucks$worlds$dev$world13$agents_$_iter__4199_$_iter__4207.call(null,cljs.core.chunk_rest.call(null,s__4208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4210),null);
}
} else {
var x = cljs.core.first.call(null,s__4208__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__4199_$_iter__4207.call(null,cljs.core.rest.call(null,s__4208__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__4200__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__4200__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$dev$world13$agents_$_iter__4199.call(null,cljs.core.rest.call(null,s__4200__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__4211(s__4212){
return (new cljs.core.LazySeq(null,(function (){
var s__4212__$1 = s__4212;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4212__$1);
if(temp__5735__auto__){
var s__4212__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4212__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4212__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4214 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4213 = (0);
while(true){
if((i__4213 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4213);
cljs.core.chunk_append.call(null,b__4214,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__4213,start,stop,x,c__4521__auto__,size__4522__auto__,b__4214,s__4212__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__4211_$_iter__4215(s__4216){
return (new cljs.core.LazySeq(null,((function (i__4213,start,stop,x,c__4521__auto__,size__4522__auto__,b__4214,s__4212__$2,temp__5735__auto__){
return (function (){
var s__4216__$1 = s__4216;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4216__$1);
if(temp__5735__auto____$1){
var s__4216__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4216__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__4216__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__4218 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__4217 = (0);
while(true){
if((i__4217 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__4217);
cljs.core.chunk_append.call(null,b__4218,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4234 = (i__4217 + (1));
i__4217 = G__4234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4218),pucks$worlds$dev$world13$agents_$_iter__4211_$_iter__4215.call(null,cljs.core.chunk_rest.call(null,s__4216__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4218),null);
}
} else {
var y = cljs.core.first.call(null,s__4216__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__4211_$_iter__4215.call(null,cljs.core.rest.call(null,s__4216__$2)));
}
} else {
return null;
}
break;
}
});})(i__4213,start,stop,x,c__4521__auto__,size__4522__auto__,b__4214,s__4212__$2,temp__5735__auto__))
,null,null));
});})(i__4213,start,stop,x,c__4521__auto__,size__4522__auto__,b__4214,s__4212__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__4235 = (i__4213 + (1));
i__4213 = G__4235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4214),pucks$worlds$dev$world13$agents_$_iter__4211.call(null,cljs.core.chunk_rest.call(null,s__4212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4214),null);
}
} else {
var x = cljs.core.first.call(null,s__4212__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__4212__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__4211_$_iter__4219(s__4220){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__4212__$2,temp__5735__auto__){
return (function (){
var s__4220__$1 = s__4220;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4220__$1);
if(temp__5735__auto____$1){
var s__4220__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4220__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4220__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4222 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4221 = (0);
while(true){
if((i__4221 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4221);
cljs.core.chunk_append.call(null,b__4222,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4236 = (i__4221 + (1));
i__4221 = G__4236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4222),pucks$worlds$dev$world13$agents_$_iter__4211_$_iter__4219.call(null,cljs.core.chunk_rest.call(null,s__4220__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4222),null);
}
} else {
var y = cljs.core.first.call(null,s__4220__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__4211_$_iter__4219.call(null,cljs.core.rest.call(null,s__4220__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__4212__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__4212__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$dev$world13$agents_$_iter__4211.call(null,cljs.core.rest.call(null,s__4212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),cljs.core.concat.call(null,cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.linear.linear);
})),cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer);
})),cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.zigzag.zigzag);
})),cljs.core.repeatedly.call(null,(24),(function (){
return pucks.agents.vent.vent.call(null);
})),cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.zapper.zapper.call(null);
}))),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__4223(s__4224){
return (new cljs.core.LazySeq(null,(function (){
var s__4224__$1 = s__4224;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4224__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4224__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__4223_$_iter__4225(s__4226){
return (new cljs.core.LazySeq(null,((function (s__4224__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4226__$1 = s__4226;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4226__$1);
if(temp__5735__auto____$1){
var s__4226__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4226__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4226__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4228 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4227 = (0);
while(true){
if((i__4227 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4227);
cljs.core.chunk_append.call(null,b__4228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__4237 = (i__4227 + (1));
i__4227 = G__4237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4228),pucks$worlds$dev$world13$agents_$_iter__4223_$_iter__4225.call(null,cljs.core.chunk_rest.call(null,s__4226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4228),null);
}
} else {
var y = cljs.core.first.call(null,s__4226__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$dev$world13$agents_$_iter__4223_$_iter__4225.call(null,cljs.core.rest.call(null,s__4226__$2)));
}
} else {
return null;
}
break;
}
});})(s__4224__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4224__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world13$agents_$_iter__4223.call(null,cljs.core.rest.call(null,s__4224__$1)));
} else {
var G__4238 = cljs.core.rest.call(null,s__4224__$1);
s__4224__$1 = G__4238;
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
})()))));
});
pucks.worlds.dev.world13.settings = (function pucks$worlds$dev$world13$settings(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1600),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false], null);
});

//# sourceMappingURL=world13.js.map
