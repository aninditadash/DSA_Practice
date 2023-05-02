// Given an array of unique integers and a target integer, return true if there exists a
// pair of numbers that sum to target, false otherwise. Also return indices of the two numbers.
// Input: (nums = [2, 7, 11, 15]), (target = 9)
// Output: [0, 1]

// Time - O(N)
// Space - O(N) as the num of keys the hash map will store will scale linearly with the input size
function check_for_target(arr, target) {
  let dict = new Map();

  for (var i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (dict.has(complement)) {
      return [i, dict.get(complement)];
    }
    dict.set(arr[i], i); // We need to retrieve the index of the number in the array
  }

  return [-1, -1];
}

console.log("Unsorted Array - [3, 2, 4], Target - 6");
console.log(check_for_target([3, 2, 4], 6));

console.log("Sorted Array - [2, 7, 11, 15], Target - 9");
console.log(check_for_target([2, 7, 11, 15], 9));

console.log("Sorted Array - [5, 2, 7, 10, 3, 9], Target - 9");
console.log(check_for_target([5, 2, 7, 10, 3, 9], 8));
