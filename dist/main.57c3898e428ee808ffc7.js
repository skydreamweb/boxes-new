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
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\src\\\\functions.js: Export 'first' is not defined (123:8)\\n\\n\\u001b[0m \\u001b[90m 121 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 122 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 123 | \\u001b[39m\\u001b[36mexport\\u001b[39m {first}\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6420:17)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9946:14)\\n    at Parser.parse (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11447:17)\\n    at parse (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11483:38)\\n    at parser (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:168:34)\\n    at normalizeFile (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:102:11)\\n    at runSync (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design */ \"./src/design.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n// Reference canvas element (with id=\"c\")\nvar canvas = new fabric.Canvas(\"c\");\n\n\nObject(_design__WEBPACK_IMPORTED_MODULE_0__[\"createDesign\"])(canvas, 500, 500, 50, 50); // Define 'pre-game' status\n\nvar gameStage = 'pre-game'; // Define time/click counters\n\nvar counterTime = 0;\nvar int1 = 0; // Timer function print in HTML\n\nvar timer = function timer() {\n  document.getElementById(\"time\").innerHTML = counterTime;\n}; // Array of possible combinations to add to / substract from clicked field[x, y]\n\n\nvar coordinates = [[-3, 0], [3, 0], [0, -3], [0, 3], [2, 2], [-2, -2], [2, -2], [-2, 2]]; // Game start function - Change game status - Time / Score counter\n\nvar gameStart = function gameStart() {\n  gameStage = 'in-game';\n  int1 = setInterval(function () {\n    counterTime += 1;\n    timer();\n  }, 1000);\n}; // Game over function - Change game status\n\n\nvar gameOver = function gameOver() {\n  gameStage = 'game-over'; // Stop timer - setInterval from gameStart function\n\n  clearInterval(int1);\n}; // Click events and start game\n\n\ncanvas.on('mouse:down', function (e) {\n  if (gameStage === 'pre-game') {\n    gameStart(); // Passing e.target to clickedField argument of firstClick function\n\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"firstClick\"])(canvas, coordinates, e, e.target);\n  } else if (gameStage === 'in-game') {\n    // Passing e.target to clickedField argument of regularClick function\n    Object(_functions__WEBPACK_IMPORTED_MODULE_1__[\"regularClick\"])(canvas, e, coordinates, e.target, gameOver);\n  }\n\n  canvas.renderAll();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });