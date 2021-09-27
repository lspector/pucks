// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world22');
goog.require('cljs.core');
goog.require('pucks.agents.spanner');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
pucks.worlds.dev.world22.horizontal_wall = (function pucks$worlds$dev$world22$horizontal_wall(p__3418,y){
var vec__3419 = p__3418;
var x_min = cljs.core.nth.call(null,vec__3419,(0),null);
var x_max = cljs.core.nth.call(null,vec__3419,(1),null);
var iter__4523__auto__ = ((function (vec__3419,x_min,x_max){
return (function pucks$worlds$dev$world22$horizontal_wall_$_iter__3422(s__3423){
return (new cljs.core.LazySeq(null,((function (vec__3419,x_min,x_max){
return (function (){
var s__3423__$1 = s__3423;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3423__$1);
if(temp__5735__auto__){
var s__3423__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3423__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3423__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3425 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3424 = (0);
while(true){
if((i__3424 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__3424);
cljs.core.chunk_append.call(null,b__3425,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__3426 = (i__3424 + (1));
i__3424 = G__3426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3425),pucks$worlds$dev$world22$horizontal_wall_$_iter__3422.call(null,cljs.core.chunk_rest.call(null,s__3423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3425),null);
}
} else {
var x = cljs.core.first.call(null,s__3423__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world22$horizontal_wall_$_iter__3422.call(null,cljs.core.rest.call(null,s__3423__$2)));
}
} else {
return null;
}
break;
}
});})(vec__3419,x_min,x_max))
,null,null));
});})(vec__3419,x_min,x_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,x_min,x_max,(20)));
});
pucks.worlds.dev.world22.vertical_wall = (function pucks$worlds$dev$world22$vertical_wall(x,p__3427){
var vec__3428 = p__3427;
var y_min = cljs.core.nth.call(null,vec__3428,(0),null);
var y_max = cljs.core.nth.call(null,vec__3428,(1),null);
var iter__4523__auto__ = ((function (vec__3428,y_min,y_max){
return (function pucks$worlds$dev$world22$vertical_wall_$_iter__3431(s__3432){
return (new cljs.core.LazySeq(null,((function (vec__3428,y_min,y_max){
return (function (){
var s__3432__$1 = s__3432;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3432__$1);
if(temp__5735__auto__){
var s__3432__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3432__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3432__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3434 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3433 = (0);
while(true){
if((i__3433 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3433);
cljs.core.chunk_append.call(null,b__3434,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__3435 = (i__3433 + (1));
i__3433 = G__3435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3434),pucks$worlds$dev$world22$vertical_wall_$_iter__3431.call(null,cljs.core.chunk_rest.call(null,s__3432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3434),null);
}
} else {
var y = cljs.core.first.call(null,s__3432__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world22$vertical_wall_$_iter__3431.call(null,cljs.core.rest.call(null,s__3432__$2)));
}
} else {
return null;
}
break;
}
});})(vec__3428,y_min,y_max))
,null,null));
});})(vec__3428,y_min,y_max))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,y_min,y_max,(20)));
});
pucks.worlds.dev.world22.agents = (function pucks$worlds$dev$world22$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world22$agents_$_iter__3436(s__3437){
return (new cljs.core.LazySeq(null,(function (){
var s__3437__$1 = s__3437;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3437__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3437__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world22$agents_$_iter__3436_$_iter__3438(s__3439){
return (new cljs.core.LazySeq(null,((function (s__3437__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3439__$1 = s__3439;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3439__$1);
if(temp__5735__auto____$1){
var s__3439__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3439__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3439__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3441 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3440 = (0);
while(true){
if((i__3440 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3440);
cljs.core.chunk_append.call(null,b__3441,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false,new cljs.core.Keyword(null,"solid","solid",-2023773691),false));

var G__3448 = (i__3440 + (1));
i__3440 = G__3448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3441),pucks$worlds$dev$world22$agents_$_iter__3436_$_iter__3438.call(null,cljs.core.chunk_rest.call(null,s__3439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3441),null);
}
} else {
var y = cljs.core.first.call(null,s__3439__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.vent.vent.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false,new cljs.core.Keyword(null,"solid","solid",-2023773691),false),pucks$worlds$dev$world22$agents_$_iter__3436_$_iter__3438.call(null,cljs.core.rest.call(null,s__3439__$2)));
}
} else {
return null;
}
break;
}
});})(s__3437__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3437__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1200),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world22$agents_$_iter__3436.call(null,cljs.core.rest.call(null,s__3437__$1)));
} else {
var G__3449 = cljs.core.rest.call(null,s__3437__$1);
s__3437__$1 = G__3449;
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
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world22$agents_$_iter__3442(s__3443){
return (new cljs.core.LazySeq(null,(function (){
var s__3443__$1 = s__3443;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3443__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__3443__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world22$agents_$_iter__3442_$_iter__3444(s__3445){
return (new cljs.core.LazySeq(null,((function (s__3443__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__3445__$1 = s__3445;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__3445__$1);
if(temp__5735__auto____$1){
var s__3445__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3445__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__3445__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__3447 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__3446 = (0);
while(true){
if((i__3446 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__3446);
cljs.core.chunk_append.call(null,b__3447,cljs.core.assoc.call(null,pucks.agents.stone.stone.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false));

var G__3450 = (i__3446 + (1));
i__3446 = G__3450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3447),pucks$worlds$dev$world22$agents_$_iter__3442_$_iter__3444.call(null,cljs.core.chunk_rest.call(null,s__3445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3447),null);
}
} else {
var y = cljs.core.first.call(null,s__3445__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,pucks.agents.stone.stone.call(null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false),pucks$worlds$dev$world22$agents_$_iter__3442_$_iter__3444.call(null,cljs.core.rest.call(null,s__3445__$2)));
}
} else {
return null;
}
break;
}
});})(s__3443__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__3443__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(1200),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world22$agents_$_iter__3442.call(null,cljs.core.rest.call(null,s__3443__$1)));
} else {
var G__3451 = cljs.core.rest.call(null,s__3443__$1);
s__3443__$1 = G__3451;
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
