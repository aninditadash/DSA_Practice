// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function is_subsquence(s, t) {
  let i = (j = 0);

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  console.log(i);
  return i === s.length;
}

console.log("Is subsequence - s = 'ace', t = 'abcde'");
console.log(is_subsquence("ace", "abcde"));

console.log("Is subsequence - s = 'abc', t = 'ahbgdc'");
console.log(is_subsquence("abc", "ahbgdc"));

console.log("Is subsequence - s = 'axc', t = 'ahbgdc'");
console.log(is_subsquence("axc", "ahbgdc"));
