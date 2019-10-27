// Reference canvas element (with id="c")
const canvas = new fabric.Canvas("c");
import { createDesign, firstClick, regularClick } from './design';
createDesign(canvas, 500, 500, 50, 50);

// Define 'pre-game' status
let gameStage = 'pre-game';

// Define time/click counters
let counterTime = 0;
let counterClick = 0;
let int1 = 0;

// Timer function print in HTML
let timer = function () {
	document.getElementById("time").innerHTML = counterTime;
}

// Score function print in HTML
let score = function () {
	document.getElementById("result").innerHTML = counterClick;
}


// Array of possible combinations to add to / substract from clicked field[x, y]
const coordinates = [
	[-3, 0],
	[3, 0],
	[0, -3],
	[0, 3],
	[2, 2],
	[-2, -2],
	[2, -2],
	[-2, 2]
];

// Game start function - Change game status - Time / Score counter
let gameStart = function () {
	gameStage = 'in-game';
	int1 = setInterval(() => {
		counterTime += 1;
		timer();
		score();
	}, 1000);
}

// Game over function - Change game status
let gameOver = function () {
	gameStage = 'game-over';

	// Stop timer - setInterval from gameStart function
	clearInterval(int1);
};
// Click events and start game
canvas.on('mouse:down', function (e) {
	if (gameStage === 'pre-game') {
		gameStart();
		// Passing e.target to clickedField argument of firstClick function
		firstClick(canvas, counterClick, coordinates, e, e.target);
	} else if (gameStage === 'in-game') {
		// Passing e.target to clickedField argument of regularClick function
		regularClick(canvas, e, coordinates, counterClick, e.target);
	}
	canvas.renderAll();
});


