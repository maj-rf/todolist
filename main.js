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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todos\": () => (/* binding */ Todos)\n/* harmony export */ });\n//module for Classes\nclass Project {\n    constructor(name, id){\n        this.name = name;\n        this.id = id;\n        this.todolist = []; //JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOLIST_KEY)) || []; //array of todos\n    }\n}\n\nclass Todos {\n    constructor(title, desc, dueDate){\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n        this.complete = false;\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/constructor.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"saveAndDisplay\": () => (/* binding */ saveAndDisplay)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\n//module to display stuff\nconst render = () => { //render everything\n    clearElement(_dom__WEBPACK_IMPORTED_MODULE_0__.projectUL);\n    renderProjects();\n    const selectedList = _dom__WEBPACK_IMPORTED_MODULE_0__.projectList.find(list => list.id.toString() === _dom__WEBPACK_IMPORTED_MODULE_0__.currentProjectID);\n    if (_dom__WEBPACK_IMPORTED_MODULE_0__.currentProjectID == null) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__.projectDisplayContainer.style.display = 'none'\n    } else {\n      _dom__WEBPACK_IMPORTED_MODULE_0__.projectDisplayContainer.style.display = ''\n      _dom__WEBPACK_IMPORTED_MODULE_0__.projectTitleElement.innerText = selectedList.name;\n      clearElement(_dom__WEBPACK_IMPORTED_MODULE_0__.todoContainer);\n      renderTasks(selectedList);\n    }\n}\n\nconst renderProjects = () => { //render leftNav\n    _dom__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(list =>{\n        const listLI = document.createElement(\"li\");\n        listLI.classList.add(\"project-name\");\n        listLI.innerText = list.name;\n        listLI.setAttribute(\"id\", `${list.id}`);\n        if(list.id === _dom__WEBPACK_IMPORTED_MODULE_0__.currentProjectID) {\n        listLI.classList.add(\"active-project\");\n        }\n        _dom__WEBPACK_IMPORTED_MODULE_0__.projectUL.appendChild(listLI);\n    });\n}\n\nconst renderTasks = (selectedList) => { //render Todos in specific Project\n    selectedList.todolist.forEach(task => {\n      const taskElement = document.importNode(_dom__WEBPACK_IMPORTED_MODULE_0__.taskTemplate.content, true) //Use html Template\n      const label = taskElement.querySelector('label');\n      label.append(`${task.title}, ${task.desc}, ${task.dueDate}`);\n      _dom__WEBPACK_IMPORTED_MODULE_0__.todoContainer.appendChild(taskElement)\n    })\n}\n\nconst clearElement = (element) => { //clear and replace existing display elements\n    while(element.firstChild){\n        element.removeChild(element.firstChild);\n    }\n}\nconst saveAndDisplay = () => {\n    localStorage.setItem(_dom__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_PROJECTS_KEY,JSON.stringify(_dom__WEBPACK_IMPORTED_MODULE_0__.projectList));\n    localStorage.setItem(_dom__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY, _dom__WEBPACK_IMPORTED_MODULE_0__.currentProjectID);\n    render();\n}\n\n //,showThisProject};\n\n//# sourceURL=webpack://todolist/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectUL\": () => (/* binding */ projectUL),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"LOCAL_STORAGE_PROJECTS_KEY\": () => (/* binding */ LOCAL_STORAGE_PROJECTS_KEY),\n/* harmony export */   \"LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY\": () => (/* binding */ LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY),\n/* harmony export */   \"currentProjectID\": () => (/* binding */ currentProjectID),\n/* harmony export */   \"projectDisplayContainer\": () => (/* binding */ projectDisplayContainer),\n/* harmony export */   \"projectTitleElement\": () => (/* binding */ projectTitleElement),\n/* harmony export */   \"todoContainer\": () => (/* binding */ todoContainer),\n/* harmony export */   \"taskTemplate\": () => (/* binding */ taskTemplate)\n/* harmony export */ });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\n\n//module for DOM stuff\nconst projectForm = document.querySelector(\"#project-form\");\nconst projectUL = document.querySelector(\".project-ul\");\nconst projectNameInput = document.querySelector(\"#pname-input\")\nconst projectDisplayContainer = document.querySelector('[data-project-display-container]'); //content container \nconst projectTitleElement = document.querySelector('[data-project-title]'); //project title\nconst deleteListButton = document.querySelector('[data-delete-list-button]') //delete project btn\n//const listCountElement = document.querySelector('[data-project-count]');\nconst todoContainer = document.querySelector('[data-tasks]');\nconst taskTemplate = document.getElementById('task-template');\nconst newTaskForm = document.querySelector('[data-new-task-form]');\nconst newTaskInput = document.querySelector('[data-new-task-input]');\nconst newTaskDesc = document.querySelector('[data-new-todo-desc]');\nconst newTaskDate = document.querySelector('[data-new-todo-duedate]');\n\nconst LOCAL_STORAGE_PROJECTS_KEY = \"todo.projectList\";\nconst LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY = \"todo.currentProjectID\";\nlet projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];\nlet currentProjectID = localStorage.getItem(LOCAL_STORAGE_CURRENT_PROJECT_ID_KEY); // currentProject\n\nconst addProject = (e) => {\n    e.preventDefault();\n    let projid = 0;\n    for (let count = 0; count <= projectList.length; count++) { //id generator\n        projid++;\n    }\n    const projectName = projectNameInput.value;\n    if (projectName == null || projectName === \"\") return;\n    const newProject = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, projid);\n    projectList.push(newProject);\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.saveAndDisplay)();\n    projectForm.reset();\n}\n\nconst addTodo = (e) => {\n    e.preventDefault();\n    const taskName = newTaskInput.value;\n    const taskDesc = newTaskDesc.value;\n    const taskDate = newTaskDate.value;\n    if (taskName == null || taskName === '') return;\n    const task = new _constructor__WEBPACK_IMPORTED_MODULE_0__.Todos(taskName, taskDesc, taskDate);\n    newTaskInput.value = null;\n    newTaskDesc.value = null;\n    newTaskDate.value = null;\n    const selectedList = projectList.find(list => list.id.toString() === currentProjectID);\n    selectedList.todolist.push(task)\n    ;(0,_display__WEBPACK_IMPORTED_MODULE_1__.saveAndDisplay)();\n}\n\nprojectUL.addEventListener(\"click\", function (e) { //check current Project\n    if (e.target.tagName.toLowerCase() === \"li\") {\n        currentProjectID = e.target.id;\n        (0,_display__WEBPACK_IMPORTED_MODULE_1__.saveAndDisplay)();\n    }\n});\n\nprojectForm.addEventListener(\"submit\", addProject);\ndeleteListButton.addEventListener('click', e => {\n    projectList = projectList.filter(list => list.id.toString() !== currentProjectID)\n    currentProjectID = null;\n    (0,_display__WEBPACK_IMPORTED_MODULE_1__.saveAndDisplay)();\n});\n\nnewTaskForm.addEventListener('submit', addTodo);\n\n\n\n//# sourceURL=webpack://todolist/./src/modules/dom.js?");

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