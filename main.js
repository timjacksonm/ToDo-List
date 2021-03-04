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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _todotask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todotask */ \"./src/todotask.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet myProjects = [];\nlet myToDos = [];\nconst todo1 = new _todotask__WEBPACK_IMPORTED_MODULE_0__.ToDo('Chores','Red', 'yes', 'Cook Dinner', 'Time');\nconst todo2 = new _todotask__WEBPACK_IMPORTED_MODULE_0__.ToDo('School','Orange', 'no', 'Feed Dog', 'Time');\nconst todo3 = new _todotask__WEBPACK_IMPORTED_MODULE_0__.ToDo('Work','Green', 'no', 'Shovel Snow', 'Time');\nmyToDos.push(todo1, todo2, todo3);\nconsole.log(myToDos);\n\nclass display {\n    static get appendAllTodos() {\n        const selectContainer = document.querySelector('#todoContainer');\n\n        for (let i = 0; i < myToDos.length; i++) {\n            selectContainer.appendChild(document.createElement('li')).className = 'listItem';\n            selectContainer.lastChild.appendChild(document.createElement('label')).className = 'checkLabel';\n            selectContainer.lastChild.querySelector('.checkLabel').setAttribute('for', `${i}`);\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'priority';\n            selectContainer.lastChild.querySelector('.priority').style.backgroundColor = myToDos[i].priority;\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('input')).id = i;\n            document.getElementById(i).setAttribute('type', 'checkbox');\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'checkmark';\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'labelDisc';\n            selectContainer.lastChild.querySelector('.labelDisc').textContent = myToDos[i].discription;\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'time';\n            selectContainer.lastChild.querySelector('.time').textContent = myToDos[i].time;\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'modify';\n            selectContainer.lastChild.firstChild.querySelector('.modify').appendChild(document.createElement('i')).className = 'fa fa-pencil-square-o';\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'delete';\n            selectContainer.lastChild.firstChild.querySelector('.delete').appendChild(document.createElement('i')).className = 'fa fa-trash';\n        }\n    }\n};\n\n\n//# sourceURL=webpack://ToDo-List/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n(function eventListeners() {\n    \n    const addProjectButton = document.getElementById('addProject');\n    addProjectButton.addEventListener('click',  ()=>{});\n})();\n_display__WEBPACK_IMPORTED_MODULE_0__.display.appendAllTodos;\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ (() => {

eval("// class Project {\n//     constructor(name) {\n//         this.name = name;\n//     }\n\n//     myProjects = [];\n// }\n// export { Project };\n\n//# sourceURL=webpack://ToDo-List/./src/project.js?");

/***/ }),

/***/ "./src/todotask.js":
/*!*************************!*\
  !*** ./src/todotask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n    constructor(project,priority, checked, discription, time) {\n        this.project = project;\n        this.priority = priority;\n        this.checked = checked;\n        this.discription = discription;\n        this.time = time;\n    }\n\n    setPriority(priority) {\n      this.priority = priority;\n    }\n\n    setChecked(checked) {\n       this.checked = checked;\n    }\n\n    setDisription(discription) {\n       this.discription = discription;\n    }\n\n    setTime(time) {\n        this.time = time;\n    }\n}\n\n\n//# sourceURL=webpack://ToDo-List/./src/todotask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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