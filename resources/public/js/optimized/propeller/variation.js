// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.variation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.selection');
goog.require('propeller.utils');
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one.
 */
propeller.variation.crossover = (function propeller$variation$crossover(plushy_a,plushy_b){
var shorter = cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(cljs.core.count,plushy_a,plushy_b);
var longer = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shorter,plushy_a))?plushy_b:plushy_a);
var length_diff = (cljs.core.count(longer) - cljs.core.count(shorter));
var shorter_padded = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(shorter,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length_diff,cljs.core.cst$kw$crossover_DASH_padding));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__13145_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13145_SHARP_,cljs.core.cst$kw$crossover_DASH_padding);
});})(shorter,longer,length_diff,shorter_padded))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__13146_SHARP_,p2__13147_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.5)){
return p1__13146_SHARP_;
} else {
return p2__13147_SHARP_;
}
});})(shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer));
});
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one on the left.
 */
propeller.variation.tail_aligned_crossover = (function propeller$variation$tail_aligned_crossover(plushy_a,plushy_b){
var shorter = cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(cljs.core.count,plushy_a,plushy_b);
var longer = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shorter,plushy_a))?plushy_b:plushy_a);
var length_diff = (cljs.core.count(longer) - cljs.core.count(shorter));
var shorter_padded = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length_diff,cljs.core.cst$kw$crossover_DASH_padding),shorter);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__13148_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13148_SHARP_,cljs.core.cst$kw$crossover_DASH_padding);
});})(shorter,longer,length_diff,shorter_padded))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__13149_SHARP_,p2__13150_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.5)){
return p1__13149_SHARP_;
} else {
return p2__13150_SHARP_;
}
});})(shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer));
});
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one.
 */
propeller.variation.diploid_crossover = (function propeller$variation$diploid_crossover(plushy_a,plushy_b){
var plushy_a__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy_a);
var plushy_b__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy_b);
var shorter = cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(cljs.core.count,plushy_a__$1,plushy_b__$1);
var longer = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shorter,plushy_a__$1))?plushy_b__$1:plushy_a__$1);
var length_diff = (cljs.core.count(longer) - cljs.core.count(shorter));
var shorter_padded = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(shorter,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length_diff,cljs.core.cst$kw$crossover_DASH_padding));
return cljs.core.flatten(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__13151_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13151_SHARP_,cljs.core.cst$kw$crossover_DASH_padding);
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__13152_SHARP_,p2__13153_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.5)){
return p1__13152_SHARP_;
} else {
return p2__13153_SHARP_;
}
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer)));
});
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one on the left.
 */
propeller.variation.tail_aligned_diploid_crossover = (function propeller$variation$tail_aligned_diploid_crossover(plushy_a,plushy_b){
var plushy_a__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy_a);
var plushy_b__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy_b);
var shorter = cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(cljs.core.count,plushy_a__$1,plushy_b__$1);
var longer = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shorter,plushy_a__$1))?plushy_b__$1:plushy_a__$1);
var length_diff = (cljs.core.count(longer) - cljs.core.count(shorter));
var shorter_padded = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length_diff,cljs.core.cst$kw$crossover_DASH_padding),shorter);
return cljs.core.flatten(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__13154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13154_SHARP_,cljs.core.cst$kw$crossover_DASH_padding);
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__13155_SHARP_,p2__13156_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < 0.5)){
return p1__13155_SHARP_;
} else {
return p2__13156_SHARP_;
}
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer)));
});
/**
 * Returns plushy with new instructions possibly added before or after each
 *   existing instruction.
 */
propeller.variation.uniform_addition = (function propeller$variation$uniform_addition(plushy,instructions,umad_rate){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13157_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < umad_rate)){
return cljs.core.shuffle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13157_SHARP_,propeller.utils.random_instruction(instructions)], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13157_SHARP_], null);
}
}),plushy));
});
/**
 * Returns plushy with new instructions possibly replacing existing
 * instructions.
 */
propeller.variation.uniform_replacement = (function propeller$variation$uniform_replacement(plushy,instructions,replacement_rate){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13158_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < replacement_rate)){
return propeller.utils.random_instruction(instructions);
} else {
return p1__13158_SHARP_;
}
}),plushy);
});
/**
 * Returns plushy with new instructions possibly replacing existing
 * instructions, but only among the silent member of each pair.
 */
