// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Define the wrapText function
function wrapText(context, text, maxWidth) {
	const words = text.split(' ');
	let lines = [];
	let currentLine = words[0];

	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const width = context.measureText(currentLine + ' ' + word).width;
		if (width < maxWidth) {
			currentLine += ' ' + word;
		} else {
			lines.push(currentLine);
			currentLine = word;
		}
	}

	lines.push(currentLine); // Push the last line
	return lines;
}

// Example text and maxWidth
const text = 'This is a simple example of text wrapping in HTML5 Canvas.';
const maxWidth = 300;

// Call the wrapText function to break the text into lines
const wrappedLines = wrapText(context, text, maxWidth);

// Now draw the wrapped text on the canvas
let lineHeight = 30; // Space between lines
let yPosition = 50; // Starting position for the first line

context.font = '20px Arial'; // Set the font style

// Draw each line of wrapped text
wrappedLines.forEach((line) => {
	context.fillText(line, 50, yPosition); // Draw each line starting at x = 50, y = yPosition
	yPosition += lineHeight; // Move down for the next line
});
