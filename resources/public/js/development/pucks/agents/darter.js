// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.darter');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
goog.require('quil.core');
goog.require('pucks.agents.active');
pucks.agents.darter.rotation_velocity_mismatch = (function pucks$agents$darter$rotation_velocity_mismatch(p){
return quil.core.abs.call(null,(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p) - pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p))));
});
pucks.agents.darter.darter_proposals = (function pucks$agents$darter$darter_proposals(p){
var G__3314 = new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p));
var G__3314__$1 = (((G__3314 instanceof cljs.core.Keyword))?G__3314.fqn:null);
switch (G__3314__$1) {
case "orienting":
if((pucks.agents.darter.rotation_velocity_mismatch.call(null,p) > 0.1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"stopping","stopping",1036724975)], null)], null);
}

break;
case "stopping":
if((pucks.vec2D.length.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p)) > 0.5)){
if((pucks.agents.darter.rotation_velocity_mismatch.call(null,p) > 0.1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"orienting","orienting",-1499199506)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0.5 * (((pucks.agents.darter.rotation_velocity_mismatch.call(null,p) < (pucks.globals.pi / (2))))?(-1):(1)))], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"re-orienting","re-orienting",1173605740),new cljs.core.Keyword(null,"target-orientation","target-orientation",1008201199),pucks.util.wrap_rotation.call(null,cljs.core.rand.call(null,pucks.globals.two_pi))], null)], null);
}

break;
case "re-orienting":
if((quil.core.abs.call(null,(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"target-orientation","target-orientation",1008201199).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)))) > 0.1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"target-orientation","target-orientation",1008201199).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"darting","darting",-1982519345),new cljs.core.Keyword(null,"dart-steps","dart-steps",-532732841),(20)], null)], null);
}

break;
case "darting":
if((new cljs.core.Keyword(null,"dart-steps","dart-steps",-532732841).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)) > (1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(10),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dart-steps","dart-steps",-532732841),(new cljs.core.Keyword(null,"dart-steps","dart-steps",-532732841).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)) - (1))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"orienting","orienting",-1499199506)], null)], null);
}

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"orienting","orienting",-1499199506)], null)], null);

}
});
pucks.agents.darter.darter = (function pucks$agents$darter$darter(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"darter","darter",944636034),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.darter.darter_proposals], null));
});

//# sourceMappingURL=darter.js.map
