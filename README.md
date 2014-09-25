# pucks

Pucks: An environment for experiments and education in artificial intelligence and artificial life.

## Usage

Assuming that you have installed [leiningen](http://leiningen.org), you can run a simulation by typing something with the following pattern at the command line:

    $ lein run [world namespace] [parameter keyword/value pairs]
    
Alternatively, in an integrated development environment such as [Counterclockwise](http://doc.ccw-ide.org/documentation.html), one can open 
a "world" file (in src/pucks/worlds/*), load the file into a new read-eval-print loop (REPL), and evaluate an expression such as:

    (run-pucks (agents) (settings))

## Examples

This will run one of the "development" worlds, containing an assortment of randomly placed agents:

    $ lein run pucks.worlds.dev.world1
    
This will run a different "development" worlds, with modified settings:
        
    $ lein run pucks.worlds.dev.world3 :screen-size 600 :max-velocity 0.1
    
The available settings and their defaults are in src/pucks/globals.clj.

This will run a simple world intended for use by AI students who are learning about pucks. It contains a few objects including one instance of the "user" agent:

    $ lein run pucks.worlds.ai.world1

Students should see if they can change the definition of the user agent (in src/pucks/agents/user/clj) to get it to survive indefinitely.

## License

Copyright © 2014 Lee Spector

Distributed under the Eclipse Public License version 1.0.