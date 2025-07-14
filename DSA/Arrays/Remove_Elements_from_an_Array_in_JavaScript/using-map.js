// map method
/***
 *
 * array.map((item,index,arr)=>{logic goes here})
 */

const people = [
	{ name: 'Wes', age: 24 },
	{ name: 'Kait', age: 32 },
	{ name: 'Irv', age: 9 },
	{ name: 'Lux', age: 7 },
];

const whoCanDrive = people.map((item, index, _arr) => {
	if (item.age >= 18) {
		return item;
	}
});

// but it reuns undefined where condition not matach as it is map not filter
console.log('whoCanDrive:', whoCanDrive);
