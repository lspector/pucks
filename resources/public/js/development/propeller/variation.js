// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.variation');
goog.require('cljs.core');
goog.require('propeller.selection');
goog.require('propeller.utils');
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one.
 */
propeller.variation.crossover = (function propeller$variation$crossover(plushy_a,plushy_b){
var shorter = cljs.core.min_key.call(null,cljs.core.count,plushy_a,plushy_b);
var longer = ((cljs.core._EQ_.call(null,shorter,plushy_a))?plushy_b:plushy_a);
var length_diff = (cljs.core.count.call(null,longer) - cljs.core.count.call(null,shorter));
var shorter_padded = cljs.core.concat.call(null,shorter,cljs.core.repeat.call(null,length_diff,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141)));
return cljs.core.remove.call(null,((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__3710_SHARP_){
return cljs.core._EQ_.call(null,p1__3710_SHARP_,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141));
});})(shorter,longer,length_diff,shorter_padded))
,cljs.core.map.call(null,((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__3711_SHARP_,p2__3712_SHARP_){
if((cljs.core.rand.call(null) < 0.5)){
return p1__3711_SHARP_;
} else {
return p2__3712_SHARP_;
}
});})(shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer));
});
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one on the left.
 */
propeller.variation.tail_aligned_crossover = (function propeller$variation$tail_aligned_crossover(plushy_a,plushy_b){
var shorter = cljs.core.min_key.call(null,cljs.core.count,plushy_a,plushy_b);
var longer = ((cljs.core._EQ_.call(null,shorter,plushy_a))?plushy_b:plushy_a);
var length_diff = (cljs.core.count.call(null,longer) - cljs.core.count.call(null,shorter));
var shorter_padded = cljs.core.concat.call(null,cljs.core.repeat.call(null,length_diff,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141)),shorter);
return cljs.core.remove.call(null,((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__3713_SHARP_){
return cljs.core._EQ_.call(null,p1__3713_SHARP_,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141));
});})(shorter,longer,length_diff,shorter_padded))
,cljs.core.map.call(null,((function (shorter,longer,length_diff,shorter_padded){
return (function (p1__3714_SHARP_,p2__3715_SHARP_){
if((cljs.core.rand.call(null) < 0.5)){
return p1__3714_SHARP_;
} else {
return p2__3715_SHARP_;
}
});})(shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer));
});
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one.
 */
propeller.variation.diploid_crossover = (function propeller$variation$diploid_crossover(plushy_a,plushy_b){
var plushy_a__$1 = cljs.core.partition.call(null,(2),plushy_a);
var plushy_b__$1 = cljs.core.partition.call(null,(2),plushy_b);
var shorter = cljs.core.min_key.call(null,cljs.core.count,plushy_a__$1,plushy_b__$1);
var longer = ((cljs.core._EQ_.call(null,shorter,plushy_a__$1))?plushy_b__$1:plushy_a__$1);
var length_diff = (cljs.core.count.call(null,longer) - cljs.core.count.call(null,shorter));
var shorter_padded = cljs.core.concat.call(null,shorter,cljs.core.repeat.call(null,length_diff,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141)));
return cljs.core.flatten.call(null,cljs.core.remove.call(null,((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__3716_SHARP_){
return cljs.core._EQ_.call(null,p1__3716_SHARP_,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141));
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,cljs.core.map.call(null,((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__3717_SHARP_,p2__3718_SHARP_){
if((cljs.core.rand.call(null) < 0.5)){
return p1__3717_SHARP_;
} else {
return p2__3718_SHARP_;
}
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer)));
});
/**
 * Crosses over two individuals using uniform crossover. Pads shorter one on the left.
 */
propeller.variation.tail_aligned_diploid_crossover = (function propeller$variation$tail_aligned_diploid_crossover(plushy_a,plushy_b){
var plushy_a__$1 = cljs.core.partition.call(null,(2),plushy_a);
var plushy_b__$1 = cljs.core.partition.call(null,(2),plushy_b);
var shorter = cljs.core.min_key.call(null,cljs.core.count,plushy_a__$1,plushy_b__$1);
var longer = ((cljs.core._EQ_.call(null,shorter,plushy_a__$1))?plushy_b__$1:plushy_a__$1);
var length_diff = (cljs.core.count.call(null,longer) - cljs.core.count.call(null,shorter));
var shorter_padded = cljs.core.concat.call(null,cljs.core.repeat.call(null,length_diff,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141)),shorter);
return cljs.core.flatten.call(null,cljs.core.remove.call(null,((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__3719_SHARP_){
return cljs.core._EQ_.call(null,p1__3719_SHARP_,new cljs.core.Keyword(null,"crossover-padding","crossover-padding",813834141));
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,cljs.core.map.call(null,((function (plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded){
return (function (p1__3720_SHARP_,p2__3721_SHARP_){
if((cljs.core.rand.call(null) < 0.5)){
return p1__3720_SHARP_;
} else {
return p2__3721_SHARP_;
}
});})(plushy_a__$1,plushy_b__$1,shorter,longer,length_diff,shorter_padded))
,shorter_padded,longer)));
});
/**
 * Returns plushy with new instructions possibly added before or after each
 *   existing instruction.
 */
propeller.variation.uniform_addition = (function propeller$variation$uniform_addition(plushy,instructions,umad_rate){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__3722_SHARP_){
if((cljs.core.rand.call(null) < umad_rate)){
return cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3722_SHARP_,propeller.utils.random_instruction.call(null,instructions)], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3722_SHARP_], null);
}
}),plushy));
});
/**
 * Returns plushy with new instructions possibly replacing existing
 * instructions.
 */
