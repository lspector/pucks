// Compiled by ClojureScript 1.10.520 {}
goog.provide('propeller.tools.character');
goog.require('cljs.core');
/**
 * Gets the ASCII code of a char
 */
propeller.tools.character.get_ascii = (function propeller$tools$character$get_ascii(c){
return c.charCodeAt((0));
});
/**
 * Returns true if the given character is a letter, A-Z or a-z.
 */
propeller.tools.character.is_letter = (function propeller$tools$character$is_letter(c){
return (((propeller.tools.character.get_ascii.call(null,"A") <= propeller.tools.character.get_ascii.call(null,c))) && ((propeller.tools.character.get_ascii.call(null,c) <= propeller.tools.character.get_ascii.call(null,"z"))));
});
/**
 * Returns true if the given character is a digit, 0-9.
 */
propeller.tools.character.is_digit = (function propeller$tools$character$is_digit(c){
return (((propeller.tools.character.get_ascii.call(null,"0") <= propeller.tools.character.get_ascii.call(null,c))) && ((propeller.tools.character.get_ascii.call(null,c) <= propeller.tools.character.get_ascii.call(null,"9"))));
});
/**
 * Returns true if the given character is whitespace (newline, space, tab).
 */
propeller.tools.character.is_whitespace = (function propeller$tools$character$is_whitespace(c){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([propeller.tools.character.get_ascii.call(null,"\t"),propeller.tools.character.get_ascii.call(null," "),propeller.tools.character.get_ascii.call(null,"\n")]),propeller.tools.character.get_ascii.call(null,c));
});

//# sourceMappingURL=character.js.map
