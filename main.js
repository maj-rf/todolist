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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n//entry point\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_0__.render)();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todos\": () => (/* binding */ Todos)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n//module for Classes\nclass Project {\n    constructor(name, id){\n        this.name = name;\n        this.id = id;\n        this.todolist = JSON.parse(localStorage.getItem(_dom__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_TODOLIST_KEY)) || []; //array of todos\n    }\n}\n\nclass Todos {\n    constructor(title, desc, dueDate){\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n        this.isDone = false;\n        // this.isRemoved = false; //trash icon\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"saveStorage\": () => (/* binding */ saveStorage),\n/* harmony export */   \"showThisProject\": () => (/* binding */ showThisProject)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n//module to display stuff\nconst render = () => { //render left Nav\n    clearElement(_dom__WEBPACK_IMPORTED_MODULE_0__.projectUL);\n    _dom__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(list =>{\n        const listLI = document.createElement(\"li\");\n        listLI.classList.add(\"project-name\");\n        listLI.innerText = list.name;\n        listLI.setAttribute(\"id\", `${list.id}`)\n        _dom__WEBPACK_IMPORTED_MODULE_0__.projectUL.appendChild(listLI);\n    });\n}\n\nconst clearElement = (element) => { //clear and replace existing renders\n    while(element.firstChild){\n        element.removeChild(element.firstChild);\n    }\n}\n\nconst showThisProject = (e) => { //show Project and Todo list\n    console.log(_dom__WEBPACK_IMPORTED_MODULE_0__.projectList[e.target.id - 1].name) //THIS IS THE KEY\n    const content = document.querySelector(\".content\");\n    const contentUL = document.createElement(\"ul\");\n    const contentULForm = document.createElement(\"form\");\n    contentULForm.classList.add(\"todo-form\");\n    clearElement(content);\n    contentULForm.innerHTML = `\n    <div class=\"form-input\">\n        <input type=\"text\" placeholder=\"To-do Title..\" id=\"todo-title\">\n    </div>\n    <div class=\"form-input\">\n        <input type=\"text\" placeholder=\"Description..\" id=\"todo-desc\">\n    </div>\n    <div class=\"form-input\">\n        <input type=\"date\" id=\"todo-date\">\n    </div>\n    <div class=\"form-input\"> \n        <input type=\"submit\" id=\"todo-submit\" value=\"Add New To-do\">\n    </div>`\n    contentUL.innerText = e.target.innerText;\n    content.appendChild(contentULForm);\n    content.appendChild(contentUL);\n\n    contentULForm.addEventListener(\"submit\", function(event){ //add Todo\n        event.preventDefault();\n        const title = document.querySelector(\"#todo-title\").value;\n        const desc = document.querySelector(\"#todo-desc\").value;\n        const date = document.querySelector(\"#todo-date\").value;\n        const contentLI = document.createElement(\"li\");\n        clearElement(contentLI);\n        contentLI.innerText = `${title}, ${desc}, ${date}`;\n        contentUL.appendChild(contentLI);\n    });\n}\n\n\n\n\nconst saveStorage = () => {\n    localStorage.setItem(_dom__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_PROJECTS_KEY,JSON.stringify(_dom__WEBPACK_IMPORTED_MODULE_0__.projectList));\n    render();\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectUL\": () => (/* binding */ projectUL),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"LOCAL_STORAGE_PROJECTS_KEY\": () => (/* binding */ LOCAL_STORAGE_PROJECTS_KEY),\n/* harmony export */   \"LOCAL_STORAGE_TODOLIST_KEY\": () => (/* binding */ LOCAL_STORAGE_TODOLIST_KEY)\n/* harmony export */ });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\n\n//module for DOM stuff\nconst addProject = (e) => {\n    e.preventDefault();\n    let id = 0;\n    for(let count = 0; count <= projectList.length; count++){ //id generator\n        id++;\n    }\n    const projectName = document.querySelector(\"#pname-input\").value;   \n    const newProject = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, id);\n    projectList.push(newProject);\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.render)();\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.saveStorage)();\n    projectForm.reset();\n}\n\nconst LOCAL_STORAGE_PROJECTS_KEY = \"todo.projectList\";\nconst LOCAL_STORAGE_TODOLIST_KEY = \"todo.todoList\";\nlet projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];\n// [{name : \"Work\", id: 1, todolist: [\"Do Excel Stuff\"]}, \n// {name : \"To Buy\", id: 2, todolist: [\"Banana\", \"Protein Shake\"]},\n//  {name : \"To Play\", id: 3, todolist: [\"Finish Pokemon Sword\", \"Play Tetris\"]}];\nconst projectForm = document.querySelector(\"#project-form\");\nconst projectUL = document.querySelector(\".project-ul\");\n\nprojectForm.addEventListener(\"submit\", addProject);\nprojectUL.addEventListener(\"click\", function(e) {\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.showThisProject)(e);\n});\n\n//console.log(projectList);\n\n\n//# sourceURL=webpack://todolist/./src/modules/dom.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;