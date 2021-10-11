// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.state');
goog.require('cljs.core');
if((typeof propeller !== 'undefined') && (typeof propeller.push !== 'undefined') && (typeof propeller.push.state !== 'undefined') && (typeof propeller.push.state.empty_state !== 'undefined')){
} else {
propeller.push.state.empty_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"exec","exec",1625568743),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283),new cljs.core.Keyword(null,"char","char",-641587586)],[cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.List.EMPTY,cljs.core.list(""),cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.List.EMPTY]);
}
if((typeof propeller !== 'undefined') && (typeof propeller.push !== 'undefined') && (typeof propeller.push.state !== 'undefined') && (typeof propeller.push.state.stacks !== 'undefined')){
} else {
propeller.push.state.stacks = cljs.core.set.call(null,cljs.core.keys.call(null,propeller.push.state.empty_state));
}
if((typeof propeller !== 'undefined') && (typeof propeller.push !== 'undefined') && (typeof propeller.push.state !== 'undefined') && (typeof propeller.push.state.vec_stacks !== 'undefined')){
} else {
propeller.push.state.vec_stacks = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector_boolean","vector_boolean",-1460932838),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"vector_float","vector_float",1822584650),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"vector_integer","vector_integer",-233801340),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"vector_string","vector_string",-1776005283),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
}
propeller.push.state.example_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"exec","exec",1625568743),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"integer","integer",-604721710),cljs.core.list((1),(2),(3),(4),(5),(6),(7)),new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.list("abc"),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in1","in1",-201447014),(4)], null)], null);
propeller.push.state.empty_stack_QMARK_ = (function propeller$push$state$empty_stack_QMARK_(state,stack){
return cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,state,stack));
});
propeller.push.state.stack_size = (function propeller$push$state$stack_size(state,stack){
return cljs.core.count.call(null,cljs.core.get.call(null,state,stack));
});
propeller.push.state.peek_stack = (function propeller$push$state$peek_stack(state,stack){
if(cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,state,stack))){
return new cljs.core.Keyword(null,"no-stack-item","no-stack-item",-1282481685);
} else {
return cljs.core.first.call(null,cljs.core.get.call(null,state,stack));
}
});
propeller.push.state.peek_stack_many = (function propeller$push$state$peek_stack_many(state,stack,n){
return cljs.core.take.call(null,n,cljs.core.get.call(null,state,stack));
});
propeller.push.state.pop_stack = (function propeller$push$state$pop_stack(state,stack){
return cljs.core.update.call(null,state,stack,cljs.core.rest);
});
propeller.push.state.pop_stack_many = (function propeller$push$state$pop_stack_many(state,stack,n){
return cljs.core.update.call(null,state,stack,(function (p1__4069_SHARP_){
return cljs.core.drop.call(null,n,p1__4069_SHARP_);
}));
});
propeller.push.state.push_to_stack = (function propeller$push$state$push_to_stack(state,stack,item){
if((item == null)){
return state;
} else {
return cljs.core.update.call(null,state,stack,cljs.core.conj,item);
}
});
propeller.push.state.push_to_stack_many = (function propeller$push$state$push_to_stack_many(state,stack,items){
var items__$1 = ((cljs.core.coll_QMARK_.call(null,items))?items:(new cljs.core.List(null,items,null,(1),null)));
var items_no_nil = cljs.core.filter.call(null,((function (items__$1){
return (function (p1__4070_SHARP_){
return (!((p1__4070_SHARP_ == null)));
});})(items__$1))
,items__$1);
return cljs.core.update.call(null,state,stack,cljs.core.into,cljs.core.reverse.call(null,items_no_nil));
});

//# sourceMappingURL=state.js.map
