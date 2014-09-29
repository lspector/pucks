# pucks

pucks: An environment for experiments and education in artificial intelligence and artificial life.

## Usage

Assuming that you have installed [leiningen](http://leiningen.org), you can run a simulation by typing something with the following pattern at the command line:

    $ lein run [world namespace] [parameter keyword/value pairs]
    
Alternatively, in an integrated development environment such as [Counterclockwise](http://doc.ccw-ide.org/documentation.html), you can open a "world" file (in src/pucks/worlds/*), load the file into a new read-eval-print loop (REPL), and evaluate an expression such as:

    (run-pucks (agents) (settings))

## Examples

This will run one of the "development" worlds, containing an assortment of randomly placed agents, which serve mostly to test new agent types during development:

    $ lein run pucks.worlds.dev.world1
    
This will run a different "development" worlds, with modified settings:
        
    $ lein run pucks.worlds.dev.world3 :screen-size 600 :max-velocity 0.1
    
The available settings and their defaults are in src/pucks/globals.clj.

This will run a simple world intended for use by AI students who are learning about pucks. It contains a few objects including one instance of the "user" agent:

    $ lein run pucks.worlds.ai.world1

Students should see if they can change the definition of the user agent (in src/pucks/agents/user/clj) to get it to survive indefinitely.

## Description

Pucks are flat.

Pucks are round.

Every puck has a core, which may be solid, and a porous membrane.

Pucks have batteries, consume energy, and die (leaving corpses) if they run out of power. 

Active pucks are oriented in the plane, facing a single direction at a time. An active puck can sense nearby pucks and accelerate in the direction that it is facing.

Active pucks act by making proposals to the universe. The universe will accept proposals if they are permitted by physics and compatible with the proposals of other pucks. When conflicts arise the universe will arbitrate.

Among the proposals that pucks can make are to accelerate (or decelerate), to rotate, to remember things, and to engage in transactions involving energy, information, and inventory items with other pucks. Pucks can only conduct transactions with one another when their membranes overlap. Pucks can also propose to spawn new pucks.

A pucks world consists of a set of initial agents (pucks) and simulation settings. A simulation is conducted by loading a world and stepping forward a sequence of proposal generation and arbitration steps.

With a few exceptions, energy is maintained in pucks simulations.

Among the kinds of static (stationary, non-active) pucks that may appear in worlds are:

- **Vents:** These pucks give away energy to all comers and get energy "free" from the universe at each time step, violating conservation of energy. They are named "vents" by analogy with the hydrothermal vents that provide energy for certain complex marine ecosystems. The size of the orange disk in a vent's core indicates the amount of energy that it contains at each point in time.

- **Beacons:** These pucks have permeable cores and are entirely inert, but since they are stationary, can have unique identifiers, and can be sensed, they can serve as landmarks.

- **Stones:** These pucks are also static and inert, but they have solid cores. They act only as barriers.

- **Zappers:** These pucks steal energy from overlapping pucks, usually killing them pretty quickly. These also violate ordinary physics in the sense that the universe will allow their theft of energy without agreement from their victims; ordinarily, all transactions require the consent of both parties.

- **Nurseries:** These pucks continuously spawn new agents, again violating conservation of energy.

Active pucks are characterized mainly by their proposal functions, which may be written by hand (possibly incorporating a variety of artificial intelligence techniques to make them "smart") or may, in certain system configurations, arise within simulations by random variation and natural selection.

Active pucks are generally drawn with an "eye" that indicates orientation and a colored green core disk that indicates the amount of energy that the puck contains. Red rings are drawn around active puck cores when they collide with other solid objects; these collisions incur extra energetic costs. A dot is shown in the center of an active puck's core if it has a non-empty inventory. A dot is shown in the center of a puck's eye if it has a non-empty memory.

# Puck internals

Pucks are [Clojure maps](http://clojure.org/data_structures). All pucks have key/value pairs for at least the following keys:


key | Description | Default
|---|---|---|
:id       | a unique symbol | random symbol with name starting  with "puck-"
:radius   | points from center to outer edge of membrane      | 20
:position | an [x y] vector representing the puck's current location     | a random location in the world 
:velocity | an [x y] vector representing the number of points that the puck is moving in the x and y directions each time step | each component is random between -2.5 and 2.5
:rotation | a floating-point number indicating the rotation of the puck's orientation; 0 is straight up; pi is straight down; pi/2 is to the left; 3pi/2 is to the right | random between 0 and 2pi

   :color [255 255 255]
   :energy 0
   :steps 0
   :neighbors []
   :overlaps []
   :memory {}
   :inventory #{}
   :draw-function (fn [p] false)
   :proposal-function (fn [p] {})})
   
   
   :mobile false
   :solid true

Puck components (and they're maps)

Puck proposals

only relative positions


Pucks can make proposals concerning: 

- Acceleration.

- Rotation.

- Spawn -- Puck genesis. New pucks can be given arbitrary proposal functions and other properties, and placed anywhere within the membrane; energy is conserved minus a transaction cost.

- Transactions including energy and information transfer (within the membrane).

- Save state (memory)





## License

Copyright (c) 2014 Lee Spector

Distributed under the Eclipse Public License version 1.0.