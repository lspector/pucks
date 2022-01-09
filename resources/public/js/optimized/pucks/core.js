// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.physics');
goog.require('pucks.reap');
goog.require('pucks.neighbors');
goog.require('pucks.sensors');
goog.require('pucks.draw');
goog.require('pucks.worlds.dev.world1');
goog.require('pucks.worlds.dev.world2');
goog.require('pucks.worlds.dev.world3');
goog.require('pucks.worlds.dev.world4');
goog.require('pucks.worlds.dev.world5');
goog.require('pucks.worlds.dev.world6');
goog.require('pucks.worlds.dev.world7');
goog.require('pucks.worlds.dev.world8');
goog.require('pucks.worlds.dev.world9');
goog.require('pucks.worlds.dev.world24');
goog.require('cljs.core');
pucks.core.setup = (function pucks$core$setup(){

quil.core.smooth.cljs$core$IFn$_invoke$arity$0();

return quil.core.no_stroke();
});
pucks.core.draw_state = (function pucks$core$draw_state(){

if(cljs.core.not(cljs.core.deref(pucks.globals.paused))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pucks.globals.iteration,cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pucks.globals.all_agents,(function (objs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__16227_SHARP_){
if(cljs.core.truth_(cljs.core.cst$kw$stone.cljs$core$IFn$_invoke$arity$1(p1__16227_SHARP_))){
return p1__16227_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16227_SHARP_,cljs.core.cst$kw$steps,(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(p1__16227_SHARP_) + (1)));
}
}),objs);
}));

cljs.core.reset_BANG_(pucks.globals.number_of_active_agents,cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active,cljs.core.deref(pucks.globals.all_agents))));

pucks.neighbors.update_neighbors();

pucks.sensors.run_sensors();

pucks.physics.generate_proposals();

pucks.physics.arbitrate_proposals();

pucks.reap.reap();
} else {
}

return pucks.draw.draw_agents();
});
pucks.core.run_pucks = (function pucks$core$run_pucks(agents,settings){

cljs.core.reset_BANG_(pucks.globals.all_agents,agents);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pucks.globals.pucks_settings,(function (p1__16228_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16228_SHARP_,settings], 0));
}));

if(cljs.core.truth_(cljs.core.cst$kw$pause_DASH_on_DASH_start.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)))){
cljs.core.reset_BANG_(pucks.globals.paused,true);
} else {
}

var scaled_screen_size = (cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)) * cljs.core.cst$kw$screen_DASH_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)));
pucks.core.pucks = ((function (scaled_screen_size){
return (function pucks$core$run_pucks_$_pucks(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"pucks",cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exit_DASH_on_DASH_close], null),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scaled_screen_size,scaled_screen_size], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(pucks.core.setup))?((function (scaled_screen_size){
return (function() { 
var G__16229__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.core.setup,args);
};
var G__16229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16230__i = 0, G__16230__a = new Array(arguments.length -  0);
while (G__16230__i < G__16230__a.length) {G__16230__a[G__16230__i] = arguments[G__16230__i + 0]; ++G__16230__i;}
  args = new cljs.core.IndexedSeq(G__16230__a,0,null);
} 
return G__16229__delegate.call(this,args);};
G__16229.cljs$lang$maxFixedArity = 0;
G__16229.cljs$lang$applyTo = (function (arglist__16231){
var args = cljs.core.seq(arglist__16231);
return G__16229__delegate(args);
});
G__16229.cljs$core$IFn$_invoke$arity$variadic = G__16229__delegate;
return G__16229;
})()
;})(scaled_screen_size))
:pucks.core.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(pucks.core.draw_state))?((function (scaled_screen_size){
return (function() { 
var G__16232__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.core.draw_state,args);
};
var G__16232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16233__i = 0, G__16233__a = new Array(arguments.length -  0);
while (G__16233__i < G__16233__a.length) {G__16233__a[G__16233__i] = arguments[G__16233__i + 0]; ++G__16233__i;}
  args = new cljs.core.IndexedSeq(G__16233__a,0,null);
} 
return G__16232__delegate.call(this,args);};
G__16232.cljs$lang$maxFixedArity = 0;
G__16232.cljs$lang$applyTo = (function (arglist__16234){
var args = cljs.core.seq(arglist__16234);
return G__16232__delegate(args);
});
G__16232.cljs$core$IFn$_invoke$arity$variadic = G__16232__delegate;
return G__16232;
})()
;})(scaled_screen_size))
:pucks.core.draw_state)], 0));
});})(scaled_screen_size))
;
goog.exportSymbol('pucks.core.pucks', pucks.core.pucks);

if(cljs.core.truth_(cljs.core.some(((function (scaled_screen_size){
return (function (p1__1028__1029__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__1028__1029__auto__);
});})(scaled_screen_size))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$exit_DASH_on_DASH_close], null)))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,pucks.core.pucks,cljs.core.cst$kw$host_DASH_id,"pucks"], null));
}
});
pucks.core._main = (function pucks$core$_main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16236 = arguments.length;
var i__4731__auto___16237 = (0);
while(true){
if((i__4731__auto___16237 < len__4730__auto___16236)){
args__4736__auto__.push((arguments[i__4731__auto___16237]));

var G__16238 = (i__4731__auto___16237 + (1));
i__4731__auto___16237 = G__16238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pucks.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});
goog.exportSymbol('pucks.core._main', pucks.core._main);

pucks.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World1",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world1.agents(),pucks.worlds.dev.world1.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World2",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world2.agents(),pucks.worlds.dev.world2.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World3",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world3.agents(),pucks.worlds.dev.world3.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World4",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world4.agents(),pucks.worlds.dev.world4.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World5",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world5.agents(),pucks.worlds.dev.world5.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World6",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world6.agents(),pucks.worlds.dev.world6.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World7",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world7.agents(),pucks.worlds.dev.world7.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World8",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world8.agents(),pucks.worlds.dev.world8.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World9",null,(1),null)))){
pucks.core.run_pucks(pucks.worlds.dev.world9.agents(),pucks.worlds.dev.world9.settings());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(args,(new cljs.core.List(null,"World10",null,(1),null)))){
return pucks.core.run_pucks(pucks.worlds.dev.world24.agents(),pucks.worlds.dev.world24.settings());
} else {
return null;
}
});

pucks.core._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.core._main.cljs$lang$applyTo = (function (seq16235){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16235));
});

