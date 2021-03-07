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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nclass display {\n    static appendAllTodos(projectName) {\n        const selectContainer = document.querySelector('#todoContainer');\n        selectContainer.innerHTML = '';\n       \n        for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.myToDos.length; i++) {\n            if (_index__WEBPACK_IMPORTED_MODULE_0__.myToDos[i].project == projectName) {\n            selectContainer.appendChild(document.createElement('li')).className = 'listItem';\n            selectContainer.lastChild.appendChild(document.createElement('label')).className = 'checkLabel';\n            selectContainer.lastChild.querySelector('.checkLabel').setAttribute('for', `${i}`);\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'priority';\n            selectContainer.lastChild.querySelector('.priority').style.backgroundColor = _index__WEBPACK_IMPORTED_MODULE_0__.myToDos[i].priority;\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('input')).id = i;\n            document.getElementById(i).setAttribute('type', 'checkbox');\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'checkmark';\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'labelDisc';\n            selectContainer.lastChild.querySelector('.labelDisc').textContent = _index__WEBPACK_IMPORTED_MODULE_0__.myToDos[i].discription;\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'time';\n            selectContainer.lastChild.querySelector('.time').textContent = _index__WEBPACK_IMPORTED_MODULE_0__.myToDos[i].time;\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'modify';\n            selectContainer.lastChild.firstChild.querySelector('.modify').appendChild(document.createElement('i')).className = 'fa fa-pencil-square-o';\n            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'delete';\n            selectContainer.lastChild.firstChild.querySelector('.delete').appendChild(document.createElement('i')).className = 'fa fa-trash';\n            }\n        }\n    }\n    static get appendAllProjects() {\n        const selectNavContainer = document.querySelector('#projContainer');\n        selectNavContainer.innerHTML = '';\n\n        for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.length; i++) {\n            selectNavContainer.appendChild(document.createElement('label')).className = 'projectListing';\n            selectNavContainer.lastChild.appendChild(document.createElement('input')).setAttribute('name', 'radio');\n            selectNavContainer.lastChild.querySelector('input').type = 'radio';\n            selectNavContainer.lastChild.appendChild(document.createElement('span')).className = 'projSelect';\n            selectNavContainer.lastChild.querySelector('.projSelect').textContent = _index__WEBPACK_IMPORTED_MODULE_0__.myProjects[i];\n        }\n    }\n    static get openNav() {\n        document.getElementById(\"mySidenav\").style.width = \"25vh\";\n    }\n    static get closeNav() {\n        document.getElementById(\"mySidenav\").style.width = \"0\";\n    }\n    static get newProjectForm() {\n        const projectContainer = document.querySelector('#projContainer');\n        projectContainer.appendChild(document.createElement('form')).id = 'newProjForm';\n        projectContainer.querySelector('#newProjForm').setAttribute('submit', 'e.preventDefault();')\n        projectContainer.lastChild.appendChild(document.createElement('input')).value = 'New Project';\n        projectContainer.lastChild.lastChild.type = 'text';\n        projectContainer.lastChild.lastChild.focus();\n        _index__WEBPACK_IMPORTED_MODULE_0__.screenEvent.getNewProject;\n    }\n    static get removeProjectForm() {\n        document.querySelector('#projContainer').lastChild.innerHTML = '';\n    }\n    static get newToDoForm() {\n        let select = document.querySelector('#content');\n        select.appendChild(document.createElement('div')).className = 'filter';\n        select.appendChild(document.createElement('div')).className = 'formContainer';\n        select.lastChild.appendChild(document.createElement('form')).className = 'todoForm';\n        select = document.querySelector('.todoForm');\n        select.appendChild(document.createElement('button')).className = 'closebtn';\n        select.querySelector('.closebtn').setAttribute('type', 'reset');\n        select.querySelector('.closebtn').appendChild(document.createElement('i')).className = 'fa fa-times';\n        select.appendChild(document.createElement('h1')).textContent = 'New ToDo';\n        select.appendChild(document.createElement('p')).textContent = 'Project select'\n        select.appendChild(document.createElement('select')).id = 'projectChoice';\n        select = document.querySelector('#projectChoice');\n         for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.length; i++) {\n            select.appendChild(document.createElement('option')).textContent = _index__WEBPACK_IMPORTED_MODULE_0__.myProjects[i];\n         }\n         _index__WEBPACK_IMPORTED_MODULE_0__.screenEvent.checkProjectSelect;\n         select.value = _index__WEBPACK_IMPORTED_MODULE_0__.projectSelected;\n        select = document.querySelector('.todoForm');\n        select.appendChild(document.createElement('p')).textContent = 'Priority level';\n        select.appendChild(document.createElement('select')).id = 'priorityChoice';\n        select = document.querySelector('#priorityChoice');\n        select.appendChild(document.createElement('option')).textContent = 'Low';\n        select.options[0].value = 'Green';\n        select.appendChild(document.createElement('option')).textContent = 'Medium';\n        select.options[1].value = 'Orange';\n        select.appendChild(document.createElement('option')).textContent = 'High';\n        select.options[2].value = 'Red';\n        select = document.querySelector('.todoForm');\n        select.appendChild(document.createElement('p')).textContent = 'Discription';\n        select.appendChild(document.createElement('textarea')).setAttribute('rows', '4');\n        select.appendChild(document.createElement('p')).textContent = 'When should this task be completed by?';\n        select.appendChild(document.createElement('input')).setAttribute('placeholder', 'mm/dd/yyyy, -:-- --')\n        select.querySelector('input').type = 'datetime-local';\n        select.appendChild(document.createElement('button')).id = 'Submit';\n        select.querySelector('#Submit').textContent = 'Submit';\n\n        _index__WEBPACK_IMPORTED_MODULE_0__.screenEvent.addFormListener;\n    }\n    static get closeToDoForm() {\n        document.querySelector('#content').removeChild(document.querySelector('.formContainer'));\n        document.querySelector('#content').removeChild(document.querySelector('.filter'));\n    }\n    static get toggleLightDark() {\n        const root = document.documentElement;\n        const sliderSelect = document.querySelector('label');\n\n        if(sliderSelect.firstElementChild.checked){\n        // //dark mode\n        root.style.setProperty('--background-one', '#15202B');\n        root.style.setProperty('--background-two', '#1da1f2');\n        root.style.setProperty('--border-color', '#192734');\n        root.style.setProperty('--hover-color', '#22303C');\n        root.style.setProperty('--primary-text', '#FFFFFF');\n        root.style.setProperty('--secondary-text', '#8899A6');\n        }else {\n        //light mode\n        root.style.setProperty('--background-one', '#3B5998');\n        root.style.setProperty('--background-two', '#1DA1F2');\n        root.style.setProperty('--border-color', '#8B9DC3');\n        root.style.setProperty('--hover-color', 'rgba(29, 161, 242, 0.1)');\n        root.style.setProperty('--primary-text', '#F7F7F7');\n        root.style.setProperty('--secondary-text', '#DFE3EE');\n        }\n    }\n};\n\n\n//# sourceURL=webpack://ToDo-List/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects),\n/* harmony export */   \"myToDos\": () => (/* binding */ myToDos),\n/* harmony export */   \"screenEvent\": () => (/* binding */ screenEvent),\n/* harmony export */   \"projectSelected\": () => (/* binding */ projectSelected)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _todotask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todotask */ \"./src/todotask.js\");\n\n\n\n\n\nlet myProjects = [];\nlet myToDos = [];\nlet projectSelected = '';\nconst todo1 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Chores','Red', 'yes', 'Cook Dinner', 'Time');\nconst todo2 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('School','Orange', 'no', 'Feed Dog', 'Time');\nconst todo3 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Work','Green', 'no', 'Shovel Snow', 'Time');\nconst todo4 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Default', 'Green', 'yes', 'todo discription', 'Time');\nconst todo5 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Default', 'Red', 'no', 'test 1234', 'Time');\nconst todo6 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Default', 'Green', 'no', 'zander the cat', 'Time');\nconst todo7 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Default', 'Red', 'no', 'bandit the dog', 'Time');\nconst todo8 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Default', 'Orange', 'no', 'todo discription', 'Time');\nconst todo9 = new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo('Default', 'Orange', 'no', 'asldfjasldfjsfd', 'Time');\nmyProjects.push('Default', todo1.project, todo2.project, todo3.project);\nmyToDos.push(todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9);\nconsole.log(myToDos);\nconsole.log(myProjects);\n\nclass screenEvent {\n    static get getNewProject() {\n        const projectContainer = document.querySelector('#projContainer');\n        projectContainer.querySelector('#newProjForm').addEventListener('submit', (e)=>{e.preventDefault(); myProjects.push(e.target.firstChild.value); _display__WEBPACK_IMPORTED_MODULE_0__.display.removeProjectForm; _display__WEBPACK_IMPORTED_MODULE_0__.display.appendAllProjects; this.addProjectListeners;});\n    }\n    static get addProjectListeners() {\n        const selectProjects = document.querySelector('#projContainer');\n        console.log('test');\n        for (let i = 0; i < myProjects.length; i++) {\n            selectProjects.children[i].addEventListener('click', ()=>{todoContainer.innerHTML = ''; _display__WEBPACK_IMPORTED_MODULE_0__.display.appendAllTodos(myProjects[i])});\n        } \n    }\n    static get addFormListener() {\n        const select = document.querySelector('.todoForm');\n        select.querySelector('.closebtn').addEventListener('click', ()=>{_display__WEBPACK_IMPORTED_MODULE_0__.display.closeToDoForm});\n        select.querySelector('#Submit').addEventListener('click', (e)=>{e.preventDefault(); this.getNewToDo; _display__WEBPACK_IMPORTED_MODULE_0__.display.closeToDoForm; this.checkProjectSelect; _display__WEBPACK_IMPORTED_MODULE_0__.display.appendAllTodos(projectSelected);});\n    }\n    static get getNewToDo() {\n        const formSelect = document.querySelector('.todoForm');\n        myToDos.push(new _todotask__WEBPACK_IMPORTED_MODULE_1__.ToDo(`${formSelect.querySelector('#projectChoice').value}`, `${formSelect.querySelector('#priorityChoice').value}`, 'no', `${formSelect.querySelector('textarea').value}`, `${formSelect.querySelector('input').value}`));\n    }\n    static get checkProjectSelect() {\n        document.querySelector('#projContainer').querySelectorAll('label').forEach(label => {\n             if (label.querySelector('input').checked == true) { return projectSelected = label.lastChild.textContent }})\n    }\n}\n\n(function winLoad(){\n    const addProject = document.getElementById('addProject');\n    const addToDo =  document.getElementById('newTodo');\n    const closeNav = document.getElementById('closeNav');\n    const openNav = document.getElementById('openNav');\n    const sliderToggle = document.getElementById('sliderToggle');\n    const selectProjects = document.querySelector('#projContainer');\n    const todoContainer = document.querySelector('#todoContainer');\n    \n    sliderToggle.addEventListener('click', ()=>{_display__WEBPACK_IMPORTED_MODULE_0__.display.toggleLightDark});\n    openNav.addEventListener('click', ()=>{_display__WEBPACK_IMPORTED_MODULE_0__.display.openNav});\n    closeNav.addEventListener('click', ()=>{_display__WEBPACK_IMPORTED_MODULE_0__.display.closeNav});\n    addProject.addEventListener('click',  ()=>{_display__WEBPACK_IMPORTED_MODULE_0__.display.newProjectForm});\n    addToDo.addEventListener('click', ()=>{_display__WEBPACK_IMPORTED_MODULE_0__.display.newToDoForm;});\n    _display__WEBPACK_IMPORTED_MODULE_0__.display.appendAllProjects;\n    document.querySelector('#projContainer').firstElementChild.firstChild.checked = \"checked\";\n    _display__WEBPACK_IMPORTED_MODULE_0__.display.appendAllTodos('Default');\n    screenEvent.addProjectListeners;\n})();\n\n\n\n//# sourceURL=webpack://ToDo-List/./src/index.js?");

/***/ }),

/***/ "./src/todotask.js":
/*!*************************!*\
  !*** ./src/todotask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;