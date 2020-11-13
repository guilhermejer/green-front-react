webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _src_components_home_Appbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/components/home/Appbar */ "./src/components/home/Appbar.js");
/* harmony import */ var _src_components_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/components/api */ "./src/components/api.js");


var _jsxFileName = "D:\\Documentos\\FiapTrabalhos\\GitHub\\green-front-react\\pages\\home\\index.js",
    _s = $RefreshSig$();













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  list: {
    width: 250
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  grow: {
    flexGrow: 1
  }
}));
function Home() {
  _s();

  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [produtos, setProdutos] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _src_components_api__WEBPACK_IMPORTED_MODULE_12__["default"].get('produto/').then(res => {
      console.log('Produtos listados com sucesso' + res);
      setProdutos(res);
    }).then(console.log(produtos)).catch(err => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.grow,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_home_Appbar__WEBPACK_IMPORTED_MODULE_11__["Appbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.heroContent,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
          maxWidth: "sm",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
            component: "h1",
            variant: "h2",
            align: "center",
            color: "textPrimary",
            gutterBottom: true,
            children: "Album layout"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
            variant: "h5",
            align: "center",
            color: "textSecondary",
            paragraph: true,
            children: "Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.heroButtons,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
              container: true,
              spacing: 2,
              justify: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  variant: "contained",
                  color: "primary",
                  children: "Main call to action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
                item: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  variant: "outlined",
                  color: "primary",
                  children: "Secondary action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.cardGrid,
        maxWidth: "md",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          container: true,
          spacing: 4,
          children: cards.map(card => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
            item: true,
            xs: 12,
            sm: 6,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: classes.card,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: classes.cardMedia,
                image: "https://source.unsplash.com/random",
                title: "Image title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
                className: classes.cardContent,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "Heading"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  children: "This is a media card. You can use this section to describe the content."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  size: "small",
                  color: "primary",
                  children: "View"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  size: "small",
                  color: "primary",
                  children: "Edit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, this)
          }, card, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: classes.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "h6",
        align: "center",
        gutterBottom: true,
        children: "Footer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        variant: "subtitle1",
        align: "center",
        color: "textSecondary",
        component: "p",
        children: "Something here to give the footer a purpose!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 8
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(Home, "PV9kipXBpql2JGFTC34WblU18es=", false, function () {
  return [useStyles];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsaXN0Iiwid2lkdGgiLCJwYXBlciIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJoZXJvQ29udGVudCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImhlcm9CdXR0b25zIiwiY2FyZEdyaWQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImNhcmQiLCJoZWlnaHQiLCJjYXJkTWVkaWEiLCJjYXJkQ29udGVudCIsImZsZXhHcm93IiwiZm9vdGVyIiwiZ3JvdyIsIkhvbWUiLCJjbGFzc2VzIiwiY2FyZHMiLCJwcm9kdXRvcyIsInNldFByb2R1dG9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFwaSIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsTUFBSSxFQUFFO0FBQ0ZDLFNBQUssRUFBRTtBQURMLEdBRCtCO0FBS3ZDQyxPQUFLLEVBQUU7QUFDTEMsYUFBUyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFTEMsV0FBTyxFQUFFLE1BRko7QUFHTEMsaUJBQWEsRUFBRSxRQUhWO0FBSUxDLGNBQVUsRUFBRTtBQUpQLEdBTGdDO0FBWXZDQyxNQUFJLEVBQUU7QUFDSkMs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QUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBSyxFQUFDLFFBQS9CO0FBQXdDLG9CQUFZLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQyxxRUFBQyxxRUFBRDtBQUFZLGVBQU8sRUFBQyxXQUFwQjtBQUFnQyxhQUFLLEVBQUMsUUFBdEM7QUFBK0MsYUFBSyxFQUFDLGVBQXJEO0FBQXFFLGlCQUFTLEVBQUMsR0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFpRkQ7O0dBcEd1QkUsSTtVQUNON0IsUzs7O0tBRE02QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNDQ1MWIxZjdlNDUxMWIzNjU0YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7QXBwYmFyfSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9ob21lL0FwcGJhcic7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvYXBpJztcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICBsaXN0OiB7XHJcbiAgICAgICAgd2lkdGg6IDI1MCxcclxuICAgICAgfSxcclxuXHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgaGVyb0NvbnRlbnQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcclxuICB9LFxyXG4gIGhlcm9CdXR0b25zOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBjYXJkR3JpZDoge1xyXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgY2FyZE1lZGlhOiB7XHJcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxyXG4gIH0sXHJcbiAgY2FyZENvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgfSxcclxuICBncm93OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBjYXJkcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICBjb25zdCBbcHJvZHV0b3MsIHNldFByb2R1dG9zXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwaS5nZXQoJ3Byb2R1dG8vJylcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICBjb25zb2xlLmxvZygnUHJvZHV0b3MgbGlzdGFkb3MgY29tIHN1Y2Vzc28nICsgcmVzKVxyXG4gICAgIHNldFByb2R1dG9zKHJlcyl9KVxyXG4gICAgIC50aGVuKCBcclxuICAgICBjb25zb2xlLmxvZyhwcm9kdXRvcykpXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgIGNvbnNvbGUuZXJyb3IoXCJvcHMhIG9jb3JyZXUgdW0gZXJyb1wiICsgZXJyKTtcclxuICB9KTtcclxuICB9LFtdKTtcclxuXHJcbiBcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyb3d9PlxyXG4gICAgPEFwcGJhciAvPlxyXG5cclxuICAgICA8bWFpbj5cclxuICAgICAgICB7LyogSGVybyB1bml0ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICBBbGJ1bSBsYXlvdXRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHBhcmFncmFwaD5cclxuICAgICAgICAgICAgICBTb21ldGhpbmcgc2hvcnQgYW5kIGxlYWRpbmcgYWJvdXQgdGhlIGNvbGxlY3Rpb24gYmVsb3figJRpdHMgY29udGVudHMsIHRoZSBjcmVhdG9yLCBldGMuXHJcbiAgICAgICAgICAgICAgTWFrZSBpdCBzaG9ydCBhbmQgc3dlZXQsIGJ1dCBub3QgdG9vIHNob3J0IHNvIGZvbGtzIGRvbiZhcG9zO3Qgc2ltcGx5IHNraXAgb3ZlciBpdFxyXG4gICAgICAgICAgICAgIGVudGlyZWx5LlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b25zfT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0ganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFpbiBjYWxsIHRvIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2Vjb25kYXJ5IGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEdyaWR9IG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICAgIHsvKiBFbmQgaGVybyB1bml0ICovfVxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2NhcmR9IHhzPXsxMn0gc209ezZ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkTWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkltYWdlIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBIZWFkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIG1lZGlhIGNhcmQuIFlvdSBjYW4gdXNlIHRoaXMgc2VjdGlvbiB0byBkZXNjcmliZSB0aGUgY29udGVudC5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICBGb290ZXJcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgU29tZXRoaW5nIGhlcmUgdG8gZ2l2ZSB0aGUgZm9vdGVyIGEgcHVycG9zZSFcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgey8qIEVuZCBmb290ZXIgKi99XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==