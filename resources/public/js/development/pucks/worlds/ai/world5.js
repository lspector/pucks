// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world5');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
pucks.worlds.ai.world5.agents = (function pucks$worlds$ai$world5$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__7275(s__7276){
return (new cljs.core.LazySeq(null,(function (){
var s__7276__$1 = s__7276;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7276__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7276__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__7275_$_iter__7277(s__7278){
return (new cljs.core.LazySeq(null,((function (s__7276__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7278__$1 = s__7278;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7278__$1);
if(temp__5735__auto____$1){
var s__7278__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7278__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7278__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7280 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7279 = (0);
while(true){
if((i__7279 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7279);
cljs.core.chunk_append.call(null,b__7280,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)));

var G__7311 = (i__7279 + (1));
i__7279 = G__7311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7280),pucks$worlds$ai$world5$agents_$_iter__7275_$_iter__7277.call(null,cljs.core.chunk_rest.call(null,s__7278__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7280),null);
}
} else {
var y = cljs.core.first.call(null,s__7278__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(70)], null)),pucks$worlds$ai$world5$agents_$_iter__7275_$_iter__7277.call(null,cljs.core.rest.call(null,s__7278__$2)));
}
} else {
return null;
}
break;
}
});})(s__7276__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7276__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(50),(751),(100))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world5$agents_$_iter__7275.call(null,cljs.core.rest.call(null,s__7276__$1)));
} else {
var G__7312 = cljs.core.rest.call(null,s__7276__$1);
s__7276__$1 = G__7312;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(50),(751),(100)));
})(),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__7281(s__7282){
return (new cljs.core.LazySeq(null,(function (){
var s__7282__$1 = s__7282;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7282__$1);
if(temp__5735__auto__){
var s__7282__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7282__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7282__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7284 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7283 = (0);
while(true){
if((i__7283 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7283);
cljs.core.chunk_append.call(null,b__7284,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7283,start,stop,y,c__4521__auto__,size__4522__auto__,b__7284,s__7282__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__7281_$_iter__7285(s__7286){
return (new cljs.core.LazySeq(null,((function (i__7283,start,stop,y,c__4521__auto__,size__4522__auto__,b__7284,s__7282__$2,temp__5735__auto__){
return (function (){
var s__7286__$1 = s__7286;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7286__$1);
if(temp__5735__auto____$1){
var s__7286__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7286__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7286__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7288 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7287 = (0);
while(true){
if((i__7287 < size__4522__auto____$1)){
var x = cljs.core._nth.call(null,c__4521__auto____$1,i__7287);
cljs.core.chunk_append.call(null,b__7288,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7313 = (i__7287 + (1));
i__7287 = G__7313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7288),pucks$worlds$ai$world5$agents_$_iter__7281_$_iter__7285.call(null,cljs.core.chunk_rest.call(null,s__7286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7288),null);
}
} else {
var x = cljs.core.first.call(null,s__7286__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__7281_$_iter__7285.call(null,cljs.core.rest.call(null,s__7286__$2)));
}
} else {
return null;
}
break;
}
});})(i__7283,start,stop,y,c__4521__auto__,size__4522__auto__,b__7284,s__7282__$2,temp__5735__auto__))
,null,null));
});})(i__7283,start,stop,y,c__4521__auto__,size__4522__auto__,b__7284,s__7282__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7314 = (i__7283 + (1));
i__7283 = G__7314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7284),pucks$worlds$ai$world5$agents_$_iter__7281.call(null,cljs.core.chunk_rest.call(null,s__7282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7284),null);
}
} else {
var y = cljs.core.first.call(null,s__7282__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,y,s__7282__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__7281_$_iter__7289(s__7290){
return (new cljs.core.LazySeq(null,((function (start,stop,y,s__7282__$2,temp__5735__auto__){
return (function (){
var s__7290__$1 = s__7290;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7290__$1);
if(temp__5735__auto____$1){
var s__7290__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7290__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7290__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7292 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7291 = (0);
while(true){
if((i__7291 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7291);
cljs.core.chunk_append.call(null,b__7292,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7315 = (i__7291 + (1));
i__7291 = G__7315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7292),pucks$worlds$ai$world5$agents_$_iter__7281_$_iter__7289.call(null,cljs.core.chunk_rest.call(null,s__7290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7292),null);
}
} else {
var x = cljs.core.first.call(null,s__7290__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__7281_$_iter__7289.call(null,cljs.core.rest.call(null,s__7290__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,y,s__7282__$2,temp__5735__auto__))
,null,null));
});})(start,stop,y,s__7282__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world5$agents_$_iter__7281.call(null,cljs.core.rest.call(null,s__7282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__7293(s__7294){
return (new cljs.core.LazySeq(null,(function (){
var s__7294__$1 = s__7294;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7294__$1);
if(temp__5735__auto__){
var s__7294__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7294__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7294__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7296 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7295 = (0);
while(true){
if((i__7295 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__7295);
cljs.core.chunk_append.call(null,b__7296,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (i__7295,start,stop,x,c__4521__auto__,size__4522__auto__,b__7296,s__7294__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__7293_$_iter__7297(s__7298){
return (new cljs.core.LazySeq(null,((function (i__7295,start,stop,x,c__4521__auto__,size__4522__auto__,b__7296,s__7294__$2,temp__5735__auto__){
return (function (){
var s__7298__$1 = s__7298;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7298__$1);
if(temp__5735__auto____$1){
var s__7298__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7298__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__7298__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__7300 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__7299 = (0);
while(true){
if((i__7299 < size__4522__auto____$1)){
var y = cljs.core._nth.call(null,c__4521__auto____$1,i__7299);
cljs.core.chunk_append.call(null,b__7300,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7316 = (i__7299 + (1));
i__7299 = G__7316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7300),pucks$worlds$ai$world5$agents_$_iter__7293_$_iter__7297.call(null,cljs.core.chunk_rest.call(null,s__7298__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7300),null);
}
} else {
var y = cljs.core.first.call(null,s__7298__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__7293_$_iter__7297.call(null,cljs.core.rest.call(null,s__7298__$2)));
}
} else {
return null;
}
break;
}
});})(i__7295,start,stop,x,c__4521__auto__,size__4522__auto__,b__7296,s__7294__$2,temp__5735__auto__))
,null,null));
});})(i__7295,start,stop,x,c__4521__auto__,size__4522__auto__,b__7296,s__7294__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})());

var G__7317 = (i__7295 + (1));
i__7295 = G__7317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7296),pucks$worlds$ai$world5$agents_$_iter__7293.call(null,cljs.core.chunk_rest.call(null,s__7294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7296),null);
}
} else {
var x = cljs.core.first.call(null,s__7294__$2);
return cljs.core.cons.call(null,(function (){var start = cljs.core.rand_int.call(null,(800));
var stop = ((start + (100)) + cljs.core.rand_int.call(null,(300)));
var iter__4523__auto__ = ((function (start,stop,x,s__7294__$2,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__7293_$_iter__7301(s__7302){
return (new cljs.core.LazySeq(null,((function (start,stop,x,s__7294__$2,temp__5735__auto__){
return (function (){
var s__7302__$1 = s__7302;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7302__$1);
if(temp__5735__auto____$1){
var s__7302__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7302__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7302__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7304 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7303 = (0);
while(true){
if((i__7303 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7303);
cljs.core.chunk_append.call(null,b__7304,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__7318 = (i__7303 + (1));
i__7303 = G__7318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7304),pucks$worlds$ai$world5$agents_$_iter__7293_$_iter__7301.call(null,cljs.core.chunk_rest.call(null,s__7302__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7304),null);
}
} else {
var y = cljs.core.first.call(null,s__7302__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world5$agents_$_iter__7293_$_iter__7301.call(null,cljs.core.rest.call(null,s__7302__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,x,s__7294__$2,temp__5735__auto__))
,null,null));
});})(start,stop,x,s__7294__$2,temp__5735__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,start,stop,(20)));
})(),pucks$worlds$ai$world5$agents_$_iter__7293.call(null,cljs.core.rest.call(null,s__7294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(781),(200)));
})()),cljs.core.mapv.call(null,(function (p,loc){
return cljs.core.merge.call(null,p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),loc], null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pucks.agents.nursery.nursery.call(null,pucks.agents.user.user),pucks.agents.vent.vent.call(null),pucks.agents.zapper.zapper.call(null),pucks.agents.zapper.zapper.call(null)], null),cljs.core.shuffle.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world5$agents_$_iter__7305(s__7306){
return (new cljs.core.LazySeq(null,(function (){
var s__7306__$1 = s__7306;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7306__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__7306__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world5$agents_$_iter__7305_$_iter__7307(s__7308){
return (new cljs.core.LazySeq(null,((function (s__7306__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7308__$1 = s__7308;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__7308__$1);
if(temp__5735__auto____$1){
var s__7308__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7308__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__7308__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__7310 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__7309 = (0);
while(true){
if((i__7309 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__7309);
cljs.core.chunk_append.call(null,b__7310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__7319 = (i__7309 + (1));
i__7309 = G__7319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7310),pucks$worlds$ai$world5$agents_$_iter__7305_$_iter__7307.call(null,cljs.core.chunk_rest.call(null,s__7308__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7310),null);
}
} else {
var y = cljs.core.first.call(null,s__7308__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),pucks$worlds$ai$world5$agents_$_iter__7305_$_iter__7307.call(null,cljs.core.rest.call(null,s__7308__$2)));
}
} else {
return null;
}
break;
}
});})(s__7306__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7306__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world5$agents_$_iter__7305.call(null,cljs.core.rest.call(null,s__7306__$1)));
} else {
var G__7320 = cljs.core.rest.call(null,s__7306__$1);
s__7306__$1 = G__7320;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(300),(500),(700)], null));
})())));
});
pucks.worlds.ai.world5.settings = (function pucks$worlds$ai$world5$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world5.js.map
