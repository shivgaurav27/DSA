// Splice method js
/***
 * splice(start, deleteCount, item1, item2, /* …, )
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removedItems = numbers.splice(2, 2);
console.log('removedItems:', removedItems);
console.log('numbers:', numbers);
