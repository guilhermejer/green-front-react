webpackHotUpdate_N_E("pages/cadastro",{

/***/ "./pages/cadastro/Form.js":
false,

/***/ "./pages/cadastro/index.js":
/*!*********************************!*\
  !*** ./pages/cadastro/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cadastro; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _src_components_cadastro_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/cadastro/Form */ "./src/components/cadastro/Form.js");
/* harmony import */ var _src_components_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/api */ "./src/components/api.js");



var _jsxFileName = "D:\\Documentos\\FiapTrabalhos\\GitHub\\green-front-react\\pages\\cadastro\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 //#TODO USAR O FORMIK, YUP E AXIOS - JA INSTALADOS

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));
function Cadastro() {
  _s();

  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  const classes = useStyles();
  const initvalues = {
    nome: '',
    sobrenome: '',
    username: '',
    endereco: '',
    hashId: '',
    password: '',
    confpassword: '',
    sexo: ''
  };

  const submitValues = (values, actions) => {
    var pessoa = {
      "nome": values.nome,
      "sobrenome": values.sobrenome,
      "endereco": values.endereco,
      "hashId": values.hashId,
      "sexo": values.sexo
    };
    var login = {
      "username": values.username,
      "password": values.password
    };
    _src_components_api__WEBPACK_IMPORTED_MODULE_9__["default"].post('pessoa/createPessoa', {
      pessoa,
      login
    }).then(res => console.log('Cadastro realizado com sucesso' + res.data)).catch(err => {
      console.error("ops! ocorreu um erro" + err);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    maxWidth: "xs",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.paper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        component: "h1",
        variant: "h5",
        children: "Cadastre-se"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
        initialValues: initvalues,
        onSubmit: submitValues,
        children: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_src_components_cadastro_Form__WEBPACK_IMPORTED_MODULE_8__["Form"], _objectSpread({}, props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

_s(Cadastro, "BdTvy0NwxfXtm2+rVFU+2ByCBYw=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"], useStyles];
});

_c = Cadastro;

var _c;

$RefreshReg$(_c, "Cadastro");

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

/***/ }),

