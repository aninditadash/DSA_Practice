// You are given a 0-indexed integer array nums of length n.nums contains a valid split at index i if the following are true:
// The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
// There is at least one element to the right of i. That is, 0 <= i < n - 1.
// Return the number of valid splits in nums.
// Input: nums = [10,4,-8,7]
// Output: 2

// PREFIX SUM APPROACH
function ways_to_split_array(arr) {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix.push(arr[i] + prefix[prefix.length - 1]);
  }

  let ans = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // arr.length - 1 as we can't split at the last index
    let left_section = prefix[i],
      right_section = prefix[prefix.length - 1] - prefix[i];
    if (left_section >= right_section) {
      ans++;
    }
  }

  return ans;
}

// SECOND APPROACH - calculating leftSection on the fly
function ways_to_split_array_2(arr) {
  let totalCount = (left_section = ans = 0);
  for (let el of arr) {
    totalCount += el;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    left_section += arr[i];
    let right_section = totalCount - left_section;
    if (left_section >= right_section) {
      ans++;
    }
  }

  return ans;
}

console.log(
  "Ways to split an array - [10,4,-8,7] ::: ",
  ways_to_split_array([10, 4, -8, 7])
);

console.log(
  "Ways to split an array ( Second approach ) - [10,4,-8,7] ::: ",
  ways_to_split_array_2([10, 4, -8, 7])
);
