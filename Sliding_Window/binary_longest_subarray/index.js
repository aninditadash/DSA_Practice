// Given a binary array nums and an integer k, return the maximum number of consecutive 1's
// in the array if you can flip at most k 0's.

// Input: (nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2)
// Output: 6
// Explanation: [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]

// SLIDING WINDOW APPROACH

function longest_subarray_binary(arr, k) {
  let left = (ans = curr = 0);

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === 0) {
      curr++;
    }

    while (curr > k) {
      if (arr[left] === 0) {
        curr--;
      }
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

console.log(
  "Longest substring having atmost k '0' in [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2 ::: ",
  longest_subarray_binary([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)
);
