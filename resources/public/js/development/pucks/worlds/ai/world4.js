// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.worlds.ai.world4');
goog.require('cljs.core');
goog.require('pucks.agents.stone');
goog.require('pucks.agents.user');
goog.require('pucks.agents.vent');
goog.require('pucks.agents.zapper');
goog.require('pucks.agents.beacon');
goog.require('pucks.agents.nursery');
goog.require('pucks.agents.gate');
goog.require('pucks.agents.chest');
pucks.worlds.ai.world4.agents = (function pucks$worlds$ai$world4$agents(){
return cljs.core.concat.call(null,(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__4160(s__4161){
return (new cljs.core.LazySeq(null,(function (){
var s__4161__$1 = s__4161;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4161__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4161__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world4$agents_$_iter__4160_$_iter__4162(s__4163){
return (new cljs.core.LazySeq(null,((function (s__4161__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4163__$1 = s__4163;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4163__$1);
if(temp__5735__auto____$1){
var s__4163__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4163__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4163__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4165 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4164 = (0);
while(true){
if((i__4164 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4164);
cljs.core.chunk_append.call(null,b__4165,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4184 = (i__4164 + (1));
i__4164 = G__4184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4165),pucks$worlds$ai$world4$agents_$_iter__4160_$_iter__4162.call(null,cljs.core.chunk_rest.call(null,s__4163__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4165),null);
}
} else {
var y = cljs.core.first.call(null,s__4163__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.beacon.beacon.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__4160_$_iter__4162.call(null,cljs.core.rest.call(null,s__4163__$2)));
}
} else {
return null;
}
break;
}
});})(s__4161__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4161__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,(100),(701),(200))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world4$agents_$_iter__4160.call(null,cljs.core.rest.call(null,s__4161__$1)));
} else {
var G__4185 = cljs.core.rest.call(null,s__4161__$1);
s__4161__$1 = G__4185;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(100),(701),(200)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__4166(s__4167){
return (new cljs.core.LazySeq(null,(function (){
var s__4167__$1 = s__4167;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4167__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first.call(null,xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__4167__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function pucks$worlds$ai$world4$agents_$_iter__4166_$_iter__4168(s__4169){
return (new cljs.core.LazySeq(null,((function (s__4167__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__4169__$1 = s__4169;
while(true){
var temp__5735__auto____$1 = cljs.core.seq.call(null,s__4169__$1);
if(temp__5735__auto____$1){
var s__4169__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4169__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4169__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4171 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4170 = (0);
while(true){
if((i__4170 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4170);
cljs.core.chunk_append.call(null,b__4171,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)));

var G__4186 = (i__4170 + (1));
i__4170 = G__4186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4171),pucks$worlds$ai$world4$agents_$_iter__4166_$_iter__4168.call(null,cljs.core.chunk_rest.call(null,s__4169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4171),null);
}
} else {
var y = cljs.core.first.call(null,s__4169__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__4166_$_iter__4168.call(null,cljs.core.rest.call(null,s__4169__$2)));
}
} else {
return null;
}
break;
}
});})(s__4167__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__4167__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(500)], null)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,pucks$worlds$ai$world4$agents_$_iter__4166.call(null,cljs.core.rest.call(null,s__4167__$1)));
} else {
var G__4187 = cljs.core.rest.call(null,s__4167__$1);
s__4167__$1 = G__4187;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(500),(701),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__4172(s__4173){
return (new cljs.core.LazySeq(null,(function (){
var s__4173__$1 = s__4173;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4173__$1);
if(temp__5735__auto__){
var s__4173__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4173__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4173__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4175 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4174 = (0);
while(true){
if((i__4174 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4174);
cljs.core.chunk_append.call(null,b__4175,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__4188 = (i__4174 + (1));
i__4174 = G__4188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4175),pucks$worlds$ai$world4$agents_$_iter__4172.call(null,cljs.core.chunk_rest.call(null,s__4173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4175),null);
}
} else {
var y = cljs.core.first.call(null,s__4173__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__4172.call(null,cljs.core.rest.call(null,s__4173__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(361),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__4176(s__4177){
return (new cljs.core.LazySeq(null,(function (){
var s__4177__$1 = s__4177;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4177__$1);
if(temp__5735__auto__){
var s__4177__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4177__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4177__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4179 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4178 = (0);
while(true){
if((i__4178 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4178);
cljs.core.chunk_append.call(null,b__4179,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)));

var G__4189 = (i__4178 + (1));
i__4178 = G__4189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4179),pucks$worlds$ai$world4$agents_$_iter__4176.call(null,cljs.core.chunk_rest.call(null,s__4177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4179),null);
}
} else {
var y = cljs.core.first.call(null,s__4177__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__4176.call(null,cljs.core.rest.call(null,s__4177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(440),(501),(20)));
})(),(function (){var iter__4523__auto__ = (function pucks$worlds$ai$world4$agents_$_iter__4180(s__4181){
return (new cljs.core.LazySeq(null,(function (){
var s__4181__$1 = s__4181;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4181__$1);
if(temp__5735__auto__){
var s__4181__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4181__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4181__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4183 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4182 = (0);
while(true){
if((i__4182 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__4182);
cljs.core.chunk_append.call(null,b__4183,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)));

var G__4190 = (i__4182 + (1));
i__4182 = G__4190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4183),pucks$worlds$ai$world4$agents_$_iter__4180.call(null,cljs.core.chunk_rest.call(null,s__4181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4183),null);
}
} else {
var y = cljs.core.first.call(null,s__4181__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pucks.agents.stone.stone.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),y], null)], null)),pucks$worlds$ai$world4$agents_$_iter__4180.call(null,cljs.core.rest.call(null,s__4181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(300),(501),(20)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.gate.gate.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(400)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.chest.chest.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(430)], null),new cljs.core.Keyword(null,"inventory","inventory",860201871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.vent.vent.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(430)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(30)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(600)], null)], null)),cljs.core.merge.call(null,pucks.agents.zapper.zapper.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(200)], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,pucks.agents.nursery.nursery.call(null,pucks.agents.user.user),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null)], null))], null));
});
pucks.worlds.ai.world4.settings = (function pucks$worlds$ai$world4$settings(){
return cljs.core.PersistentArrayMap.EMPTY;
});

//# sourceMappingURL=world4.js.map
