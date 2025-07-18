function reverseStr(str) {
	let revese = '';
	for (let i = str.length - 1; i >= 0; i--) {
		revese += str[i];
	}
	return revese;
}

console.log(reverseStr('Welcome to Sling Academy!'));
