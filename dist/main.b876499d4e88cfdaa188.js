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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;1,200&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 0.7rem;\n  --main-grey-color: rgba(51, 51, 51, 255);\n  --sidebar-color: rgba(250, 250, 250, 255);\n  --emerald-green: #f77f00;\n  --red: #f87171;\n  --yellow: #fef3c7;\n  --green: #fcbf49;\n  --grey: #9ca3af;\n}\n\n/* Main page wrapper styles. */\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 100vh;\n}\n\n/* Sidebar styles. */\n\n.sidebar {\n  background-color: var(--sidebar-color);\n}\n\n.sidebar-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  gap: 10px;\n}\n\n.sidebar-title img {\n  width: 40px;\n}\n\n.sidebar-title h2 {\n  color: #f77f00;\n}\n\n/* Navigation menu styles. */\n\n.list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n}\n\n.list-container-heading {\n  display: flex;\n  justify-content: space-around;\n}\n\n.plus-btn-container {\n  display: flex;\n  border: 1px solid var(--main-grey-color);\n  border-radius: 10px;\n  padding: 0.5rem;\n  gap: 1rem;\n}\n.list-name:hover,\n.new-list-btn:hover,\n.pointer:hover,\n.list-edit:hover,\n.list-delete:hover,\ninput[type=\"checkbox\"]:hover,\n.cancel:hover,\n.submit:hover {\n  cursor: pointer;\n}\n\n.plus-btn {\n  width: 24px;\n  height: 24px;\n}\n.plus-btn-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n  background-color: var(--main-grey-color);\n  color: white;\n}\n\n.list-collection-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 2rem;\n}\n\n.list-collection-heading {\n  width: 95%;\n  align-self: center;\n  display: flex;\n  place-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n\n.list-collection-title {\n  margin-left: 0.5rem;\n  font-size: 1rem;\n  color: var(--grey);\n}\n\n.selected-list {\n  color: var(--emerald-green);\n  border-bottom: 2px solid var(--emerald-green);\n}\n\n/* ADD NEW LIST FORM styles. */\n\n.list-input-container {\n  position: relative;\n  width: 95%;\n}\n\n.list-input {\n  visibility: hidden;\n  width: 100%;\n  height: 55px;\n  margin-left: 5px;\n  padding: 0.5rem;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid var(--main-grey-color);\n  color: var(--emerald-green);\n}\n\n.list-input-container span {\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  padding: 10px;\n  visibility: hidden;\n  font-weight: bold;\n}\n\n.list-input-container input:focus ~ span {\n  transform: translateX(10px) translateY(-7px);\n  transition: 0.5s;\n  font-size: 0.7rem;\n  padding: 0 10px;\n  background: var(--emerald-green);\n  color: white;\n}\n\n.list-input-container input:focus {\n  border: 1px solid var(--emerald-green);\n}\n\n/* DYNAMICALLY CREATED LIST ELEMENT styles. */\n\n.list-element {\n  height: max-content;\n  display: flex;\n  background-color: var(--sidebar-color);\n  justify-content: space-between;\n  align-items: center;\n  color: var(--main-grey-color);\n  border: 1px solid var(--main-grey-color);\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-radius: 10px;\n  width: 95%;\n  padding: 0.5rem;\n}\n\n.list-element:hover {\n  background-color: var(--main-grey-color);\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n.list-name {\n  font-size: 0.8rem;\n}\n\n.list-btn-container {\n  display: flex;\n  gap: 6px;\n}\n\n.list-btn-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n.list-delete,\n.list-edit {\n  border-radius: 15px;\n  padding: 5px;\n}\n.list-delete:hover,\n.list-edit:hover {\n  background-color: var(--emerald-green);\n}\n\n/* Main section styles. */\n\n.main {\n  padding: 2rem 4rem;\n}\n\n.main-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n/* Homepage styles. */\n\n.homepage-container {\n  margin-top: 25%;\n  margin-left: 25%;\n  width: 55%;\n  display: grid;\n  place-items: center;\n  gap: 1rem;\n}\n\n.homepage-container h1 {\n  color: var(--emerald-green);\n  font-size: 1.8rem;\n}\n\n.homepage-container p {\n  color: var(--grey);\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: center;\n}\n\n/* Overlay styles. */\n#overlay {\n  position: fixed;\n  transition: 200ms ease-in-out;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* Modal styles. */\n#task-modal {\n  width: max(300px, 40%);\n  height: max(360px, 40%);\n}\n\n#list-modal {\n  width: 40%;\n  height: 200px;\n}\n\n#task-modal,\n#list-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 20;\n  background-color: white;\n}\n\n#task-modal.active,\n#list-modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n/* Mains section header styles. */\n\n.main-heading {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n\n.add-item-container {\n  display: flex;\n  width: 150px;\n  border: 1px solid var(--main-grey-color);\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 10px;\n  height: 50px;\n}\n\n.add-item-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n  background-color: var(--main-grey-color);\n  color: white;\n}\n\n/* DYNAMICALLY CREATED TASK ELEMENT styles. */\n\n.item-card {\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 7fr 2fr 1fr 1fr;\n  place-items: center;\n  height: 50px;\n  border: 1px solid var(--main-grey-color);\n  border-radius: 10px;\n\n  position: relative;\n}\n\n.item-card:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n.item-name {\n  justify-self: start;\n}\n\n[type=\"checkbox\"]:checked {\n  opacity: 0.5;\n  color: lightgray;\n}\n\n.completed-task {\n  opacity: 0.5;\n}\n\n.completed-task:after {\n  position: absolute;\n  left: 39%;\n  top: 50%;\n  height: 2px;\n  background: black;\n  content: \"\";\n  width: 73%;\n  display: block;\n  transform: translateX(-37%);\n  transition: all 0.3s;\n}\n\n.date {\n  justify-self: end;\n}\n\n.edit-item-btn {\n  justify-self: end;\n}\n\n.delete-item-btn,\n.edit-item-btn {\n  border-radius: 30px;\n  height: 40px;\n  width: 40px;\n  display: grid;\n  place-items: center;\n}\n\n.delete-item-btn:hover,\n.edit-item-btn:hover {\n  background-color: var(--emerald-green);\n}\n\n.priority-indicator {\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.priority-low {\n  background-color: var(--green);\n}\n\n.priority-medium {\n  background-color: var(--yellow);\n}\n\n.priority-high {\n  background-color: var(--red);\n}\n\n.priority-default {\n  background-color: var(--grey);\n}\n\n.checkbox-container {\n  border-left: 3px solid var(--main-grey-color);\n  height: 100%;\n  width: 100%;\n  display: grid;\n  place-items: center;\n}\n\n.checkbox-container > * {\n  height: 25px;\n  width: 25px;\n}\n\n/* ADD NEW TASK FORM styles.*/\n\n.task-form {\n  height: 100%;\n  width: 100%;\n}\n\n.item-grid {\n  display: grid;\n  grid-template: 1fr 1fr / 1fr 1fr;\n  padding: 1rem;\n  gap: 0.5rem;\n  height: 55%;\n  align-items: start;\n  background-color: var(--sidebar-color);\n  padding-top: 2rem;\n}\n\n.item-grid > * {\n  height: 45px;\n}\n\n.item-form-title {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    #f77f00 0%,\n    #fcbf49 29%,\n    #fcbf49 100%\n  );\n  height: 20%;\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n\n  display: grid;\n  place-items: center;\n}\n\n/* FORM BUTTON (for both list and tasks) styles. */\n\n.item-form-buttons {\n  display: flex;\n  background-color: var(--sidebar-color);\n  align-items: center;\n  justify-content: space-around;\n  height: 30%;\n  padding: 1rem;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.item-form-buttons > button {\n  width: 300px;\n  height: 35px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    #f77f00 0%,\n    #fcbf49 29%,\n    #fcbf49 100%\n  );\n  outline: none;\n  border: none;\n  color: white;\n}\n\n.item-form-buttons > button:nth-child(1),\n.edit-list-buttons > button:nth-child(1) {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.item-form-buttons > button:nth-child(1):hover,\n.item-form-buttons > button:nth-child(2):hover {\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    #f77f00 0%,\n    #fcbf49 29%,\n    #fcbf49 100%\n  );\n  height: 37px;\n}\n\n.item-form-buttons > button:nth-child(2),\n.edit-list-buttons > button:nth-child(2) {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n/* EDIT LIST NAME FORM styles. */\n\n#list-form {\n  width: 100%;\n  height: 100%;\n}\n\n.list-title {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    #f77f00 0%,\n    #fcbf49 29%,\n    #fcbf49 100%\n  );\n  height: 40%;\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  display: grid;\n  place-items: center;\n}\n\n.list-body {\n  display: flex;\n  flex-direction: column;\n  height: 60%;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.list-body label {\n  color: var(--grey);\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\n.edit-list-buttons {\n  display: flex;\n}\n.edit-list-buttons > button {\n  width: 250px;\n  height: 35px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    #f77f00 0%,\n    #fcbf49 29%,\n    #fcbf49 100%\n  );\n  outline: none;\n  border: none;\n  color: white;\n}\n\n.edit-list-buttons > button:hover {\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgb(14, 169, 118) 0%,\n    #fcbf49 29%,\n    rgb(10, 174, 149) 100%\n  );\n  height: 36px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-todo-list/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/list.js":
/*!*************************!*\
  !*** ./src/app/list.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   deleteList: () => (/* binding */ deleteList),\n/* harmony export */   editListName: () => (/* binding */ editListName),\n/* harmony export */   getList: () => (/* binding */ getList),\n/* harmony export */   getListIndex: () => (/* binding */ getListIndex),\n/* harmony export */   lists: () => (/* binding */ lists)\n/* harmony export */ });\n/* harmony import */ var _src_app_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/app/localstorage */ \"./src/app/localstorage.js\");\n\n\n/* Array with all the lists */\nlet lists = (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)() || [];\n\n/* define a list */\nconst List = (name) => {\n  let id = Date.now().toString();\n  let tasks = [];\n  let completed = [];\n  return {\n    id,\n    name,\n    tasks,\n    completed,\n  };\n};\n\nconst createList = (name) => {\n  //If there is already a list with an identical name, add \"1\"\n  if (lists.find((list) => list.name === name)) {\n    const list = List(name + \"1\");\n    lists.push(list);\n  } else {\n    const list = List(name);\n    lists.push(list);\n    list.classList.add(\"pointer\");\n  }\n\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(lists);\n};\n\nconst editListName = (listId, newName) => {\n  const list = getList(listId);\n  list.name = newName;\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(lists, listId);\n};\n\nconst deleteList = (listId) => {\n  const listIndex = getListIndex(listId);\n  lists.splice(listIndex, 1);\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(lists, listId);\n};\n\nconst getList = (listId) => lists.find((list) => list.id === listId);\n\nconst getListIndex = (listId) => lists.findIndex((list) => list.id === listId);\n\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/app/list.js?");

