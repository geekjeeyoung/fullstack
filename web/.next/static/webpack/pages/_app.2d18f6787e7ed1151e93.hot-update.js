webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_candicehan_Documents_geekjeeyoung_lireddit_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n\n\nvar _jsxFileName = \"/Users/candicehan/Documents/geekjeeyoung/lireddit/web/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_candicehan_Documents_geekjeeyoung_lireddit_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nfunction betterUpdateQuery(cache, qi, result, fn) {\n  return cache.updateQuery(qi, function (data) {\n    return fn(result, data);\n  });\n}\n\nvar client = Object(urql__WEBPACK_IMPORTED_MODULE_3__[\"createClient\"])({\n  url: \"http://localhost:4000/graphql\",\n  fetchOptions: {\n    credentials: \"include\"\n  },\n  exchanges: [urql__WEBPACK_IMPORTED_MODULE_3__[\"dedupExchange\"], Object(_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_4__[\"cacheExchange\"])({\n    updates: {\n      Mutation: {\n        login: function login(_result, args, cache, info) {\n          betterUpdateQuery(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, function (result, query) {\n            if (result.login.errors) {\n              return query;\n            } else {\n              return {\n                me: result.login.user\n              };\n            }\n          });\n        },\n        register: function register(_result, args, cache, info) {\n          betterUpdateQuery(cache, {\n            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"MeDocument\"]\n          }, _result, function (result, query) {\n            if (result.register.errors) {\n              return query;\n            } else {\n              return {\n                me: result.register.user\n              };\n            }\n          });\n        }\n      }\n    }\n  }), urql__WEBPACK_IMPORTED_MODULE_3__[\"fetchExchange\"]]\n});\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(urql__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    value: client,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ChakraProvider\"], {\n      resetCSS: true,\n      theme: _theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"ColorModeProvider\"], {\n        options: {\n          useSystemColorMode: true\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiYmV0dGVyVXBkYXRlUXVlcnkiLCJjYWNoZSIsInFpIiwicmVzdWx0IiwiZm4iLCJ1cGRhdGVRdWVyeSIsImRhdGEiLCJjbGllbnQiLCJjcmVhdGVDbGllbnQiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImRlZHVwRXhjaGFuZ2UiLCJjYWNoZUV4Y2hhbmdlIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9naW4iLCJfcmVzdWx0IiwiYXJncyIsImluZm8iLCJxdWVyeSIsIk1lRG9jdW1lbnQiLCJlcnJvcnMiLCJtZSIsInVzZXIiLCJyZWdpc3RlciIsImZldGNoRXhjaGFuZ2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidXNlU3lzdGVtQ29sb3JNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQU9BO0FBQ0E7O0FBT0EsU0FBU0EsaUJBQVQsQ0FDRUMsS0FERixFQUVFQyxFQUZGLEVBR0VDLE1BSEYsRUFJRUMsRUFKRixFQUtFO0FBQ0EsU0FBT0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCSCxFQUFsQixFQUFzQixVQUFDSSxJQUFEO0FBQUEsV0FBVUYsRUFBRSxDQUFDRCxNQUFELEVBQVNHLElBQVQsQ0FBWjtBQUFBLEdBQXRCLENBQVA7QUFDRDs7QUFFRCxJQUFNQyxNQUFNLEdBQUdDLHlEQUFZLENBQUM7QUFDMUJDLEtBQUcsRUFBRSwrQkFEcUI7QUFFMUJDLGNBQVksRUFBRTtBQUNaQyxlQUFXLEVBQUU7QUFERCxHQUZZO0FBSzFCQyxXQUFTLEVBQUUsQ0FDVEMsa0RBRFMsRUFFVEMsK0VBQWEsQ0FBQztBQUNaQyxXQUFPLEVBQUU7QUFDUEMsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxlQUFDQyxPQUFELEVBQXlCQyxJQUF6QixFQUErQmxCLEtBQS9CLEVBQXNDbUIsSUFBdEMsRUFBK0M7QUFDcERwQiwyQkFBaUIsQ0FDZkMsS0FEZSxFQUVmO0FBQ0VvQixpQkFBSyxFQUFFQyw2REFBVUE7QUFEbkIsV0FGZSxFQUtmSixPQUxlLEVBTWYsVUFBQ2YsTUFBRCxFQUFTa0IsS0FBVCxFQUFtQjtBQUNqQixnQkFBSWxCLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhTSxNQUFqQixFQUF5QjtBQUN2QixxQkFBT0YsS0FBUDtBQUNELGFBRkQsTUFFTztBQUNMLHFCQUFPO0FBQ0xHLGtCQUFFLEVBQUVyQixNQUFNLENBQUNjLEtBQVAsQ0FBYVE7QUFEWixlQUFQO0FBR0Q7QUFDRixXQWRjLENBQWpCO0FBZ0JELFNBbEJPO0FBbUJSQyxnQkFBUSxFQUFFLGtCQUFDUixPQUFELEVBQTRCQyxJQUE1QixFQUFrQ2xCLEtBQWxDLEVBQXlDbUIsSUFBekMsRUFBa0Q7QUFDMURwQiwyQkFBaUIsQ0FDZkMsS0FEZSxFQUVmO0FBQ0VvQixpQkFBSyxFQUFFQyw2REFBVUE7QUFEbkIsV0FGZSxFQUtmSixPQUxlLEVBTWYsVUFBQ2YsTUFBRCxFQUFTa0IsS0FBVCxFQUFtQjtBQUNqQixnQkFBSWxCLE1BQU0sQ0FBQ3VCLFFBQVAsQ0FBZ0JILE1BQXBCLEVBQTRCO0FBQzFCLHFCQUFPRixLQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU87QUFDTEcsa0JBQUUsRUFBRXJCLE1BQU0sQ0FBQ3VCLFFBQVAsQ0FBZ0JEO0FBRGYsZUFBUDtBQUdEO0FBQ0YsV0FkYyxDQUFqQjtBQWdCRDtBQXBDTztBQURIO0FBREcsR0FBRCxDQUZKLEVBNENURSxrREE1Q1M7QUFMZSxDQUFELENBQTNCOztBQXFEQSxTQUFTQyxLQUFULE9BQThDO0FBQUEsTUFBN0JDLFNBQTZCLFFBQTdCQSxTQUE2QjtBQUFBLE1BQWxCQyxTQUFrQixRQUFsQkEsU0FBa0I7QUFDNUMsc0JBQ0UscUVBQUMsNkNBQUQ7QUFBVSxTQUFLLEVBQUV2QixNQUFqQjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQWdCLGNBQVEsTUFBeEI7QUFBeUIsV0FBSyxFQUFFd0IsOENBQWhDO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFDRSxlQUFPLEVBQUU7QUFDUEMsNEJBQWtCLEVBQUU7QUFEYixTQURYO0FBQUEsK0JBS0UscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7S0FkUUYsSztBQWdCTUEsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgQ29sb3JNb2RlUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlQ2xpZW50LCBkZWR1cEV4Y2hhbmdlLCBmZXRjaEV4Y2hhbmdlIH0gZnJvbSBcInVycWxcIjtcblxuaW1wb3J0IHtcbiAgY2FjaGVFeGNoYW5nZSxcbiAgUXVlcnlJbnB1dCxcbiAgQ2FjaGUsXG4gIHF1ZXJ5LFxufSBmcm9tIFwiQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZVwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQge1xuICBNZURvY3VtZW50LFxuICBMb2dpbk11dGF0aW9uLFxuICBNZVF1ZXJ5LFxuICBSZWdpc3Rlck11dGF0aW9uLFxufSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcblxuZnVuY3Rpb24gYmV0dGVyVXBkYXRlUXVlcnk8UmVzdWx0LCBRdWVyeT4oXG4gIGNhY2hlOiBDYWNoZSxcbiAgcWk6IFF1ZXJ5SW5wdXQsXG4gIHJlc3VsdDogYW55LFxuICBmbjogKHI6IFJlc3VsdCwgcTogUXVlcnkpID0+IFF1ZXJ5XG4pIHtcbiAgcmV0dXJuIGNhY2hlLnVwZGF0ZVF1ZXJ5KHFpLCAoZGF0YSkgPT4gZm4ocmVzdWx0LCBkYXRhIGFzIGFueSkgYXMgYW55KTtcbn1cblxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGZldGNoT3B0aW9uczoge1xuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgfSxcbiAgZXhjaGFuZ2VzOiBbXG4gICAgZGVkdXBFeGNoYW5nZSxcbiAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQ6IExvZ2luTXV0YXRpb24sIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PihcbiAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogTWVEb2N1bWVudCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LmxvZ2luLnVzZXIsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlZ2lzdGVyOiAoX3Jlc3VsdDogUmVnaXN0ZXJNdXRhdGlvbiwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PFJlZ2lzdGVyTXV0YXRpb24sIE1lUXVlcnk+KFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBNZURvY3VtZW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVnaXN0ZXIuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGZldGNoRXhjaGFuZ2UsXG4gIF0sXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgdmFsdWU9e2NsaWVudH0+XG4gICAgICA8Q2hha3JhUHJvdmlkZXIgcmVzZXRDU1MgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

})