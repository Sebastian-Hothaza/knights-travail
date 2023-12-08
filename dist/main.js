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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPath: () => (/* binding */ getPath)\n/* harmony export */ });\n\n\nconst posnFactory = (x,y,parent) => {\n    let children = []; \n\n    // Given a posn, returns an array of posn corresponding to reachable posn\n    function getNext(){\n        let result = [];\n\n        // Trying each of the 8 candidates\n        if (this.y+2<9){ \n            if (this.x-1>0) result.push(posnFactory(this.x-1,this.y+2,this));\n            if (this.x+1<9) result.push(posnFactory(this.x+1,this.y+2,this));\n        }\n        if (this.x+2<9){ \n            if (this.y+1<9) result.push(posnFactory(this.x+2,y+1,this));\n            if (this.y-1>0) result.push(posnFactory(this.x+2,y-1,this));\n        }\n        if (this.y-2>0){ \n            if (this.x+1<9) result.push(posnFactory(this.x+1,this.y-2,this));\n            if (this.x-1>0) result.push(posnFactory(this.x-1,this.y-2,this));\n        }\n        if (this.x-2>0){ \n            if (this.y-1>0) result.push(posnFactory(this.x-2,this.y-1,this));\n            if (this.y+1<9) result.push(posnFactory(this.x-2,this.y+1,this));\n        }\n        return result;\n    }\n\n    // Given a posn, returns an array of posns tracing back up to root\n    function tracePath(posn, root, arr){\n        if (posn === root) return arr.reverse();\n        arr.push(posn.parent);\n        tracePath(posn.parent, root, arr);\n    }\n    return{\n        get x(){return x;}, set x(newX){x=newX},\n        get y(){return y;}, set y(newY){y=newY},\n        get parent(){return parent;}, set parent(newParent){parent=newParent},\n        get children(){return children;}, set children(newChildren){children=newChildren},\n        getNext, tracePath\n    };\n};\n\n// Returns nicely formatted text corresponding to given posn array\nfunction printPosnArray(arr){\n    let text=\"\"\n    for (let i=0; i<arr.length-1; i++){\n        text+=\"(\"+arr[i].x+\",\"+arr[i].y+\")-->\"\n    }\n    text+=\"(\"+arr[arr.length-1].x+\",\"+arr[arr.length-1].y+\")\"\n    return text;\n}\n\n\n// Returns text-friendly array of posns visited on shortest path from start to destination \n// REQUIRES: inout be valid. Sanitation should be done in index.js\nfunction getPath(startX, startY, endX, endY){\n    const myPosnStart = posnFactory(startX, startY);\n    const myPosnEnd = posnFactory(endX, endY);\n    let result = [];\n    \n    // We will apply a DFS style traversal approach\n    myPosnStart.children = myPosnStart.getNext(); // Get children of starting node\n    let queue = myPosnStart.children;\n \n    while (queue.length){\n        // Base case, visitation\n        result.push(queue[0]);\n        if (queue[0].x === myPosnEnd.x && queue[0].y === myPosnEnd.y) {\n            queue[0].tracePath(queue[0], myPosnStart, result);\n            break;\n        }\n        queue = queue.concat(queue[0].getNext()) // Merge arrays\n        queue.splice(0,1); // Remove posn from front of queue\n        result.splice(0,1);\n    }\n    return printPosnArray(result);\n}\n\n\n\n//# sourceURL=webpack://knights-travail/./src/algo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _algo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algo */ \"./src/algo.js\");\n\n\nconst startPosn = document.querySelector(\"#startPosn\");\nconst endPosn = document.querySelector(\"#endPosn\");\nconst result = document.querySelector(\"#result\");\n\ndocument.querySelector(\"#clear\").addEventListener(\"click\", () => {\n    startPosn.value = \"\";\n    endPosn.value = \"\";\n})\n\n// Calulate handling\ndocument.querySelector(\"#submit\").addEventListener(\"click\", () => {\n    if (startPosn.value === endPosn.value){\n        result.textContent = \"ERROR: Coordinates cannot be the same!\";\n    } else if (startPosn.value>10 && startPosn.value<89 &&endPosn.value>10 && endPosn.value<89){\n        result.textContent = \"Squares visited on shortest path: \"+(0,_algo__WEBPACK_IMPORTED_MODULE_0__.getPath)(Math.floor(startPosn.value/10), startPosn.value%10,\n        Math.floor(endPosn.value/10), endPosn.value%10,);\n    } else{\n        result.textContent = \"ERROR: Coordinates out of range!\";\n    }\n})                        \n\n\n//# sourceURL=webpack://knights-travail/./src/index.js?");

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