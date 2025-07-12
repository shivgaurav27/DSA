const oldArray = [
	{ name: 'Tom', age: 28 },
	{ name: 'John', age: 32 },
];

const json = JSON.stringify(oldArray);
const newArr = JSON.parse(json);

console.log(newArr);
