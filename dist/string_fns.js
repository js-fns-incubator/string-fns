/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var stringFns = {
	  dasherize: __webpack_require__(1)
	};

	if (module && module.exports) {
	  module.exports = stringFns;
	} else {
	  window.stringFns = stringFns;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var dasherize = function(str){
	  var slicesIndexes = [0];
	  str.split('').forEach(function(letter, index){
	    var prevLetter = str.substr(index-1, 1);
	    if (isUpperCase(letter) && index != 0 && !isUpperCase(prevLetter)) {
	      slicesIndexes.push(index);
	    };
	  })

	  str = str.replace(/[_-]+/g, '-');

	  return slicesIndexes.map(function(sliceStart, index){
	    var sliceEnd = slicesIndexes[index + 1];

	    if (sliceEnd) {
	      return str.slice(sliceStart, sliceEnd).toLowerCase()
	    } else {
	      return str.slice(sliceStart).toLowerCase()
	    }
	  }).join('-');
	}

	var isUpperCase = function(str){
	  return str.toUpperCase() === str && str.toUpperCase() !== str.toLowerCase();
	}

	module.exports = dasherize;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])