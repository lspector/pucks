// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.swarmevolver');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
/**
 * Returns a random relative-position vector.
 */
pucks.agents.swarmevolver.rand_relative_position = (function pucks$agents$swarmevolver$rand_relative_position(){
return pucks.util.rotation__GT_relative_position.call(null,(cljs.core.rand.call(null,pucks.globals.two_pi) - pucks.globals.pi));
});
/**
 * Returns a random urge level, which will be between -1.0 and 1.0.
 */
pucks.agents.swarmevolver.rand_urge = (function pucks$agents$swarmevolver$rand_urge(){
return (cljs.core.rand.call(null,2.0) - 1.0);
});
/**
 * Returns a random probability between 0 and 1.0.
 */
pucks.agents.swarmevolver.rand_probability = (function pucks$agents$swarmevolver$rand_probability(){
return cljs.core.rand.call(null,1.0);
});
/**
 * Returns a random color.
 */
pucks.agents.swarmevolver.rand_color = (function pucks$agents$swarmevolver$rand_color(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256))], null);
});
/**
 * Returns a random color difference (an integer between 0 and 255).
 */
pucks.agents.swarmevolver.rand_color_difference = (function pucks$agents$swarmevolver$rand_color_difference(){
return cljs.core.rand_int.call(null,(256));
});
pucks.agents.swarmevolver.self = (function pucks$agents$swarmevolver$self(p1,p2,tolerance){

var vec__3464 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p1);
var r1 = cljs.core.nth.call(null,vec__3464,(0),null);
var g1 = cljs.core.nth.call(null,vec__3464,(1),null);
var b1 = cljs.core.nth.call(null,vec__3464,(2),null);
var vec__3467 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p2);
var r2 = cljs.core.nth.call(null,vec__3467,(0),null);
var g2 = cljs.core.nth.call(null,vec__3467,(1),null);
var b2 = cljs.core.nth.call(null,vec__3467,(2),null);
return (((Math.abs((r1 - r2)) < tolerance)) && ((Math.abs((g1 - g2)) < tolerance)) && ((Math.abs((b1 - b2)) < tolerance)));
});
pucks.agents.swarmevolver.facing = (function pucks$agents$swarmevolver$facing(p1,p2){

return (pucks.util.rotational_difference.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p1),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p2))) < pucks.globals.quarter_pi);
});
pucks.agents.swarmevolver.swarmevolver_proposals = (function pucks$agents$swarmevolver$swarmevolver_proposals(p){
var temp__5733__auto__ = new cljs.core.Keyword(null,"genome","genome",-1313307628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p));
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
var selves = cljs.core.filter.call(null,((function (g,temp__5733__auto__){
return (function (p1__3470_SHARP_){
return pucks.agents.swarmevolver.self.call(null,p,p1__3470_SHARP_,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(g));
});})(g,temp__5733__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
var others = cljs.core.filter.call(null,((function (selves,g,temp__5733__auto__){
return (function (p1__3471_SHARP_){
return (!(pucks.agents.swarmevolver.self.call(null,p,p1__3471_SHARP_,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(g))));
});})(selves,g,temp__5733__auto__))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
var vents = cljs.core.filter.call(null,new cljs.core.Keyword(null,"vent","vent",-1467857469),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
var zappers = cljs.core.filter.call(null,new cljs.core.Keyword(null,"zapper","zapper",362355558),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(1),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"core-color","core-color",278930388),new cljs.core.Keyword(null,"core-color","core-color",278930388).cljs$core$IFn$_invoke$arity$1(g)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,pucks.vec2D._PLUS_v.call(null,pucks.util.rotation__GT_relative_position.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p)),((cljs.core.empty_QMARK_.call(null,selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),selves))))),((cljs.core.empty_QMARK_.call(null,others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),others))))),((cljs.core.empty_QMARK_.call(null,selves))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),selves))))),((cljs.core.empty_QMARK_.call(null,others))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),others))))),((cljs.core.empty_QMARK_.call(null,vents))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),vents))))),((cljs.core.empty_QMARK_.call(null,zappers))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null):pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022).cljs$core$IFn$_invoke$arity$1(g),pucks.vec2D.limit1.call(null,cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),zappers))))),pucks.vec2D._STAR_v.call(null,new cljs.core.Keyword(null,"random-urge","random-urge",291214603).cljs$core$IFn$_invoke$arity$1(g),pucks.agents.swarmevolver.rand_relative_position.call(null))))], null),(((((function (){var x__4219__auto__ = new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456).cljs$core$IFn$_invoke$arity$1(g);
var y__4220__auto__ = 0.01;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})() * (new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p) / (100))) > cljs.core.rand.call(null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620).cljs$core$IFn$_invoke$arity$1(p).call(null,p)], null)], null):cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fire-torpedo","fire-torpedo",-299372637),(function (){var or__4131__auto__ = (function (){var and__4120__auto__ = ((new cljs.core.Keyword(null,"shoot-self-probability","shoot-self-probability",-1342831268).cljs$core$IFn$_invoke$arity$1(g) / (10)) > cljs.core.rand.call(null));
if(and__4120__auto__){
return cljs.core.some.call(null,((function (and__4120__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__3472_SHARP_){
return pucks.agents.swarmevolver.facing.call(null,p,p1__3472_SHARP_);
});})(and__4120__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,selves);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = ((new cljs.core.Keyword(null,"shoot-other-probability","shoot-other-probability",1445485550).cljs$core$IFn$_invoke$arity$1(g) / (10)) > cljs.core.rand.call(null));
if(and__4120__auto__){
return cljs.core.some.call(null,((function (and__4120__auto__,or__4131__auto__,selves,others,vents,zappers,g,temp__5733__auto__){
return (function (p1__3473_SHARP_){
return pucks.agents.swarmevolver.facing.call(null,p,p1__3473_SHARP_);
});})(and__4120__auto__,or__4131__auto__,selves,others,vents,zappers,g,temp__5733__auto__))
,others);
} else {
return and__4120__auto__;
}
}
})()], null));
} else {
return null;
}
});
/**
 * Returns a mutated version of color vector c.
 */