/***/ "./src/components/cadastro/Form.js":
/*!*****************************************!*\
  !*** ./src/components/cadastro/Form.js ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "D:\\Documentos\\FiapTrabalhos\\GitHub\\green-front-react\\src\\components\\cadastro\\Form.js",
    _s = $RefreshSig$();








const Form = props => {
  _s();

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
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
      nome,
      sobrenome,
      username,
      endereco,
      hashId,
      password,
      confpassword,
      sexo
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
      id: "nome",
      label: "Nome",
      name: "nome",
      autoComplete: "name",
      value: nome,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "sobrenome",
      label: "Sobrenome",
      id: "sobrenome",
      autoComplete: "surname",
      value: sobrenome,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "username",
      label: "Nome de usu\xE1rio",
      id: "username",
      autoComplete: "username",
      value: username,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "endereco",
      label: "Endere\xE7o",
      id: "endereco",
      autoComplete: "endereco",
      value: endereco,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "hashId",
      label: "CPF/CNPJ",
      id: "hashId",
      autoComplete: "hashId",
      value: hashId,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "password",
      label: "Senha",
      type: "password",
      id: "password",
      autoComplete: "password",
      value: password,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "outlined",
      margin: "normal",
      required: true,
      fullWidth: true,
      name: "confpassword",
      label: "Confirme sua senha",
      type: "password",
      id: "confpassword",
      autoComplete: "password",
      value: confpassword,
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "select-label-sexo",
      children: "Sexo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "outlined",
      fullWidth: true,
      labelId: "select-label-sexo",
      name: "sexo",
      value: sexo,
      onChange: handleChange,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: "Masculino",
        children: "Masculino"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: "Feminino",
        children: "Feminino"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: "Indefinido",
        children: "Indefinido"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      children: "Cadastrar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NhZGFzdHJvL0Zvcm0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQ2FkYXN0cm8iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNsYXNzZXMiLCJpbml0dmFsdWVzIiwibm9tZSIsInNvYnJlbm9tZSIsInVzZXJuYW1lIiwiZW5kZXJlY28iLCJoYXNoSWQiLCJwYXNzd29yZCIsImNvbmZwYXNzd29yZCIsInNleG8iLCJzdWJtaXRWYWx1ZXMiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwicGVzc29hIiwibG9naW4iLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInByb3BzIiwiRm9ybSIsImZvcm0iLCJ3aWR0aCIsInN1Ym1pdCIsIm1hcmdpbiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE9BQUssRUFBRTtBQUNMQyxhQUFTLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsQ0FETjtBQUVMQyxXQUFPLEVBQUUsTUFGSjtBQUdMQyxpQkFBYSxFQUFFLFFBSFY7QUFJTEMsY0FBVSxFQUFFO0FBSlA7QUFEOEIsQ0FBWixDQUFELENBQTVCO0FBVWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUMvQixNQUFJQyxPQUFP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QUFZLEVBQUMsVUFUZjtBQVVFLFdBQUssRUFBRXhCLFlBVlQ7QUFXRSxjQUFRLEVBQUV3QjtBQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEZOLGVBdUdNLHFFQUFDLG9FQUFEO0FBQVksUUFBRSxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZHTixlQXdHTSxxRUFBQyxnRUFBRDtBQUNFLGFBQU8sRUFBQyxVQURWO0FBRUUsZUFBUyxNQUZYO0FBR0UsYUFBTyxFQUFDLG1CQUhWO0FBSUUsVUFBSSxFQUFDLE1BSlA7QUFLRSxXQUFLLEVBQUV2QixJQUxUO0FBTUUsY0FBUSxFQUFFdUIsWUFOWjtBQUFBLDhCQVFFLHFFQUFDLGtFQUFEO0FBQVUsYUFBSyxFQUFFLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0UscUVBQUMsa0VBQUQ7QUFBVSxhQUFLLEVBQUUsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFVRSxxRUFBQyxrRUFBRDtBQUFVLGFBQUssRUFBRSxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEdOLGVBcUhFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFTLE1BRlg7QUFHRSxhQUFPLEVBQUMsV0FIVjtBQUlFLFdBQUssRUFBQyxTQUpSO0FBS0UsZUFBUyxFQUFFaEMsT0FBTyxDQUFDNkIsTUFMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURFO0FBa0lMLENBeEpPOztHQUFNSCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhZGFzdHJvLjQ1OTlhOTM2NTQ4YjM5ODM1MGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtGb3JtfSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9jYWRhc3Ryby9Gb3JtJztcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9hcGknO1xyXG5cclxuXHJcbi8vI1RPRE8gVVNBUiBPIEZPUk1JSywgWVVQIEUgQVhJT1MgLSBKQSBJTlNUQUxBRE9TXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG5cclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWRhc3RybyAoKXtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaW5pdHZhbHVlcyA9IHtcclxuICAgICAgbm9tZTonJyxcclxuICAgICAgc29icmVub21lOicnLFxyXG4gICAgICB1c2VybmFtZTonJyxcclxuICAgICAgZW5kZXJlY286JycsXHJcbiAgICAgIGhhc2hJZDonJyxcclxuICAgICAgcGFzc3dvcmQ6JycsXHJcbiAgICAgIGNvbmZwYXNzd29yZDonJyxcclxuICAgICAgc2V4bzonJyxcclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdFZhbHVlcyA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuXHJcbiAgICAgIHZhciBwZXNzb2EgPSB7XCJub21lXCI6dmFsdWVzLm5vbWUsXHJcbiAgICAgICAgIFwic29icmVub21lXCI6dmFsdWVzLnNvYnJlbm9tZSxcclxuICAgICAgICAgXCJlbmRlcmVjb1wiOnZhbHVlcy5lbmRlcmVjbyxcclxuICAgICAgICAgXCJoYXNoSWRcIjp2YWx1ZXMuaGFzaElkLFxyXG4gICAgICAgICBcInNleG9cIjp2YWx1ZXMuc2V4b1xyXG4gICAgICAgIH1cclxuICAgICAgdmFyIGxvZ2luID0ge1widXNlcm5hbWVcIjp2YWx1ZXMudXNlcm5hbWUsXHJcbiAgICAgICAgICBcInBhc3N3b3JkXCI6dmFsdWVzLnBhc3N3b3JkfVxyXG5cclxuICAgICAgICAgIGFwaS5wb3N0KCdwZXNzb2EvY3JlYXRlUGVzc29hJyx7cGVzc29hLCBsb2dpbn0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZygnQ2FkYXN0cm8gcmVhbGl6YWRvIGNvbSBzdWNlc3NvJyArIHJlcy5kYXRhKSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcHMhIG9jb3JyZXUgdW0gZXJyb1wiICsgZXJyKTtcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBDYWRhc3RyZS1zZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Rm9ybWlrICAgICAgICAgXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdHZhbHVlc31cclxuICAgICAgICBvblN1Ym1pdD17c3VibWl0VmFsdWVzfT5cclxuICAgICAgICB7cHJvcHMgPT4gPEZvcm0gey4uLnByb3BzfS8+fVxyXG5cclxuICAgICAgICA8L0Zvcm1paz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICk7XHJcblxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5cclxuIGV4cG9ydCBjb25zdCBGb3JtID0gKHByb3BzKSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIiwgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0OiB7XHJcbiAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgICB9KSk7XHJcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHZhbHVlczoge25vbWUsIHNvYnJlbm9tZSwgdXNlcm5hbWUsIGVuZGVyZWNvLCBoYXNoSWQsIHBhc3N3b3JkLCBjb25mcGFzc3dvcmQsIHNleG8gfSxcclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAgIHJldHVybihcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIGlkPVwibm9tZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTm9tZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJub21lXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtub21lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cInNvYnJlbm9tZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiU29icmVub21lXCJcclxuICAgICAgICAgICAgaWQ9XCJzb2JyZW5vbWVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJzdXJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e3NvYnJlbm9tZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTm9tZSBkZSB1c3XDoXJpb1wiXHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbmRlcmVjb1wiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgaWQ9XCJlbmRlcmVjb1wiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVuZGVyZWNvXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VuZGVyZWNvfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cImhhc2hJZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQ1BGL0NOUEpcIlxyXG4gICAgICAgICAgICBpZD1cImhhc2hJZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImhhc2hJZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtoYXNoSWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblxyXG5cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJTZW5oYVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHJcblxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBuYW1lPVwiY29uZnBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtZSBzdWEgc2VuaGFcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbmZwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvbmZwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0LWxhYmVsLXNleG9cIj5TZXhvPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbC1zZXhvXCJcclxuICAgICAgICAgICAgbmFtZT1cInNleG9cIlxyXG4gICAgICAgICAgICB2YWx1ZT17c2V4b31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtcIk1hc2N1bGlub1wifT5NYXNjdWxpbm88L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiRmVtaW5pbm9cIn0+RmVtaW5pbm88L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e1wiSW5kZWZpbmlkb1wifT5JbmRlZmluaWRvPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIENhZGFzdHJhclxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICA8L2Zvcm0+XHJcbiAgICAgICk7XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9