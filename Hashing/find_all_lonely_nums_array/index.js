// You are given an integer array nums. A number x is lonely when it appears only once,
// and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
// Return all lonely numbers in nums.

// Input: nums = [10, 6, 5, 8]
// Output: [10, 8]
// Input: nums = [1,3,5,3]
// Output: [1,5]

// Time - O(N^2)
// Space - O(N)
function find_lonely_nums_loop(nums) {
  let result = [],
    numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    let curr_num = nums[i];

    if (
      nums.indexOf(curr_num + 1) === -1 &&
      nums.indexOf(curr_num - 1) === -1
    ) {
      if (numSet.has(curr_num)) {
        result.splice(result.indexOf(curr_num), 1);
        break;
      }
      result.push(curr_num);
    }
    numSet.add(curr_num);
  }

  return result;
}

function find_lonely_nums(nums) {
  let countMap = new Map(),
    result = [];

  for (let i = 0; i < nums.length; i++) {
    countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (
      !countMap.has(nums[i] + 1) &&
      !countMap.has(nums[i] - 1) &&
      countMap.get(nums[i]) === 1
    ) {
      result.push(nums[i]);
    }
  }

  return result;
}

console.log("Find all lonely numbers (Using loop) - [10, 6, 5, 8] ::");
console.log(find_lonely_nums_loop([10, 6, 5, 8]));

console.log("Find all lonely numbers (Using loop) - [1,3,5,3] ::");
console.log(find_lonely_nums_loop([1, 3, 5, 3]));

console.log("Find all lonely numbers (Using loop) - [69, 45, 69] ::");
console.log(find_lonely_nums_loop([69, 45, 69]));

console.log("Find all lonely numbers - [10, 6, 5, 8] ::");
console.log(find_lonely_nums([10, 6, 5, 8]));

console.log("Find all lonely numbers - [1,3,5,3] ::");
console.log(find_lonely_nums([1, 3, 5, 3]));

console.log("Find all lonely numbers - [69, 45, 69] ::");
console.log(find_lonely_nums([69, 45, 69]));
