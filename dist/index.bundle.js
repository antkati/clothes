/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor-react","vendor-all"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/BurgerMenu.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/BurgerMenu.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../fonts/fontello.eot?59721244 */ "./src/js/fonts/fontello.eot?59721244"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../fonts/fontello.eot?59721244 */ "./src/js/fonts/fontello.eot?59721244") + "#iefix");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../fonts/fontello.woff2?59721244 */ "./src/js/fonts/fontello.woff2?59721244"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../fonts/fontello.woff?59721244 */ "./src/js/fonts/fontello.woff?59721244"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../fonts/fontello.ttf?59721244 */ "./src/js/fonts/fontello.ttf?59721244"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../fonts/fontello.svg?59721244 */ "./src/js/fonts/fontello.svg?59721244") + "#fontello");
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../images/search.png */ "./src/js/images/search.png"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../images/search-dark.png */ "./src/js/images/search-dark.png"));
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'fontello';\r\n    src: url(" + ___CSS_LOADER_URL___0___ + ");\r\n    src: url(" + ___CSS_LOADER_URL___1___ + ") format('embedded-opentype'),\r\n         url(" + ___CSS_LOADER_URL___2___ + ") format('woff2'),\r\n         url(" + ___CSS_LOADER_URL___3___ + ") format('woff'),\r\n         url(" + ___CSS_LOADER_URL___4___ + ") format('truetype'),\r\n         url(" + ___CSS_LOADER_URL___5___ + ") format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n.header__burger__link {\r\n    cursor: pointer;\r\n}\r\n\r\n.burger__overlay {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(34,34,34,.6);\r\n    opacity: 0;\r\n    transition: opacity 500ms ease-in-out;\r\n}\r\n\r\n.ReactModal__Overlay--after-open{\r\n    opacity: 1;\r\n}\r\n\r\n.ReactModal__Overlay--before-close{\r\n    opacity: 0;\r\n}\r\n\r\n.burger__modal {\r\n    position: relative;\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n    border-radius: 0px;\r\n    outline: none;\r\n    overflow: auto;\r\n    transform: translateX(200%);\r\n    transition: transform 700ms ease-out;\r\n}\r\n\r\n.ReactModal__Content--after-open{\r\n    transform: translateX(0);\r\n}\r\n\r\n.ReactModal__Content--before-close{\r\n    transform: translateX(200%);\r\n}\r\n\r\n.burger__close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.burger__search {\r\n    display: flex;\r\n    margin-top: 40px;\r\n}\r\n\r\n.burger__search__input {\r\n    width: calc(100% - 42px);\r\n    height: 42px;\r\n\tborder: 1px solid #959595;\r\n\tborder-right: none;\r\n\tpadding: 5px 15px;\r\n\tfont-size: 0.75rem;\r\n    color: #303030;\r\n    outline: none;\r\n}\r\n\r\n.burger__search__button {\r\n\twidth: 42px;\r\n\theight: 42px;\r\n\tborder: none;\r\n    padding: 0px;\r\n    background: url(" + ___CSS_LOADER_URL___6___ + ");\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.burger__search__button:active {\r\n\tbackground: url(" + ___CSS_LOADER_URL___7___ + ");\r\n}\r\n\r\n.burger__cats {\r\n    margin-top: 20px;\r\n}\r\n\r\n.burger__cats li,\r\n.burger__log-in {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px 5px;\r\n    font-size: 0.75rem;\r\n    color: #606060;\r\n    cursor: pointer;\r\n}\r\n\r\n.burger__cats li:hover,\r\n.burger__log-in:hover {\r\n    color: #000000;\r\n}\r\n\r\n.burger__cats li:active {\r\n    background-color: rgb(244, 244, 244);\r\n}\r\n\r\n.burger__cats a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.arrow-right:before {\r\n    content: '\\e803';\r\n    font-family: 'fontello';\r\n}\r\n\r\n.burger__back {\r\n    display: inline-block;\r\n    font-size: 0.75rem;\r\n    color: #606060;\r\n    cursor: pointer;\r\n}\r\n\r\n.burger__back::before {\r\n    content: '\\e802';\r\n    font-family: 'fontello';\r\n    margin-right: 7px;\r\n}\r\n\r\n.burger__back:hover {\r\n    color: #000000;    \r\n}\r\n\r\n.back--log-in {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n/* @media screen and (max-width: 768px) {\r\n\r\n} */", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/Cart.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/Cart.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/desktop-cart.png */ "./src/js/images/desktop-cart.png"));
// Module
exports.push([module.i, "/* cart */\r\n\r\n.cart-wrap {\r\n\tposition: relative;\r\n}\r\n\r\n.header__cart__button {\r\n\tposition: relative;\r\n\tz-index: 200;\r\n\twidth: 123px;\r\n\tpadding: 15px;\r\n\tborder: 1px solid transparent;\r\n\tborder-bottom: none;\r\n\tbackground: #ffffff;\r\n}\r\n\r\n.cart-wrap.open:hover .header__cart__button {\r\n\tborder: 1px solid #e5e5e5;\r\n\tborder-bottom: none;\r\n}\r\n\r\n.header__cart__link {\r\n\twhite-space: nowrap;\r\n}\r\n\r\n.header__cart__link::before {\r\n\tcontent: url(" + ___CSS_LOADER_URL___0___ + ");\r\n\tmargin-right: 4px;\r\n}\r\n\r\n.header__cart__link:hover {\r\n\ttext-decoration: none;\r\n\tcolor: #000000;\r\n}\r\n\r\n.cart-wrap.open:hover .header__cart__link {\r\n\tcolor: #000000;\r\n}\r\n\r\n.cart__pop-up {\r\n\tposition: absolute;\r\n\tz-index: 100;\r\n\tright: 0px;\r\n\ttop: 49px;\r\n\twidth: 400px;\r\n\tpadding: 5px 15px;\r\n\tbackground-color: #ffffff;\r\n\tborder: 1px solid #e5e5e5;\r\n}\r\n\r\n.cart__pop-up__list {\r\n\ttext-align: left;\r\n\twidth: 100%;\r\n\tborder-collapse: collapse;\r\n\tfont-size: 0.75rem;\r\n}\r\n\r\n.cart__pop-up__h4 {\r\n\tfont-size: 0.75rem;\r\n}\r\n\r\n.cart__pop-up__list__body__row {\r\n\tborder-bottom: 1px solid #e5e5e5;\r\n\r\n}\r\n\r\n.cart__pop-up__item__body {\r\n\tvertical-align: middle;\t\r\n\tpadding: 15px 0px;\t\r\n}\r\n\r\n.cart__pop-up__img {\r\n\tdisplay: block;\r\n\twidth: 50px;\r\n\theight: 60px;\r\n}\r\n\r\n.cart__pop-up__img__link {\r\n\tdisplay: inline-block;\r\n\tline-height: 0;\r\n}\r\n\r\n.cart__pop-up__item__img {\r\n\twidth: 50px;\r\n}\r\n\r\n.cart__pop-up__item__description {\r\n\twidth: calc(78% - 80px);\r\n\tpadding-left: 15px;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.cart__pop-up__item__amount {\r\n\twidth: 22%;\t\t\r\n}\r\n\r\n.cart__pop-up__item__delete {\r\n\ttext-align: center;\r\n\twidth: 30px;\r\n}\r\n\r\n.delete__img {\r\n\tcursor: pointer;\r\n}\r\n\r\n.cart__pop-up__item__footer {\r\n\tvertical-align: middle;\t\r\n\tpadding: 15px 0px;\t\t\r\n}\r\n\r\n.cart__pop-up__total {\r\n\tcolor: #f68236;\r\n}\r\n\r\n.cart__pop-up__btn {\r\n\twidth: 100%;\r\n\theight: 32px;\r\n\tfont-size: 0.75rem;\r\n}\r\n\r\n@media screen and (max-width: 1120px) {\r\n\t.cart__pop-up {\r\n\t\twidth: 340px;\r\n\t}\r\n\r\n\t.cart__pop-up__item__body {\r\n\t\tvertical-align: middle;\t\r\n\t\tpadding: 5px 0px;\t\r\n\t}\r\n\r\n\t.cart__pop-up__item__description {\r\n\t\tpadding-left: 15px;\r\n\t\tpadding-right: 10px;\r\n\t}\t\r\n}\r\n\r\n@media screen and (max-width: 860px) {\r\n\t.header__cart__button {\r\n\t\tpadding: 15px 10px;\r\n\t\twidth: 97px;\r\n\t}\t\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/LogIn.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/LogIn.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/user.png */ "./src/js/images/user.png"));
// Module
exports.push([module.i, "\r\n/* .ReactModal__Body--open,\r\n.ReactModal__Html--open {\r\n    overflow-y: hidden;\r\n    padding-right: 17px;\r\n}\r\n\r\n.ReactModal__Body--open .header__section--1,\r\n.ReactModal__Html--open .header__section--1 {\r\n    right: 17px;\r\n} */\r\n\r\n.header__personal-page__link {\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n}\r\n\r\n.header__personal-page__link:hover {\r\n    text-decoration: none;\r\n    color: #000000;\r\n}\r\n\r\n.header__personal-page__link::before {\r\n\tcontent: url(" + ___CSS_LOADER_URL___0___ + ");\r\n\tmargin-right: 4px;\t\r\n}\r\n\r\n.pop-up__overlay {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(34,34,34,.6);\r\n}\r\n\r\n.pop-up__modal {\r\n    position: relative;\r\n    width: 400px;\r\n    height: auto;\r\n    padding: 25px;\r\n    background-color: #ffffff;\r\n    border-radius: 0px;\r\n    outline: none;\r\n    box-shadow: 0 1px 16px rgba(0,0,0,.25);\r\n}\r\n\r\n.pop-up__close {\r\n    position: absolute;\r\n    top: 23px;\r\n    right: 25px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n}\r\n\r\n.pop-up__title {\r\n    margin-bottom: 25px;\r\n    padding-bottom: 15px; \r\n    border-bottom: 1px solid #e5e5e5;\r\n}\r\n\r\n.pop-up__section {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.pop-up__input {\r\n    height: 42px;\r\n\twidth: 100%;\t\r\n\tborder: 1px solid #c2c2c2;\r\n\tpadding: 0 10px;\r\n    outline: 0;\r\n    transition: border 0.5s ease;\r\n}\r\n\r\n.pop-up__input:focus {\r\n    border: 1px solid #333333;\r\n}\r\n\r\n.pop-up__label {\r\n    display: block;\r\n    margin-bottom: 7px;\r\n    font-size: 0.75rem;\r\n    color: #606060;\r\n    transition: border 0.5s ease;\r\n}\r\n\r\n.pop-up__btn {\r\n    height: 50px;\r\n    width: 95px;\r\n}\r\n\r\n.btn--log-in {\r\n    margin-right: 15px;\r\n}\r\n\r\n.btn--sign-in {\r\n    border: 1px solid #949494;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    color: #333333;\r\n    transition: border 0.5s ease;\r\n}\r\n\r\n.btn--sign-in:hover {\r\n    border: 1px solid #333333;\r\n    transition: border 0.5s ease;\r\n}\r\n\r\n.pop-up__forgot-password {\r\n    color: #dc813e;\r\n    cursor: pointer;\r\n    font-size: 0.75rem;\r\n    transition: color 0.5s ease;\r\n\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .pop-up__modal {\r\n        height: 100vh;\r\n        width: 100%;\r\n        padding: 20px;\r\n        overflow: auto;\r\n        box-shadow: none;\r\n    }\r\n\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/SearchBar.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/SearchBar.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/search.png */ "./src/js/images/search.png"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../images/search-dark.png */ "./src/js/images/search-dark.png"));
// Module
exports.push([module.i, ".header__search-bar {\r\n\tdisplay: flex;\r\n}\r\n\r\n.search-bar__input-button {\r\n\twidth: 42px;\r\n\theight: 42px;\r\n\toutline: none;\r\n\tbackground: url(" + ___CSS_LOADER_URL___0___ + ");\r\n\tborder: none;\r\n\tpadding: 0px;\r\n\tcursor: pointer;\r\n\ttransition: background-image 0.4s ease;\t\r\n}\r\n\r\n.search-bar__input-button:hover {\r\n\tbackground: url(" + ___CSS_LOADER_URL___1___ + ");\r\n\ttransition: background-image 0.4s ease;\r\n}\r\n\r\n.search-bar__input-text {\r\n\tdisplay: none;\r\n\tborder: 1px solid #959595;\r\n\tborder-right: none;\r\n\tpadding: 5px 15px;\r\n\twidth: 165px;\r\n\ttransform: scaleX(0);\r\n\ttransform-origin: right center;\r\n\theight: 42px;\r\n\toutline: none;\r\n\tfont-size: 0.75rem;\r\n\tcolor: #303030;\r\n}\r\n\r\n@keyframes openSearchBar {\r\n\tfrom {\r\n\t\ttransform: scaleX(0);\r\n\t}\r\n\tto {\r\n\t\ttransform: scaleX(1);\r\n\t}\r\n}\r\n\r\n@keyframes closeSearchBar {\r\n\tfrom {\r\n\t\ttransform: scaleX(1);\t\r\n\t}\r\n\tto {\r\n\t\ttransform: scaleX(0);\r\n\t}\r\n}\r\n\r\n@keyframes moveLeftProfileWrap {\r\n\tfrom {\r\n\t\ttransform: translateX(-42px);\r\n\t}\r\n\tto {\r\n\t\ttransform: translateX(-207px);\r\n\t}\r\n}\r\n\r\n@keyframes moveRightProfileWrap {\r\n\tfrom {\r\n\t\ttransform: translateX(-207px);\t\r\n\t}\r\n\tto {\r\n\t\ttransform: translateX(-42px);\r\n\t}\r\n}\r\n\r\n.header__search-bar.open .search-bar__input-text {\r\n\tanimation: openSearchBar 0.35s forwards;\r\n}\r\n\r\n.header__search-bar.close .search-bar__input-text {\r\n\tanimation: closeSearchBar 0.35s forwards;\r\n}\r\n\r\n.profile__wrap[data-move=\"left\"] {\r\n\tanimation: moveLeftProfileWrap 0.35s forwards;\r\n}\r\n\r\n.profile__wrap[data-move=\"right\"] {\r\n\tanimation: moveRightProfileWrap 0.35s forwards;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t/* после анимации на десктопе .profile__wrap \r\n\tсодержит атрибут [data-move=\"right\"],\r\n\tчтобы не было отступа -42px на мобильном при ресайзе, \r\n\tотключаем анимацию */\r\n\t.profile__wrap[data-move=\"right\"] {\r\n\t\tanimation: none;\r\n\t}\t\r\n}\r\n\r\n\r\n\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/window.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/window.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".header__section--scrolled .header__menu {\r\n   height: 80px; \r\n}\r\n", ""]);


/***/ }),

/***/ "./src/js/components/BurgerMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/BurgerMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cancel.png */ "./src/js/images/cancel.png");
/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_cancel_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_burger_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/burger-menu.png */ "./src/js/images/burger-menu.png");
/* harmony import */ var _images_burger_menu_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_burger_menu_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_BurgerMenu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/BurgerMenu.css */ "./src/js/styles/BurgerMenu.css");
/* harmony import */ var _styles_BurgerMenu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_BurgerMenu_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/search.png */ "./src/js/images/search.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_search_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_search_dark_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/search-dark.png */ "./src/js/images/search-dark.png");
/* harmony import */ var _images_search_dark_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_search_dark_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_LogIn_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/LogIn.css */ "./src/js/styles/LogIn.css");
/* harmony import */ var _styles_LogIn_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_LogIn_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var BurgerMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BurgerMenu, _React$Component);

  function BurgerMenu(props) {
    var _this;

    _classCallCheck(this, BurgerMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BurgerMenu).call(this, props));
    _this.state = {
      showModalMenu: false,
      parentID: null,
      showModalLogIn: false
    };
    _this.handleOpenMenu = _this.handleOpenMenu.bind(_assertThisInitialized(_this));
    _this.handleCloseMenu = _this.handleCloseMenu.bind(_assertThisInitialized(_this));
    _this.handleOpenCat = _this.handleOpenCat.bind(_assertThisInitialized(_this));
    _this.handleCloseCat = _this.handleCloseCat.bind(_assertThisInitialized(_this));
    _this.handleOpenLogIn = _this.handleOpenLogIn.bind(_assertThisInitialized(_this));
    _this.handleCloseLogIn = _this.handleCloseLogIn.bind(_assertThisInitialized(_this));
    _this.categories = [];
    _this.previousID = null;
    return _this;
  }

  _createClass(BurgerMenu, [{
    key: "handleOpenMenu",
    value: function handleOpenMenu() {
      this.createLis(this.props.cats);
      this.setState({
        showModalMenu: true
      });
    }
  }, {
    key: "handleCloseMenu",
    value: function handleCloseMenu() {
      this.setState({
        showModalMenu: false,
        parentID: null,
        showModalLogIn: false
      });
      this.previousID = null;
    }
  }, {
    key: "handleOpenCat",
    value: function handleOpenCat(e) {
      var target = e.target;

      while (target.tagName != "LI") {
        target = target.parentNode;
      }

      var id = target.getAttribute("data-id");
      if (!id) return;
      var cats = this.searchCats(this.props.cats, id);
      this.createLis(cats);
      this.setState({
        parentID: id
      });
    }
  }, {
    key: "handleCloseCat",
    value: function handleCloseCat() {
      var previousCats = this.searchPreviousCats(this.props.cats, this.state.parentID, null);
      this.createLis(previousCats);
      this.setState({
        parentID: this.previousID
      });
    }
  }, {
    key: "createLis",
    value: function createLis(arr) {
      var _this2 = this;

      this.categories = [];
      arr.forEach(function (item) {
        if ("subsections" in item && item.subsections.length) {
          _this2.categories.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: item.id,
            "data-id": item.id,
            onClick: _this2.handleOpenCat
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "arrow-right"
          })));
        } else {
          _this2.categories.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: item.id
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: item.href
          }, item.name)));
        }
      });
    }
  }, {
    key: "searchCats",
    value: function searchCats(arr, id) {
      for (var i = 0; i < arr.length; i++) {
        if ("subsections" in arr[i] && arr[i].subsections.length) {
          if (arr[i].id !== id) {
            var result = this.searchCats(arr[i].subsections, id);

            if (result) {
              return result;
            }
          } else {
            return arr[i].subsections;
          }
        }
      }

      return null;
    }
  }, {
    key: "searchPreviousCats",
    value: function searchPreviousCats(arr, id, previousID) {
      for (var i = 0; i < arr.length; i++) {
        if ("subsections" in arr[i] && arr[i].subsections.length) {
          if (arr[i].id !== id) {
            var result = this.searchPreviousCats(arr[i].subsections, id, arr[i].id);

            if (result) {
              return result;
            }
          } else {
            this.previousID = previousID;
            return arr;
          }
        }
      }
    }
  }, {
    key: "handleOpenLogIn",
    value: function handleOpenLogIn() {
      this.setState({
        showModalLogIn: true
      });
    }
  }, {
    key: "handleCloseLogIn",
    value: function handleCloseLogIn() {
      this.setState({
        showModalLogIn: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "header__burger__link",
        src: _images_burger_menu_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        onClick: this.handleOpenMenu
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        isOpen: this.state.showModalMenu,
        contentLabel: "Burger menu",
        onRequestClose: this.handleCloseMenu,
        className: "burger__modal",
        overlayClassName: "burger__overlay",
        closeTimeoutMS: 700
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "burger__close",
        src: _images_cancel_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        onClick: this.handleCloseMenu
      }), !this.state.parentID && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "burger__search"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Search something...",
        className: "burger__search__input"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "burger__search__button",
        type: "button"
      })), !!this.state.parentID && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "burger__back text-transform--uppercase",
        onClick: this.handleCloseCat
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "burger__cats text-transform--uppercase"
      }, this.categories), !this.state.parentID && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-transform--uppercase burger__log-in",
        onClick: this.handleOpenLogIn
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "arrow-right"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        isOpen: this.state.showModalLogIn,
        contentLabel: "Log in",
        onRequestClose: this.handleCloseMenu,
        className: "pop-up__modal",
        overlayClassName: "pop-up__overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "pop-up__close",
        src: _images_cancel_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        onClick: this.handleCloseMenu
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "burger__back text-transform--uppercase back--log-in",
        onClick: this.handleCloseLogIn
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "pop-up__title text-transform--uppercase"
      }, "Entry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pop-up__section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "pop-up__login",
        className: "pop-up__label text-transform--uppercase"
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        autoFocus: true,
        id: "pop-up__login",
        type: "text",
        className: "pop-up__input"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pop-up__section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "pop-up__password",
        className: "pop-up__label text-transform--uppercase"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "pop-up__password",
        className: "pop-up__input"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pop-up__section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn--orange btn--log-in text-transform--uppercase pop-up__btn"
      }, "log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn--sign-in text-transform--uppercase pop-up__btn"
      }, "sigh in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "pop-up__forgot-password"
      }, "Forgot your password?")));
    }
  }]);

  return BurgerMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BurgerMenu);

