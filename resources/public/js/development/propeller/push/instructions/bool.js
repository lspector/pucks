// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.push.instructions.bool');
goog.require('cljs.core');
goog.require('propeller.push.utils.helpers');
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_and","boolean_and",-424086794),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6803_SHARP_,p2__6804_SHARP_){
var and__4120__auto__ = p1__6803_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return p2__6804_SHARP_;
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_or","boolean_or",-643195077),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6805_SHARP_,p2__6806_SHARP_){
var or__4131__auto__ = p1__6805_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p2__6806_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_not","boolean_not",1708346222),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,cljs.core.not,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_xor","boolean_xor",-594880640),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6807_SHARP_,p2__6808_SHARP_){
var or__4131__auto__ = (function (){var and__4120__auto__ = p1__6807_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,p2__6808_SHARP_);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core.not.call(null,p1__6807_SHARP_);
if(and__4120__auto__){
return p2__6808_SHARP_;
} else {
return and__4120__auto__;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_first_then_and","boolean_invert_first_then_and",108520427),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6809_SHARP_,p2__6810_SHARP_){
var and__4120__auto__ = p1__6809_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,p2__6810_SHARP_);
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_invert_second_then_and","boolean_invert_second_then_and",1891652663),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6811_SHARP_,p2__6812_SHARP_){
var and__4120__auto__ = cljs.core.not.call(null,p1__6811_SHARP_);
if(and__4120__auto__){
return p2__6812_SHARP_;
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_from_float","boolean_from_float",332233173),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6813_SHARP_){
return (!((p1__6813_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float","float",-1732389368)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));
cljs.core.swap_BANG_.call(null,propeller.push.core.instruction_table,cljs.core.assoc,new cljs.core.Keyword(null,"boolean_from_integer","boolean_from_integer",-1482282744),cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction.call(null,state,(function (p1__6814_SHARP_){
return (!((p1__6814_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer","integer",-604721710)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stacks","stacks",-456633410),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"integer","integer",-604721710),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null], null), null)], null)));

//# sourceMappingURL=bool.js.map
