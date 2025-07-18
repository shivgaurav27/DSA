const ids = [1, 2, 3, 4, 5];

const queryString = '?ids=' + encodeURIComponent(JSON.stringify(ids));
const myurl = 'https://www.example.com/products' + queryString;

console.log(myurl);

console.log('You can extract and get back the array of ids like so:');

const url = new URL(myurl);

const receivedQueryStrings = JSON.parse(url.searchParams.get('ids'));

console.log(receivedQueryStrings);