/***/ }),

/***/ "./src/js/components/Cart.js":
/*!***********************************!*\
  !*** ./src/js/components/Cart.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Cart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Cart.css */ "./src/js/styles/Cart.css");
/* harmony import */ var _styles_Cart_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Cart_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_product_item_3_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/product-item-3-1.jpg */ "./src/js/images/product-item-3-1.jpg");
/* harmony import */ var _images_product_item_3_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_product_item_3_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_desktop_cart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/desktop-cart.png */ "./src/js/images/desktop-cart.png");
/* harmony import */ var _images_desktop_cart_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_desktop_cart_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_delete_basket_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/delete-basket.png */ "./src/js/images/delete-basket.png");
/* harmony import */ var _images_delete_basket_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_delete_basket_png__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* Компонент товаров */

var ProductRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductRow, _React$Component);

  function ProductRow(props) {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductRow).call(this, props));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "cart__pop-up__list__body__row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "cart__pop-up__item__body cart__pop-up__item__img"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "cart__pop-up__img__link",
        href: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.props.product.image,
        className: "cart__pop-up__img"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "cart__pop-up__item__body cart__pop-up__item__description"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "cart__pop-up__h4 text-transform--uppercase"
      }, this.props.product.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "cart__pop-up__item__body cart__pop-up__item__amount"
      }, "€" + this.props.product.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "cart__pop-up__item__body cart__pop-up__item__delete"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "delete__img",
        src: _images_delete_basket_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        "data-index": this.props.index,
        onClick: this.props.deleteProduct
      })));
    }
  }]);

  return ProductRow;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Компонент итого */


