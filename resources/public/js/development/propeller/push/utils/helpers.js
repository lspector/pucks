// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.utils.helpers');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('propeller.push.core');
goog.require('propeller.push.state');
goog.require('propeller.push.utils.globals');
goog.require('goog.string');
goog.require('goog.string.format');
propeller.push.utils.helpers.keep_number_reasonable = (function propeller$push$utils$helpers$keep_number_reasonable(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n > propeller.push.utils.globals.max_number_magnitude)){
return cljs.core.long$.call(null,propeller.push.utils.globals.max_number_magnitude);
} else {
if((n < (- propeller.push.utils.globals.max_number_magnitude))){
return cljs.core.long$.call(null,(- propeller.push.utils.globals.max_number_magnitude));
} else {
return n;

}
}
} else {
if(cljs.core.truth_(isNaN(n))){
return 0.0;
} else {
if(((cljs.core._EQ_.call(null,n,Infinity)) || ((n > propeller.push.utils.globals.max_number_magnitude)))){
return propeller.push.utils.globals.max_number_magnitude;
} else {
if(((cljs.core._EQ_.call(null,n,-Infinity)) || ((n < (- propeller.push.utils.globals.max_number_magnitude))))){
return (- propeller.push.utils.globals.max_number_magnitude);
} else {
if(((((- propeller.push.utils.globals.min_number_magnitude) < n)) && ((n < propeller.push.utils.globals.min_number_magnitude)))){
return 0.0;
} else {
return n;

}
}
}
}

}
});
propeller.push.utils.helpers.reasonable_string_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_string_length_QMARK_(string){
var length = cljs.core.count.call(null,string);
return (length <= propeller.push.utils.globals.max_string_length);
});
propeller.push.utils.helpers.reasonable_vector_length_QMARK_ = (function propeller$push$utils$helpers$reasonable_vector_length_QMARK_(vector){
var length = cljs.core.count.call(null,vector);
return (length <= propeller.push.utils.globals.max_vector_length);
});
propeller.push.utils.helpers.get_args_from_stacks = (function propeller$push$utils$helpers$get_args_from_stacks(state,stacks){
var state__$1 = state;
var stacks__$1 = cljs.core.reverse.call(null,stacks);
var args = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,stacks__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
var current_stack = cljs.core.first.call(null,stacks__$1);
if(propeller.push.state.empty_stack_QMARK_.call(null,state__$1,current_stack)){
return new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685);
} else {
var G__4073 = propeller.push.state.pop_stack.call(null,state__$1,current_stack);
var G__4074 = cljs.core.rest.call(null,stacks__$1);
var G__4075 = cljs.core.conj.call(null,args,propeller.push.state.peek_stack.call(null,state__$1,current_stack));
state__$1 = G__4073;
stacks__$1 = G__4074;
args = G__4075;
continue;
}
}
break;
}
});
propeller.push.utils.helpers.make_instruction = (function propeller$push$utils$helpers$make_instruction(state,function$,arg_stacks,return_stack){
var popped_args = propeller.push.utils.helpers.get_args_from_stacks.call(null,state,arg_stacks);
if(cljs.core._EQ_.call(null,popped_args,new cljs.core.Keyword(null,"not-enough-args","not-enough-args",-322062685))){
return state;
} else {
var result = cljs.core.apply.call(null,function$,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(popped_args));
var new_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(popped_args);
if(typeof result === 'number'){
return propeller.push.state.push_to_stack.call(null,new_state,return_stack,propeller.push.utils.helpers.keep_number_reasonable.call(null,result));
} else {
if(((typeof result === 'string') && ((!(propeller.push.utils.helpers.reasonable_string_length_QMARK_.call(null,result)))))){
return state;
} else {
if(((cljs.core.vector_QMARK_.call(null,result)) && ((!(propeller.push.utils.helpers.reasonable_vector_length_QMARK_.call(null,result)))))){
return state;
} else {
if(cljs.core._EQ_.call(null,result,new cljs.core.Keyword(null,"ignore-instruction","ignore-instruction",-68519031))){
return state;
} else {
return propeller.push.state.push_to_stack.call(null,new_state,return_stack,result);

}
}
}
}
}
});
propeller.push.utils.helpers.get_stack_instructions = (function propeller$push$utils$helpers$get_stack_instructions(stacks){
var seq__4076_4102 = cljs.core.seq.call(null,cljs.core.deref.call(null,propeller.push.core.instruction_table));
var chunk__4077_4103 = null;
var count__4078_4104 = (0);
var i__4079_4105 = (0);
while(true){
if((i__4079_4105 < count__4078_4104)){
var vec__4086_4106 = cljs.core._nth.call(null,chunk__4077_4103,i__4079_4105);
var instruction_name_4107 = cljs.core.nth.call(null,vec__4086_4106,(0),null);
var function_4108 = cljs.core.nth.call(null,vec__4086_4106,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function_4108)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("ERROR: Instruction %s does not have :stacks defined in metadata.",cljs.core.name.call(null,instruction_name_4107))),"\n","(:stacks (meta function))"].join('')));
}


