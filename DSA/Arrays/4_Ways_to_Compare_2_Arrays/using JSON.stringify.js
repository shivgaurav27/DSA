const arr1 = [
	{ id: 1, name: 'Sling Academy' },
	{ id: 2, name: 'Raging Wolf' },
	[1, 2, 3],
];

const arr2 = [
	{ id: 2, name: 'Raging Wolf' },
	[1, 2, 3],
	{ id: 1, name: 'Sling Academy' },
];

const sortArray = (arr) => {
	return arr.sort((a, b) => {
		if (typeof a === 'object' && typeof b === 'object') {
			return JSON.stringify(a) > JSON.stringify(b) ? 1 : -1;
		}
		return a > b ? 1 : -1;
	});
};

const isEqual =
	JSON.stringify(sortArray(arr1)) === JSON.stringify(sortArray(arr2));

console.log(isEqual);
