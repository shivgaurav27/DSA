const arr1 = [1, 2, 3, 4, 5, 5, 1, 2, 3, 4];
// set gives object
const set1 = new Set(arr1);
// copy or spread out values from set to array
const uniquearr1 = [...set1];
console.log(uniquearr1);
