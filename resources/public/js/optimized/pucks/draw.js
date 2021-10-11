// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
/**
 * Sets the background color and calls the :draw-functions of all agents.
 */
pucks.draw.draw_agents = (function pucks$draw$draw_agents(){
quil.core.background.cljs$core$IFn$_invoke$arity$3((230),(180),(230));

var s_13809 = cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pucks.globals.pucks_settings));
quil.core.scale.cljs$core$IFn$_invoke$arity$2(s_13809,s_13809);

var seq__13685_13810 = cljs.core.seq(cljs.core.deref(pucks.globals.all_agents));
var chunk__13686_13811 = null;
var count__13687_13812 = (0);
var i__13688_13813 = (0);
while(true){
if((i__13688_13813 < count__13687_13812)){
var a_13814 = chunk__13686_13811.cljs$core$IIndexed$_nth$arity$2(null,i__13688_13813);
var fexpr__13691_13815 = cljs.core.cst$kw$draw_DASH_function.cljs$core$IFn$_invoke$arity$1(a_13814);
(fexpr__13691_13815.cljs$core$IFn$_invoke$arity$1 ? fexpr__13691_13815.cljs$core$IFn$_invoke$arity$1(a_13814) : fexpr__13691_13815.call(null,a_13814));


var G__13816 = seq__13685_13810;
var G__13817 = chunk__13686_13811;
var G__13818 = count__13687_13812;
var G__13819 = (i__13688_13813 + (1));
seq__13685_13810 = G__13816;
chunk__13686_13811 = G__13817;
count__13687_13812 = G__13818;
i__13688_13813 = G__13819;
continue;
} else {
var temp__5735__auto___13820 = cljs.core.seq(seq__13685_13810);
if(temp__5735__auto___13820){
var seq__13685_13821__$1 = temp__5735__auto___13820;
if(cljs.core.chunked_seq_QMARK_(seq__13685_13821__$1)){
var c__4550__auto___13822 = cljs.core.chunk_first(seq__13685_13821__$1);
var G__13823 = cljs.core.chunk_rest(seq__13685_13821__$1);
var G__13824 = c__4550__auto___13822;
var G__13825 = cljs.core.count(c__4550__auto___13822);
var G__13826 = (0);
seq__13685_13810 = G__13823;
chunk__13686_13811 = G__13824;
count__13687_13812 = G__13825;
i__13688_13813 = G__13826;
continue;
} else {
var a_13827 = cljs.core.first(seq__13685_13821__$1);
var fexpr__13692_13828 = cljs.core.cst$kw$draw_DASH_function.cljs$core$IFn$_invoke$arity$1(a_13827);
(fexpr__13692_13828.cljs$core$IFn$_invoke$arity$1 ? fexpr__13692_13828.cljs$core$IFn$_invoke$arity$1(a_13827) : fexpr__13692_13828.call(null,a_13827));


var G__13829 = cljs.core.next(seq__13685_13821__$1);
var G__13830 = null;
var G__13831 = (0);
var G__13832 = (0);
seq__13685_13810 = G__13829;
chunk__13686_13811 = G__13830;
count__13687_13812 = G__13831;
i__13688_13813 = G__13832;
continue;
}
} else {
}
}
break;
}

var agent_map = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.deref(pucks.globals.all_agents)),cljs.core.deref(pucks.globals.all_agents));
quil.core.stroke.cljs$core$IFn$_invoke$arity$1((196));

quil.core.stroke_weight((2));

var seq__13693_13833 = cljs.core.seq(cljs.core.deref(pucks.globals.all_agents));
var chunk__13694_13834 = null;
var count__13695_13835 = (0);
var i__13696_13836 = (0);
while(true){
if((i__13696_13836 < count__13695_13835)){
var a_13837 = chunk__13694_13834.cljs$core$IIndexed$_nth$arity$2(null,i__13696_13836);
var seq__13753_13838 = cljs.core.seq(cljs.core.cst$kw$bound_DASH_to.cljs$core$IFn$_invoke$arity$1(a_13837));
var chunk__13754_13839 = null;
var count__13755_13840 = (0);
var i__13756_13841 = (0);
while(true){
if((i__13756_13841 < count__13755_13840)){
var bound_id_13842 = chunk__13754_13839.cljs$core$IIndexed$_nth$arity$2(null,i__13756_13841);
var vec__13769_13843 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_13837);
var ax_13844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13769_13843,(0),null);
var ay_13845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13769_13843,(1),null);
var vec__13772_13846 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_13842));
var bx_13847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772_13846,(0),null);
var by_13848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772_13846,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13844,ay_13845], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13847,by_13848], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13844,ay_13845], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13847,by_13848], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_13844,ay_13845,bx_13847,by_13848);
} else {
}


var G__13849 = seq__13753_13838;
var G__13850 = chunk__13754_13839;
var G__13851 = count__13755_13840;
var G__13852 = (i__13756_13841 + (1));
seq__13753_13838 = G__13849;
chunk__13754_13839 = G__13850;
count__13755_13840 = G__13851;
i__13756_13841 = G__13852;
continue;
} else {
var temp__5735__auto___13853 = cljs.core.seq(seq__13753_13838);
if(temp__5735__auto___13853){
var seq__13753_13854__$1 = temp__5735__auto___13853;
if(cljs.core.chunked_seq_QMARK_(seq__13753_13854__$1)){
var c__4550__auto___13855 = cljs.core.chunk_first(seq__13753_13854__$1);
var G__13856 = cljs.core.chunk_rest(seq__13753_13854__$1);
var G__13857 = c__4550__auto___13855;
var G__13858 = cljs.core.count(c__4550__auto___13855);
var G__13859 = (0);
seq__13753_13838 = G__13856;
chunk__13754_13839 = G__13857;
count__13755_13840 = G__13858;
i__13756_13841 = G__13859;
continue;
} else {
var bound_id_13860 = cljs.core.first(seq__13753_13854__$1);
var vec__13775_13861 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_13837);
var ax_13862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775_13861,(0),null);
var ay_13863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13775_13861,(1),null);
var vec__13778_13864 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_13860));
var bx_13865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778_13864,(0),null);
var by_13866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778_13864,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13862,ay_13863], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13865,by_13866], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13862,ay_13863], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13865,by_13866], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_13862,ay_13863,bx_13865,by_13866);
} else {
}


