const calculateSum = (arr) => {
	return arr.reduce((ac, cv, index, _arr) => {
		return ac + cv;
	}, 0);
};

console.log(calculateSum([1, 2, 3, 4, 5]));