var Total =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Total, _React$Component2);

  function Total(props) {
    _classCallCheck(this, Total);

    return _possibleConstructorReturn(this, _getPrototypeOf(Total).call(this, props));
  }

  _createClass(Total, [{
    key: "render",
    value: function render() {
      var total = this.props.products.reduce(function (sum, current) {
        var price = +current.price;
        return sum + price;
      }, 0);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "cart__pop-up__list__footer-row grid--shopping-bag"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2",
        className: "cart__pop-up__item__footer font--lato-bold"
      }, "Subtotal:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "cart__pop-up__total"
      }, " €" + total)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        colSpan: "2",
        className: "cart__pop-up__item__footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn--orange text-transform--uppercase cart__pop-up__btn"
      }, "checkout")));
    }
  }]);

  return Total;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Компонент всплывашки */


var CartPopUp =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(CartPopUp, _React$Component3);

  function CartPopUp(props) {
    _classCallCheck(this, CartPopUp);

    return _possibleConstructorReturn(this, _getPrototypeOf(CartPopUp).call(this, props));
  }

  _createClass(CartPopUp, [{
    key: "render",
    value: function render() {
      var _this = this;

      var rows = this.props.products.map(function (product, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductRow, {
          key: product.name,
          product: product,
          index: index,
          deleteProduct: _this.props.deleteProduct
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cart__pop-up"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "cart__pop-up__list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        className: "cart__pop-up__list__body"
      }, rows, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Total, {
        products: this.props.products
      }))));
    }
  }]);

  return CartPopUp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Компонент всплывашки + ссылка */


