// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is
// a pangram, or false otherwise.

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true

// Input: sentence = "leetcode"
// Output: false

function check_if_pangram(sentence) {
  let charSet = new Set();

  for (var i = 0; i < sentence.length; i++) {
    charSet.add(sentence[i]);
  }

  return charSet.size === 26;
}

console.log(
  "Check if sentence is pangram - 'thequickbrownfoxjumpsoverthelazydog' ::"
);
console.log(check_if_pangram("thequickbrownfoxjumpsoverthelazydog"));

console.log("Check if sentence is pangram - 'leetcode' ::");
console.log(check_if_pangram("leetcode"));
