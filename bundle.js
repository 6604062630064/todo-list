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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"updateSidebar\": () => (/* binding */ updateSidebar),\n/* harmony export */   \"updateTable\": () => (/* binding */ updateTable)\n/* harmony export */ });\nconst updateSidebar = (input) => {\n\tconst div = document.querySelector(\".project-list\");\n\tconst projectList = input.getAllProjects();\n\tconst projectNames = document.querySelectorAll(\".project-name\");\n\tprojectNames.forEach((e) => {\n\t\te.remove();\n\t});\n\tprojectList.forEach((e) => {\n\t\tconst projectName = document.createElement(\"button\");\n\t\tprojectName.classList.add(\"project-name\");\n\t\tprojectName.textContent = e;\n\t\tdiv.insertBefore(projectName, document.querySelector(\".add-project\"));\n\t});\n};\n\nconst updateTable = (reveivedProject) => {\n\tconst header = document.querySelector(\".main h3\");\n\theader.textContent = reveivedProject.name;\n\tconst tasks = document.querySelectorAll(\".task\");\n\ttasks.forEach((child) => {\n\t\tchild.remove();\n\t});\n\treveivedProject.getAllTodos().forEach((e, i) => {\n\t\tconsole.log(1);\n\t\tconst main = document.querySelector(\".main\");\n\t\tconst div = document.createElement(\"div\");\n\t\tdiv.classList.add(\"task\");\n\t\tdiv.id = i;\n\t\tconst title = document.createElement(\"h4\");\n\t\ttitle.textContent = e.title;\n\t\ttitle.classList.add(\"title\");\n\n\t\tconst description = document.createElement(\"p\");\n\t\tdescription.textContent = e.description;\n\n\t\tconst dueDate = document.createElement(\"p\");\n\t\tdueDate.textContent = e.dueDate;\n\n\t\tconst priority = document.createElement(\"h4\");\n\t\tpriority.textContent = e.priority;\n\n\t\tconst edit = document.createElement(\"button\");\n\t\tedit.textContent = \"edit\";\n\t\tedit.classList.add(\"edit\");\n\n\t\tconst deleteButton = document.createElement(\"button\");\n\t\tdeleteButton.textContent = \"X\";\n\t\tdeleteButton.classList.add(\"remove\");\n\t\tdiv.append(title, description, dueDate, priority, edit, deleteButton);\n\n\t\tmain.insertBefore(div, document.querySelector(\"form\"));\n\t});\n\tconst form = document.querySelector(\"form\");\n\n\tform.classList.add(\"hidden\");\n\n\tconst addButton = document.querySelector(\".table\");\n\taddButton.classList.remove(\"hidden\");\n};\n\nconst displayProject = (reveivedProject) => {\n\tconst main = document.querySelector(\".main\");\n\tmain.innerHTML = \"\";\n\tconst h3 = document.createElement(\"h3\");\n\n\tconst table = document.createElement(\"div\");\n\ttable.classList.add(\"table\");\n\th3.textContent = reveivedProject.name;\n\n\tconst addTaskButton = document.createElement(\"button\");\n\taddTaskButton.textContent = \"+ Add a task\";\n\n\taddTaskButton.addEventListener(\"click\", () => {\n\t\tconst getForm = document.querySelector(\"form\");\n\t\tgetForm.classList.remove(\"hidden\");\n\t\ttable.classList.add(\"hidden\");\n\t});\n\tmain.appendChild(h3);\n\n\t// Create a form\n\tconst form = document.createElement(\"form\");\n\tform.classList.add(\"hidden\");\n\tform.classList.add(\"form-add\");\n\n\tconst titleLabel = document.createElement(\"label\");\n\ttitleLabel.textContent = \"Title\";\n\ttitleLabel.setAttribute(\"for\", \"title\");\n\n\tconst titleInput = document.createElement(\"input\");\n\ttitleInput.setAttribute(\"type\", \"text\");\n\ttitleInput.setAttribute(\"id\", \"title\");\n\ttitleInput.setAttribute(\"name\", \"title\");\n\ttitleInput.required = true;\n\n\tconst descriptionLabel = document.createElement(\"label\");\n\tdescriptionLabel.textContent = \"Description\";\n\tdescriptionLabel.setAttribute(\"for\", \"description\");\n\n\tconst descriptionInput = document.createElement(\"input\");\n\tdescriptionInput.setAttribute(\"type\", \"text\");\n\tdescriptionInput.setAttribute(\"id\", \"description\");\n\tdescriptionInput.setAttribute(\"name\", \"description\");\n\n\tconst dateLabel = document.createElement(\"label\");\n\tdateLabel.textContent = \"Due Date\";\n\tdateLabel.setAttribute(\"for\", \"date\");\n\n\tconst dateInput = document.createElement(\"input\");\n\tdateInput.setAttribute(\"type\", \"date\");\n\tdateInput.setAttribute(\"id\", \"date\");\n\tdateInput.setAttribute(\"name\", \"date\");\n\tdateInput.required = true;\n\n\tconst selectLabel = document.createElement(\"label\");\n\tselectLabel.textContent = \"Priority\";\n\tselectLabel.setAttribute(\"for\", \"priority\");\n\n\tconst select = document.createElement(\"select\");\n\tselect.setAttribute(\"name\", \"priority\");\n\tselect.setAttribute(\"id\", \"priority\");\n\tselect.required = true;\n\n\tconst deOption = document.createElement(\"option\");\n\tdeOption.value = \"\";\n\n\tconst highOption = document.createElement(\"option\");\n\thighOption.value = \"High\";\n\thighOption.textContent = \"High\";\n\n\tconst mediumOption = document.createElement(\"option\");\n\tmediumOption.value = \"Medium\";\n\tmediumOption.textContent = \"Medium\";\n\n\tconst lowOption = document.createElement(\"option\");\n\tlowOption.value = \"Low\";\n\tlowOption.textContent = \"Low\";\n\n\tconst hr = document.createElement(\"hr\");\n\n\tconst button = document.createElement(\"button\");\n\tbutton.classList.add(\"form-submit\");\n\tbutton.textContent = \"Submit\";\n\n\tselect.append(deOption, highOption, mediumOption, lowOption);\n\tform.append(\n\t\ttitleLabel,\n\t\ttitleInput,\n\t\tdescriptionLabel,\n\t\tdescriptionInput,\n\t\tdateLabel,\n\t\tdateInput,\n\t\tselectLabel,\n\t\tselect,\n\t\thr,\n\t\tbutton\n\t);\n\n\tmain.appendChild(form);\n\ttable.appendChild(addTaskButton);\n\n\tmain.appendChild(table);\n};\n\n\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nlet storage = new _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nlet todo1 = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\n\t\"Homework\",\n\t\"Math, English, Physics\",\n\t\"2022-05-12\",\n\t\"High\"\n);\nlet todo2 = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Laundry\", \"\", \"2022-05-12\", \"Low\");\nlet test = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Daily\");\ntest.addTodo(todo1);\ntest.addTodo(todo2);\nstorage.addProject(test);\n\nconst addProjectButton = document.querySelector(\".add-project\");\nconst addEditEventListener = () => {\n\tconst editButtons = document.querySelectorAll(\".edit\");\n\teditButtons.forEach((child) => {\n\t\tchild.addEventListener(\"click\", (e) => {\n\t\t\tconst form = document.querySelector(\".form-add\");\n\t\t\tconst form_copy = form.cloneNode(true);\n\t\t\tconst main = document.querySelector(\".main\");\n\t\t\tform_copy.classList.remove(\"hidden\");\n\t\t\tform_copy.classList.remove(\"form-add\");\n\t\t\tform_copy.classList.add(\"form-edit\");\n\t\t\tconst div = e.target.parentNode;\n\t\t\tform_copy.id = div.id;\n\n\t\t\tconst children = form_copy.childNodes;\n\t\t\tconst projectName = document.querySelector(\".main h3\");\n\t\t\tconst todoName = e.target.parentNode.querySelector(\".title\").textContent;\n\t\t\tconst values = storage\n\t\t\t\t.getProjectByName(projectName.textContent)\n\t\t\t\t.getTodoByTitle(todoName);\n\t\t\tchildren.item(1).value = values.title;\n\t\t\tchildren.item(3).value = values.description;\n\t\t\tchildren.item(5).setAttribute(\"value\", values.dueDate);\n\t\t\tfor (let i = 0; i < children.item(7).childNodes.length; i++) {\n\t\t\t\tif (children.item(7).childNodes.item(i).value === values.priority) {\n\t\t\t\t\tchildren.item(7).childNodes.item(i).setAttribute(\"selected\", \"\");\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tform_copy.lastChild.remove();\n\t\t\tform_copy.addEventListener(\"submit\", (e) => {\n\t\t\t\te.preventDefault();\n\t\t\t\tconst onlyInputs = e.target.querySelectorAll(\"input, select\");\n\t\t\t\tlet values = [];\n\t\t\t\tonlyInputs.forEach((input) => {\n\t\t\t\t\tvalues.push(input.value);\n\t\t\t\t});\n\t\t\t\tconst index = e.target.id;\n\n\t\t\t\tlet obj = storage\n\t\t\t\t\t.getProjectByName(projectName.textContent)\n\t\t\t\t\t.getTodoByIndex(index);\n\n\t\t\t\tobj.title = values[0];\n\t\t\t\tobj.description = values[1];\n\t\t\t\tobj.dueDate = values[2];\n\t\t\t\tobj.priority = values[3];\n\n\t\t\t\tconsole.log(values);\n\t\t\t\te.target.remove();\n\t\t\t\t(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateTable)(storage.getProjectByName(projectName.textContent));\n\t\t\t\taddEditEventListener();\n\t\t\t\taddDeleteEventListenr();\n\t\t\t});\n\n\t\t\tconst submitButton = document.createElement(\"button\");\n\t\t\tsubmitButton.textContent = \"Submit\";\n\t\t\tform_copy.appendChild(submitButton);\n\t\t\tmain.replaceChild(form_copy, div);\n\t\t});\n\t});\n};\n\nconst addProjectEventListener = () => {\n\tconst projectButtons = document.querySelectorAll(\".project-name\");\n\tprojectButtons.forEach((child) => {\n\t\tchild.addEventListener(\"click\", (e) => {\n\t\t\te.preventDefault();\n\t\t\tconst name = e.target.textContent;\n\t\t\t(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateTable)(storage.getProjectByName(name));\n\t\t\taddDeleteEventListenr();\n\t\t\taddEditEventListener();\n\t\t});\n\t});\n};\n\nconst addDeleteEventListenr = () => {\n\tconst deleteButtons = document.querySelectorAll(\".remove\");\n\tdeleteButtons.forEach((child) => {\n\t\tchild.addEventListener(\"click\", (e) => {\n\t\t\te.preventDefault();\n\t\t\tconst name = e.target.parentNode.querySelector(\".title\").textContent;\n\t\t\tconst projectName = document.querySelector(\".main h3\").textContent;\n\t\t\tconsole.log(name);\n\t\t\tstorage.getProjectByName(projectName).removeTodoByName(name);\n\t\t\t(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateTable)(storage.getProjectByName(projectName));\n\t\t\taddDeleteEventListenr();\n\t\t\taddEditEventListener();\n\t\t});\n\t});\n};\n\n(0,_display__WEBPACK_IMPORTED_MODULE_0__.displayProject)(test);\n(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateTable)(test);\n(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateSidebar)(storage);\naddDeleteEventListenr();\naddEditEventListener();\nconst form = document.querySelector(\"form\");\n\naddProjectButton.addEventListener(\"click\", (e) => {\n\te.preventDefault();\n\tconst name = prompt(\"Name?\", \"\");\n\tstorage.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\n\t(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateSidebar)(storage);\n\taddProjectEventListener();\n});\n\nform.addEventListener(\"submit\", (e) => {\n\te.preventDefault();\n\tconst onlyInputs = document.querySelectorAll(\"form input, select\");\n\tconst header = document.querySelector(\".main h3\");\n\tlet values = [];\n\tonlyInputs.forEach((input) => {\n\t\tvalues.push(input.value);\n\t});\n\tstorage\n\t\t.getProjectByName(header.textContent)\n\t\t.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](values[0], values[1], values[2], values[3]));\n\tconsole.log(storage.getProjectByName(header.textContent).list);\n\t(0,_display__WEBPACK_IMPORTED_MODULE_0__.updateTable)(storage.getProjectByName(header.textContent));\n\tform.reset();\n\taddDeleteEventListenr();\n\taddEditEventListener();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t\tthis.list = [];\n\t}\n\n\taddTodo(Todo) {\n\t\tthis.list.push(Todo);\n\t}\n\n\tgetAllTodos() {\n\t\treturn this.list;\n\t}\n\n\tgetIndexByTitle(name) {\n\t\tlet index = -1;\n\n\t\tthis.list.every((v, i) => {\n\t\t\tif (name === v.title) {\n\t\t\t\tindex = i;\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn true;\n\t\t});\n\n\t\treturn index;\n\t}\n\n\tgetTodoByTitle(name) {\n\t\tlet index = -1;\n\n\t\tthis.list.every((v, i) => {\n\t\t\tif (name === v.title) {\n\t\t\t\tindex = i;\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn true;\n\t\t});\n\n\t\treturn this.list[index];\n\t}\n\tremoveTodoByName(name) {\n\t\tlet index = -1;\n\n\t\tthis.list.every((v, i) => {\n\t\t\tif (name === v.title) {\n\t\t\t\tindex = i;\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\treturn true;\n\t\t});\n\n\t\tthis.list.splice(index, 1);\n\t}\n\n\tgetTodoByIndex(index) {\n\t\treturn this.list[index];\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n\tconstructor() {\n\t\tthis.object = {};\n\t}\n\n\taddProject(Project) {\n\t\tthis.object[Project.name] = Project;\n\t}\n\n\tgetProjectByName(name) {\n\t\treturn this.object[name];\n\t}\n\n\tgetAllProjects() {\n\t\treturn Object.keys(this.object);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/storage.js?");

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