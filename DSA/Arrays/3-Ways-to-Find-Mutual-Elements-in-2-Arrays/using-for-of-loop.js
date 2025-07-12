const arr1 = ['s', 'l', 'i', 'n', 'g', 'a', 'c', 'a', 'd', 'm', 'y'];
const arr2 = ['h', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'];

const commonItems = [];

for (const item of arr1) {
	if (arr2.includes(item)) {
		commonItems.push(item);
	}
}

console.log(commonItems);
