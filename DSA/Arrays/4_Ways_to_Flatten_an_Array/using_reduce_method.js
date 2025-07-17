const multiDimensionalArr = [
	[1, 2],
	[3, 4, [5, 6]],
];

const flattendArr = (arr) => {
	return arr.reduce((ac, cv, index, _arr) => {
		return Array.isArray(cv) ? ac.concat(flattendArr(cv)) : ac.concat(cv);
	}, []);
};

console.log(flattendArr(multiDimensionalArr));
