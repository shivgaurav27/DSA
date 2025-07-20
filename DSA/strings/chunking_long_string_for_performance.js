function chunkString(str, length) {
	const size = Math.ceil(str.length / length);
	const chunks = new Array(size);

	let o = 0;
	for (let i = 0; i < size; i++) {
		chunks[i] = str.substr(o, length);
		o += length;
	}

	return chunks;
}

const bigString = 'abcdefghij';
const segments = chunkString(bigString, 3);
console.log(segments);
