// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.gp');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var best = cljs.core.first(pop);
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$generation,cljs.core.cst$kw$best_DASH_errors,cljs.core.cst$kw$average_DASH_genome_DASH_length,cljs.core.cst$kw$average_DASH_total_DASH_error,cljs.core.cst$kw$best_DASH_program,cljs.core.cst$kw$genotypic_DASH_diversity,cljs.core.cst$kw$best_DASH_plushy,cljs.core.cst$kw$best_DASH_behaviors,cljs.core.cst$kw$best_DASH_total_DASH_error,cljs.core.cst$kw$behavioral_DASH_diversity],[generation,cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(best),(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$plushy,pop))) / cljs.core.count(pop)),(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$total_DASH_error,pop)) / cljs.core.count(pop)),propeller.genome.plushy__GT_push.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(best),argmap),(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$plushy,pop))) / cljs.core.count(pop)),cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(best),cljs.core.cst$kw$behaviors.cljs$core$IFn$_invoke$arity$1(best),cljs.core.cst$kw$total_DASH_error.cljs$core$IFn$_invoke$arity$1(best),(cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$behaviors,pop))) / cljs.core.count(pop))]));

return cljs.core.println();
});
/**
 * Main GP loop.
 */
propeller.gp.gp = (function propeller$gp$gp(p__16128){
var map__16129 = p__16128;
var map__16129__$1 = (((((!((map__16129 == null))))?(((((map__16129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16129):map__16129);
var argmap = map__16129__$1;
var population_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16129__$1,cljs.core.cst$kw$population_DASH_size);
var max_generations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16129__$1,cljs.core.cst$kw$max_DASH_generations);
var error_function = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16129__$1,cljs.core.cst$kw$error_DASH_function);
var instructions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16129__$1,cljs.core.cst$kw$instructions);
var max_initial_plushy_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16129__$1,cljs.core.cst$kw$max_DASH_initial_DASH_plushy_DASH_size);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$starting_DASH_args,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(argmap,cljs.core.cst$kw$error_DASH_function,cljs.core.str),cljs.core.cst$kw$instructions,cljs.core.str)], null)], 0));

cljs.core.println();

var generation = (0);
var population = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(population_size,((function (generation,map__16129,map__16129__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size){
return (function (){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$plushy],[propeller.genome.make_random_plushy(instructions,max_initial_plushy_size)]);
});})(generation,map__16129,map__16129__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size))
);
while(true){
var evaluated_pop = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$total_DASH_error,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(error_function,argmap,cljs.core.cst$kw$training_DASH_data.cljs$core$IFn$_invoke$arity$1(argmap)),population));
var best_individual = cljs.core.first(evaluated_pop);
propeller.gp.report(evaluated_pop,generation,argmap);

if((cljs.core.cst$kw$total_DASH_error.cljs$core$IFn$_invoke$arity$1(best_individual) === (0))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$success_DASH_generation,generation], null)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total_DASH_test_DASH_error,cljs.core.cst$kw$total_DASH_error.cljs$core$IFn$_invoke$arity$1((function (){var G__16134 = argmap;
var G__16135 = cljs.core.cst$kw$testing_DASH_data.cljs$core$IFn$_invoke$arity$1(argmap);
var G__16136 = best_individual;
return (error_function.cljs$core$IFn$_invoke$arity$3 ? error_function.cljs$core$IFn$_invoke$arity$3(G__16134,G__16135,G__16136) : error_function.call(null,G__16134,G__16135,G__16136));
})())], null)], 0));

return cljs.core.List.EMPTY;
} else {
if((generation >= max_generations)){
return null;
} else {
var G__16137 = (generation + (1));
var G__16138 = (cljs.core.truth_(cljs.core.cst$kw$elitism.cljs$core$IFn$_invoke$arity$1(argmap))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((population_size - (1)),((function (generation,population,evaluated_pop,best_individual,map__16129,map__16129__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size){
return (function (){
return propeller.variation.new_individual(evaluated_pop,argmap);
});})(generation,population,evaluated_pop,best_individual,map__16129,map__16129__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size))
),cljs.core.first(evaluated_pop)):cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(population_size,((function (generation,population,evaluated_pop,best_individual,map__16129,map__16129__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size){
return (function (){
return propeller.variation.new_individual(evaluated_pop,argmap);
});})(generation,population,evaluated_pop,best_individual,map__16129,map__16129__$1,argmap,population_size,max_generations,error_function,instructions,max_initial_plushy_size))
));
generation = G__16137;
population = G__16138;
continue;

}
}
break;
}
});
