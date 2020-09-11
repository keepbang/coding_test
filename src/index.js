let a = [10, 17, 9, 3, 1, 5, 81, 12];
let result = [];
let num = a.length;

//내장함수를 함수로 만들어서 선택정렬 해보기
function checkIndex(result, k) {
  for (let i in result) {
    if (k < result[i]) {
      return i;
    }
  }
  return result.length;
}

for (let i = 0; i < num; i++) {
  let key = a.shift();
  let idx = checkIndex(result, key);
  result.splice(idx, 0, key);
  console.log(`인덱스 : ${idx}`);
  console.log(`정렬된배열 : ${result}`);
}

console.log(result);
