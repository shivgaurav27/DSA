function findCommonItems(arr1, arr2) {
	let set1 = new Set(arr1);
	let commonItems = arr2.filter((item, index, _arr) => set1.has(item));
	return commonItems;
}

// / example arrays
let array1 = [1, 2, 3, 4, 5, 9, 0];
let array2 = [3, 4, 5, 6, 7, 8, 7, 2];

console.log(findCommonItems(array1, array2));