propeller.variation.diploid_uniform_silent_replacement = (function propeller$variation$diploid_uniform_silent_replacement(plushy,instructions,replacement_rate){
return cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13159_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < replacement_rate)){
return propeller.utils.random_instruction(instructions);
} else {
return p1__13159_SHARP_;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy))));
});
/**
 * Returns plushy with new instructions possibly added before or after each
 *   existing instruction.
 */
propeller.variation.diploid_uniform_addition = (function propeller$variation$diploid_uniform_addition(plushy,instructions,umad_rate){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pair){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < umad_rate)){
return cljs.core.shuffle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((2),(function (){
return propeller.utils.random_instruction(instructions);
}))], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair], null);
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy)));
});
/**
 * Randomly deletes instructions from plushy at some rate.
 */
propeller.variation.uniform_deletion = (function propeller$variation$uniform_deletion(plushy,umad_rate){
if((umad_rate === (0))){
return plushy;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / ((1) + ((1) / umad_rate))));
}),plushy);
}
});
/**
 * Randomly deletes instructions from plushy at some rate.
 */
propeller.variation.diploid_uniform_deletion = (function propeller$variation$diploid_uniform_deletion(plushy,umad_rate){
return cljs.core.flatten(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (_){
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < ((1) / ((1) + ((1) / umad_rate))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy)));
});
/**
 * Randomly flips pairs in a diploid plushy at some rate.
 */
propeller.variation.diploid_flip = (function propeller$variation$diploid_flip(plushy,flip_rate){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13160_SHARP_){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() < flip_rate)){
return cljs.core.reverse(p1__13160_SHARP_);
} else {
return p1__13160_SHARP_;
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),plushy)));
});
/**
 * Returns a new individual produced by selection and variation of
 *   individuals in the population.
 */
propeller.variation.new_individual = (function propeller$variation$new_individual(pop,argmap){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$plushy,(function (){var r = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var op = (function (){var accum = 0.0;
var ops_probs = cljs.core.vec(cljs.core.cst$kw$variation.cljs$core$IFn$_invoke$arity$1(argmap));
while(true){
if(cljs.core.empty_QMARK_(ops_probs)){
return cljs.core.cst$kw$reproduction;
} else {
var vec__13164 = cljs.core.first(ops_probs);
var op1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(0),null);
var prob1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13164,(1),null);
if(((accum + prob1) >= r)){
return op1;
} else {
var G__13168 = (accum + prob1);
var G__13169 = cljs.core.rest(ops_probs);
accum = G__13168;
ops_probs = G__13169;
continue;
}
}
break;
}
})();
var G__13167 = op;
var G__13167__$1 = (((G__13167 instanceof cljs.core.Keyword))?G__13167.fqn:null);
switch (G__13167__$1) {
case "crossover":
return propeller.variation.crossover(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)));

break;
case "tail-aligned-crossover":
return propeller.variation.tail_aligned_crossover(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)));

break;
case "umad":
return propeller.variation.uniform_deletion(propeller.variation.uniform_addition(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap)),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "rumad":
var parent_genome = cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap));
var after_addition = propeller.variation.uniform_addition(parent_genome,cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));
var effective_addition_rate = ((cljs.core.count(after_addition) - cljs.core.count(parent_genome)) / cljs.core.count(parent_genome));
return propeller.variation.uniform_deletion(after_addition,effective_addition_rate);

break;
case "uniform-addition":
return propeller.variation.uniform_addition(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "uniform-replacement":
return propeller.variation.uniform_replacement(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$replacement_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-uniform-silent-replacement":
return propeller.variation.diploid_uniform_silent_replacement(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$replacement_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "uniform-deletion":
return propeller.variation.uniform_deletion(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-crossover":
return propeller.variation.diploid_crossover(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)));

break;
case "tail-aligned-diploid-crossover":
return propeller.variation.tail_aligned_diploid_crossover(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)));

break;
case "diploid-umad":
return propeller.variation.diploid_uniform_deletion(propeller.variation.diploid_uniform_addition(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap)),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-uniform-addition":
return propeller.variation.diploid_uniform_addition(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$instructions.cljs$core$IFn$_invoke$arity$1(argmap),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-uniform-deletion":
return propeller.variation.diploid_uniform_deletion(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$umad_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-flip":
return propeller.variation.diploid_flip(cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap)),cljs.core.cst$kw$diploid_DASH_flip_DASH_rate.cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "reproduction":
return cljs.core.cst$kw$plushy.cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent(pop,argmap));

break;
case "else":
throw Error(["No match in new-individual for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13167__$1)].join('')));

}
})()], null);
});
