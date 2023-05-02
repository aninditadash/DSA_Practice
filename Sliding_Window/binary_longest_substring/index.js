// You are given a binary substring s (a string containing only "0" and "1").
//  An operation involves flipping a "0" into a "1". What is the length of the
// longest substring containing only "1" after performing at most one operation?

// For example, given s = "1101100111", the answer is 5. If you perform the operation at index 2,
// the string becomes 1111100111.

// Another way to look at this problem is "what is the longest substring that contains at most one "0"?"

// SLIDING WINDOW APPROACH

function longest_substring_binary(str) {
  let left = (ans = curr = 0);

  for (let right = 0; right < str.length; right++) {
    if (str[right] === "0") {
      curr++;
    }

    while (curr > 1) {
      if (str[left] === "0") {
        curr--;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

console.log(
  "Longest substring having atmost 1 '0' in '1101100111' ::: ",
  longest_substring_binary("1101100111")
);
