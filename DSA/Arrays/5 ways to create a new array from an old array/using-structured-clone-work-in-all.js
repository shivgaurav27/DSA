const oldArray = [
	{
		name: 'Tom',
		age: 28,
		nested: {
			name: 'yoyo',
		},
	},
	{ name: 'John', age: 32 },
];

const newArr = structuredClone(oldArray);
newArr[0].nested.name = 'har har mahadev';

console.log(newArr);
console.log(oldArray);
