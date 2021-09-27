// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.util');
goog.require('cljs.core');
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
var r1wrapped = pucks.util.wrap_rotation.call(null,rot1);
var r2wrapped = pucks.util.wrap_rotation.call(null,rot2);
var diff = Math.abs((r1wrapped - r2wrapped));
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
pucks.util.wrap_position = (function pucks$util$wrap_position(p__3268){
var vec__3269 = p__3268;
var x = cljs.core.nth.call(null,vec__3269,(0),null);
var y = cljs.core.nth.call(null,vec__3269,(1),null);
var screen_size = new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x < (0)))?(screen_size + x):(((x >= screen_size))?(x - screen_size):x)),(((y < (0)))?(screen_size + y):(((y >= screen_size))?(y - screen_size):y))], null);
});
/**
 * Returns a rotation corresponding to a provided [x y] relative position.
 */
pucks.util.relative_position__GT_rotation = (function pucks$util$relative_position__GT_rotation(p__3272){
var vec__3273 = p__3272;
var x = cljs.core.nth.call(null,vec__3273,(0),null);
var y = cljs.core.nth.call(null,vec__3273,(1),null);
if((((x === (0))) && ((y === (0))))){
return (cljs.core.rand.call(null,pucks.globals.two_pi) - pucks.globals.pi);
} else {
return quil.core.atan2.call(null,x,(- y));
}
});
/**
 * Returns a rotation corresponding to a provided [x y] relative position.
 */
pucks.util.direction__GT_rotation = (function pucks$util$direction__GT_rotation(p__3276){
var vec__3277 = p__3276;
var x = cljs.core.nth.call(null,vec__3277,(0),null);
var y = cljs.core.nth.call(null,vec__3277,(1),null);
return pucks.util.relative_position__GT_rotation.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Returns agent but will its position converted to be relative to the provided
 * position in a toroidal world.
 */
pucks.util.relativize_position = (function pucks$util$relativize_position(agent,position){
return cljs.core.assoc.call(null,agent,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var vec__3280 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(agent);
var ax = cljs.core.nth.call(null,vec__3280,(0),null);
var ay = cljs.core.nth.call(null,vec__3280,(1),null);
var vec__3283 = position;
var px = cljs.core.nth.call(null,vec__3283,(0),null);
var py = cljs.core.nth.call(null,vec__3283,(1),null);
var sz = new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((quil.core.abs.call(null,(ax - px)) < (function (){var x__4222__auto__ = (ax + (sz - px));
var y__4223__auto__ = (px + (sz - ax));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()))?(ax - px):(((ax > px))?(- (px + (sz - ax))):(ax + (sz - px)))),(((quil.core.abs.call(null,(ay - py)) < (function (){var x__4222__auto__ = (ay + (sz - py));
var y__4223__auto__ = (py + (sz - ay));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()))?(ay - py):(((ay > py))?(- (py + (sz - ay))):(ay + (sz - py))))], null);
})());
});
/**
 * Returns agent but with its position augmented by reference-xy.
 */
pucks.util.derelativize_position = (function pucks$util$derelativize_position(reference_xy,agent){
return cljs.core.assoc.call(null,agent,new cljs.core.Keyword(null,"position","position",-2011731912),pucks.util.wrap_position.call(null,pucks.vec2D._PLUS_v.call(null,reference_xy,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(agent))));
});
/**
 * Returns an [x y] relative position in the direction of the given rotation.
 */
pucks.util.rotation__GT_relative_position = (function pucks$util$rotation__GT_relative_position(theta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.sin(theta),Math.cos((theta - Math.PI))], null);
});
/**
 * Returns an [x y] relative position in the direction of the given rotation.
 */
pucks.util.rotation__GT_direction = (function pucks$util$rotation__GT_direction(theta){
return pucks.util.rotation__GT_relative_position.call(null,theta);
});
/**
 * Returns a vector of all objects in the world that overlap the given 
 * position.
 */
pucks.util.objects_overlapping_xy = (function pucks$util$objects_overlapping_xy(x,y){
return cljs.core.filterv.call(null,(function (o){
return (pucks.vec2D.distance.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)) < new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(o));
}),cljs.core.deref.call(null,pucks.globals.all_agents));
});
/**
 * Returns a random [x y] where x and y can range from 0 (inclusive)
 * to (:screen-size @pucks-settings) (exclusive).
 */
pucks.util.rand_xy = (function pucks$util$rand_xy(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings))),cljs.core.rand_int.call(null,new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)))], null);
});
/**
 * Println and then return value v.
 */
pucks.util.pret = (function pucks$util$pret(v){
cljs.core.println.call(null,v);

return v;
});
/**
 * Replaces embedded agents with {:abbrev (:id agent)}. This is indended
 * for use in printing agents, to keep the printed form readible and of reasonable
 * size.
 */
pucks.util.abbreviate_embedded_agents = (function pucks$util$abbreviate_embedded_agents(a){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.mapv.call(null,(function (p1__3286_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"abbrev","abbrev",10803847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__3286_SHARP_)], null);
}),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"sensed","sensed",1518013926),cljs.core.mapv.call(null,(function (p1__3287_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"abbrev","abbrev",10803847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__3287_SHARP_)], null);
}),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),cljs.core.mapv.call(null,(function (p1__3288_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"abbrev","abbrev",10803847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__3288_SHARP_)], null);
}),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(a))),new cljs.core.Keyword(null,"proposals","proposals",-1859752048),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"proposals","proposals",-1859752048).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"abbrev","abbrev",10803847)));
});
pucks.util.print_stats = (function pucks$util$print_stats(){

cljs.core.println.call(null,"World objects:",cljs.core.count.call(null,cljs.core.deref.call(null,pucks.globals.all_agents)));

return cljs.core.println.call(null,"Avg neighbors",(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.deref.call(null,pucks.globals.all_agents)))) / cljs.core.count.call(null,cljs.core.deref.call(null,pucks.globals.all_agents))));
});
/**
 * A utility for concurrent execution of a function on items in a collection.
 * In single-thread-mode this acts like mapv. Otherwise it acts like pmap but: 
 * 1) coll should be finite, 2) the returned sequence will not be lazy, and will
 * in fact be a vector, 3) calls to f may occur in any order, to maximize
 * multicore processor utilization, and 4) takes only one coll so far.
 */
pucks.util.pmapallv = (function pucks$util$pmapallv(f,coll){
return cljs.core.mapv.call(null,f,coll);
});
/**
 * Returns sequence s without the first instance of item.
 */
pucks.util.remove_one = (function pucks$util$remove_one(item,s){
var vec__3292 = cljs.core.split_with.call(null,(function (p1__3291_SHARP_){
return (!(cljs.core._EQ_.call(null,item,p1__3291_SHARP_)));
}),s);
var without_item = cljs.core.nth.call(null,vec__3292,(0),null);
var with_item = cljs.core.nth.call(null,vec__3292,(1),null);
return cljs.core.concat.call(null,without_item,cljs.core.rest.call(null,with_item));
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

//# sourceMappingURL=util.js.map
