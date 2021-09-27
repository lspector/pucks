// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.vent');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.vent.draw_vent = (function pucks$agents$vent$draw_vent(p){
var vec__3348 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3348,(0),null);
var y = cljs.core.nth.call(null,vec__3348,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3351 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3351,(0),null);
var g = cljs.core.nth.call(null,vec__3351,(1),null);
var b = cljs.core.nth.call(null,vec__3351,(2),null);
var vec__3354 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(238),(118),(0)], null);
var core_r = cljs.core.nth.call(null,vec__3354,(0),null);
var core_g = cljs.core.nth.call(null,vec__3354,(1),null);
var core_b = cljs.core.nth.call(null,vec__3354,(2),null);
var core_diameter = ((radius * new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p)) | (0));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.rotate.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.call(null,r,g,b,(100));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.call(null,(255),(255),(255));

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.fill.call(null,core_r,core_g,core_b,(196));

quil.core.ellipse.call(null,(0),(0),core_diameter,core_diameter);

return quil.core.pop_matrix.call(null);
});
pucks.agents.vent.vent_proposals = (function pucks$agents$vent$vent_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$vent$vent_proposals_$_iter__3357(s__3358){
return (new cljs.core.LazySeq(null,(function (){
var s__3358__$1 = s__3358;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3358__$1);
if(temp__5735__auto__){
var s__3358__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3358__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3358__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3360 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3359 = (0);
while(true){
if((i__3359 < size__4522__auto__)){
var recipient = cljs.core._nth.call(null,c__4521__auto__,i__3359);
cljs.core.chunk_append.call(null,b__3360,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null));

var G__3361 = (i__3359 + (1));
i__3359 = G__3361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3360),pucks$agents$vent$vent_proposals_$_iter__3357.call(null,cljs.core.chunk_rest.call(null,s__3358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3360),null);
}
} else {
var recipient = cljs.core.first.call(null,s__3358__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$vent$vent_proposals_$_iter__3357.call(null,cljs.core.rest.call(null,s__3358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"torpedo","torpedo",275681140)),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"stone","stone",-59276120)),cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)))));
})())], null);
});
pucks.agents.vent.vent = (function pucks$agents$vent$vent(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vent","vent",-1467857469),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(50),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.vent.draw_vent,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.vent.vent_proposals], null));
});

//# sourceMappingURL=vent.js.map
