(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["filter-menu"] = factory();
	else
		root["filter-menu"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = filterMenu;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//import {getPlans} from './plan-list';

function filterMenu(JsonArry) {
  var parentSelector, parentSelectorEl, domScope, patternClass, patternClassInitialized, elsPrevious, elsNew;
  parentSelector = parentSelector || null;
  parentSelectorEl = document.querySelector(parentSelector);
  domScope = parentSelector ? parentSelectorEl ? parentSelectorEl : null : document;
  if (domScope) {
    patternClass = "filter-menu", // set your custom pattern class name
    patternClassInitialized = patternClass + "--initialized";
    elsPrevious = document.querySelectorAll("." + patternClassInitialized);
    elsNew = [].slice.call(domScope.querySelectorAll("." + patternClass + ":not(." + patternClassInitialized + ")"));
    var init = function init(el, index) {
      var dropdownFilterBtn = el.querySelector(".filter-menu__button"),
          dropdownFilter = el.querySelector(".select-filter"),
          filterMenuArticlesError = el.querySelector(".filter-menu__notification"),
          i,
          elIndex = index + elsPrevious.length,
          filterOptions = {
        filterOne: "",
        filterTwo: "",
        filterThree: ""
      };
      filterOne.value = filterOptions.filterOne;
      filterTwo.value = filterOptions.filterTwo;
      filterThree.value = filterOptions.filterThree;
      el.classList.add(patternClassInitialized);
      el.setAttribute('id', patternClass + '--' + elIndex);
      var setEventListeners = function setEventListeners() {
        // check input is not null before adding event listener
        if (dropdownFilterBtn) {
          dropdownFilterBtn.addEventListener("click", function () {
            filterAllValues();
            updateArticleList();
          });
        } else {
          dropdownFilter.addEventListener("input", function () {
            filterAllValues();
            updateArticleList();
          });
        }
      },
          filterAllValues = function filterAllValues() {
        filterOptions.filterOne = filterOne.value;
        filterOptions.filterTwo = filterTwo.value;
        filterOptions.filterThree = filterThree.value;
      },
          filterAllFilterItems = function filterAllFilterItems(outputArticles) {
        for (i in filterOptions) {
          //console.log(value);
          return !filterOptions.i.length || outputArticles.i == filterOptions.value;
        }
      },
          filterfilterOne = function filterfilterOne(outputArticles) {
        return !filterOptions.filterOne.length || outputArticles.filterOne == filterOptions.filterOne;
      },
          filterfilterTwo = function filterfilterTwo(outputArticles) {
        return !filterOptions.filterTwo.length || outputArticles.filterTwo == filterOptions.filterTwo;
      },
          filterfilterThree = function filterfilterThree(outputArticles) {
        return !filterOptions.filterThree.length || outputArticles.filterThree == filterOptions.filterThree;
      },
          jsonValueExist = function jsonValueExist(json, value) {
        var contains = false;
        Object.keys(json).some(function (key) {
          contains = _typeof(json[key]) === 'object' ? jsonValueExist(json[key], value) : json[key] === value;
          return contains;
        });
        return contains;
      },
          mapJsonList = JsonArry.listItems.map(function (item) {
        return item;
      }),
          updateArticleList = function updateArticleList(outputArticles) {
        var filteredCards = mapJsonList.filter(filterfilterThree).filter(filterfilterTwo).filter(filterfilterOne);
        // let filteredCards = mapJsonList.filter(filterAllFilterItems());
        //Conditional to see if array value matches selected input value      
        if (jsonValueExist(JsonArry, filterOne.value)) {
          if (filterMenuArticlesError) {
            filterMenuArticlesError.style.display = 'none';
          }
          filterMenuArticles.innerHTML = filteredCards.map(function (outputArticles) {
            return "\n            <div class=\"filter-menu__articles-heading-group\">\n            <h2 class=\"filter-menu__articles-heading--large\">" + outputArticles.filterTwo + " forms</h2>\n            <p class=\"filter-menu__articles-sub-heading\">" + outputArticles.filterTwoDescription + "</p>\n          </div>\n          <div class=\"filter-menu__articles-heading-group\">\n          <h3 class=\"filter-menu__articles-heading--medium\">" + outputArticles.filterThree + " forms</h3>\n          <p>Nam porttitor porttitor dolor sit amet porttitor. Aenean pretium feugiat metus.</p>\n          </div>\n          <div class=\"filter-menu__articles-list\">\n          <div class=\"filter-menu__articles-list-item\">\n            <h5 class=\"filter-menu__articles-title--inline\">" + outputArticles.articleTitles[0] + " </h5> <span class=\"filter-menu__articles-date\">" + outputArticles.pdfDates[0] + " </span> \n              <a class=\"filter-menu__articles-link\" href=\"" + outputArticles.description + "\">" + outputArticles.linkTitle + "</a>\n            </div>\n            <div class=\"filter-menu__articles-list-item\">\n            <h5 class=\"filter-menu__articles-title--inline\">" + outputArticles.articleTitles[1] + " </h5> <span class=\"filter-menu__articles-date\">" + outputArticles.pdfDates[0] + " </span> \n            <a class=\"filter-menu__articles-link\" href=\"" + outputArticles.description + "\">" + outputArticles.linkTitle + "</a>\n            </div>\n            <div class=\"filter-menu__articles-list-item\">\n            <h5 class=\"filter-menu__articles-title--inline\">" + outputArticles.articleTitles[2] + " </h5> <span class=\"filter-menu__articles-date\">" + outputArticles.pdfDates[0] + " </span> \n            <a class=\"filter-menu__articles-link\" href=\"" + outputArticles.description + "\">" + outputArticles.linkTitle + "</a>\n            </div>\n          </div>";
          }).join("");
        } else {
          if (filterMenuArticlesError) {
            filterMenuArticlesError.style.display = 'block';
          }
          filterMenuArticles.innerHTML = filteredCards.map(function (outputArticles) {
            return "\n            <div class=\"filter-menu__articles-heading-group\">\n              <h2 class=\"filter-menu__articles-heading--large\">" + outputArticles.filterTwo + " forms</h2>\n              <p class=\"filter-menu__articles-sub-heading\">" + outputArticles.filterTwoDescription + "</p>\n            </div>\n            <div class=\"filter-menu__articles-heading-group\">\n            <h3 class=\"filter-menu__articles-heading--medium\">" + outputArticles.filterThree + " forms</h3>\n            <p>Nam porttitor porttitor dolor sit amet porttitor. Aenean pretium feugiat metus.</p>\n            </div>\n            <div class=\"filter-menu__articles-list\">\n            <div class=\"filter-menu__articles-list-item\">\n              <h5 class=\"filter-menu__articles-title--inline\">" + outputArticles.articleTitles[0] + " </h5> <span class=\"filter-menu__articles-date\">" + outputArticles.pdfDates[0] + " </span> \n                <a class=\"filter-menu__articles-link\" href=\"" + outputArticles.description + "\">" + outputArticles.linkTitle + "</a>\n              </div>\n              <div class=\"filter-menu__articles-list-item\">\n              <h5 class=\"filter-menu__articles-title--inline\">" + outputArticles.articleTitles[1] + " </h5> <span class=\"filter-menu__articles-date\">" + outputArticles.pdfDates[0] + " </span> \n              <a class=\"filter-menu__articles-link\" href=\"" + outputArticles.description + "\">" + outputArticles.linkTitle + "</a>\n              </div>\n              <div class=\"filter-menu__articles-list-item\">\n              <h5 class=\"filter-menu__articles-title--inline\">" + outputArticles.articleTitles[2] + " </h5> <span class=\"filter-menu__articles-date\">" + outputArticles.pdfDates[0] + " </span> \n              <a class=\"filter-menu__articles-link\" href=\"" + outputArticles.description + "\">" + outputArticles.linkTitle + "</a>\n              </div>\n            </div>";
          }).join("");
        }
      };
      setEventListeners();
      updateArticleList();
    };
    if (elsNew.length) {
      elsNew.forEach(function (el, index) {
        init(el, index);
      });
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"listItems":[{"id":1,"filterOne":"California","filterTwo":"Individual and family","filterTwoDescription":"In market on October 15, 2019, for January 1, 2020, effectives","filterThree":"Enrollment and change","articleTitles":["Enrollment and change form ","Enrollment and change form ","Enrollment and change form"],"pdfDates":["Updated (3/31/19) ","Updated (6/30/19)","Updated (9/27/19)"],"description":" ","link":"/static/bcssp/pdfs/shared/nw/2019/KP_NW_SBG_WA_Product_Portfolio_2019.pdf","linkTitle":"English (PDF) | Español (PDF) | (PDF)"},{"id":2,"filterOne":"Colorado","filterTwo":"Individual and family","filterTwoDescription":"In market on October 15, 2019, for January 1, 2020, effectives","filterThree":"Support","articleTitles":["Support form","Support form","Support form"],"pdfDates":["Updated (3/31/19) ","Updated (6/30/19)","Updated (9/27/19)"],"description":" ","link":"/static/bcssp/pdfs/shared/nw/2019/KP_NW_SBG_WA_Product_Portfolio_2019.pdf","linkTitle":"English (PDF) | Español (PDF) | (PDF)"},{"id":3,"filterOne":"Georgia","filterTwo":"Small business","filterTwoDescription":"Help avoid processing delays — make sure you submit fully completed, current versions of the forms below.","filterThree":"Enrollment and change","articleTitles":["Enrollment and change form ","Enrollment and change form ","Enrollment and change form"],"pdfDates":["Updated (3/31/19) ","Updated (6/30/19)","Updated (9/27/19)"],"description":" ","link":"/static/bcssp/pdfs/shared/nw/2019/KP_NW_SBG_WA_Product_Portfolio_2019.pdf","linkTitle":"English (PDF) | Español (PDF) | (PDF)"},{"id":3,"filterTwo":"Small business","filterTwoDescription":"Help avoid processing delays — make sure you submit fully completed, current versions of the forms below.","filterThree":"Change or Other","articleTitles":["Enrollment and change form ","Enrollment and change form ","Enrollment and change form"],"pdfDates":["Updated (3/31/19) ","Updated (6/30/19)","Updated (9/27/19)"],"description":" ","link":"/static/bcssp/pdfs/shared/nw/2019/KP_NW_SBG_WA_Product_Portfolio_2019.pdf","linkTitle":"English (PDF) | Español (PDF) | (PDF)"}]}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_menu__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data__);



document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__filter_menu__["default"])(__WEBPACK_IMPORTED_MODULE_1__data___default.a);
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map