//O(2^n)
function fibonacci (position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(6);

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

