/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/*! exports provided: firstClickColor, regularClickColor, coordinatesColor, backgroundColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstClickColor\", function() { return firstClickColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regularClickColor\", function() { return regularClickColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coordinatesColor\", function() { return coordinatesColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backgroundColor\", function() { return backgroundColor; });\nvar firstClickColor = 'blue';\nvar regularClickColor = 'blue';\nvar coordinatesColor = 'yellow';\nvar backgroundColor = '#fbfcf2';\n\n\n//# sourceURL=webpack:///./src/colors.js?");

/***/ }),

/***/ "./src/design.js":
/*!***********************!*\
  !*** ./src/design.js ***!
  \***********************/
/*! exports provided: createDesign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDesign\", function() { return createDesign; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/colors.js\");\n\nvar createDesign = function createDesign(canvas, fullWidth, fullHeight, blockWidth, blockHeight) {\n  // Sets width of this canvas instance\n  canvas.setWidth(fullWidth); //Sets height of this canvas instance\n\n  canvas.setHeight(fullHeight); // Create grid 10*10\n\n  for (var i = 0; i < fullWidth / blockWidth; i += 1) {\n    for (var j = 0; j < fullHeight / blockHeight; j += 1) {\n      var rowOptions = {\n        width: blockWidth,\n        height: blockHeight,\n        top: blockHeight * i,\n        left: blockWidth * j,\n        rx: 5,\n        ry: 5,\n        hasControls: false,\n        stroke: '#eee',\n        fill: _colors__WEBPACK_IMPORTED_MODULE_0__[\"backgroundColor\"],\n        lockMovementX: true,\n        lockMovementY: true,\n        hoverCursor: 'pointer',\n        x: j + 1,\n        y: i + 1,\n        idCColor: 'blank',\n        idRColor: 'blank',\n        color: 'white'\n      }; // Rectangle class\n\n      var row = new fabric.Rect(rowOptions); // Adds objects to collection, Canvas or Group, then renders canvas \n\n      canvas.add(row);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/design.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: gameStage, gameOver, firstClick, regularClick, gameStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameStage\", function() { return gameStage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOver\", function() { return gameOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstClick\", function() { return firstClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"regularClick\", function() { return regularClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameStart\", function() { return gameStart; });\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/colors.js\");\n\nvar counterClick = 0;\nvar counterTime = 0; // Define 'pre-game' status\n\nvar gameStage = 'pre-game'; // Define time/click counters\n\nvar int1 = 0; // Game start function - Change game status - Time / Score counter\n\nvar gameStart = function gameStart() {\n  gameStage = 'in-game';\n  int1 = setInterval(function () {\n    counterTime += 1;\n    timer();\n  }, 1000);\n}; // Game over function - Change game status\n\n\nvar gameOver = function gameOver() {\n  gameStage = 'game-over'; // Stop timer - setInterval from gameStart function\n\n  clearInterval(int1);\n}; // Score function print in HTML\n\nvar score = function score() {\n  document.getElementById(\"result\").innerHTML = counterClick;\n}; // Timer function print in HTML\n\n\nvar timer = function timer() {\n  document.getElementById(\"time\").innerHTML = counterTime;\n}; // Setting 2 functions - First Click and any other Regular Click\n// First Click function\n\n\nvar firstClick = function firstClick(canvas, coordinates, e, clickedField) {\n  // First click add to counter\n  counterClick = counterClick + 1;\n  timer();\n  score(); // On hover change cursor to pointer\n\n  clickedField.hoverCursor = 'pointer'; // Fill field green color\n\n  clickedField.set('fill', _colors__WEBPACK_IMPORTED_MODULE_0__[\"firstClickColor\"]); // Change default \"white\" value of color property to green\n\n  clickedField.color = _colors__WEBPACK_IMPORTED_MODULE_0__[\"firstClickColor\"]; // Array of all affected fields around clickedField\n\n  var affectedFields = []; // For loop trough coordinates array\n\n  for (var i = 0; i < coordinates.length; i += 1) {\n    // X coordinate = clickedField.x coordinate + first value of each array of coordinates array\n    var x = clickedField.x + coordinates[i][0]; // Y coordinate = clickedField.y coordinate + second value of each array of coordinates array\n\n    var y = clickedField.y + coordinates[i][1]; // Push results object in array with properties x/y and value of coordinates\n\n    affectedFields.push({\n      x: x,\n      y: y\n    });\n  } // For loop trough all of 100 objects\n\n\n  for (var _i = 0; _i < e.target.canvas._objects.length; _i += 1) {\n    // For loop trough affectedFields array\n    for (var j = 0; j < affectedFields.length; j++) {\n      // If any of 100 object has the same x/y like objects in affectedFields\n      if (e.target.canvas._objects[_i].x === affectedFields[j].x && e.target.canvas._objects[_i].y === affectedFields[j].y) {\n        // Fill yellow and change color propety to yellow\n        e.target.canvas._objects[_i].set('fill', _colors__WEBPACK_IMPORTED_MODULE_0__[\"coordinatesColor\"]);\n\n        e.target.canvas._objects[_i].color = _colors__WEBPACK_IMPORTED_MODULE_0__[\"coordinatesColor\"];\n      }\n    }\n  } // Renders both the top canvas and the secondary container canvas.\n\n\n  canvas.renderAll();\n}; // Second += 1 click /Regular Click function \n\n\nvar regularClick = function regularClick(canvas, e, coordinates, clickedField, gameOver) {\n  // If statment - if clickedField has property yellow then fill green and change \n  // the value of color propety to green \n  if (clickedField.color === _colors__WEBPACK_IMPORTED_MODULE_0__[\"coordinatesColor\"]) {\n    clickedField.set('fill', _colors__WEBPACK_IMPORTED_MODULE_0__[\"regularClickColor\"]);\n    clickedField.color = _colors__WEBPACK_IMPORTED_MODULE_0__[\"regularClickColor\"]; // Array of all affected fields around clickedField\n\n    var affectedFields = []; // For loop trough coordinates array\n\n    for (var i = 0; i < coordinates.length; i += 1) {\n      // X coordinate = clickedField.x coordinate + first value of each array of coordinates array\n      var x = clickedField.x + coordinates[i][0]; // Y coordinate = clickedField.y coordinate + second value of each array of coordinates array\n\n      var y = clickedField.y + coordinates[i][1]; // Push results in object in array with properties x/y and value of coordinates\n\n      affectedFields.push({\n        x: x,\n        y: y\n      });\n    } // Loop trough all of 100 objects and fill all fields with #fbfcf2 unless they are 'green'\n    // Add change color propety to white\n\n\n    for (var _i2 = 0; _i2 < e.target.canvas._objects.length; _i2 += 1) {\n      if (e.target.canvas._objects[_i2].color !== _colors__WEBPACK_IMPORTED_MODULE_0__[\"firstClickColor\"]) {\n        e.target.canvas._objects[_i2].set('fill', '#fbfcf2');\n\n        e.target.canvas._objects[_i2].color = 'white'; // Loop and fill all white fields following x,y coordinates \n\n        for (var j = 0; j < coordinates.length; j += 1) {\n          // If object.x == affectedFields.x then color yellow  \n          if (e.target.canvas._objects[_i2].x === affectedFields[j].x && e.target.canvas._objects[_i2].y === affectedFields[j].y) {\n            e.target.canvas._objects[_i2].set('fill', _colors__WEBPACK_IMPORTED_MODULE_0__[\"coordinatesColor\"]);\n\n            e.target.canvas._objects[_i2].color = _colors__WEBPACK_IMPORTED_MODULE_0__[\"coordinatesColor\"];\n          }\n        }\n      }\n    }\n\n    canvas.renderAll(); // Loop if there is yellow buttons left\n\n    for (var _i3 = 0; _i3 < e.target.canvas._objects.length; _i3 += 1) {\n      if (e.target.canvas._objects[_i3].color == _colors__WEBPACK_IMPORTED_MODULE_0__[\"coordinatesColor\"]) {\n        counterClick = counterClick + 1; // If there is yellow buttons - repeat regularClick function\n\n        score();\n        return;\n      }\n    } // if not start gameOver() function\n\n\n    gameOver(e.target);\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design */ \"./src/design.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n// Reference canvas element (with id=\"c\")\nvar canvas = new fabric.Canvas(\"c\");\n\n\nObject(_design__WEBPACK_IMPORTED_MODULE_0__[\"createDesign\"])(canvas, 500, 500, 50, 50); // Click events and start game\n\ncanvas.on('mouse:down', function (e) {\n  if (_functions__WEBPACK_IMPORTED_MODULE_1__[\"gameStage\"] === 'pre-game') {\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"gameStart\"])(); // Passing e.target to clickedField argument of firstClick function\n\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"firstClick\"])(canvas, coordinates, e, e.target);\n  } else if (_functions__WEBPACK_IMPORTED_MODULE_1__[\"gameStage\"] === 'in-game') {\n    // Passing e.target to clickedField argument of regularClick function\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"regularClick\"])(canvas, e, coordinates, e.target, _functions__WEBPACK_IMPORTED_MODULE_1__[\"gameOver\"]);\n  }\n\n  canvas.renderAll();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });