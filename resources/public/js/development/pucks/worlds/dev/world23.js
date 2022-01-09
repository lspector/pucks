// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world23');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.shooter');
pucks.worlds.dev.world23.horizontal_wall = (function pucks$worlds$dev$world23$horizontal_wall(p__7051,y){
var vec__7052 = p__7051;
var x_min = cljs.core.nth.call(null,vec__7052,(0),null);
var x_max = cljs.core.nth.call(null,vec__7052,(1),null);
var iter__4523__auto__ = ((function (vec__7052,x_min,x_max){
return (function pucks$worlds$dev$world23$horizontal_wall_$_iter__7055(s__7056){
return (new cljs.core.LazySeq(null,((function (vec__7052,x_min,x_max){
return (function (){
var s__7056__$1 = s__7056;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7056__$1);
if(temp__5735__auto__){
var s__7056__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7056__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7056__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7058 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7057 = (0);
while(true){
if((i__7057 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7057);
cljs.core.chunk_append.call(null,b__7058,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7059 = (i__7057 + (1));
i__7057 = G__7059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7058),pucks$worlds$dev$world23$horizontal_wall_$_iter__7055.call(null,cljs.core.chunk_rest.call(null,s__7056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7058),null);
}
} else {
var x = cljs.core.first.call(null,s__7056__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world23$horizontal_wall_$_iter__7055.call(null,cljs.core.rest.call(null,s__7056__$2)));
}
} else {
return null;
}
break;
}
});})(vec__7052,x_min,x_max))
,null,null));
});})(vec__7052,x_min,x_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,x_min,x_max,(20)));
});
pucks.worlds.dev.world23.vertical_wall = (function pucks$worlds$dev$world23$vertical_wall(x,p__7060){
var vec__7061 = p__7060;
var y_min = cljs.core.nth.call(null,vec__7061,(0),null);
var y_max = cljs.core.nth.call(null,vec__7061,(1),null);
var iter__4523__auto__ = ((function (vec__7061,y_min,y_max){
return (function pucks$worlds$dev$world23$vertical_wall_$_iter__7064(s__7065){
return (new cljs.core.LazySeq(null,((function (vec__7061,y_min,y_max){
return (function (){
var s__7065__$1 = s__7065;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7065__$1);
if(temp__5735__auto__){
var s__7065__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7065__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7065__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7067 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7066 = (0);
while(true){
if((i__7066 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7066);
cljs.core.chunk_append.call(null,b__7067,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7068 = (i__7066 + (1));
i__7066 = G__7068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7067),pucks$worlds$dev$world23$vertical_wall_$_iter__7064.call(null,cljs.core.chunk_rest.call(null,s__7065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7067),null);
}
} else {
var y = cljs.core.first.call(null,s__7065__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world23$vertical_wall_$_iter__7064.call(null,cljs.core.rest.call(null,s__7065__$2)));
}
} else {
return null;
}
break;
}
});})(vec__7061,y_min,y_max))
,null,null));
});})(vec__7061,y_min,y_max))
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
