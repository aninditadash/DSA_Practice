// Reversing a string In-Place with O(1) Space

// Using recursion -> In Place -> O(N) Space

function reverse_str_recursion(str) {
  if (str === "") return "";
  return reverse_str_recursion(str.substr(1)) + str.charAt(0);
}

console.log(
  "Reverse string using recursion - hello :::",
  reverse_str_recursion("hello")
);
