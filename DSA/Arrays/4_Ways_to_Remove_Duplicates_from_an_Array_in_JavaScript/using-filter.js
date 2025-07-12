const inputArray = [
	{ name: 'John Doe', age: 35 },
	{ name: 'Jane Doe', age: 25 },
	{ name: 'John Doe', age: 35 },
];
const multidimentionalArr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 9, 9],
	[1, 2, 3],
	[4, 5, 6],
];

function uniqueFunc(arr) {
	const uniqueArr = arr.filter((value, index, _arr) => {
		const _value = JSON.stringify(value);
		// getting index of each value and comapare firstindex getting from find index
		// if both equal return value otherwise not retun filter will do this itself
		return (
			index ===
			arr.findIndex((item) => {
				return JSON.stringify(item) == _value;
			})
		);
	});
	return uniqueArr;
}

// console.log(uniqueFunc(inputArray));

console.log(uniqueFunc(multidimentionalArr));
