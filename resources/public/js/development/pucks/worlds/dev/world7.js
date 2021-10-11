// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world7');
goog.require('cljs.core');
goog.require('pucks.agents.opener');
goog.require('pucks.globals');
goog.require('pucks.agents.chest');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.gate');
pucks.worlds.dev.world7.agents = (function pucks$worlds$dev$world7$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__6969(s__6970){
return (new cljs.core.LazySeq(null,(function (){
var s__6970__$1 = s__6970;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6970__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6970__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world7$agents_$_iter__6969_$_iter__6971(s__6972){
return (new cljs.core.LazySeq(null,((function (s__6970__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6972__$1 = s__6972;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__6972__$1);
if(temp__5735__auto____$1){
var s__6972__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6972__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6972__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6974 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6973 = (0);
while(true){
if((i__6973 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6973);
cljs.core.chunk_append.call(null,b__6974,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__6987 = (i__6973 + (1));
i__6973 = G__6987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6974),pucks$worlds$dev$world7$agents_$_iter__6969_$_iter__6971.call(null,cljs.core.chunk_rest.call(null,s__6972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6974),null);
}
} else {
var y = cljs.core.first.call(null,s__6972__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__6969_$_iter__6971.call(null,cljs.core.rest.call(null,s__6972__$2)));
}
} else {
return null;
}
break;
}
});})(s__6970__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6970__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world7$agents_$_iter__6969.call(null,cljs.core.rest.call(null,s__6970__$1)));
} else {
var G__6988 = cljs.core.rest.call(null,s__6970__$1);
s__6970__$1 = G__6988;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(500),(701),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__6975(s__6976){
return (new cljs.core.LazySeq(null,(function (){
var s__6976__$1 = s__6976;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6976__$1);
if(temp__5735__auto__){
var s__6976__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6976__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6976__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6978 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6977 = (0);
while(true){
if((i__6977 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6977);
cljs.core.chunk_append.call(null,b__6978,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__6989 = (i__6977 + (1));
i__6977 = G__6989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6978),pucks$worlds$dev$world7$agents_$_iter__6975.call(null,cljs.core.chunk_rest.call(null,s__6976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6978),null);
}
} else {
var y = cljs.core.first.call(null,s__6976__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__6975.call(null,cljs.core.rest.call(null,s__6976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(361),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__6979(s__6980){
return (new cljs.core.LazySeq(null,(function (){
var s__6980__$1 = s__6980;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6980__$1);
if(temp__5735__auto__){
var s__6980__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6980__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6980__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6982 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6981 = (0);
while(true){
if((i__6981 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6981);
cljs.core.chunk_append.call(null,b__6982,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__6990 = (i__6981 + (1));
i__6981 = G__6990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6982),pucks$worlds$dev$world7$agents_$_iter__6979.call(null,cljs.core.chunk_rest.call(null,s__6980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6982),null);
}
} else {
var y = cljs.core.first.call(null,s__6980__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__6979.call(null,cljs.core.rest.call(null,s__6980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__6983(s__6984){
return (new cljs.core.LazySeq(null,(function (){
var s__6984__$1 = s__6984;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6984__$1);
if(temp__5735__auto__){
var s__6984__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6984__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6984__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6986 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6985 = (0);
while(true){
if((i__6985 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6985);
cljs.core.chunk_append.call(null,b__6986,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)));

var G__6991 = (i__6985 + (1));
i__6985 = G__6991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6986),pucks$worlds$dev$world7$agents_$_iter__6983.call(null,cljs.core.chunk_rest.call(null,s__6984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6986),null);
}
} else {
var y = cljs.core.first.call(null,s__6984__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__6983.call(null,cljs.core.rest.call(null,s__6984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.chest.chest.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.opener.opener.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(400)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.globals.half_pi,new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(0)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30)], null))], null));
});
pucks.worlds.dev.world7.settings = (function pucks$worlds$dev$world7$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world7.js.map
