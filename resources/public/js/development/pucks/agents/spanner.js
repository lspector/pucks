// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.spanner');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
/**
 * Returns a random relative-position vector.
 */
pucks.agents.spanner.rand_relative_position = (function pucks$agents$spanner$rand_relative_position(){
return pucks.util.rotation__GT_relative_position.call(null,(cljs.core.rand.call(null,pucks.globals.two_pi) - pucks.globals.pi));
});
/**
 * Returns a random urge level, which will be between -1.0 and 1.0.
 */
pucks.agents.spanner.rand_urge = (function pucks$agents$spanner$rand_urge(){
return (cljs.core.rand.call(null,2.0) - 1.0);
});
/**
 * Returns a random probability between 0 and 1.0.
 */
pucks.agents.spanner.rand_probability = (function pucks$agents$spanner$rand_probability(){
return cljs.core.rand.call(null,1.0);
});
/**
 * Returns a random color.
 */
pucks.agents.spanner.rand_color = (function pucks$agents$spanner$rand_color(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256))], null);
});
/**
 * Returns a random color difference (an integer between 0 and 255).
 */
pucks.agents.spanner.rand_color_difference = (function pucks$agents$spanner$rand_color_difference(){
return cljs.core.rand_int.call(null,(256));
});
pucks.agents.spanner.self = (function pucks$agents$spanner$self(p1,p2,tolerance,color_key){

var vec__6617 = color_key.call(null,p1);
var r1 = cljs.core.nth.call(null,vec__6617,(0),null);
var g1 = cljs.core.nth.call(null,vec__6617,(1),null);
var b1 = cljs.core.nth.call(null,vec__6617,(2),null);
var vec__6620 = color_key.call(null,p2);
var r2 = cljs.core.nth.call(null,vec__6620,(0),null);
var g2 = cljs.core.nth.call(null,vec__6620,(1),null);
var b2 = cljs.core.nth.call(null,vec__6620,(2),null);
return (((Math.abs((r1 - r2)) < tolerance)) && ((Math.abs((g1 - g2)) < tolerance)) && ((Math.abs((b1 - b2)) < tolerance)));
});
pucks.agents.spanner.facing = (function pucks$agents$spanner$facing(p1,p2){

return (pucks.util.rotational_difference.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p1),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p2))) < pucks.globals.quarter_pi);
});
pucks.agents.spanner.spanner_proposals = (function pucks$agents$spanner$spanner_proposals(p){
var temp__5733__auto__ = new cljs.core.Keyword(null,"genome","genome",-1313307628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
var selves = cljs.core.filter.call(null,((function (g,temp__5733__auto__){
return (function (p1__6623_SHARP_){
return pucks.agents.spanner.self.call(null,p,p1__6623_SHARP_,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"color","color",1011675173));
});})(g,temp__5733__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
var others = cljs.core.filter.call(null,((function (selves,g,temp__5733__auto__){
return (function (p1__6624_SHARP_){
return (!(pucks.agents.spanner.self.call(null,p,p1__6624_SHARP_,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"color","color",1011675173))));
});})(selves,g,temp__5733__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
var vents = cljs.core.filter.call(null,new cljs.core.Keyword(null,"vent","vent",-1467857469),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
var zappers = cljs.core.filter.call(null,new cljs.core.Keyword(null,"zapper","zapper",362355558),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),0.1,new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"core-color","core-color",278930388),new cljs.core.Keyword(null,"core-color","core-color",278930388).cljs$core$IFn$_invoke$arity$1(g)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,pucks.vec2D._PLUS_v.call(null,pucks.util.rotation__GT_relative_position.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p)),((cljs.core.empty_QMARK_.call(null,selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),selves))))),((cljs.core.empty_QMARK_.call(null,others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),others))))),((cljs.core.empty_QMARK_.call(null,selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),selves))))),((cljs.core.empty_QMARK_.call(null,others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),others))))),((cljs.core.empty_QMARK_.call(null,vents))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),vents))))),((cljs.core.empty_QMARK_.call(null,zappers))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),zappers))))),pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"random-urge","random-urge",291214603).cljs$core$IFn$_invoke$arity$1(g),pucks.agents.spanner.rand_relative_position.call(null))))], null),((((new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456).cljs$core$IFn$_invoke$arity$1(g) * 0.1) > cljs.core.rand.call(null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620).cljs$core$IFn$_invoke$arity$1(p).call(null,p)], null)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.concat.call(null,(function (){var iter__4523__auto__ = ((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function pucks$agents$spanner$spanner_proposals_$_iter__6628(s__6629){
return (new cljs.core.LazySeq(null,((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function (){
var s__6629__$1 = s__6629;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6629__$1);
if(temp__5735__auto__){
var s__6629__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6629__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6629__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6631 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6630 = (0);
while(true){
if((i__6630 < size__4522__auto__)){
var binder = cljs.core._nth.call(null,c__4521__auto__,i__6630);
cljs.core.chunk_append.call(null,b__6631,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder)], null)], null));

var G__6636 = (i__6630 + (1));
i__6630 = G__6636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6631),pucks$agents$spanner$spanner_proposals_$_iter__6628.call(null,cljs.core.chunk_rest.call(null,s__6629__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6631),null);
}
} else {
var binder = cljs.core.first.call(null,s__6629__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder)], null)], null),pucks$agents$spanner$spanner_proposals_$_iter__6628.call(null,cljs.core.rest.call(null,s__6629__$2)));
}
} else {
return null;
}
break;
}
});})(selves,others,vents,zappers,g,temp__5733__auto__))
,null,null));
});})(selves,others,vents,zappers,g,temp__5733__auto__))
;
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__6625_SHARP_){
return pucks.agents.spanner.self.call(null,p,p1__6625_SHARP_,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441));
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"spanner","spanner",-643354678),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p))));
})(),(function (){var iter__4523__auto__ = ((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function pucks$agents$spanner$spanner_proposals_$_iter__6632(s__6633){
return (new cljs.core.LazySeq(null,((function (selves,others,vents,zappers,g,temp__5733__auto__){
return (function (){
var s__6633__$1 = s__6633;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6633__$1);
if(temp__5735__auto__){
var s__6633__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6633__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6633__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6635 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6634 = (0);
while(true){
if((i__6634 < size__4522__auto__)){
var weaker = cljs.core._nth.call(null,c__4521__auto__,i__6634);
cljs.core.chunk_append.call(null,b__6635,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null));

var G__6637 = (i__6634 + (1));
i__6634 = G__6637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6635),pucks$agents$spanner$spanner_proposals_$_iter__6632.call(null,cljs.core.chunk_rest.call(null,s__6633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6635),null);
}
} else {
var weaker = cljs.core.first.call(null,s__6633__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$spanner$spanner_proposals_$_iter__6632.call(null,cljs.core.rest.call(null,s__6633__$2)));
}
} else {
return null;
}
break;
}
});})(selves,others,vents,zappers,g,temp__5733__auto__))
,null,null));
});})(selves,others,vents,zappers,g,temp__5733__auto__))
;
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__6626_SHARP_){
return (new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p1__6626_SHARP_) < new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.call(null,((function (iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__6627_SHARP_){
return pucks.agents.spanner.self.call(null,p,p1__6627_SHARP_,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"core-color","core-color",278930388));
});})(iter__4523__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"spanner","spanner",-643354678),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)))));
})())], null));
} else {
return null;
}
});
/**
 * Returns a mutated version of color vector c.
 */
