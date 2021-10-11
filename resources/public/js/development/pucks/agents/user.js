// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.agents.user');
goog.require('cljs.core');
goog.require('pucks.util');
goog.require('pucks.agents.active');
pucks.agents.user.user_proposals = (function pucks$agents$user$user_proposals(p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceleration","acceleration",-1213888421),(0),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),pucks.util.relative_position__GT_rotation.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p))], null);
});
pucks.agents.user.user = (function pucks$agents$user$user(){
return cljs.core.merge.call(null,pucks.agents.active.active.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),true,new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),pucks.agents.user.user_proposals], null));
});

//# sourceMappingURL=user.js.map
