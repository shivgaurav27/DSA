// reduce method in js
/***
 * syntax of reduce
 * array.reduce((ac,cv,index,arr)=>{},[])
 */

const myArray = [1, 5, 6, 7, 8, 9, 10, 11, 20, 30, 33];

let reducedArray = myArray.reduce((ac, cv, index, _arr) => {
	if (cv >= 10) {
		ac.push(cv);
	}
	return ac;
}, []);

console.log('reducedArray:', reducedArray);
