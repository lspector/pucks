// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.object');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(p5.prototype["JAVA2D"]),cljs.core.cst$kw$p2d,(p5.prototype["P2D"]),cljs.core.cst$kw$p3d,(p5.prototype["P3D"]),cljs.core.cst$kw$opengl,(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p3d,mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5735__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height"));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__11148 = arguments.length;
switch (G__11148) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__11150 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouseWheel,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__11151 = null;
var count__11152 = (0);
var i__11153 = (0);
while(true){
if((i__11153 < count__11152)){
var vec__11164 = chunk__11151.cljs$core$IIndexed$_nth$arity$2(null,i__11153);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11164,(1),null);
var temp__5735__auto___11174 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___11174)){
var handler_11175 = temp__5735__auto___11174;
(prc[cljs.core.name(processing_name)] = ((function (seq__11150,chunk__11151,count__11152,i__11153,handler_11175,temp__5735__auto___11174,vec__11164,processing_name,quil_name){
return (function() { 
var G__11176__delegate = function (args){
var _STAR_applet_STAR__orig_val__11167 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__11168 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__11168;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_11175,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__11167;
}};
var G__11176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11177__i = 0, G__11177__a = new Array(arguments.length -  0);
while (G__11177__i < G__11177__a.length) {G__11177__a[G__11177__i] = arguments[G__11177__i + 0]; ++G__11177__i;}
  args = new cljs.core.IndexedSeq(G__11177__a,0,null);
} 
return G__11176__delegate.call(this,args);};
G__11176.cljs$lang$maxFixedArity = 0;
G__11176.cljs$lang$applyTo = (function (arglist__11178){
var args = cljs.core.seq(arglist__11178);
return G__11176__delegate(args);
});
G__11176.cljs$core$IFn$_invoke$arity$variadic = G__11176__delegate;
return G__11176;
})()
;})(seq__11150,chunk__11151,count__11152,i__11153,handler_11175,temp__5735__auto___11174,vec__11164,processing_name,quil_name))
);
} else {
}


var G__11179 = seq__11150;
var G__11180 = chunk__11151;
var G__11181 = count__11152;
var G__11182 = (i__11153 + (1));
seq__11150 = G__11179;
chunk__11151 = G__11180;
count__11152 = G__11181;
i__11153 = G__11182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__11150);
if(temp__5735__auto__){
var seq__11150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11150__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__11150__$1);
var G__11183 = cljs.core.chunk_rest(seq__11150__$1);
var G__11184 = c__4550__auto__;
var G__11185 = cljs.core.count(c__4550__auto__);
var G__11186 = (0);
seq__11150 = G__11183;
chunk__11151 = G__11184;
count__11152 = G__11185;
i__11153 = G__11186;
continue;
} else {
var vec__11169 = cljs.core.first(seq__11150__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11169,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11169,(1),null);
var temp__5735__auto___11187__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5735__auto___11187__$1)){
var handler_11188 = temp__5735__auto___11187__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__11150,chunk__11151,count__11152,i__11153,handler_11188,temp__5735__auto___11187__$1,vec__11169,processing_name,quil_name,seq__11150__$1,temp__5735__auto__){
return (function() { 
var G__11189__delegate = function (args){
var _STAR_applet_STAR__orig_val__11172 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__11173 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__11173;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_11188,args);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__11172;
}};
var G__11189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11190__i = 0, G__11190__a = new Array(arguments.length -  0);
while (G__11190__i < G__11190__a.length) {G__11190__a[G__11190__i] = arguments[G__11190__i + 0]; ++G__11190__i;}
  args = new cljs.core.IndexedSeq(G__11190__a,0,null);
} 
return G__11189__delegate.call(this,args);};
G__11189.cljs$lang$maxFixedArity = 0;
G__11189.cljs$lang$applyTo = (function (arglist__11191){
var args = cljs.core.seq(arglist__11191);
return G__11189__delegate(args);
});
G__11189.cljs$core$IFn$_invoke$arity$variadic = G__11189__delegate;
return G__11189;
})()
;})(seq__11150,chunk__11151,count__11152,i__11153,handler_11188,temp__5735__auto___11187__$1,vec__11169,processing_name,quil_name,seq__11150__$1,temp__5735__auto__))
);
} else {
}