var Cart =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Cart, _React$Component4);

  function Cart(props) {
    var _this2;

    _classCallCheck(this, Cart);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, props));
    _this2.state = {
      productsQuantity: _this2.props.products.length,
      cartPopUpVisible: false
    };
    _this2.cart = null;
    _this2.products = _this2.props.products.slice();
    _this2.showCartPopUp = _this2.showCartPopUp.bind(_assertThisInitialized(_this2));
    _this2.hideCartPopUp = _this2.hideCartPopUp.bind(_assertThisInitialized(_this2));
    _this2.isChildNodeTransition = _this2.isChildNodeTransition.bind(_assertThisInitialized(_this2));
    _this2.deleteProduct = _this2.deleteProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Cart, [{
    key: "showCartPopUp",
    value: function showCartPopUp() {
      if (this.cart) return;
      var container = this.props.container;
      this.cart = container.querySelector(".cart-wrap");
      this.setState({
        cartPopUpVisible: true
      });
    }
  }, {
    key: "hideCartPopUp",
    value: function hideCartPopUp(e) {
      if (this.isChildNodeTransition(e)) return;
      this.setState({
        cartPopUpVisible: false
      });
      this.cart = null;
    }
  }, {
    key: "isChildNodeTransition",
    value: function isChildNodeTransition(e) {
      var relatedTarget = e.relatedTarget;

      if (relatedTarget) {
        while (relatedTarget) {
          if (relatedTarget == this.cart) return true;
          relatedTarget = relatedTarget.parentNode;
        }
      }

      return false;
    }
  }, {
    key: "deleteProduct",
    value: function deleteProduct(e) {
      var deleteIndex = e.target.dataset.index;
      this.products.splice(deleteIndex, 1);
      this.setState(function (state) {
        return {
          productsQuantity: state.productsQuantity - 1
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.cartPopUpVisible && !!this.state.productsQuantity ? "cart-wrap open" : "cart-wrap",
        onMouseOut: this.hideCartPopUp
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header__cart__button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "header__cart__link",
        href: "/src/shopping_cart.html",
        onMouseOver: this.showCartPopUp
      }, "Basket (", this.state.productsQuantity, ")")), this.state.cartPopUpVisible && !!this.state.productsQuantity && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartPopUp, {
        products: this.products,
        deleteProduct: this.deleteProduct
      }));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/js/components/LogIn.js":
/*!************************************!*\
  !*** ./src/js/components/LogIn.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cancel.png */ "./src/js/images/cancel.png");
