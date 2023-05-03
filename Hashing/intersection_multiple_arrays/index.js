// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers,
// return the list of integers that are present in each array of nums sorted in ascending order.

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []

function find_intersection(nums) {
  let numMap = new Map();

  for (let n of nums) {
    for (let m of n) {
      numMap.set(m, (numMap.get(m) || 0) + 1);
    }
  }

  let n = nums.length,
    ans = [];
  for (let [key, val] of numMap) {
    if (val == n) {
      ans.push(key);
    }
  }

  ans = ans.sort((a, b) => a - b);

  return ans;
}

console.log("The list of integers from the 2D array common in all arrays ::: ");
console.log(
  find_intersection([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
