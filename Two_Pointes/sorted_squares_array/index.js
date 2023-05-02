// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4, -1, 0, 3, 10];
// Output: [0, 1, 9, 16, 100];
// Input: nums = [-7, -3, 2, 3, 11];
// Output: [4, 9, 9, 49, 121];

// TWO POINTERS APPROACH
function sorted_squares(arr) {
  let n = arr.length,
    left = 0,
    right = n - 1,
    result = [];

  for (let i = n - 1; i >= 0; i--) {
    let square;
    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      square = arr[right];
      right--;
    } else {
      square = arr[left];
      left++;
    }
    result[i] = square * square;
  }

  return result;
}

console.log(
  "Find squares of sorted array - [-4, -1, 0, 3, 10] ::: ",
  sorted_squares([-4, -1, 0, 3, 10])
);

console.log(
  "Find squares of sorted array - [0, 1, 3, 4, 10] ::: ",
  sorted_squares([0, 1, 3, 4, 10])
);
