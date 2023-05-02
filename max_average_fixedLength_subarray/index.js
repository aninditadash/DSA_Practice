// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Input: (nums = [5]), (k = 1)
// Output: 5.0

// SLIDING WINDOW APPROACH - FIXED WINDOW SIZE

function find_max_average_subarray(arr, k) {
  let curr = 0.0;

  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }
  ans = curr / k;
  for (let i = k; i < arr.length; i++) {
    curr += arr[i] - arr[i - k];
    ans = Math.max(ans, curr / k);
  }

  return ans;
}

console.log(
  "Largest sum in fixed length subarray with size = 4 in [3, -1, 4, 12, -8, 5, 6] ::: ",
  find_max_average_subarray([1, 12, -5, -6, 50, 3], 4)
);

console.log(
  "Largest sum in fixed length subarray with size = 4 in [3, -1, 4, 12, -8, 5, 6] ::: ",
  find_max_average_subarray([5], 1)
);