var G__4109 = seq__4076_4102;
var G__4110 = chunk__4077_4103;
var G__4111 = count__4078_4104;
var G__4112 = (i__4079_4105 + (1));
seq__4076_4102 = G__4109;
chunk__4077_4103 = G__4110;
count__4078_4104 = G__4111;
i__4079_4105 = G__4112;
continue;
} else {
var temp__5735__auto___4113 = cljs.core.seq.call(null,seq__4076_4102);
if(temp__5735__auto___4113){
var seq__4076_4114__$1 = temp__5735__auto___4113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4076_4114__$1)){
var c__4550__auto___4115 = cljs.core.chunk_first.call(null,seq__4076_4114__$1);
var G__4116 = cljs.core.chunk_rest.call(null,seq__4076_4114__$1);
var G__4117 = c__4550__auto___4115;
var G__4118 = cljs.core.count.call(null,c__4550__auto___4115);
var G__4119 = (0);
seq__4076_4102 = G__4116;
chunk__4077_4103 = G__4117;
count__4078_4104 = G__4118;
i__4079_4105 = G__4119;
continue;
} else {
var vec__4089_4120 = cljs.core.first.call(null,seq__4076_4114__$1);
var instruction_name_4121 = cljs.core.nth.call(null,vec__4089_4120,(0),null);
var function_4122 = cljs.core.nth.call(null,vec__4089_4120,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function_4122)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("ERROR: Instruction %s does not have :stacks defined in metadata.",cljs.core.name.call(null,instruction_name_4121))),"\n","(:stacks (meta function))"].join('')));
}


var G__4123 = cljs.core.next.call(null,seq__4076_4114__$1);
var G__4124 = null;
var G__4125 = (0);
var G__4126 = (0);
seq__4076_4102 = G__4123;
chunk__4077_4103 = G__4124;
count__4078_4104 = G__4125;
i__4079_4105 = G__4126;
continue;
}
} else {
}
}
break;
}

