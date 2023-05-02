// Example 1: Given two sorted integer arrays, return an array that combines both of them and is also sorted.
// Input: [1, 4, 7, 20], [3, 5, 6]
// Output: [1, 3,  4, 5, 6, 7, 20]

// TWO POINTERS APPROACH - both indices starting a 0 position
function combine_arrays(arr1, arr2) {
  const ans_arr = [];
  let i = (j = 0);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans_arr.push(arr1[i]);
      i++;
    } else {
      ans_arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    ans_arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans_arr.push(arr2[j]);
    j++;
  }

  return ans_arr;
}
console.log("Combine two arrays - [1, 4, 7, 20], [3, 5, 6]");
console.log(combine_arrays([1, 4, 7, 20], [3, 5, 6]));

console.log(
  "=================================================================="
);
