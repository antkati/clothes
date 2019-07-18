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
/******/ 		"searchResult": 0
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
/******/ 	deferredModules.push(["./src/js/searchResult.js","vendor-react","vendor-all"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/Filters.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/Filters.css ***!
  \*************************************************************************/
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
// Module
exports.push([module.i, "@font-face {\r\n    font-family: 'fontello';\r\n    src: url(" + ___CSS_LOADER_URL___0___ + ");\r\n    src: url(" + ___CSS_LOADER_URL___1___ + ") format('embedded-opentype'),\r\n         url(" + ___CSS_LOADER_URL___2___ + ") format('woff2'),\r\n         url(" + ___CSS_LOADER_URL___3___ + ") format('woff'),\r\n         url(" + ___CSS_LOADER_URL___4___ + ") format('truetype'),\r\n         url(" + ___CSS_LOADER_URL___5___ + ") format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.arrow-bottom:before {\r\n    content: '\\e801';\r\n    font-family: 'fontello';\r\n    font-style: normal;\r\n    color: black;\r\n}\r\n\r\n.deleteFilters {\r\n    cursor: pointer;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/FiltersBar.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/styles/FiltersBar.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".filters__button--show { \r\n\tdisplay: none;\r\n\twidth: 100%;\r\n\theight: 3.75rem;\r\n\tborder: 1px solid #e1e1e1;\t\r\n\tmargin: 0;\t\r\n\tpadding: 0 15px;\r\n    line-height: 3.625rem;\r\n    text-align: center;\r\n\tcolor: #606060;\r\n\tfont-size: 1.25rem; \r\n\tcursor: pointer;\r\n\ttransition: border 0.2s ease;\r\n}\r\n\r\n.filters__button--show:hover {\r\n\tborder: 1px solid #333333;\r\n\ttransition: border 0.2s ease-in-out;\t\t\r\n}\r\n\r\n.filters__overlay {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    background-color: rgba(34,34,34,.6);\r\n    opacity: 0;\r\n    transition: opacity 500ms ease-in-out;\r\n}\r\n\r\n.ReactModal__Overlay--after-open{\r\n    opacity: 1;\r\n}\r\n\r\n.ReactModal__Overlay--before-close{\r\n    opacity: 0;\r\n}\r\n\r\n.filters__modal {\r\n    position: relative;\r\n    height: 100vh;\r\n    width: 50%;\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n    border-radius: 0px;\r\n    outline: none;\r\n    overflow: auto;\r\n    box-shadow: 0 1px 16px rgba(0,0,0,.25);\r\n    transform: translateX(200%);\r\n    transition: transform 700ms ease-out;\r\n}\r\n\r\n.ReactModal__Content--after-open{\r\n    transform: translateX(0);\r\n}\r\n\r\n.ReactModal__Content--before-close{\r\n    transform: translateX(200%);\r\n}\r\n\r\n.filters__close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n\t.filters__button--show {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .filters__modal {\r\n        width: 100%;\r\n    }\r\n}\r\n", ""]);


/***/ }),

/***/ "./src/js/components/FiltersBar.js":
/*!*****************************************!*\
  !*** ./src/js/components/FiltersBar.js ***!
  \*****************************************/
/*! exports provided: FiltersBarDesktop, FiltersBarMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersBarDesktop", function() { return FiltersBarDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersBarMobile", function() { return FiltersBarMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectStyled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectStyled.js */ "./src/js/components/SelectStyled.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cancel.png */ "./src/js/images/cancel.png");
/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_cancel_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_FiltersBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/FiltersBar.css */ "./src/js/styles/FiltersBar.css");
/* harmony import */ var _styles_FiltersBar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_FiltersBar_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* Фильтры десктопная версия */

var FiltersBarDesktop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FiltersBarDesktop, _React$Component);

  function FiltersBarDesktop(props) {
    _classCallCheck(this, FiltersBarDesktop);

    return _possibleConstructorReturn(this, _getPrototypeOf(FiltersBarDesktop).call(this, props));
  }

  _createClass(FiltersBarDesktop, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$filters = _this$props.filters,
          filters = _this$props$filters === void 0 ? null : _this$props$filters,
          _this$props$sort = _this$props.sort,
          sort = _this$props$sort === void 0 ? null : _this$props$sort;
      console.log(this.props.bla);
      var filterProps = {
        filters: filters,
        marginRight: '20px'
      };
      var sortProps = {
        sort: sort
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!filters && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectStyled_js__WEBPACK_IMPORTED_MODULE_1__["Filter"], filterProps), !!sort && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectStyled_js__WEBPACK_IMPORTED_MODULE_1__["Sort"], sortProps));
    }
  }]);

  return FiltersBarDesktop;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Фильтры мобильная версия */

