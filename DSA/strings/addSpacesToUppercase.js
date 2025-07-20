function addSpacesToUppercase(str) {
	let result = '';

	for (let i = 0; i < str.length; i++) {
		const char = str[i];

		if (char === char.toUpperCase() && char !== ' ') {
			if (i !== 0) {
				result += ' ';
			}
		}
		result += char;
	}
	return result;
}

const inputString = 'WelcometoMyAcademyMynameis';
const outputString = addSpacesToUppercase(inputString);

console.log(outputString);
