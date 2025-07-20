const str1 = 'WELCOME TO SLING ACADEMY';
const str2 = 'Welcome to sling academy';

const result = str1.localeCompare(str2, undefined, { sensitivity: 'base' });

if (result === 0) {
	console.log('Strings are equal ignoring case.');
} else {
	console.log('Strings are not equal.');
}
