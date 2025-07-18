let text = 'The quick brown fox jumps over the lazy fox.';
let wordToFind = 'fox';

function check(str, word) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === word[0]) {
			for (let j = 1; j < word.length; j++) {
				if (str[i + j] !== word[j]) {
					break;
				}
				if (j === word.length - 1) {
					return true;
				}
			}
		}
	}
	return false;
}

console.log(check(text, wordToFind));
