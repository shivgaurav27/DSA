function addLeadingZeros3(str, totalLength, fromStart = true, fromEnd = false) {
	if (fromStart) {
		while (str.length < totalLength) {
			str = '0' + str;
		}
	} else {
		while (str.length < totalLength) {
			str = str + '0';
		}
	}
	return str;
}

// Example usage
const str = '2023';
const paddedstartStr = addLeadingZeros3(str, 6, true);
console.log(paddedstartStr);

const paddedEndStr = addLeadingZeros3(str, 6, false, true);
console.log(paddedEndStr);