/***/ }),

/***/ "./src/app/localstorage.js":
/*!*********************************!*\
  !*** ./src/app/localstorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFromLocalStorage: () => (/* binding */ getFromLocalStorage),\n/* harmony export */   getIdFromLocalStorage: () => (/* binding */ getIdFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\nconst localStorageKey = \"lists\";\nconst localStorageIdKey = \"listId\";\n\nfunction saveToLocalStorage(lists, selectedListId) {\n  localStorage.setItem(localStorageKey, JSON.stringify(lists));\n  localStorage.setItem(localStorageIdKey, JSON.stringify(selectedListId));\n}\n\nfunction getFromLocalStorage() {\n  const data = JSON.parse(localStorage.getItem(localStorageKey));\n  return data;\n}\n\nfunction getIdFromLocalStorage() {\n  const selectedListId = JSON.parse(localStorage.getItem(localStorageIdKey));\n  return selectedListId;\n}\n\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/app/localstorage.js?");

/***/ }),

/***/ "./src/app/task.js":
/*!*************************!*\
  !*** ./src/app/task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTask: () => (/* binding */ editTask),\n/* harmony export */   getTask: () => (/* binding */ getTask),\n/* harmony export */   getTaskIndex: () => (/* binding */ getTaskIndex),\n/* harmony export */   markComplete: () => (/* binding */ markComplete)\n/* harmony export */ });\n/* harmony import */ var _src_app_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/app/list */ \"./src/app/list.js\");\n/* harmony import */ var _src_app_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/localstorage */ \"./src/app/localstorage.js\");\n\n\n\nconst Task = (listId, name, description, date, priority) => {\n  let id = Date.now().toString();\n  let complete = false;\n  return {\n    id,\n    listId,\n    name,\n    description,\n    date,\n    priority,\n    complete,\n  };\n};\n\nconst createTask = (listId, name, description, date, priority) => {\n  const list = (0,_src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);\n  const task = Task(listId, name, description, date, priority);\n  list.tasks.push(task);\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_src_app_list__WEBPACK_IMPORTED_MODULE_0__.lists, listId);\n};\n\nconst editTask = (\n  listId,\n  taskId,\n  newName,\n  newDescription,\n  newDate,\n  newPriority,\n) => {\n  const task = getTask(listId, taskId);\n\n  task.name = newName;\n  task.description = newDescription;\n  task.date = newDate;\n  task.priority = newPriority;\n\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_src_app_list__WEBPACK_IMPORTED_MODULE_0__.lists, listId);\n};\n\nconst deleteTask = (listId, taskId) => {\n  const list = (0,_src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);\n  const taskIndex = getTaskIndex(listId, taskId);\n  list.tasks.splice(taskIndex, 1);\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_src_app_list__WEBPACK_IMPORTED_MODULE_0__.lists, listId);\n};\n\nconst markComplete = (listId, taskId) => {\n  const list = (0,_src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList)(list);\n  const task = getTask(listId, taskId);\n  const taskIndex = getTaskIndex(listId, taskId);\n  list.completed.unshift(task);\n  list.tasks.splice(taskIndex, 1);\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(_src_app_list__WEBPACK_IMPORTED_MODULE_0__.lists, listId);\n};\n\nconst getTask = (listId, taskId) => {\n  const list = (0,_src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);\n  for (const key in list) {\n    if (key === \"tasks\") {\n      const task = list[key].find((task) => task.id === taskId);\n      if (task) return task;\n    }\n  }\n};\n\nconst getTaskIndex = (listId, taskId) => {\n  const list = (0,_src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList)(listId);\n  for (let key in list) {\n    if (key === \"tasks\") {\n      const taskIndex = list[key].findIndex((task) => task.id === taskId);\n      if (taskIndex) return taskIndex;\n    }\n  }\n};\n\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/app/task.js?");

