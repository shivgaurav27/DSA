const privateCounter = () => {
	let count = 0;
	return {
		inc: () => count++,
		dec: () => count--,
		getCount: () => count,
	};
};

const counter = privateCounter();
counter.inc();
counter.inc();
counter.inc();
counter.inc();
counter.dec();

console.log(counter.getCount());
