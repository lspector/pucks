// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.active');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.agents.generic');
pucks.agents.active.draw_active = (function pucks$agents$active$draw_active(p){
var vec__3299 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var x = cljs.core.nth.call(null,vec__3299,(0),null);
var y = cljs.core.nth.call(null,vec__3299,(1),null);
var radius = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(p);
var vec__3302 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p);
var r = cljs.core.nth.call(null,vec__3302,(0),null);
var g = cljs.core.nth.call(null,vec__3302,(1),null);
var b = cljs.core.nth.call(null,vec__3302,(2),null);
var vec__3305 = new cljs.core.Keyword(null,"eye-color","eye-color",1844620441).cljs$core$IFn$_invoke$arity$1(p);
var eye_r = cljs.core.nth.call(null,vec__3305,(0),null);
var eye_g = cljs.core.nth.call(null,vec__3305,(1),null);
var eye_b = cljs.core.nth.call(null,vec__3305,(2),null);
var vec__3308 = new cljs.core.Keyword(null,"core-color","core-color",278930388).cljs$core$IFn$_invoke$arity$1(p);
var core_r = cljs.core.nth.call(null,vec__3308,(0),null);
var core_g = cljs.core.nth.call(null,vec__3308,(1),null);
var core_b = cljs.core.nth.call(null,vec__3308,(2),null);
var core_diameter = (radius * new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p));
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x,y);

quil.core.rotate.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(p));

quil.core.fill.call(null,r,g,b,(100));

quil.core.ellipse.call(null,(0),(0),(radius * (2)),(radius * (2)));

quil.core.fill.call(null,(255),(255),(255));

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.fill.call(null,core_r,core_g,core_b,(196));

quil.core.ellipse.call(null,(0),(0),core_diameter,core_diameter);

if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"inventory","inventory",860201871).cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.call(null,(0),(0),(0));

quil.core.ellipse.call(null,(0),(0),(radius * 0.2),(radius * 0.2));
}

quil.core.fill.call(null,(255),(255),(255),(20));

var s_3311 = (new cljs.core.Keyword(null,"sensor-range","sensor-range",354078975).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings)) * (2));
quil.core.arc.call(null,(0),(0),s_3311,s_3311,pucks.globals.pi,pucks.globals.two_pi);

if(cljs.core.truth_(new cljs.core.Keyword(null,"just-collided","just-collided",-1982799533).cljs$core$IFn$_invoke$arity$1(p))){
quil.core.fill.call(null,(0),(0),(0),(0));

quil.core.stroke_weight.call(null,(5));

quil.core.stroke.call(null,(255),(0),(0),(196));

quil.core.ellipse.call(null,(0),(0),radius,radius);

quil.core.no_stroke.call(null);
} else {
}

quil.core.fill.call(null,eye_r,eye_g,eye_b,(196));

quil.core.ellipse.call(null,(0),(radius * -0.75),(radius * 0.5),(radius * 0.5));

if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p))){
} else {
quil.core.fill.call(null,(0),(0),(0));

quil.core.ellipse.call(null,(0),(radius * -0.75),(radius * 0.2),(radius * 0.2));
}

return quil.core.pop_matrix.call(null);
});
pucks.agents.active.active = (function pucks$agents$active$active(){
return cljs.core.merge.call(null,pucks.agents.generic.generic.call(null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),true,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(255),(0)], null),new cljs.core.Keyword(null,"eye-color","eye-color",1844620441),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null),new cljs.core.Keyword(null,"core-color","core-color",278930388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301),pucks.agents.active.draw_active], null));
});

//# sourceMappingURL=active.js.map
