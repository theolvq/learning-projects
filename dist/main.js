/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (() => {

eval("const createHeader = () => {\n  const body = document.querySelector('body');\n  const header = document.createElement('header');\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n  const navElements = ['About us', 'Menu', 'Contact'];\n  body.appendChild(header);\n  header.appendChild(nav);\n  nav.appendChild(ul);\n  for (let i = 0; i < navElements.length; i++) {\n    const li = document.createElement('li');\n    ul.appendChild(li);\n    li.innerText = navElements[i];\n  }\n};\n\nwindow.addEventListener('load', createHeader);\n\n\n//# sourceURL=webpack://restaurant-page/./src/Header.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (() => {

eval("const menu = [\n  {\n    id: 1,\n    category: 'Appetizer',\n    name: 'Caesar Salad',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$9.90',\n    image: '~/img/caesar-salad.jpg',\n  },\n  {\n    id: 2,\n    category: 'Appetizer',\n    name: 'Fish Tacos',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$11.90',\n    image: '~/img/fish-tacos.jpg',\n  },\n  {\n    id: 3,\n    category: 'Appetizer',\n    name: 'Vegan Salad',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$9.90',\n    image: '~/img/vegan-salad.jpg',\n  },\n  {\n    id: 4,\n    category: 'Appetizer',\n    name: 'Charcuterie Board',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$9.90',\n    image: '~/img/snack-board.jpg',\n  },\n  {\n    id: 5,\n    category: 'Main',\n    name: 'Vegan Burger',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$16.90',\n    image: '~/img/vegan-burger.jpg',\n  },\n  {\n    id: 6,\n    category: 'Main',\n    name: 'Super Burrito',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$13.90',\n    image: '~/img/burrito.jpg',\n  },\n  {\n    id: 7,\n    category: 'Main',\n    name: 'Meat Burger',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$15.90',\n    image: '~/img/meat-burger.jpg',\n  },\n  {\n    id: 8,\n    category: 'Main',\n    name: 'Pasta Carbonara',\n    description:\n      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque amet unde molestiae a beatae magnam!',\n    price: '$14.90',\n    image: '~/img/pasta-carbonara.jpg',\n  },\n];\n\nconst createMenu = () => {\n  menu.forEach((el, i) => {\n    const img = document.createElement('img');\n    img.src = el.image;\n  });\n};\n\nwindow.addEventListener('load', createMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Menu__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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