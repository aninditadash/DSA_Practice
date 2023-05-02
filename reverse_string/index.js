"use strict";

// Write a function that reverses a string. The input string is given as an array of characters s.

// Using array reverse
function reverse_str(str) {
  str = Array.isArray(str) ? str : str.split("");
  return str.reverse().join("");
}

// Using array reduce
function reverse_str_reduce(str) {
  str = Array.isArray(str) ? str : str.split("");
  return str.reduce((rev, char) => char + rev, "");
}

console.log("Reverse string - hello :::", reverse_str("hello"));
console.log(
  'Reverse string array - ["h","e","l","l","o"] ::: ',
  reverse_str_reduce(["h", "e", "l", "l", "o"])
);
