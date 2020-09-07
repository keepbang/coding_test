function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n + f(n - 1);
}

console.log(f(100));

function m(n) {
  if (n <= 1) {
    return 1;
  }
  return n * m(n - 1);
}

console.log(m(5));
