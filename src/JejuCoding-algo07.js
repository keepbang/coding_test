//최소값 최대값구하기
let a = [10, 20, 30, 5, 2, 6, 3, 1, 11];

console.log(a);
console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));
//반복문
//최대값
let max = 0;
for (let v of a) {
  if (v > max) {
    max = v;
  }
}
console.log(max);
//최소값
let min = a[0];
for (let v of a) {
  if (v < min) {
    min = v;
  }
}
console.log(min);

//reduce

const reducerMax = (acc, curr) => (acc > curr ? acc : curr); //최대값
const reducerMin = (acc, curr) => (acc < curr ? acc : curr); //최소값
console.log(a.reduce(reducerMax));
console.log(a.reduce(reducerMin));
