const removeElements = (arr, unwantedElements) => {
	return arr.filter((item, _index, _arr) => !unwantedElements.includes(item));
};

const words = ['hello', 'world', 'Doremon', 'lighthouse', 'darkhouse'];
console.log(removeElements(words, ['lighthouse', 'darkhouse']));
