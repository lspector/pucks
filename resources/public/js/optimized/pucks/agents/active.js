// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.active');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.agents.generic');
pucks.agents.active.draw_active = (function pucks$agents$active$draw_active(p){
var vec__13116 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13116,(1),null);
var radius = cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(p);
var vec__13119 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(2),null);
var vec__13122 = cljs.core.cst$kw$eye_DASH_color.cljs$core$IFn$_invoke$arity$1(p);
var eye_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(0),null);
var eye_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(1),null);
var eye_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13122,(2),null);
var vec__13125 = cljs.core.cst$kw$core_DASH_color.cljs$core$IFn$_invoke$arity$1(p);
var core_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(0),null);
var core_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(1),null);
var core_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13125,(2),null);
var core_diameter = (radius * cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p));
quil.core.push_matrix();

quil.core.translate.cljs$core$IFn$_invoke$arity$2(x,y);

quil.core.rotate.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.cljs$core$IFn$_invoke$arity$4(r,g,b,(100));

quil.core.ellipse((0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

quil.core.ellipse((0),(0),radius,radius);

quil.core.fill.cljs$core$IFn$_invoke$arity$4(core_r,core_g,core_b,(196));

quil.core.ellipse((0),(0),core_diameter,core_diameter);

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$inventory.cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.ellipse((0),(0),(radius * 0.2),(radius * 0.2));
}

quil.core.fill.cljs$core$IFn$_invoke$arity$4((255),(255),(255),(20));

var s_13128 = (cljs.core.cst$kw$sensor_DASH_range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings)) * (2));
quil.core.arc.cljs$core$IFn$_invoke$arity$6((0),(0),s_13128,s_13128,pucks.globals.pi,pucks.globals.two_pi);

if(cljs.core.truth_(cljs.core.cst$kw$just_DASH_collided.cljs$core$IFn$_invoke$arity$1(p))){
quil.core.fill.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(0));

quil.core.stroke_weight((5));

quil.core.stroke.cljs$core$IFn$_invoke$arity$4((255),(0),(0),(196));

quil.core.ellipse((0),(0),radius,radius);

quil.core.no_stroke();
} else {
}

quil.core.fill.cljs$core$IFn$_invoke$arity$4(eye_r,eye_g,eye_b,(196));

quil.core.ellipse((0),(radius * -0.75),(radius * 0.5),(radius * 0.5));

if(cljs.core.empty_QMARK_(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$3((0),(0),(0));

quil.core.ellipse((0),(radius * -0.75),(radius * 0.2),(radius * 0.2));
}

return quil.core.pop_matrix();
});
pucks.agents.active.active = (function pucks$agents$active$active(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.generic.generic(),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$mobile,true,cljs.core.cst$kw$active,true,cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(255),(0)], null),cljs.core.cst$kw$eye_DASH_color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null),cljs.core.cst$kw$core_DASH_color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),cljs.core.cst$kw$draw_DASH_function,pucks.agents.active.draw_active], null)], 0));
});
