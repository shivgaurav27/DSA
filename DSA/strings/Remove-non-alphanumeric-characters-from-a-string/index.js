function removeNonAlphanumeric(str) {
	let alphanum =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

	let result = '';

	for (let i = 0; i < str.length; i++) {
		if (alphanum.includes(str[i])) {
			result += str[i];
		}
	}

	return result;
}

// Test the function
let test = 'Welcome to Sling Academy! My name is @!#$%%[]{}-+*~`|\\<>,.?/';
console.log(removeNonAlphanumeric(test));
