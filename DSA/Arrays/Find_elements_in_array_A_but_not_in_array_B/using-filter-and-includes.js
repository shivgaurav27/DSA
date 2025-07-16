const A = [1, 2, 3, 4, 5];
const B = [2, 4, 6];

const result = A.filter((item, index, _arr) => {
	if (!B.includes(item)) {
		return true;
	}
	return false;
});

console.log(result);
