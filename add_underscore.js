function add_underscore(str) {
	return str.split(' ').join('_');
}

let newStr = 'Counting the occurrences of a specific word/substring';

console.log(add_underscore(newStr));
