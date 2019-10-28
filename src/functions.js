import {
	firstClickColor, regularClickColor, coordinatesColor,
} from './colors';
import coordinates from './coordinates';

let counterClick = 0;
let counterTime = 0;
let int1 = 0;

// Define 'pre-game' status
export let gameStage = 'pre-game'; // changable value - no const

// Score function print in HTML
function score() {
	document.getElementById('result').innerHTML = counterClick;
}

// Timer function print in HTML
function timer() {
	document.getElementById('time').innerHTML = counterTime;
}

// Reset game function
export function resetGame() {
	gameStage = 'pre-game';
	counterClick = 0;
	counterTime = 0;
	clearInterval(int1);
	timer();
	score();
}

// Game start function - Change game status - Time / Score counter
export function gameStart() {
	gameStage = 'in-game';
	int1 = setInterval(() => {
		counterTime += 1;
		timer();
	}, 1000);
}

// Game over function - Change game status
export function gameEnd() {
	gameStage = 'game-over';

	// Stop timer - setInterval from gameStart function
	clearInterval(int1);
}

// Setting 2 functions - First Click and any other Regular Click
// First Click function
export function firstClick(canvas, e, clickedField) {
	// Array of all affected fields around clickedField
	let affectedFields = [];
	if (gameStage === 'pre-game') {
		affectedFields = [];
	}
	// First click add to counter
	counterClick += 1;
	timer();
	score();

	// On hover change cursor to pointer
	clickedField.hoverCursor = 'pointer';
	// Fill field green color
	clickedField.set('fill', firstClickColor);
	// Change default "white" value of color property to green
	clickedField.color = firstClickColor;

	// For loop trough coordinates array
	for (let i = 0; i < coordinates.length; i += 1) {
		// X coordinate = clickedField.x coordinate + first value of each array of coordinates array
		const x = clickedField.x + coordinates[i][0];
		// Y coordinate = clickedField.y coordinate + second value of each array of coordinates array
		const y = clickedField.y + coordinates[i][1];
		// Push results object in array with properties x/y and value of coordinates
		affectedFields.push({
			x,
			y,
		});
	}
	// For loop trough all of 100 objects
	for (let i = 0; i < e.target.canvas._objects.length; i += 1) {
		// For loop trough affectedFields array
		for (let j = 0; j < affectedFields.length; j += 1) {
			// If any of 100 object has the same x/y like objects in affectedFields
			if (
				e.target.canvas._objects[i].x === affectedFields[j].x
				&& e.target.canvas._objects[i].y === affectedFields[j].y
			) {
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
export function regularClick(canvas, e, clickedField, gameOver) {
	// Array of all affected fields around clickedField
	let affectedFields = [];
	if (gameStage === 'pre-game') {
		affectedFields = [];
	}
	// If statment - if clickedField has property yellow then fill green and change
	// the value of color propety to green
	if (clickedField.color === coordinatesColor) {
		clickedField.set('fill', regularClickColor);
		clickedField.color = regularClickColor;

		// For loop trough coordinates array
		for (let i = 0; i < coordinates.length; i += 1) {
			// X coordinate = clickedField.x coordinate + first value of each array of coordinates array
			const x = clickedField.x + coordinates[i][0];
			// Y coordinate = clickedField.y coordinate + second value of each array of coordinates array
			const y = clickedField.y + coordinates[i][1];
			// Push results in object in array with properties x/y and value of coordinates
			affectedFields.push(
				{
					x, y,
				}
			);
		}
		// Loop trough all of 100 objects and fill all fields with #fbfcf2 unless they are 'green'
		// Add change color propety to white
		for (let i = 0; i < e.target.canvas._objects.length; i += 1) {
			if (e.target.canvas._objects[i].color !== firstClickColor) {
				e.target.canvas._objects[i].set('fill', '#fbfcf2');
				e.target.canvas._objects[
					i
				].color = 'white';

				// Loop and fill all white fields following x,y coordinates
				for (let j = 0; j < coordinates.length; j += 1) {
					// If object.x == affectedFields.x then color yellow
					if (e.target.canvas._objects[i].x === affectedFields[j].x
						&& e.target.canvas._objects[i].y === affectedFields[j].y
					) {
						e.target.canvas._objects[i].set('fill', coordinatesColor);
						e.target.canvas._objects[i].color = coordinatesColor;
					}
				}
			}
		}

		canvas.renderAll();
		// Loop if there is yellow buttons left
		for (let i = 0; i < e.target.canvas._objects.length; i += 1) {
			if (e.target.canvas._objects[i].color === coordinatesColor) {
				counterClick += 1;
				// If there is yellow buttons - repeat regularClick function
				score();
				return;
			}
		}

		// if not start gameOver() function
		gameOver(e.target);
	}
}
