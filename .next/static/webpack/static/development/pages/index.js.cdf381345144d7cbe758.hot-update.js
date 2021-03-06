webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_jobCard_JobCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/jobCard/JobCard */ "./components/jobCard/JobCard.js");
/* harmony import */ var _data_jobsApril_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/jobsApril.json */ "./data/jobsApril.json");
var _data_jobsApril_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/jobsApril.json */ "./data/jobsApril.json", 1);
/* harmony import */ var _data_uxuiJobsApril_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/uxuiJobsApril.json */ "./data/uxuiJobsApril.json");
var _data_uxuiJobsApril_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/uxuiJobsApril.json */ "./data/uxuiJobsApril.json", 1);
/* harmony import */ var _components_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/searchBar/SearchBar */ "./components/searchBar/SearchBar.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/home/dreazz/hellowork-next/pages/index.js";








var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      devJobsArray: _data_jobsApril_json__WEBPACK_IMPORTED_MODULE_10__,
      uxJobsArray: _data_uxuiJobsApril_json__WEBPACK_IMPORTED_MODULE_11__,
      searchArr: [],
      jobType: 'dev',
      search: false,
      searchResult: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickDev", function () {
      _this.setState({
        jobType: 'dev'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClickUx", function () {
      _this.setState({
        jobType: 'ux'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      if (e.target.value.length > 0) {
        _this.setState({
          searchResult: true
        });
      } else {
        _this.setState({
          searchResult: false
        });
      }

      var newSearch = [];

      if (_this.state.jobType === 'dev') {
        newSearch = _this.state.devJobsArray.filter(function (job) {
          return job.Position.toLowerCase().includes(e.target.value.toLowerCase());
        });
      } else {
        newSearch = _this.state.uxJobsArray.filter(function (job) {
          return job.Position.toLowerCase().includes(e.target.value.toLowerCase());
        });
      }

      _this.setState({
        searchArr: newSearch
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1336596864" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "jsx-1336596864" + " " + "post-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/new",
        className: "jsx-1336596864",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " post a job")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1336596864" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1336596864",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Say hi to your new job ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        role: "image",
        className: "jsx-1336596864",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "\uD83D\uDC4B")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1336596864" + " " + "filter-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClickDev,
        className: "jsx-1336596864" + " " + "filter-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Dev"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClickUx,
        className: "jsx-1336596864" + " " + "filter-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "UX/UI"))), this.state.searchResult ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1336596864" + " " + "body search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.searchArr.map(function (job, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jobCard_JobCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: job.Company + "".concat(i),
          position: job.Position,
          company: job.Company,
          status: job.Status,
          date: job.Date,
          link: job.LinkUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        });
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1336596864" + " " + "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, this.state.jobType === 'dev' ? this.state.devJobsArray.map(function (job, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jobCard_JobCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: job.Company + "".concat(i),
          position: job.Position,
          company: job.Company,
          status: job.Status,
          date: job.Date,
          link: job.LinkUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        });
      }) : this.state.uxJobsArray.map(function (job, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_jobCard_JobCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: job.Company + "".concat(i),
          position: job.Position,
          company: job.Company,
          status: job.Status,
          date: job.Date,
          link: job.LinkUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1336596864",
        __self: this
      }, "*.jsx-1336596864{font-family:'Montserrat',sans-serif;}.header.jsx-1336596864{text-align:center;}button.jsx-1336596864{cursor:pointer;background:#f8c0c8;height:6vh;width:100%;border:none;}button.jsx-1336596864 a.jsx-1336596864{display:block;width:100%;}.filter-btn.jsx-1336596864{width:20%;margin:10px;font-size:20px;color:white;padding:10px 0;}.post-link.jsx-1336596864{position:fixed;top:0;right:0;width:20%;margin-right:20px;border-radius:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyZWF6ei9oZWxsb3dvcmstbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RmEsQUFHb0QsQUFHcEIsQUFHSCxBQU9BLEFBS0osQUFPSSxVQU5GLElBTEQsQ0FQUSxBQW1CZCxHQXRCUCxHQXVCUyxDQVBRLEdBTGpCLElBYVcsS0FwQkUsRUFQYixDQW9CYyxFQVFLLE1BcEJOLElBYUksT0FYbEIsQ0FvQkEsT0FSQyxJQVpBLFFBb0JBIiwiZmlsZSI6Ii9ob21lL2RyZWF6ei9oZWxsb3dvcmstbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEpvYkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9qb2JDYXJkL0pvYkNhcmQnO1xuaW1wb3J0IGpvYkRhdGFEZXYgZnJvbSAnLi4vZGF0YS9qb2JzQXByaWwuanNvbicgO1xuaW1wb3J0IGpvYkRhdGFVeCBmcm9tICcuLi9kYXRhL3V4dWlKb2JzQXByaWwuanNvbic7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQge0hlYWR9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGV2Sm9ic0FycmF5OmpvYkRhdGFEZXYsXG4gICAgdXhKb2JzQXJyYXk6am9iRGF0YVV4LFxuICAgIHNlYXJjaEFycjpbXSxcbiAgICBqb2JUeXBlOidkZXYnLFxuICAgIHNlYXJjaDpmYWxzZSxcbiAgICBzZWFyY2hSZXN1bHQ6ZmFsc2UsXG4gIH1cbiAgaGFuZGxlQ2xpY2tEZXYgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgam9iVHlwZTonZGV2JyxcbiAgICAgIH0pXG4gICAgXG4gIH1cbiAgaGFuZGxlQ2xpY2tVeCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGpvYlR5cGU6J3V4JyxcbiAgICB9KVxufVxuaGFuZGxlQ2hhbmdlID0gKGUpID0+IHsgXG4gIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoUmVzdWx0OnRydWVcbiAgICB9KVxuICB9ZWxzZXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdDpmYWxzZVxuICAgIH0pXG4gIH1cbiAgbGV0IG5ld1NlYXJjaCA9IFtdXG4gIGlmKHRoaXMuc3RhdGUuam9iVHlwZSA9PT0gJ2Rldicpe1xuICAgIG5ld1NlYXJjaCA9IHRoaXMuc3RhdGUuZGV2Sm9ic0FycmF5LmZpbHRlcigoam9iKSA9PiB7ICAgXG4gICAgICByZXR1cm4gam9iLlBvc2l0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuXG59ZWxzZXtcbiAgbmV3U2VhcmNoID0gdGhpcy5zdGF0ZS51eEpvYnNBcnJheS5maWx0ZXIoKGpvYikgPT4ge1xuICAgIHJldHVybiBqb2IuUG9zaXRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICB9KVxufVxuICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaEFycjpuZXdTZWFyY2hcbiAgICAgIH0pXG4gICAgIFxufVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9zdC1saW5rXCI+IDxhIGhyZWY9XCIvbmV3XCIgPiBwb3N0IGEgam9iPC9hPjwvYnV0dG9uPlxuICAgICAgey8qIDxMaW5rIHRvPVwiL2pvYlBvc3RcIj48YnV0dG9uPmNyZWF0ZSBqb2I8L2J1dHRvbj48L0xpbms+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT5TYXkgaGkgdG8geW91ciBuZXcgam9iIDxzcGFuIHJvbGU9XCJpbWFnZVwiPvCfkYs8L3NwYW4+PC9oMT5cbiAgICAgICAgICA8U2VhcmNoQmFyIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmlsdGVyLWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tEZXZ9PkRldjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbHRlci1idG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrVXh9PlVYL1VJPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQ/IFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHkgc2VhcmNoXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hBcnIubWFwKChqb2IsaSk9PntcbiAgICAgICAgICAgICByZXR1cm4gPEpvYkNhcmQga2V5PXtqb2IuQ29tcGFueSArIGAke2l9YH1wb3NpdGlvbj17am9iLlBvc2l0aW9ufSBjb21wYW55PXtqb2IuQ29tcGFueX0gc3RhdHVzPXtqb2IuU3RhdHVzfSBkYXRlPXtqb2IuRGF0ZX0gbGluaz17am9iLkxpbmtVcmx9Lz5cbiAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYlR5cGUgPT09ICdkZXYnP1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGV2Sm9ic0FycmF5Lm1hcCgoam9iLGkpPT57XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPEpvYkNhcmQga2V5PXtqb2IuQ29tcGFueSArIGAke2l9YH1wb3NpdGlvbj17am9iLlBvc2l0aW9ufSBjb21wYW55PXtqb2IuQ29tcGFueX0gc3RhdHVzPXtqb2IuU3RhdHVzfSBkYXRlPXtqb2IuRGF0ZX0gbGluaz17am9iLkxpbmtVcmx9Lz5cbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLnV4Sm9ic0FycmF5Lm1hcCgoam9iLGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxKb2JDYXJkIGtleT17am9iLkNvbXBhbnkgKyBgJHtpfWB9cG9zaXRpb249e2pvYi5Qb3NpdGlvbn0gY29tcGFueT17am9iLkNvbXBhbnl9IHN0YXR1cz17am9iLlN0YXR1c30gZGF0ZT17am9iLkRhdGV9IGxpbms9e2pvYi5MaW5rVXJsfS8+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgKntcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4YzBjODtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiBhe1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5maWx0ZXItYnRue1xuICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdC1saW5re1xuICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgIHdpZHRoOjIwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjBweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/dreazz/hellowork-next/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.cdf381345144d7cbe758.hot-update.js.map