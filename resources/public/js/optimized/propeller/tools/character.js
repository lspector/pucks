// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('propeller.tools.character');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return (((propeller.tools.character.get_ascii("A") <= propeller.tools.character.get_ascii(c))) && ((propeller.tools.character.get_ascii(c) <= propeller.tools.character.get_ascii("z"))));
});
/**
 * Returns true if the given character is a digit, 0-9.
 */
propeller.tools.character.is_digit = (function propeller$tools$character$is_digit(c){
return (((propeller.tools.character.get_ascii("0") <= propeller.tools.character.get_ascii(c))) && ((propeller.tools.character.get_ascii(c) <= propeller.tools.character.get_ascii("9"))));
});
/**
 * Returns true if the given character is whitespace (newline, space, tab).
 */
propeller.tools.character.is_whitespace = (function propeller$tools$character$is_whitespace(c){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([propeller.tools.character.get_ascii("\t"),propeller.tools.character.get_ascii(" "),propeller.tools.character.get_ascii("\n")]),propeller.tools.character.get_ascii(c));
});
