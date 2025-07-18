function countWordOccurance(str) {
	let strArr = str.split(' ');

	return strArr.reduce((ac, cv, index, _arr) => {
		ac[cv] = (ac[cv] || 0) + 1;
		return ac;
	}, {});
}

let newStr =
	'The brown dog jumped over the lazy dog when the brown fox was sleeping';

console.log(countWordOccurance(newStr));
