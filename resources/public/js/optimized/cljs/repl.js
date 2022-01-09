// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12896){
var map__12897 = p__12896;
var map__12897__$1 = (((((!((map__12897 == null))))?(((((map__12897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12897):map__12897);
var m = map__12897__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12897__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12897__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__12899_12931 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__12900_12932 = null;
var count__12901_12933 = (0);
var i__12902_12934 = (0);
while(true){
if((i__12902_12934 < count__12901_12933)){
var f_12935 = chunk__12900_12932.cljs$core$IIndexed$_nth$arity$2(null,i__12902_12934);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12935], 0));


var G__12936 = seq__12899_12931;
var G__12937 = chunk__12900_12932;
var G__12938 = count__12901_12933;
var G__12939 = (i__12902_12934 + (1));
seq__12899_12931 = G__12936;
chunk__12900_12932 = G__12937;
count__12901_12933 = G__12938;
i__12902_12934 = G__12939;
continue;
} else {
var temp__5735__auto___12940 = cljs.core.seq(seq__12899_12931);
if(temp__5735__auto___12940){
var seq__12899_12941__$1 = temp__5735__auto___12940;
if(cljs.core.chunked_seq_QMARK_(seq__12899_12941__$1)){
var c__4550__auto___12942 = cljs.core.chunk_first(seq__12899_12941__$1);
var G__12943 = cljs.core.chunk_rest(seq__12899_12941__$1);
var G__12944 = c__4550__auto___12942;
var G__12945 = cljs.core.count(c__4550__auto___12942);
var G__12946 = (0);
seq__12899_12931 = G__12943;
chunk__12900_12932 = G__12944;
count__12901_12933 = G__12945;
i__12902_12934 = G__12946;
continue;
} else {
var f_12947 = cljs.core.first(seq__12899_12941__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_12947], 0));


var G__12948 = cljs.core.next(seq__12899_12941__$1);
var G__12949 = null;
var G__12950 = (0);
var G__12951 = (0);
seq__12899_12931 = G__12948;
chunk__12900_12932 = G__12949;
count__12901_12933 = G__12950;
i__12902_12934 = G__12951;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12952 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_12952], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_12952)))?cljs.core.second(arglists_12952):arglists_12952)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__12903_12953 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__12904_12954 = null;
var count__12905_12955 = (0);
var i__12906_12956 = (0);
while(true){
if((i__12906_12956 < count__12905_12955)){
var vec__12917_12957 = chunk__12904_12954.cljs$core$IIndexed$_nth$arity$2(null,i__12906_12956);
var name_12958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917_12957,(0),null);
var map__12920_12959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917_12957,(1),null);
var map__12920_12960__$1 = (((((!((map__12920_12959 == null))))?(((((map__12920_12959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12920_12959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12920_12959):map__12920_12959);
var doc_12961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920_12960__$1,cljs.core.cst$kw$doc);
var arglists_12962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920_12960__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12958], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12962], 0));

if(cljs.core.truth_(doc_12961)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12961], 0));
} else {
}


var G__12963 = seq__12903_12953;
var G__12964 = chunk__12904_12954;
var G__12965 = count__12905_12955;
var G__12966 = (i__12906_12956 + (1));
seq__12903_12953 = G__12963;
chunk__12904_12954 = G__12964;
count__12905_12955 = G__12965;
i__12906_12956 = G__12966;
continue;
} else {
var temp__5735__auto___12967 = cljs.core.seq(seq__12903_12953);
if(temp__5735__auto___12967){
var seq__12903_12968__$1 = temp__5735__auto___12967;
if(cljs.core.chunked_seq_QMARK_(seq__12903_12968__$1)){
var c__4550__auto___12969 = cljs.core.chunk_first(seq__12903_12968__$1);
var G__12970 = cljs.core.chunk_rest(seq__12903_12968__$1);
var G__12971 = c__4550__auto___12969;
var G__12972 = cljs.core.count(c__4550__auto___12969);
var G__12973 = (0);
seq__12903_12953 = G__12970;
chunk__12904_12954 = G__12971;
count__12905_12955 = G__12972;
i__12906_12956 = G__12973;
continue;
} else {
var vec__12922_12974 = cljs.core.first(seq__12903_12968__$1);
var name_12975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12922_12974,(0),null);
var map__12925_12976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12922_12974,(1),null);
var map__12925_12977__$1 = (((((!((map__12925_12976 == null))))?(((((map__12925_12976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12925_12976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12925_12976):map__12925_12976);
var doc_12978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925_12977__$1,cljs.core.cst$kw$doc);
var arglists_12979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12925_12977__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_12975], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_12979], 0));

if(cljs.core.truth_(doc_12978)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_12978], 0));
} else {
}


