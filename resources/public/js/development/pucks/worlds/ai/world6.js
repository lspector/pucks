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
pucks.worlds.ai.world6.ventbox = (function pucks$worlds$ai$world6$ventbox(p__7180){
var vec__7181 = p__7180;
var center_x = cljs.core.nth.call(null,vec__7181,(0),null);
var center_y = cljs.core.nth.call(null,vec__7181,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),(center_y + (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x - (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center_x + (50)),center_y], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y - (50))], null)], null)),cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,(center_y + (50))], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center_x,center_y], null)], null))], null));
});
pucks.worlds.ai.world6.agents = (function pucks$worlds$ai$world6$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__7184(s__7185){
return (new cljs.core.LazySeq(null,(function (){
var s__7185__$1 = s__7185;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7185__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7185__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__7184_$_iter__7186(s__7187){
return (new cljs.core.LazySeq(null,((function (s__7185__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7187__$1 = s__7187;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7187__$1);
if(temp__5735__auto____$1){
var s__7187__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7187__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7187__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7189 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7188 = (0);
while(true){
if((i__7188 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7188);
cljs.core.chunk_append.call(null,b__7189,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__7220 = (i__7188 + (1));
i__7188 = G__7220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7189),pucks$worlds$ai$world6$agents_$_iter__7184_$_iter__7186.call(null,cljs.core.chunk_rest.call(null,s__7187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7189),null);
}
} else {
var y = cljs.core.first.call(null,s__7187__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$ai$world6$agents_$_iter__7184_$_iter__7186.call(null,cljs.core.rest.call(null,s__7187__$2)));
}
} else {
return null;
}
break;
}
});})(s__7185__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7185__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world6$agents_$_iter__7184.call(null,cljs.core.rest.call(null,s__7185__$1)));
} else {
var G__7221 = cljs.core.rest.call(null,s__7185__$1);
s__7185__$1 = G__7221;
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
})(),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__7190(s__7191){
return (new cljs.core.LazySeq(null,(function (){
var s__7191__$1 = s__7191;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7191__$1);
if(temp__5735__auto__){
var s__7191__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7191__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7191__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7193 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7192 = (0);
while(true){
if((i__7192 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7192);
cljs.core.chunk_append.call(null,b__7193,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7192,start,stop,y,c__4521__auto__,size__4522__auto__,b__7193,s__7191__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__7190_$_iter__7194(s__7195){
return (new cljs.core.LazySeq(null,((function (i__7192,start,stop,y,c__4521__auto__,size__4522__auto__,b__7193,s__7191__$2,temp__5735__auto__){
return (function (){
var s__7195__$1 = s__7195;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7195__$1);
if(temp__5735__auto____$1){
var s__7195__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7195__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7195__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7197 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7196 = (0);
while(true){
if((i__7196 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__7196);
cljs.core.chunk_append.call(null,b__7197,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7222 = (i__7196 + (1));
i__7196 = G__7222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7197),pucks$worlds$ai$world6$agents_$_iter__7190_$_iter__7194.call(null,cljs.core.chunk_rest.call(null,s__7195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7197),null);
}
} else {
var x = cljs.core.first.call(null,s__7195__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__7190_$_iter__7194.call(null,cljs.core.rest.call(null,s__7195__$2)));
}
} else {
return null;
}
break;
}
});})(i__7192,start,stop,y,c__4521__auto__,size__4522__auto__,b__7193,s__7191__$2,temp__5735__auto__))
,null,null));
});})(i__7192,start,stop,y,c__4521__auto__,size__4522__auto__,b__7193,s__7191__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7223 = (i__7192 + (1));
i__7192 = G__7223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7193),pucks$worlds$ai$world6$agents_$_iter__7190.call(null,cljs.core.chunk_rest.call(null,s__7191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7193),null);
}
} else {
var y = cljs.core.first.call(null,s__7191__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,y,s__7191__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__7190_$_iter__7198(s__7199){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__7191__$2,temp__5735__auto__){
return (function (){
var s__7199__$1 = s__7199;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7199__$1);
if(temp__5735__auto____$1){
var s__7199__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7199__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7199__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7201 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7200 = (0);
while(true){
if((i__7200 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7200);
cljs.core.chunk_append.call(null,b__7201,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7224 = (i__7200 + (1));
i__7200 = G__7224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7201),pucks$worlds$ai$world6$agents_$_iter__7190_$_iter__7198.call(null,cljs.core.chunk_rest.call(null,s__7199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7201),null);
}
} else {
var x = cljs.core.first.call(null,s__7199__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__7190_$_iter__7198.call(null,cljs.core.rest.call(null,s__7199__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__7191__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__7191__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world6$agents_$_iter__7190.call(null,cljs.core.rest.call(null,s__7191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__7202(s__7203){
return (new cljs.core.LazySeq(null,(function (){
var s__7203__$1 = s__7203;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7203__$1);
if(temp__5735__auto__){
var s__7203__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7203__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7203__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7205 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7204 = (0);
while(true){
if((i__7204 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7204);
cljs.core.chunk_append.call(null,b__7205,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7204,start,stop,x,c__4521__auto__,size__4522__auto__,b__7205,s__7203__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__7202_$_iter__7206(s__7207){
return (new cljs.core.LazySeq(null,((function (i__7204,start,stop,x,c__4521__auto__,size__4522__auto__,b__7205,s__7203__$2,temp__5735__auto__){
return (function (){
var s__7207__$1 = s__7207;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7207__$1);
if(temp__5735__auto____$1){
var s__7207__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7207__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7207__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7209 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7208 = (0);
while(true){
if((i__7208 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__7208);
cljs.core.chunk_append.call(null,b__7209,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7225 = (i__7208 + (1));
i__7208 = G__7225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7209),pucks$worlds$ai$world6$agents_$_iter__7202_$_iter__7206.call(null,cljs.core.chunk_rest.call(null,s__7207__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7209),null);
}
} else {
var y = cljs.core.first.call(null,s__7207__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__7202_$_iter__7206.call(null,cljs.core.rest.call(null,s__7207__$2)));
}
} else {
return null;
}
break;
}
});})(i__7204,start,stop,x,c__4521__auto__,size__4522__auto__,b__7205,s__7203__$2,temp__5735__auto__))
,null,null));
});})(i__7204,start,stop,x,c__4521__auto__,size__4522__auto__,b__7205,s__7203__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7226 = (i__7204 + (1));
i__7204 = G__7226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7205),pucks$worlds$ai$world6$agents_$_iter__7202.call(null,cljs.core.chunk_rest.call(null,s__7203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7205),null);
}
} else {
var x = cljs.core.first.call(null,s__7203__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__7203__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__7202_$_iter__7210(s__7211){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__7203__$2,temp__5735__auto__){
return (function (){
var s__7211__$1 = s__7211;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7211__$1);
if(temp__5735__auto____$1){
var s__7211__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7211__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7211__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7213 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7212 = (0);
while(true){
if((i__7212 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7212);
cljs.core.chunk_append.call(null,b__7213,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7227 = (i__7212 + (1));
i__7212 = G__7227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7213),pucks$worlds$ai$world6$agents_$_iter__7202_$_iter__7210.call(null,cljs.core.chunk_rest.call(null,s__7211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7213),null);
}
} else {
var y = cljs.core.first.call(null,s__7211__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world6$agents_$_iter__7202_$_iter__7210.call(null,cljs.core.rest.call(null,s__7211__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__7203__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__7203__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world6$agents_$_iter__7202.call(null,cljs.core.rest.call(null,s__7203__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),(function (){var locations = cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world6$agents_$_iter__7214(s__7215){
return (new cljs.core.LazySeq(null,(function (){
var s__7215__$1 = s__7215;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7215__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7215__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world6$agents_$_iter__7214_$_iter__7216(s__7217){
return (new cljs.core.LazySeq(null,((function (s__7215__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7217__$1 = s__7217;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7217__$1);
if(temp__5735__auto____$1){
var s__7217__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7217__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7217__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7219 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7218 = (0);
while(true){
if((i__7218 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7218);
cljs.core.chunk_append.call(null,b__7219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__7228 = (i__7218 + (1));
i__7218 = G__7228;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7219),pucks$worlds$ai$world6$agents_$_iter__7214_$_iter__7216.call(null,cljs.core.chunk_rest.call(null,s__7217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7219),null);
}
} else {
var y = cljs.core.first.call(null,s__7217__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world6$agents_$_iter__7214_$_iter__7216.call(null,cljs.core.rest.call(null,s__7217__$2)));
}
} else {
return null;
}
break;
}
});})(s__7215__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7215__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world6$agents_$_iter__7214.call(null,cljs.core.rest.call(null,s__7215__$1)));
} else {
var G__7229 = cljs.core.rest.call(null,s__7215__$1);
s__7215__$1 = G__7229;
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
