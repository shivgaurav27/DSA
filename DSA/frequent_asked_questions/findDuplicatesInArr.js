/**
 * Problem: Return duplicates in an array.
 */

const findDuplicates = (arr) => {
	let seen = new Set();
	let duplicates = new Set();

	for (let item of arr) {
		if (seen.has(item)) {
			duplicates.add(item);
		} else {
			seen.add(item);
		}
	}

	return Array.from(duplicates);
};
const array = [1, 2, 3, 4, 2, 5, 6, 7, 3];
console.log(findDuplicates(array));
