//문자열 역순
let result = "";
let x = "abcdefg";
while (true) {
  if (x.length === 1) {
    result += x;
    break;
  }
  let tmp = x.split("");
  console.log(x);
  result += tmp.pop();

  x = tmp.join("");
}
//console.log(result.split("").reverse().join(""));
console.log(result);
//재귀함수
function reverseContext(s) {
  if (s.length === 1) {
    return s;
  }
  console.log("reverse : ", s[s.length - 1], s.slice(0, s.length - 1));
  return s[s.length - 1] + reverseContext(s.slice(0, s.length - 1));
}

console.log(reverseContext("qwer"));

//함수        s           return                s.length-1
//fn(qwer)    qwer        r + e + w + q ;       3
//fn(qwe)     qwe         e + w + q;            2
//fn(qw)      qw          w + q;                1
//fn(q)       q           q                     0
//
//
