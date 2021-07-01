// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.opener');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.opener.opener_proposals = (function pucks$agents$opener$opener_proposals(p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$agents$opener$opener_proposals_$_iter__3694(s__3695){
return (new cljs.core.LazySeq(null,(function (){
var s__3695__$1 = s__3695;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3695__$1);
if(temp__5735__auto__){
var s__3695__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3695__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3695__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3697 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3696 = (0);
while(true){
if((i__3696 < size__4522__auto__)){
var anyone = cljs.core._nth.call(null,c__4521__auto__,i__3696);
cljs.core.chunk_append.call(null,b__3697,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null));

var G__3702 = (i__3696 + (1));
i__3696 = G__3702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3697),pucks$agents$opener$opener_proposals_$_iter__3694.call(null,cljs.core.chunk_rest.call(null,s__3695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3697),null);
}
} else {
var anyone = cljs.core.first.call(null,s__3695__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(anyone),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null),pucks$agents$opener$opener_proposals_$_iter__3694.call(null,cljs.core.rest.call(null,s__3695__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p));
})(),(function (){var iter__4523__auto__ = (function pucks$agents$opener$opener_proposals_$_iter__3698(s__3699){
return (new cljs.core.LazySeq(null,(function (){
var s__3699__$1 = s__3699;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3699__$1);
if(temp__5735__auto__){
var s__3699__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3699__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3699__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3701 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3700 = (0);
while(true){
if((i__3700 < size__4522__auto__)){
var gate = cljs.core._nth.call(null,c__4521__auto__,i__3700);
cljs.core.chunk_append.call(null,b__3701,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(gate),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.Keyword(null,"ask","ask",707712414),((function (i__3700,gate,c__4521__auto__,size__4522__auto__,b__3701,s__3699__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"promise","promise",1767129287).cljs$core$IFn$_invoke$arity$1(your_bid));
if(cljs.core.truth_(temp__5735__auto____$1)){
var open_promise = temp__5735__auto____$1;
return (open_promise > (0));
} else {
return null;
}
});})(i__3700,gate,c__4521__auto__,size__4522__auto__,b__3701,s__3699__$2,temp__5735__auto__))
], null));

var G__3703 = (i__3700 + (1));
i__3700 = G__3703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3701),pucks$agents$opener$opener_proposals_$_iter__3698.call(null,cljs.core.chunk_rest.call(null,s__3699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3701),null);
}
} else {
var gate = cljs.core.first.call(null,s__3699__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(gate),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.Keyword(null,"ask","ask",707712414),((function (gate,s__3699__$2,temp__5735__auto__){
return (function (my_bid,your_bid){
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"promise","promise",1767129287).cljs$core$IFn$_invoke$arity$1(your_bid));
if(cljs.core.truth_(temp__5735__auto____$1)){
var open_promise = temp__5735__auto____$1;
return (open_promise > (0));
} else {
return null;
}
});})(gate,s__3699__$2,temp__5735__auto__))
], null),pucks$agents$opener$opener_proposals_$_iter__3698.call(null,cljs.core.rest.call(null,s__3699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"gate","gate",818072149),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)));
})()))], null);
});
pucks.agents.opener.opener = (function pucks$agents$opener$opener(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opener","opener",1027381943),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.opener.opener_proposals], null));
});

//# sourceMappingURL=opener.js.map
