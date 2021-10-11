// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.vec2D');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
/**
 * Returns the distance between two points on a toroidal world.
 */
pucks.vec2D.distance = (function pucks$vec2D$distance(p__6457,p__6458){
var vec__6459 = p__6457;
var x1 = cljs.core.nth.call(null,vec__6459,(0),null);
var y1 = cljs.core.nth.call(null,vec__6459,(1),null);
var vec__6462 = p__6458;
var x2 = cljs.core.nth.call(null,vec__6462,(0),null);
var y2 = cljs.core.nth.call(null,vec__6462,(1),null);
var wh = new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
return Math.sqrt((((function (wh,vec__6459,x1,y1,vec__6462,x2,y2){
return (function (p1__6455_SHARP_){
return (p1__6455_SHARP_ * p1__6455_SHARP_);
});})(wh,vec__6459,x1,y1,vec__6462,x2,y2))
.call(null,(function (){var x__4222__auto__ = quil.core.abs.call(null,(x1 - x2));
var y__4223__auto__ = (wh - quil.core.abs.call(null,(x1 - x2)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()) + ((function (wh,vec__6459,x1,y1,vec__6462,x2,y2){
return (function (p1__6456_SHARP_){
return (p1__6456_SHARP_ * p1__6456_SHARP_);
});})(wh,vec__6459,x1,y1,vec__6462,x2,y2))
.call(null,(function (){var x__4222__auto__ = quil.core.abs.call(null,(y1 - y2));
var y__4223__auto__ = (wh - quil.core.abs.call(null,(y1 - y2)));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})())));
});
/**
 * Returns the length of the [x y] vector.
 */
pucks.vec2D.length = (function pucks$vec2D$length(p__6465){
var vec__6466 = p__6465;
var x = cljs.core.nth.call(null,vec__6466,(0),null);
var y = cljs.core.nth.call(null,vec__6466,(1),null);
return Math.sqrt(((x * x) + (y * y)));
});
/**
 * Returns the result of multiplying any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._STAR_v = (function pucks$vec2D$_STAR_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6471 = arguments.length;
var i__4731__auto___6472 = (0);
while(true){
if((i__4731__auto___6472 < len__4730__auto___6471)){
args__4736__auto__.push((arguments[i__4731__auto___6472]));

var G__6473 = (i__4731__auto___6472 + (1));
i__4731__auto___6472 = G__6473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._STAR_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core._STAR_,cljs.core.map.call(null,(function (p1__6469_SHARP_){
if(typeof p1__6469_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6469_SHARP_,p1__6469_SHARP_], null);
} else {
return p1__6469_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._STAR_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._STAR_v.cljs$lang$applyTo = (function (seq6470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6470));
});

/**
 * Returns the result of adding any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._PLUS_v = (function pucks$vec2D$_PLUS_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6476 = arguments.length;
var i__4731__auto___6477 = (0);
while(true){
if((i__4731__auto___6477 < len__4730__auto___6476)){
args__4736__auto__.push((arguments[i__4731__auto___6477]));

var G__6478 = (i__4731__auto___6477 + (1));
i__4731__auto___6477 = G__6478;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._PLUS_v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6474_SHARP_){
if(typeof p1__6474_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6474_SHARP_,p1__6474_SHARP_], null);
} else {
return p1__6474_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._PLUS_v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._PLUS_v.cljs$lang$applyTo = (function (seq6475){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6475));
});

/**
 * Returns the result of subtracting any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D._v = (function pucks$vec2D$_v(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6481 = arguments.length;
var i__4731__auto___6482 = (0);
while(true){
if((i__4731__auto___6482 < len__4730__auto___6481)){
args__4736__auto__.push((arguments[i__4731__auto___6482]));

var G__6483 = (i__4731__auto___6482 + (1));
i__4731__auto___6482 = G__6483;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core._,cljs.core.map.call(null,(function (p1__6479_SHARP_){
if(typeof p1__6479_SHARP_ === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__6479_SHARP_,p1__6479_SHARP_], null);
} else {
return p1__6479_SHARP_;
}
}),vecs_or_nums)));
});

pucks.vec2D._v.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D._v.cljs$lang$applyTo = (function (seq6480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6480));
});

/**
 * Returns the result of averaging any number of [x y] vectors.
 * Single numbers n will be treated as [n n] vectors.
 */
pucks.vec2D.avgv = (function pucks$vec2D$avgv(var_args){
var args__4736__auto__ = [];
var len__4730__auto___6486 = arguments.length;
var i__4731__auto___6487 = (0);
while(true){
if((i__4731__auto___6487 < len__4730__auto___6486)){
args__4736__auto__.push((arguments[i__4731__auto___6487]));

var G__6488 = (i__4731__auto___6487 + (1));
i__4731__auto___6487 = G__6488;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pucks.vec2D.avgv.cljs$core$IFn$_invoke$arity$variadic = (function (vecs_or_nums){
if(cljs.core.empty_QMARK_.call(null,vecs_or_nums)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__6484_SHARP_){
return (p1__6484_SHARP_ / cljs.core.count.call(null,vecs_or_nums));
}),cljs.core.apply.call(null,pucks.vec2D._PLUS_v,vecs_or_nums)));
}
});

pucks.vec2D.avgv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.vec2D.avgv.cljs$lang$applyTo = (function (seq6485){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6485));
});

pucks.vec2D.limit_vec2D = (function pucks$vec2D$limit_vec2D(xy,limit){

if((pucks.vec2D.length.call(null,xy) <= limit)){
return xy;
} else {
return pucks.vec2D._STAR_v.call(null,limit,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__6489_SHARP_){
return (p1__6489_SHARP_ / pucks.vec2D.length.call(null,xy));
}),xy)));
}
});
/**
 * An abbreviation for (limit-vec2D n 1.0).
 */
pucks.vec2D.limit1 = (function pucks$vec2D$limit1(n){
return pucks.vec2D.limit_vec2D.call(null,n,1.0);
});

//# sourceMappingURL=vec2D.js.map
