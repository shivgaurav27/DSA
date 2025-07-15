const removeElements = (arr, unwantedElements) => {
	let new_array = [];

	arr.forEach((item, index, _arr) => {
		if (unwantedElements.indexOf(item) === -1) {
			new_array.push(item);
		}
	});
	return new_array;
};

const words = ['hello', 'world', 'lighthouse', 'darkhouse'];
console.log(removeElements(words, ['lighthouse', 'darkhouse']));
