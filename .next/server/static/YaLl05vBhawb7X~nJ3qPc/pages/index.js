module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div, Container, H1, A) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    py: [5, 6],
    px: [3, 4, 5]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    textAlign: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1, {
    fontSize: 7,
    mt: 0,
    mb: 2
  }, "Cloudflare Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(A, {
    color: "gray.3",
    fontWeight: 600,
    fontSize: 5,
    href: "https://www.cloudflare.com/careers/departments/design/"
  }, "Come work with us"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)["default"], __webpack_require__(39)["default"], __webpack_require__(7)["default"], __webpack_require__(40)["default"]))

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Div) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Container = function Container(_ref) {
  var innerBg = _ref.innerBg,
      innerWidth = _ref.innerWidth,
      props = _objectWithoutProperties(_ref, ["innerBg", "innerWidth"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Div, {
    mx: "auto",
    maxWidth: innerWidth,
    bg: innerBg
  }, props.children));
};

Container.defaultProps = {
  innerWidth: _theme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].containerWidth,
  innerBg: "transparent"
};
/* harmony default export */ __webpack_exports__["default"] = (Container);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)["default"]))

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var theme = {
  containerWidth: '72rem',
  breakpoints: ['36em', '48em', '64em'],
  radii: [0, 3, 5],
  lineHeight: [1, 1.25, 1.5],
  measure: ['20em', '28em', '34em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 80],
  font: {
    sansSerif: "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Helvetica Neue',Arial,sans-serif",
    serif: 'serif',
    mono: 'Monaco, monospace'
  },
  fontWeights: [100, 400, 600, 700, 800],
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  colors: {
    red: ['#430c15', '#711423', '#a01c32', '#bf223c', '#da304c', '#e35f75', '#ec93a2', '#f3bac3', '#f9dce1', '#fcf0f2'],
    orange: ['#341a04', '#5b2c06', '#813f09', '#a24f0b', '#b6590d', '#e06d10', '#f4a15d', '#f8c296', '#fbdbc1', '#fdf1e7'],
    gold: ['#2c1c02', '#573905', '#744c06', '#8e5c07', '#a26a09', '#c7820a', '#f4a929', '#f8cd81', '#fbe2b6', '#fdf3e2'],
    green: ['#0f2417', '#1c422b', '#285d3d', '#31724b', '#398557', '#46a46c', '#79c698', '#b0ddc2', '#d8eee1', '#eff8f3'],
    cyan: ['#0c2427', '#164249', '#1d5962', '#26727e', '#2b818e', '#35a0b1', '#66c3d1', '#a5dce4', '#d0edf1', '#e9f7f9'],
    blue: ['#0c2231', '#163d57', '#1f567a', '#276d9b', '#2c7cb0', '#479ad1', '#7cb7de', '#add2eb', '#d6e9f5', '#ebf4fa'],
    indigo: ['#181e34', '#2c365e', '#404e88', '#5062aa', '#6373b6', '#8794c7', '#a5aed5', '#c8cde5', '#e0e3f0', '#f1f3f8'],
    violet: ['#2d1832', '#502b5a', '#753f83', '#8e4c9e', '#9f5bb0', '#b683c3', '#c9a2d2', '#dbc1e1', '#ebddee', '#f7f1f8'],
    gray: ['#1d1f20', '#36393a', '#4e5255', '#62676a', '#72777b', '#92979b', '#b7bbbd', '#d5d7d8', '#eaebeb', '#f7f7f8'],
    black: '#000000',
    white: '#ffffff',
    marketing: {
      orange: '#f38020',
      lightOrange: '#faae40',
      red: '#e04e64',
      lightRed: '#e27179',
      green: '#71c492',
      lightGreen: '#9fd3b5',
      blue: '#2da7cb',
      lightBlue: '#89c4e1',
      purple: '#7d4788',
      lightPurple: '#af7baf',
      navy: '#00517f',
      lightNavy: '#4f8cc8',
      gray: ['#404242', '#707070', '#aaaaaa', '#dddddd', '#f5f5f5']
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var A =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("a", {
  target: "e1li5u0i0"
})(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], {
  boxSizing: "border-box",
  textDecoration: "none",
  transition: 'opacity .25s ease-in',
  opacity: 1,
  ":hover": {
    pointer: "cursor",
    opacity: .75
  }
});
A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
  color: "gray.2",
  href: "#0"
};
/* harmony default export */ __webpack_exports__["default"] = (A);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var Div =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eb0y9kr0"
})(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderRadius"], {
  boxSizing: 'border-box'
});
Div.defaultProps = {
  width: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Div);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var H1 =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("h1", {
  target: "e9ec6b40"
})(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_1__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], {
  boxSizing: 'border-box'
});
H1.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (H1);

/***/ })

/******/ });