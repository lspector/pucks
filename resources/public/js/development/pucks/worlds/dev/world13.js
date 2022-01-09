// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.dev.world13');
goog.require('cljs.core');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.linear');
goog.require('pucks.agents.zigzag');
goog.require('pucks.agents.swarmer');
pucks.worlds.dev.world13.agents = (function pucks$worlds$dev$world13$agents(){
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__7108(s__7109){
return (new cljs.core.LazySeq(null,(function (){
var s__7109__$1 = s__7109;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7109__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7109__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__7108_$_iter__7110(s__7111){
return (new cljs.core.LazySeq(null,((function (s__7109__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7111__$1 = s__7111;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7111__$1);
if(temp__5735__auto____$1){
var s__7111__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7111__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7111__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7113 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7112 = (0);
while(true){
if((i__7112 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7112);
cljs.core.chunk_append.call(null,b__7113,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__7144 = (i__7112 + (1));
i__7112 = G__7144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7113),pucks$worlds$dev$world13$agents_$_iter__7108_$_iter__7110.call(null,cljs.core.chunk_rest.call(null,s__7111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7113),null);
}
} else {
var y = cljs.core.first.call(null,s__7111__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$dev$world13$agents_$_iter__7108_$_iter__7110.call(null,cljs.core.rest.call(null,s__7111__$2)));
}
} else {
return null;
}
break;
}
});})(s__7109__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7109__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(1551),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world13$agents_$_iter__7108.call(null,cljs.core.rest.call(null,s__7109__$1)));
} else {
var G__7145 = cljs.core.rest.call(null,s__7109__$1);
s__7109__$1 = G__7145;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(50),(1551),(100)));
})(),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__7114(s__7115){
return (new cljs.core.LazySeq(null,(function (){
var s__7115__$1 = s__7115;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7115__$1);
if(temp__5735__auto__){
var s__7115__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7115__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7115__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7117 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7116 = (0);
while(true){
if((i__7116 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7116);
cljs.core.chunk_append.call(null,b__7117,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (i__7116,start,stop,y,c__4521__auto__,size__4522__auto__,b__7117,s__7115__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__7114_$_iter__7118(s__7119){
return (new cljs.core.LazySeq(null,((function (i__7116,start,stop,y,c__4521__auto__,size__4522__auto__,b__7117,s__7115__$2,temp__5735__auto__){
return (function (){
var s__7119__$1 = s__7119;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7119__$1);
if(temp__5735__auto____$1){
var s__7119__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7119__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7119__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7121 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7120 = (0);
while(true){
if((i__7120 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__7120);
cljs.core.chunk_append.call(null,b__7121,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7146 = (i__7120 + (1));
i__7120 = G__7146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7121),pucks$worlds$dev$world13$agents_$_iter__7114_$_iter__7118.call(null,cljs.core.chunk_rest.call(null,s__7119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7121),null);
}
} else {
var x = cljs.core.first.call(null,s__7119__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__7114_$_iter__7118.call(null,cljs.core.rest.call(null,s__7119__$2)));
}
} else {
return null;
}
break;
}
});})(i__7116,start,stop,y,c__4521__auto__,size__4522__auto__,b__7117,s__7115__$2,temp__5735__auto__))
,null,null));
});})(i__7116,start,stop,y,c__4521__auto__,size__4522__auto__,b__7117,s__7115__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7147 = (i__7116 + (1));
i__7116 = G__7147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7117),pucks$worlds$dev$world13$agents_$_iter__7114.call(null,cljs.core.chunk_rest.call(null,s__7115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7117),null);
}
} else {
var y = cljs.core.first.call(null,s__7115__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(600)));
var iter__4523__auto__ = ((function (start,stop,y,s__7115__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__7114_$_iter__7122(s__7123){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__7115__$2,temp__5735__auto__){
return (function (){
var s__7123__$1 = s__7123;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7123__$1);
if(temp__5735__auto____$1){
var s__7123__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7123__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7123__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7125 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7124 = (0);
while(true){
if((i__7124 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7124);
cljs.core.chunk_append.call(null,b__7125,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7148 = (i__7124 + (1));
i__7124 = G__7148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7125),pucks$worlds$dev$world13$agents_$_iter__7114_$_iter__7122.call(null,cljs.core.chunk_rest.call(null,s__7123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7125),null);
}
} else {
var x = cljs.core.first.call(null,s__7123__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__7114_$_iter__7122.call(null,cljs.core.rest.call(null,s__7123__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__7115__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__7115__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$dev$world13$agents_$_iter__7114.call(null,cljs.core.rest.call(null,s__7115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__7126(s__7127){
return (new cljs.core.LazySeq(null,(function (){
var s__7127__$1 = s__7127;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7127__$1);
if(temp__5735__auto__){
var s__7127__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7127__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7127__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7129 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7128 = (0);
while(true){
if((i__7128 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7128);
cljs.core.chunk_append.call(null,b__7129,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7128,start,stop,x,c__4521__auto__,size__4522__auto__,b__7129,s__7127__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__7126_$_iter__7130(s__7131){
return (new cljs.core.LazySeq(null,((function (i__7128,start,stop,x,c__4521__auto__,size__4522__auto__,b__7129,s__7127__$2,temp__5735__auto__){
return (function (){
var s__7131__$1 = s__7131;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7131__$1);
if(temp__5735__auto____$1){
var s__7131__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7131__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7131__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7133 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7132 = (0);
while(true){
if((i__7132 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__7132);
cljs.core.chunk_append.call(null,b__7133,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7149 = (i__7132 + (1));
i__7132 = G__7149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7133),pucks$worlds$dev$world13$agents_$_iter__7126_$_iter__7130.call(null,cljs.core.chunk_rest.call(null,s__7131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7133),null);
}
} else {
var y = cljs.core.first.call(null,s__7131__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__7126_$_iter__7130.call(null,cljs.core.rest.call(null,s__7131__$2)));
}
} else {
return null;
}
break;
}
});})(i__7128,start,stop,x,c__4521__auto__,size__4522__auto__,b__7129,s__7127__$2,temp__5735__auto__))
,null,null));
});})(i__7128,start,stop,x,c__4521__auto__,size__4522__auto__,b__7129,s__7127__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7150 = (i__7128 + (1));
i__7128 = G__7150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7129),pucks$worlds$dev$world13$agents_$_iter__7126.call(null,cljs.core.chunk_rest.call(null,s__7127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7129),null);
}
} else {
var x = cljs.core.first.call(null,s__7127__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(1600));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__7127__$2,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__7126_$_iter__7134(s__7135){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__7127__$2,temp__5735__auto__){
return (function (){
var s__7135__$1 = s__7135;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7135__$1);
if(temp__5735__auto____$1){
var s__7135__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7135__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7135__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7137 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7136 = (0);
while(true){
if((i__7136 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7136);
cljs.core.chunk_append.call(null,b__7137,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7151 = (i__7136 + (1));
i__7136 = G__7151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7137),pucks$worlds$dev$world13$agents_$_iter__7126_$_iter__7134.call(null,cljs.core.chunk_rest.call(null,s__7135__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7137),null);
}
} else {
var y = cljs.core.first.call(null,s__7135__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$dev$world13$agents_$_iter__7126_$_iter__7134.call(null,cljs.core.rest.call(null,s__7135__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__7127__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__7127__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$dev$world13$agents_$_iter__7126.call(null,cljs.core.rest.call(null,s__7127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(1581),(200)));
})()),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),cljs.core.concat.call(null,cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.linear.linear);
})),cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.swarmer.swarmer);
})),cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.nursery.nursery.call(null,pucks.agents.zigzag.zigzag);
})),cljs.core.repeatedly.call(null,(24),(function (){
return pucks.agents.vent.vent.call(null);
})),cljs.core.repeatedly.call(null,(8),(function (){
return pucks.agents.zapper.zapper.call(null);
}))),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$dev$world13$agents_$_iter__7138(s__7139){
return (new cljs.core.LazySeq(null,(function (){
var s__7139__$1 = s__7139;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7139__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7139__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$dev$world13$agents_$_iter__7138_$_iter__7140(s__7141){
return (new cljs.core.LazySeq(null,((function (s__7139__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7141__$1 = s__7141;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7141__$1);
if(temp__5735__auto____$1){
var s__7141__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7141__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7141__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7143 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7142 = (0);
while(true){
if((i__7142 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7142);
cljs.core.chunk_append.call(null,b__7143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__7152 = (i__7142 + (1));
i__7142 = G__7152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7143),pucks$worlds$dev$world13$agents_$_iter__7138_$_iter__7140.call(null,cljs.core.chunk_rest.call(null,s__7141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7143),null);
}
} else {
var y = cljs.core.first.call(null,s__7141__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$dev$world13$agents_$_iter__7138_$_iter__7140.call(null,cljs.core.rest.call(null,s__7141__$2)));
}
} else {
return null;
}
break;
}
});})(s__7139__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7139__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$dev$world13$agents_$_iter__7138.call(null,cljs.core.rest.call(null,s__7139__$1)));
} else {
var G__7153 = cljs.core.rest.call(null,s__7139__$1);
s__7139__$1 = G__7153;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(1501),(200)));
})()))));
});
pucks.worlds.dev.world13.settings = (function pucks$worlds$dev$world13$settings(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"screen-size","screen-size",641239979),(1600),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),false], null);
});

//# sourceMappingURL=world13.js.map
