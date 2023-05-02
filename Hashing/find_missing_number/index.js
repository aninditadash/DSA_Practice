// Given an array nums containing n distinct numbers in the range [0, n], return the only
// number in the range that is missing from the array.

// Input: nums = [3, 0, 1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

// Input: nums = [0,1]
// Output: 2

// Approach 1
function find_missing_number_1(nums) {
  let numSet = new Set(),
    n = nums.length + 1;

  for (let i = 0; i < n; i++) {
    numSet.add(i);
  }

  for (let i = 0; i < nums.length; i++) {
    numSet.has(nums[i]) && numSet.delete(nums[i]);
  }

  return numSet.values().next().value;
}

// Approach 2
function find_missing_number_2(nums) {
  let numSet = new Set(nums),
    n = nums.length + 1;

  for (let i = 0; i < n; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
}

console.log("Find missing number (Approach 1) - [3, 0, 1]::");
console.log(find_missing_number_1([3, 0, 1]));

console.log("Find missing number (Approach 1) - [9,6,4,2,3,5,7,0,1] ::");
console.log(find_missing_number_1([9, 6, 4, 2, 3, 5, 7, 0, 1]));

console.log("Find missing number (Approach 1) - [0,1] ::");
console.log(find_missing_number_1([0, 1]));

console.log("Find missing number (Approach 2) - [3, 0, 1]::");
console.log(find_missing_number_2([3, 0, 1]));

console.log("Find missing number (Approach 2) - [9,6,4,2,3,5,7,0,1] ::");
console.log(find_missing_number_2([9, 6, 4, 2, 3, 5, 7, 0, 1]));

console.log("Find missing number (Approach 2) - [0,1] ::");
console.log(find_missing_number_2([0, 1]));
