import { firstClickColor, regularClickColor, coordinatesColor } from './colors';

let counterClick = 0;
let counterTime = 0;
// Define 'pre-game' status
export let gameStage = 'pre-game';

// Define time/click counters

let int1 = 0;

// Game start function - Change game status - Time / Score counter
const gameStart = function () {
	gameStage = 'in-game';
	int1 = setInterval(() => {
		counterTime += 1;
		timer();

	}, 1000);
}

// Game over function - Change game status
export let gameOver = function () {
	gameStage = 'game-over';

	// Stop timer - setInterval from gameStart function
	clearInterval(int1);
};

// Score function print in HTML
const score = function () {
	document.getElementById("result").innerHTML = counterClick;
}

// Timer function print in HTML
const timer = function () {
	document.getElementById("time").innerHTML = counterTime;
}

// Setting 2 functions - First Click and any other Regular Click
// First Click function
const firstClick = function (canvas, coordinates, e, clickedField) {
	// First click add to counter

	counterClick = counterClick + 1;
	
	timer();
	score();

	// On hover change cursor to pointer
	clickedField.hoverCursor = 'pointer';
	// Fill field green color
	clickedField.set('fill', firstClickColor);
	// Change default "white" value of color property to green
	clickedField.color = firstClickColor;

	// Array of all affected fields around clickedField
	const affectedFields = [];

	// For loop trough coordinates array
	for (let i = 0; i < coordinates.length; i += 1) {
		// X coordinate = clickedField.x coordinate + first value of each array of coordinates array
		const x = clickedField.x + coordinates[i][0];
		// Y coordinate = clickedField.y coordinate + second value of each array of coordinates array
		const y = clickedField.y + coordinates[i][1];

		// Push results object in array with properties x/y and value of coordinates
		affectedFields.push({
			x,
			y
		});
	}
	// For loop trough all of 100 objects
	for (let i = 0; i < e.target.canvas._objects.length; i += 1) {
		// For loop trough affectedFields array
		for (let j = 0; j < affectedFields.length; j++) {
			// If any of 100 object has the same x/y like objects in affectedFields
			if (e.target.canvas._objects[i].x === affectedFields[j].x &&
				e.target.canvas._objects[i].y === affectedFields[j].y) {
				// Fill yellow and change color propety to yellow
				e.target.canvas._objects[i].set('fill', coordinatesColor);
				e.target.canvas._objects[i].color = coordinatesColor;
			}
		}
	}

	// Renders both the top canvas and the secondary container canvas.
	canvas.renderAll();
}

// Second += 1 click /Regular Click function 
const regularClick = function (canvas, e, coordinates, clickedField, gameOver) {


	// If statment - if clickedField has property yellow then fill green and change 
	// the value of color propety to green 
	if (clickedField.color === coordinatesColor) {
		clickedField.set('fill', regularClickColor);
		clickedField.color = regularClickColor;
		// Array of all affected fields around clickedField
		const affectedFields = [];
		// For loop trough coordinates array
		for (let i = 0; i < coordinates.length; i += 1) {
			// X coordinate = clickedField.x coordinate + first value of each array of coordinates array
			const x = clickedField.x + coordinates[i][0];
			// Y coordinate = clickedField.y coordinate + second value of each array of coordinates array
			const y = clickedField.y + coordinates[i][1];
			// Push results in object in array with properties x/y and value of coordinates
			affectedFields.push({
				x,
				y
			});
		}
		// Loop trough all of 100 objects and fill all fields with #fbfcf2 unless they are 'green'
		// Add change color propety to white
		for (let i = 0; i < e.target.canvas._objects.length; i += 1) {
			if (e.target.canvas._objects[i].color !== firstClickColor) {
				e.target.canvas._objects[i].set('fill', '#fbfcf2');
				e.target.canvas._objects[i].color = 'white';

				// Loop and fill all white fields following x,y coordinates 
				for (let j = 0; j < coordinates.length; j += 1) {
					// If object.x == affectedFields.x then color yellow  
					if (e.target.canvas._objects[i].x === affectedFields[j].x &&
						e.target.canvas._objects[i].y === affectedFields[j].y) {
						e.target.canvas._objects[i].set('fill', coordinatesColor);
						e.target.canvas._objects[i].color = coordinatesColor;
					}
				}
			}
		}

		canvas.renderAll();

		// Loop if there is yellow buttons left
		for (let i = 0; i < e.target.canvas._objects.length; i += 1) {
			if (e.target.canvas._objects[i].color == coordinatesColor) {
				counterClick = counterClick + 1;
				// If there is yellow buttons - repeat regularClick function
				score();
				return
			}
		}


		// if not start gameOver() function
		gameOver(e.target);
	}
}


export { firstClick, regularClick, gameStart }