// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.draw');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('pucks.globals');
goog.require('pucks.vec2D');
/**
 * Sets the background color and calls the :draw-functions of all agents.
 */
pucks.draw.draw_agents = (function pucks$draw$draw_agents(){
quil.core.background.call(null,(230),(180),(230));

var s_7443 = new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pucks.globals.pucks_settings));
quil.core.scale.call(null,s_7443,s_7443);

var seq__7323_7444 = cljs.core.seq.call(null,cljs.core.deref.call(null,pucks.globals.all_agents));
var chunk__7324_7445 = null;
var count__7325_7446 = (0);
var i__7326_7447 = (0);
while(true){
if((i__7326_7447 < count__7325_7446)){
var a_7448 = cljs.core._nth.call(null,chunk__7324_7445,i__7326_7447);
new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301).cljs$core$IFn$_invoke$arity$1(a_7448).call(null,a_7448);


var G__7449 = seq__7323_7444;
var G__7450 = chunk__7324_7445;
var G__7451 = count__7325_7446;
var G__7452 = (i__7326_7447 + (1));
seq__7323_7444 = G__7449;
chunk__7324_7445 = G__7450;
count__7325_7446 = G__7451;
i__7326_7447 = G__7452;
continue;
} else {
var temp__5735__auto___7453 = cljs.core.seq.call(null,seq__7323_7444);
if(temp__5735__auto___7453){
var seq__7323_7454__$1 = temp__5735__auto___7453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7323_7454__$1)){
var c__4550__auto___7455 = cljs.core.chunk_first.call(null,seq__7323_7454__$1);
var G__7456 = cljs.core.chunk_rest.call(null,seq__7323_7454__$1);
var G__7457 = c__4550__auto___7455;
var G__7458 = cljs.core.count.call(null,c__4550__auto___7455);
var G__7459 = (0);
seq__7323_7444 = G__7456;
chunk__7324_7445 = G__7457;
count__7325_7446 = G__7458;
i__7326_7447 = G__7459;
continue;
} else {
var a_7460 = cljs.core.first.call(null,seq__7323_7454__$1);
new cljs.core.Keyword(null,"draw-function","draw-function",-1145592301).cljs$core$IFn$_invoke$arity$1(a_7460).call(null,a_7460);


var G__7461 = cljs.core.next.call(null,seq__7323_7454__$1);
var G__7462 = null;
var G__7463 = (0);
var G__7464 = (0);
seq__7323_7444 = G__7461;
chunk__7324_7445 = G__7462;
count__7325_7446 = G__7463;
i__7326_7447 = G__7464;
continue;
}
} else {
}
}
break;
}

var agent_map = cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.deref.call(null,pucks.globals.all_agents)),cljs.core.deref.call(null,pucks.globals.all_agents));
quil.core.stroke.call(null,(196));

quil.core.stroke_weight.call(null,(2));

var seq__7327_7465 = cljs.core.seq.call(null,cljs.core.deref.call(null,pucks.globals.all_agents));
var chunk__7328_7466 = null;
var count__7329_7467 = (0);
var i__7330_7468 = (0);
while(true){
if((i__7330_7468 < count__7329_7467)){
var a_7469 = cljs.core._nth.call(null,chunk__7328_7466,i__7330_7468);
var seq__7387_7470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221).cljs$core$IFn$_invoke$arity$1(a_7469));
var chunk__7388_7471 = null;
var count__7389_7472 = (0);
var i__7390_7473 = (0);
while(true){
if((i__7390_7473 < count__7389_7472)){
var bound_id_7474 = cljs.core._nth.call(null,chunk__7388_7471,i__7390_7473);
var vec__7403_7475 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_7469);
var ax_7476 = cljs.core.nth.call(null,vec__7403_7475,(0),null);
var ay_7477 = cljs.core.nth.call(null,vec__7403_7475,(1),null);
var vec__7406_7478 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_7474));
var bx_7479 = cljs.core.nth.call(null,vec__7406_7478,(0),null);
var by_7480 = cljs.core.nth.call(null,vec__7406_7478,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7476,ay_7477], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7479,by_7480], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7476,ay_7477], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7479,by_7480], null)))){
quil.core.line.call(null,ax_7476,ay_7477,bx_7479,by_7480);
} else {
}


var G__7481 = seq__7387_7470;
var G__7482 = chunk__7388_7471;
var G__7483 = count__7389_7472;
var G__7484 = (i__7390_7473 + (1));
seq__7387_7470 = G__7481;
chunk__7388_7471 = G__7482;
count__7389_7472 = G__7483;
i__7390_7473 = G__7484;
continue;
} else {
var temp__5735__auto___7485 = cljs.core.seq.call(null,seq__7387_7470);
if(temp__5735__auto___7485){
var seq__7387_7486__$1 = temp__5735__auto___7485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7387_7486__$1)){
var c__4550__auto___7487 = cljs.core.chunk_first.call(null,seq__7387_7486__$1);
var G__7488 = cljs.core.chunk_rest.call(null,seq__7387_7486__$1);
var G__7489 = c__4550__auto___7487;
var G__7490 = cljs.core.count.call(null,c__4550__auto___7487);
var G__7491 = (0);
seq__7387_7470 = G__7488;
chunk__7388_7471 = G__7489;
count__7389_7472 = G__7490;
i__7390_7473 = G__7491;
continue;
} else {
var bound_id_7492 = cljs.core.first.call(null,seq__7387_7486__$1);
var vec__7409_7493 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_7469);
var ax_7494 = cljs.core.nth.call(null,vec__7409_7493,(0),null);
var ay_7495 = cljs.core.nth.call(null,vec__7409_7493,(1),null);
var vec__7412_7496 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_7492));
var bx_7497 = cljs.core.nth.call(null,vec__7412_7496,(0),null);
var by_7498 = cljs.core.nth.call(null,vec__7412_7496,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7494,ay_7495], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7497,by_7498], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7494,ay_7495], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7497,by_7498], null)))){
quil.core.line.call(null,ax_7494,ay_7495,bx_7497,by_7498);
} else {
}


