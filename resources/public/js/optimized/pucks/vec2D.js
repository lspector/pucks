// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.vec2D');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
/**
 * Returns the distance between two points on a toroidal world.
 */
pucks.vec2D.distance = (function pucks$vec2D$distance(p__11567,p__11568){
var vec__11569 = p__11567;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11569,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11569,(1),null);
var vec__11572 = p__11568;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11572,(1),null);
var wh = cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
var G__11575 = ((function (){var G__11577 = (function (){var x__4222__auto__ = quil.core.abs((x1 - x2));
var y__4223__auto__ = (wh - quil.core.abs((x1 - x2)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var fexpr__11576 = ((function (G__11577,wh,vec__11569,x1,y1,vec__11572,x2,y2){
return (function (p1__11565_SHARP_){
return (p1__11565_SHARP_ * p1__11565_SHARP_);
});})(G__11577,wh,vec__11569,x1,y1,vec__11572,x2,y2))
;
return fexpr__11576(G__11577);
})() + (function (){var G__11579 = (function (){var x__4222__auto__ = quil.core.abs((y1 - y2));
var y__4223__auto__ = (wh - quil.core.abs((y1 - y2)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var fexpr__11578 = ((function (G__11579,wh,vec__11569,x1,y1,vec__11572,x2,y2){
return (function (p1__11566_SHARP_){
return (p1__11566_SHARP_ * p1__11566_SHARP_);
});})(G__11579,wh,vec__11569,x1,y1,vec__11572,x2,y2))
;
return fexpr__11578(G__11579);
})());
return Math.sqrt(G__11575);
});
/**
 * Returns the length of the [x y] vector.
 */
pucks.vec2D.length = (function pucks$vec2D$length(p__11580){
var vec__11581 = p__11580;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11581,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11581,(1),null);
var G__11584 = ((x * x) + (y * y));
return Math.sqrt(G__11584);
});
/**
 * Returns the result of multiplying any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._STAR_v = (function pucks$vec2D$_STAR_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11587 = arguments.length;
var i__4731__auto___11588 = (0);
while(true){
if((i__4731__auto___11588 < len__4730__auto___11587)){
args__4736__auto__.push((arguments[i__4731__auto___11588]));

var G__11589 = (i__4731__auto___11588 + (1));
i__4731__auto___11588 = G__11589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11585_SHARP_){
if(typeof p1__11585_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11585_SHARP_,p1__11585_SHARP_], null);
} else {
return p1__11585_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._STAR_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._STAR_v.cljs$lang$applyTo = (function (seq11586){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11586));
});

/**
 * Returns the result of adding any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._PLUS_v = (function pucks$vec2D$_PLUS_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11592 = arguments.length;
var i__4731__auto___11593 = (0);
while(true){
if((i__4731__auto___11593 < len__4730__auto___11592)){
args__4736__auto__.push((arguments[i__4731__auto___11593]));

var G__11594 = (i__4731__auto___11593 + (1));
i__4731__auto___11593 = G__11594;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11590_SHARP_){
if(typeof p1__11590_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11590_SHARP_,p1__11590_SHARP_], null);
} else {
return p1__11590_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._PLUS_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._PLUS_v.cljs$lang$applyTo = (function (seq11591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11591));
});

/**
 * Returns the result of subtracting any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._v = (function pucks$vec2D$_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11597 = arguments.length;
var i__4731__auto___11598 = (0);
while(true){
if((i__4731__auto___11598 < len__4730__auto___11597)){
args__4736__auto__.push((arguments[i__4731__auto___11598]));

var G__11599 = (i__4731__auto___11598 + (1));
i__4731__auto___11598 = G__11599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core._,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11595_SHARP_){
if(typeof p1__11595_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11595_SHARP_,p1__11595_SHARP_], null);
} else {
return p1__11595_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._v.cljs$lang$applyTo = (function (seq11596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11596));
});

/**
 * Returns the result of averaging any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D.avgv = (function pucks$vec2D$avgv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11602 = arguments.length;
var i__4731__auto___11603 = (0);
while(true){
if((i__4731__auto___11603 < len__4730__auto___11602)){
args__4736__auto__.push((arguments[i__4731__auto___11603]));

var G__11604 = (i__4731__auto___11603 + (1));
i__4731__auto___11603 = G__11604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
if(cljs.core.empty_QMARK_(vecs_or_nums)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11600_SHARP_){
return (p1__11600_SHARP_ / cljs.core.count(vecs_or_nums));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D._PLUS_v,vecs_or_nums)));
}
});

pucks.vec2D.avgv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D.avgv.cljs$lang$applyTo = (function (seq11601){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11601));
});

pucks.vec2D.limit_vec2D = (function pucks$vec2D$limit_vec2D(xy,limit){

if((pucks.vec2D.length(xy) <= limit)){
return xy;
} else {
return pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([limit,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11605_SHARP_){
return (p1__11605_SHARP_ / pucks.vec2D.length(xy));
}),xy))], 0));
}
});
/**
 * An abbreviation for (limit-vec2D n 1.0).
 */
pucks.vec2D.limit1 = (function pucks$vec2D$limit1(n){
return pucks.vec2D.limit_vec2D(n,1.0);
});
