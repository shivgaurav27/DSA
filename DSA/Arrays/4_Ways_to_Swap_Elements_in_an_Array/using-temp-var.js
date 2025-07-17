let array = ['A', 'B', 'C', 'D', 'E'];

let temp = array[1];
array[1] = array[3];
array[3] = temp;

console.log(array);
