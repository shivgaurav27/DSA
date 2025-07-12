const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8, 9, 1];

const intersection = arr1.filter((item, index, _arr) => {
	return arr2.includes(item);
});

console.log(intersection);
