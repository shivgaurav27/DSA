function add_underscore(str) {
	return str.split(' ').join('_');
}

let newStr = 'Convert a string to Unicode code points';

console.log(add_underscore(newStr));
