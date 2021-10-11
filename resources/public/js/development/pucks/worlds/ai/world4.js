// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world4');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.chest');
pucks.worlds.ai.world4.agents = (function pucks$worlds$ai$world4$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__7075(s__7076){
return (new cljs.core.LazySeq(null,(function (){
var s__7076__$1 = s__7076;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7076__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7076__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world4$agents_$_iter__7075_$_iter__7077(s__7078){
return (new cljs.core.LazySeq(null,((function (s__7076__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7078__$1 = s__7078;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7078__$1);
if(temp__5735__auto____$1){
var s__7078__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7078__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7078__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7080 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7079 = (0);
while(true){
if((i__7079 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7079);
cljs.core.chunk_append.call(null,b__7080,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7099 = (i__7079 + (1));
i__7079 = G__7099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7080),pucks$worlds$ai$world4$agents_$_iter__7075_$_iter__7077.call(null,cljs.core.chunk_rest.call(null,s__7078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7080),null);
}
} else {
var y = cljs.core.first.call(null,s__7078__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__7075_$_iter__7077.call(null,cljs.core.rest.call(null,s__7078__$2)));
}
} else {
return null;
}
break;
}
});})(s__7076__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7076__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world4$agents_$_iter__7075.call(null,cljs.core.rest.call(null,s__7076__$1)));
} else {
var G__7100 = cljs.core.rest.call(null,s__7076__$1);
s__7076__$1 = G__7100;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__7081(s__7082){
return (new cljs.core.LazySeq(null,(function (){
var s__7082__$1 = s__7082;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7082__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7082__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world4$agents_$_iter__7081_$_iter__7083(s__7084){
return (new cljs.core.LazySeq(null,((function (s__7082__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7084__$1 = s__7084;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7084__$1);
if(temp__5735__auto____$1){
var s__7084__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7084__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7084__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7086 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7085 = (0);
while(true){
if((i__7085 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7085);
cljs.core.chunk_append.call(null,b__7086,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7101 = (i__7085 + (1));
i__7085 = G__7101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7086),pucks$worlds$ai$world4$agents_$_iter__7081_$_iter__7083.call(null,cljs.core.chunk_rest.call(null,s__7084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7086),null);
}
} else {
var y = cljs.core.first.call(null,s__7084__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__7081_$_iter__7083.call(null,cljs.core.rest.call(null,s__7084__$2)));
}
} else {
return null;
}
break;
}
});})(s__7082__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7082__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world4$agents_$_iter__7081.call(null,cljs.core.rest.call(null,s__7082__$1)));
} else {
var G__7102 = cljs.core.rest.call(null,s__7082__$1);
s__7082__$1 = G__7102;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__7087(s__7088){
return (new cljs.core.LazySeq(null,(function (){
var s__7088__$1 = s__7088;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7088__$1);
if(temp__5735__auto__){
var s__7088__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7088__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7088__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7090 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7089 = (0);
while(true){
if((i__7089 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7089);
cljs.core.chunk_append.call(null,b__7090,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__7103 = (i__7089 + (1));
i__7089 = G__7103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7090),pucks$worlds$ai$world4$agents_$_iter__7087.call(null,cljs.core.chunk_rest.call(null,s__7088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7090),null);
}
} else {
var y = cljs.core.first.call(null,s__7088__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__7087.call(null,cljs.core.rest.call(null,s__7088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(361),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__7091(s__7092){
return (new cljs.core.LazySeq(null,(function (){
var s__7092__$1 = s__7092;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7092__$1);
if(temp__5735__auto__){
var s__7092__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7092__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7092__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7094 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7093 = (0);
while(true){
if((i__7093 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7093);
cljs.core.chunk_append.call(null,b__7094,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__7104 = (i__7093 + (1));
i__7093 = G__7104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7094),pucks$worlds$ai$world4$agents_$_iter__7091.call(null,cljs.core.chunk_rest.call(null,s__7092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7094),null);
}
} else {
var y = cljs.core.first.call(null,s__7092__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__7091.call(null,cljs.core.rest.call(null,s__7092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__7095(s__7096){
return (new cljs.core.LazySeq(null,(function (){
var s__7096__$1 = s__7096;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7096__$1);
if(temp__5735__auto__){
var s__7096__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7096__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7096__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7098 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7097 = (0);
while(true){
if((i__7097 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7097);
cljs.core.chunk_append.call(null,b__7098,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)));

var G__7105 = (i__7097 + (1));
i__7097 = G__7105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7098),pucks$worlds$ai$world4$agents_$_iter__7095.call(null,cljs.core.chunk_rest.call(null,s__7096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7098),null);
}
} else {
var y = cljs.core.first.call(null,s__7096__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__7095.call(null,cljs.core.rest.call(null,s__7096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.chest.chest.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.user.user),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null))], null));
});
pucks.worlds.ai.world4.settings = (function pucks$worlds$ai$world4$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world4.js.map
