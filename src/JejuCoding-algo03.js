//반복문
let result = "";
let x = 11;
while (true) {
  if (x % 2 === 0) {
    result += "0";
  }

  if (x % 2 === 1) {
    result += "1";
  }

  x = Math.floor(x / 2);

  //Math.ceil() : 소수점 올림
  //Math.floor() : 소수점 버림
  //Math.round() : 소수점 반올림

  if (x === 1 || x === 0) {
    result += String(x);
    break;
  }
}
console.log(result.split("").reverse().join(""));

//재귀함수
function changeBinary(n) {
  if (n === 1 || n === 0) {
    return String(n);
  }

  return changeBinary(Math.floor(n / 2)) + String(n % 2);
}

console.log(changeBinary(11));

//함수        n           return
//fn(11)      11          1 + 0 + 1 + 1
//fn(5)       5           1 + 0 + 1
//fn(2)       2           1 + 0
//fn(1)       1           1
//
//
