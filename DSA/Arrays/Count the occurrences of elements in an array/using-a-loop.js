const array = [
	'apple',
	'banana',
	'slingacademy.com',
	'apple',
	'slingacademy.com',
];
let obj = {};
for (let i = 0; i < array.length; i++) {
	const element = array[i];
	obj[element] = (obj[element] || 0) + 1;
}

console.log(obj);
