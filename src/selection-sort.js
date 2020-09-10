let a = [10, 17, 9, 3, 1, 5, 81, 12];
let result = [];
let num = a.length;

//내장함수를 함수로 만들어서 선택정렬 해보기
function min(...array) {}

for (let i = 0; i < num; i++) {
  result.push(Math.min.apply(null, a));
  //pop,push => 값을 뒤에서부터 입력하고 뒤에서부터 출력하는것
  //shift,unshift => 값을 앞에서부터 입력하고 앞에서부터 출력하는것
  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
}

console.log(result);
