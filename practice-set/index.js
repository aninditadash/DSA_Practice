function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(palindrome("aceca"));
console.log(palindrome("acecaa"));
console.log(palindrome("racecar"));

function find_sorted_squares(arr) {
  let arr_len = arr.length;
  let left = 0;
  let right = arr_len - 1;
  let result = [];

  for (let i = arr_len - 1; i >= 0; i--) {
    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      result[i] = arr[right] * arr[right];
      right--;
    } else {
      result[i] = arr[left] * arr[left];
      left++;
    }
  }

  return result;
}

console.log(find_sorted_squares([-4, -1, 0, 3, 10]));
console.log(find_sorted_squares([-5, -2, -1, 0, 3, 10]));

function two_sum_sorted_array(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === target) return true;
    if (arr[left] + arr[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(two_sum_sorted_array([1, 2, 4, 6, 8, 9, 14, 15], 13));
console.log(two_sum_sorted_array([1, 2, 4, 6, 8, 9, 14, 15], 50));

function helper(char_arr, left, right) {
  if (left >= right) return;
  let tmp = char_arr[left];
  char_arr[left++] = char_arr[right];
  char_arr[right--] = tmp;
  helper(char_arr, left, right);
}
function reverse_char_arr_in_place_rec(char_arr) {
  helper(char_arr, 0, char_arr.length - 1);
  return char_arr;
}

console.log(reverse_char_arr_in_place_rec(["h", "e", "l", "l", "o"]));

function reverse_char_arr_in_place_two_pointers(char_arr) {
  let left = 0,
    right = char_arr.length - 1;

  while (left < right) {
    const tmp = char_arr[left];
    char_arr[left++] = char_arr[right];
    char_arr[right--] = tmp;
  }

  return char_arr;
}

console.log(reverse_char_arr_in_place_two_pointers(["h", "e", "l", "l", "o"]));
