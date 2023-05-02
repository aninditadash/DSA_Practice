// Given an array of integers nums and an integer k, return the number of contiguous subarrays
// where the product of all the elements in the subarray is strictly less than k.
// Input: (nums = [10, 5, 2, 6]), (k = 100)
// Output: 8
// Input: (nums = [1, 2, 3]), (k = 0)
// Output: 0

// SLIDING WINDOW APPROACH - VARIABLE WINDOW SIZE

function num_subarray_product_lessThan_k(arr, k) {
  if (k <= 1) return 0;
  let left = (ans = 0);
  let curr = 1;

  for (let right = 0; right < arr.length; right++) {
    curr *= arr[right];

    while (curr >= k) {
      curr /= arr[left];
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
}

console.log(
  "No. of subarrays whose product < 100 in [10, 5, 2, 6] ::: ",
  num_subarray_product_lessThan_k([10, 5, 2, 6], 100)
);
console.log(
  "No. of subarrays whose product < 0 in [1, 2, 3] ::: ",
  num_subarray_product_lessThan_k([1, 2, 3], 0)
);
