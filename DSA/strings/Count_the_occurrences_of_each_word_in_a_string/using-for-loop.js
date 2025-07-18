function countWordOccurance(str) {
	let myObj = {};
	let strArr = str.split(' ');
	for (let i = 0; i < strArr.length; i++) {
		if (myObj[strArr[i]] == undefined) {
			myObj[strArr[i]] = 1;
		} else {
			myObj[strArr[i]] += 1;
		}
	}
	return myObj;
}

let newStr =
	'The brown dog jumped over the lazy dog when the brown fox was sleeping';

console.log(countWordOccurance(newStr));
