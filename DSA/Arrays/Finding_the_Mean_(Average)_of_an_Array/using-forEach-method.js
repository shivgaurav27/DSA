const numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach((item) => {
	sum += item;
});
let avg = sum / numbers.length;
console.log(avg);
