// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pucks.globals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
pucks.globals.all_agents = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
pucks.globals.iteration = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pucks.globals.last_input_ms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pucks.globals.paused = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
pucks.globals.number_of_active_agents = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pucks.globals.end_ms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pucks.globals.pucks_settings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neighborhood_DASH_size,cljs.core.cst$kw$collision_DASH_resolution_DASH_acceleration,cljs.core.cst$kw$scale,cljs.core.cst$kw$energy_DASH_transfer_DASH_to_DASH_child,cljs.core.cst$kw$nursery_DASH_threshold,cljs.core.cst$kw$screen_DASH_size,cljs.core.cst$kw$torpedo_DASH_energy,cljs.core.cst$kw$single_DASH_thread_DASH_mode,cljs.core.cst$kw$cost_DASH_of_DASH_living,cljs.core.cst$kw$pause_DASH_on_DASH_start,cljs.core.cst$kw$ms_DASH_limit,cljs.core.cst$kw$max_DASH_acceleration,cljs.core.cst$kw$cost_DASH_of_DASH_collision,cljs.core.cst$kw$max_DASH_rotational_DASH_velocity,cljs.core.cst$kw$max_DASH_velocity,cljs.core.cst$kw$sensor_DASH_range],[(200),100.0,0.8,0.1,(1000),(800),0.1,true,0.001,null,null,(1),0.01,0.05,(80),(100)]));
pucks.globals.pi = Math.PI;
pucks.globals.two_pi = ((2) * Math.PI);
pucks.globals.half_pi = (Math.PI / (2));
pucks.globals.quarter_pi = (Math.PI / (4));
pucks.globals.four_pi = ((2) * pucks.globals.two_pi);
pucks.globals.minus_pi = (- pucks.globals.pi);
pucks.globals.minus_two_pi = (- pucks.globals.two_pi);