pucks.agents.spanner.mutate_color = (function pucks$agents$spanner$mutate_color(c){
return cljs.core.mapv.call(null,(function (p1__6638_SHARP_){
return cljs.core.mod.call(null,(p1__6638_SHARP_ + (cljs.core.rand_int.call(null,(33)) - (16))),(256));
}),c);
});
/**
 * Returns a mutated version of urge value u.
 */
pucks.agents.spanner.mutate_urge = (function pucks$agents$spanner$mutate_urge(u){
var x__4219__auto__ = -1.0;
var y__4220__auto__ = (function (){var x__4222__auto__ = 1.0;
var y__4223__auto__ = (u + (cljs.core.rand.call(null,0.1) - 0.05));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Returns a mutated version of probability value p.
 */
pucks.agents.spanner.mutate_probability = (function pucks$agents$spanner$mutate_probability(p){
var x__4219__auto__ = 0.0;
var y__4220__auto__ = (function (){var x__4222__auto__ = 1.0;
var y__4223__auto__ = (p + (cljs.core.rand.call(null,0.05) - 0.025));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Returns a mutated version of color-difference value d.
 */
pucks.agents.spanner.mutate_color_difference = (function pucks$agents$spanner$mutate_color_difference(d){
var x__4219__auto__ = (0);
var y__4220__auto__ = (function (){var x__4222__auto__ = (255);
var y__4223__auto__ = (d + (cljs.core.rand_int.call(null,(17)) - (8)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Returns a mutated version of the provided genome.
 */
pucks.agents.spanner.mutate = (function pucks$agents$spanner$mutate(genome){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,genome,new cljs.core.Keyword(null,"color","color",1011675173),pucks.agents.spanner.mutate_color.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441),pucks.agents.spanner.mutate_color.call(null,new cljs.core.Keyword(null,"eye-color","eye-color",1844620441).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"core-color","core-color",278930388),pucks.agents.spanner.mutate_color.call(null,new cljs.core.Keyword(null,"core-color","core-color",278930388).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"color-difference","color-difference",56446998),pucks.agents.spanner.mutate_color_difference.call(null,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"random-urge","random-urge",291214603),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"random-urge","random-urge",291214603).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022),pucks.agents.spanner.mutate_urge.call(null,new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456),pucks.agents.spanner.mutate_probability.call(null,new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456).cljs$core$IFn$_invoke$arity$1(genome)));
});
/**
 * Returns a random spanner puck.
 */
pucks.agents.spanner.spanner = (function pucks$agents$spanner$spanner(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spanner","spanner",-643354678),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.spanner.spanner_proposals,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genome","genome",-1313307628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783),new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456),new cljs.core.Keyword(null,"random-urge","random-urge",291214603),new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300),new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012),new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022),new cljs.core.Keyword(null,"core-color","core-color",278930388),new cljs.core.Keyword(null,"color-difference","color-difference",56446998),new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441)],[pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_color.call(null),pucks.agents.spanner.rand_probability.call(null),pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_color.call(null),pucks.agents.spanner.rand_color_difference.call(null),pucks.agents.spanner.rand_urge.call(null),pucks.agents.spanner.rand_color.call(null)])], null),new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620),(function (p1__6639_SHARP_){
return cljs.core.merge.call(null,p1__6639_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.call(null) - 0.5)),((5) * (cljs.core.rand.call(null) - 0.5))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(pucks.globals.two_pi * cljs.core.rand.call(null)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(3)) - (1)),(cljs.core.rand_int.call(null,(3)) - (1))], null),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genome","genome",-1313307628),pucks.agents.spanner.mutate.call(null,new cljs.core.Keyword(null,"genome","genome",-1313307628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p1__6639_SHARP_)))], null)], null));
})], null));
});

//# sourceMappingURL=spanner.js.map
