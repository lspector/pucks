// Compiled by ClojureScript 1.10.520 {}
goog.provide('pucks.globals');
goog.require('cljs.core');
pucks.globals.all_agents = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
pucks.globals.iteration = cljs.core.atom.call(null,(0));
pucks.globals.last_input_ms = cljs.core.atom.call(null,(0));
pucks.globals.paused = cljs.core.atom.call(null,false);
pucks.globals.number_of_active_agents = cljs.core.atom.call(null,(0));
pucks.globals.end_ms = cljs.core.atom.call(null,(0));
pucks.globals.pucks_settings = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neighborhood-size","neighborhood-size",-2124619744),new cljs.core.Keyword(null,"collision-resolution-acceleration","collision-resolution-acceleration",-346652058),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"nursery-threshold","nursery-threshold",51257865),new cljs.core.Keyword(null,"screen-size","screen-size",641239979),new cljs.core.Keyword(null,"torpedo-energy","torpedo-energy",290470477),new cljs.core.Keyword(null,"single-thread-mode","single-thread-mode",-203363666),new cljs.core.Keyword(null,"cost-of-living","cost-of-living",-336787505),new cljs.core.Keyword(null,"pause-on-start","pause-on-start",-754330096),new cljs.core.Keyword(null,"ms-limit","ms-limit",-1908703534),new cljs.core.Keyword(null,"max-acceleration","max-acceleration",-138471785),new cljs.core.Keyword(null,"cost-of-collision","cost-of-collision",1056331992),new cljs.core.Keyword(null,"max-rotational-velocity","max-rotational-velocity",884275032),new cljs.core.Keyword(null,"max-velocity","max-velocity",-1012892068),new cljs.core.Keyword(null,"sensor-range","sensor-range",354078975)],[(200),100.0,0.8,(1000),(800),0.1,true,0.001,null,null,(1),0.01,0.05,(80),(100)]));
pucks.globals.pi = Math.PI;
pucks.globals.two_pi = ((2) * Math.PI);
pucks.globals.half_pi = (Math.PI / (2));
pucks.globals.quarter_pi = (Math.PI / (4));
pucks.globals.four_pi = ((2) * pucks.globals.two_pi);
pucks.globals.minus_pi = (- pucks.globals.pi);
pucks.globals.minus_two_pi = (- pucks.globals.two_pi);

//# sourceMappingURL=globals.js.map
