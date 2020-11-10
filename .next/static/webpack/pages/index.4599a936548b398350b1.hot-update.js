webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_assets_img_logoGreen_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/assets/img/logoGreen.png */ "./src/assets/img/logoGreen.png");
/* harmony import */ var _src_assets_img_logoGreen_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_img_logoGreen_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _src_components_login_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/login/Form */ "./src/components/login/Form.js");
/* harmony import */ var _src_components_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/api */ "./src/components/api.js");



var _jsxFileName = "D:\\Documentos\\FiapTrabalhos\\GitHub\\green-front-react\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));
function Login() {
  _s();

  const classes = useStyles();
  const initvalues = {
    username: '',
    password: ''
  };

  const submitValues = (values, actions) => {
    console.log(values);
    _src_components_api__WEBPACK_IMPORTED_MODULE_10__["default"].post('login/logar', values).then(res => console.log('Login realizado com sucesso' + res.data)).catch(err => {
      console.error("ops! ocorreu um erro" + err);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    maxWidth: "xs",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.paper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
        alt: "Green Logo",
        src: _src_assets_img_logoGreen_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        width: "150",
        height: "150"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: "h1",
        variant: "h5",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
        initialValues: initvalues,
        onSubmit: submitValues,
        children: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_src_components_login_Form__WEBPACK_IMPORTED_MODULE_9__["Form"], _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Login, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/login/Form.js":
false,

/***/ "./src/components/login/Form.js":
/*!**************************************!*\
  !*** ./src/components/login/Form.js ***!
  \**************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");


var _jsxFileName = "D:\\Documentos\\FiapTrabalhos\\GitHub\\green-front-react\\src\\components\\login\\Form.js",
    _s = $RefreshSig$();







const Form = props => {
  _s();

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
  const classes = useStyles();
  const {
    values: {
      username,
      password
    },
    handleSubmit,
    handleChange
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: classes.form,
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "username",
      label: "Nome de usu\xE1rio",
      name: "username",
      autoComplete: "username",
      autoFocus: true,
      value: username,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "password",
      label: "Senha",
      type: "password",
      id: "password",
      autoComplete: "current-password",
      value: password,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      children: "Logar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      container: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: "#",
          variant: "body2",
          children: "Esqueci minha senha"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: "/cadastro",
          variant: "body2",
          children: "Não tem uma conta? Cadastre-se"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

_s(Form, "8g5FPXexvSEOsxdmU7HicukHGqY=", true);

_c = Form;

var _c;

$RefreshReg$(_c, "Form");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xvZ2luL0Zvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiTG9naW4iLCJjbGFzc2VzIiwiaW5pdHZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdWJtaXRWYWx1ZXMiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiY29uc29sZSIsImxvZyIsImFwaSIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJMb2dvIiwicHJvcHMiLCJGb3JtIiwiZm9ybSIsIndpZHRoIiwic3VibWl0IiwibWFyZ2luIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE9BQUssRUFBRTtBQUNMQyxhQUFTLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FETjtBQUVMQyxXQUFPLEVBQUUsTUFGSjtBQUdMQyxpQkFBYSxFQUFFLFFBSFY7QUFJTEMsY0FBVSxFQUFFO0FBSlA7QUFEZ0MsQ0FBWixDQUFELENBQTVCO0FBVWUsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixRQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQSxRQUFNVyxVQUFVLEdBQUc7QUFDakJDLFlBQVEsRUFBQyxFQURRO0FBRWpCQyxZQUFRLEVBQUM7QUFGUSxHQUFuQjs7QUFLQSxRQUFNQyxZQUFZ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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9zcmMvYXNzZXRzL2ltZy9sb2dvR3JlZW4ucG5nXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2xvZ2luL0Zvcm0nO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2FwaSc7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGluaXR2YWx1ZXMgPSB7XHJcbiAgICB1c2VybmFtZTonJyxcclxuICAgIHBhc3N3b3JkOicnLFxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VibWl0VmFsdWVzID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICBhcGkucG9zdCgnbG9naW4vbG9nYXInLCB2YWx1ZXMpXHJcbiAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZygnTG9naW4gcmVhbGl6YWRvIGNvbSBzdWNlc3NvJyArIHJlcy5kYXRhKSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcHMhIG9jb3JyZXUgdW0gZXJyb1wiICsgZXJyKTtcclxuICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJHcmVlbiBMb2dvXCIgc3JjPXtMb2dvfSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiIC8+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cclxuICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0dmFsdWVzfVxyXG4gICAgICAgIG9uU3VibWl0PXtzdWJtaXRWYWx1ZXN9ID5cclxuICAgICAgICB7cHJvcHMgPT4gPEZvcm0gey4uLnByb3BzfS8+fVxyXG5cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRm9ybSA9IChwcm9wcykgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1pdDoge1xyXG4gICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gICAgICAgIH0sXHJcbiAgICBcclxuICAgICAgfSkpO1xyXG4gICAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgICB2YWx1ZXM6IHt1c2VybmFtZSwgcGFzc3dvcmQgfSxcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgIGxhYmVsPVwiTm9tZSBkZSB1c3XDoXJpb1wiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbGFiZWw9XCJTZW5oYVwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nYXJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgIEVzcXVlY2kgbWluaGEgc2VuaGFcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYWRhc3Ryb1wiIHZhcmlhbnQ9XCJib2R5MlwiID5cclxuICAgICAgICAgICAgICB7XCJOw6NvIHRlbSB1bWEgY29udGE/IENhZGFzdHJlLXNlXCJ9XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9