const cart = [
	{ id: 1, name: 'Item 1', price: 20, quantity: 2 },
	{ id: 2, name: 'Item 2', price: 15, quantity: 1 },
	{ id: 3, name: 'Item 3', price: 30, quantity: 1 },
	{ id: 4, name: 'Item 4', price: 10, quantity: 4 },
	{ id: 5, name: 'Item 5', price: 25, quantity: 3 },
];

let total = 0;

cart.forEach((item, index, _arr) => {
	total += item['price'] * item['quantity'];
});

console.log(total);
// total : 200