var G__12980 = cljs.core.next(seq__12903_12968__$1);
var G__12981 = null;
var G__12982 = (0);
var G__12983 = (0);
seq__12903_12953 = G__12980;
chunk__12904_12954 = G__12981;
count__12905_12955 = G__12982;
i__12906_12956 = G__12983;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__12927 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__12928 = null;
var count__12929 = (0);
var i__12930 = (0);
while(true){
if((i__12930 < count__12929)){
var role = chunk__12928.cljs$core$IIndexed$_nth$arity$2(null,i__12930);
var temp__5735__auto___12984__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___12984__$1)){
var spec_12985 = temp__5735__auto___12984__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_12985)], 0));
} else {
}


var G__12986 = seq__12927;
var G__12987 = chunk__12928;
var G__12988 = count__12929;
var G__12989 = (i__12930 + (1));
seq__12927 = G__12986;
chunk__12928 = G__12987;
count__12929 = G__12988;
i__12930 = G__12989;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__12927);
if(temp__5735__auto____$1){
var seq__12927__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__12927__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__12927__$1);
var G__12990 = cljs.core.chunk_rest(seq__12927__$1);
var G__12991 = c__4550__auto__;
var G__12992 = cljs.core.count(c__4550__auto__);
var G__12993 = (0);
seq__12927 = G__12990;
chunk__12928 = G__12991;
count__12929 = G__12992;
i__12930 = G__12993;
continue;
} else {
var role = cljs.core.first(seq__12927__$1);
var temp__5735__auto___12994__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___12994__$2)){
var spec_12995 = temp__5735__auto___12994__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_12995)], 0));
} else {
}