var iter__4523__auto__ = (function propeller$push$utils$helpers$get_stack_instructions_$_iter__4092(s__4093){
return (new cljs.core.LazySeq(null,(function (){
var s__4093__$1 = s__4093;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4093__$1);
if(temp__5735__auto__){
var s__4093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4093__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4093__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4095 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4094 = (0);
while(true){
if((i__4094 < size__4522__auto__)){
var vec__4096 = cljs.core._nth.call(null,c__4521__auto__,i__4094);
var instruction_name = cljs.core.nth.call(null,vec__4096,(0),null);
var function$ = cljs.core.nth.call(null,vec__4096,(1),null);
if(clojure.set.subset_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)),stacks)){
cljs.core.chunk_append.call(null,b__4095,instruction_name);

var G__4127 = (i__4094 + (1));
i__4094 = G__4127;
continue;
} else {
var G__4128 = (i__4094 + (1));
i__4094 = G__4128;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4095),propeller$push$utils$helpers$get_stack_instructions_$_iter__4092.call(null,cljs.core.chunk_rest.call(null,s__4093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4095),null);
}
} else {
var vec__4099 = cljs.core.first.call(null,s__4093__$2);
var instruction_name = cljs.core.nth.call(null,vec__4099,(0),null);
var function$ = cljs.core.nth.call(null,vec__4099,(1),null);
if(clojure.set.subset_QMARK_.call(null,new cljs.core.Keyword(null,"stacks","stacks",-456633410).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,function$)),stacks)){
return cljs.core.cons.call(null,instruction_name,propeller$push$utils$helpers$get_stack_instructions_$_iter__4092.call(null,cljs.core.rest.call(null,s__4093__$2)));
} else {
var G__4129 = cljs.core.rest.call(null,s__4093__$2);
s__4093__$1 = G__4129;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,propeller.push.core.instruction_table));
});
propeller.push.utils.helpers.get_literal_type = (function propeller$push$utils$helpers$get_literal_type(data){
var literals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (thing){
return ((thing === true) || (thing === false));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710),cljs.core.integer_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368),cljs.core.float_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"char","char",-641587586),cljs.core.char_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (((cljs.core.first.call(null,thing) === true) || (cljs.core.first.call(null,thing) === false))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (cljs.core.float_QMARK_.call(null,cljs.core.first.call(null,thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (cljs.core.integer_QMARK_.call(null,cljs.core.first.call(null,thing))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283),(function (thing){
return ((cljs.core.vector_QMARK_.call(null,thing)) && (typeof cljs.core.first.call(null,thing) === 'string'));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generic-vector","generic-vector",1279149583),(function (thing){
return cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,thing);
})], null)], null);
return cljs.core.first.call(null,(function (){var iter__4523__auto__ = ((function (literals){
return (function propeller$push$utils$helpers$get_literal_type_$_iter__4130(s__4131){
return (new cljs.core.LazySeq(null,((function (literals){
return (function (){
var s__4131__$1 = s__4131;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4131__$1);
if(temp__5735__auto__){
var s__4131__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4131__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4131__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4133 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4132 = (0);
while(true){
if((i__4132 < size__4522__auto__)){
var vec__4134 = cljs.core._nth.call(null,c__4521__auto__,i__4132);
var stack = cljs.core.nth.call(null,vec__4134,(0),null);
var function$ = cljs.core.nth.call(null,vec__4134,(1),null);
if(cljs.core.truth_(function$.call(null,data))){
cljs.core.chunk_append.call(null,b__4133,stack);

var G__4140 = (i__4132 + (1));
i__4132 = G__4140;
continue;
} else {
var G__4141 = (i__4132 + (1));
i__4132 = G__4141;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4133),propeller$push$utils$helpers$get_literal_type_$_iter__4130.call(null,cljs.core.chunk_rest.call(null,s__4131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4133),null);
}
} else {
var vec__4137 = cljs.core.first.call(null,s__4131__$2);
var stack = cljs.core.nth.call(null,vec__4137,(0),null);
var function$ = cljs.core.nth.call(null,vec__4137,(1),null);
if(cljs.core.truth_(function$.call(null,data))){
return cljs.core.cons.call(null,stack,propeller$push$utils$helpers$get_literal_type_$_iter__4130.call(null,cljs.core.rest.call(null,s__4131__$2)));
} else {
var G__4142 = cljs.core.rest.call(null,s__4131__$2);
s__4131__$1 = G__4142;
continue;
}
}
} else {
return null;
}
break;
}
});})(literals))
,null,null));
});})(literals))
;
return iter__4523__auto__.call(null,literals);
})());
});
/**
 * Returns the literal stack corresponding to some vector stack.
 */
propeller.push.utils.helpers.get_vector_literal_type = (function propeller$push$utils$helpers$get_vector_literal_type(vector_stack){
return cljs.core.get.call(null,propeller.push.state.vec_stacks,vector_stack);
});
propeller.push.utils.helpers.print_state = (function propeller$push$utils$helpers$print_state(state){
var seq__4143 = cljs.core.seq.call(null,cljs.core.keys.call(null,propeller.push.state.empty_state));
var chunk__4144 = null;
var count__4145 = (0);
var i__4146 = (0);
while(true){
if((i__4146 < count__4145)){
var stack = cljs.core._nth.call(null,chunk__4144,i__4146);
cljs.core.print.call(null,goog.string.format("%-15s = ",stack));

cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__4147 = seq__4143;
var G__4148 = chunk__4144;
var G__4149 = count__4145;
var G__4150 = (i__4146 + (1));
seq__4143 = G__4147;
chunk__4144 = G__4148;
count__4145 = G__4149;
i__4146 = G__4150;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4143);
if(temp__5735__auto__){
var seq__4143__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4143__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__4143__$1);
var G__4151 = cljs.core.chunk_rest.call(null,seq__4143__$1);
var G__4152 = c__4550__auto__;
var G__4153 = cljs.core.count.call(null,c__4550__auto__);
var G__4154 = (0);
seq__4143 = G__4151;
chunk__4144 = G__4152;
count__4145 = G__4153;
i__4146 = G__4154;
continue;
} else {
var stack = cljs.core.first.call(null,seq__4143__$1);
cljs.core.print.call(null,goog.string.format("%-15s = ",stack));

cljs.core.prn.call(null,(cljs.core.truth_(cljs.core.get.call(null,state,stack))?cljs.core.get.call(null,state,stack):cljs.core.List.EMPTY));

cljs.core.flush.call(null);


var G__4155 = cljs.core.next.call(null,seq__4143__$1);
var G__4156 = null;
var G__4157 = (0);
var G__4158 = (0);
seq__4143 = G__4155;
chunk__4144 = G__4156;
count__4145 = G__4157;
i__4146 = G__4158;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=helpers.js.map
