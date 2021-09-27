// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.draw');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
/**
 * Sets the background color and calls the :draw-functions of all agents.
 */
pucks.draw.draw_agents = (function pucks$draw$draw_agents(){
quil.core.background.call(null,(230),(180),(230));

var s_3941 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
quil.core.scale.call(null,s_3941,s_3941);

var seq__3821_3942 = cljs.core.seq.call(null,cljs.core.deref.call(null,pucks.globals.all_agents));
var chunk__3822_3943 = null;
var count__3823_3944 = (0);
var i__3824_3945 = (0);
while(true){
if((i__3824_3945 < count__3823_3944)){
var a_3946 = cljs.core._nth.call(null,chunk__3822_3943,i__3824_3945);
new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301).cljs$core$IFn$_invoke$arity$1(a_3946).call(null,a_3946);


var G__3947 = seq__3821_3942;
var G__3948 = chunk__3822_3943;
var G__3949 = count__3823_3944;
var G__3950 = (i__3824_3945 + (1));
seq__3821_3942 = G__3947;
chunk__3822_3943 = G__3948;
count__3823_3944 = G__3949;
i__3824_3945 = G__3950;
continue;
} else {
var temp__5735__auto___3951 = cljs.core.seq.call(null,seq__3821_3942);
if(temp__5735__auto___3951){
var seq__3821_3952__$1 = temp__5735__auto___3951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3821_3952__$1)){
var c__4550__auto___3953 = cljs.core.chunk_first.call(null,seq__3821_3952__$1);
var G__3954 = cljs.core.chunk_rest.call(null,seq__3821_3952__$1);
var G__3955 = c__4550__auto___3953;
var G__3956 = cljs.core.count.call(null,c__4550__auto___3953);
var G__3957 = (0);
seq__3821_3942 = G__3954;
chunk__3822_3943 = G__3955;
count__3823_3944 = G__3956;
i__3824_3945 = G__3957;
continue;
} else {
var a_3958 = cljs.core.first.call(null,seq__3821_3952__$1);
new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301).cljs$core$IFn$_invoke$arity$1(a_3958).call(null,a_3958);


var G__3959 = cljs.core.next.call(null,seq__3821_3952__$1);
var G__3960 = null;
var G__3961 = (0);
var G__3962 = (0);
seq__3821_3942 = G__3959;
chunk__3822_3943 = G__3960;
count__3823_3944 = G__3961;
i__3824_3945 = G__3962;
continue;
}
} else {
}
}
break;
}

var agent_map = cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,pucks.globals.all_agents)),cljs.core.deref.call(null,pucks.globals.all_agents));
quil.core.stroke.call(null,(196));

quil.core.stroke_weight.call(null,(2));

var seq__3825_3963 = cljs.core.seq.call(null,cljs.core.deref.call(null,pucks.globals.all_agents));
var chunk__3826_3964 = null;
var count__3827_3965 = (0);
var i__3828_3966 = (0);
while(true){
if((i__3828_3966 < count__3827_3965)){
var a_3967 = cljs.core._nth.call(null,chunk__3826_3964,i__3828_3966);
var seq__3885_3968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221).cljs$core$IFn$_invoke$arity$1(a_3967));
var chunk__3886_3969 = null;
var count__3887_3970 = (0);
var i__3888_3971 = (0);
while(true){
if((i__3888_3971 < count__3887_3970)){
var bound_id_3972 = cljs.core._nth.call(null,chunk__3886_3969,i__3888_3971);
var vec__3901_3973 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_3967);
var ax_3974 = cljs.core.nth.call(null,vec__3901_3973,(0),null);
var ay_3975 = cljs.core.nth.call(null,vec__3901_3973,(1),null);
var vec__3904_3976 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_3972));
var bx_3977 = cljs.core.nth.call(null,vec__3904_3976,(0),null);
var by_3978 = cljs.core.nth.call(null,vec__3904_3976,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_3974,ay_3975], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_3977,by_3978], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_3974,ay_3975], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_3977,by_3978], null)))){
quil.core.line.call(null,ax_3974,ay_3975,bx_3977,by_3978);
} else {
}


var G__3979 = seq__3885_3968;
var G__3980 = chunk__3886_3969;
var G__3981 = count__3887_3970;
var G__3982 = (i__3888_3971 + (1));
seq__3885_3968 = G__3979;
chunk__3886_3969 = G__3980;
count__3887_3970 = G__3981;
i__3888_3971 = G__3982;
continue;
} else {
var temp__5735__auto___3983 = cljs.core.seq.call(null,seq__3885_3968);
if(temp__5735__auto___3983){
var seq__3885_3984__$1 = temp__5735__auto___3983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3885_3984__$1)){
var c__4550__auto___3985 = cljs.core.chunk_first.call(null,seq__3885_3984__$1);
var G__3986 = cljs.core.chunk_rest.call(null,seq__3885_3984__$1);
var G__3987 = c__4550__auto___3985;
var G__3988 = cljs.core.count.call(null,c__4550__auto___3985);
var G__3989 = (0);
seq__3885_3968 = G__3986;
chunk__3886_3969 = G__3987;
count__3887_3970 = G__3988;
i__3888_3971 = G__3989;
continue;
} else {
var bound_id_3990 = cljs.core.first.call(null,seq__3885_3984__$1);
var vec__3907_3991 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_3967);
var ax_3992 = cljs.core.nth.call(null,vec__3907_3991,(0),null);
var ay_3993 = cljs.core.nth.call(null,vec__3907_3991,(1),null);
var vec__3910_3994 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_3990));
var bx_3995 = cljs.core.nth.call(null,vec__3910_3994,(0),null);
var by_3996 = cljs.core.nth.call(null,vec__3910_3994,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_3992,ay_3993], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_3995,by_3996], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_3992,ay_3993], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_3995,by_3996], null)))){
quil.core.line.call(null,ax_3992,ay_3993,bx_3995,by_3996);
} else {
}


