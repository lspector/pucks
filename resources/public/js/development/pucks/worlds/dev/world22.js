// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world22');
goog.require('cljs.core');
goog.require('pucks.agents.spanner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world22.horizontal_wall = (function pucks$worlds$dev$world22$horizontal_wall(p__6642,y){
var vec__6643 = p__6642;
var x_min = cljs.core.nth.call(null,vec__6643,(0),null);
var x_max = cljs.core.nth.call(null,vec__6643,(1),null);
var iter__4523__auto__ = ((function (vec__6643,x_min,x_max){
return (function pucks$worlds$dev$world22$horizontal_wall_$_iter__6646(s__6647){
return (new cljs.core.LazySeq(null,((function (vec__6643,x_min,x_max){
return (function (){
var s__6647__$1 = s__6647;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6647__$1);
if(temp__5735__auto__){
var s__6647__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6647__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6647__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6649 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6648 = (0);
while(true){
if((i__6648 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__6648);
cljs.core.chunk_append.call(null,b__6649,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__6650 = (i__6648 + (1));
i__6648 = G__6650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6649),pucks$worlds$dev$world22$horizontal_wall_$_iter__6646.call(null,cljs.core.chunk_rest.call(null,s__6647__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6649),null);
}
} else {
var x = cljs.core.first.call(null,s__6647__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world22$horizontal_wall_$_iter__6646.call(null,cljs.core.rest.call(null,s__6647__$2)));
}
} else {
return null;
}
break;
}
});})(vec__6643,x_min,x_max))
,null,null));
});})(vec__6643,x_min,x_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,x_min,x_max,(20)));
});
pucks.worlds.dev.world22.vertical_wall = (function pucks$worlds$dev$world22$vertical_wall(x,p__6651){
var vec__6652 = p__6651;
var y_min = cljs.core.nth.call(null,vec__6652,(0),null);
var y_max = cljs.core.nth.call(null,vec__6652,(1),null);
var iter__4523__auto__ = ((function (vec__6652,y_min,y_max){
return (function pucks$worlds$dev$world22$vertical_wall_$_iter__6655(s__6656){
return (new cljs.core.LazySeq(null,((function (vec__6652,y_min,y_max){
return (function (){
var s__6656__$1 = s__6656;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6656__$1);
if(temp__5735__auto__){
var s__6656__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6656__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6656__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6658 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6657 = (0);
while(true){
if((i__6657 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6657);
cljs.core.chunk_append.call(null,b__6658,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__6659 = (i__6657 + (1));
i__6657 = G__6659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6658),pucks$worlds$dev$world22$vertical_wall_$_iter__6655.call(null,cljs.core.chunk_rest.call(null,s__6656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6658),null);
}
} else {
var y = cljs.core.first.call(null,s__6656__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world22$vertical_wall_$_iter__6655.call(null,cljs.core.rest.call(null,s__6656__$2)));
}
} else {
return null;
}
break;
}
});})(vec__6652,y_min,y_max))
,null,null));
});})(vec__6652,y_min,y_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,y_min,y_max,(20)));
});
pucks.worlds.dev.world22.agents = (function pucks$worlds$dev$world22$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world22$agents_$_iter__6660(s__6661){
return (new cljs.core.LazySeq(null,(function (){
var s__6661__$1 = s__6661;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6661__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6661__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world22$agents_$_iter__6660_$_iter__6662(s__6663){
return (new cljs.core.LazySeq(null,((function (s__6661__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6663__$1 = s__6663;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__6663__$1);
if(temp__5735__auto____$1){
var s__6663__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6663__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6663__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6665 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6664 = (0);
while(true){
if((i__6664 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6664);
cljs.core.chunk_append.call(null,b__6665,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false,new cljs.core.Keyword(null,"solid","solid",-2023773691),false));

var G__6672 = (i__6664 + (1));
i__6664 = G__6672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6665),pucks$worlds$dev$world22$agents_$_iter__6660_$_iter__6662.call(null,cljs.core.chunk_rest.call(null,s__6663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6665),null);
}
} else {
var y = cljs.core.first.call(null,s__6663__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false,new cljs.core.Keyword(null,"solid","solid",-2023773691),false),pucks$worlds$dev$world22$agents_$_iter__6660_$_iter__6662.call(null,cljs.core.rest.call(null,s__6663__$2)));
}
} else {
return null;
}
break;
}
});})(s__6661__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6661__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1200),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world22$agents_$_iter__6660.call(null,cljs.core.rest.call(null,s__6661__$1)));
} else {
var G__6673 = cljs.core.rest.call(null,s__6661__$1);
s__6661__$1 = G__6673;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(1200),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world22$agents_$_iter__6666(s__6667){
return (new cljs.core.LazySeq(null,(function (){
var s__6667__$1 = s__6667;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6667__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6667__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world22$agents_$_iter__6666_$_iter__6668(s__6669){
return (new cljs.core.LazySeq(null,((function (s__6667__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6669__$1 = s__6669;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__6669__$1);
if(temp__5735__auto____$1){
var s__6669__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6669__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6669__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6671 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6670 = (0);
while(true){
if((i__6670 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__6670);
cljs.core.chunk_append.call(null,b__6671,cljs.core.assoc.call(null,pucks.agents.stone.stone.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false));

var G__6674 = (i__6670 + (1));
i__6670 = G__6674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6671),pucks$worlds$dev$world22$agents_$_iter__6666_$_iter__6668.call(null,cljs.core.chunk_rest.call(null,s__6669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6671),null);
}
} else {
var y = cljs.core.first.call(null,s__6669__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.stone.stone.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false),pucks$worlds$dev$world22$agents_$_iter__6666_$_iter__6668.call(null,cljs.core.rest.call(null,s__6669__$2)));
}
} else {
return null;
}
break;
}
});})(s__6667__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6667__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(1200),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world22$agents_$_iter__6666.call(null,cljs.core.rest.call(null,s__6667__$1)));
} else {
var G__6675 = cljs.core.rest.call(null,s__6667__$1);
s__6667__$1 = G__6675;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(50),(1200),(100)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.spanner.spanner),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),new cljs.core.Keyword(null,"solid","solid",-2023773691),false)], null)));
});
pucks.worlds.dev.world22.settings = (function pucks$worlds$dev$world22$settings(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1200),new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false,new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),(1),new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744),(150),new cljs.core.Keyword(null,"cost-of-collision","cost-of-collision",1056331992),0.01], null);
});

//# sourceMappingURL=world22.js.map
