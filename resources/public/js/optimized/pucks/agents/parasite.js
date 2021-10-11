// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.agents.parasite');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pucks.vec2D');
goog.require('pucks.agents.active');
goog.require('propeller.genome');
goog.require('propeller.push.interpreter');
goog.require('propeller.push.state');
goog.require('propeller.variation');
goog.require('propeller.gp');
goog.require('propeller.utils');
goog.require('pucks.globals');
goog.require('pucks.util');
goog.require('clojure.set');
goog.require('propeller.push.utils.helpers');
pucks.agents.parasite.random_int = (function pucks$agents$parasite$random_int(){
return (cljs.core.rand_int((201)) - (100));
});
pucks.agents.parasite.self = (function pucks$agents$parasite$self(p1,p2,tolerance,color_key){

var vec__16149 = (color_key.cljs$core$IFn$_invoke$arity$1 ? color_key.cljs$core$IFn$_invoke$arity$1(p1) : color_key.call(null,p1));
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(0),null);
var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(1),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149,(2),null);
var vec__16152 = (color_key.cljs$core$IFn$_invoke$arity$1 ? color_key.cljs$core$IFn$_invoke$arity$1(p2) : color_key.call(null,p2));
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(0),null);
var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(1),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16152,(2),null);
return ((((function (){var G__16158 = (r1 - r2);
return Math.abs(G__16158);
})() < tolerance)) && (((function (){var G__16159 = (g1 - g2);
return Math.abs(G__16159);
})() < tolerance)) && (((function (){var G__16160 = (b1 - b2);
return Math.abs(G__16160);
})() < tolerance)));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$output_DASH_rotation,cljs.core.with_meta((function (state){
if((!(cljs.core.empty_QMARK_(cljs.core.cst$kw$float.cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$output,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rotation,propeller.push.state.peek_stack(state,cljs.core.cst$kw$float)));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$output,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$output_DASH_thrust_DASH_angle,cljs.core.with_meta((function (state){
if((!(cljs.core.empty_QMARK_(cljs.core.cst$kw$float.cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$output,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$thrust_DASH_angle,propeller.push.state.peek_stack(state,cljs.core.cst$kw$float)));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$output,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$output_DASH_color,cljs.core.with_meta((function (state){
if((!(cljs.core.empty_QMARK_(cljs.core.cst$kw$integer.cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$output,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$color,propeller.push.state.peek_stack(state,cljs.core.cst$kw$integer)));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output,null,cljs.core.cst$kw$integer,null], null), null)], null)));
pucks.agents.parasite.instructions = propeller.utils.not_lazy(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$integer_add,(new cljs.core.List(null,cljs.core.cst$kw$integer_subtract,(new cljs.core.List(null,cljs.core.cst$kw$integer_mult,(new cljs.core.List(null,cljs.core.cst$kw$integer_quot,(new cljs.core.List(null,cljs.core.cst$kw$integer_eq,(new cljs.core.List(null,cljs.core.cst$kw$exec_while,(new cljs.core.List(null,cljs.core.cst$kw$exec_when,(new cljs.core.List(null,cljs.core.cst$kw$exec_if,(new cljs.core.List(null,cljs.core.cst$kw$exec_dup,(new cljs.core.List(null,cljs.core.cst$sym$close,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),propeller.push.utils.helpers.get_stack_instructions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$boolean,null], null), null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$output_DASH_rotation,(new cljs.core.List(null,cljs.core.cst$kw$output_DASH_thrust_DASH_angle,(new cljs.core.List(null,cljs.core.cst$kw$output_DASH_color,null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,cljs.core.cst$kw$in1,(new cljs.core.List(null,cljs.core.cst$kw$in2,(new cljs.core.List(null,cljs.core.cst$kw$in3,(new cljs.core.List(null,cljs.core.cst$kw$in4,(new cljs.core.List(null,cljs.core.cst$kw$in5,(new cljs.core.List(null,cljs.core.cst$kw$in6,(new cljs.core.List(null,cljs.core.cst$kw$in7,(new cljs.core.List(null,cljs.core.cst$kw$in8,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(new cljs.core.List(null,pucks.agents.parasite.random_int,null,(1),null))], 0)));
pucks.agents.parasite.parasite_proposals = (function pucks$agents$parasite$parasite_proposals(p){
var program = propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p)));
var selves = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (program){
return (function (p1__16161_SHARP_){
return pucks.agents.parasite.self(p,p1__16161_SHARP_,0.1,cljs.core.cst$kw$color);
});})(program))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p)));
var average_selves_velocity = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,selves));
var average_selves_position = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,selves));
var others = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mobile,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set(selves));
var average_others_velocity = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$velocity,others));
var average_others_position = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,others));
var average_others_rotation = pucks.util.relative_position__GT_rotation(average_others_velocity);
var average_others_direction = pucks.util.relative_position__GT_rotation(average_others_position);
var average_others_distance = pucks.vec2D.length(average_others_position);
var average_selves_rotation = pucks.util.relative_position__GT_rotation(average_selves_velocity);
var average_selves_direction = pucks.util.relative_position__GT_rotation(average_selves_position);
var vents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
var average_vents_position = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,vents));
var average_vents_direction = pucks.util.relative_position__GT_rotation(average_vents_position);
var average_vents_distance = pucks.vec2D.length(average_vents_position);
var zappers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zapper,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
var average_zappers_position = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,zappers));
var average_zappers_direction = pucks.util.relative_position__GT_rotation(average_zappers_position);
var average_zappers_distance = pucks.vec2D.length(average_zappers_position);
var stones = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stone,cljs.core.cst$kw$sensed.cljs$core$IFn$_invoke$arity$1(p));
var average_stones_position = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pucks.vec2D.avgv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,stones));
var average_stones_direction = pucks.util.relative_position__GT_rotation(average_stones_position);
var average_stones_distance = pucks.vec2D.length(average_stones_position);
var init_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(propeller.push.state.empty_state,cljs.core.cst$kw$output,cljs.core.PersistentArrayMap.EMPTY);
var output = propeller.push.interpreter.interpret_program(program,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(init_state,cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$in1,average_others_direction,cljs.core.cst$kw$in2,average_zappers_direction,cljs.core.cst$kw$in3,cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$in4,average_others_rotation,cljs.core.cst$kw$in5,average_zappers_distance,cljs.core.cst$kw$in6,average_vents_distance,cljs.core.cst$kw$in7,average_others_distance,cljs.core.cst$kw$in8,average_stones_direction], null)),(400));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$acceleration,(((cljs.core.mod(cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(p),(50)) < (25)))?(1):(0.25 * (- pucks.vec2D.length(cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(p))))),cljs.core.cst$kw$rotation,((typeof cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)) === 'number')?cljs.core.cst$kw$rotation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)):(0)),cljs.core.cst$kw$thrust_DASH_angle,((typeof cljs.core.cst$kw$thrust_DASH_angle.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)) === 'number')?cljs.core.cst$kw$thrust_DASH_angle.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)):(0)),cljs.core.cst$kw$properties,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,((typeof cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)),cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output)),cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$output.cljs$core$IFn$_invoke$arity$1(output))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null))], null)], null),(((((cljs.core.cst$kw$energy.cljs$core$IFn$_invoke$arity$1(p) > 0.8)) && ((!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pushed,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)))))) && ((cljs.core.cst$kw$steps.cljs$core$IFn$_invoke$arity$1(p) > (50)))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spawn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__16162 = cljs.core.cst$kw$spawn_DASH_function.cljs$core$IFn$_invoke$arity$1(p);
return (fexpr__16162.cljs$core$IFn$_invoke$arity$1 ? fexpr__16162.cljs$core$IFn$_invoke$arity$1(p) : fexpr__16162.call(null,p));
})()], null)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transfer,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__4523__auto__ = ((function (program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function pucks$agents$parasite$parasite_proposals_$_iter__16163(s__16164){
return (new cljs.core.LazySeq(null,((function (program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (){
var s__16164__$1 = s__16164;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16164__$1);
if(temp__5735__auto__){
var s__16164__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16164__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16164__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16166 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16165 = (0);
while(true){
if((i__16165 < size__4522__auto__)){
var binder = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16165);
cljs.core.chunk_append(b__16166,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder)], null)], null));

var G__16175 = (i__16165 + (1));
i__16165 = G__16175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16166),pucks$agents$parasite$parasite_proposals_$_iter__16163(cljs.core.chunk_rest(s__16164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16166),null);
}
} else {
var binder = cljs.core.first(s__16164__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p)], null),cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bound_DASH_to,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(binder)], null)], null),pucks$agents$parasite$parasite_proposals_$_iter__16163(cljs.core.rest(s__16164__$2)));
}
} else {
return null;
}
break;
}
});})(program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,null,null));
});})(program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
;
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pushed,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})(),(function (){var iter__4523__auto__ = ((function (program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function pucks$agents$parasite$parasite_proposals_$_iter__16167(s__16168){
return (new cljs.core.LazySeq(null,((function (program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (){
var s__16168__$1 = s__16168;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16168__$1);
if(temp__5735__auto__){
var s__16168__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16168__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16168__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16170 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16169 = (0);
while(true){
if((i__16169 < size__4522__auto__)){
var vents__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16169);
cljs.core.chunk_append(b__16170,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(vents__$1),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null));

var G__16176 = (i__16169 + (1));
i__16169 = G__16176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16170),pucks$agents$parasite$parasite_proposals_$_iter__16167(cljs.core.chunk_rest(s__16168__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16170),null);
}
} else {
var vents__$1 = cljs.core.first(s__16168__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(vents__$1),cljs.core.cst$kw$bid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.01], null),cljs.core.cst$kw$ask,cljs.core.PersistentArrayMap.EMPTY], null),pucks$agents$parasite$parasite_proposals_$_iter__16167(cljs.core.rest(s__16168__$2)));
}
} else {
return null;
}
break;
}
});})(program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,null,null));
});})(program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
;
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vent,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4523__auto__ = ((function (program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function pucks$agents$parasite$parasite_proposals_$_iter__16171(s__16172){
return (new cljs.core.LazySeq(null,((function (program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (){
var s__16172__$1 = s__16172;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16172__$1);
if(temp__5735__auto__){
var s__16172__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16172__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16172__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16174 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16173 = (0);
while(true){
if((i__16173 < size__4522__auto__)){
var bound = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16173);
cljs.core.chunk_append(b__16174,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(bound),cljs.core.cst$kw$bid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.2], null)], null));

var G__16177 = (i__16173 + (1));
i__16173 = G__16177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16174),pucks$agents$parasite$parasite_proposals_$_iter__16171(cljs.core.chunk_rest(s__16172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16174),null);
}
} else {
var bound = cljs.core.first(s__16172__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$self,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$other,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(bound),cljs.core.cst$kw$bid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ask,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$energy,0.2], null)], null),pucks$agents$parasite$parasite_proposals_$_iter__16171(cljs.core.rest(s__16172__$2)));
}
} else {
return null;
}
break;
}
});})(program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,null,null));
});})(program,selves,average_selves_velocity,average_selves_position,others,average_others_velocity,average_others_position,average_others_rotation,average_others_direction,average_others_distance,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
;
return iter__4523__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pushed,cljs.core.cst$kw$overlaps.cljs$core$IFn$_invoke$arity$1(p)));
})()], 0))], null))], 0));
});
pucks.agents.parasite.umad = (function pucks$agents$parasite$umad(plushy_genome){
propeller.variation.uniform_addition(plushy_genome,pucks.agents.parasite.instructions,0.2);

return propeller.variation.uniform_deletion(plushy_genome,0.2);
});
pucks.agents.parasite.parasite = (function pucks$agents$parasite$parasite(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pucks.agents.active.active(),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parasite,true,cljs.core.cst$kw$proposal_DASH_function,pucks.agents.parasite.parasite_proposals,cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,propeller.genome.make_random_plushy(pucks.agents.parasite.instructions,(200))], null),cljs.core.cst$kw$spawn_DASH_function,(function (p1__16178_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16178_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((10) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5)),((10) * (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() - 0.5))], null),cljs.core.cst$kw$rotation,(pucks.globals.two_pi * cljs.core.rand.cljs$core$IFn$_invoke$arity$0()),cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((10) * (cljs.core.rand_int((3)) - (1))),((10) * (cljs.core.rand_int((3)) - (1)))], null),cljs.core.cst$kw$memory,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genome,pucks.agents.parasite.umad(cljs.core.cst$kw$genome.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$memory.cljs$core$IFn$_invoke$arity$1(p1__16178_SHARP_)))], null)], null)], 0));
})], null)], 0));
});
