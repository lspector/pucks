// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.core');
goog.require('cljs.core');
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
goog.require('pucks.worlds.dev.world10');
goog.require('cljs.core');
pucks.core.setup = (function pucks$core$setup(){
quil.core.smooth.call(null);

return quil.core.no_stroke.call(null);
});
pucks.core.draw_state = (function pucks$core$draw_state(){
if(cljs.core.not.call(null,cljs.core.deref.call(null,pucks.globals.paused))){
cljs.core.swap_BANG_.call(null,pucks.globals.iteration,cljs.core.inc);

cljs.core.swap_BANG_.call(null,pucks.globals.all_agents,(function (objs){
return cljs.core.mapv.call(null,(function (p1__4058_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stone","stone",-59276120).cljs$core$IFn$_invoke$arity$1(p1__4058_SHARP_))){
return p1__4058_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4058_SHARP_,new cljs.core.Keyword(null,"steps","steps",-128433302),(new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p1__4058_SHARP_) + (1)));
}
}),objs);
}));

cljs.core.reset_BANG_.call(null,pucks.globals.number_of_active_agents,cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.deref.call(null,pucks.globals.all_agents))));

pucks.neighbors.update_neighbors.call(null);

pucks.sensors.run_sensors.call(null);

pucks.physics.generate_proposals.call(null);

pucks.physics.arbitrate_proposals.call(null);

pucks.reap.reap.call(null);
} else {
}

return pucks.draw.draw_agents.call(null);
});
pucks.core.run_pucks = (function pucks$core$run_pucks(agents,settings){

cljs.core.reset_BANG_.call(null,pucks.globals.all_agents,agents);

cljs.core.swap_BANG_.call(null,pucks.globals.pucks_settings,(function (p1__4059_SHARP_){
return cljs.core.merge.call(null,p1__4059_SHARP_,settings);
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"pause-on-start","pause-on-start",-754330096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)))){
cljs.core.reset_BANG_.call(null,pucks.globals.paused,true);
} else {
}

var scaled_screen_size = (new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)) * new cljs.core.Keyword(null,"screen-size","screen-size",641239979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)));
pucks.core.pucks = ((function (scaled_screen_size){
return (function pucks$core$run_pucks_$_pucks(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"pucks",new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-on-close","exit-on-close",1341291937)], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scaled_screen_size,scaled_screen_size], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,pucks.core.setup))?((function (scaled_screen_size){
return (function() { 
var G__4060__delegate = function (args){
return cljs.core.apply.call(null,pucks.core.setup,args);
};
var G__4060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4061__i = 0, G__4061__a = new Array(arguments.length -  0);
while (G__4061__i < G__4061__a.length) {G__4061__a[G__4061__i] = arguments[G__4061__i + 0]; ++G__4061__i;}
  args = new cljs.core.IndexedSeq(G__4061__a,0,null);
} 
return G__4060__delegate.call(this,args);};
G__4060.cljs$lang$maxFixedArity = 0;
G__4060.cljs$lang$applyTo = (function (arglist__4062){
var args = cljs.core.seq(arglist__4062);
return G__4060__delegate(args);
});
G__4060.cljs$core$IFn$_invoke$arity$variadic = G__4060__delegate;
return G__4060;
})()
;})(scaled_screen_size))
:pucks.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,pucks.core.draw_state))?((function (scaled_screen_size){
return (function() { 
var G__4063__delegate = function (args){
return cljs.core.apply.call(null,pucks.core.draw_state,args);
};
var G__4063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4064__i = 0, G__4064__a = new Array(arguments.length -  0);
while (G__4064__i < G__4064__a.length) {G__4064__a[G__4064__i] = arguments[G__4064__i + 0]; ++G__4064__i;}
  args = new cljs.core.IndexedSeq(G__4064__a,0,null);
} 
return G__4063__delegate.call(this,args);};
G__4063.cljs$lang$maxFixedArity = 0;
G__4063.cljs$lang$applyTo = (function (arglist__4065){
var args = cljs.core.seq(arglist__4065);
return G__4063__delegate(args);
});
G__4063.cljs$core$IFn$_invoke$arity$variadic = G__4063__delegate;
return G__4063;
})()
;})(scaled_screen_size))
:pucks.core.draw_state));
});})(scaled_screen_size))
;
goog.exportSymbol('pucks.core.pucks', pucks.core.pucks);

if(cljs.core.truth_(cljs.core.some.call(null,((function (scaled_screen_size){
return (function (p1__1018__1019__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1018__1019__auto__);
});})(scaled_screen_size))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-on-close","exit-on-close",1341291937)], null)))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),pucks.core.pucks,new cljs.core.Keyword(null,"host-id","host-id",742376279),"pucks"], null));
}
});
pucks.core._main = (function pucks$core$_main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4067 = arguments.length;
var i__4731__auto___4068 = (0);
while(true){
if((i__4731__auto___4068 < len__4730__auto___4067)){
args__4736__auto__.push((arguments[i__4731__auto___4068]));

var G__4069 = (i__4731__auto___4068 + (1));
i__4731__auto___4068 = G__4069;
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
if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World1",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world1.agents.call(null),pucks.worlds.dev.world1.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World2",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world2.agents.call(null),pucks.worlds.dev.world2.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World3",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world3.agents.call(null),pucks.worlds.dev.world3.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World4",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world4.agents.call(null),pucks.worlds.dev.world4.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World5",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world5.agents.call(null),pucks.worlds.dev.world5.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World6",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world6.agents.call(null),pucks.worlds.dev.world6.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World7",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world7.agents.call(null),pucks.worlds.dev.world7.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World8",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world8.agents.call(null),pucks.worlds.dev.world8.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World9",null,(1),null)))){
pucks.core.run_pucks.call(null,pucks.worlds.dev.world9.agents.call(null),pucks.worlds.dev.world9.settings.call(null));
} else {
}

if(cljs.core._EQ_.call(null,args,(new cljs.core.List(null,"World10",null,(1),null)))){
return pucks.core.run_pucks.call(null,pucks.worlds.dev.world10.agents.call(null),pucks.worlds.dev.world10.settings.call(null));
} else {
return null;
}
});

pucks.core._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pucks.core._main.cljs$lang$applyTo = (function (seq4066){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4066));
});


//# sourceMappingURL=core.js.map