propeller.variation.uniform_replacement = (function propeller$variation$uniform_replacement(plushy,instructions,replacement_rate){
return cljs.core.map.call(null,(function (p1__3723_SHARP_){
if((cljs.core.rand.call(null) < replacement_rate)){
return propeller.utils.random_instruction.call(null,instructions);
} else {
return p1__3723_SHARP_;
}
}),plushy);
});
/**
 * Returns plushy with new instructions possibly replacing existing
 * instructions, but only among the silent member of each pair.
 */
propeller.variation.diploid_uniform_silent_replacement = (function propeller$variation$diploid_uniform_silent_replacement(plushy,instructions,replacement_rate){
return cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),plushy)),cljs.core.map.call(null,(function (p1__3724_SHARP_){
if((cljs.core.rand.call(null) < replacement_rate)){
return propeller.utils.random_instruction.call(null,instructions);
} else {
return p1__3724_SHARP_;
}
}),cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),plushy))));
});
/**
 * Returns plushy with new instructions possibly added before or after each
 *   existing instruction.
 */
propeller.variation.diploid_uniform_addition = (function propeller$variation$diploid_uniform_addition(plushy,instructions,umad_rate){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (pair){
if((cljs.core.rand.call(null) < umad_rate)){
return cljs.core.shuffle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair,cljs.core.repeatedly.call(null,(2),(function (){
return propeller.utils.random_instruction.call(null,instructions);
}))], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pair], null);
}
}),cljs.core.partition.call(null,(2),plushy)));
});
/**
 * Randomly deletes instructions from plushy at some rate.
 */
propeller.variation.uniform_deletion = (function propeller$variation$uniform_deletion(plushy,umad_rate){
if((umad_rate === (0))){
return plushy;
} else {
return cljs.core.remove.call(null,(function (_){
return (cljs.core.rand.call(null) < ((1) / ((1) + ((1) / umad_rate))));
}),plushy);
}
});
/**
 * Randomly deletes instructions from plushy at some rate.
 */
propeller.variation.diploid_uniform_deletion = (function propeller$variation$diploid_uniform_deletion(plushy,umad_rate){
return cljs.core.flatten.call(null,cljs.core.remove.call(null,(function (_){
return (cljs.core.rand.call(null) < ((1) / ((1) + ((1) / umad_rate))));
}),cljs.core.partition.call(null,(2),plushy)));
});
/**
 * Randomly flips pairs in a diploid plushy at some rate.
 */
