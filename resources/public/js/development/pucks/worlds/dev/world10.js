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
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6826(s__6827){
return (new cljs.core.LazySeq(null,(function (){
var s__6827__$1 = s__6827;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6827__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6827__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world10$agents_$_iter__6826_$_iter__6828(s__6829){
return (new cljs.core.LazySeq(null,((function (s__6827__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6829__$1 = s__6829;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__6829__$1);
if(temp__5735__auto____$1){
var s__6829__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6829__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6829__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6831 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6830 = (0);
while(true){
if((i__6830 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6830);
cljs.core.chunk_append.call(null,b__6831,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__6860 = (i__6830 + (1));
i__6830 = G__6860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6831),pucks$worlds$dev$world10$agents_$_iter__6826_$_iter__6828.call(null,cljs.core.chunk_rest.call(null,s__6829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6831),null);
}
} else {
var y = cljs.core.first.call(null,s__6829__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6826_$_iter__6828.call(null,cljs.core.rest.call(null,s__6829__$2)));
}
} else {
return null;
}
break;
}
});})(s__6827__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6827__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world10$agents_$_iter__6826.call(null,cljs.core.rest.call(null,s__6827__$1)));
} else {
var G__6861 = cljs.core.rest.call(null,s__6827__$1);
s__6827__$1 = G__6861;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6832(s__6833){
return (new cljs.core.LazySeq(null,(function (){
var s__6833__$1 = s__6833;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6833__$1);
if(temp__5735__auto__){
var s__6833__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6833__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6833__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6835 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6834 = (0);
while(true){
if((i__6834 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6834);
cljs.core.chunk_append.call(null,b__6835,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__6862 = (i__6834 + (1));
i__6834 = G__6862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6835),pucks$worlds$dev$world10$agents_$_iter__6832.call(null,cljs.core.chunk_rest.call(null,s__6833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6835),null);
}
} else {
var y = cljs.core.first.call(null,s__6833__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6832.call(null,cljs.core.rest.call(null,s__6833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(201),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6836(s__6837){
return (new cljs.core.LazySeq(null,(function (){
var s__6837__$1 = s__6837;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6837__$1);
if(temp__5735__auto__){
var s__6837__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6837__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6837__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6839 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6838 = (0);
while(true){
if((i__6838 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6838);
cljs.core.chunk_append.call(null,b__6839,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__6863 = (i__6838 + (1));
i__6838 = G__6863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6839),pucks$worlds$dev$world10$agents_$_iter__6836.call(null,cljs.core.chunk_rest.call(null,s__6837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6839),null);
}
} else {
var y = cljs.core.first.call(null,s__6837__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6836.call(null,cljs.core.rest.call(null,s__6837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6840(s__6841){
return (new cljs.core.LazySeq(null,(function (){
var s__6841__$1 = s__6841;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6841__$1);
if(temp__5735__auto__){
var s__6841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6841__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6841__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6843 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6842 = (0);
while(true){
if((i__6842 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6842);
cljs.core.chunk_append.call(null,b__6843,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)));

var G__6864 = (i__6842 + (1));
i__6842 = G__6864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6843),pucks$worlds$dev$world10$agents_$_iter__6840.call(null,cljs.core.chunk_rest.call(null,s__6841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6843),null);
}
} else {
var x = cljs.core.first.call(null,s__6841__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6840.call(null,cljs.core.rest.call(null,s__6841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6844(s__6845){
return (new cljs.core.LazySeq(null,(function (){
var s__6845__$1 = s__6845;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6845__$1);
if(temp__5735__auto__){
var s__6845__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6845__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6845__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6847 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6846 = (0);
while(true){
if((i__6846 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6846);
cljs.core.chunk_append.call(null,b__6847,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)));

var G__6865 = (i__6846 + (1));
i__6846 = G__6865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6847),pucks$worlds$dev$world10$agents_$_iter__6844.call(null,cljs.core.chunk_rest.call(null,s__6845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6847),null);
}
} else {
var x = cljs.core.first.call(null,s__6845__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6844.call(null,cljs.core.rest.call(null,s__6845__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6848(s__6849){
return (new cljs.core.LazySeq(null,(function (){
var s__6849__$1 = s__6849;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6849__$1);
if(temp__5735__auto__){
var s__6849__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6849__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6849__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6851 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6850 = (0);
while(true){
if((i__6850 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6850);
cljs.core.chunk_append.call(null,b__6851,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)));

var G__6866 = (i__6850 + (1));
i__6850 = G__6866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6851),pucks$worlds$dev$world10$agents_$_iter__6848.call(null,cljs.core.chunk_rest.call(null,s__6849__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6851),null);
}
} else {
var x = cljs.core.first.call(null,s__6849__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6848.call(null,cljs.core.rest.call(null,s__6849__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6852(s__6853){
return (new cljs.core.LazySeq(null,(function (){
var s__6853__$1 = s__6853;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6853__$1);
if(temp__5735__auto__){
var s__6853__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6853__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6853__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6855 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6854 = (0);
while(true){
if((i__6854 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6854);
cljs.core.chunk_append.call(null,b__6855,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)));

var G__6867 = (i__6854 + (1));
i__6854 = G__6867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6855),pucks$worlds$dev$world10$agents_$_iter__6852.call(null,cljs.core.chunk_rest.call(null,s__6853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6855),null);
}
} else {
var y = cljs.core.first.call(null,s__6853__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6852.call(null,cljs.core.rest.call(null,s__6853__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world10$agents_$_iter__6856(s__6857){
return (new cljs.core.LazySeq(null,(function (){
var s__6857__$1 = s__6857;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6857__$1);
if(temp__5735__auto__){
var s__6857__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6857__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6857__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6859 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6858 = (0);
while(true){
if((i__6858 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6858);
cljs.core.chunk_append.call(null,b__6859,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)));

var G__6868 = (i__6858 + (1));
i__6858 = G__6868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6859),pucks$worlds$dev$world10$agents_$_iter__6856.call(null,cljs.core.chunk_rest.call(null,s__6857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6859),null);
}
} else {
var y = cljs.core.first.call(null,s__6857__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)),pucks$worlds$dev$world10$agents_$_iter__6856.call(null,cljs.core.rest.call(null,s__6857__$2)));
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
