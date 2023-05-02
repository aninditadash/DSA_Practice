// Given an array of positive integers nums and an integer k, find the length of the longest subarray
// whose sum is less than or equal to k.
// nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] and k = 8

// SLIDING WINDOW APPROACH - VARIABLE WINDOW SIZE

function find_length(nums, k) {
  let left = (curr = ans = 0);

  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];

    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1); // Used to define length of the subarray/window size
  }
  return ans;
}

console.log(
  "Length of the longest subarray whose sum <= 8 in [3, 1, 2, 7, 4, 2, 1, 1, 5] ::: ",
  find_length([3, 1, 2, 7, 4, 2, 1, 1, 5], 8)
);
