const splitArray = (arr, chunk) => {
	let chunkArr = [];
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		chunkArr.push(arr[i]);
		if (chunkArr.length === 2) {
			result.push(chunkArr);
			chunkArr = [];
		}
	}
	if (chunkArr.length > 0) {
		result.push(chunkArr);
	}
	return result;
};

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const chunkSize = 2;

console.log(splitArray(originalArray, chunkSize));