var FiltersBarMobile =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(FiltersBarMobile, _React$Component2);

  function FiltersBarMobile(props) {
    var _this;

    _classCallCheck(this, FiltersBarMobile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FiltersBarMobile).call(this, props));
    _this.state = {
      showFiltersMenu: false
    };
    _this.handleOpenFiltersMenu = _this.handleOpenFiltersMenu.bind(_assertThisInitialized(_this));
    _this.handleCloseFiltersMenu = _this.handleCloseFiltersMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FiltersBarMobile, [{
    key: "handleOpenFiltersMenu",
    value: function handleOpenFiltersMenu() {
      this.setState({
        showFiltersMenu: true
      });
    }
  }, {
    key: "handleCloseFiltersMenu",
    value: function handleCloseFiltersMenu() {
      this.setState({
        showFiltersMenu: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$filters = _this$props2.filters,
          filters = _this$props2$filters === void 0 ? null : _this$props2$filters,
          _this$props2$sort = _this$props2.sort,
          sort = _this$props2$sort === void 0 ? null : _this$props2$sort;
      var filterProps = {
        filters: filters,
        marginBottom: '50px',
        width: '100%'
      };
      var sortProps = {
        sort: sort,
        marginBottom: '50px',
        marginTop: '40px',
        width: '100%'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "filters__button--show font--georgia-i",
        onClick: this.handleOpenFiltersMenu
      }, "Filters"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isOpen: this.state.showFiltersMenu,
        contentLabel: "Filters menu",
        onRequestClose: this.handleCloseFiltersMenu,
        className: "filters__modal",
        overlayClassName: "filters__overlay",
        closeTimeoutMS: 700
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "filters__close",
        src: _images_cancel_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        onClick: this.handleCloseFiltersMenu
      }), !!sort && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectStyled_js__WEBPACK_IMPORTED_MODULE_1__["Sort"], sortProps), !!filters && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectStyled_js__WEBPACK_IMPORTED_MODULE_1__["Filter"], filterProps)));
    }
  }]);

  return FiltersBarMobile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/js/components/SelectStyled.js":
/*!*******************************************!*\
  !*** ./src/js/components/SelectStyled.js ***!
  \*******************************************/
/*! exports provided: default, Filter, Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _styles_Filters_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Filters.css */ "./src/js/styles/Filters.css");
/* harmony import */ var _styles_Filters_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Filters_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_delete_basket_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/delete-basket.png */ "./src/js/images/delete-basket.png");
/* harmony import */ var _images_delete_basket_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_delete_basket_png__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* Элементы стиля */

var DropdownIndicator = function DropdownIndicator(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].DropdownIndicator, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "arrow-bottom"
  }));
};

var ClearIndicator = function ClearIndicator(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].ClearIndicator, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "deleteFilters",
    src: _images_delete_basket_png__WEBPACK_IMPORTED_MODULE_3___default.a
  }));
};
/* Cелект */


var SelectStyled =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectStyled, _React$Component);

  function SelectStyled(props) {
    _classCallCheck(this, SelectStyled);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectStyled).call(this, props));
  }

  _createClass(SelectStyled, [{
    key: "searchSelectedOptions",
    value: function searchSelectedOptions(arr) {
      var selectedOptions = arr.filter(function (option) {
        return option.selected;
      });
      return selectedOptions;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$label = _this$props.label,
          label = _this$props$label === void 0 ? function () {
        return {};
      } : _this$props$label,
          width = _this$props.width,
          marginRight = _this$props.marginRight,
          marginBottom = _this$props.marginBottom,
          marginTop = _this$props.marginTop,
          isMulti = _this$props.isMulti,
          options = _this$props.options;
      var stylesCustom = {
        container: function container(styles) {
          return _objectSpread({}, styles, {
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontSize: '14px',
            marginBottom: marginBottom,
            marginTop: marginTop
          });
        },
        control: function control() {
          return _objectSpread({
            display: 'flex',
            height: 'auto',
            borderBottom: '1px solid black',
            marginRight: marginRight,
            width: width
          }, label());
        },
        indicatorSeparator: function indicatorSeparator() {
          return {
            display: 'none'
          };
        },
        menu: function menu(styles) {
          return _objectSpread({}, styles, {
            borderRadius: 'none',
            border: 'none',
            boxShadow: 'none',
            width: width
          });
        },
        option: function option(styles, _ref) {
          var isDisabled = _ref.isDisabled,
              isFocused = _ref.isFocused,
              isSelected = _ref.isSelected;
          return _objectSpread({}, styles, {
            backgroundColor: isDisabled ? null : isSelected ? '#f4f4f4' : isFocused ? '#e1e1e1' : null,
            color: !isDisabled ? '#606060' : '#9a9a9a',
            ':active': _objectSpread({}, styles[':active'], {
              backgroundColor: !isDisabled && (isSelected ? '#f4f4f4' : '#f4f4f4')
            })
          });
        },
        multiValue: function multiValue(styles) {
          return _objectSpread({}, styles, {
            backgroundColor: '#f4f4f4'
          });
        },
        multiValueRemove: function multiValueRemove(styles) {
          return _objectSpread({}, styles, {
            ':hover': {
              backgroundColor: '#eaeaea',
              color: null
            }
          });
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
        styles: stylesCustom,
        options: options,
        isSearchable: false,
        isMulti: isMulti,
        placeholder: "",
        components: {
          DropdownIndicator: DropdownIndicator,
          ClearIndicator: ClearIndicator
        },
        isOptionDisabled: function isOptionDisabled(option) {
          return option.disable;
        },
        defaultValue: this.searchSelectedOptions(options)
      });
    }
  }]);

  return SelectStyled;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SelectStyled);
