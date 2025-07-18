const cart = [
	{ id: 1, name: 'Item 1', price: 20, quantity: 2 },
	{ id: 2, name: 'Item 2', price: 15, quantity: 1 },
	{ id: 3, name: 'Item 3', price: 30, quantity: 1 },
	{ id: 4, name: 'Item 4', price: 10, quantity: 4 },
	{ id: 5, name: 'Item 5', price: 25, quantity: 3 },
];

const total = cart.reduce((ac, cv, index, _arr) => {
	return (ac += cv.price * cv.quantity);
}, 0);

console.log(total);
// output:200