/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_cancel_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/user.png */ "./src/js/images/user.png");
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_user_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_LogIn_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/LogIn.css */ "./src/js/styles/LogIn.css");
/* harmony import */ var _styles_LogIn_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_LogIn_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var LogIn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LogIn, _React$Component);

  function LogIn() {
    var _this;

    _classCallCheck(this, LogIn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LogIn).call(this));
    _this.state = {
      showModal: false
    };
    _this.handleOpenModal = _this.handleOpenModal.bind(_assertThisInitialized(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LogIn, [{
    key: "handleOpenModal",
    value: function handleOpenModal() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "header__personal-page__link",
        onClick: this.handleOpenModal
      }, "Log In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        isOpen: this.state.showModal,
        contentLabel: "LogIn Modal",
        onRequestClose: this.handleCloseModal,
        className: "pop-up__modal",
        overlayClassName: "pop-up__overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "pop-up__close",
        src: _images_cancel_png__WEBPACK_IMPORTED_MODULE_2___default.a,
        onClick: this.handleCloseModal
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "pop-up__title text-transform--uppercase"
      }, "Entry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pop-up__section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "pop-up__login",
        className: "pop-up__label text-transform--uppercase"
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        autoFocus: true,
        id: "pop-up__login",
        type: "text",
        className: "pop-up__input"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pop-up__section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "pop-up__password",
        className: "pop-up__label text-transform--uppercase"
      }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "pop-up__password",
        className: "pop-up__input"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pop-up__section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn--orange btn--log-in text-transform--uppercase pop-up__btn"
      }, "log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn--sign-in text-transform--uppercase pop-up__btn"
      }, "sigh in")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "pop-up__forgot-password"
      }, "Forgot your password?")));
    }
  }]);

  return LogIn;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LogIn);

