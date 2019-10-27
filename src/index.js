// Reference canvas element (with id="c")
const canvas = new fabric.Canvas("c");

import { createDesign } from './design';
import { firstClick, regularClick, gameStart, gameStage, gameOver } from './functions';

createDesign(canvas, 500, 500, 50, 50);



// Click events and start game
canvas.on('mouse:down', function (e) {
	if (gameStage === 'pre-game') {
		gameStart();
		// Passing e.target to clickedField argument of firstClick function
		firstClick(canvas, coordinates, e, e.target);
	} else if (gameStage === 'in-game') {
		// Passing e.target to clickedField argument of regularClick function
		regularClick(canvas, e, coordinates, e.target, gameOver);
	}
	canvas.renderAll();
});


