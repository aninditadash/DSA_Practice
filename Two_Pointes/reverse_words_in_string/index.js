// Given a string s, reverse the order of characters in each word within a sentence while still preserving
// whitespace and initial word order.

// Input: s = "God Ding"
// Output: "doG gniD"

function reverse_words_in_string(str) {
  const str_arr = str.split(" ");

  for (let i = 0; i < str_arr.length; i++) {
    const inner_str = str_arr[i].split("");
    let left = 0,
      right = inner_str.length - 1;
    while (left < right) {
      const tmp = inner_str[left];
      inner_str[left++] = inner_str[right];
      inner_str[right--] = tmp;
    }
  }

  console.log(str_arr);
  return str_arr.join(" ");
}

console.log(reverse_words_in_string("God Ding"));
