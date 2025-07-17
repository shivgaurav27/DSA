/***
 * Problem: Check if a string is the same forwards and backwards
 */

const isPalindrome = (str) => {
	let reversedStr = str.split('').reverse().join('');
	return str.toLowerCase() === reversedStr.toLowerCase();
};

console.log(isPalindrome('madam'));
