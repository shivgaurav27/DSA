const input = ['dog', 'cat', 'dog', 'chicken', 'turtle', 'turtle'];

const unique = input.reduce((ac, cv, index, _arr) => {
	if (ac.indexOf(cv) < 0) {
		ac.push(cv);
	}
	return ac;
}, []);

console.log(unique);