/***/ }),

/***/ "./src/js/components/SearchBar.js":
/*!****************************************!*\
  !*** ./src/js/components/SearchBar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_SearchBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/SearchBar.css */ "./src/js/styles/SearchBar.css");
/* harmony import */ var _styles_SearchBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchBar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/search.png */ "./src/js/images/search.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_search_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_search_dark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/search-dark.png */ "./src/js/images/search-dark.png");
/* harmony import */ var _images_search_dark_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_search_dark_png__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var SearchBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).call(this, props));
    _this.state = {
      inputTextVisible: "",
      inputTextValue: ""
    };
    _this.searchBar = null;
    _this.timerID = null;
    _this.showInputText = _this.showInputText.bind(_assertThisInitialized(_this));
    _this.inputIsEmpty = _this.inputIsEmpty.bind(_assertThisInitialized(_this));
    _this.isChildNodeTransition = _this.isChildNodeTransition.bind(_assertThisInitialized(_this));
    _this.hideInputText = _this.hideInputText.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.changeInputTextValue = _this.changeInputTextValue.bind(_assertThisInitialized(_this));
    _this.setDisplayNone = _this.setDisplayNone.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SearchBar, [{
    key: "showInputText",
    value: function showInputText(e) {
      if (this.searchBar) {
        clearTimeout(this.timerID);
        return;
      }

      ;
      this.searchBar = document.querySelector(".header__search-bar");
      this.props.profileWrap.setAttribute('data-move', 'left');
      var inputText = document.querySelector('.search-bar__input-text');
      inputText.style.display = "block";
      this.setState({
        inputTextVisible: "open"
      });
    }
  }, {
    key: "inputIsEmpty",
    value: function inputIsEmpty() {
      if (this.state.inputTextValue === "") return true;
      return false;
    }
  }, {
    key: "isChildNodeTransition",
    value: function isChildNodeTransition(e) {
      var relatedTarget = e.relatedTarget;

      if (relatedTarget) {
        while (relatedTarget) {
          if (relatedTarget == this.searchBar) return true;
          relatedTarget = relatedTarget.parentNode;
        }
      }

      return false;
    }
  }, {
    key: "hideInputText",
    value: function hideInputText(e) {
      if (!this.inputIsEmpty()) return;
      if (this.isChildNodeTransition(e)) return;
      this.timerID = setTimeout(this.hide, 1000);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        inputTextVisible: "close"
      });
      this.props.profileWrap.setAttribute('data-move', 'right');
      this.searchBar = null;
    }
  }, {
    key: "changeInputTextValue",
    value: function changeInputTextValue(e) {
      if (this.timerID) {
        clearTimeout(this.timerID);
      }

      this.setState({
        inputTextValue: e.target.value
      });

      if (!e.target.value) {
        this.timerID = setTimeout(this.hide, 1000);
      }
    }
  }, {
    key: "setDisplayNone",
    value: function setDisplayNone() {
      if (this.state.inputTextVisible === "open") return;
      var inputText = document.querySelector('.search-bar__input-text');
      inputText.style.display = "none";
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header__search-bar " + this.state.inputTextVisible,
        onMouseOver: this.showInputText,
        onMouseOut: this.hideInputText
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        autoFocus: true,
        type: "text",
        placeholder: "Search something...",
        className: "search-bar__input-text",
        value: this.state.inputTextValue,
        onChange: this.changeInputTextValue,
        onAnimationEnd: this.setDisplayNone
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search-bar__input-button",
        type: "button"
      }));
    }
  }]);

  return SearchBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/js/fonts/fontello.eot?59721244":
