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

/***/ "./src/design.js":
/*!***********************!*\
  !*** ./src/design.js ***!
  \***********************/
/*! exports provided: createDesign, firstClick, regularClick */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\src\\\\design.js: Unexpected token (114:45)\\n\\n\\u001b[0m \\u001b[90m 112 | \\u001b[39m\\t\\t\\u001b[90m// Add change color propety to white\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 113 | \\u001b[39m\\t\\t\\u001b[36mfor\\u001b[39m (let i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m;\\u001b[39m i \\u001b[33m<\\u001b[39m e\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mcanvas\\u001b[33m.\\u001b[39m_objects\\u001b[33m.\\u001b[39mlength\\u001b[33m;\\u001b[39m i \\u001b[33m+=\\u001b[39m \\u001b[35m1\\u001b[39m) {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 114 | \\u001b[39m\\t\\t\\t\\u001b[36mif\\u001b[39m (e\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mcanvas\\u001b[33m.\\u001b[39m_objects[i]\\u001b[33m.\\u001b[39mcolor \\u001b[33m!==\\u001b[39m ) {\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m\\t\\t\\t                                          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 115 | \\u001b[39m\\t\\t\\t\\te\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mcanvas\\u001b[33m.\\u001b[39m_objects[i]\\u001b[33m.\\u001b[39mset(\\u001b[32m'fill'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m'#fbfcf2'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 116 | \\u001b[39m\\t\\t\\t\\te\\u001b[33m.\\u001b[39mtarget\\u001b[33m.\\u001b[39mcanvas\\u001b[33m.\\u001b[39m_objects[i]\\u001b[33m.\\u001b[39mcolor \\u001b[33m=\\u001b[39m \\u001b[32m'white'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 117 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6420:17)\\n    at Parser.unexpected (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7773:16)\\n    at Parser.parseExprAtom (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8996:20)\\n    at Parser.parseExprSubscripts (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8556:23)\\n    at Parser.parseMaybeUnary (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8536:21)\\n    at Parser.parseExprOpBaseRightExpr (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8496:34)\\n    at Parser.parseExprOpRightExpr (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8489:21)\\n    at Parser.parseExprOp (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8452:27)\\n    at Parser.parseExprOps (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:17)\\n    at Parser.parseMaybeConditional (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8375:23)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8325:21)\\n    at Parser.parseExpression (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8275:23)\\n    at Parser.parseHeaderExpression (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10278:22)\\n    at Parser.parseIfStatement (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10362:22)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10054:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10585:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10572:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10556:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10085:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10009:17)\\n    at node.body.withTopicForbiddingContext (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10619:60)\\n    at Parser.withTopicForbiddingContext (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9884:14)\\n    at Parser.parseFor (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10619:22)\\n    at Parser.parseForStatement (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10331:19)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10034:21)\\n    at Parser.parseStatement (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10009:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10585:25)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10572:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Dalibor\\\\Desktop\\\\code\\\\boxes\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10556:10)\");\n\n//# sourceURL=webpack:///./src/design.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _design__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design */ \"./src/design.js\");\nconsole.log(\"Hello World from your main file!\"); // Reference canvas element (with id=\"c\")\n\nvar canvas = new fabric.Canvas(\"c\");\nconsole.log(\"hello\");\n\nObject(_design__WEBPACK_IMPORTED_MODULE_0__[\"createDesign\"])(canvas, 500, 500, 50, 50); // Define 'pre-game' status\n\nvar gameStage = 'pre-game'; // Define time/click counters\n\nvar counterTime = 0;\nvar counterClick = 0;\nvar int1 = 0; // Timer function print in HTML\n\nvar timer = function timer() {\n  document.getElementById(\"time\").innerHTML = counterTime;\n}; // Score function print in HTML\n\n\nvar score = function score() {\n  document.getElementById(\"result\").innerHTML = counterClick;\n}; // Array of possible combinations to add to / substract from clicked field[x, y]\n\n\nvar coordinates = [[-3, 0], [3, 0], [0, -3], [0, 3], [2, 2], [-2, -2], [2, -2], [-2, 2]]; // Game start function - Change game status - Time / Score counter\n\nvar gameStart = function gameStart() {\n  gameStage = 'in-game';\n  int1 = setInterval(function () {\n    counterTime += 1;\n    timer();\n    score();\n  }, 1000);\n}; // Game over function - Change game status\n\n\nvar gameOver = function gameOver() {\n  gameStage = 'game-over'; // Stop timer - setInterval from gameStart function\n\n  clearInterval(int1);\n}; // Click events and start game\n\n\ncanvas.on('mouse:down', function (e) {\n  if (gameStage === 'pre-game') {\n    gameStart(); // Passing e.target to clickedField argument of firstClick function\n\n    Object(_design__WEBPACK_IMPORTED_MODULE_0__[\"firstClick\"])(canvas, counterClick, coordinates, e, e.target);\n  } else if (gameStage === 'in-game') {\n    // Passing e.target to clickedField argument of regularClick function\n    Object(_design__WEBPACK_IMPORTED_MODULE_0__[\"regularClick\"])(canvas, e, coordinates, counterClick, e.target);\n  }\n\n  canvas.renderAll();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });