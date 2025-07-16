const check = (arr, obj) => {
	for (let i = 0; i < arr.length; i++) {
		if (JSON.stringify(arr[i]) === JSON.stringify(obj)) {
			return true;
		}
	}
	return false;
};

// an array of deeply nested objects about employees in a company
const employees = [
	{
		name: 'John',
		age: 30,
		contact: {
			email: 'john@slingacademy.com',
			phone: 123,
		},
	},
	{
		name: 'Jane',
		age: 25,
		contact: {
			email: 'jane@slingacademy.com',
			phone: 456,
		},
	},
];

// some person object
// we need to check if this person is in the employees array
const somePerson = {
	name: 'John',
	age: 30,
	contact: {
		email: 'john@slingacademy.com',
		phone: 123,
	},
};

console.log(check(employees, somePerson));
