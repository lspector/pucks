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

## Puck internals

Pucks are [Clojure maps](http://clojure.org/data_structures). All pucks have key/value pairs for at least the following keys:


Key | Value | Default
|---|---|---|
:id       | a symbol | random symbol with name starting  with "puck-"
:radius   | points from center to outer edge of membrane      | 20
:position | an [x y] vector representing the puck's current location; this information is not accessible by proposal functions      | a random location in the world 
:velocity | an [x y] vector representing the number of points that the puck is moving in the x and y directions each time step | each component is random between -2.5 and 2.5
:rotation | a floating-point number indicating the puck's orientation, in radians rotating clockwise from straight up; 0 is straight up; pi/2 is to the right; pi is straight down; 3pi/2 is to the left | random between 0 and 2pi
:color | a vector of integers, each between 0 and 255 (inclusive), for red, green, and blue | 255 for each component (which makes white)
:energy | a floating-point number between 0 and 1 | 1
:steps | the number of time steps that the agent has been alive | 0
:neighbors | other pucks within the neighborhood of this puck; this information is not accessible by proposal functions | empty sequence
:sensed | other pucks that can be sensed by this puck | empty sequence
:overlaps | other pucks with membranes overlapping with this puck | empty sequence
:memory | any information that the agent wants to store, in a map | empty map
:inventory | items held by the agent | empty set
:draw-function | a function that takes a puck and draws it to the screen | a function that draws nothing and returns false
:proposal-function | a function that takes a puck and returns proposals in a map | a function that returns an empty map
:spawn-function | a function that takes either no arguments or a puck and returns a sequence of pucks that are potential offspring | a function that returns an empty sequence
   
Pucks have additional key/value pairs that specify boolean properties of the puck. If the key is present with value **true** then the puck has that property. If it is either absent or present with value **false** then the puck does not have that property. The following are among the possible key/value pairs for boolean properties:

Key | Value | Default
|---|---|---|
:mobile | boolean, indicating whether the puck can move | false
:solid | boolean, indicating whether the puck has a solid core | true
:just-collided | boolean, for active pucks only, indicating whether the puck had a collision in the immediately preceding time step | false
(key corresponding to an agent type) | boolean, indicating whether the agent is of that type | false

## Proposals

Proposal functions should take a puck and return a collection of proposals in the form of a map. Among the key/value pairs that can be included in proposals are:

Key | Value
|---|---|
:acceleration | a floating-point number indicating the target acceleration, which may be limited by settings for :max-acceleration and :max-velocity
:rotation | a floating-point number indicating the target rotation, which may be limited by the setting of :max-rotational-velocity
:spawn | a sequence of pucks that are potential offspring *(still under development)*
:transfer | a sequence of proposed transfers between pucks, each of which must be a map with four key/value pairs: :self, :other, :bid, and :ask. See below for details.
:memory | a map of any keys to any values
:properties | a map of puck property keys to values; currently only changes to the :solid property are supported, and only for pucks that are not :mobile

Proposal functions may refer to any elements of the pucks that they receive, although the :neighbors, :overlaps, :memory, and :inventory of those pucks will have been stripped, and the :positions of those pucks will have been relativized to the position of the puck making the proposal. Positions of offspring pucks specified in :spawn proposals will be interpreted relative to the positions of the parent pucks. Offspring will be given fresh ids, a small portion of the parent's energy, and empty memories and inventory, although subsequent transactions may transfer items or information from parent to child.

### Transfers

A transfer is a map with four key/value pairs: 

Key | Value
|---|---|
:self | a puck ID
:other | a puck ID
:bid | a map with resources such as :energy or :inventory as keys, and offered amounts or items as values
:ask | either a map of the same format as a bid, or a function of two bids

Transfers are used to establish *transactions* among agents.
A transfer is considered *one-sided* if it requires no reciprocation from a second agent; this will rarely be the case for user-written agents, but it is the mechanism by which "vents" transfer energy unconditionally to overlapping agents, and by which "zappers" transfer energy unconditionally *from* overlapping agents.

Most other transfers will be *two-sided*, meaning that transfers proposed by two agents must be mutually acceptable (and each agent must be able to afford its bid) in order for the transaction specified by the two transfers to take place. Each agent will accept a transaction if its ask is compatible with the bid of the other agent. If an ask is map then the transaction will be accepted only if it matches the other agent's bid exactly. If an ask is a function then it will be called on two arguments, the bid made by the agent evaluating the ask and the bid made by the other agent; if the function call returns true then the transaction will be accepted.

When a transaction takes place all bids are "paid," which will mean something different depending on the resource involved in the bid. Among the bids that can be made are:

Key | Value | Condition | Payment
|---|---|---|---|
:energy | a number | the bidding puck must have at least the specified amount of energy | the specified amount of energy is transferred to the other puck
:inventory | an inventory item | the specified item must be present in the bidding puck's inventory | the specified item is removed from the inventory of the bidding puck and added to the inventory of the other puck
:memory | a map (presumably containing key/value pairs from the bidding puck's memory)| none | the specified map is merged into the other puck's memory; nothing is removed from the bidding puck's memory
:promise | a map | none | the specified map is merged into the bidding puck's memory (which will presumably influence its future bids)
:request | anything | none | nothing; this serves only to communicate an interest in the transfer proceeding

Each step of a pucks simulation, the transactions that have proposed in that step are processed one at a time, in random order.

The pucks transfer system is still under development and will continue to change.

## Worlds

World files should define zero-argument functions named agents and settings. The agents function should return a sequence of agents, which will be used as the initial agents in simulations, and the settings function should return a map that maps settings keywords to desired values. Once a world file is loaded, evaluating (run-pucks (agents) (settings)) will run a simulation that starts with the agents produced by the call to agents, using the settings that result from merging the default settings with the results of the call to settings.

## Settings

The following simulation settings are set in src/pucks/globals.clj and can be reset in world files and/or on the leiningen command line:

Setting | Description | Default
|---|---|---|
:screen-size | the height and width of the world in world units, and the screen in pixels if the :scale is 1.0 | 800
:scale | the factor by which world units will be multiplied to yield numbers of pixels on screen; 1.0 will yield 1 unit/pixel, 0.5 will yield 2 units/pixel, etc. | 1.0 
:sensor-range | the maximum distance from which a puck can sense another puck | 100
:neighborhood-size | the distance from a puck within which other pucks will be considered for sensing, collision, and overlap-dependent interactions; this should be at least the sensor range plus the largest radius of any puck in the simulation | 200
:max-velocity | the maximum distance that a puck with radius 1 can move in a single step; this is divided by the radius of a puck to determine its actual maximum velocity | 80
:max-acceleration | the maximum amount that a puck's velocity can change in one step | 1
:max-rotational-velocity | the maximum number of radians that a puck's rotation can change in 1 step | 0.05
:collision-resolution-acceleration | the magnitude of the acceleration applied to resolve collisions (overlaps) of solid puck cores | 100.0
:cost-of-living | the amount of energy charged to a puck just for living each time step | 0.001
:cost-of-collision | the amount of energy charged to a puck for a collision | 0.01
:single-thread-mode | if true then the simulation uses only a single thread and processor core; if false then it runs in a multi-threaded mode using all available cores | true
:nursery-threshold | the number of active pucks below which nurseries may generate new pucks | 1000



## License

Copyright (c) 2014 Lee Spector

Distributed under the Eclipse Public License version 1.0.