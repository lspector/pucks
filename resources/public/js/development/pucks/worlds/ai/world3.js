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
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7808(s__7809){
return (new cljs.core.LazySeq(null,(function (){
var s__7809__$1 = s__7809;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7809__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7809__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world3$agents_$_iter__7808_$_iter__7810(s__7811){
return (new cljs.core.LazySeq(null,((function (s__7809__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7811__$1 = s__7811;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7811__$1);
if(temp__5735__auto____$1){
var s__7811__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7811__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7811__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7813 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7812 = (0);
while(true){
if((i__7812 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7812);
cljs.core.chunk_append.call(null,b__7813,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7842 = (i__7812 + (1));
i__7812 = G__7842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7813),pucks$worlds$ai$world3$agents_$_iter__7808_$_iter__7810.call(null,cljs.core.chunk_rest.call(null,s__7811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7813),null);
}
} else {
var y = cljs.core.first.call(null,s__7811__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7808_$_iter__7810.call(null,cljs.core.rest.call(null,s__7811__$2)));
}
} else {
return null;
}
break;
}
});})(s__7809__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7809__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world3$agents_$_iter__7808.call(null,cljs.core.rest.call(null,s__7809__$1)));
} else {
var G__7843 = cljs.core.rest.call(null,s__7809__$1);
s__7809__$1 = G__7843;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7814(s__7815){
return (new cljs.core.LazySeq(null,(function (){
var s__7815__$1 = s__7815;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7815__$1);
if(temp__5735__auto__){
var s__7815__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7815__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7815__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7817 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7816 = (0);
while(true){
if((i__7816 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7816);
cljs.core.chunk_append.call(null,b__7817,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__7844 = (i__7816 + (1));
i__7816 = G__7844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7817),pucks$worlds$ai$world3$agents_$_iter__7814.call(null,cljs.core.chunk_rest.call(null,s__7815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7817),null);
}
} else {
var y = cljs.core.first.call(null,s__7815__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7814.call(null,cljs.core.rest.call(null,s__7815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(201),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7818(s__7819){
return (new cljs.core.LazySeq(null,(function (){
var s__7819__$1 = s__7819;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7819__$1);
if(temp__5735__auto__){
var s__7819__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7819__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7819__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7821 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7820 = (0);
while(true){
if((i__7820 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7820);
cljs.core.chunk_append.call(null,b__7821,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__7845 = (i__7820 + (1));
i__7820 = G__7845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7821),pucks$worlds$ai$world3$agents_$_iter__7818.call(null,cljs.core.chunk_rest.call(null,s__7819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7821),null);
}
} else {
var y = cljs.core.first.call(null,s__7819__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7818.call(null,cljs.core.rest.call(null,s__7819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7822(s__7823){
return (new cljs.core.LazySeq(null,(function (){
var s__7823__$1 = s__7823;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7823__$1);
if(temp__5735__auto__){
var s__7823__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7823__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7823__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7825 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7824 = (0);
while(true){
if((i__7824 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7824);
cljs.core.chunk_append.call(null,b__7825,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)));

var G__7846 = (i__7824 + (1));
i__7824 = G__7846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7825),pucks$worlds$ai$world3$agents_$_iter__7822.call(null,cljs.core.chunk_rest.call(null,s__7823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7825),null);
}
} else {
var x = cljs.core.first.call(null,s__7823__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7822.call(null,cljs.core.rest.call(null,s__7823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7826(s__7827){
return (new cljs.core.LazySeq(null,(function (){
var s__7827__$1 = s__7827;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7827__$1);
if(temp__5735__auto__){
var s__7827__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7827__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7827__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7829 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7828 = (0);
while(true){
if((i__7828 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7828);
cljs.core.chunk_append.call(null,b__7829,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)));

var G__7847 = (i__7828 + (1));
i__7828 = G__7847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7829),pucks$worlds$ai$world3$agents_$_iter__7826.call(null,cljs.core.chunk_rest.call(null,s__7827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7829),null);
}
} else {
var x = cljs.core.first.call(null,s__7827__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7826.call(null,cljs.core.rest.call(null,s__7827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7830(s__7831){
return (new cljs.core.LazySeq(null,(function (){
var s__7831__$1 = s__7831;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7831__$1);
if(temp__5735__auto__){
var s__7831__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7831__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7831__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7833 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7832 = (0);
while(true){
if((i__7832 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7832);
cljs.core.chunk_append.call(null,b__7833,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)));

var G__7848 = (i__7832 + (1));
i__7832 = G__7848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7833),pucks$worlds$ai$world3$agents_$_iter__7830.call(null,cljs.core.chunk_rest.call(null,s__7831__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7833),null);
}
} else {
var x = cljs.core.first.call(null,s__7831__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7830.call(null,cljs.core.rest.call(null,s__7831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7834(s__7835){
return (new cljs.core.LazySeq(null,(function (){
var s__7835__$1 = s__7835;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7835__$1);
if(temp__5735__auto__){
var s__7835__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7835__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7835__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7837 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7836 = (0);
while(true){
if((i__7836 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7836);
cljs.core.chunk_append.call(null,b__7837,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)));

var G__7849 = (i__7836 + (1));
i__7836 = G__7849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7837),pucks$worlds$ai$world3$agents_$_iter__7834.call(null,cljs.core.chunk_rest.call(null,s__7835__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7837),null);
}
} else {
var y = cljs.core.first.call(null,s__7835__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7834.call(null,cljs.core.rest.call(null,s__7835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world3$agents_$_iter__7838(s__7839){
return (new cljs.core.LazySeq(null,(function (){
var s__7839__$1 = s__7839;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7839__$1);
if(temp__5735__auto__){
var s__7839__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7839__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7839__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7841 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7840 = (0);
while(true){
if((i__7840 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7840);
cljs.core.chunk_append.call(null,b__7841,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)));

var G__7850 = (i__7840 + (1));
i__7840 = G__7850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7841),pucks$worlds$ai$world3$agents_$_iter__7838.call(null,cljs.core.chunk_rest.call(null,s__7839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7841),null);
}
} else {
var y = cljs.core.first.call(null,s__7839__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)),pucks$worlds$ai$world3$agents_$_iter__7838.call(null,cljs.core.rest.call(null,s__7839__$2)));
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
