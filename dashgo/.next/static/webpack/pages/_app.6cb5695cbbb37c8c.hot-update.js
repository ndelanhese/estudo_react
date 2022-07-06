"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\nfunction makeServer() {\n    var server = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({})\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                name: function name(i) {\n                    return \"User \".concat(i + 1);\n                },\n                email: function email() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.internet.email().toLowerCase();\n                },\n                createdAt: function createdAt() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.date.recent(10);\n                }\n            })\n        },\n        seeds: function seeds(server) {\n            server.createList(\"user\", 200);\n        },\n        routes: function routes() {\n            this.namespace = \"api\";\n            this.timing = 750;\n            this.get(\"/users\", function(schema, request) {\n                var _queryParams = request.queryParams, _page = _queryParams.page, page = _page === void 0 ? 1 : _page, _per_page = _queryParams.per_page, per_page = _per_page === void 0 ? 10 : _per_page;\n                var total = schema.all(\"user\").length;\n                var pageStart = (Number(page) - 1) * Number(per_page);\n                var pageEnd = pageStart + Number(per_page);\n                var users = this.serialize(schema.all(\"user\")).users.slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_1__.Response();\n            });\n            this.post(\"/users\");\n            this.namespace = \"\";\n            this.passthrough();\n        }\n    });\n    return server;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRTtBQUMxQjtBQU9qQyxTQUFTSyxVQUFVLEdBQUc7SUFDM0IsSUFBTUMsTUFBTSxHQUFHTixzREFBWSxDQUFDO1FBQzFCTyxNQUFNLEVBQUU7WUFDTkMsSUFBSSxFQUFFTixrREFBWSxDQUFnQixFQUFFLENBQUM7U0FDdEM7UUFFRFEsU0FBUyxFQUFFO1lBQ1RGLElBQUksRUFBRVAsb0RBQWMsQ0FBQztnQkFDbkJVLElBQUksRUFBSkEsU0FBQUEsSUFBSSxDQUFDQyxDQUFTLEVBQUU7b0JBQ2QsT0FBTyxPQUFNLENBQVEsT0FBTkEsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO2lCQUN4QjtnQkFDREMsS0FBSyxFQUFMQSxTQUFBQSxLQUFLLEdBQUc7b0JBQ04sT0FBT1QsaUVBQW9CLEVBQUUsQ0FBQ1csV0FBVyxFQUFFLENBQUM7aUJBQzdDO2dCQUNEQyxTQUFTLEVBQVRBLFNBQUFBLFNBQVMsR0FBRztvQkFDVixPQUFPWiw4REFBaUIsQ0FBQyxFQUFFLENBQUM7aUJBQzdCO2FBQ0YsQ0FBQztTQUNIO1FBRURlLEtBQUssRUFBTEEsU0FBQUEsS0FBSyxDQUFDYixNQUFNLEVBQUU7WUFDWkEsTUFBTSxDQUFDYyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUVEQyxNQUFNLEVBQU5BLFNBQUFBLE1BQU0sR0FBRztZQUNQLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFFbEIsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVNDLE1BQU0sRUFBRUMsT0FBTyxFQUFDO2dCQUMxQyxJQUFvQ0EsWUFBbUIsR0FBbkJBLE9BQU8sQ0FBQ0MsV0FBVyxVQUFuQkQsWUFBbUIsQ0FBL0NFLElBQUksRUFBSkEsSUFBSSxzQkFBRyxDQUFDLHNCQUFvQkYsWUFBbUIsQ0FBckNHLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxFQUFFO2dCQUMvQixJQUFNQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNO2dCQUV2QyxJQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUUsR0FBR00sTUFBTSxDQUFDTCxRQUFRLENBQUM7Z0JBQ3hELElBQU1NLE9BQU8sR0FBR0YsU0FBUyxHQUFHQyxNQUFNLENBQUNMLFFBQVEsQ0FBQztnQkFFNUMsSUFBTU8sS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixNQUFNLENBQUNNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDSyxLQUFLLENBQUNFLEtBQUssQ0FBQ0wsU0FBUyxFQUFFRSxPQUFPLENBQUM7Z0JBRWhGLE9BQU8sSUFBSWhDLDhDQUFRLEVBQUUsQ0FBQzthQUN2QixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUNvQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFcEIsSUFBSSxDQUFDakIsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUNrQixXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGLENBQUM7SUFFRixPQUFPbEMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL21pcmFnZS9pbmRleC50cz80ZjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlcnZlciwgRmFjdG9yeSwgTW9kZWwsIFJlc3BvbnNlIH0gZnJvbSBcIm1pcmFnZWpzXCI7XG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7ICBcbnR5cGUgVXNlciA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlcnZlcigpIHtcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcbiAgICBtb2RlbHM6IHtcbiAgICAgIHVzZXI6IE1vZGVsLmV4dGVuZDxQYXJ0aWFsPFVzZXI+Pih7fSksXG4gICAgfSxcblxuICAgIGZhY3Rvcmllczoge1xuICAgICAgdXNlcjogRmFjdG9yeS5leHRlbmQoe1xuICAgICAgICBuYW1lKGk6IG51bWJlcikge1xuICAgICAgICAgIHJldHVybiBgVXNlciAke2kgKyAxfWA7XG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsKCkge1xuICAgICAgICAgIHJldHVybiBmYWtlci5pbnRlcm5ldC5lbWFpbCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWRBdCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFrZXIuZGF0ZS5yZWNlbnQoMTApXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuXG4gICAgc2VlZHMoc2VydmVyKSB7XG4gICAgICBzZXJ2ZXIuY3JlYXRlTGlzdCgndXNlcicsIDIwMClcbiAgICB9LFxuXG4gICAgcm91dGVzKCkge1xuICAgICAgdGhpcy5uYW1lc3BhY2UgPSBcImFwaVwiO1xuICAgICAgdGhpcy50aW1pbmcgPSA3NTA7XG5cbiAgICAgIHRoaXMuZ2V0KFwiL3VzZXJzXCIsIGZ1bmN0aW9uKHNjaGVtYSwgcmVxdWVzdCl7XG4gICAgICAgIGNvbnN0IHsgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IHJlcXVlc3QucXVlcnlQYXJhbXNcbiAgICAgICAgY29uc3QgdG90YWwgPSBzY2hlbWEuYWxsKCd1c2VyJykubGVuZ3RoXG5cbiAgICAgICAgY29uc3QgcGFnZVN0YXJ0ID0gKE51bWJlcihwYWdlKSAtIDEgKSAqIE51bWJlcihwZXJfcGFnZSk7XG4gICAgICAgIGNvbnN0IHBhZ2VFbmQgPSBwYWdlU3RhcnQgKyBOdW1iZXIocGVyX3BhZ2UpXG5cbiAgICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnNlcmlhbGl6ZShzY2hlbWEuYWxsKCd1c2VyJykpLnVzZXJzLnNsaWNlKHBhZ2VTdGFydCwgcGFnZUVuZClcblxuICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucG9zdChcIi91c2Vyc1wiKTtcblxuICAgICAgdGhpcy5uYW1lc3BhY2UgPSBcIlwiO1xuICAgICAgdGhpcy5wYXNzdGhyb3VnaCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzZXJ2ZXI7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyIiwiRmFjdG9yeSIsIk1vZGVsIiwiUmVzcG9uc2UiLCJmYWtlciIsIm1ha2VTZXJ2ZXIiLCJzZXJ2ZXIiLCJtb2RlbHMiLCJ1c2VyIiwiZXh0ZW5kIiwiZmFjdG9yaWVzIiwibmFtZSIsImkiLCJlbWFpbCIsImludGVybmV0IiwidG9Mb3dlckNhc2UiLCJjcmVhdGVkQXQiLCJkYXRlIiwicmVjZW50Iiwic2VlZHMiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0Iiwic2NoZW1hIiwicmVxdWVzdCIsInF1ZXJ5UGFyYW1zIiwicGFnZSIsInBlcl9wYWdlIiwidG90YWwiLCJhbGwiLCJsZW5ndGgiLCJwYWdlU3RhcnQiLCJOdW1iZXIiLCJwYWdlRW5kIiwidXNlcnMiLCJzZXJpYWxpemUiLCJzbGljZSIsInBvc3QiLCJwYXNzdGhyb3VnaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n"));

/***/ })

});