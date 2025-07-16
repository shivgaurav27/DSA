let arr = [
	'sling',
	'academy',
	'blue',
	'dog',
	'sling',
	'red',
	'forest',
	'sling',
	'blue',
	'red',
];

let obj = arr.reduce((ac, cv, index, _arr) => {
	ac[cv] = (ac[cv] || 0) + 1;
	return ac;
}, {});

console.log(obj);
let entries = Object.entries(obj);
entries.sort((a, b) => b[1] - a[1]);

let maxFreq = entries[0][1];

let modes = entries.filter((key, value) => value === maxFreq).map((key) => key);
