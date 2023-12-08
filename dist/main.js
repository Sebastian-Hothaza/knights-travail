/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/algo.js":
/*!*********************!*\
  !*** ./src/algo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPath: () => (/* binding */ getPath)\n/* harmony export */ });\n\n\nconst posnFactory = (x,y) => {\n\n    // Given a posn, returns an araay of posn corresponding to reachable posn\n    function getNext(){\n\n    }\n\n    function print(){\n        console.log(\"(\"+x+\",\"+y+\")\");\n    }\n    return{\n        get x(){return x;}, set x(newX){x=newX},\n        get y(){return y;}, set y(newY){y=newY},\n        print\n    };\n};\n\n\n\n\nfunction getPath(startX, startY, endX, endY){\n    const myPosnStart = posnFactory(startX, startY);\n    const myPosnEnd = posnFactory(endX, endY);\n    \n\n    return \"SHORTEST PATH\"\n}\n\n\n\n//# sourceURL=webpack://knights-travail/./src/algo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _algo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algo */ \"./src/algo.js\");\n\n\nconst startPosn = document.querySelector(\"#startPosn\");\nconst endPosn = document.querySelector(\"#endPosn\");\n\n\ndocument.querySelector(\"#clear\").addEventListener(\"click\", () => {\n    startPosn.value = \"\";\n    endPosn.value = \"\";\n})\n\n// Calulate handling\ndocument.querySelector(\"#submit\").addEventListener(\"click\", () => {\n    const result = document.querySelector(\"#result\");\n    result.textContent = (0,_algo__WEBPACK_IMPORTED_MODULE_0__.getPath)(Math.floor(startPosn.value/10), startPosn.value%10,\n                                    Math.floor(endPosn.value/10), endPosn.value%10,);\n})\n\n\n\n//# sourceURL=webpack://knights-travail/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;