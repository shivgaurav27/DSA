const arr1 = ['blue', 'red', 'green'];
const arr2 = ['blue', 'red', 'green'];

let isEqual = true;

if (arr1.length === arr2.length) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			isEqual = false;
		}
	}
} else {
	isEqual = false;
}

console.log(isEqual);
