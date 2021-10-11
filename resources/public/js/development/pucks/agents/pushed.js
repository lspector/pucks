// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.pushed');
goog.require('cljs.core');
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
pucks.agents.pushed.random_int = (function pucks$agents$pushed$random_int(){
return (cljs.core.rand_int.call(null,(201)) - (100));
});
pucks.agents.pushed.self = (function pucks$agents$pushed$self(p1,p2,tolerance,color_key){

var vec__7710 = color_key.call(null,p1);
var r1 = cljs.core.nth.call(null,vec__7710,(0),null);
var g1 = cljs.core.nth.call(null,vec__7710,(1),null);
var b1 = cljs.core.nth.call(null,vec__7710,(2),null);
var vec__7713 = color_key.call(null,p2);
var r2 = cljs.core.nth.call(null,vec__7713,(0),null);
var g2 = cljs.core.nth.call(null,vec__7713,(1),null);
var b2 = cljs.core.nth.call(null,vec__7713,(2),null);
return (((Math.abs((r1 - r2)) < tolerance)) && ((Math.abs((g1 - g2)) < tolerance)) && ((Math.abs((b1 - b2)) < tolerance)));
});
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"output-rotation","output-rotation",1443172996),cljs.core.with_meta((function (state){
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"float","float",-1732389368).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"float","float",-1732389368))));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"output","output",-1105869043),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"output-thrust-angle","output-thrust-angle",-1747619906),cljs.core.with_meta((function (state){
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"float","float",-1732389368).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"thrust-angle","thrust-angle",-1677390385),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"float","float",-1732389368))));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"output","output",-1105869043),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"output-color","output-color",252760244),cljs.core.with_meta((function (state){
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"integer","integer",-604721710).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"color","color",1011675173),propeller.push.state.peek_stack.call(null,state,new cljs.core.Keyword(null,"integer","integer",-604721710))));
} else {
return state;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"integer","integer",-604721710),null], null), null)], null)));
pucks.agents.pushed.instructions = propeller.utils.not_lazy.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_add","integer_add",-429483805),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_subtract","integer_subtract",-522113646),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_mult","integer_mult",-864719494),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_quot","integer_quot",1967229483),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer_eq","integer_eq",1174436858),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_while","exec_while",205430888),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_when","exec_when",1360752950),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_if","exec_if",-1891127445),(new cljs.core.List(null,new cljs.core.Keyword(null,"exec_dup","exec_dup",62681535),(new cljs.core.List(null,new cljs.core.Symbol(null,"close","close",-819286187,null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),propeller.push.utils.helpers.get_stack_instructions.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"output-rotation","output-rotation",1443172996),(new cljs.core.List(null,new cljs.core.Keyword(null,"output-thrust-angle","output-thrust-angle",-1747619906),(new cljs.core.List(null,new cljs.core.Keyword(null,"output-color","output-color",252760244),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"in1","in1",-201447014),(new cljs.core.List(null,new cljs.core.Keyword(null,"in2","in2",782506768),(new cljs.core.List(null,new cljs.core.Keyword(null,"in3","in3",-1673639565),(new cljs.core.List(null,new cljs.core.Keyword(null,"in4","in4",-295479145),(new cljs.core.List(null,new cljs.core.Keyword(null,"in5","in5",1271028956),(new cljs.core.List(null,new cljs.core.Keyword(null,"in6","in6",1249389885),(new cljs.core.List(null,new cljs.core.Keyword(null,"in7","in7",511485632),(new cljs.core.List(null,new cljs.core.Keyword(null,"in8","in8",251184967),(new cljs.core.List(null,new cljs.core.Keyword(null,"in9","in9",-234506565),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(new cljs.core.List(null,pucks.agents.pushed.random_int,null,(1),null))));
pucks.agents.pushed.pushed_proposals = (function pucks$agents$pushed$pushed_proposals(p){
var program = propeller.genome.plushy__GT_push.call(null,new cljs.core.Keyword(null,"genome","genome",-1313307628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p)));
var selves = cljs.core.filter.call(null,((function (program){
return (function (p1__7716_SHARP_){
return pucks.agents.pushed.self.call(null,p,p1__7716_SHARP_,0.1,new cljs.core.Keyword(null,"color","color",1011675173));
});})(program))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p)));
var average_selves_velocity = cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),selves));
var average_selves_position = cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),selves));
var others = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"mobile","mobile",1403078170),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set.call(null,selves));
var average_selves_rotation = pucks.util.relative_position__GT_rotation.call(null,average_selves_velocity);
var average_selves_direction = pucks.util.relative_position__GT_rotation.call(null,average_selves_position);
var vents = cljs.core.filter.call(null,new cljs.core.Keyword(null,"vent","vent",-1467857469),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
var average_vents_position = cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),vents));
var average_vents_direction = pucks.util.relative_position__GT_rotation.call(null,average_vents_position);
var average_vents_distance = pucks.vec2D.length.call(null,average_vents_position);
var zappers = cljs.core.filter.call(null,new cljs.core.Keyword(null,"zapper","zapper",362355558),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
var average_zappers_position = cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),zappers));
var average_zappers_direction = pucks.util.relative_position__GT_rotation.call(null,average_zappers_position);
var average_zappers_distance = pucks.vec2D.length.call(null,average_zappers_position);
var stones = cljs.core.filter.call(null,new cljs.core.Keyword(null,"stone","stone",-59276120),new cljs.core.Keyword(null,"sensed","sensed",1518013926).cljs$core$IFn$_invoke$arity$1(p));
var average_stones_position = cljs.core.apply.call(null,pucks.vec2D.avgv,cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),stones));
var average_stones_direction = pucks.util.relative_position__GT_rotation.call(null,average_stones_position);
var average_stones_distance = pucks.vec2D.length.call(null,average_stones_position);
var init_state = cljs.core.assoc.call(null,propeller.push.state.empty_state,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.PersistentArrayMap.EMPTY);
var output = propeller.push.interpreter.interpret_program.call(null,program,cljs.core.assoc.call(null,init_state,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"in7","in7",511485632),new cljs.core.Keyword(null,"in8","in8",251184967),new cljs.core.Keyword(null,"in2","in2",782506768),new cljs.core.Keyword(null,"in3","in3",-1673639565),new cljs.core.Keyword(null,"in4","in4",-295479145),new cljs.core.Keyword(null,"in1","in1",-201447014),new cljs.core.Keyword(null,"in9","in9",-234506565),new cljs.core.Keyword(null,"in5","in5",1271028956),new cljs.core.Keyword(null,"in6","in6",1249389885)],[average_stones_distance,average_selves_direction,average_zappers_direction,average_stones_direction,new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p),average_vents_direction,average_selves_rotation,average_zappers_distance,average_vents_distance])),(400));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(((cljs.core.mod.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p),(50)) < (25)))?(1):(0.25 * (- pucks.vec2D.length.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p))))),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),((typeof new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)) === 'number')?new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)):(0)),new cljs.core.Keyword(null,"thrust-angle","thrust-angle",-1677390385),((typeof new cljs.core.Keyword(null,"thrust-angle","thrust-angle",-1677390385).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)) === 'number')?new cljs.core.Keyword(null,"thrust-angle","thrust-angle",-1677390385).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)):(0)),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((typeof new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)) === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output)),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(output))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null))], null)], null),(((((cljs.core.mod.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p),(100)) === (0))) && ((new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p) > 0.8))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620).cljs$core$IFn$_invoke$arity$1(p).call(null,p)], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transfer","transfer",327423400),cljs.core.concat.call(null,(function (){var iter__4523__auto__ = ((function (program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function pucks$agents$pushed$pushed_proposals_$_iter__7719(s__7720){
return (new cljs.core.LazySeq(null,((function (program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (){
var s__7720__$1 = s__7720;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7720__$1);
if(temp__5735__auto__){
var s__7720__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7720__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7720__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7722 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7721 = (0);
while(true){
if((i__7721 < size__4522__auto__)){
var binder = cljs.core._nth.call(null,c__4521__auto__,i__7721);
cljs.core.chunk_append.call(null,b__7722,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder)], null)], null));

var G__7731 = (i__7721 + (1));
i__7721 = G__7731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7722),pucks$agents$pushed$pushed_proposals_$_iter__7719.call(null,cljs.core.chunk_rest.call(null,s__7720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7722),null);
}
} else {
var binder = cljs.core.first.call(null,s__7720__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(binder)], null)], null),pucks$agents$pushed$pushed_proposals_$_iter__7719.call(null,cljs.core.rest.call(null,s__7720__$2)));
}
} else {
return null;
}
break;
}
});})(program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,null,null));
});})(program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
;
return iter__4523__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"pushed","pushed",-511826548),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580).cljs$core$IFn$_invoke$arity$1(p)));
})(),(function (){var iter__4523__auto__ = ((function (program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function pucks$agents$pushed$pushed_proposals_$_iter__7723(s__7724){
return (new cljs.core.LazySeq(null,((function (program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (){
var s__7724__$1 = s__7724;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7724__$1);
if(temp__5735__auto__){
var s__7724__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7724__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7724__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7726 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7725 = (0);
while(true){
if((i__7725 < size__4522__auto__)){
var weaker = cljs.core._nth.call(null,c__4521__auto__,i__7725);
cljs.core.chunk_append.call(null,b__7726,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null)], null));

var G__7732 = (i__7725 + (1));
i__7725 = G__7732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7726),pucks$agents$pushed$pushed_proposals_$_iter__7723.call(null,cljs.core.chunk_rest.call(null,s__7724__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7726),null);
}
} else {
var weaker = cljs.core.first.call(null,s__7724__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker),new cljs.core.Keyword(null,"bid","bid",-1944960257),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null),new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.01], null)], null),pucks$agents$pushed$pushed_proposals_$_iter__7723.call(null,cljs.core.rest.call(null,s__7724__$2)));
}
} else {
return null;
}
break;
}
});})(program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,null,null));
});})(program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
;
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__,program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (p1__7717_SHARP_){
return (new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p1__7717_SHARP_) < new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__,program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,selves));
})(),(function (){var iter__4523__auto__ = ((function (program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function pucks$agents$pushed$pushed_proposals_$_iter__7727(s__7728){
return (new cljs.core.LazySeq(null,((function (program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (){
var s__7728__$1 = s__7728;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7728__$1);
if(temp__5735__auto__){
var s__7728__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7728__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7728__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7730 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7729 = (0);
while(true){
if((i__7729 < size__4522__auto__)){
var weaker_others = cljs.core._nth.call(null,c__4521__auto__,i__7729);
cljs.core.chunk_append.call(null,b__7730,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker_others),new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.02], null)], null));

var G__7733 = (i__7729 + (1));
i__7729 = G__7733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7730),pucks$agents$pushed$pushed_proposals_$_iter__7727.call(null,cljs.core.chunk_rest.call(null,s__7728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7730),null);
}
} else {
var weaker_others = cljs.core.first.call(null,s__7728__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(weaker_others),new cljs.core.Keyword(null,"bid","bid",-1944960257),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ask","ask",707712414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"energy","energy",129856526),0.02], null)], null),pucks$agents$pushed$pushed_proposals_$_iter__7727.call(null,cljs.core.rest.call(null,s__7728__$2)));
}
} else {
return null;
}
break;
}
});})(program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,null,null));
});})(program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
;
return iter__4523__auto__.call(null,cljs.core.filter.call(null,((function (iter__4523__auto__,program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output){
return (function (p1__7718_SHARP_){
return (new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p1__7718_SHARP_) < new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p));
});})(iter__4523__auto__,program,selves,average_selves_velocity,average_selves_position,others,average_selves_rotation,average_selves_direction,vents,average_vents_position,average_vents_direction,average_vents_distance,zappers,average_zappers_position,average_zappers_direction,average_zappers_distance,stones,average_stones_position,average_stones_direction,average_stones_distance,init_state,output))
,others));
})())], null)));
});
pucks.agents.pushed.umad = (function pucks$agents$pushed$umad(plushy_genome){
propeller.variation.uniform_addition.call(null,plushy_genome,pucks.agents.pushed.instructions,0.1);

return propeller.variation.uniform_deletion.call(null,plushy_genome,0.1);
});
pucks.agents.pushed.pushed = (function pucks$agents$pushed$pushed(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pushed","pushed",-511826548),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.pushed.pushed_proposals,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genome","genome",-1313307628),propeller.genome.make_random_plushy.call(null,pucks.agents.pushed.instructions,(200))], null),new cljs.core.Keyword(null,"spawn-function","spawn-function",661653620),(function (p1__7734_SHARP_){
return cljs.core.merge.call(null,p1__7734_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((10) * (cljs.core.rand.call(null) - 0.5)),((10) * (cljs.core.rand.call(null) - 0.5))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(pucks.globals.two_pi * cljs.core.rand.call(null)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((10) * (cljs.core.rand_int.call(null,(3)) - (1))),((10) * (cljs.core.rand_int.call(null,(3)) - (1)))], null),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"genome","genome",-1313307628),pucks.agents.pushed.umad.call(null,new cljs.core.Keyword(null,"genome","genome",-1313307628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(p1__7734_SHARP_)))], null)], null));
})], null));
});

//# sourceMappingURL=pushed.js.map
