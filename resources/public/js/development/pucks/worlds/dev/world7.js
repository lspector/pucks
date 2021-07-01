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
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__3735(s__3736){
return (new cljs.core.LazySeq(null,(function (){
var s__3736__$1 = s__3736;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3736__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3736__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world7$agents_$_iter__3735_$_iter__3737(s__3738){
return (new cljs.core.LazySeq(null,((function (s__3736__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3738__$1 = s__3738;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3738__$1);
if(temp__5735__auto____$1){
var s__3738__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3738__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3738__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3740 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3739 = (0);
while(true){
if((i__3739 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3739);
cljs.core.chunk_append.call(null,b__3740,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__3753 = (i__3739 + (1));
i__3739 = G__3753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3740),pucks$worlds$dev$world7$agents_$_iter__3735_$_iter__3737.call(null,cljs.core.chunk_rest.call(null,s__3738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3740),null);
}
} else {
var y = cljs.core.first.call(null,s__3738__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__3735_$_iter__3737.call(null,cljs.core.rest.call(null,s__3738__$2)));
}
} else {
return null;
}
break;
}
});})(s__3736__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3736__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world7$agents_$_iter__3735.call(null,cljs.core.rest.call(null,s__3736__$1)));
} else {
var G__3754 = cljs.core.rest.call(null,s__3736__$1);
s__3736__$1 = G__3754;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__3741(s__3742){
return (new cljs.core.LazySeq(null,(function (){
var s__3742__$1 = s__3742;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3742__$1);
if(temp__5735__auto__){
var s__3742__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3742__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3742__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3744 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3743 = (0);
while(true){
if((i__3743 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3743);
cljs.core.chunk_append.call(null,b__3744,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__3755 = (i__3743 + (1));
i__3743 = G__3755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3744),pucks$worlds$dev$world7$agents_$_iter__3741.call(null,cljs.core.chunk_rest.call(null,s__3742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3744),null);
}
} else {
var y = cljs.core.first.call(null,s__3742__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__3741.call(null,cljs.core.rest.call(null,s__3742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(361),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__3745(s__3746){
return (new cljs.core.LazySeq(null,(function (){
var s__3746__$1 = s__3746;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3746__$1);
if(temp__5735__auto__){
var s__3746__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3746__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3746__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3748 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3747 = (0);
while(true){
if((i__3747 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3747);
cljs.core.chunk_append.call(null,b__3748,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__3756 = (i__3747 + (1));
i__3747 = G__3756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3748),pucks$worlds$dev$world7$agents_$_iter__3745.call(null,cljs.core.chunk_rest.call(null,s__3746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3748),null);
}
} else {
var y = cljs.core.first.call(null,s__3746__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__3745.call(null,cljs.core.rest.call(null,s__3746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world7$agents_$_iter__3749(s__3750){
return (new cljs.core.LazySeq(null,(function (){
var s__3750__$1 = s__3750;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3750__$1);
if(temp__5735__auto__){
var s__3750__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3750__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3750__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3752 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3751 = (0);
while(true){
if((i__3751 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3751);
cljs.core.chunk_append.call(null,b__3752,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)));

var G__3757 = (i__3751 + (1));
i__3751 = G__3757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3752),pucks$worlds$dev$world7$agents_$_iter__3749.call(null,cljs.core.chunk_rest.call(null,s__3750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3752),null);
}
} else {
var y = cljs.core.first.call(null,s__3750__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)),pucks$worlds$dev$world7$agents_$_iter__3749.call(null,cljs.core.rest.call(null,s__3750__$2)));
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
