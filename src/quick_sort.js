let a = [10, 17, 9, 3, 1, 5, 81, 12];

function quickSort(...array) {
  let len = array.length;
  if (len <= 1) {
    return array;
  }

  let pivot = [array.shift()];
  let group1 = [];
  let group2 = [];

  for (let i in array) {
    if (array[i] < pivot) {
      group1.push(array[i]);
    } else {
      group2.push(array[i]);
    }
  }

  console.log(`그룹하나 : ${group1}\n그룹둘 : ${group2}\n피봇값 : ${pivot}\n`);

  return quickSort(...group1).concat(pivot, quickSort(...group2));
}

console.log(quickSort(...a));
