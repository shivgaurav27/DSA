const array = [
	'apple',
	'banana',
	'slingacademy.com',
	'apple',
	'slingacademy.com',
];

const count = array.reduce((ac, cv, indexedDB, _arr) => {
	ac[cv] = (ac[cv] || 0) + 1;
	return ac;
}, {});

console.log(count);
