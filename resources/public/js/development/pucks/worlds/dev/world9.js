// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world9');
goog.require('cljs.core');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.shooter');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
pucks.worlds.dev.world9.agents = (function pucks$worlds$dev$world9$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3649(s__3650){
return (new cljs.core.LazySeq(null,(function (){
var s__3650__$1 = s__3650;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3650__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3650__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world9$agents_$_iter__3649_$_iter__3651(s__3652){
return (new cljs.core.LazySeq(null,((function (s__3650__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3652__$1 = s__3652;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3652__$1);
if(temp__5735__auto____$1){
var s__3652__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3652__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3652__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3654 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3653 = (0);
while(true){
if((i__3653 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3653);
cljs.core.chunk_append.call(null,b__3654,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__3683 = (i__3653 + (1));
i__3653 = G__3683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3654),pucks$worlds$dev$world9$agents_$_iter__3649_$_iter__3651.call(null,cljs.core.chunk_rest.call(null,s__3652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3654),null);
}
} else {
var y = cljs.core.first.call(null,s__3652__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3649_$_iter__3651.call(null,cljs.core.rest.call(null,s__3652__$2)));
}
} else {
return null;
}
break;
}
});})(s__3650__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3650__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world9$agents_$_iter__3649.call(null,cljs.core.rest.call(null,s__3650__$1)));
} else {
var G__3684 = cljs.core.rest.call(null,s__3650__$1);
s__3650__$1 = G__3684;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3655(s__3656){
return (new cljs.core.LazySeq(null,(function (){
var s__3656__$1 = s__3656;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3656__$1);
if(temp__5735__auto__){
var s__3656__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3656__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3656__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3658 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3657 = (0);
while(true){
if((i__3657 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3657);
cljs.core.chunk_append.call(null,b__3658,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3685 = (i__3657 + (1));
i__3657 = G__3685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3658),pucks$worlds$dev$world9$agents_$_iter__3655.call(null,cljs.core.chunk_rest.call(null,s__3656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3658),null);
}
} else {
var y = cljs.core.first.call(null,s__3656__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3655.call(null,cljs.core.rest.call(null,s__3656__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(201),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3659(s__3660){
return (new cljs.core.LazySeq(null,(function (){
var s__3660__$1 = s__3660;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3660__$1);
if(temp__5735__auto__){
var s__3660__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3660__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3660__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3662 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3661 = (0);
while(true){
if((i__3661 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3661);
cljs.core.chunk_append.call(null,b__3662,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__3686 = (i__3661 + (1));
i__3661 = G__3686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3662),pucks$worlds$dev$world9$agents_$_iter__3659.call(null,cljs.core.chunk_rest.call(null,s__3660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3662),null);
}
} else {
var y = cljs.core.first.call(null,s__3660__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3659.call(null,cljs.core.rest.call(null,s__3660__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3663(s__3664){
return (new cljs.core.LazySeq(null,(function (){
var s__3664__$1 = s__3664;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3664__$1);
if(temp__5735__auto__){
var s__3664__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3664__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3664__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3666 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3665 = (0);
while(true){
if((i__3665 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3665);
cljs.core.chunk_append.call(null,b__3666,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)));

var G__3687 = (i__3665 + (1));
i__3665 = G__3687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3666),pucks$worlds$dev$world9$agents_$_iter__3663.call(null,cljs.core.chunk_rest.call(null,s__3664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3666),null);
}
} else {
var x = cljs.core.first.call(null,s__3664__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3663.call(null,cljs.core.rest.call(null,s__3664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3667(s__3668){
return (new cljs.core.LazySeq(null,(function (){
var s__3668__$1 = s__3668;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3668__$1);
if(temp__5735__auto__){
var s__3668__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3668__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3668__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3670 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3669 = (0);
while(true){
if((i__3669 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3669);
cljs.core.chunk_append.call(null,b__3670,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)));

var G__3688 = (i__3669 + (1));
i__3669 = G__3688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3670),pucks$worlds$dev$world9$agents_$_iter__3667.call(null,cljs.core.chunk_rest.call(null,s__3668__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3670),null);
}
} else {
var x = cljs.core.first.call(null,s__3668__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3667.call(null,cljs.core.rest.call(null,s__3668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3671(s__3672){
return (new cljs.core.LazySeq(null,(function (){
var s__3672__$1 = s__3672;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3672__$1);
if(temp__5735__auto__){
var s__3672__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3672__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3672__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3674 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3673 = (0);
while(true){
if((i__3673 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3673);
cljs.core.chunk_append.call(null,b__3674,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)));

var G__3689 = (i__3673 + (1));
i__3673 = G__3689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3674),pucks$worlds$dev$world9$agents_$_iter__3671.call(null,cljs.core.chunk_rest.call(null,s__3672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3674),null);
}
} else {
var x = cljs.core.first.call(null,s__3672__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3671.call(null,cljs.core.rest.call(null,s__3672__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3675(s__3676){
return (new cljs.core.LazySeq(null,(function (){
var s__3676__$1 = s__3676;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3676__$1);
if(temp__5735__auto__){
var s__3676__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3676__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3676__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3678 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3677 = (0);
while(true){
if((i__3677 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3677);
cljs.core.chunk_append.call(null,b__3678,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)));

var G__3690 = (i__3677 + (1));
i__3677 = G__3690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3678),pucks$worlds$dev$world9$agents_$_iter__3675.call(null,cljs.core.chunk_rest.call(null,s__3676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3678),null);
}
} else {
var y = cljs.core.first.call(null,s__3676__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3675.call(null,cljs.core.rest.call(null,s__3676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__3679(s__3680){
return (new cljs.core.LazySeq(null,(function (){
var s__3680__$1 = s__3680;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3680__$1);
if(temp__5735__auto__){
var s__3680__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3680__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3680__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3682 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3681 = (0);
while(true){
if((i__3681 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3681);
cljs.core.chunk_append.call(null,b__3682,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)));

var G__3691 = (i__3681 + (1));
i__3681 = G__3691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3682),pucks$worlds$dev$world9$agents_$_iter__3679.call(null,cljs.core.chunk_rest.call(null,s__3680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3682),null);
}
} else {
var y = cljs.core.first.call(null,s__3680__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__3679.call(null,cljs.core.rest.call(null,s__3680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.shooter.shooter),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null))], null));
});
pucks.worlds.dev.world9.settings = (function pucks$worlds$dev$world9$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world9.js.map
