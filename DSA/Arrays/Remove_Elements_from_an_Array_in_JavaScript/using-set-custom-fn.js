const removeElements = (arr, unwantedElements) => {
	const unwantedSets = new Set(unwantedElements);

	return arr.filter((item, _index, _arr) => !unwantedSets.has(item));
};

const words = ['hello', 'world', 'lighthouse', 'darkhouse'];
console.log(removeElements(words, ['lighthouse', 'darkhouse']));
