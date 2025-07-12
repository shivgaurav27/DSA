const getUniqueArr = (arr) => {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1 && arr[i] !== '') {
			result.push(arr[i]);
		}
	}
	return result;
};

console.log(getUniqueArr([1, 2, 3, 3, 2, 2, 2, 1]));
console.log(getUniqueArr(['a', 'b', 'c', 'c', 'b', 'b', 'b', 'a']));
