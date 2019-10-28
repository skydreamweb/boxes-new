import { fabric } from 'fabric';
import { backgroundColor } from './colors';
//
export default function createDesign(canvas, fullWidth, fullHeight, blockWidth, blockHeight) {
	// Sets width of this canvas instance
	canvas.setWidth(fullWidth);
	// Sets height of this canvas instance
	canvas.setHeight(fullHeight);

	// Create grid 10*10
	for (let i = 0; i < fullWidth / blockWidth; i += 1) {
		for (let j = 0; j < fullHeight / blockHeight; j += 1) {
			const rowOptions = {
				width: blockWidth,
				height: blockHeight,
				top: blockHeight * i,
				left: blockWidth * j,
				rx: 5,
				ry: 5,
				hasControls: false,
				stroke: '#eee',
				fill: backgroundColor,
				lockMovementX: true,
				lockMovementY: true,
				hoverCursor: 'pointer',
				x: j + 1,
				y: i + 1,
				idCColor: 'blank',
				idRColor: 'blank',
				color: 'white',
			};

			// Rectangle class
			const row = new fabric.Rect(rowOptions);

			// Adds objects to collection, Canvas or Group, then renders canvas
			canvas.add(row);
		}
	}
}
