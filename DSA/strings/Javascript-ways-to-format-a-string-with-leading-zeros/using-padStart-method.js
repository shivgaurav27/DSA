/***
 * method : padStart
 * syntax : string.padStart(targetLength [, padString])
 *
 * method:padEnd
 * syntax : string.padEnd(targetLength [, padString])
 *
 */

// e.g

const s = '123';

console.log(s.padStart(5, '0'));
// output: 00123

console.log(s.padStart(10, '0'));
// output: 0000000123

//  padEnd

console.log(s.padEnd(5, '0'));
// output:12300

console.log(s.padEnd(10, '0'));
// output: 1230000000
