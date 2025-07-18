function countSubstringOrWord(str, word) {
	let segments = str.split(word);
	return segments.length - 1;
}

let text = 'The quick brown fox jumps over the lazy fox.';
let wordToFind = 'fox';

console.log(countSubstringOrWord(text, wordToFind));
