// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.selection');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Selects an individual from the population using a tournament.
 */
propeller.selection.tournament_selection = (function propeller$selection$tournament_selection(pop,argmap){
var tournament_size = cljs.core.cst$kw$tournament_DASH_size.cljs$core$IFn$_invoke$arity$1(argmap);
var tournament_set = cljs.core.take.cljs$core$IFn$_invoke$arity$2(tournament_size,cljs.core.shuffle(pop));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,cljs.core.cst$kw$total_DASH_error,tournament_set);
});
/**
 * Selects an individual from the population using lexicase selection.
 */
propeller.selection.lexicase_selection = (function propeller$selection$lexicase_selection(pop,argmap){
var survivors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rand_nth,cljs.core.vals(cljs.core.group_by(cljs.core.cst$kw$errors,pop)));
var cases = cljs.core.shuffle(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(cljs.core.first(pop)))));
while(true){
if(((cljs.core.empty_QMARK_(cases)) || (cljs.core.empty_QMARK_(cljs.core.rest(survivors))))){
return cljs.core.rand_nth(survivors);
} else {
var min_err_for_case = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (survivors,cases){
return (function (p1__13133_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__13133_SHARP_,cljs.core.first(cases));
});})(survivors,cases))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$errors,survivors)));
var G__13135 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (survivors,cases,min_err_for_case){
return (function (p1__13134_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(p1__13134_SHARP_),cljs.core.first(cases)),min_err_for_case);
});})(survivors,cases,min_err_for_case))
,survivors);
var G__13136 = cljs.core.rest(cases);
survivors = G__13135;
cases = G__13136;
continue;
}
break;
}
});
/**
 * Selects a parent from the population using the specified method.
 */
propeller.selection.select_parent = (function propeller$selection$select_parent(pop,argmap){
var G__13137 = cljs.core.cst$kw$parent_DASH_selection.cljs$core$IFn$_invoke$arity$1(argmap);
var G__13137__$1 = (((G__13137 instanceof cljs.core.Keyword))?G__13137.fqn:null);
switch (G__13137__$1) {
case "tournament":
return propeller.selection.tournament_selection(pop,argmap);

break;
case "lexicase":
return propeller.selection.lexicase_selection(pop,argmap);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13137__$1)].join('')));

}
});
