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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\nconsole.log(_modules_dom__WEBPACK_IMPORTED_MODULE_0__.projList);\nconsole.log(_modules_dom__WEBPACK_IMPORTED_MODULE_0__.todoList);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todos\": () => (/* binding */ Todos)\n/* harmony export */ });\nclass Project {\n    constructor(name){\n        this.projName = name;\n        this.todolist = []; //array of todos\n    }\n}\n\nclass Todos {\n    constructor(title, desc, dueDate){\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n        this.isDone = false;\n        // this.isRemoved = false; //trash icon\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projList\": () => (/* binding */ projList),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/modules/constructor.js\");\n\n\nconst todoList = [{title: \"Buy\", desc: \"Apple Juice\", dueDate: \"12/24/2020\"}]; //default Todo in Default TodoList\nconst projList = [{projName : \"Default Project\", todoList}]; //default Proj in ProjArray\nconst form = document.getElementById(\"todo-form\");\nconst projForm = document.getElementById(\"project-form\");\n\nconst addTodo = (e) =>{\n    e.preventDefault();\n    const title = document.getElementById(\"todo-title\").value; //get values\n    const desc = document.getElementById(\"todo-desc\").value;\n    const date = document.getElementById(\"todo-date\").value;\n\n    if (title.length === 0 || desc.length === 0 || date.length === 0) {\n        alert(\"Please, fill all the fields\");\n        return;\n    }\n    const newTodo = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Todos(title, desc, date); //create new Books using the constructor\n    todoList.push(newTodo);\n    form.reset(); //reset text fields\n}\n\nconst addProject = (e) =>{\n    e.preventDefault();\n    const name = document.getElementById(\"project-name\").value;\n    if (name.length === 0){\n        alert(\"Project name is empty, please do not submit blanks!\");\n        return;\n    }\n    const newProj = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Project(name); //create new Books using the constructor\n    projList.push(newProj);\n    projForm.reset(); //reset text fields\n}\n\nform.addEventListener(\"submit\", addTodo);\nprojForm.addEventListener(\"submit\", addProject);\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/dom.js?");

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