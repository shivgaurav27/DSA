const splitArray = (arr, chunk) => {
	let result = [];

	for (let i = 0; i < arr.length; i += chunk) {
		result.push(arr.slice(i, i + chunk));
	}
	return result;
};

const array = ['s', 'l', 'i', 'n', 'g', 'a', 'c', 'a', 'd', 'e', 'm', 'y'];

console.log(splitArray(array, 2));
