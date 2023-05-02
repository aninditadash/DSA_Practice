// Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.
// Input: [3, -1, 4, 12, -8, 5, 6], k = 4
// Output: 18

// SLIDING WINDOW APPROACH - FIXED WINDOW SIZE

// APPROACH 1
function find_largest_sum_subarray_1(arr, k) {
  let curr = 0;

  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }
  ans = curr;
  for (let i = k; i < arr.length; i++) {
    curr += arr[i] - arr[i - k];
    ans = Math.max(ans, curr);
  }

  return ans;
}

// APPROACH 2
function find_largest_sum_subarray_2(arr, k) {
  let curr = (ans = 0);

  for (let i = 0; i < arr.length; i++) {
    if (i >= k) {
      ans = Math.max(ans, curr);
      curr -= arr[i - k];
    }
    curr += arr[i];
  }
  ans = Math.max(ans, curr);

  return ans;
}

console.log(
  "Largest sum in fixed length subarray with size = 4 in [3, -1, 4, 12, -8, 5, 6] ::: ",
  find_largest_sum_subarray_1([3, -1, 4, 12, -8, 5, 6], 4)
);

console.log(
  "Largest sum in fixed length subarray with size = 4 in [3, -1, 4, 12, -8, 5, 6] ::: ",
  find_largest_sum_subarray_2([3, -1, 4, 12, -8, 5, 6], 4)
);