pucks.agents.swarmevolver.mutate_color = (function pucks$agents$swarmevolver$mutate_color(c){
return cljs.core.mapv.call(null,(function (p1__3474_SHARP_){
return cljs.core.mod.call(null,(p1__3474_SHARP_ + (cljs.core.rand_int.call(null,(33)) - (16))),(256));
}),c);
});
/**
 * Returns a mutated version of urge value u.
 */
pucks.agents.swarmevolver.mutate_urge = (function pucks$agents$swarmevolver$mutate_urge(u){
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
pucks.agents.swarmevolver.mutate_probability = (function pucks$agents$swarmevolver$mutate_probability(p){
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
pucks.agents.swarmevolver.mutate_color_difference = (function pucks$agents$swarmevolver$mutate_color_difference(d){
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
pucks.agents.swarmevolver.mutate = (function pucks$agents$swarmevolver$mutate(genome){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,genome,new cljs.core.Keyword(null,"color","color",1011675173),pucks.agents.swarmevolver.mutate_color.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441),pucks.agents.swarmevolver.mutate_color.call(null,new cljs.core.Keyword(null,"eye-color","eye-color",1844620441).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"core-color","core-color",278930388),pucks.agents.swarmevolver.mutate_color.call(null,new cljs.core.Keyword(null,"core-color","core-color",278930388).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"color-difference","color-difference",56446998),pucks.agents.swarmevolver.mutate_color_difference.call(null,new cljs.core.Keyword(null,"color-difference","color-difference",56446998).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"random-urge","random-urge",291214603),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"random-urge","random-urge",291214603).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022),pucks.agents.swarmevolver.mutate_urge.call(null,new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"shoot-self-probability","shoot-self-probability",-1342831268),pucks.agents.swarmevolver.mutate_probability.call(null,new cljs.core.Keyword(null,"shoot-self-probability","shoot-self-probability",-1342831268).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"shoot-other-probability","shoot-other-probability",1445485550),pucks.agents.swarmevolver.mutate_probability.call(null,new cljs.core.Keyword(null,"shoot-other-probability","shoot-other-probability",1445485550).cljs$core$IFn$_invoke$arity$1(genome))),new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456),pucks.agents.swarmevolver.mutate_probability.call(null,new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456).cljs$core$IFn$_invoke$arity$1(genome)));
});
/**
 * Returns a random swarmevolver puck.
 */
pucks.agents.swarmevolver.swarmevolver = (function pucks$agents$swarmevolver$swarmevolver(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swarmevolver","swarmevolver",-1400067443),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.swarmevolver.swarmevolver_proposals,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genome","genome",-1313307628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"other-flock-urge","other-flock-urge",-1196306783),new cljs.core.Keyword(null,"self-cluster-urge","self-cluster-urge",-1948755134),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"spawn-probability","spawn-probability",-875578456),new cljs.core.Keyword(null,"random-urge","random-urge",291214603),new cljs.core.Keyword(null,"self-flock-urge","self-flock-urge",-2009717300),new cljs.core.Keyword(null,"vent-urge","vent-urge",1504560012),new cljs.core.Keyword(null,"zapper-urge","zapper-urge",1439435022),new cljs.core.Keyword(null,"shoot-other-probability","shoot-other-probability",1445485550),new cljs.core.Keyword(null,"core-color","core-color",278930388),new cljs.core.Keyword(null,"color-difference","color-difference",56446998),new cljs.core.Keyword(null,"other-cluster-urge","other-cluster-urge",1841126518),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441),new cljs.core.Keyword(null,"shoot-self-probability","shoot-self-probability",-1342831268)],[pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_color.call(null),pucks.agents.swarmevolver.rand_probability.call(null),pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_probability.call(null),pucks.agents.swarmevolver.rand_color.call(null),pucks.agents.swarmevolver.rand_color_difference.call(null),pucks.agents.swarmevolver.rand_urge.call(null),pucks.agents.swarmevolver.rand_color.call(null),pucks.agents.swarmevolver.rand_probability.call(null)])], null),new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620),(function (p1__3475_SHARP_){
return cljs.core.merge.call(null,p1__3475_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.call(null) - 0.5)),((5) * (cljs.core.rand.call(null) - 0.5))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(pucks.globals.two_pi * cljs.core.rand.call(null)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int.call(null,(3)) - (1)),(cljs.core.rand_int.call(null,(3)) - (1))], null),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genome","genome",-1313307628),pucks.agents.swarmevolver.mutate.call(null,new cljs.core.Keyword(null,"genome","genome",-1313307628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p1__3475_SHARP_)))], null)], null));
})], null));
});

//# sourceMappingURL=swarmevolver.js.map
