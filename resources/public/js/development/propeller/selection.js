// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.selection');
goog.require('cljs.core');
/**
 * Selects an individual from the population using a tournament.
 */
propeller.selection.tournament_selection = (function propeller$selection$tournament_selection(pop,argmap){
var tournament_size = new cljs.core.Keyword(null,"tournament-size","tournament-size",1575959771).cljs$core$IFn$_invoke$arity$1(argmap);
var tournament_set = cljs.core.take.call(null,tournament_size,cljs.core.shuffle.call(null,pop));
return cljs.core.apply.call(null,cljs.core.min_key,new cljs.core.Keyword(null,"total-error","total-error",1426239184),tournament_set);
});
/**
 * Selects an individual from the population using lexicase selection.
 */
propeller.selection.lexicase_selection = (function propeller$selection$lexicase_selection(pop,argmap){
var survivors = cljs.core.map.call(null,cljs.core.rand_nth,cljs.core.vals.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718),pop)));
var cases = cljs.core.shuffle.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,pop)))));
while(true){
if(((cljs.core.empty_QMARK_.call(null,cases)) || (cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,survivors))))){
return cljs.core.rand_nth.call(null,survivors);
} else {
var min_err_for_case = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (survivors,cases){
return (function (p1__3698_SHARP_){
return cljs.core.nth.call(null,p1__3698_SHARP_,cljs.core.first.call(null,cases));
});})(survivors,cases))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718),survivors)));
var G__3700 = cljs.core.filter.call(null,((function (survivors,cases,min_err_for_case){
return (function (p1__3699_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(p1__3699_SHARP_),cljs.core.first.call(null,cases)),min_err_for_case);
});})(survivors,cases,min_err_for_case))
,survivors);
var G__3701 = cljs.core.rest.call(null,cases);
survivors = G__3700;
cases = G__3701;
continue;
}
break;
}
});
/**
 * Selects a parent from the population using the specified method.
 */
propeller.selection.select_parent = (function propeller$selection$select_parent(pop,argmap){
var G__3702 = new cljs.core.Keyword(null,"parent-selection","parent-selection",-1130458191).cljs$core$IFn$_invoke$arity$1(argmap);
var G__3702__$1 = (((G__3702 instanceof cljs.core.Keyword))?G__3702.fqn:null);
switch (G__3702__$1) {
case "tournament":
return propeller.selection.tournament_selection.call(null,pop,argmap);

break;
case "lexicase":
return propeller.selection.lexicase_selection.call(null,pop,argmap);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3702__$1)].join('')));

}
});

//# sourceMappingURL=selection.js.map
