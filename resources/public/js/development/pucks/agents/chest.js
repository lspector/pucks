// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.chest');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.chest.draw_chest = (function pucks$agents$chest$draw_chest(p){
var vec__6953 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__6953,(0),null);
var y = cljs.core.nth.call(null,vec__6953,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__6956 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__6956,(0),null);
var g = cljs.core.nth.call(null,vec__6956,(1),null);
var b = cljs.core.nth.call(null,vec__6956,(2),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.rotate.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.call(null,(((128) + ((128) * Math.sin((cljs.core.deref.call(null,pucks.globals.iteration) / (2))))) | (0)),(((128) + ((128) * Math.sin((cljs.core.deref.call(null,pucks.globals.iteration) / (3))))) | (0)),(((128) + ((128) * Math.sin((cljs.core.deref.call(null,pucks.globals.iteration) / (5))))) | (0)),(100));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.call(null,r,g,b,(196));

quil.core.ellipse.call(null,(0),(0),radius,radius);

if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.call(null,(0),(0),(0));

quil.core.ellipse.call(null,(0),(0),(radius * 0.2),(radius * 0.2));
}

return quil.core.pop_matrix.call(null);
});
pucks.agents.chest.chest_proposals = (function pucks$agents$chest$chest_proposals(p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$chest$chest_proposals_$_iter__6959(s__6960){
return (new cljs.core.LazySeq(null,(function (){
var s__6960__$1 = s__6960;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6960__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var recipient = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6960__$1,recipient,xs__6292__auto__,temp__5735__auto__){
return (function pucks$agents$chest$chest_proposals_$_iter__6959_$_iter__6961(s__6962){
return (new cljs.core.LazySeq(null,((function (s__6960__$1,recipient,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6962__$1 = s__6962;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__6962__$1);
if(temp__5735__auto____$1){
var s__6962__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6962__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6962__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6964 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6963 = (0);
while(true){
if((i__6963 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__6963);
cljs.core.chunk_append.call(null,b__6964,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),item], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),item], null)], null)], null));

var G__6965 = (i__6963 + (1));
i__6963 = G__6965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6964),pucks$agents$chest$chest_proposals_$_iter__6959_$_iter__6961.call(null,cljs.core.chunk_rest.call(null,s__6962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6964),null);
}
} else {
var item = cljs.core.first.call(null,s__6962__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(recipient),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),item], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),item], null)], null)], null),pucks$agents$chest$chest_proposals_$_iter__6959_$_iter__6961.call(null,cljs.core.rest.call(null,s__6962__$2)));
}
} else {
return null;
}
break;
}
});})(s__6960__$1,recipient,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6960__$1,recipient,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(p)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$agents$chest$chest_proposals_$_iter__6959.call(null,cljs.core.rest.call(null,s__6960__$1)));
} else {
var G__6966 = cljs.core.rest.call(null,s__6960__$1);
s__6960__$1 = G__6966;
continue;
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
pucks.agents.chest.chest = (function pucks$agents$chest$chest(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chest","chest",2066810546),true,new cljs.core.Keyword(null,"radius","radius",-2073122258),(30),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.chest.draw_chest,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.chest.chest_proposals], null));
});

//# sourceMappingURL=chest.js.map
