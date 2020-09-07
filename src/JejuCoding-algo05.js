//각 자릿수의 합
//반복문
let result = 0;
let x = "12345";
while (true) {
  if (x < 10) {
    result += parseInt(x, 10);
    break;
  }
  result += x % 10;
  x = parseInt(x / 10, 10);
}
//console.log(result.split("").reverse().join(""));
console.log(result);
//재귀함수
function sum(s) {
  if (s.length === 1) {
    return parseInt(s, 10);
  }
  console.log("reverse : ", s[s.length - 1], s.slice(0, s.length - 1));
  return parseInt(s[s.length - 1], 10) + sum(s.slice(0, s.length - 1));
}

console.log(sum("12345"));

//함수        s           return                s.length-1
//fn(qwer)    qwer        r + e + w + q ;       3
//fn(qwe)     qwe         e + w + q;            2
//fn(qw)      qw          w + q;                1
//fn(q)       q           q                     0
//
//
