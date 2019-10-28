import { fabric } from 'fabric';
// Reference canvas element (with id="c")
import createDesign from './design';
import {
	firstClick,
	regularClick,
	gameStart,
	gameStage,
	gameEnd,
	resetGame,
} from './functions';

let canvas = new fabric.Canvas('c');

createDesign(canvas, 500, 500, 50, 50);

// Click events and start game
canvas.on('mouse:down', (e) => {
	if (gameStage === 'pre-game') {
		gameStart();
		// Passing e.target to clickedField argument of firstClick function
		firstClick(canvas, e, e.target);
	} else if (gameStage === 'in-game') {
		// Passing e.target to clickedField argument of regularClick function
		regularClick(canvas, e, e.target, gameEnd);
	}
	canvas.renderAll();
});

document.querySelector('#reset').addEventListener('click', () => {
	canvas = new fabric.Canvas('c');
	createDesign(canvas, 500, 500, 50, 50);
	resetGame();
});

// Click events and start game
canvas.on('mouse:down', (e) => {
	if (gameStage === 'pre-game') {
		gameStart();
		// Passing e.target to clickedField argument of firstClick function
		firstClick(canvas, e, e.target);
	} else if (gameStage === 'in-game') {
		// Passing e.target to clickedField argument of regularClick function
		regularClick(canvas, e, e.target, gameEnd);
	}
	canvas.renderAll();
});
