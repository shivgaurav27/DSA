const arr1 = ['dog', 'cat', 'bird'];
const arr2 = ['dog', 'cat', 'bird'];

// note if array not sorted then sort both array and then compare
const isEqual = arr1.every((ele, index, _arr) => {
	return ele === arr2[index];
});

console.log(isEqual);
