webpackHotUpdate_N_E("pages/cadastro",{

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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Form */ "./pages/cadastro/Form.js");
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
        children: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Form__WEBPACK_IMPORTED_MODULE_8__["Form"], _objectSpread({}, props), void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cm8vaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFwZXIiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQ2FkYXN0cm8iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNsYXNzZXMiLCJpbml0dmFsdWVzIiwibm9tZSIsInNvYnJlbm9tZSIsInVzZXJuYW1lIiwiZW5kZXJlY28iLCJoYXNoSWQiLCJwYXNzd29yZCIsImNvbmZwYXNzd29yZCIsInNleG8iLCJzdWJtaXRWYWx1ZXMiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwicGVzc29hIiwibG9naW4iLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsT0FBSyxFQUFFO0FBQ0xDLGFBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUROO0FBRUxDLFdBQU8sRUFBRSxNQUZKO0FBR0xDLGlCQUFhLEVBQUUsUUFIVjtBQUlMQyxjQUFVLEVBQUU7QUFKUDtBQUQ4QixDQUFaLENBQUQsQ0FBNUI7QUFVZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQy9CLE1BQUlDLE9BQU8sR0FBR0MsbUVBQVUsRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdaLFNBQVMsRUFBekI7QUFDQSxRQUFNYSxVQUFVLEdBQUc7QUFDakJDLFFBQUksRUFBQyxFQURZO0FBRWpCQyxhQUFTLEVBQUMsRUFGTztBQUdqQkMsWUFBUSxFQUFDLEVBSFE7QUFJakJDLFlBQVEsRUFBQyxFQUpRO0FBS2pCQyxVQUFNLEVBQUMsRUFMVTtBQU1qQkMsWUFBUSxFQUFDLEVBTlE7QUFPakJDLGdCQUFZLEVBQUMsRUFQSTtBQVFqQkMsUUFBSSxFQUFDO0FBUlksR0FBbkI7O0FBVUEsUUFBTUMsWUFBWSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxLQUFxQjtBQUV4QyxRQUFJQyxNQUFNLEdBQUc7QUFBQyxjQUFPRixNQUFNLENBQUNULElBQWY7QUFDVixtQkFBWVMsTUFBTSxDQUFDUixTQURUO0FBRVYsa0JBQVdRLE1BQU0sQ0FBQ04sUUFGUjtBQUdWLGdCQUFTTSxNQUFNLENBQUNMLE1BSE47QUFJVixjQUFPSyxNQUFNLENBQUNGO0FBSkosS0FBYjtBQU1BLFFBQUlLLEtBQUssR0FBRztBQUFDLGtCQUFXSCxNQUFNLENBQUNQLFFBQW5CO0FBQ1Isa0JBQVdPLE1BQU0sQ0FBQ0o7QUFEVixLQUFaO0FBR0lRLCtEQUFHLENBQUNDLElBQUosQ0FBUyxxQkFBVCxFQUErQjtBQUFDSCxZQUFEO0FBQVNDO0FBQVQsS0FBL0IsRUFDQ0csSUFERCxDQUNPQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFtQ0YsR0FBRyxDQUFDRyxJQUFuRCxDQURmLEVBRUNDLEtBRkQsQ0FFUUMsR0FBRCxJQUFTO0FBQ2RKLGFBQU8sQ0FBQ0ssS0FBUixDQUFjLHlCQUF5QkQsR0FBdkM7QUFDRixLQUpBO0FBS0wsR0FoQkQ7O0FBa0JBLHNCQUVJLHFFQUFDLG1FQUFEO0FBQVcsYUFBUyxFQUFDLE1BQXJCO0FBQTRCLFlBQVEsRUFBQyxJQUFyQztBQUFBLDJCQUVSO0FBQUssZUFBUyxFQUFFdkIsT0FBTyxDQUFDVCxLQUF4QjtBQUFBLDhCQUVRLHFFQUFDLG9FQUFEO0FBQVksaUJBQVMsRUFBQyxJQUF0QjtBQUEyQixlQUFPLEVBQUMsSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQUtRLHFFQUFDLDZDQUFEO0FBQ0EscUJBQWEsRUFBRVUsVUFEZjtBQUVBLGdCQUFRLEVBQUVTLFlBRlY7QUFBQSxrQkFHQ2UsS0FBSyxpQkFBSSxxRUFBQywwQ0FBRCxvQkFBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQXFCSDs7R0FwRHVCNUIsUTtVQUNORSwyRCxFQUNFWCxTOzs7S0FGSVMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWRhc3Ryby42MGU3ZTMzOGM2N2I3ZjBhZTljZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7Rm9ybX0gZnJvbSAnLi9Gb3JtJztcclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9hcGknO1xyXG5cclxuXHJcbi8vI1RPRE8gVVNBUiBPIEZPUk1JSywgWVVQIEUgQVhJT1MgLSBKQSBJTlNUQUxBRE9TXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB9LFxyXG5cclxuICB9KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWRhc3RybyAoKXtcclxuICAgIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaW5pdHZhbHVlcyA9IHtcclxuICAgICAgbm9tZTonJyxcclxuICAgICAgc29icmVub21lOicnLFxyXG4gICAgICB1c2VybmFtZTonJyxcclxuICAgICAgZW5kZXJlY286JycsXHJcbiAgICAgIGhhc2hJZDonJyxcclxuICAgICAgcGFzc3dvcmQ6JycsXHJcbiAgICAgIGNvbmZwYXNzd29yZDonJyxcclxuICAgICAgc2V4bzonJyxcclxuICAgIH1cclxuICAgIGNvbnN0IHN1Ym1pdFZhbHVlcyA9ICh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuXHJcbiAgICAgIHZhciBwZXNzb2EgPSB7XCJub21lXCI6dmFsdWVzLm5vbWUsXHJcbiAgICAgICAgIFwic29icmVub21lXCI6dmFsdWVzLnNvYnJlbm9tZSxcclxuICAgICAgICAgXCJlbmRlcmVjb1wiOnZhbHVlcy5lbmRlcmVjbyxcclxuICAgICAgICAgXCJoYXNoSWRcIjp2YWx1ZXMuaGFzaElkLFxyXG4gICAgICAgICBcInNleG9cIjp2YWx1ZXMuc2V4b1xyXG4gICAgICAgIH1cclxuICAgICAgdmFyIGxvZ2luID0ge1widXNlcm5hbWVcIjp2YWx1ZXMudXNlcm5hbWUsXHJcbiAgICAgICAgICBcInBhc3N3b3JkXCI6dmFsdWVzLnBhc3N3b3JkfVxyXG5cclxuICAgICAgICAgIGFwaS5wb3N0KCdwZXNzb2EvY3JlYXRlUGVzc29hJyx7cGVzc29hLCBsb2dpbn0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZygnQ2FkYXN0cm8gcmVhbGl6YWRvIGNvbSBzdWNlc3NvJyArIHJlcy5kYXRhKSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcHMhIG9jb3JyZXUgdW0gZXJyb1wiICsgZXJyKTtcclxuICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBDYWRhc3RyZS1zZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8Rm9ybWlrICAgICAgICAgXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdHZhbHVlc31cclxuICAgICAgICBvblN1Ym1pdD17c3VibWl0VmFsdWVzfT5cclxuICAgICAgICB7cHJvcHMgPT4gPEZvcm0gey4uLnByb3BzfS8+fVxyXG5cclxuICAgICAgICA8L0Zvcm1paz5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==