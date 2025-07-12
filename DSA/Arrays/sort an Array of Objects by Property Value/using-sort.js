const sortAnArrayOfObjects = (arr, property_name, order = 'asc') => {
	const sortOrder = arr.sort((a, b) => {
		if (a[property_name] < b[property_name]) {
			return -1;
		}
		if (a[property_name] > b[property_name]) {
			return 1;
		}
		return 0;
	});

	if (order === 'desc') {
		return sortOrder.reverse();
	}
	return sortOrder;
};

const products = [
	{ name: 'Product 1', price: 100 },
	{ name: 'Product 2', price: 50 },
	{ name: 'Product 3', price: 150 },
	{ name: 'Product 4', price: 200 },
];

const sortedProducts = sortAnArrayOfObjects(products, 'price');
const reversesortedProducts = sortAnArrayOfObjects(products, 'price', 'desc');
console.log(sortedProducts);
console.log(reversesortedProducts);
