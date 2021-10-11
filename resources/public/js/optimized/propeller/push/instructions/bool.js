// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.push.instructions.bool');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('propeller.push.utils.helpers');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_and,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15936_SHARP_,p2__15937_SHARP_){
var and__4120__auto__ = p1__15936_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return p2__15937_SHARP_;
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_or,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15938_SHARP_,p2__15939_SHARP_){
var or__4131__auto__ = p1__15938_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return p2__15939_SHARP_;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_not,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,cljs.core.not,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_xor,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15940_SHARP_,p2__15941_SHARP_){
var or__4131__auto__ = (function (){var and__4120__auto__ = p1__15940_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(p2__15941_SHARP_);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core.not(p1__15940_SHARP_);
if(and__4120__auto__){
return p2__15941_SHARP_;
} else {
return and__4120__auto__;
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_invert_first_then_and,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15942_SHARP_,p2__15943_SHARP_){
var and__4120__auto__ = p1__15942_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(p2__15943_SHARP_);
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_invert_second_then_and,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15944_SHARP_,p2__15945_SHARP_){
var and__4120__auto__ = cljs.core.not(p1__15944_SHARP_);
if(and__4120__auto__){
return p2__15945_SHARP_;
} else {
return and__4120__auto__;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$boolean,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_from_float,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15946_SHARP_){
return (!((p1__15946_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$float,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(propeller.push.core.instruction_table,cljs.core.assoc,cljs.core.cst$kw$boolean_from_integer,cljs.core.with_meta((function (state){
return propeller.push.utils.helpers.make_instruction(state,(function (p1__15947_SHARP_){
return (!((p1__15947_SHARP_ === (0))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer], null),cljs.core.cst$kw$boolean);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stacks,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$integer,null,cljs.core.cst$kw$boolean,null], null), null)], null)));
