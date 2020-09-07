//피보나치 순열
//1 1 2 3 5 8 13 21
//1 2 3 4 5 6 7  8
//반복문
let result = 1;
let a = 1;
let b = 1;
let n = 8;
for (let i = 2; i < n; i++) {
  if (n === 0) {
    result = 0;
    break;
  }
  if (n < 3) {
    break;
  }

  result = a + b;
  a = b;
  b = result;
}
//console.log(result.split("").reverse().join(""));
console.log(result);
//재귀함수
function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(6));

// fibo(6) = fibo(5) + fibo(4) = (((1 + 1) + 1) + (1 + 1)) + ((1 + 1) + 1)
// fibo(5) = fibo(4) + fibo(3) = ((1 + 1) + 1) + (1 + 1)
// fibo(4) = fibo(3) + fibo(2) = (1 + 1) + 1
// fibo(3) = fibo(2) + fibo(1) = 1 + 1
// fibo(2) = 1
// fibo(1) = 1
