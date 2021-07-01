// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6411){
var map__6412 = p__6411;
var map__6412__$1 = (((((!((map__6412 == null))))?(((((map__6412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6412):map__6412);
var m = map__6412__$1;
var n = cljs.core.get.call(null,map__6412__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__6414_6446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6415_6447 = null;
var count__6416_6448 = (0);
var i__6417_6449 = (0);
while(true){
if((i__6417_6449 < count__6416_6448)){
var f_6450 = cljs.core._nth.call(null,chunk__6415_6447,i__6417_6449);
cljs.core.println.call(null,"  ",f_6450);


var G__6451 = seq__6414_6446;
var G__6452 = chunk__6415_6447;
var G__6453 = count__6416_6448;
var G__6454 = (i__6417_6449 + (1));
seq__6414_6446 = G__6451;
chunk__6415_6447 = G__6452;
count__6416_6448 = G__6453;
i__6417_6449 = G__6454;
continue;
} else {
var temp__5735__auto___6455 = cljs.core.seq.call(null,seq__6414_6446);
if(temp__5735__auto___6455){
var seq__6414_6456__$1 = temp__5735__auto___6455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6414_6456__$1)){
var c__4550__auto___6457 = cljs.core.chunk_first.call(null,seq__6414_6456__$1);
var G__6458 = cljs.core.chunk_rest.call(null,seq__6414_6456__$1);
var G__6459 = c__4550__auto___6457;
var G__6460 = cljs.core.count.call(null,c__4550__auto___6457);
var G__6461 = (0);
seq__6414_6446 = G__6458;
chunk__6415_6447 = G__6459;
count__6416_6448 = G__6460;
i__6417_6449 = G__6461;
continue;
} else {
var f_6462 = cljs.core.first.call(null,seq__6414_6456__$1);
cljs.core.println.call(null,"  ",f_6462);


var G__6463 = cljs.core.next.call(null,seq__6414_6456__$1);
var G__6464 = null;
var G__6465 = (0);
var G__6466 = (0);
seq__6414_6446 = G__6463;
chunk__6415_6447 = G__6464;
count__6416_6448 = G__6465;
i__6417_6449 = G__6466;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6467 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6467);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6467)))?cljs.core.second.call(null,arglists_6467):arglists_6467));
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
var seq__6418_6468 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6419_6469 = null;
var count__6420_6470 = (0);
var i__6421_6471 = (0);
while(true){
if((i__6421_6471 < count__6420_6470)){
var vec__6432_6472 = cljs.core._nth.call(null,chunk__6419_6469,i__6421_6471);
var name_6473 = cljs.core.nth.call(null,vec__6432_6472,(0),null);
var map__6435_6474 = cljs.core.nth.call(null,vec__6432_6472,(1),null);
var map__6435_6475__$1 = (((((!((map__6435_6474 == null))))?(((((map__6435_6474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6435_6474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6435_6474):map__6435_6474);
var doc_6476 = cljs.core.get.call(null,map__6435_6475__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6477 = cljs.core.get.call(null,map__6435_6475__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6473);

cljs.core.println.call(null," ",arglists_6477);

if(cljs.core.truth_(doc_6476)){
cljs.core.println.call(null," ",doc_6476);
} else {
}


var G__6478 = seq__6418_6468;
var G__6479 = chunk__6419_6469;
var G__6480 = count__6420_6470;
var G__6481 = (i__6421_6471 + (1));
seq__6418_6468 = G__6478;
chunk__6419_6469 = G__6479;
count__6420_6470 = G__6480;
i__6421_6471 = G__6481;
continue;
} else {
var temp__5735__auto___6482 = cljs.core.seq.call(null,seq__6418_6468);
if(temp__5735__auto___6482){
var seq__6418_6483__$1 = temp__5735__auto___6482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6418_6483__$1)){
var c__4550__auto___6484 = cljs.core.chunk_first.call(null,seq__6418_6483__$1);
var G__6485 = cljs.core.chunk_rest.call(null,seq__6418_6483__$1);
var G__6486 = c__4550__auto___6484;
var G__6487 = cljs.core.count.call(null,c__4550__auto___6484);
var G__6488 = (0);
seq__6418_6468 = G__6485;
chunk__6419_6469 = G__6486;
count__6420_6470 = G__6487;
i__6421_6471 = G__6488;
continue;
} else {
var vec__6437_6489 = cljs.core.first.call(null,seq__6418_6483__$1);
var name_6490 = cljs.core.nth.call(null,vec__6437_6489,(0),null);
var map__6440_6491 = cljs.core.nth.call(null,vec__6437_6489,(1),null);
var map__6440_6492__$1 = (((((!((map__6440_6491 == null))))?(((((map__6440_6491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6440_6491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6440_6491):map__6440_6491);
var doc_6493 = cljs.core.get.call(null,map__6440_6492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6494 = cljs.core.get.call(null,map__6440_6492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6490);

cljs.core.println.call(null," ",arglists_6494);

if(cljs.core.truth_(doc_6493)){
cljs.core.println.call(null," ",doc_6493);
} else {
}


var G__6495 = cljs.core.next.call(null,seq__6418_6483__$1);
var G__6496 = null;
var G__6497 = (0);
var G__6498 = (0);
seq__6418_6468 = G__6495;
chunk__6419_6469 = G__6496;
count__6420_6470 = G__6497;
i__6421_6471 = G__6498;
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

var seq__6442 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6443 = null;
var count__6444 = (0);
var i__6445 = (0);
while(true){
if((i__6445 < count__6444)){
var role = cljs.core._nth.call(null,chunk__6443,i__6445);
var temp__5735__auto___6499__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___6499__$1)){
var spec_6500 = temp__5735__auto___6499__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_6500));
} else {
}


var G__6501 = seq__6442;
var G__6502 = chunk__6443;
var G__6503 = count__6444;
var G__6504 = (i__6445 + (1));
seq__6442 = G__6501;
chunk__6443 = G__6502;
count__6444 = G__6503;
i__6445 = G__6504;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__6442);
if(temp__5735__auto____$1){
var seq__6442__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6442__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__6442__$1);
var G__6505 = cljs.core.chunk_rest.call(null,seq__6442__$1);
var G__6506 = c__4550__auto__;
var G__6507 = cljs.core.count.call(null,c__4550__auto__);
var G__6508 = (0);
seq__6442 = G__6505;
chunk__6443 = G__6506;
count__6444 = G__6507;
i__6445 = G__6508;
continue;
} else {
var role = cljs.core.first.call(null,seq__6442__$1);
var temp__5735__auto___6509__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___6509__$2)){
var spec_6510 = temp__5735__auto___6509__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_6510));
} else {
}


var G__6511 = cljs.core.next.call(null,seq__6442__$1);
var G__6512 = null;
var G__6513 = (0);
var G__6514 = (0);
seq__6442 = G__6511;
chunk__6443 = G__6512;
count__6444 = G__6513;
i__6445 = G__6514;
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
var G__6515 = cljs.core.conj.call(null,via,t);
var G__6516 = cljs.core.ex_cause.call(null,t);
via = G__6515;
t = G__6516;
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
var map__6519 = datafied_throwable;
var map__6519__$1 = (((((!((map__6519 == null))))?(((((map__6519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6519):map__6519);
var via = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__6520 = cljs.core.last.call(null,via);
var map__6520__$1 = (((((!((map__6520 == null))))?(((((map__6520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6520):map__6520);
var type = cljs.core.get.call(null,map__6520__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__6520__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__6520__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__6521 = data;
var map__6521__$1 = (((((!((map__6521 == null))))?(((((map__6521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6521):map__6521);
var problems = cljs.core.get.call(null,map__6521__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__6521__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__6521__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__6522 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__6522__$1 = (((((!((map__6522 == null))))?(((((map__6522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6522):map__6522);
var top_data = map__6522__$1;
var source = cljs.core.get.call(null,map__6522__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__6527 = phase;
var G__6527__$1 = (((G__6527 instanceof cljs.core.Keyword))?G__6527.fqn:null);
switch (G__6527__$1) {
case "read-source":
var map__6528 = data;
var map__6528__$1 = (((((!((map__6528 == null))))?(((((map__6528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6528):map__6528);
var line = cljs.core.get.call(null,map__6528__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__6528__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__6530 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__6530__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__6530,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__6530);
var G__6530__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__6530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__6530__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__6530__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__6530__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__6531 = top_data;
var G__6531__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__6531,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__6531);
var G__6531__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__6531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__6531__$1);
var G__6531__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__6531__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__6531__$2);
var G__6531__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__6531__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__6531__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__6531__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__6531__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__6532 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__6532,(0),null);
var method = cljs.core.nth.call(null,vec__6532,(1),null);
var file = cljs.core.nth.call(null,vec__6532,(2),null);
var line = cljs.core.nth.call(null,vec__6532,(3),null);
var G__6535 = top_data;
var G__6535__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__6535,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__6535);
var G__6535__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__6535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__6535__$1);
var G__6535__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__6535__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__6535__$2);
var G__6535__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__6535__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__6535__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__6535__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__6535__$4;
}

break;
case "execution":
var vec__6536 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__6536,(0),null);
var method = cljs.core.nth.call(null,vec__6536,(1),null);
var file = cljs.core.nth.call(null,vec__6536,(2),null);
var line = cljs.core.nth.call(null,vec__6536,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__6536,source__$1,method,file,line,G__6527,G__6527__$1,map__6519,map__6519__$1,via,trace,phase,map__6520,map__6520__$1,type,message,data,map__6521,map__6521__$1,problems,fn,caller,map__6522,map__6522__$1,top_data,source){
return (function (p1__6518_SHARP_){
var or__4131__auto__ = (p1__6518_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__6518_SHARP_);
}
});})(vec__6536,source__$1,method,file,line,G__6527,G__6527__$1,map__6519,map__6519__$1,via,trace,phase,map__6520,map__6520__$1,type,message,data,map__6521,map__6521__$1,problems,fn,caller,map__6522,map__6522__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__6539 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__6539__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__6539,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__6539);
var G__6539__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__6539__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__6539__$1);
var G__6539__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__6539__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__6539__$2);
var G__6539__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__6539__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__6539__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__6539__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__6539__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6527__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__6543){
var map__6544 = p__6543;
var map__6544__$1 = (((((!((map__6544 == null))))?(((((map__6544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6544):map__6544);
var triage_data = map__6544__$1;
var phase = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__6544__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__6546 = phase;
var G__6546__$1 = (((G__6546 instanceof cljs.core.Keyword))?G__6546.fqn:null);
switch (G__6546__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6547_6556 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6548_6557 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6549_6558 = true;
var _STAR_print_fn_STAR__temp_val__6550_6559 = ((function (_STAR_print_newline_STAR__orig_val__6547_6556,_STAR_print_fn_STAR__orig_val__6548_6557,_STAR_print_newline_STAR__temp_val__6549_6558,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__6547_6556,_STAR_print_fn_STAR__orig_val__6548_6557,_STAR_print_newline_STAR__temp_val__6549_6558,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6549_6558;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6550_6559;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__6547_6556,_STAR_print_fn_STAR__orig_val__6548_6557,_STAR_print_newline_STAR__temp_val__6549_6558,_STAR_print_fn_STAR__temp_val__6550_6559,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__6547_6556,_STAR_print_fn_STAR__orig_val__6548_6557,_STAR_print_newline_STAR__temp_val__6549_6558,_STAR_print_fn_STAR__temp_val__6550_6559,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__6541_SHARP_){
return cljs.core.dissoc.call(null,p1__6541_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__6547_6556,_STAR_print_fn_STAR__orig_val__6548_6557,_STAR_print_newline_STAR__temp_val__6549_6558,_STAR_print_fn_STAR__temp_val__6550_6559,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__6547_6556,_STAR_print_fn_STAR__orig_val__6548_6557,_STAR_print_newline_STAR__temp_val__6549_6558,_STAR_print_fn_STAR__temp_val__6550_6559,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6548_6557;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6547_6556;
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
var _STAR_print_newline_STAR__orig_val__6551_6560 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6552_6561 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6553_6562 = true;
var _STAR_print_fn_STAR__temp_val__6554_6563 = ((function (_STAR_print_newline_STAR__orig_val__6551_6560,_STAR_print_fn_STAR__orig_val__6552_6561,_STAR_print_newline_STAR__temp_val__6553_6562,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__6551_6560,_STAR_print_fn_STAR__orig_val__6552_6561,_STAR_print_newline_STAR__temp_val__6553_6562,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6553_6562;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6554_6563;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__6551_6560,_STAR_print_fn_STAR__orig_val__6552_6561,_STAR_print_newline_STAR__temp_val__6553_6562,_STAR_print_fn_STAR__temp_val__6554_6563,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__6551_6560,_STAR_print_fn_STAR__orig_val__6552_6561,_STAR_print_newline_STAR__temp_val__6553_6562,_STAR_print_fn_STAR__temp_val__6554_6563,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__6542_SHARP_){
return cljs.core.dissoc.call(null,p1__6542_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__6551_6560,_STAR_print_fn_STAR__orig_val__6552_6561,_STAR_print_newline_STAR__temp_val__6553_6562,_STAR_print_fn_STAR__temp_val__6554_6563,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__6551_6560,_STAR_print_fn_STAR__orig_val__6552_6561,_STAR_print_newline_STAR__temp_val__6553_6562,_STAR_print_fn_STAR__temp_val__6554_6563,sb__4661__auto__,G__6546,G__6546__$1,loc,class_name,simple_class,cause_type,format,map__6544,map__6544__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6552_6561;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6551_6560;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6546__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