/***/ }),

/***/ "./src/app/ui.js":
/*!***********************!*\
  !*** ./src/app/ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   screenController: () => (/* binding */ screenController)\n/* harmony export */ });\n/* harmony import */ var _src_app_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/app/list */ \"./src/app/list.js\");\n/* harmony import */ var _src_app_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/task */ \"./src/app/task.js\");\n/* harmony import */ var _src_app_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/app/localstorage */ \"./src/app/localstorage.js\");\n/* harmony import */ var _src_assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _src_assets_editBtn_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/editBtn.svg */ \"./src/assets/editBtn.svg\");\n/* harmony import */ var _src_assets_deleteBtn_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/assets/deleteBtn.svg */ \"./src/assets/deleteBtn.svg\");\n/* harmony import */ var _src_assets_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/assets/circle-plus.svg */ \"./src/assets/circle-plus.svg\");\n/* Import modules: */\n\n\n\n\n\n/* Import icons: */\n\n\n\n\n\n\nlet selectedList = \"none\";\nlet selectedListId = \"none\";\nlet selectedTaskId = \"none\";\n\nfunction screenController() {\n  let lists = _src_app_list__WEBPACK_IMPORTED_MODULE_0__.lists;\n  (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(lists, selectedListId);\n  selectedListId = (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_2__.getIdFromLocalStorage)();\n\n  let sidebarTitle = document.querySelector(\".sidebar-title\");\n  let listContainer = document.querySelector(\".list-container\");\n  let addListForm = document.querySelector(\".list-form\");\n  let addListBtn = document.querySelector(\".plus-btn-container\");\n  let listInput = document.querySelector(\".list-input\");\n  let listSpan = document.querySelector(\".list-span\");\n  let listForm = document.querySelector(\"#list-form\");\n  let overlay = document.querySelector(\"#overlay\");\n  let cancelBtns = document.querySelectorAll(\".cancel\");\n  let taskContainer = document.querySelector(\".main-content\");\n  let addItemForm = document.querySelector(\".task-form\");\n  let taskName = document.querySelector(\".task-title\");\n  let taskDescr = document.querySelector(\".task-description\");\n  let taskDate = document.querySelector(\".task-date\");\n  let taskPriority = document.querySelector(\".task-priority\");\n\n  sidebarTitle.classList.add(\"pointer\");\n  sidebarTitle.addEventListener(\"click\", renderHomepage);\n\n  let logoHeader = document.createElement(\"img\");\n  logoHeader.src = _src_assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__;\n  logoHeader.classList.add(\"logo\");\n\n  sidebarTitle.prepend(logoHeader);\n\n  listInput.addEventListener(\"mouseout\", toggleFormDisplay);\n\n  function addItem(e) {\n    e.preventDefault();\n    if (selectedTaskId == \"none\") {\n      if (taskName.value !== \"\") {\n        _src_app_task__WEBPACK_IMPORTED_MODULE_1__.createTask(\n          selectedListId,\n          taskName.value,\n          taskDescr.value,\n          taskDate.value,\n          taskPriority.value,\n        );\n      }\n    } else {\n      console.log(`The selected task id is ${selectedTaskId}`);\n      _src_app_task__WEBPACK_IMPORTED_MODULE_1__.editTask(\n        selectedListId,\n        selectedTaskId,\n        taskName.value,\n        taskDescr.value,\n        taskDate.value,\n        taskPriority.value,\n      );\n    }\n    (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(lists, selectedListId);\n    let taskModal = document.querySelector(\"#task-modal\");\n    closeModal(taskModal);\n    renderTasks(selectedList);\n    taskName.value = \"\";\n    taskDescr.value = \"\";\n    taskDate.value = \"\";\n    taskPriority.value = \"\";\n  }\n\n  addItemForm.addEventListener(\"submit\", (e) => {\n    addItem(e);\n  });\n\n  let renderLists = () => {\n    clearLists();\n\n    lists.forEach((list) => {\n      let listName = document.createElement(\"p\");\n      listName.innerHTML = list.name;\n      listName.classList.add(\"list-name\");\n      listName.setAttribute(\"readonly\", true);\n      listName.dataset.listId = list.id;\n      if (list.id === selectedListId) {\n        listName.classList.add(\"selected-list\");\n      }\n\n      let editListBtn = document.createElement(\"img\");\n      editListBtn.src = _src_assets_editBtn_svg__WEBPACK_IMPORTED_MODULE_4__;\n      editListBtn.dataset.btn = \"edit\";\n      editListBtn.classList.add(\"list-edit\");\n\n      editListBtn.dataset.listId = list.id;\n\n      let deleteListBtn = document.createElement(\"img\");\n      deleteListBtn.src = _src_assets_deleteBtn_svg__WEBPACK_IMPORTED_MODULE_5__;\n      deleteListBtn.dataset.btn = \"delete\";\n      deleteListBtn.dataset.listId = list.id;\n      deleteListBtn.classList.add(\"list-delete\");\n\n      let btnContainer = document.createElement(\"div\");\n      btnContainer.classList.add(\"list-btn-container\");\n      btnContainer.appendChild(editListBtn);\n      btnContainer.appendChild(deleteListBtn);\n\n      let listElement = document.createElement(\"li\");\n      listElement.classList.add(\"list-element\");\n      listElement.appendChild(listName);\n      listElement.appendChild(btnContainer);\n\n      listContainer.appendChild(listElement);\n    });\n  };\n\n  let clearLists = () => {\n    listContainer.innerHTML = \"\";\n  };\n\n  let clearTasks = () => {\n    taskContainer.innerHTML = \"\";\n  };\n\n  addListForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    let listName = listInput.value;\n    if (listName == null || listName === \"\") return;\n    _src_app_list__WEBPACK_IMPORTED_MODULE_0__.createList(listName, \"defaultImg\");\n    toggleFormDisplay();\n    listInput.value = \"\";\n    renderLists();\n  });\n\n  function toggleFormDisplay() {\n    if (listInput.style.visibility == \"hidden\") {\n      listInput.style.visibility = \"visible\";\n      listSpan.style.visibility = \"visible\";\n    } else {\n      listInput.style.visibility = \"hidden\";\n      listSpan.style.visibility = \"hidden\";\n    }\n  }\n\n  addListBtn.classList.add(\"pointer\");\n  addListBtn.addEventListener(\"click\", toggleFormDisplay);\n\n  /* listContainer.classList.add(\"pointer\"); */\n  listContainer.addEventListener(\"click\", selectElement);\n\n  function selectElement(e) {\n    selectedListId = e.target.dataset.listId;\n    (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(lists, selectedListId);\n    if (e.target.tagName.toLowerCase() === \"p\") {\n      renderLists();\n      selectedList = _src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList(selectedListId);\n      renderTasks(selectedList);\n    }\n\n    if (e.target.dataset.btn == \"edit\") {\n      openListModal(selectedListId);\n    }\n\n    if (e.target.dataset.btn == \"delete\") {\n      _src_app_list__WEBPACK_IMPORTED_MODULE_0__.deleteList(selectedListId);\n      renderLists();\n    }\n  }\n\n  cancelBtns.forEach((button) => {\n    button.addEventListener(\"click\", () => {\n      let modal = document.querySelector(\".modal.active\");\n      closeModal(modal);\n    });\n  });\n\n  listForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    let listModal = document.querySelector(\".modal.active\");\n    let listName = document.querySelector(\".list-name-input\");\n    if (listName == null || listName == \"\") return;\n    _src_app_list__WEBPACK_IMPORTED_MODULE_0__.editListName(selectedListId, listName.value, \"default\");\n    renderLists();\n    closeModal(listModal);\n    toggleFormDisplay();\n  });\n\n  function openListModal(selectedListId) {\n    let listModal = document.querySelector(\"#list-modal\");\n    let listName = document.querySelector(\".list-name-input\");\n    let listTitle = document.querySelector(\".list-title\");\n    let list = _src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList(selectedListId);\n    listName.value = list.name;\n    listTitle.innerHTML = list.name;\n    listModal.classList.add(\"active\");\n    overlay.classList.add(\"active\");\n    renderLists();\n  }\n\n  function openModal(modal) {\n    modal.classList.add(\"active\");\n    overlay.classList.add(\"active\");\n  }\n\n  function closeModal(modal) {\n    modal.classList.remove(\"active\");\n    overlay.classList.remove(\"active\");\n  }\n  overlay.classList.add(\"pointer\");\n  overlay.addEventListener(\"click\", () => {\n    let modal = document.querySelector(\".modal.active\");\n    closeModal(modal);\n  });\n\n  function renderHomepage() {\n    clearTasks();\n\n    let homepageTitle = document.createElement(\"h1\");\n    homepageTitle.textContent = \"Odin's Chores\";\n    homepageTitle.classList.add(\"homepage-title\");\n    let homepageDescr = document.createElement(\"p\");\n    homepageDescr.textContent =\n      \"Create a new list by clicking the + button or select an existing one to start adding your tasks.\";\n    homepageDescr.classList.add(\"homepage-descr\");\n\n    let homepageContainer = document.createElement(\"div\");\n    homepageContainer.classList.add(\"homepage-container\");\n    homepageContainer.appendChild(homepageTitle);\n    homepageContainer.appendChild(homepageDescr);\n\n    taskContainer.appendChild(homepageContainer);\n  }\n\n  function renderHeader(selectedList) {\n    let header = document.createElement(\"div\");\n    header.classList.add(\"main-heading\");\n\n    let listTitle = document.createElement(\"h1\");\n    listTitle.innerHTML = selectedList.name;\n    listTitle.classList.add(\"list-heading\");\n\n    let addItemContainer = document.createElement(\"div\");\n    addItemContainer.classList.add(\"add-item-container\");\n\n    addItemContainer.classList.add(\"pointer\");\n    addItemContainer.addEventListener(\"click\", () => {\n      selectedTaskId = \"none\";\n      let taskModal = document.querySelector(\"#task-modal\");\n      openModal(taskModal);\n    });\n\n    let addItemH3 = document.createElement(\"h3\");\n    addItemH3.textContent = \"Add item\";\n\n    let addItemImg = document.createElement(\"img\");\n    addItemImg.src = _src_assets_circle_plus_svg__WEBPACK_IMPORTED_MODULE_6__;\n    addItemImg.classList.add(\"plus-btn\");\n\n    addItemContainer.appendChild(addItemH3);\n    addItemContainer.appendChild(addItemImg);\n\n    header.appendChild(listTitle);\n    header.appendChild(addItemContainer);\n\n    taskContainer.appendChild(header);\n  }\n\n  /* Still necessary? */\n\n  taskContainer.addEventListener(\"click\", selectTaskElement);\n\n  function selectTaskElement(e) {\n    if (e.target.tagName.toLowerCase() === \"input\") {\n      let selectedListId = e.target.dataset.listId;\n      let selectedList = _src_app_list__WEBPACK_IMPORTED_MODULE_0__.getList(selectedListId);\n      let selectedTask = selectedList.tasks.find(\n        (task) => task.id === e.target.dataset.id,\n      );\n      selectedTask.complete = e.target.checked;\n      (0,_src_app_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)(lists, selectedListId);\n      renderTasks(selectedList);\n    }\n  }\n\n  function renderTasks(selectedList) {\n    clearTasks();\n    renderHeader(selectedList);\n\n    selectedList.tasks.forEach((task) => {\n      let itemCard = document.createElement(\"div\");\n      itemCard.classList.add(\"item-card\");\n\n      let priorityIndicator = document.createElement(\"div\");\n      priorityIndicator.classList.add(\"priority-indicator\");\n\n      if (task.priority == \"Low\") {\n        priorityIndicator.classList.add(\"priority-low\");\n      } else if (task.priority == \"Medium\") {\n        priorityIndicator.classList.add(\"priority-medium\");\n      } else if (task.priority == \"High\") {\n        priorityIndicator.classList.add(\"priority-high\");\n      } else {\n        priorityIndicator.classList.add(\"priority-default\");\n      }\n\n      let checkbox = document.createElement(\"input\");\n      checkbox.setAttribute(\"type\", \"checkbox\");\n      checkbox.dataset.taskId = task.id;\n      checkbox.classList.add(\"checkbox\");\n      checkbox.dataset.id = task.id;\n      checkbox.dataset.listId = selectedList.id;\n      checkbox.checked = task.complete;\n\n      if (task.complete) {\n        itemCard.classList.add(\"completed-task\");\n      }\n\n      let checkboxContainer = document.createElement(\"div\");\n      checkboxContainer.classList.add(\"checkbox-container\");\n      checkboxContainer.appendChild(checkbox);\n\n      let itemName = document.createElement(\"h3\");\n      itemName.classList.add(\"item-name\");\n      itemName.textContent = task.name;\n\n      let dueDate = document.createElement(\"h3\");\n      dueDate.textContent = task.date;\n      dueDate.classList.add(\"date\");\n\n      let trashIcon = new Image();\n      trashIcon.dataset.taskId = task.id;\n      trashIcon.src = _src_assets_deleteBtn_svg__WEBPACK_IMPORTED_MODULE_5__;\n\n      let deleteItemBtn = document.createElement(\"div\");\n      deleteItemBtn.classList.add(\"delete-item-btn\");\n      deleteItemBtn.appendChild(trashIcon);\n      deleteItemBtn.dataset.taskId = task.id;\n      deleteItemBtn.dataset.btn = \"delete\";\n\n      deleteItemBtn.classList.add(\"pointer\");\n      deleteItemBtn.addEventListener(\"click\", (e) => {\n        selectedTaskId = task.id;\n        _src_app_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask(selectedListId, selectedTaskId);\n\n        renderTasks(selectedList);\n      });\n\n      let pencilIcon = new Image();\n      pencilIcon.dataset.taskId = task.id;\n      pencilIcon.src = _src_assets_editBtn_svg__WEBPACK_IMPORTED_MODULE_4__;\n\n      let editItemBtn = document.createElement(\"div\");\n      editItemBtn.classList.add(\"edit-item-btn\");\n      editItemBtn.appendChild(pencilIcon);\n      editItemBtn.dataset.taskId = task.id;\n      editItemBtn.dataset.btn = \"edit\";\n\n      editItemBtn.classList.add(\"pointer\");\n      editItemBtn.addEventListener(\"click\", () => {\n        selectedTaskId = task.id;\n        taskName.value = task.name;\n        taskDescr.value = task.description;\n        taskPriority.value = task.priority;\n        taskDate.value = task.date;\n        let taskModal = document.querySelector(\"#task-modal\");\n        openModal(taskModal);\n      });\n\n      itemCard.appendChild(priorityIndicator);\n      itemCard.appendChild(checkboxContainer);\n      itemCard.appendChild(itemName);\n      itemCard.appendChild(dueDate);\n      itemCard.appendChild(editItemBtn);\n      itemCard.appendChild(deleteItemBtn);\n\n      taskContainer.appendChild(itemCard);\n    });\n  }\n  /* Initial render */\n  renderLists();\n  renderHomepage();\n}\n\n\n\n\n//# sourceURL=webpack://top-todo-list/./src/app/ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _src_app_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/app/ui */ \"./src/app/ui.js\");\n\n/* import logo from \"/src/assets/logo.svg\"; */\n\n(0,_src_app_ui__WEBPACK_IMPORTED_MODULE_1__.screenController)();\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/circle-plus.svg":
/*!************************************!*\
  !*** ./src/assets/circle-plus.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6daef11136164478972b.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/assets/circle-plus.svg?");

/***/ }),

/***/ "./src/assets/deleteBtn.svg":
/*!**********************************!*\
  !*** ./src/assets/deleteBtn.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"642da2f9203fed7e99a0.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/assets/deleteBtn.svg?");

/***/ }),

/***/ "./src/assets/editBtn.svg":
/*!********************************!*\
  !*** ./src/assets/editBtn.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"184b2da50bd4922b3638.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/assets/editBtn.svg?");

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b30578d7bee0dbf6398.svg\";\n\n//# sourceURL=webpack://top-todo-list/./src/assets/logo.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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