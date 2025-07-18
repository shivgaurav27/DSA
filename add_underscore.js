function add_underscore(str) {
	return str.split(' ').join('_');
}

let newStr = '3 Ways to Reverse a String in JavaScript';

console.log(add_underscore(newStr));