/*!********************************************!*\
  !*** ./src/js/fonts/fontello.eot?59721244 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f316cc17964e4b95c7e122e37b8ba9f2.eot";

/***/ }),

/***/ "./src/js/fonts/fontello.svg?59721244":
/*!********************************************!*\
  !*** ./src/js/fonts/fontello.svg?59721244 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1fff842d37a7618db9db86cb52847db6.svg";

/***/ }),

/***/ "./src/js/fonts/fontello.ttf?59721244":
/*!********************************************!*\
  !*** ./src/js/fonts/fontello.ttf?59721244 ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "376bbd246c4005c10d53ee8414c6e9c2.ttf";

/***/ }),

/***/ "./src/js/fonts/fontello.woff2?59721244":
/*!**********************************************!*\
  !*** ./src/js/fonts/fontello.woff2?59721244 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd6cb6636437818908a88cd51cdb47f8.woff2";

/***/ }),

/***/ "./src/js/fonts/fontello.woff?59721244":
/*!*********************************************!*\
  !*** ./src/js/fonts/fontello.woff?59721244 ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a0cd6592a5b4282244fe47a22bec917a.woff";

/***/ }),

/***/ "./src/js/images/burger-menu.png":
/*!***************************************!*\
  !*** ./src/js/images/burger-menu.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df9e1cd151b6e3b8bdaf3c32de9cc903.png";

/***/ }),

/***/ "./src/js/images/cancel.png":
/*!**********************************!*\
  !*** ./src/js/images/cancel.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5b7c46146c4a260e22d28c7eaee4db37.png";

/***/ }),

/***/ "./src/js/images/delete-basket.png":
/*!*****************************************!*\
  !*** ./src/js/images/delete-basket.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "26fa524de541c563ca518dc94a1e2654.png";

/***/ }),

/***/ "./src/js/images/desktop-cart.png":
/*!****************************************!*\
  !*** ./src/js/images/desktop-cart.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6b9844a0befa0c6f0d5519a1b1ea0a4.png";

/***/ }),

/***/ "./src/js/images/product-item-3-1.jpg":
/*!********************************************!*\
  !*** ./src/js/images/product-item-3-1.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1fcd21b3800b190efeceee783c594350.jpg";

/***/ }),

/***/ "./src/js/images/search-dark.png":
/*!***************************************!*\
  !*** ./src/js/images/search-dark.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "74c03a5b05b235e4e381218b1d3c9537.png";

/***/ }),

/***/ "./src/js/images/search.png":
/*!**********************************!*\
  !*** ./src/js/images/search.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a14b2c8273b4db0ec1e5448f16674a8a.png";

/***/ }),

/***/ "./src/js/images/user.png":
/*!********************************!*\
  !*** ./src/js/images/user.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bac45d6cdefb8df3a194607c8fb70f11.png";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SearchBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SearchBar.js */ "./src/js/components/SearchBar.js");