var G__3997 = cljs.core.next.call(null,seq__3885_3984__$1);
var G__3998 = null;
var G__3999 = (0);
var G__4000 = (0);
seq__3885_3968 = G__3997;
chunk__3886_3969 = G__3998;
count__3887_3970 = G__3999;
i__3888_3971 = G__4000;
continue;
}
} else {
}
}
break;
}


var G__4001 = seq__3825_3963;
var G__4002 = chunk__3826_3964;
var G__4003 = count__3827_3965;
var G__4004 = (i__3828_3966 + (1));
seq__3825_3963 = G__4001;
chunk__3826_3964 = G__4002;
count__3827_3965 = G__4003;
i__3828_3966 = G__4004;
continue;
} else {
var temp__5735__auto___4005 = cljs.core.seq.call(null,seq__3825_3963);
if(temp__5735__auto___4005){
var seq__3825_4006__$1 = temp__5735__auto___4005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3825_4006__$1)){
var c__4550__auto___4007 = cljs.core.chunk_first.call(null,seq__3825_4006__$1);
var G__4008 = cljs.core.chunk_rest.call(null,seq__3825_4006__$1);
var G__4009 = c__4550__auto___4007;
var G__4010 = cljs.core.count.call(null,c__4550__auto___4007);
var G__4011 = (0);
seq__3825_3963 = G__4008;
chunk__3826_3964 = G__4009;
count__3827_3965 = G__4010;
i__3828_3966 = G__4011;
continue;
} else {
var a_4012 = cljs.core.first.call(null,seq__3825_4006__$1);
var seq__3913_4013 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221).cljs$core$IFn$_invoke$arity$1(a_4012));
var chunk__3914_4014 = null;
var count__3915_4015 = (0);
var i__3916_4016 = (0);
while(true){
if((i__3916_4016 < count__3915_4015)){
var bound_id_4017 = cljs.core._nth.call(null,chunk__3914_4014,i__3916_4016);
var vec__3929_4018 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_4012);
var ax_4019 = cljs.core.nth.call(null,vec__3929_4018,(0),null);
var ay_4020 = cljs.core.nth.call(null,vec__3929_4018,(1),null);
var vec__3932_4021 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_4017));
var bx_4022 = cljs.core.nth.call(null,vec__3932_4021,(0),null);
var by_4023 = cljs.core.nth.call(null,vec__3932_4021,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_4019,ay_4020], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_4022,by_4023], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_4019,ay_4020], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_4022,by_4023], null)))){
quil.core.line.call(null,ax_4019,ay_4020,bx_4022,by_4023);
} else {
}


var G__4024 = seq__3913_4013;
var G__4025 = chunk__3914_4014;
var G__4026 = count__3915_4015;
var G__4027 = (i__3916_4016 + (1));
seq__3913_4013 = G__4024;
chunk__3914_4014 = G__4025;
count__3915_4015 = G__4026;
i__3916_4016 = G__4027;
continue;
} else {
var temp__5735__auto___4028__$1 = cljs.core.seq.call(null,seq__3913_4013);
if(temp__5735__auto___4028__$1){
var seq__3913_4029__$1 = temp__5735__auto___4028__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3913_4029__$1)){
var c__4550__auto___4030 = cljs.core.chunk_first.call(null,seq__3913_4029__$1);
var G__4031 = cljs.core.chunk_rest.call(null,seq__3913_4029__$1);
var G__4032 = c__4550__auto___4030;
var G__4033 = cljs.core.count.call(null,c__4550__auto___4030);
var G__4034 = (0);
seq__3913_4013 = G__4031;
chunk__3914_4014 = G__4032;
count__3915_4015 = G__4033;
i__3916_4016 = G__4034;
continue;
} else {
var bound_id_4035 = cljs.core.first.call(null,seq__3913_4029__$1);
var vec__3935_4036 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_4012);
var ax_4037 = cljs.core.nth.call(null,vec__3935_4036,(0),null);
var ay_4038 = cljs.core.nth.call(null,vec__3935_4036,(1),null);
var vec__3938_4039 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_4035));
var bx_4040 = cljs.core.nth.call(null,vec__3938_4039,(0),null);
var by_4041 = cljs.core.nth.call(null,vec__3938_4039,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_4037,ay_4038], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_4040,by_4041], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_4037,ay_4038], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_4040,by_4041], null)))){
quil.core.line.call(null,ax_4037,ay_4038,bx_4040,by_4041);
} else {
}


var G__4042 = cljs.core.next.call(null,seq__3913_4029__$1);
var G__4043 = null;
var G__4044 = (0);
var G__4045 = (0);
seq__3913_4013 = G__4042;
chunk__3914_4014 = G__4043;
count__3915_4015 = G__4044;
i__3916_4016 = G__4045;
continue;
}
} else {
}
}
break;
}


var G__4046 = cljs.core.next.call(null,seq__3825_4006__$1);
var G__4047 = null;
var G__4048 = (0);
var G__4049 = (0);
seq__3825_3963 = G__4046;
chunk__3826_3964 = G__4047;
count__3827_3965 = G__4048;
i__3828_3966 = G__4049;
continue;
}
} else {
}
}
break;
}

return quil.core.no_stroke.call(null);
});

//# sourceMappingURL=draw.js.map
