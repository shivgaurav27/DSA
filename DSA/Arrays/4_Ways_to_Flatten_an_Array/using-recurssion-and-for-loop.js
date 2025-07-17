const array = [
	['s', 'l', 'i', 'n', 'g'],
	['a', 'c', 'd', 'e', 'm', 'y', ['z', [1, 2, 3, [4, [5, [6, [7, [8]]]]]]]],
];

function flatenArray(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatenArray(arr[i]));
		} else {
			result = result.concat(arr[i]);
		}
	}
	return result;
}

console.log(flatenArray(array));