/* harmony import */ var _components_Cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Cart.js */ "./src/js/components/Cart.js");
/* harmony import */ var _components_LogIn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LogIn.js */ "./src/js/components/LogIn.js");
/* harmony import */ var _components_BurgerMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BurgerMenu.js */ "./src/js/components/BurgerMenu.js");
/* harmony import */ var _styles_window_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/window.css */ "./src/js/styles/window.css");
/* harmony import */ var _styles_window_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_window_css__WEBPACK_IMPORTED_MODULE_6__);







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchBar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  profileWrap: document.getElementById('profile__wrap')
}), document.getElementById('search-bar__wrap'));
var PRODUCTS = [{
  image: './images/product/product-item-3-1-50w.png',
  price: '99.95',
  name: 'Jacket DC T-Shirt'
}, {
  image: './images/product/product-item-1-1-50w.png',
  price: '79.99',
  name: 'Jacket QT T-Shirt'
}, {
  image: './images/product/product-item-2-1-50w.png',
  price: '49.50',
  name: 'Jacket WT T-Shirt'
}];
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cart_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  products: PRODUCTS,
  container: document.getElementById('header__cart__link--desktop')
}), document.getElementById('header__cart__link--desktop'));
var propsLogIn = {};
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LogIn_js__WEBPACK_IMPORTED_MODULE_4__["default"], propsLogIn), document.getElementById('header__personal-page'));
var CATS = [{
  name: 'Woman',
  id: '1',
  href: '#',
  subsections: [{
    name: 'Clothes',
    id: '11',
    href: '#',
    subsections: [{
      name: 'Blouses & shirts',
      id: '111',
      href: '#',
      subsections: []
    }, {
      name: 'T-shirts & longslives',
      id: '112',
      href: '#',
      subsections: []
    }, {
      name: 'Hoody',
      id: '113',
      href: '#',
      subsections: []
    }, {
      name: 'Pants & shorts',
      id: '114',
      href: '#',
      subsections: []
    }, {
      name: 'Jeans',
      id: '115',
      href: '#',
      subsections: []
    }, {
      name: 'Outerwear',
      id: '116',
      href: '#',
      subsections: []
    }, {
      name: 'Dresses',
      id: '117',
      href: '#',
      subsections: []
    }, {
      name: 'Skirts',
      id: '118',
      href: '#',
      subsections: []
    }]
  }, {
    name: 'Shoes',
    id: '12',
    href: '#',
    subsections: [{
      name: 'Shoes',
      id: '121',
      href: '#',
      subsections: []
    }, {
      name: 'Sandals',
      id: '122',
      href: '#',
      subsections: []
    }, {
      name: 'Sneakers',
      id: '123',
      href: '#',
      subsections: []
    }, {
      name: 'Moccasins',
      id: '124',
      href: '#',
      subsections: []
    }]
  }, {
    name: 'Accessories',
    id: '13',
    href: '#',
    subsections: [{
      name: 'Scarves',
      id: '131',
      href: '#',
      subsections: []
    }, {
      name: 'Gloves',
      id: '132',
      href: '#',
      subsections: []
    }, {
      name: 'Bags',
      id: '133',
      href: '#',
      subsections: []
    }, {
      name: 'Belts',
      id: '134',
      href: '#',
      subsections: []
    }]
  }]
}, {
  name: 'Men',
  id: '2',
  href: '#',
  subsections: [{
    name: 'Clothes',
    id: '21',
    href: '#',
    subsections: [{
      name: 'Shirts',
      id: '211',
      href: '#',
      subsections: []
    }, {
      name: 'T-shirts & longslives',
      id: '212',
      href: '#',
      subsections: []
    }, {
      name: 'Hoody',
      id: '213',
      href: '#',
      subsections: []
    }, {
      name: 'Pants & shorts',
      id: '214',
      href: '#',
      subsections: []
    }]
  }, {
    name: 'Shoes',
    id: '22',
    href: '#',
    subsections: [{
      name: 'Shoes',
      id: '221',
      href: '#',
      subsections: []
    }, {
      name: 'Sandals',
      id: '222',
      href: '#',
      subsections: []
    }, {
      name: 'Sneakers',
      id: '223',
      href: '#',
      subsections: []
    }, {
      name: 'Boots',
      id: '224',
      href: '#',
      subsections: []
    }]
  }]
}, {
  name: 'Kids',
  id: '3',
  href: '#',
  subsections: [{
    name: 'Clothes',
    id: '31',
    href: '#',
    subsections: [{
      name: 'For girls',
      id: '311',
      href: '#',
      subsections: []
    }, {
      name: 'For boys',
      id: '312',
      href: '#',
      subsections: []
    }, {
      name: 'For newborn',
      id: '313',
      href: '#',
      subsections: []
    }]
  }, {
    name: 'Other',
    id: '32',
    href: '#',
    subsections: [{
      name: 'Products for baby',
      id: '321',
      href: '#',
      subsections: []
    }, {
      name: 'Feeding accessories',
      id: '322',
      href: '#',
      subsections: []
    }, {
      name: 'Bathing accessories',
      id: '323',
      href: '#',
      subsections: []
    }, {
      name: 'Child safety',
      id: '324',
      href: '#',
      subsections: []
    }]
  }]
}, {
  name: 'Comming Soon',
  id: '4',
  href: '#'
}, {
  name: 'About',
  id: '5',
  href: '#'
}];
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BurgerMenu_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
  cats: CATS
}), document.getElementById('burger-menu__wrap'));
window.addEventListener('scroll', changeStickyHeaderHeight);
document.addEventListener('DOMContentLoaded', changeStickyHeaderHeight);

function changeStickyHeaderHeight() {
  var header = document.getElementById('header__section--1');
  var scrolled = pageYOffset;

  if (!header.classList.contains('header__section--scrolled') && scrolled >= 35) {
    header.classList.add('header__section--scrolled');
    return;
  }

  if (header.classList.contains('header__section--scrolled') && scrolled < 35) {
    header.classList.remove('header__section--scrolled');
    return;
  }
}

/***/ }),

/***/ "./src/js/styles/BurgerMenu.css":
/*!**************************************!*\
  !*** ./src/js/styles/BurgerMenu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./BurgerMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/BurgerMenu.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/styles/Cart.css":
/*!********************************!*\
  !*** ./src/js/styles/Cart.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Cart.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/Cart.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/styles/LogIn.css":
/*!*********************************!*\
  !*** ./src/js/styles/LogIn.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./LogIn.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/LogIn.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/styles/SearchBar.css":
/*!*************************************!*\
  !*** ./src/js/styles/SearchBar.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./SearchBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/SearchBar.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/js/styles/window.css":
/*!**********************************!*\
  !*** ./src/js/styles/window.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./window.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/window.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map