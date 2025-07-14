const mean = (arr) => {
	if (arr.length < 1) {
		return;
	}
	return (
		arr.reduce((ac, cv, index, _arr) => {
			return ac + cv;
		}, 0) / arr.length
	);
};

const array = [1, 2, 3, 4, 5, 5.5, 6.6, 10, 11.9, 12];
console.log(mean(array));
