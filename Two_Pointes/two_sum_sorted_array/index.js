// Given a SORTED array of unique integers and a target integer, return true if there exists a
// pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum.
// For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

// FOR SORTED ARRAY (TWO POINTERS APPROACH)
function check_for_target_sorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let current_sum = arr[left] + arr[right];
    if (current_sum === target) {
      return true;
    }
    if (current_sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log("Sorted Array - [1, 2, 4, 6, 8, 9, 14, 15], Target - 13");
console.log(check_for_target_sorted([1, 2, 4, 6, 8, 9, 14, 15], 13));
