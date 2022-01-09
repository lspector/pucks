// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
if((typeof propeller !== 'undefined') && (typeof propeller.push !== 'undefined') && (typeof propeller.push.state !== 'undefined') && (typeof propeller.push.state.empty_state !== 'undefined')){
} else {
propeller.push.state.empty_state = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$exec,cljs.core.cst$kw$float,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$output,cljs.core.cst$kw$string,cljs.core.cst$kw$print,cljs.core.cst$kw$integer,cljs.core.cst$kw$code,cljs.core.cst$kw$input,cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$boolean,cljs.core.cst$kw$vector_string,cljs.core.cst$kw$char],[cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.List.EMPTY,cljs.core.list(""),cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY]);
}
if((typeof propeller !== 'undefined') && (typeof propeller.push !== 'undefined') && (typeof propeller.push.state !== 'undefined') && (typeof propeller.push.state.stacks !== 'undefined')){
} else {
propeller.push.state.stacks = cljs.core.set(cljs.core.keys(propeller.push.state.empty_state));
}
if((typeof propeller !== 'undefined') && (typeof propeller.push !== 'undefined') && (typeof propeller.push.state !== 'undefined') && (typeof propeller.push.state.vec_stacks !== 'undefined')){
} else {
propeller.push.state.vec_stacks = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$vector_boolean,cljs.core.cst$kw$boolean,cljs.core.cst$kw$vector_float,cljs.core.cst$kw$float,cljs.core.cst$kw$vector_integer,cljs.core.cst$kw$integer,cljs.core.cst$kw$vector_string,cljs.core.cst$kw$string], null);
}
propeller.push.state.example_state = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$exec,cljs.core.List.EMPTY,cljs.core.cst$kw$integer,cljs.core.list((1),(2),(3),(4),(5),(6),(7)),cljs.core.cst$kw$string,cljs.core.list("abc"),cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$in1,(4)], null)], null);
propeller.push.state.empty_stack_QMARK_ = (function propeller$push$state$empty_stack_QMARK_(state,stack){
return cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
});
propeller.push.state.stack_size = (function propeller$push$state$stack_size(state,stack){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
});
propeller.push.state.peek_stack = (function propeller$push$state$peek_stack(state,stack){
if(cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack))){
return cljs.core.cst$kw$no_DASH_stack_DASH_item;
} else {
return cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
}
});
propeller.push.state.peek_stack_many = (function propeller$push$state$peek_stack_many(state,stack,n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,stack));
});
propeller.push.state.pop_stack = (function propeller$push$state$pop_stack(state,stack){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,stack,cljs.core.rest);
});
propeller.push.state.pop_stack_many = (function propeller$push$state$pop_stack_many(state,stack,n){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,stack,(function (p1__13241_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,p1__13241_SHARP_);
}));
});
propeller.push.state.push_to_stack = (function propeller$push$state$push_to_stack(state,stack,item){
if((item == null)){
return state;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,stack,cljs.core.conj,item);
}
});
propeller.push.state.push_to_stack_many = (function propeller$push$state$push_to_stack_many(state,stack,items){
var items__$1 = ((cljs.core.coll_QMARK_(items))?items:(new cljs.core.List(null,items,null,(1),null)));
var items_no_nil = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (items__$1){
return (function (p1__13242_SHARP_){
return (!((p1__13242_SHARP_ == null)));
});})(items__$1))
,items__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,stack,cljs.core.into,cljs.core.reverse(items_no_nil));
});