var G__12996 = cljs.core.next(seq__12927__$1);
var G__12997 = null;
var G__12998 = (0);
var G__12999 = (0);
seq__12927 = G__12996;
chunk__12928 = G__12997;
count__12929 = G__12998;
i__12930 = G__12999;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,(((t instanceof cljs.core.ExceptionInfo))?cljs.core.cst$sym$ExceptionInfo:(((t instanceof EvalError))?cljs.core.cst$sym$js_SLASH_EvalError:(((t instanceof RangeError))?cljs.core.cst$sym$js_SLASH_RangeError:(((t instanceof ReferenceError))?cljs.core.cst$sym$js_SLASH_ReferenceError:(((t instanceof SyntaxError))?cljs.core.cst$sym$js_SLASH_SyntaxError:(((t instanceof URIError))?cljs.core.cst$sym$js_SLASH_URIError:(((t instanceof Error))?cljs.core.cst$sym$js_SLASH_Error:null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__13000 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__13001 = cljs.core.ex_cause(t);
via = G__13000;
t = G__13001;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,phase], null);
} else {
return null;
}
})()], 0));
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
var map__13004 = datafied_throwable;
var map__13004__$1 = (((((!((map__13004 == null))))?(((((map__13004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13004):map__13004);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13004__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13004__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13004__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__13005 = cljs.core.last(via);
var map__13005__$1 = (((((!((map__13005 == null))))?(((((map__13005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13005):map__13005);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13005__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13005__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13005__$1,cljs.core.cst$kw$data);
var map__13006 = data;
var map__13006__$1 = (((((!((map__13006 == null))))?(((((map__13006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13006):map__13006);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13006__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13006__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13006__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__13007 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__13007__$1 = (((((!((map__13007 == null))))?(((((map__13007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13007):map__13007);
var top_data = map__13007__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13007__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__13012 = phase;
var G__13012__$1 = (((G__13012 instanceof cljs.core.Keyword))?G__13012.fqn:null);
switch (G__13012__$1) {
case "read-source":
var map__13013 = data;
var map__13013__$1 = (((((!((map__13013 == null))))?(((((map__13013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13013):map__13013);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13013__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13013__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__13015 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__13015__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13015,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__13015);
var G__13015__$2 = (cljs.core.truth_((function (){var fexpr__13016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__13016.cljs$core$IFn$_invoke$arity$1 ? fexpr__13016.cljs$core$IFn$_invoke$arity$1(source) : fexpr__13016.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__13015__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__13015__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13015__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__13015__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__13017 = top_data;
var G__13017__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13017,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__13017);
var G__13017__$2 = (cljs.core.truth_((function (){var fexpr__13018 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__13018.cljs$core$IFn$_invoke$arity$1 ? fexpr__13018.cljs$core$IFn$_invoke$arity$1(source) : fexpr__13018.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__13017__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__13017__$1);
var G__13017__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13017__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__13017__$2);
var G__13017__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13017__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__13017__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13017__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__13017__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__13019 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13019,(3),null);
var G__13022 = top_data;
var G__13022__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13022,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__13022);
var G__13022__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13022__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__13022__$1);
var G__13022__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13022__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__13022__$2);
var G__13022__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13022__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__13022__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13022__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__13022__$4;
}

break;
case "execution":
var vec__13023 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__13023,source__$1,method,file,line,G__13012,G__13012__$1,map__13004,map__13004__$1,via,trace,phase,map__13005,map__13005__$1,type,message,data,map__13006,map__13006__$1,problems,fn,caller,map__13007,map__13007__$1,top_data,source){
return (function (p1__13003_SHARP_){
var or__4131__auto__ = (p1__13003_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__13027 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__13027.cljs$core$IFn$_invoke$arity$1 ? fexpr__13027.cljs$core$IFn$_invoke$arity$1(p1__13003_SHARP_) : fexpr__13027.call(null,p1__13003_SHARP_));
}
});})(vec__13023,source__$1,method,file,line,G__13012,G__13012__$1,map__13004,map__13004__$1,via,trace,phase,map__13005,map__13005__$1,type,message,data,map__13006,map__13006__$1,problems,fn,caller,map__13007,map__13007__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__13028 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__13028__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13028,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__13028);
var G__13028__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13028__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__13028__$1);
var G__13028__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13028__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__13028__$2);
var G__13028__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13028__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__13028__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13028__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__13028__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13012__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__13032){
var map__13033 = p__13032;
var map__13033__$1 = (((((!((map__13033 == null))))?(((((map__13033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13033):map__13033);
var triage_data = map__13033__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13033__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
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
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__13035 = phase;
var G__13035__$1 = (((G__13035 instanceof cljs.core.Keyword))?G__13035.fqn:null);
switch (G__13035__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__13036 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__13037 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__13038 = loc;
var G__13039 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13040_13073 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13041_13074 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13042_13075 = true;
var _STAR_print_fn_STAR__temp_val__13043_13076 = ((function (_STAR_print_newline_STAR__orig_val__13040_13073,_STAR_print_fn_STAR__orig_val__13041_13074,_STAR_print_newline_STAR__temp_val__13042_13075,sb__4661__auto__,G__13036,G__13037,G__13038,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13040_13073,_STAR_print_fn_STAR__orig_val__13041_13074,_STAR_print_newline_STAR__temp_val__13042_13075,sb__4661__auto__,G__13036,G__13037,G__13038,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13042_13075;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13043_13076;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__13040_13073,_STAR_print_fn_STAR__orig_val__13041_13074,_STAR_print_newline_STAR__temp_val__13042_13075,_STAR_print_fn_STAR__temp_val__13043_13076,sb__4661__auto__,G__13036,G__13037,G__13038,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__13040_13073,_STAR_print_fn_STAR__orig_val__13041_13074,_STAR_print_newline_STAR__temp_val__13042_13075,_STAR_print_fn_STAR__temp_val__13043_13076,sb__4661__auto__,G__13036,G__13037,G__13038,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__13030_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13030_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__13040_13073,_STAR_print_fn_STAR__orig_val__13041_13074,_STAR_print_newline_STAR__temp_val__13042_13075,_STAR_print_fn_STAR__temp_val__13043_13076,sb__4661__auto__,G__13036,G__13037,G__13038,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__13040_13073,_STAR_print_fn_STAR__orig_val__13041_13074,_STAR_print_newline_STAR__temp_val__13042_13075,_STAR_print_fn_STAR__temp_val__13043_13076,sb__4661__auto__,G__13036,G__13037,G__13038,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13041_13074;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13040_13073;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__13036,G__13037,G__13038,G__13039) : format.call(null,G__13036,G__13037,G__13038,G__13039));

break;
case "macroexpansion":
var G__13044 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__13045 = cause_type;
var G__13046 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__13047 = loc;
var G__13048 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__13044,G__13045,G__13046,G__13047,G__13048) : format.call(null,G__13044,G__13045,G__13046,G__13047,G__13048));

break;
case "compile-syntax-check":
var G__13049 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__13050 = cause_type;
var G__13051 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__13052 = loc;
var G__13053 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__13049,G__13050,G__13051,G__13052,G__13053) : format.call(null,G__13049,G__13050,G__13051,G__13052,G__13053));

break;
case "compilation":
var G__13054 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__13055 = cause_type;
var G__13056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__13057 = loc;
var G__13058 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__13054,G__13055,G__13056,G__13057,G__13058) : format.call(null,G__13054,G__13055,G__13056,G__13057,G__13058));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__13059 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__13060 = symbol;
var G__13061 = loc;
var G__13062 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13063_13077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13064_13078 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13065_13079 = true;
var _STAR_print_fn_STAR__temp_val__13066_13080 = ((function (_STAR_print_newline_STAR__orig_val__13063_13077,_STAR_print_fn_STAR__orig_val__13064_13078,_STAR_print_newline_STAR__temp_val__13065_13079,sb__4661__auto__,G__13059,G__13060,G__13061,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13063_13077,_STAR_print_fn_STAR__orig_val__13064_13078,_STAR_print_newline_STAR__temp_val__13065_13079,sb__4661__auto__,G__13059,G__13060,G__13061,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13065_13079;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13066_13080;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,((function (_STAR_print_newline_STAR__orig_val__13063_13077,_STAR_print_fn_STAR__orig_val__13064_13078,_STAR_print_newline_STAR__temp_val__13065_13079,_STAR_print_fn_STAR__temp_val__13066_13080,sb__4661__auto__,G__13059,G__13060,G__13061,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__13063_13077,_STAR_print_fn_STAR__orig_val__13064_13078,_STAR_print_newline_STAR__temp_val__13065_13079,_STAR_print_fn_STAR__temp_val__13066_13080,sb__4661__auto__,G__13059,G__13060,G__13061,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__13031_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13031_SHARP_,cljs.core.cst$kw$in);
});})(_STAR_print_newline_STAR__orig_val__13063_13077,_STAR_print_fn_STAR__orig_val__13064_13078,_STAR_print_newline_STAR__temp_val__13065_13079,_STAR_print_fn_STAR__temp_val__13066_13080,sb__4661__auto__,G__13059,G__13060,G__13061,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__13063_13077,_STAR_print_fn_STAR__orig_val__13064_13078,_STAR_print_newline_STAR__temp_val__13065_13079,_STAR_print_fn_STAR__temp_val__13066_13080,sb__4661__auto__,G__13059,G__13060,G__13061,G__13035,G__13035__$1,loc,class_name,simple_class,cause_type,format,map__13033,map__13033__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13064_13078;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13063_13077;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__13059,G__13060,G__13061,G__13062) : format.call(null,G__13059,G__13060,G__13061,G__13062));
} else {
var G__13067 = "Execution error%s at %s(%s).\n%s\n";
var G__13068 = cause_type;
var G__13069 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__13070 = loc;
var G__13071 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__13067,G__13068,G__13069,G__13070,G__13071) : format.call(null,G__13067,G__13068,G__13069,G__13070,G__13071));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13035__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
