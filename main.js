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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody {\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\n/* Nav */\\n.burger {\\n  position: absolute;\\n  top: 10px;\\n  left: 10px;\\n  height: 40px;\\n  width: 40px;\\n  text-align: center;\\n  background-color: black;\\n  cursor: pointer;\\n  border-radius: 5px 5px;\\n  transition: left 0.4s ease;\\n  z-index: 1;\\n}\\n\\n.burger span {\\n  color: white;\\n  font-size: 28px;\\n  line-height: 40px;\\n}\\n\\n.burger.click {\\n  left: 255px;\\n  top: 10px;\\n}\\n\\n.burger.click span::before {\\n  content: '\\\\f00d';\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n  position: fixed;\\n  background-color: black;\\n  color: white;\\n  transform: translateX(-250px);\\n  top: 0;\\n  width: 250px;\\n  z-index: 1;\\n}\\n\\nnav.show {\\n  transform: translateX(0);\\n}\\n\\nheader {\\n  text-align: center;\\n  color: white;\\n}\\n/* Nav End */\\n\\n/* Projects */\\n.project-form {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\nlabel {\\n  text-align: center;\\n  margin: 20px;\\n}\\n\\n.project-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.project-card {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.project-card > p:hover {\\n  border-radius: 5px 5px;\\n  color: black;\\n  background-color: white;\\n  cursor: pointer;\\n}\\n/* Projects End */\\n\\n/* Todo */\\n.todo-wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  height: 100vh;\\n  margin-top: 50px;\\n}\\n\\n.todo-container h3:first-child {\\n  text-align: center;\\n}\\n\\n.todo-container > * {\\n  margin-bottom: 10px;\\n}\\n\\n.todo-item {\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  position: relative;\\n  border: 2px solid black;\\n  width: 100vw;\\n}\\n.todo-item i {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n}\\n/* Todo End */\\n\\n/* Global */\\nbutton,\\ninput[type='submit'],\\ni {\\n  cursor: pointer;\\n}\\n\\n.fa-trash-alt:hover {\\n  color: #c41e3a;\\n}\\n/* Global End */\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/* \n(The MIT License)\nCopyright (c) 2014-2021 Halász Ádám <adam@aimform.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, networkInterfaces, mac, os; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n\n//# sourceURL=webpack://todolist/./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/constructor */ \"./src/modules/constructor.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\nconst form = document.querySelector('.project-form');\nlet today = new Date().toISOString().split('T')[0];\ndocument\n  .getElementsByClassName('todo-duedate-input')[0]\n  .setAttribute('min', today); //set min date to current date.\n\ndocument.getElementsByClassName('todo-duedate-input')[0].valueAsDate =\n  new Date(); // set default date to today.\n\n// ### Default Projects with respective Todolist\nconst currentProjects = [\n  {\n    name: 'Default List',\n    id: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    todolist: [\n      {\n        title: 'Groceries',\n        desc: 'Buy tomato, buy orange, buy milk',\n        duedate: new Date().toISOString().split('T')[0],\n        id: 'grocery',\n        status: false,\n      },\n      {\n        title: 'Read Books',\n        desc: 'Noli Me Tangere + El Filibusterismo',\n        duedate: new Date().toISOString().split('T')[0],\n        id: 'library',\n        status: false,\n      },\n    ],\n  },\n  {\n    name: 'Another List',\n    id: uniqid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    todolist: [\n      {\n        title: 'Walk Chichi',\n        desc: 'Go walk my dog and meet other people',\n        duedate: new Date().toISOString().split('T')[0],\n        id: 'walkdog',\n        status: false,\n      },\n    ],\n  },\n];\n\nlet currentID = currentProjects[0].id;\n\n// ### Render && Clear Stuff\n\nconst clearChildElements = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\nconst renderProjects = (projects) => {\n  const projectsEl = document.querySelector('.project-container');\n  clearChildElements(projectsEl);\n  console.log(projects);\n  projects.forEach((project) => {\n    const projCard = document.createElement('div');\n    const pEl = document.createElement('p');\n    const deleteIcon = document.createElement('i');\n    projCard.classList.add('project-card');\n    pEl.setAttribute('id', project.id);\n    pEl.textContent = `${project.name}`;\n    deleteIcon.classList.add('fas', 'fa-trash-alt');\n    projCard.append(pEl, deleteIcon);\n    projectsEl.append(projCard);\n  });\n};\n\nconst renderTodos = (currentID) => {\n  console.log(\n    `you are in ${\n      currentProjects.find((project) => project.id === currentID).name\n    }`\n  ); // current project Checker\n  const todoContainer = document.querySelector('.todo-container');\n  const title = document.createElement('h3');\n  const selectedProject = currentProjects.find(\n    (project) => project.id === currentID\n  );\n  clearChildElements(todoContainer);\n  title.textContent = selectedProject.name;\n  todoContainer.append(title);\n  if (selectedProject.todolist === undefined) return; //ignores blank new todolist\n  selectedProject.todolist.forEach((todo) => {\n    const item = document.createElement('div');\n    const name = document.createElement('div');\n    const desc = document.createElement('div');\n    const duedate = document.createElement('div');\n    const status = document.createElement('div');\n    const deleteIcon = document.createElement('i');\n    item.setAttribute('id', todo.id);\n    item.classList.add('todo-item');\n    name.textContent = `${todo.title}`;\n    desc.textContent = `${todo.desc}`;\n    duedate.textContent = `${todo.duedate}`;\n    status.textContent = `${todo.status}`;\n    deleteIcon.classList.add('fas', 'fa-trash-alt');\n    item.append(name, desc, duedate, status, deleteIcon);\n    todoContainer.append(item);\n  });\n};\n\n// ### Add && Remove Stuff\nconst addProject = (e) => {\n  e.preventDefault();\n  const projectName = document.querySelector('.pname-input').value;\n  if (projectName == null || projectName === '') return;\n  const newProject = new _modules_constructor__WEBPACK_IMPORTED_MODULE_0__.Project(projectName, uniqid__WEBPACK_IMPORTED_MODULE_1___default()());\n  currentID = newProject.id;\n  currentProjects.push(newProject);\n  renderProjects(currentProjects);\n  renderTodos(newProject.id);\n  form.reset();\n};\n\nconst deleteProject = (e) => {\n  e.preventDefault();\n  const todoContainer = document.querySelector('.todo-container');\n  let index = currentProjects.findIndex(\n    (proj) => proj.id === e.target.previousElementSibling.id\n  );\n  currentProjects.splice(index, 1);\n  renderProjects(currentProjects);\n  if (currentProjects[0] === undefined) {\n    currentID = null;\n    return clearChildElements(todoContainer);\n  }\n  renderTodos(currentProjects[0].id);\n  currentID = currentProjects[0].id;\n};\n\nconst addTodo = (e) => {\n  e.preventDefault();\n  const todoName = document.querySelector('.todo-name-input').value;\n  const todoDesc = document.querySelector('.todo-desc-input').value;\n  const todoDate = document.querySelector('.todo-duedate-input').value;\n  const newTodo = new _modules_constructor__WEBPACK_IMPORTED_MODULE_0__.Todos(todoName, todoDesc, todoDate, uniqid__WEBPACK_IMPORTED_MODULE_1___default()());\n  if (todoName === '' || todoDesc === '' || todoDate === '') return;\n  currentProjects.map((obj) =>\n    obj.id === currentID\n      ? {\n          ...obj,\n          todolist: [],\n          todolist: obj.todolist.push(newTodo),\n        }\n      : obj\n  );\n  renderTodos(currentID);\n};\n\nconst deleteTodo = (e) => {\n  e.preventDefault();\n  let projIndex = currentProjects.findIndex((proj) => proj.id === currentID);\n  let todoIndex = currentProjects[projIndex].todolist.findIndex(\n    (todo) => todo.id === e.target.parentNode.id\n  );\n  currentProjects[projIndex].todolist.splice(todoIndex, 1);\n  renderTodos(currentID);\n};\n// ### Events\nform.addEventListener('submit', addProject);\ndocument.querySelector('.project-container').addEventListener('click', (e) => {\n  if (e.target.nodeName === 'P') {\n    renderTodos(e.target.id);\n    currentID = e.target.id;\n  }\n  if (e.target.nodeName === 'I') deleteProject(e);\n});\ndocument.querySelector('.todo-form').addEventListener('submit', addTodo);\ndocument.querySelector('.todo-container').addEventListener('click', (e) => {\n  if (e.target.nodeName === 'I') deleteTodo(e);\n});\ndocument.querySelector('.burger').addEventListener('click', (e) => {\n  e.preventDefault();\n  document.querySelector('.burger').classList.toggle('click');\n  document.querySelector('nav').classList.toggle('show');\n});\n// ### Initial Render\nrenderProjects(currentProjects);\nrenderTodos(currentID);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/constructor.js":
/*!************************************!*\
  !*** ./src/modules/constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todos\": () => (/* binding */ Todos)\n/* harmony export */ });\n//module for Classes\nclass Project {\n  constructor(name, id) {\n    this._name = name;\n    this._id = id;\n    this._todolist = []; //JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOLIST_KEY)) || []; //array of todos\n  }\n\n  get name() {\n    return this._name;\n  }\n\n  set name(projectName) {\n    return (this._name = projectName);\n  }\n\n  get id() {\n    return this._id;\n  }\n\n  set id(newID) {\n    return (this._id = newID);\n  }\n\n  get todolist() {\n    return this._todolist;\n  }\n\n  set todolist(obj) {\n    return (this._todolist = [...obj]);\n  }\n}\n\nclass Todos {\n  constructor(title, desc, dueDate, id) {\n    this._title = title;\n    this._desc = desc;\n    this._duedate = dueDate;\n    this._todoID = id;\n    this._status = false;\n  }\n\n  get title() {\n    return this._title;\n  }\n\n  set title(todoName) {\n    return (this._title = todoName);\n  }\n\n  get desc() {\n    return this._desc;\n  }\n\n  set desc(todoDesc) {\n    return (this._desc = todoDesc);\n  }\n\n  get duedate() {\n    return this._duedate;\n  }\n\n  set duedate(todoDuedate) {\n    return (this._duedate = todoDuedate);\n  }\n\n  get id() {\n    return this._todoID;\n  }\n\n  set id(newID) {\n    return (this._todoID = newID);\n  }\n\n  get status() {\n    return this._status;\n  }\n\n  set status(stat) {\n    return (this._status = !stat);\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/constructor.js?");

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
/******/ 			id: moduleId,
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