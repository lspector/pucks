// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.gp');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('propeller.genome');
goog.require('propeller.variation');
goog.require('propeller.push.instructions.bool');
goog.require('propeller.push.instructions.character');
goog.require('propeller.push.instructions.code');
goog.require('propeller.push.instructions.input_output');
goog.require('propeller.push.instructions.numeric');
goog.require('propeller.push.instructions.polymorphic');
goog.require('propeller.push.instructions.string');
goog.require('propeller.push.instructions.vector');
/**
 * Reports information each generation.
 */
propeller.gp.report = (function propeller$gp$report(pop,generation,argmap){
var best = cljs.core.first.call(null,pop);
cljs.pprint.pprint.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"best-errors","best-errors",850953133),new cljs.core.Keyword(null,"average-genome-length","average-genome-length",-1352038673),new cljs.core.Keyword(null,"average-total-error","average-total-error",-939560429),new cljs.core.Keyword(null,"best-program","best-program",-811166956),new cljs.core.Keyword(null,"genotypic-diversity","genotypic-diversity",1486736245),new cljs.core.Keyword(null,"best-plushy","best-plushy",-1759789480),new cljs.core.Keyword(null,"best-behaviors","best-behaviors",1832578489),new cljs.core.Keyword(null,"best-total-error","best-total-error",-9608837),new cljs.core.Keyword(null,"behavioral-diversity","behavioral-diversity",565503899)],[generation,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(best),(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793),pop))) / cljs.core.count.call(null,pop)),(cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"total-error","total-error",1426239184),pop)) / cljs.core.count.call(null,pop)),propeller.genome.plushy__GT_push.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(best),argmap),(cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793),pop))) / cljs.core.count.call(null,pop)),new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(best),new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$1(best),new cljs.core.Keyword(null,"total-error","total-error",1426239184).cljs$core$IFn$_invoke$arity$1(best),(cljs.core.count.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"behaviors","behaviors",120724909),pop))) / cljs.core.count.call(null,pop))]));

return cljs.core.println.call(null);
});
/**
 * Main GP loop.
 */
propeller.gp.gp = (function propeller$gp$gp(p__6963){
var map__6964 = p__6963;
var map__6964__$1 = (((((!((map__6964 == null))))?(((((map__6964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6964):map__6964);
var argmap = map__6964__$1;
var population_size = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"population-size","population-size",-1175003618));
var max_generations = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"max-generations","max-generations",784506896));
var error_function = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"error-function","error-function",-421428962));
var instructions = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"instructions","instructions",1724333802));
var max_initial_plushy_size = cljs.core.get.call(null,map__6964__$1,new cljs.core.Keyword(null,"max-initial-plushy-size","max-initial-plushy-size",-374353728));
cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"starting-args","starting-args",35134111),cljs.core.update.call(null,cljs.core.update.call(null,argmap,new cljs.core.Keyword(null,"error-function","error-function",-421428962),cljs.core.str),new cljs.core.Keyword(null,"instructions","instructions",1724333802),cljs.core.str)], null));

cljs.core.println.call(null);

var generation = (0);
var population = cljs.core.repeatedly.call(null,population_size,((function (generation,map__6964,map__6964__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size){
return (function (){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"plushy","plushy",980491793)],[propeller.genome.make_random_plushy.call(null,instructions,max_initial_plushy_size)]);
});})(generation,map__6964,map__6964__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size))
);
while(true){
var evaluated_pop = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"total-error","total-error",1426239184),cljs.core.map.call(null,cljs.core.partial.call(null,error_function,argmap,new cljs.core.Keyword(null,"training-data","training-data",-774899967).cljs$core$IFn$_invoke$arity$1(argmap)),population));
var best_individual = cljs.core.first.call(null,evaluated_pop);
propeller.gp.report.call(null,evaluated_pop,generation,argmap);

if((new cljs.core.Keyword(null,"total-error","total-error",1426239184).cljs$core$IFn$_invoke$arity$1(best_individual) === (0))){
cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success-generation","success-generation",571163640),generation], null));

cljs.core.prn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total-test-error","total-test-error",552539969),new cljs.core.Keyword(null,"total-error","total-error",1426239184).cljs$core$IFn$_invoke$arity$1(error_function.call(null,argmap,new cljs.core.Keyword(null,"testing-data","testing-data",-691989988).cljs$core$IFn$_invoke$arity$1(argmap),best_individual))], null));

return cljs.core.List.EMPTY;
} else {
if((generation >= max_generations)){
return null;
} else {
var G__6966 = (generation + (1));
var G__6967 = (cljs.core.truth_(new cljs.core.Keyword(null,"elitism","elitism",-650754994).cljs$core$IFn$_invoke$arity$1(argmap))?cljs.core.conj.call(null,cljs.core.repeatedly.call(null,(population_size - (1)),((function (generation,population,evaluated_pop,best_individual,map__6964,map__6964__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size){
return (function (){
return propeller.variation.new_individual.call(null,evaluated_pop,argmap);
});})(generation,population,evaluated_pop,best_individual,map__6964,map__6964__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size))
),cljs.core.first.call(null,evaluated_pop)):cljs.core.repeatedly.call(null,population_size,((function (generation,population,evaluated_pop,best_individual,map__6964,map__6964__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size){
return (function (){
return propeller.variation.new_individual.call(null,evaluated_pop,argmap);
});})(generation,population,evaluated_pop,best_individual,map__6964,map__6964__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size))
));
generation = G__6966;
population = G__6967;
continue;

}
}
break;
}
});

//# sourceMappingURL=gp.js.map
