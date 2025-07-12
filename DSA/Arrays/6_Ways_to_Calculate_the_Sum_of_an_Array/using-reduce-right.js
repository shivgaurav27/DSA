const sum = [1, 2, 3, 4, 5].reduceRight((ac, cv, index, _arr) => {
	return ac + cv;
}, 0);

console.log(sum);
