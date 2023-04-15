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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst display = () => {\n\tconst main = document.querySelector(\".main\");\n\tconst h3 = document.createElement(\"h3\");\n\n\tconst table = document.createElement(\"div\");\n\ttable.classList.add(\"table\");\n\th3.textContent = \"Test\";\n\n\tconst addTaskButton = document.createElement(\"button\");\n\taddTaskButton.textContent = \"+ Add a task\";\n\n\taddTaskButton.addEventListener(\"click\", () => {\n\t\tconst getForm = document.querySelector(\"form\");\n\t\tgetForm.classList.remove(\"hidden\");\n\t\taddTaskButton.classList.add(\"hidden\");\n\t});\n\tmain.appendChild(h3);\n\n\t// Create a form\n\tconst form = document.createElement(\"form\");\n\tform.classList.add(\"hidden\");\n\tconst titleLabel = document.createElement(\"label\");\n\ttitleLabel.textContent = \"Title\";\n\ttitleLabel.setAttribute(\"for\", \"title\");\n\n\tconst titleInput = document.createElement(\"input\");\n\ttitleInput.setAttribute(\"type\", \"text\");\n\ttitleInput.setAttribute(\"id\", \"title\");\n\ttitleInput.setAttribute(\"name\", \"title\");\n\ttitleInput.required = true;\n\n\tconst descriptionLabel = document.createElement(\"label\");\n\tdescriptionLabel.textContent = \"Description\";\n\tdescriptionLabel.setAttribute(\"for\", \"description\");\n\n\tconst descriptionInput = document.createElement(\"input\");\n\tdescriptionInput.setAttribute(\"type\", \"text\");\n\tdescriptionInput.setAttribute(\"id\", \"description\");\n\tdescriptionInput.setAttribute(\"name\", \"description\");\n\n\tconst dateLabel = document.createElement(\"label\");\n\tdateLabel.textContent = \"Due Date\";\n\tdateLabel.setAttribute(\"for\", \"date\");\n\n\tconst dateInput = document.createElement(\"input\");\n\tdateInput.setAttribute(\"type\", \"date\");\n\tdateInput.setAttribute(\"id\", \"title\");\n\tdateInput.setAttribute(\"name\", \"title\");\n\tdateInput.required = true;\n\n\tconst selectLabel = document.createElement(\"label\");\n\tselectLabel.textContent = \"Priority\";\n\tselectLabel.setAttribute(\"for\", \"priority\");\n\n\tconst select = document.createElement(\"select\");\n\tselect.setAttribute(\"name\", \"priority\");\n\tselect.setAttribute(\"id\", \"priority\");\n\tselect.required = true;\n\n\tconst deOption = document.createElement(\"option\");\n\tdeOption.value = \"\";\n\n\tconst highOption = document.createElement(\"option\");\n\thighOption.value = \"high\";\n\thighOption.textContent = \"High\";\n\n\tconst mediumOption = document.createElement(\"option\");\n\tmediumOption.value = \"medium\";\n\tmediumOption.textContent = \"Medium\";\n\n\tconst lowOption = document.createElement(\"option\");\n\tlowOption.value = \"low\";\n\tlowOption.textContent = \"Low\";\n\n\tconst hr = document.createElement(\"hr\");\n\n\tconst button = document.createElement(\"button\");\n\tbutton.classList.add(\"form-submit\");\n\tbutton.textContent = \"Submit\";\n\n\tselect.append(deOption, highOption, mediumOption, lowOption);\n\tform.append(\n\t\ttitleLabel,\n\t\ttitleInput,\n\t\tdescriptionLabel,\n\t\tdescriptionInput,\n\t\tdateLabel,\n\t\tdateInput,\n\t\tselectLabel,\n\t\tselect,\n\t\thr,\n\t\tbutton\n\t);\n\n\ttable.appendChild(form);\n\ttable.appendChild(addTaskButton);\n\n\tmain.appendChild(table);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\n(0,_display__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nlet storage = new _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nlet todo1 = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"dfsfsf\", \"fdsfdsfdsf\", \" \", \"High\");\nlet project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"ffffffffff\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t\tthis.list = [];\n\t}\n\n\taddTodo(Todo) {\n\t\tthis.list.append(Todo);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n\tconstructor() {\n\t\tthis.list = [];\n\t}\n\n\taddProject(Project) {\n\t\tthis.list.append(Todo);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n\tconstructor(title, description, dueDate, priority, isFinished = false) {\n\t\tthis.title = title;\n\t\tthis.description = description;\n\t\tthis.dueDate = dueDate;\n\t\tthis.priority = priority;\n\t\tthis.isFinished = isFinished;\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/todo.js?");

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