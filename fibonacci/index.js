// Print Fibonnaci series
// 0 1 1 2 3 5 8 13 21 ...
// Using Recursion

// function f(n):
//     if (n <= 1)
//         return n
//     oneBack = f(n-1)
//     twoBack = f(n -2)
//     return oneBack + twoBack

function print_fibonnaci(n) {
  if (n <= 1) {
    return n;
  }

  const sum = print_fibonnaci(n - 1) + print_fibonnaci(n - 2);
  console.log(sum);
  return sum;
}

// console.log(print_fibonnaci(3));
