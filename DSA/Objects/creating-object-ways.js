/***
 * using Objects literal
 */

const person = {
	name: 'wolf',
	age: 99,
	hobbies: ['reading', 'eating', 'gaming'],
	address: {
		city: 'West Sling Academy',
		country: 'The Lands Between',
	},
	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	},
};

/**
 * constructor function
 */
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.sayHello = function () {
		console.log(`Hello my name is ${this.name}`);
	};
}

const person1 = new Person('Ranni The Witch', 300);

/**
 * also in ES6 its recommended way now
 */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`Hello my name is ${this.name}`);
	}
}

const person2 = new Person('Bad Man', 123);