var G__7499 = cljs.core.next.call(null,seq__7387_7486__$1);
var G__7500 = null;
var G__7501 = (0);
var G__7502 = (0);
seq__7387_7470 = G__7499;
chunk__7388_7471 = G__7500;
count__7389_7472 = G__7501;
i__7390_7473 = G__7502;
continue;
}
} else {
}
}
break;
}


var G__7503 = seq__7327_7465;
var G__7504 = chunk__7328_7466;
var G__7505 = count__7329_7467;
var G__7506 = (i__7330_7468 + (1));
seq__7327_7465 = G__7503;
chunk__7328_7466 = G__7504;
count__7329_7467 = G__7505;
i__7330_7468 = G__7506;
continue;
} else {
var temp__5735__auto___7507 = cljs.core.seq.call(null,seq__7327_7465);
if(temp__5735__auto___7507){
var seq__7327_7508__$1 = temp__5735__auto___7507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7327_7508__$1)){
var c__4550__auto___7509 = cljs.core.chunk_first.call(null,seq__7327_7508__$1);
var G__7510 = cljs.core.chunk_rest.call(null,seq__7327_7508__$1);
var G__7511 = c__4550__auto___7509;
var G__7512 = cljs.core.count.call(null,c__4550__auto___7509);
var G__7513 = (0);
seq__7327_7465 = G__7510;
chunk__7328_7466 = G__7511;
count__7329_7467 = G__7512;
i__7330_7468 = G__7513;
continue;
} else {
var a_7514 = cljs.core.first.call(null,seq__7327_7508__$1);
var seq__7415_7515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bound-to","bound-to",-1422182221).cljs$core$IFn$_invoke$arity$1(a_7514));
var chunk__7416_7516 = null;
var count__7417_7517 = (0);
var i__7418_7518 = (0);
while(true){
if((i__7418_7518 < count__7417_7517)){
var bound_id_7519 = cljs.core._nth.call(null,chunk__7416_7516,i__7418_7518);
var vec__7431_7520 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_7514);
var ax_7521 = cljs.core.nth.call(null,vec__7431_7520,(0),null);
var ay_7522 = cljs.core.nth.call(null,vec__7431_7520,(1),null);
var vec__7434_7523 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_7519));
var bx_7524 = cljs.core.nth.call(null,vec__7434_7523,(0),null);
var by_7525 = cljs.core.nth.call(null,vec__7434_7523,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7521,ay_7522], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7524,by_7525], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7521,ay_7522], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7524,by_7525], null)))){
quil.core.line.call(null,ax_7521,ay_7522,bx_7524,by_7525);
} else {
}


var G__7526 = seq__7415_7515;
var G__7527 = chunk__7416_7516;
var G__7528 = count__7417_7517;
var G__7529 = (i__7418_7518 + (1));
seq__7415_7515 = G__7526;
chunk__7416_7516 = G__7527;
count__7417_7517 = G__7528;
i__7418_7518 = G__7529;
continue;
} else {
var temp__5735__auto___7530__$1 = cljs.core.seq.call(null,seq__7415_7515);
if(temp__5735__auto___7530__$1){
var seq__7415_7531__$1 = temp__5735__auto___7530__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7415_7531__$1)){
var c__4550__auto___7532 = cljs.core.chunk_first.call(null,seq__7415_7531__$1);
var G__7533 = cljs.core.chunk_rest.call(null,seq__7415_7531__$1);
var G__7534 = c__4550__auto___7532;
var G__7535 = cljs.core.count.call(null,c__4550__auto___7532);
var G__7536 = (0);
seq__7415_7515 = G__7533;
chunk__7416_7516 = G__7534;
count__7417_7517 = G__7535;
i__7418_7518 = G__7536;
continue;
} else {
var bound_id_7537 = cljs.core.first.call(null,seq__7415_7531__$1);
var vec__7437_7538 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(a_7514);
var ax_7539 = cljs.core.nth.call(null,vec__7437_7538,(0),null);
var ay_7540 = cljs.core.nth.call(null,vec__7437_7538,(1),null);
var vec__7440_7541 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,agent_map,bound_id_7537));
var bx_7542 = cljs.core.nth.call(null,vec__7440_7541,(0),null);
var by_7543 = cljs.core.nth.call(null,vec__7440_7541,(1),null);
if(((pucks.vec2D.length.call(null,pucks.vec2D._v.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7539,ay_7540], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7542,by_7543], null))) - (1)) < pucks.vec2D.distance.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax_7539,ay_7540], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx_7542,by_7543], null)))){
quil.core.line.call(null,ax_7539,ay_7540,bx_7542,by_7543);
} else {
}


var G__7544 = cljs.core.next.call(null,seq__7415_7531__$1);
var G__7545 = null;
var G__7546 = (0);
var G__7547 = (0);
seq__7415_7515 = G__7544;
chunk__7416_7516 = G__7545;
count__7417_7517 = G__7546;
i__7418_7518 = G__7547;
continue;
}
} else {
}
}
break;
}


var G__7548 = cljs.core.next.call(null,seq__7327_7508__$1);
var G__7549 = null;
var G__7550 = (0);
var G__7551 = (0);
seq__7327_7465 = G__7548;
chunk__7328_7466 = G__7549;
count__7329_7467 = G__7550;
i__7330_7468 = G__7551;
continue;
}
} else {
}
}
break;
}

return quil.core.no_stroke.call(null);
});

//# sourceMappingURL=draw.js.map
