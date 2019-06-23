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
        className: "jsx-3664845120" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "jsx-3664845120" + " " + "post-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "/new",
        className: "jsx-3664845120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " post a job")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3664845120" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3664845120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Say hi to your new job ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        role: "image",
        className: "jsx-3664845120",
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
        className: "jsx-3664845120" + " " + "filter-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClickDev,
        className: "jsx-3664845120" + " " + "filter-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Dev"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleClickUx,
        className: "jsx-3664845120" + " " + "filter-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "UX/UI"))), this.state.searchResult ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3664845120" + " " + "body search",
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
        className: "jsx-3664845120" + " " + "body",
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
        id: "3664845120",
        __self: this
      }, "*.jsx-3664845120{font-family:'Montserrat',sans-serif;}.header.jsx-3664845120{text-align:center;}button.jsx-3664845120{cursor:pointer;background:#f8c0c8;height:6vh;width:100%;border:none;}button.jsx-3664845120 a.jsx-3664845120{display:block;width:100%;}.filter-btn.jsx-3664845120{width:20%;margin:10px;font-size:20px;color:white;padding:10px 0;}.post-link.jsx-3664845120{position:fixed;bottom:0;width:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RyZWF6ei9oZWxsb3dvcmstbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RmEsQUFHb0QsQUFHcEIsQUFHSCxBQU9BLEFBS0osQUFPSSxVQU5GLElBTEQsQ0FQUSxBQW1CWCxHQXRCVixJQWdCaUIsRUFPTixDQVpYLFNBUGEsQUFxQmIsRUE1QkEsQ0FvQmMsUUFaRCxJQWFJLE9BWGxCLFFBWUMsSUFaQSIsImZpbGUiOiIvaG9tZS9kcmVhenovaGVsbG93b3JrLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBKb2JDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvam9iQ2FyZC9Kb2JDYXJkJztcbmltcG9ydCBqb2JEYXRhRGV2IGZyb20gJy4uL2RhdGEvam9ic0FwcmlsLmpzb24nIDtcbmltcG9ydCBqb2JEYXRhVXggZnJvbSAnLi4vZGF0YS91eHVpSm9ic0FwcmlsLmpzb24nO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaEJhci9TZWFyY2hCYXInO1xuaW1wb3J0IHtIZWFkfSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRldkpvYnNBcnJheTpqb2JEYXRhRGV2LFxuICAgIHV4Sm9ic0FycmF5OmpvYkRhdGFVeCxcbiAgICBzZWFyY2hBcnI6W10sXG4gICAgam9iVHlwZTonZGV2JyxcbiAgICBzZWFyY2g6ZmFsc2UsXG4gICAgc2VhcmNoUmVzdWx0OmZhbHNlLFxuICB9XG4gIGhhbmRsZUNsaWNrRGV2ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGpvYlR5cGU6J2RldicsXG4gICAgICB9KVxuICAgIFxuICB9XG4gIGhhbmRsZUNsaWNrVXggPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBqb2JUeXBlOid1eCcsXG4gICAgfSlcbn1cbmhhbmRsZUNoYW5nZSA9IChlKSA9PiB7IFxuICBpZihlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdDp0cnVlXG4gICAgfSlcbiAgfWVsc2V7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hSZXN1bHQ6ZmFsc2VcbiAgICB9KVxuICB9XG4gIGxldCBuZXdTZWFyY2ggPSBbXVxuICBpZih0aGlzLnN0YXRlLmpvYlR5cGUgPT09ICdkZXYnKXtcbiAgICBuZXdTZWFyY2ggPSB0aGlzLnN0YXRlLmRldkpvYnNBcnJheS5maWx0ZXIoKGpvYikgPT4geyAgIFxuICAgICAgcmV0dXJuIGpvYi5Qb3NpdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG4gICAgfSlcblxufWVsc2V7XG4gIG5ld1NlYXJjaCA9IHRoaXMuc3RhdGUudXhKb2JzQXJyYXkuZmlsdGVyKChqb2IpID0+IHtcbiAgICByZXR1cm4gam9iLlBvc2l0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSlcbiAgfSlcbn1cbiAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hBcnI6bmV3U2VhcmNoXG4gICAgICB9KVxuICAgICBcbn1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBvc3QtbGlua1wiPiA8YSBocmVmPVwiL25ld1wiID4gcG9zdCBhIGpvYjwvYT48L2J1dHRvbj5cbiAgICAgIHsvKiA8TGluayB0bz1cIi9qb2JQb3N0XCI+PGJ1dHRvbj5jcmVhdGUgam9iPC9idXR0b24+PC9MaW5rPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8aDE+U2F5IGhpIHRvIHlvdXIgbmV3IGpvYiA8c3BhbiByb2xlPVwiaW1hZ2VcIj7wn5GLPC9zcGFuPjwvaDE+XG4gICAgICAgICAgPFNlYXJjaEJhciBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbHRlci1idG5cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrRGV2fT5EZXY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaWx0ZXItYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1V4fT5VWC9VSTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0PyBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5IHNlYXJjaFwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoQXJyLm1hcCgoam9iLGkpPT57XG4gICAgICAgICAgICAgcmV0dXJuIDxKb2JDYXJkIGtleT17am9iLkNvbXBhbnkgKyBgJHtpfWB9cG9zaXRpb249e2pvYi5Qb3NpdGlvbn0gY29tcGFueT17am9iLkNvbXBhbnl9IHN0YXR1cz17am9iLlN0YXR1c30gZGF0ZT17am9iLkRhdGV9IGxpbms9e2pvYi5MaW5rVXJsfS8+XG4gICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JUeXBlID09PSAnZGV2Jz9cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRldkpvYnNBcnJheS5tYXAoKGpvYixpKT0+e1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxKb2JDYXJkIGtleT17am9iLkNvbXBhbnkgKyBgJHtpfWB9cG9zaXRpb249e2pvYi5Qb3NpdGlvbn0gY29tcGFueT17am9iLkNvbXBhbnl9IHN0YXR1cz17am9iLlN0YXR1c30gZGF0ZT17am9iLkRhdGV9IGxpbms9e2pvYi5MaW5rVXJsfS8+XG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51eEpvYnNBcnJheS5tYXAoKGpvYixpKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iQ2FyZCBrZXk9e2pvYi5Db21wYW55ICsgYCR7aX1gfXBvc2l0aW9uPXtqb2IuUG9zaXRpb259IGNvbXBhbnk9e2pvYi5Db21wYW55fSBzdGF0dXM9e2pvYi5TdGF0dXN9IGRhdGU9e2pvYi5EYXRlfSBsaW5rPXtqb2IuTGlua1VybH0vPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGMwYzg7XG4gICAgICAgICAgICAgIGhlaWdodDogNnZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24gYXtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZmlsdGVyLWJ0bntcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3QtbGlua3tcbiAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICB3aWR0aDozMCU7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/dreazz/hellowork-next/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.b898a9c2b4ecb086ad01.hot-update.js.map