var G__13867 = cljs.core.next(seq__13753_13854__$1);
var G__13868 = null;
var G__13869 = (0);
var G__13870 = (0);
seq__13753_13838 = G__13867;
chunk__13754_13839 = G__13868;
count__13755_13840 = G__13869;
i__13756_13841 = G__13870;
continue;
}
} else {
}
}
break;
}


var G__13871 = seq__13693_13833;
var G__13872 = chunk__13694_13834;
var G__13873 = count__13695_13835;
var G__13874 = (i__13696_13836 + (1));
seq__13693_13833 = G__13871;
chunk__13694_13834 = G__13872;
count__13695_13835 = G__13873;
i__13696_13836 = G__13874;
continue;
} else {
var temp__5735__auto___13875 = cljs.core.seq(seq__13693_13833);
if(temp__5735__auto___13875){
var seq__13693_13876__$1 = temp__5735__auto___13875;
if(cljs.core.chunked_seq_QMARK_(seq__13693_13876__$1)){
var c__4550__auto___13877 = cljs.core.chunk_first(seq__13693_13876__$1);
var G__13878 = cljs.core.chunk_rest(seq__13693_13876__$1);
var G__13879 = c__4550__auto___13877;
var G__13880 = cljs.core.count(c__4550__auto___13877);
var G__13881 = (0);
seq__13693_13833 = G__13878;
chunk__13694_13834 = G__13879;
count__13695_13835 = G__13880;
i__13696_13836 = G__13881;
continue;
} else {
var a_13882 = cljs.core.first(seq__13693_13876__$1);
var seq__13781_13883 = cljs.core.seq(cljs.core.cst$kw$bound_DASH_to.cljs$core$IFn$_invoke$arity$1(a_13882));
var chunk__13782_13884 = null;
var count__13783_13885 = (0);
var i__13784_13886 = (0);
while(true){
if((i__13784_13886 < count__13783_13885)){
var bound_id_13887 = chunk__13782_13884.cljs$core$IIndexed$_nth$arity$2(null,i__13784_13886);
var vec__13797_13888 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_13882);
var ax_13889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797_13888,(0),null);
var ay_13890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797_13888,(1),null);
var vec__13800_13891 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_13887));
var bx_13892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13800_13891,(0),null);
var by_13893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13800_13891,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13889,ay_13890], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13892,by_13893], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13889,ay_13890], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13892,by_13893], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_13889,ay_13890,bx_13892,by_13893);
} else {
}


var G__13894 = seq__13781_13883;
var G__13895 = chunk__13782_13884;
var G__13896 = count__13783_13885;
var G__13897 = (i__13784_13886 + (1));
seq__13781_13883 = G__13894;
chunk__13782_13884 = G__13895;
count__13783_13885 = G__13896;
i__13784_13886 = G__13897;
continue;
} else {
var temp__5735__auto___13898__$1 = cljs.core.seq(seq__13781_13883);
if(temp__5735__auto___13898__$1){
var seq__13781_13899__$1 = temp__5735__auto___13898__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13781_13899__$1)){
var c__4550__auto___13900 = cljs.core.chunk_first(seq__13781_13899__$1);
var G__13901 = cljs.core.chunk_rest(seq__13781_13899__$1);
var G__13902 = c__4550__auto___13900;
var G__13903 = cljs.core.count(c__4550__auto___13900);
var G__13904 = (0);
seq__13781_13883 = G__13901;
chunk__13782_13884 = G__13902;
count__13783_13885 = G__13903;
i__13784_13886 = G__13904;
continue;
} else {
var bound_id_13905 = cljs.core.first(seq__13781_13899__$1);
var vec__13803_13906 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a_13882);
var ax_13907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13803_13906,(0),null);
var ay_13908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13803_13906,(1),null);
var vec__13806_13909 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(agent_map,bound_id_13905));
var bx_13910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806_13909,(0),null);
var by_13911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806_13909,(1),null);
if(((pucks.vec2D.length(pucks.vec2D._v.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13907,ay_13908], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13910,by_13911], null)], 0))) - (1)) < pucks.vec2D.distance(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_13907,ay_13908], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_13910,by_13911], null)))){
quil.core.line.cljs$core$IFn$_invoke$arity$4(ax_13907,ay_13908,bx_13910,by_13911);
} else {
}


var G__13912 = cljs.core.next(seq__13781_13899__$1);
var G__13913 = null;
var G__13914 = (0);
var G__13915 = (0);
seq__13781_13883 = G__13912;
chunk__13782_13884 = G__13913;
count__13783_13885 = G__13914;
i__13784_13886 = G__13915;
continue;
}
} else {
}
}
break;
}


var G__13916 = cljs.core.next(seq__13693_13876__$1);
var G__13917 = null;
var G__13918 = (0);
var G__13919 = (0);
seq__13693_13833 = G__13916;
chunk__13694_13834 = G__13917;
count__13695_13835 = G__13918;
i__13696_13836 = G__13919;
continue;
}
} else {
}
}
break;
}

return quil.core.no_stroke();
});
