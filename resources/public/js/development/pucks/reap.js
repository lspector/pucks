// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.reap');
goog.require('cljs.core');
goog.require('pucks.globals');
/**
 * Converts agents with no remaining energy to corpses and eventually
 * removes them from the world.
 */
pucks.reap.reap = (function pucks$reap$reap(){
return cljs.core.swap_BANG_.call(null,pucks.globals.all_agents,(function (objs){
var with_corpses = cljs.core.mapv.call(null,(function (p1__4052_SHARP_){
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"mobile","mobile",1403078170).cljs$core$IFn$_invoke$arity$1(p1__4052_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return (!((new cljs.core.Keyword(null,"energy","energy",129856526).cljs$core$IFn$_invoke$arity$1(p1__4052_SHARP_) > (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.call(null,p1__4052_SHARP_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"corpse","corpse",875155680),true,new cljs.core.Keyword(null,"solid","solid",-2023773691),false,new cljs.core.Keyword(null,"death-step","death-step",704629746),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p1__4052_SHARP_),new cljs.core.Keyword(null,"mobile","mobile",1403078170),false,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(100)], null),new cljs.core.Keyword(null,"proposal-function","proposal-function",-646608988),(function (p){
return cljs.core.PersistentArrayMap.EMPTY;
})], null));
} else {
return p1__4052_SHARP_;
}
}),objs);
return cljs.core.filterv.call(null,((function (with_corpses){
return (function (p1__4053_SHARP_){
return cljs.core.not.call(null,(function (){var and__4120__auto__ = new cljs.core.Keyword(null,"corpse","corpse",875155680).cljs$core$IFn$_invoke$arity$1(p1__4053_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return (new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(p1__4053_SHARP_) > (new cljs.core.Keyword(null,"death-step","death-step",704629746).cljs$core$IFn$_invoke$arity$1(p1__4053_SHARP_) + (30)));
} else {
return and__4120__auto__;
}
})());
});})(with_corpses))
,with_corpses);
}));
});

//# sourceMappingURL=reap.js.map
