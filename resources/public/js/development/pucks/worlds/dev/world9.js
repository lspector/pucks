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
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6883(s__6884){
return (new cljs.core.LazySeq(null,(function (){
var s__6884__$1 = s__6884;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6884__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6884__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world9$agents_$_iter__6883_$_iter__6885(s__6886){
return (new cljs.core.LazySeq(null,((function (s__6884__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6886__$1 = s__6886;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__6886__$1);
if(temp__5735__auto____$1){
var s__6886__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6886__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6886__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6888 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6887 = (0);
while(true){
if((i__6887 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6887);
cljs.core.chunk_append.call(null,b__6888,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__6917 = (i__6887 + (1));
i__6887 = G__6917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6888),pucks$worlds$dev$world9$agents_$_iter__6883_$_iter__6885.call(null,cljs.core.chunk_rest.call(null,s__6886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6888),null);
}
} else {
var y = cljs.core.first.call(null,s__6886__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6883_$_iter__6885.call(null,cljs.core.rest.call(null,s__6886__$2)));
}
} else {
return null;
}
break;
}
});})(s__6884__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6884__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world9$agents_$_iter__6883.call(null,cljs.core.rest.call(null,s__6884__$1)));
} else {
var G__6918 = cljs.core.rest.call(null,s__6884__$1);
s__6884__$1 = G__6918;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6889(s__6890){
return (new cljs.core.LazySeq(null,(function (){
var s__6890__$1 = s__6890;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6890__$1);
if(temp__5735__auto__){
var s__6890__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6890__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6890__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6892 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6891 = (0);
while(true){
if((i__6891 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6891);
cljs.core.chunk_append.call(null,b__6892,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__6919 = (i__6891 + (1));
i__6891 = G__6919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6892),pucks$worlds$dev$world9$agents_$_iter__6889.call(null,cljs.core.chunk_rest.call(null,s__6890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6892),null);
}
} else {
var y = cljs.core.first.call(null,s__6890__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6889.call(null,cljs.core.rest.call(null,s__6890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(201),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6893(s__6894){
return (new cljs.core.LazySeq(null,(function (){
var s__6894__$1 = s__6894;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6894__$1);
if(temp__5735__auto__){
var s__6894__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6894__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6894__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6896 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6895 = (0);
while(true){
if((i__6895 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6895);
cljs.core.chunk_append.call(null,b__6896,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)));

var G__6920 = (i__6895 + (1));
i__6895 = G__6920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6896),pucks$worlds$dev$world9$agents_$_iter__6893.call(null,cljs.core.chunk_rest.call(null,s__6894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6896),null);
}
} else {
var y = cljs.core.first.call(null,s__6894__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6893.call(null,cljs.core.rest.call(null,s__6894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6897(s__6898){
return (new cljs.core.LazySeq(null,(function (){
var s__6898__$1 = s__6898;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6898__$1);
if(temp__5735__auto__){
var s__6898__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6898__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6898__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6900 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6899 = (0);
while(true){
if((i__6899 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6899);
cljs.core.chunk_append.call(null,b__6900,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)));

var G__6921 = (i__6899 + (1));
i__6899 = G__6921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6900),pucks$worlds$dev$world9$agents_$_iter__6897.call(null,cljs.core.chunk_rest.call(null,s__6898__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6900),null);
}
} else {
var x = cljs.core.first.call(null,s__6898__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(400)], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6897.call(null,cljs.core.rest.call(null,s__6898__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(601),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6901(s__6902){
return (new cljs.core.LazySeq(null,(function (){
var s__6902__$1 = s__6902;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6902__$1);
if(temp__5735__auto__){
var s__6902__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6902__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6902__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6904 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6903 = (0);
while(true){
if((i__6903 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6903);
cljs.core.chunk_append.call(null,b__6904,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)));

var G__6922 = (i__6903 + (1));
i__6903 = G__6922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6904),pucks$worlds$dev$world9$agents_$_iter__6901.call(null,cljs.core.chunk_rest.call(null,s__6902__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6904),null);
}
} else {
var x = cljs.core.first.call(null,s__6902__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0)], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6901.call(null,cljs.core.rest.call(null,s__6902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6905(s__6906){
return (new cljs.core.LazySeq(null,(function (){
var s__6906__$1 = s__6906;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6906__$1);
if(temp__5735__auto__){
var s__6906__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6906__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6906__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6908 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6907 = (0);
while(true){
if((i__6907 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6907);
cljs.core.chunk_append.call(null,b__6908,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)));

var G__6923 = (i__6907 + (1));
i__6907 = G__6923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6908),pucks$worlds$dev$world9$agents_$_iter__6905.call(null,cljs.core.chunk_rest.call(null,s__6906__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6908),null);
}
} else {
var x = cljs.core.first.call(null,s__6906__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(799)], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6905.call(null,cljs.core.rest.call(null,s__6906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(400),(800),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6909(s__6910){
return (new cljs.core.LazySeq(null,(function (){
var s__6910__$1 = s__6910;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6910__$1);
if(temp__5735__auto__){
var s__6910__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6910__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6910__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6912 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6911 = (0);
while(true){
if((i__6911 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6911);
cljs.core.chunk_append.call(null,b__6912,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)));

var G__6924 = (i__6911 + (1));
i__6911 = G__6924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6912),pucks$worlds$dev$world9$agents_$_iter__6909.call(null,cljs.core.chunk_rest.call(null,s__6910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6912),null);
}
} else {
var y = cljs.core.first.call(null,s__6910__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6909.call(null,cljs.core.rest.call(null,s__6910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(801),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world9$agents_$_iter__6913(s__6914){
return (new cljs.core.LazySeq(null,(function (){
var s__6914__$1 = s__6914;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6914__$1);
if(temp__5735__auto__){
var s__6914__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6914__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6914__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6916 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6915 = (0);
while(true){
if((i__6915 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6915);
cljs.core.chunk_append.call(null,b__6916,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)));

var G__6925 = (i__6915 + (1));
i__6915 = G__6925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6916),pucks$worlds$dev$world9$agents_$_iter__6913.call(null,cljs.core.chunk_rest.call(null,s__6914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6916),null);
}
} else {
var y = cljs.core.first.call(null,s__6914__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(799),y], null)], null)),pucks$worlds$dev$world9$agents_$_iter__6913.call(null,cljs.core.rest.call(null,s__6914__$2)));
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
