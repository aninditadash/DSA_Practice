// TWO POINTERS APPROACH
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      // string/array is not a palindrome
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log("racecar - ", palindrome("racecar"));
console.log("acbddfc - ", palindrome("acbddfc"));
console.log(
  '["r", "a", "c", "e", "c", "a", "r"]',
  palindrome(["r", "a", "c", "e", "c", "a", "r"])
);
