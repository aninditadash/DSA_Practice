// Reversing a string In-Place with O(1) Space, where string is an array of characters

// Using recursion -> In Place -> O(N) Space
function helper(str, left, right) {
  if (left >= right) return;
  const tmp = str[left];
  str[left++] = str[right];
  str[right--] = tmp;
  helper(str, left, right);
}

function reverse_str_recursion(str) {
  helper(str, 0, str.length - 1);
  return str;
}

console.log(
  "Reverse string using recursion - hello :::",
  reverse_str_recursion(["h", "e", "l", "l", "o"])
);

// Using 2 pointers In Place -> O(1) Space
function reverse_str_iteration(str) {
  let string_arr = str.split(""), // As JavaScript strings are immutable
    left = 0,
    right = string_arr.length - 1;

  while (left < right) {
    const tmp = string_arr[left];
    string_arr[left++] = string_arr[right];
    string_arr[right--] = tmp;
  }

  return string_arr.join("");
}

console.log(
  "Reverse string using two pointers iteration - hello ::: ",
  reverse_str_iteration("hello")
);