/* Компонент фильтров */

var Filter =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Filter, _React$Component2);

  function Filter(props) {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filter).call(this, props));
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          filters = _this$props2.filters,
          _this$props2$marginRi = _this$props2.marginRight,
          marginRight = _this$props2$marginRi === void 0 ? '20px' : _this$props2$marginRi,
          _this$props2$width = _this$props2.width,
          width = _this$props2$width === void 0 ? '200px' : _this$props2$width,
          _this$props2$marginBo = _this$props2.marginBottom,
          marginBottom = _this$props2$marginBo === void 0 ? '0px' : _this$props2$marginBo,
          _this$props2$marginTo = _this$props2.marginTop,
          marginTop = _this$props2$marginTo === void 0 ? '0px' : _this$props2$marginTo;
      var filtersList = filters.map(function (filter) {
        var label = function label() {
          return {
            ':before': {
              content: "'".concat(filter.name, "'"),
              display: 'block',
              marginRight: 8,
              marginLeft: 8,
              color: '#606060',
              alignSelf: 'center'
            }
          };
        };

        var filterProps = {
          key: filter.name,
          options: filter.options,
          isMulti: filter.isMulti,
          label: label,
          marginRight: marginRight,
          width: width,
          marginBottom: marginBottom,
          marginTop: marginTop
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectStyled, filterProps);
      });
      return filtersList;
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Компонент сортировки */

var Sort =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Sort, _React$Component3);

  function Sort(props) {
    _classCallCheck(this, Sort);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sort).call(this, props));
  }

  _createClass(Sort, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          sort = _this$props3.sort,
          _this$props3$marginRi = _this$props3.marginRight,
          marginRight = _this$props3$marginRi === void 0 ? '0px' : _this$props3$marginRi,
          _this$props3$width = _this$props3.width,
          width = _this$props3$width === void 0 ? '200px' : _this$props3$width,
          _this$props3$marginBo = _this$props3.marginBottom,
          marginBottom = _this$props3$marginBo === void 0 ? '0px' : _this$props3$marginBo,
          _this$props3$marginTo = _this$props3.marginTop,
          marginTop = _this$props3$marginTo === void 0 ? '0px' : _this$props3$marginTo;
      var sortProps = {
        options: sort.options,
        isMulti: sort.isMulti,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginTop: marginTop,
        width: width
      };
      var sortSelect = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectStyled, sortProps);
      return sortSelect;
    }
  }]);

  return Sort;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

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

/***/ "./src/js/searchResult.js":
/*!********************************!*\
  !*** ./src/js/searchResult.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FiltersBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FiltersBar.js */ "./src/js/components/FiltersBar.js");



var SORT = {
  name: 'Sort',
  type: 'select',
  isMulti: false,
  options: [{
    value: 'Popularity',
    label: 'Popularity',
    selected: true,
    disable: false
  }, {
    value: 'Price ascending',
    label: 'Price ascending',
    selected: false,
    disable: false
  }, {
    value: 'Price descending',
    label: 'Price descending',
    selected: false,
    disable: false
  }, {
    value: 'Newest Arrivals',
    label: 'Newest Arrivals',
    selected: false,
    disable: false
  }]
};
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FiltersBar_js__WEBPACK_IMPORTED_MODULE_2__["FiltersBarDesktop"], {
  sort: SORT
}), document.getElementById('sort-wrap'));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FiltersBar_js__WEBPACK_IMPORTED_MODULE_2__["FiltersBarMobile"], {
  sort: SORT
}), document.getElementById('sort-wrap--mobile'));

/***/ }),

/***/ "./src/js/styles/Filters.css":
/*!***********************************!*\
  !*** ./src/js/styles/Filters.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Filters.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/Filters.css");

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

/***/ "./src/js/styles/FiltersBar.css":
/*!**************************************!*\
  !*** ./src/js/styles/FiltersBar.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./FiltersBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/styles/FiltersBar.css");

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
//# sourceMappingURL=searchResult.bundle.js.map