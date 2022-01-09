// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.donor');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.donor.donor_proposals = (function pucks$agents$donor$donor_proposals(p,item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$donor$donor_proposals_$_iter__6996(s__6997){
return (new cljs.core.LazySeq(null,(function (){
var s__6997__$1 = s__6997;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6997__$1);
if(temp__5735__auto__){
var s__6997__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6997__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6997__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6999 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6998 = (0);
while(true){
if((i__6998 < size__4522__auto__)){
var recipient = cljs.core._nth.call(null,c__4521__auto__,i__6998);
cljs.core.chunk_append.call(null,b__6999,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),item], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null));

var G__7000 = (i__6998 + (1));
i__6998 = G__7000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6999),pucks$agents$donor$donor_proposals_$_iter__6996.call(null,cljs.core.chunk_rest.call(null,s__6997__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6999),null);
}
} else {
var recipient = cljs.core.first.call(null,s__6997__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),item], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$donor$donor_proposals_$_iter__6996.call(null,cljs.core.rest.call(null,s__6997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)));
})())], null);
});
pucks.agents.donor.donor = (function pucks$agents$donor$donor(item){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"donor","donor",-192302558),true,new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),(function (p1__7001_SHARP_){
return pucks.agents.donor.donor_proposals.call(null,p1__7001_SHARP_,item);
}),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null)], null));
});

//# sourceMappingURL=donor.js.map
