// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.gate');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('quil.core');
goog.require('pucks.agents.generic');
pucks.agents.gate.draw_gate = (function pucks$agents$gate$draw_gate(p){
var vec__3706 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3706,(0),null);
var y = cljs.core.nth.call(null,vec__3706,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3709 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3709,(0),null);
var g = cljs.core.nth.call(null,vec__3709,(1),null);
var b = cljs.core.nth.call(null,vec__3709,(2),null);
var half_radius = (radius / (2));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.fill.call(null,r,g,b,(16));

quil.core.stroke_weight.call(null,(5));

if((new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)) > (0))){
} else {
quil.core.stroke.call(null,r,g,b,(255));
}

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.no_stroke.call(null);

quil.core.push_matrix.call(null);

quil.core.rotate.call(null,(cljs.core.deref.call(null,pucks.globals.iteration) / pucks.globals.two_pi));

quil.core.stroke_weight.call(null,(5));

quil.core.stroke.call(null,r,g,b,(64));

quil.core.line.call(null,(- half_radius),(0),half_radius,(0));

quil.core.line.call(null,(0),half_radius,(0),(- half_radius));

quil.core.no_stroke.call(null);

quil.core.pop_matrix.call(null);

if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.call(null,(0),(0),(0));

quil.core.ellipse.call(null,(0),(0),(radius * 0.2),(radius * 0.2));
}

quil.core.fill.call(null,r,g,b,(16));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

return quil.core.pop_matrix.call(null);
});
pucks.agents.gate.gate_proposals = (function pucks$agents$gate$gate_proposals(p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = (function pucks$agents$gate$gate_proposals_$_iter__3712(s__3713){
return (new cljs.core.LazySeq(null,(function (){
var s__3713__$1 = s__3713;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3713__$1);
if(temp__5735__auto__){
var s__3713__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3713__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3713__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3715 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3714 = (0);
while(true){
if((i__3714 < size__4522__auto__)){
var other = cljs.core._nth.call(null,c__4521__auto__,i__3714);
cljs.core.chunk_append.call(null,b__3715,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(other),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"promise","promise",1767129287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),(100)], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null));

var G__3716 = (i__3714 + (1));
i__3714 = G__3716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3715),pucks$agents$gate$gate_proposals_$_iter__3712.call(null,cljs.core.chunk_rest.call(null,s__3713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3715),null);
}
} else {
var other = cljs.core.first.call(null,s__3713__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(other),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"promise","promise",1767129287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),(100)], null)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null),pucks$agents$gate$gate_proposals_$_iter__3712.call(null,cljs.core.rest.call(null,s__3713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)));
})()),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)) - (1))], null),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"solid","solid",-2023773691),(!((new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)) > (0))))], null)], null);
});
pucks.agents.gate.gate = (function pucks$agents$gate$gate(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"gate","gate",818072149),true,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),(0)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(40),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.gate.draw_gate,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.gate.gate_proposals], null));
});

//# sourceMappingURL=gate.js.map
