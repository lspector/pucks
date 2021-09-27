// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world10');
goog.require('cljs.core');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.darter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world10.agents = (function pucks$worlds$dev$world10$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3602(s__3603){
return (new cljs.core.LazySeq(null,(function (){
var s__3603__$1 = s__3603;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3603__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3603__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world10$agents_$_iter__3602_$_iter__3604(s__3605){
return (new cljs.core.LazySeq(null,((function (s__3603__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3605__$1 = s__3605;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3605__$1);
if(temp__5735__auto____$1){
var s__3605__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3605__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3605__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3607 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3606 = (0);
while(true){
if((i__3606 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3606);
cljs.core.chunk_append.call(null,b__3607,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__3636 = (i__3606 + (1));
i__3606 = G__3636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3607),pucks$worlds$dev$world10$agents_$_iter__3602_$_iter__3604.call(null,cljs.core.chunk_rest.call(null,s__3605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3607),null);
}
} else {
var y = cljs.core.first.call(null,s__3605__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3602_$_iter__3604.call(null,cljs.core.rest.call(null,s__3605__$2)));
}
} else {
return null;
}
break;
}
});})(s__3603__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3603__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world10$agents_$_iter__3602.call(null,cljs.core.rest.call(null,s__3603__$1)));
} else {
var G__3637 = cljs.core.rest.call(null,s__3603__$1);
s__3603__$1 = G__3637;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3608(s__3609){
return (new cljs.core.LazySeq(null,(function (){
var s__3609__$1 = s__3609;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3609__$1);
if(temp__5735__auto__){
var s__3609__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3609__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3609__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3611 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3610 = (0);
while(true){
if((i__3610 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3610);
cljs.core.chunk_append.call(null,b__3611,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3638 = (i__3610 + (1));
i__3610 = G__3638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3611),pucks$worlds$dev$world10$agents_$_iter__3608.call(null,cljs.core.chunk_rest.call(null,s__3609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3611),null);
}
} else {
var y = cljs.core.first.call(null,s__3609__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3608.call(null,cljs.core.rest.call(null,s__3609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(201),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3612(s__3613){
return (new cljs.core.LazySeq(null,(function (){
var s__3613__$1 = s__3613;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3613__$1);
if(temp__5735__auto__){
var s__3613__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3613__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3613__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3615 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3614 = (0);
while(true){
if((i__3614 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3614);
cljs.core.chunk_append.call(null,b__3615,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3639 = (i__3614 + (1));
i__3614 = G__3639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3615),pucks$worlds$dev$world10$agents_$_iter__3612.call(null,cljs.core.chunk_rest.call(null,s__3613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3615),null);
}
} else {
var y = cljs.core.first.call(null,s__3613__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3612.call(null,cljs.core.rest.call(null,s__3613__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3616(s__3617){
return (new cljs.core.LazySeq(null,(function (){
var s__3617__$1 = s__3617;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3617__$1);
if(temp__5735__auto__){
var s__3617__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3617__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3617__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3619 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3618 = (0);
while(true){
if((i__3618 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3618);
cljs.core.chunk_append.call(null,b__3619,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)));

var G__3640 = (i__3618 + (1));
i__3618 = G__3640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3619),pucks$worlds$dev$world10$agents_$_iter__3616.call(null,cljs.core.chunk_rest.call(null,s__3617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3619),null);
}
} else {
var x = cljs.core.first.call(null,s__3617__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3616.call(null,cljs.core.rest.call(null,s__3617__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3620(s__3621){
return (new cljs.core.LazySeq(null,(function (){
var s__3621__$1 = s__3621;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3621__$1);
if(temp__5735__auto__){
var s__3621__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3621__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3621__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3623 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3622 = (0);
while(true){
if((i__3622 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3622);
cljs.core.chunk_append.call(null,b__3623,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)));

var G__3641 = (i__3622 + (1));
i__3622 = G__3641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3623),pucks$worlds$dev$world10$agents_$_iter__3620.call(null,cljs.core.chunk_rest.call(null,s__3621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3623),null);
}
} else {
var x = cljs.core.first.call(null,s__3621__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3620.call(null,cljs.core.rest.call(null,s__3621__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3624(s__3625){
return (new cljs.core.LazySeq(null,(function (){
var s__3625__$1 = s__3625;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3625__$1);
if(temp__5735__auto__){
var s__3625__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3625__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3625__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3627 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3626 = (0);
while(true){
if((i__3626 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3626);
cljs.core.chunk_append.call(null,b__3627,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)));

var G__3642 = (i__3626 + (1));
i__3626 = G__3642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3627),pucks$worlds$dev$world10$agents_$_iter__3624.call(null,cljs.core.chunk_rest.call(null,s__3625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3627),null);
}
} else {
var x = cljs.core.first.call(null,s__3625__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3624.call(null,cljs.core.rest.call(null,s__3625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3628(s__3629){
return (new cljs.core.LazySeq(null,(function (){
var s__3629__$1 = s__3629;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3629__$1);
if(temp__5735__auto__){
var s__3629__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3629__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3629__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3631 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3630 = (0);
while(true){
if((i__3630 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3630);
cljs.core.chunk_append.call(null,b__3631,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)));

var G__3643 = (i__3630 + (1));
i__3630 = G__3643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3631),pucks$worlds$dev$world10$agents_$_iter__3628.call(null,cljs.core.chunk_rest.call(null,s__3629__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3631),null);
}
} else {
var y = cljs.core.first.call(null,s__3629__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3628.call(null,cljs.core.rest.call(null,s__3629__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__3632(s__3633){
return (new cljs.core.LazySeq(null,(function (){
var s__3633__$1 = s__3633;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3633__$1);
if(temp__5735__auto__){
var s__3633__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3633__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3633__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3635 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3634 = (0);
while(true){
if((i__3634 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3634);
cljs.core.chunk_append.call(null,b__3635,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)));

var G__3644 = (i__3634 + (1));
i__3634 = G__3644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3635),pucks$worlds$dev$world10$agents_$_iter__3632.call(null,cljs.core.chunk_rest.call(null,s__3633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3635),null);
}
} else {
var y = cljs.core.first.call(null,s__3633__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__3632.call(null,cljs.core.rest.call(null,s__3633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.darter.darter),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null))], null));
});
pucks.worlds.dev.world10.settings = (function pucks$worlds$dev$world10$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world10.js.map
