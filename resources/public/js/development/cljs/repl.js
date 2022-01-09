// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3491){
var map__3492 = p__3491;
var map__3492__$1 = (((((!((map__3492 == null))))?(((((map__3492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3492):map__3492);
var m = map__3492__$1;
var n = cljs.core.get.call(null,map__3492__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3494_3526 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3495_3527 = null;
var count__3496_3528 = (0);
var i__3497_3529 = (0);
while(true){
if((i__3497_3529 < count__3496_3528)){
var f_3530 = cljs.core._nth.call(null,chunk__3495_3527,i__3497_3529);
cljs.core.println.call(null,"  ",f_3530);


var G__3531 = seq__3494_3526;
var G__3532 = chunk__3495_3527;
var G__3533 = count__3496_3528;
var G__3534 = (i__3497_3529 + (1));
seq__3494_3526 = G__3531;
chunk__3495_3527 = G__3532;
count__3496_3528 = G__3533;
i__3497_3529 = G__3534;
continue;
} else {
var temp__5735__auto___3535 = cljs.core.seq.call(null,seq__3494_3526);
if(temp__5735__auto___3535){
var seq__3494_3536__$1 = temp__5735__auto___3535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3494_3536__$1)){
var c__4550__auto___3537 = cljs.core.chunk_first.call(null,seq__3494_3536__$1);
var G__3538 = cljs.core.chunk_rest.call(null,seq__3494_3536__$1);
var G__3539 = c__4550__auto___3537;
var G__3540 = cljs.core.count.call(null,c__4550__auto___3537);
var G__3541 = (0);
seq__3494_3526 = G__3538;
chunk__3495_3527 = G__3539;
count__3496_3528 = G__3540;
i__3497_3529 = G__3541;
continue;
} else {
var f_3542 = cljs.core.first.call(null,seq__3494_3536__$1);
cljs.core.println.call(null,"  ",f_3542);


var G__3543 = cljs.core.next.call(null,seq__3494_3536__$1);
var G__3544 = null;
var G__3545 = (0);
var G__3546 = (0);
seq__3494_3526 = G__3543;
chunk__3495_3527 = G__3544;
count__3496_3528 = G__3545;
i__3497_3529 = G__3546;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3547 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3547);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3547)))?cljs.core.second.call(null,arglists_3547):arglists_3547));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3498_3548 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3499_3549 = null;
var count__3500_3550 = (0);
var i__3501_3551 = (0);
while(true){
if((i__3501_3551 < count__3500_3550)){
var vec__3512_3552 = cljs.core._nth.call(null,chunk__3499_3549,i__3501_3551);
var name_3553 = cljs.core.nth.call(null,vec__3512_3552,(0),null);
var map__3515_3554 = cljs.core.nth.call(null,vec__3512_3552,(1),null);
var map__3515_3555__$1 = (((((!((map__3515_3554 == null))))?(((((map__3515_3554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3515_3554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3515_3554):map__3515_3554);
var doc_3556 = cljs.core.get.call(null,map__3515_3555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3557 = cljs.core.get.call(null,map__3515_3555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3553);

cljs.core.println.call(null," ",arglists_3557);

if(cljs.core.truth_(doc_3556)){
cljs.core.println.call(null," ",doc_3556);
} else {
}


var G__3558 = seq__3498_3548;
var G__3559 = chunk__3499_3549;
var G__3560 = count__3500_3550;
var G__3561 = (i__3501_3551 + (1));
seq__3498_3548 = G__3558;
chunk__3499_3549 = G__3559;
count__3500_3550 = G__3560;
i__3501_3551 = G__3561;
continue;
} else {
var temp__5735__auto___3562 = cljs.core.seq.call(null,seq__3498_3548);
if(temp__5735__auto___3562){
var seq__3498_3563__$1 = temp__5735__auto___3562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3498_3563__$1)){
var c__4550__auto___3564 = cljs.core.chunk_first.call(null,seq__3498_3563__$1);
var G__3565 = cljs.core.chunk_rest.call(null,seq__3498_3563__$1);
var G__3566 = c__4550__auto___3564;
var G__3567 = cljs.core.count.call(null,c__4550__auto___3564);
var G__3568 = (0);
seq__3498_3548 = G__3565;
chunk__3499_3549 = G__3566;
count__3500_3550 = G__3567;
i__3501_3551 = G__3568;
continue;
} else {
var vec__3517_3569 = cljs.core.first.call(null,seq__3498_3563__$1);
var name_3570 = cljs.core.nth.call(null,vec__3517_3569,(0),null);
var map__3520_3571 = cljs.core.nth.call(null,vec__3517_3569,(1),null);
var map__3520_3572__$1 = (((((!((map__3520_3571 == null))))?(((((map__3520_3571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3520_3571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3520_3571):map__3520_3571);
var doc_3573 = cljs.core.get.call(null,map__3520_3572__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3574 = cljs.core.get.call(null,map__3520_3572__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3570);

cljs.core.println.call(null," ",arglists_3574);

if(cljs.core.truth_(doc_3573)){
cljs.core.println.call(null," ",doc_3573);
} else {
}


var G__3575 = cljs.core.next.call(null,seq__3498_3563__$1);
var G__3576 = null;
var G__3577 = (0);
var G__3578 = (0);
seq__3498_3548 = G__3575;
chunk__3499_3549 = G__3576;
count__3500_3550 = G__3577;
i__3501_3551 = G__3578;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__3522 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3523 = null;
var count__3524 = (0);
var i__3525 = (0);
while(true){
if((i__3525 < count__3524)){
var role = cljs.core._nth.call(null,chunk__3523,i__3525);
var temp__5735__auto___3579__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___3579__$1)){
var spec_3580 = temp__5735__auto___3579__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3580));
} else {
}


var G__3581 = seq__3522;
var G__3582 = chunk__3523;
var G__3583 = count__3524;
var G__3584 = (i__3525 + (1));
seq__3522 = G__3581;
chunk__3523 = G__3582;
count__3524 = G__3583;
i__3525 = G__3584;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__3522);
if(temp__5735__auto____$1){
var seq__3522__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3522__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__3522__$1);
var G__3585 = cljs.core.chunk_rest.call(null,seq__3522__$1);
var G__3586 = c__4550__auto__;
var G__3587 = cljs.core.count.call(null,c__4550__auto__);
var G__3588 = (0);
seq__3522 = G__3585;
chunk__3523 = G__3586;
count__3524 = G__3587;
i__3525 = G__3588;
continue;
} else {
var role = cljs.core.first.call(null,seq__3522__$1);
var temp__5735__auto___3589__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___3589__$2)){
var spec_3590 = temp__5735__auto___3589__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3590));
} else {
}


var G__3591 = cljs.core.next.call(null,seq__3522__$1);
var G__3592 = null;
var G__3593 = (0);
var G__3594 = (0);
seq__3522 = G__3591;
chunk__3523 = G__3592;
count__3524 = G__3593;
i__3525 = G__3594;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__3595 = cljs.core.conj.call(null,via,t);
var G__3596 = cljs.core.ex_cause.call(null,t);
via = G__3595;
t = G__3596;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__3599 = datafied_throwable;
var map__3599__$1 = (((((!((map__3599 == null))))?(((((map__3599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3599):map__3599);
var via = cljs.core.get.call(null,map__3599__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__3599__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__3599__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__3600 = cljs.core.last.call(null,via);
var map__3600__$1 = (((((!((map__3600 == null))))?(((((map__3600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3600):map__3600);
var type = cljs.core.get.call(null,map__3600__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__3600__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__3600__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__3601 = data;
var map__3601__$1 = (((((!((map__3601 == null))))?(((((map__3601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3601):map__3601);
var problems = cljs.core.get.call(null,map__3601__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__3601__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__3601__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__3602 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__3602__$1 = (((((!((map__3602 == null))))?(((((map__3602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3602):map__3602);
var top_data = map__3602__$1;
var source = cljs.core.get.call(null,map__3602__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__3607 = phase;
var G__3607__$1 = (((G__3607 instanceof cljs.core.Keyword))?G__3607.fqn:null);
switch (G__3607__$1) {
case "read-source":
var map__3608 = data;
var map__3608__$1 = (((((!((map__3608 == null))))?(((((map__3608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3608):map__3608);
var line = cljs.core.get.call(null,map__3608__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__3608__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__3610 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__3610__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__3610,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__3610);
var G__3610__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__3610__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__3610__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__3610__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__3610__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__3611 = top_data;
var G__3611__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__3611,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__3611);
var G__3611__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__3611__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__3611__$1);
var G__3611__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__3611__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__3611__$2);
var G__3611__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__3611__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__3611__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__3611__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__3611__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__3612 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__3612,(0),null);
var method = cljs.core.nth.call(null,vec__3612,(1),null);
var file = cljs.core.nth.call(null,vec__3612,(2),null);
var line = cljs.core.nth.call(null,vec__3612,(3),null);
var G__3615 = top_data;
var G__3615__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__3615,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__3615);
var G__3615__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__3615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__3615__$1);
var G__3615__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__3615__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__3615__$2);
var G__3615__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__3615__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__3615__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__3615__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__3615__$4;
}

break;
case "execution":
var vec__3616 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__3616,(0),null);
var method = cljs.core.nth.call(null,vec__3616,(1),null);
var file = cljs.core.nth.call(null,vec__3616,(2),null);
var line = cljs.core.nth.call(null,vec__3616,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__3616,source__$1,method,file,line,G__3607,G__3607__$1,map__3599,map__3599__$1,via,trace,phase,map__3600,map__3600__$1,type,message,data,map__3601,map__3601__$1,problems,fn,caller,map__3602,map__3602__$1,top_data,source){
return (function (p1__3598_SHARP_){
var or__4131__auto__ = (p1__3598_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__3598_SHARP_);
}
});})(vec__3616,source__$1,method,file,line,G__3607,G__3607__$1,map__3599,map__3599__$1,via,trace,phase,map__3600,map__3600__$1,type,message,data,map__3601,map__3601__$1,problems,fn,caller,map__3602,map__3602__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__3619 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__3619__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__3619,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__3619);
var G__3619__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__3619__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__3619__$1);
var G__3619__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__3619__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__3619__$2);
var G__3619__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__3619__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__3619__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__3619__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__3619__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3607__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__3623){
var map__3624 = p__3623;
var map__3624__$1 = (((((!((map__3624 == null))))?(((((map__3624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3624):map__3624);
var triage_data = map__3624__$1;
var phase = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__3626 = phase;
var G__3626__$1 = (((G__3626 instanceof cljs.core.Keyword))?G__3626.fqn:null);
switch (G__3626__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3627_3636 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3628_3637 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3629_3638 = true;
var _STAR_print_fn_STAR__temp_val__3630_3639 = ((function (_STAR_print_newline_STAR__orig_val__3627_3636,_STAR_print_fn_STAR__orig_val__3628_3637,_STAR_print_newline_STAR__temp_val__3629_3638,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__3627_3636,_STAR_print_fn_STAR__orig_val__3628_3637,_STAR_print_newline_STAR__temp_val__3629_3638,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3629_3638;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3630_3639;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__3627_3636,_STAR_print_fn_STAR__orig_val__3628_3637,_STAR_print_newline_STAR__temp_val__3629_3638,_STAR_print_fn_STAR__temp_val__3630_3639,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__3627_3636,_STAR_print_fn_STAR__orig_val__3628_3637,_STAR_print_newline_STAR__temp_val__3629_3638,_STAR_print_fn_STAR__temp_val__3630_3639,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__3621_SHARP_){
return cljs.core.dissoc.call(null,p1__3621_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__3627_3636,_STAR_print_fn_STAR__orig_val__3628_3637,_STAR_print_newline_STAR__temp_val__3629_3638,_STAR_print_fn_STAR__temp_val__3630_3639,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__3627_3636,_STAR_print_fn_STAR__orig_val__3628_3637,_STAR_print_newline_STAR__temp_val__3629_3638,_STAR_print_fn_STAR__temp_val__3630_3639,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3628_3637;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3627_3636;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3631_3640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3632_3641 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3633_3642 = true;
var _STAR_print_fn_STAR__temp_val__3634_3643 = ((function (_STAR_print_newline_STAR__orig_val__3631_3640,_STAR_print_fn_STAR__orig_val__3632_3641,_STAR_print_newline_STAR__temp_val__3633_3642,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__3631_3640,_STAR_print_fn_STAR__orig_val__3632_3641,_STAR_print_newline_STAR__temp_val__3633_3642,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3633_3642;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3634_3643;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__3631_3640,_STAR_print_fn_STAR__orig_val__3632_3641,_STAR_print_newline_STAR__temp_val__3633_3642,_STAR_print_fn_STAR__temp_val__3634_3643,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__3631_3640,_STAR_print_fn_STAR__orig_val__3632_3641,_STAR_print_newline_STAR__temp_val__3633_3642,_STAR_print_fn_STAR__temp_val__3634_3643,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__3622_SHARP_){
return cljs.core.dissoc.call(null,p1__3622_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__3631_3640,_STAR_print_fn_STAR__orig_val__3632_3641,_STAR_print_newline_STAR__temp_val__3633_3642,_STAR_print_fn_STAR__temp_val__3634_3643,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__3631_3640,_STAR_print_fn_STAR__orig_val__3632_3641,_STAR_print_newline_STAR__temp_val__3633_3642,_STAR_print_fn_STAR__temp_val__3634_3643,sb__4661__auto__,G__3626,G__3626__$1,loc,class_name,simple_class,cause_type,format,map__3624,map__3624__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3632_3641;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3631_3640;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3626__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
