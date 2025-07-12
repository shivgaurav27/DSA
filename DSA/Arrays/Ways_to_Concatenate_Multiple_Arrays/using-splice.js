const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

arr1.splice(arr1.length, 0, ...arr2);

console.log(arr1);
