let arr = [];
let length = 6;

function randomDigits(digitsNum) {
	for (let i = 0; i < digitsNum; i++) {
		let randomNumber = Math.floor(Math.random() * 10);
		arr.push(randomNumber);
	}
	return arr.join('');
}

console.log(randomDigits(length));
