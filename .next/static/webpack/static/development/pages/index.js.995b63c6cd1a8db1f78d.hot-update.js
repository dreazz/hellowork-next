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
        className: "jsx-1158441386" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1158441386" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1158441386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Say hi to your new job ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        role: "image",
        className: "jsx-1158441386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\uD83D\uDC4B")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_searchBar_SearchBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1158441386" + " " + "filter-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClickDev,
        className: "jsx-1158441386" + " " + "filter-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Dev"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClickUx,
        className: "jsx-1158441386" + " " + "filter-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "UX/UI"))), this.state.searchResult ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1158441386" + " " + "body search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
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
            lineNumber: 72
          },
          __self: this
        });
      })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1158441386" + " " + "body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
            lineNumber: 80
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
            lineNumber: 84
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "jsx-1158441386",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/new",
        className: "jsx-1158441386" + " " + "post-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, " post a job")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1158441386",
        __self: this
      }, "*.jsx-1158441386{font-family:'Montserrat',sans-serif;}.header.jsx-1158441386{text-align:center;}button.jsx-1158441386{cursor:pointer;background:#f8c0c8;height:6vh;width:100%;border:none;}button.jsx-1158441386 a.jsx-1158441386{display:block;width:100%;}.filter-btn.jsx-1158441386{width:20%;margin:10px;font-size:20px;color:white;padding:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyZWF6ei9oZWxsb3dvcmstbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RmEsQUFHb0QsQUFHcEIsQUFHSCxBQU9BLEFBS0osVUFDRSxJQUxELENBUFEsR0FIckIsSUFnQmlCLEdBTGpCLFNBUGEsRUFQYixDQW9CYyxRQVpELElBYUksT0FYbEIsUUFZQyxJQVpBIiwiZmlsZSI6Ii9ob21lL2RyZWF6ei9oZWxsb3dvcmstbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEpvYkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9qb2JDYXJkL0pvYkNhcmQnO1xuaW1wb3J0IGpvYkRhdGFEZXYgZnJvbSAnLi4vZGF0YS9qb2JzQXByaWwuanNvbicgO1xuaW1wb3J0IGpvYkRhdGFVeCBmcm9tICcuLi9kYXRhL3V4dWlKb2JzQXByaWwuanNvbic7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoQmFyL1NlYXJjaEJhcic7XG5pbXBvcnQge0hlYWR9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGV2Sm9ic0FycmF5OmpvYkRhdGFEZXYsXG4gICAgdXhKb2JzQXJyYXk6am9iRGF0YVV4LFxuICAgIHNlYXJjaEFycjpbXSxcbiAgICBqb2JUeXBlOidkZXYnLFxuICAgIHNlYXJjaDpmYWxzZSxcbiAgICBzZWFyY2hSZXN1bHQ6ZmFsc2UsXG4gIH1cbiAgaGFuZGxlQ2xpY2tEZXYgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgam9iVHlwZTonZGV2JyxcbiAgICAgIH0pXG4gICAgXG4gIH1cbiAgaGFuZGxlQ2xpY2tVeCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGpvYlR5cGU6J3V4JyxcbiAgICB9KVxufVxuaGFuZGxlQ2hhbmdlID0gKGUpID0+IHsgXG4gIGlmKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoUmVzdWx0OnRydWVcbiAgICB9KVxuICB9ZWxzZXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdDpmYWxzZVxuICAgIH0pXG4gIH1cbiAgbGV0IG5ld1NlYXJjaCA9IFtdXG4gIGlmKHRoaXMuc3RhdGUuam9iVHlwZSA9PT0gJ2Rldicpe1xuICAgIG5ld1NlYXJjaCA9IHRoaXMuc3RhdGUuZGV2Sm9ic0FycmF5LmZpbHRlcigoam9iKSA9PiB7ICAgXG4gICAgICByZXR1cm4gam9iLlBvc2l0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgICB9KVxuXG59ZWxzZXtcbiAgbmV3U2VhcmNoID0gdGhpcy5zdGF0ZS51eEpvYnNBcnJheS5maWx0ZXIoKGpvYikgPT4ge1xuICAgIHJldHVybiBqb2IuUG9zaXRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuICB9KVxufVxuICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaEFycjpuZXdTZWFyY2hcbiAgICAgIH0pXG4gICAgIFxufVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICB7LyogPExpbmsgdG89XCIvam9iUG9zdFwiPjxidXR0b24+Y3JlYXRlIGpvYjwvYnV0dG9uPjwvTGluaz4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPGgxPlNheSBoaSB0byB5b3VyIG5ldyBqb2IgPHNwYW4gcm9sZT1cImltYWdlXCI+8J+Rizwvc3Bhbj48L2gxPlxuICAgICAgICAgIDxTZWFyY2hCYXIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0ZXItYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0Rldn0+RGV2PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmlsdGVyLWJ0blwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tVeH0+VVgvVUk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdD8gXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keSBzZWFyY2hcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlYXJjaEFyci5tYXAoKGpvYixpKT0+e1xuICAgICAgICAgICAgIHJldHVybiA8Sm9iQ2FyZCBrZXk9e2pvYi5Db21wYW55ICsgYCR7aX1gfXBvc2l0aW9uPXtqb2IuUG9zaXRpb259IGNvbXBhbnk9e2pvYi5Db21wYW55fSBzdGF0dXM9e2pvYi5TdGF0dXN9IGRhdGU9e2pvYi5EYXRlfSBsaW5rPXtqb2IuTGlua1VybH0vPlxuICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9iVHlwZSA9PT0gJ2Rldic/XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZXZKb2JzQXJyYXkubWFwKChqb2IsaSk9PntcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iQ2FyZCBrZXk9e2pvYi5Db21wYW55ICsgYCR7aX1gfXBvc2l0aW9uPXtqb2IuUG9zaXRpb259IGNvbXBhbnk9e2pvYi5Db21wYW55fSBzdGF0dXM9e2pvYi5TdGF0dXN9IGRhdGU9e2pvYi5EYXRlfSBsaW5rPXtqb2IuTGlua1VybH0vPlxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUudXhKb2JzQXJyYXkubWFwKChqb2IsaSk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gPEpvYkNhcmQga2V5PXtqb2IuQ29tcGFueSArIGAke2l9YH1wb3NpdGlvbj17am9iLlBvc2l0aW9ufSBjb21wYW55PXtqb2IuQ29tcGFueX0gc3RhdHVzPXtqb2IuU3RhdHVzfSBkYXRlPXtqb2IuRGF0ZX0gbGluaz17am9iLkxpbmtVcmx9Lz5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgPGJ1dHRvbj4gPGEgaHJlZj1cIi9uZXdcIiBjbGFzc05hbWU9XCJwb3N0LWxpbmtcIj4gcG9zdCBhIGpvYjwvYT48L2J1dHRvbj5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGMwYzg7XG4gICAgICAgICAgICAgIGhlaWdodDogNnZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24gYXtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZmlsdGVyLWJ0bntcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/dreazz/hellowork-next/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.995b63c6cd1a8db1f78d.hot-update.js.map