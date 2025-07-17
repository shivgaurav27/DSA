/***
 * Problem: Print numbers 1–100,
 * but replace multiples of 3 with "Fizz,"
 * multiples of 5 with "Buzz," and both with "FizzBuzz."
 */

const fizzBuzz = () => {
	for (let i = 0; i < 100; i++) {
		let output = '';
		if (i % 3 === 0) output += 'Fizz';
		if (i % 5 === 0) output += 'Buzz';
		console.log(output || i);
	}
};

fizzBuzz();
