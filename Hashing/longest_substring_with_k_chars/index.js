// You are given a string s and an integer k. Find the length of the longest substring
// that contains at most k distinct characters.

// For example, given s = "eceba" and k = 2, return 3. The longest substring
// with at most 2 distinct characters is "ece".

// Time - O(N)
// Space - O(k) The hash map occupies O(k) space, as the algorithm will delete elements from the hash map once it grows beyond
function find_longest_substring(str, k) {
  let charMap = new Map();
  let left = (ans = 0);

  for (let right = 0; right < str.length; right++) {
    charMap.set(str[right], (charMap.get(str[right]) || 0) + 1);

    if (charMap.size > k) {
      charMap.set(str[left], charMap.get(str[left]) - 1);
      if (charMap.get(str[left]) === 0) {
        charMap.delete(str[left]);
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

console.log("Find longest substring with k characters - 'eceba', k - 2");
console.log(find_longest_substring("eceba", 2));
