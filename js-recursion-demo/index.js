// Time complexity Big o notation calculation rules
// Not dependent on input size O(1)
// Loop O(n)
// Nested Loop O(n**2)
// Input size reduced by half O(log n)

// Problem: Fibonacci Sequence
// Task:
// Write a recursive and iterative function to find the nth number in the Fibonacci sequence.
// (0,1,1,2,3,5,8)

// Each number is sum of the two prev number

function iterativeFibonacci(n) {
  const fibo = [0, 1];

  for (let i = 2; i < n; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
  }

  return fibo[n - 1];
}
// console.log(iterativeFibonacci(8));

// F(N) = F(N-1) + F(N - 2)
// F(0) = 0
// F(1) = 1

function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));
