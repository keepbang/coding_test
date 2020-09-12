let a = [10, 17, 9, 3, 1, 5, 81, 12];

/***************************분할
   [10, 17, 9, 3, 1, 5, 81, 12]
   [10, 17, 9, 3], [1, 5, 81, 12]
   [10, 17], [9, 3], [1, 5], [81, 12]
   [10], [17], [9], [3], [1], [5], [81], [12]
***************************/

/*******************************정복
[10, 17], [3, 9], [1,5], [12,81]
[3, 9, 10, 17],[1, 5, 12, 81]
[1, 3, 5, 9, 10, 12, 17, 81]
*********************************/

// function mergeSort(...array){
//   let len = array.length;
//   if(len <= 1){
//     return array;
//   }

//   let middle = parseInt(len/2,10);
//   let group1 = mergeSort(...array.slice(0,middle));
//   let group2 = mergeSort(...array.slice(middle));

//   return `그룹1 : ${group1} , 그룹2 : ${group2}\n`
// }

//console.log(mergeSort(...a));

function mergeSort(...array) {
  let len = array.length;
  let result = [];
  if (len <= 1) {
    return array;
  }
  let middle = parseInt(len / 2, 10);
  let group1 = mergeSort(...array.slice(0, middle));
  let group2 = mergeSort(...array.slice(middle));

  while (group1.length !== 0 && group2.length !== 0) {
    if (group1[0] < group2[0]) {
      result.push(group1.shift());
    } else {
      result.push(group2.shift());
    }
  }

  while (group1.length !== 0) {
    result.push(group1.shift());
  }

  while (group2.length !== 0) {
    result.push(group2.shift());
  }

  return result;
}

console.log(mergeSort(...a));
