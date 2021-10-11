// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('cljs.repl');
/**
 * Wraps rotation angle r to -pi <= r <= pi
 */
pucks.util.wrap_rotation = (function pucks$util$wrap_rotation(r){
if((r < pucks.globals.minus_pi)){
return (pucks.globals.two_pi + r);
} else {
if((r > pucks.globals.pi)){
return (r - pucks.globals.two_pi);
} else {
return r;

}
}
});
/**
 * Returns the number of radians separating rot1 and rot2, the shortest way
 * around.
 */
pucks.util.rotational_difference = (function pucks$util$rotational_difference(rot1,rot2){
var r1wrapped = pucks.util.wrap_rotation(rot1);
var r2wrapped = pucks.util.wrap_rotation(rot2);
var diff = (function (){var G__13083 = (r1wrapped - r2wrapped);
return Math.abs(G__13083);
})();
var x__4222__auto__ = diff;
var y__4223__auto__ = (pucks.globals.two_pi - diff);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
/**
 * Returns the current time in milliseconds.
 */
pucks.util.ms = (function pucks$util$ms(){
return java.lang.System.currentTimeMillis();
});
/**
 * Returns the given coordinate if it refers to a position in the world. If not,
 * then this returns the coordinate resulting from wrapping the coordinate around
 * the world, assuming it is torroidal, so that the returned coordinate will indeed
 * refer to a position in the world.
 */
pucks.util.wrap_position = (function pucks$util$wrap_position(p__13084){
var vec__13085 = p__13084;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13085,(1),null);
var screen_size = cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x < (0)))?(screen_size + x):(((x >= screen_size))?(x - screen_size):x)),(((y < (0)))?(screen_size + y):(((y >= screen_size))?(y - screen_size):y))], null);
});
/**
 * Returns a rotation corresponding to a provided [x y] relative position.
 */
pucks.util.relative_position__GT_rotation = (function pucks$util$relative_position__GT_rotation(p__13088){
var vec__13089 = p__13088;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13089,(1),null);
if((((x === (0))) && ((y === (0))))){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(pucks.globals.two_pi) - pucks.globals.pi);
} else {
return quil.core.atan2(x,(- y));
}
});
/**
 * Returns a rotation corresponding to a provided [x y] relative position.
 */
pucks.util.direction__GT_rotation = (function pucks$util$direction__GT_rotation(p__13092){
var vec__13093 = p__13092;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13093,(1),null);
return pucks.util.relative_position__GT_rotation(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Returns agent but will its position converted to be relative to the provided
 * position in a toroidal world.
 */
pucks.util.relativize_position = (function pucks$util$relativize_position(agent,position){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(agent,cljs.core.cst$kw$position,(function (){var vec__13096 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(agent);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(1),null);
var vec__13099 = position;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13099,(1),null);
var sz = cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((quil.core.abs((ax - px)) < (function (){var x__4222__auto__ = (ax + (sz - px));
var y__4223__auto__ = (px + (sz - ax));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()))?(ax - px):(((ax > px))?(- (px + (sz - ax))):(ax + (sz - px)))),(((quil.core.abs((ay - py)) < (function (){var x__4222__auto__ = (ay + (sz - py));
var y__4223__auto__ = (py + (sz - ay));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()))?(ay - py):(((ay > py))?(- (py + (sz - ay))):(ay + (sz - py))))], null);
})());
});
/**
 * Returns agent but with its position augmented by reference-xy.
 */
pucks.util.derelativize_position = (function pucks$util$derelativize_position(reference_xy,agent){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(agent,cljs.core.cst$kw$position,pucks.util.wrap_position(pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reference_xy,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(agent)], 0))));
});
/**
 * Returns an [x y] relative position in the direction of the given rotation.
 */
pucks.util.rotation__GT_relative_position = (function pucks$util$rotation__GT_relative_position(theta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin(theta),(function (){var G__13102 = (theta - Math.PI);
return Math.cos(G__13102);
})()], null);
});
/**
 * Returns an [x y] relative position in the direction of the given rotation.
 */
pucks.util.rotation__GT_direction = (function pucks$util$rotation__GT_direction(theta){
return pucks.util.rotation__GT_relative_position(theta);
});
/**
 * Returns a vector of all objects in the world that overlap the given 
 * position.
 */
pucks.util.objects_overlapping_xy = (function pucks$util$objects_overlapping_xy(x,y){
return cljs.core.filterv((function (o){
return (pucks.vec2D.distance(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(o),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)) < cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(o));
}),cljs.core.deref(pucks.globals.all_agents));
});
/**
 * Returns a random [x y] where x and y can range from 0 (inclusive)
 * to (:screen-size @pucks-settings) (exclusive).
 */
pucks.util.rand_xy = (function pucks$util$rand_xy(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings))),cljs.core.rand_int(cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)))], null);
});
/**
 * Println and then return value v.
 */
pucks.util.pret = (function pucks$util$pret(v){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

return v;
});
/**
 * Replaces embedded agents with {:abbrev (:id agent)}. This is indended
 * for use in printing agents, to keep the printed form readible and of reasonable
 * size.
 */
pucks.util.abbreviate_embedded_agents = (function pucks$util$abbreviate_embedded_agents(a){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,cljs.core.cst$kw$neighbors,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13103_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$abbrev,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13103_SHARP_)], null);
}),cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(a))),cljs.core.cst$kw$sensed,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13104_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$abbrev,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13104_SHARP_)], null);
}),cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(a))),cljs.core.cst$kw$overlaps,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13105_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$abbrev,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__13105_SHARP_)], null);
}),cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(a))),cljs.core.cst$kw$proposals,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$proposals.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$spawn,cljs.core.cst$kw$abbrev));
});
pucks.util.print_stats = (function pucks$util$print_stats(){

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["World objects:",cljs.core.count(cljs.core.deref(pucks.globals.all_agents))], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Avg neighbors",(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$neighbors,cljs.core.deref(pucks.globals.all_agents)))) / cljs.core.count(cljs.core.deref(pucks.globals.all_agents)))], 0));
});
/**
 * A utility for concurrent execution of a function on items in a collection.
 * In single-thread-mode this acts like mapv. Otherwise it acts like pmap but: 
 * 1) coll should be finite, 2) the returned sequence will not be lazy, and will
 * in fact be a vector, 3) calls to f may occur in any order, to maximize
 * multicore processor utilization, and 4) takes only one coll so far.
 */
pucks.util.pmapallv = (function pucks$util$pmapallv(f,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Returns sequence s without the first instance of item.
 */
pucks.util.remove_one = (function pucks$util$remove_one(item,s){
var vec__13109 = cljs.core.split_with((function (p1__13108_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__13108_SHARP_)));
}),s);
var without_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(0),null);
var with_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13109,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(without_item,cljs.core.rest(with_item));
});
/**
 * Returns number n if it is between 0.0 and 1.0, 0.0 if n is negative, and 
 * 1.0 if it is greater than 1.0.
 */
pucks.util.clamp01 = (function pucks$util$clamp01(n){
if((n < (0))){
return 0.0;
} else {
if((n > 1.0)){
return 1.0;
} else {
return n;
}
}
});
