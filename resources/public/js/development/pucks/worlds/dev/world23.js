// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world23');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.shooter');
pucks.worlds.dev.world23.horizontal_wall = (function pucks$worlds$dev$world23$horizontal_wall(p__4140,y){
var vec__4141 = p__4140;
var x_min = cljs.core.nth.call(null,vec__4141,(0),null);
var x_max = cljs.core.nth.call(null,vec__4141,(1),null);
var iter__4523__auto__ = ((function (vec__4141,x_min,x_max){
return (function pucks$worlds$dev$world23$horizontal_wall_$_iter__4144(s__4145){
return (new cljs.core.LazySeq(null,((function (vec__4141,x_min,x_max){
return (function (){
var s__4145__$1 = s__4145;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4145__$1);
if(temp__5735__auto__){
var s__4145__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4145__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4145__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4147 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4146 = (0);
while(true){
if((i__4146 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__4146);
cljs.core.chunk_append.call(null,b__4147,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4148 = (i__4146 + (1));
i__4146 = G__4148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4147),pucks$worlds$dev$world23$horizontal_wall_$_iter__4144.call(null,cljs.core.chunk_rest.call(null,s__4145__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4147),null);
}
} else {
var x = cljs.core.first.call(null,s__4145__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world23$horizontal_wall_$_iter__4144.call(null,cljs.core.rest.call(null,s__4145__$2)));
}
} else {
return null;
}
break;
}
});})(vec__4141,x_min,x_max))
,null,null));
});})(vec__4141,x_min,x_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,x_min,x_max,(20)));
});
pucks.worlds.dev.world23.vertical_wall = (function pucks$worlds$dev$world23$vertical_wall(x,p__4149){
var vec__4150 = p__4149;
var y_min = cljs.core.nth.call(null,vec__4150,(0),null);
var y_max = cljs.core.nth.call(null,vec__4150,(1),null);
var iter__4523__auto__ = ((function (vec__4150,y_min,y_max){
return (function pucks$worlds$dev$world23$vertical_wall_$_iter__4153(s__4154){
return (new cljs.core.LazySeq(null,((function (vec__4150,y_min,y_max){
return (function (){
var s__4154__$1 = s__4154;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4154__$1);
if(temp__5735__auto__){
var s__4154__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4154__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4154__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4156 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4155 = (0);
while(true){
if((i__4155 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4155);
cljs.core.chunk_append.call(null,b__4156,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4157 = (i__4155 + (1));
i__4155 = G__4157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4156),pucks$worlds$dev$world23$vertical_wall_$_iter__4153.call(null,cljs.core.chunk_rest.call(null,s__4154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4156),null);
}
} else {
var y = cljs.core.first.call(null,s__4154__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world23$vertical_wall_$_iter__4153.call(null,cljs.core.rest.call(null,s__4154__$2)));
}
} else {
return null;
}
break;
}
});})(vec__4150,y_min,y_max))
,null,null));
});})(vec__4150,y_min,y_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,y_min,y_max,(20)));
});
pucks.worlds.dev.world23.agents = (function pucks$worlds$dev$world23$agents(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.shooter.shooter),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(100)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(500)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(266),(466)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false),cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(466),(266)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false)], null);
});
pucks.worlds.dev.world23.settings = (function pucks$worlds$dev$world23$settings(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(600),new cljs.core.Keyword(null,"scale","scale",-230427353),1.0,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),(1000),new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744),(150),new cljs.core.Keyword(null,"cost-of-collision","cost-of-collision",1056331992),0.01], null);
});

//# sourceMappingURL=world23.js.map
