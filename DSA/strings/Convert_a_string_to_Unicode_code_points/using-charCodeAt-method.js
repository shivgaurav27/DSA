const str = 'Welcome to Sling Academy!';
const code_point = [];

for (let char of str) {
	let codePoint = char.charCodeAt(0);
	console.log(`char ${char}, `, codePoint);
	code_point.push(codePoint);
}

console.log('code_point', code_point);

console.log('now convert codePoint into string now::::');

const restore_str = String.fromCodePoint(...code_point);
console.log('restore_string ::', restore_str);
