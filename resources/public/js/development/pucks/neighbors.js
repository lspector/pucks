// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.neighbors');
goog.require('cljs.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('pucks.util');
goog.require('cljs.core');
/**
 * Strips the embedded agents, which might be in the values of :neighbors, 
 * :sensed, and :overlaps, from agent a. This prevents the accumulation of long
 * or infinite chains of recursive agent references and also prevents agents
 * from inappropriately learning about agents that they have not sensed directly.
 */
pucks.neighbors.strip_embedded_agents = (function pucks$neighbors$strip_embedded_agents(a){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,a,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473)),new cljs.core.Keyword(null,"sensed","sensed",1518013926)),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580));
});
/**
 * Returns a neighborhood grid containing all agents.
 */
pucks.neighbors.neighborhood_grid = (function pucks$neighbors$neighborhood_grid(agents){
var grid_size = ((new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)) / new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings))) | (0));
var grid = cljs.core.vec.call(null,cljs.core.repeat.call(null,grid_size,cljs.core.vec.call(null,cljs.core.repeat.call(null,grid_size,cljs.core.PersistentVector.EMPTY))));
var remaining = agents;
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return grid;
} else {
var G__7233 = cljs.core.update_in.call(null,grid,cljs.core.mapv.call(null,((function (grid,remaining,grid_size){
return (function (p1__7232_SHARP_){
return ((p1__7232_SHARP_ / new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings))) | (0));
});})(grid,remaining,grid_size))
,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,remaining))),cljs.core.conj,cljs.core.first.call(null,remaining));
var G__7234 = cljs.core.rest.call(null,remaining);
grid = G__7233;
remaining = G__7234;
continue;
}
break;
}
});
/**
 * Returns a vector of the indices for the neighborhood grid where neighbors
 * could be found.
 */
pucks.neighbors.get_neighboring_grid_spaces = (function pucks$neighbors$get_neighboring_grid_spaces(grid_size,p__7235){
var vec__7236 = p__7235;
var x = cljs.core.nth.call(null,vec__7236,(0),null);
var y = cljs.core.nth.call(null,vec__7236,(1),null);
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (vec__7236,x,y){
return (function pucks$neighbors$get_neighboring_grid_spaces_$_iter__7239(s__7240){
return (new cljs.core.LazySeq(null,((function (vec__7236,x,y){
return (function (){
var s__7240__$1 = s__7240;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7240__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var dx = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7240__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__7236,x,y){
return (function pucks$neighbors$get_neighboring_grid_spaces_$_iter__7239_$_iter__7241(s__7242){
return (new cljs.core.LazySeq(null,((function (s__7240__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__7236,x,y){
return (function (){
var s__7242__$1 = s__7242;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7242__$1);
if(temp__5735__auto____$1){
var s__7242__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7242__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7242__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7244 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7243 = (0);
while(true){
if((i__7243 < size__4522__auto__)){
var dy = cljs.core._nth.call(null,c__4521__auto__,i__7243);
cljs.core.chunk_append.call(null,b__7244,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(x + dx),grid_size),cljs.core.mod.call(null,(y + dy),grid_size)], null));

var G__7245 = (i__7243 + (1));
i__7243 = G__7245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7244),pucks$neighbors$get_neighboring_grid_spaces_$_iter__7239_$_iter__7241.call(null,cljs.core.chunk_rest.call(null,s__7242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7244),null);
}
} else {
var dy = cljs.core.first.call(null,s__7242__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod.call(null,(x + dx),grid_size),cljs.core.mod.call(null,(y + dy),grid_size)], null),pucks$neighbors$get_neighboring_grid_spaces_$_iter__7239_$_iter__7241.call(null,cljs.core.rest.call(null,s__7242__$2)));
}
} else {
return null;
}
break;
}
});})(s__7240__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__7236,x,y))
,null,null));
});})(s__7240__$1,dx,xs__6292__auto__,temp__5735__auto__,vec__7236,x,y))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$neighbors$get_neighboring_grid_spaces_$_iter__7239.call(null,cljs.core.rest.call(null,s__7240__$1)));
} else {
var G__7246 = cljs.core.rest.call(null,s__7240__$1);
s__7240__$1 = G__7246;
continue;
}
} else {
return null;
}
break;
}
});})(vec__7236,x,y))
,null,null));
});})(vec__7236,x,y))
;
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
/**
 * Gets the potential neighbors of an agent.
 */
pucks.neighbors.get_potential_neighbors = (function pucks$neighbors$get_potential_neighbors(grid,a){
var grid_size = cljs.core.count.call(null,grid);
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.mapv.call(null,((function (grid_size){
return (function (p1__7247_SHARP_){
return cljs.core.get_in.call(null,grid,p1__7247_SHARP_);
});})(grid_size))
,pucks.neighbors.get_neighboring_grid_spaces.call(null,grid_size,cljs.core.mapv.call(null,((function (grid_size){
return (function (p1__7248_SHARP_){
return ((p1__7248_SHARP_ / new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings))) | (0));
});})(grid_size))
,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a)))));
});
/**
 * Annotates each agent in the simulation with :neighbors and :overlaps.
 */
pucks.neighbors.update_neighbors = (function pucks$neighbors$update_neighbors(){
return cljs.core.swap_BANG_.call(null,pucks.globals.all_agents,(function (objs){
var stripped = cljs.core.mapv.call(null,pucks.neighbors.strip_embedded_agents,objs);
var grid = pucks.neighbors.neighborhood_grid.call(null,stripped);
return pucks.util.pmapallv.call(null,((function (stripped,grid){
return (function (obj){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"stone","stone",-59276120).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"beacon","beacon",830759079).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"nursery","nursery",813370890).cljs$core$IFn$_invoke$arity$1(obj);
}
}
})())){
return obj;
} else {
var potential_neighs = pucks.neighbors.get_potential_neighbors.call(null,grid,obj);
var neighs = cljs.core.mapv.call(null,((function (potential_neighs,stripped,grid){
return (function (p1__7252_SHARP_){
return pucks.util.relativize_position.call(null,p1__7252_SHARP_,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(obj));
});})(potential_neighs,stripped,grid))
,cljs.core.filterv.call(null,((function (potential_neighs,stripped,grid){
return (function (p1__7253_SHARP_){
return (((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__7253_SHARP_))))) && ((pucks.vec2D.distance.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__7253_SHARP_)) <= new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)))));
});})(potential_neighs,stripped,grid))
,potential_neighs));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),neighs),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),cljs.core.filterv.call(null,((function (potential_neighs,neighs,stripped,grid){
return (function (p1__7254_SHARP_){
return (pucks.vec2D.length.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__7254_SHARP_)) <= (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(obj) + new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p1__7254_SHARP_)));
});})(potential_neighs,neighs,stripped,grid))
,neighs));
}
});})(stripped,grid))
,stripped);
}));
});

//# sourceMappingURL=neighbors.js.map