propeller.variation.diploid_flip = (function propeller$variation$diploid_flip(plushy,flip_rate){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3725_SHARP_){
if((cljs.core.rand.call(null) < flip_rate)){
return cljs.core.reverse.call(null,p1__3725_SHARP_);
} else {
return p1__3725_SHARP_;
}
}),cljs.core.partition.call(null,(2),plushy)));
});
/**
 * Returns a new individual produced by selection and variation of
 *   individuals in the population.
 */
propeller.variation.new_individual = (function propeller$variation$new_individual(pop,argmap){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plushy","plushy",980491793),(function (){var r = cljs.core.rand.call(null);
var op = (function (){var accum = 0.0;
var ops_probs = cljs.core.vec.call(null,new cljs.core.Keyword(null,"variation","variation",-450640146).cljs$core$IFn$_invoke$arity$1(argmap));
while(true){
if(cljs.core.empty_QMARK_.call(null,ops_probs)){
return new cljs.core.Keyword(null,"reproduction","reproduction",-625255798);
} else {
var vec__3729 = cljs.core.first.call(null,ops_probs);
var op1 = cljs.core.nth.call(null,vec__3729,(0),null);
var prob1 = cljs.core.nth.call(null,vec__3729,(1),null);
if(((accum + prob1) >= r)){
return op1;
} else {
var G__3733 = (accum + prob1);
var G__3734 = cljs.core.rest.call(null,ops_probs);
accum = G__3733;
ops_probs = G__3734;
continue;
}
}
break;
}
})();
var G__3732 = op;
var G__3732__$1 = (((G__3732 instanceof cljs.core.Keyword))?G__3732.fqn:null);
switch (G__3732__$1) {
case "crossover":
return propeller.variation.crossover.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)));

break;
case "tail-aligned-crossover":
return propeller.variation.tail_aligned_crossover.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)));

break;
case "umad":
return propeller.variation.uniform_deletion.call(null,propeller.variation.uniform_addition.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap)),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "rumad":
var parent_genome = new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap));
var after_addition = propeller.variation.uniform_addition.call(null,parent_genome,new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));
var effective_addition_rate = ((cljs.core.count.call(null,after_addition) - cljs.core.count.call(null,parent_genome)) / cljs.core.count.call(null,parent_genome));
return propeller.variation.uniform_deletion.call(null,after_addition,effective_addition_rate);

break;
case "uniform-addition":
return propeller.variation.uniform_addition.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "uniform-replacement":
return propeller.variation.uniform_replacement.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"replacement-rate","replacement-rate",1950204117).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-uniform-silent-replacement":
return propeller.variation.diploid_uniform_silent_replacement.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"replacement-rate","replacement-rate",1950204117).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "uniform-deletion":
return propeller.variation.uniform_deletion.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-crossover":
return propeller.variation.diploid_crossover.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)));

break;
case "tail-aligned-diploid-crossover":
return propeller.variation.tail_aligned_diploid_crossover.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)));

break;
case "diploid-umad":
return propeller.variation.diploid_uniform_deletion.call(null,propeller.variation.diploid_uniform_addition.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap)),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-uniform-addition":
return propeller.variation.diploid_uniform_addition.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"instructions","instructions",1724333802).cljs$core$IFn$_invoke$arity$1(argmap),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-uniform-deletion":
return propeller.variation.diploid_uniform_deletion.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"umad-rate","umad-rate",-611055271).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "diploid-flip":
return propeller.variation.diploid_flip.call(null,new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap)),new cljs.core.Keyword(null,"diploid-flip-rate","diploid-flip-rate",-1106111731).cljs$core$IFn$_invoke$arity$1(argmap));

break;
case "reproduction":
return new cljs.core.Keyword(null,"plushy","plushy",980491793).cljs$core$IFn$_invoke$arity$1(propeller.selection.select_parent.call(null,pop,argmap));

break;
case "else":
throw Error(["No match in new-individual for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join(''));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3732__$1)].join('')));

}
})()], null);
});

//# sourceMappingURL=variation.js.map
