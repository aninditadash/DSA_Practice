// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Input: s = "abccbaacz"
// Output: "c"

// O(N ^ 2);
function repeated_character_loop(str) {
  for (let i = 0; i < str.length; i++) {
    let curr_str = str[i];
    for (let j = 0; j < i; j++) {
      if (str[j] === curr_str) {
        return curr_str;
      }
    }
  }

  return " ";
}

// Time - O(N)
// Space - O(1)
function repeated_character(str) {
  let seen = new Set();

  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      return str[i];
    }
    seen.add(str[i]);
  }

  return " ";
}

console.log("First letter to appear twice - 'abccbaacz' ::");
console.log(repeated_character("abccbaacz"));

console.log("First letter to appear twice - 'abcdd' ::");
console.log(repeated_character("abcdd"));

console.log("First letter to appear twice (Using loop) - 'abccbaacz' ::");
console.log(repeated_character_loop("abccbaacz"));

// console.log("First letter to appear twice (Using loop) - 'abcdd' ::");
// console.log(repeated_character_loop("abcdd"));