var G__11192 = cljs.core.next(seq__11150__$1);
var G__11193 = null;
var G__11194 = (0);
var G__11195 = (0);
seq__11150 = G__11192;
chunk__11151 = G__11193;
count__11152 = G__11194;
i__11153 = G__11195;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4131__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__11197_11203 = window;
var G__11198_11204 = goog.events.EventType.KEYDOWN;
var G__11199_11205 = ((function (G__11197_11203,G__11198_11204,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__11197_11203,G__11198_11204,old_size,adjust_canvas_size))
;
goog.events.listen(G__11197_11203,G__11198_11204,G__11199_11205);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__11200 = document;
var G__11201 = "fullscreenerror";
var G__11202 = ((function (G__11200,G__11201,old_size,adjust_canvas_size){
return (function (p1__11196_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__11196_SHARP_);
});})(G__11200,G__11201,old_size,adjust_canvas_size))
;
return goog.events.listen(G__11200,G__11201,G__11202);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__11208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__11207 = ((function (G__11208){
return (function (p1__11206_SHARP_){
return (p1__11206_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11206_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__11206_SHARP_.call(null,options));
});})(G__11208))
;
return fexpr__11207(G__11208);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__11209_11212 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__11209_11212.cljs$core$IFn$_invoke$arity$0 ? fexpr__11209_11212.cljs$core$IFn$_invoke$arity$0() : fexpr__11209_11212.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__11210 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__11210.cljs$core$IFn$_invoke$arity$0 ? fexpr__11210.cljs$core$IFn$_invoke$arity$0() : fexpr__11210.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (function (){var temp__5735__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5735__auto__)){
var wheel_handler = temp__5735__auto__;
return ((function (wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup){
return (function (evt){
var G__11211 = goog.object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__11211) : wheel_handler.call(null,G__11211));
});
;})(wheel_handler,temp__5735__auto__,opts,sketch_size,renderer,features,setup))
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var sketch = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5735__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5735__auto__)){
var proc_obj = temp__5735__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11214 = arguments.length;
var i__4731__auto___11215 = (0);
while(true){
if((i__4731__auto___11215 < len__4730__auto___11214)){
args__4736__auto__.push((arguments[i__4731__auto___11215]));

var G__11216 = (i__4731__auto___11215 + (1));
i__4731__auto___11215 = G__11216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__4131__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem__$1.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
host_elem__$1.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem__$1;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq11213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11213));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__11225 = quil.sketch.empty_body_QMARK_();
var seq__11217_11226 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__11218_11227 = null;
var count__11219_11228 = (0);
var i__11220_11229 = (0);
while(true){
if((i__11220_11229 < count__11219_11228)){
var sk_11230 = chunk__11218_11227.cljs$core$IIndexed$_nth$arity$2(null,i__11220_11229);
if(add_elem_QMARK__11225){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_11230));
} else {
}

var fexpr__11223_11231 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_11230);
(fexpr__11223_11231.cljs$core$IFn$_invoke$arity$0 ? fexpr__11223_11231.cljs$core$IFn$_invoke$arity$0() : fexpr__11223_11231.call(null));


var G__11232 = seq__11217_11226;
var G__11233 = chunk__11218_11227;
var G__11234 = count__11219_11228;
var G__11235 = (i__11220_11229 + (1));
seq__11217_11226 = G__11232;
chunk__11218_11227 = G__11233;
count__11219_11228 = G__11234;
i__11220_11229 = G__11235;
continue;
} else {
var temp__5735__auto___11236 = cljs.core.seq(seq__11217_11226);
if(temp__5735__auto___11236){
var seq__11217_11237__$1 = temp__5735__auto___11236;
if(cljs.core.chunked_seq_QMARK_(seq__11217_11237__$1)){
var c__4550__auto___11238 = cljs.core.chunk_first(seq__11217_11237__$1);
var G__11239 = cljs.core.chunk_rest(seq__11217_11237__$1);
var G__11240 = c__4550__auto___11238;
var G__11241 = cljs.core.count(c__4550__auto___11238);
var G__11242 = (0);
seq__11217_11226 = G__11239;
chunk__11218_11227 = G__11240;
count__11219_11228 = G__11241;
i__11220_11229 = G__11242;
continue;
} else {
var sk_11243 = cljs.core.first(seq__11217_11237__$1);
if(add_elem_QMARK__11225){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_11243));
} else {
}

var fexpr__11224_11244 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_11243);
(fexpr__11224_11244.cljs$core$IFn$_invoke$arity$0 ? fexpr__11224_11244.cljs$core$IFn$_invoke$arity$0() : fexpr__11224_11244.call(null));


var G__11245 = cljs.core.next(seq__11217_11237__$1);
var G__11246 = null;
var G__11247 = (0);
var G__11248 = (0);
seq__11217_11226 = G__11245;
chunk__11218_11227 = G__11246;
count__11219_11228 = G__11247;
i__11220_11229 = G__11248;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
