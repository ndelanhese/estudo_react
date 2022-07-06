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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\nfunction makeServer() {\n    var server = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        serializers: {\n            ActiveModel: ActiveModel\n        },\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({})\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                name: function name(i) {\n                    return \"User \".concat(i + 1);\n                },\n                email: function email() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.internet.email().toLowerCase();\n                },\n                createdAt: function createdAt() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.date.recent(10);\n                }\n            })\n        },\n        seeds: function seeds(server) {\n            server.createList(\"user\", 200);\n        },\n        routes: function routes() {\n            this.namespace = \"api\";\n            this.timing = 750;\n            this.get(\"/users\", function(schema, request) {\n                var _queryParams = request.queryParams, _page = _queryParams.page, page = _page === void 0 ? 1 : _page, _per_page = _queryParams.per_page, per_page = _per_page === void 0 ? 10 : _per_page;\n                var total = schema.all(\"user\").length;\n                var pageStart = (Number(page) - 1) * Number(per_page);\n                var pageEnd = pageStart + Number(per_page);\n                var users = this.serialize(schema.all(\"user\")).users.slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_1__.Response(200, {\n                    \"x-total-count\": String(total)\n                }, {\n                    users: users\n                });\n            });\n            this.post(\"/users\");\n            this.get(\"/users/:id\");\n            this.namespace = \"\";\n            this.passthrough();\n        }\n    });\n    return server;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRTtBQUMxQjtBQU9qQyxTQUFTSyxVQUFVLEdBQUc7SUFDM0IsSUFBTUMsTUFBTSxHQUFHTixzREFBWSxDQUFDO1FBQzFCTyxXQUFXLEVBQUU7WUFDWEMsV0FBVyxFQUFYQSxXQUFXO1NBQ1o7UUFDREMsTUFBTSxFQUFFO1lBQ05DLElBQUksRUFBRVIsa0RBQVksQ0FBZ0IsRUFBRSxDQUFDO1NBQ3RDO1FBRURVLFNBQVMsRUFBRTtZQUNURixJQUFJLEVBQUVULG9EQUFjLENBQUM7Z0JBQ25CWSxJQUFJLEVBQUpBLFNBQUFBLElBQUksQ0FBQ0MsQ0FBUyxFQUFFO29CQUNkLE9BQU8sT0FBTSxDQUFRLE9BQU5BLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztpQkFDeEI7Z0JBQ0RDLEtBQUssRUFBTEEsU0FBQUEsS0FBSyxHQUFHO29CQUNOLE9BQU9YLGlFQUFvQixFQUFFLENBQUNhLFdBQVcsRUFBRSxDQUFDO2lCQUM3QztnQkFDREMsU0FBUyxFQUFUQSxTQUFBQSxTQUFTLEdBQUc7b0JBQ1YsT0FBT2QsOERBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzlCO2FBQ0YsQ0FBQztTQUNIO1FBRURpQixLQUFLLEVBQUxBLFNBQUFBLEtBQUssQ0FBQ2YsTUFBTSxFQUFFO1lBQ1pBLE1BQU0sQ0FBQ2dCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEM7UUFFREMsTUFBTSxFQUFOQSxTQUFBQSxNQUFNLEdBQUc7WUFDUCxJQUFJLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBRWxCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFVQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtnQkFDNUMsSUFBb0NBLFlBQW1CLEdBQW5CQSxPQUFPLENBQUNDLFdBQVcsVUFBbkJELFlBQW1CLENBQS9DRSxJQUFJLEVBQUpBLElBQUksc0JBQUcsQ0FBQyxzQkFBb0JGLFlBQW1CLENBQXJDRyxRQUFRLEVBQVJBLFFBQVEsMEJBQUcsRUFBRTtnQkFDL0IsSUFBTUMsS0FBSyxHQUFHTCxNQUFNLENBQUNNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsTUFBTTtnQkFFdkMsSUFBTUMsU0FBUyxHQUFHLENBQUNDLE1BQU0sQ0FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUdNLE1BQU0sQ0FBQ0wsUUFBUSxDQUFDO2dCQUN2RCxJQUFNTSxPQUFPLEdBQUdGLFNBQVMsR0FBR0MsTUFBTSxDQUFDTCxRQUFRLENBQUM7Z0JBRTVDLElBQU1PLEtBQUssR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1osTUFBTSxDQUFDTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0ssS0FBSyxDQUFDRSxLQUFLLENBQzFETCxTQUFTLEVBQ1RFLE9BQU8sQ0FDUjtnQkFFRCxPQUFPLElBQUlsQyw4Q0FBUSxDQUNqQixHQUFHLEVBQ0g7b0JBQ0UsZUFBZSxFQUFFc0MsTUFBTSxDQUFDVCxLQUFLLENBQUM7aUJBQy9CLEVBQ0Q7b0JBQUVNLEtBQUssRUFBTEEsS0FBSztpQkFBRSxDQUNWLENBQUM7YUFDSCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUNoQixHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFdkIsSUFBSSxDQUFDRixTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQ21CLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0tBQ0YsQ0FBQztJQUVGLE9BQU9yQyxNQUFNLENBQUM7Q0FDZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzPzRmMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VydmVyLCBGYWN0b3J5LCBNb2RlbCwgUmVzcG9uc2UgfSBmcm9tIFwibWlyYWdlanNcIjtcbmltcG9ydCB7IGZha2VyIH0gZnJvbSBcIkBmYWtlci1qcy9mYWtlclwiO1xudHlwZSBVc2VyID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2VydmVyKCkge1xuICBjb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoe1xuICAgIHNlcmlhbGl6ZXJzOiB7XG4gICAgICBBY3RpdmVNb2RlbFxuICAgIH0sXG4gICAgbW9kZWxzOiB7XG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pLFxuICAgIH0sXG5cbiAgICBmYWN0b3JpZXM6IHtcbiAgICAgIHVzZXI6IEZhY3RvcnkuZXh0ZW5kKHtcbiAgICAgICAgbmFtZShpOiBudW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gYFVzZXIgJHtpICsgMX1gO1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFrZXIuaW50ZXJuZXQuZW1haWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkQXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGZha2VyLmRhdGUucmVjZW50KDEwKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG5cbiAgICBzZWVkcyhzZXJ2ZXIpIHtcbiAgICAgIHNlcnZlci5jcmVhdGVMaXN0KFwidXNlclwiLCAyMDApO1xuICAgIH0sXG5cbiAgICByb3V0ZXMoKSB7XG4gICAgICB0aGlzLm5hbWVzcGFjZSA9IFwiYXBpXCI7XG4gICAgICB0aGlzLnRpbWluZyA9IDc1MDtcblxuICAgICAgdGhpcy5nZXQoXCIvdXNlcnNcIiwgZnVuY3Rpb24gKHNjaGVtYSwgcmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJfcGFnZSA9IDEwIH0gPSByZXF1ZXN0LnF1ZXJ5UGFyYW1zO1xuICAgICAgICBjb25zdCB0b3RhbCA9IHNjaGVtYS5hbGwoXCJ1c2VyXCIpLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBwYWdlU3RhcnQgPSAoTnVtYmVyKHBhZ2UpIC0gMSkgKiBOdW1iZXIocGVyX3BhZ2UpO1xuICAgICAgICBjb25zdCBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgTnVtYmVyKHBlcl9wYWdlKTtcblxuICAgICAgICBjb25zdCB1c2VycyA9IHRoaXMuc2VyaWFsaXplKHNjaGVtYS5hbGwoXCJ1c2VyXCIpKS51c2Vycy5zbGljZShcbiAgICAgICAgICBwYWdlU3RhcnQsXG4gICAgICAgICAgcGFnZUVuZFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwieC10b3RhbC1jb3VudFwiOiBTdHJpbmcodG90YWwpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyB1c2VycyB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucG9zdChcIi91c2Vyc1wiKTtcbiAgICAgIHRoaXMuZ2V0KFwiL3VzZXJzLzppZFwiKTtcblxuICAgICAgdGhpcy5uYW1lc3BhY2UgPSBcIlwiO1xuICAgICAgdGhpcy5wYXNzdGhyb3VnaCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBzZXJ2ZXI7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyIiwiRmFjdG9yeSIsIk1vZGVsIiwiUmVzcG9uc2UiLCJmYWtlciIsIm1ha2VTZXJ2ZXIiLCJzZXJ2ZXIiLCJzZXJpYWxpemVycyIsIkFjdGl2ZU1vZGVsIiwibW9kZWxzIiwidXNlciIsImV4dGVuZCIsImZhY3RvcmllcyIsIm5hbWUiLCJpIiwiZW1haWwiLCJpbnRlcm5ldCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlZEF0IiwiZGF0ZSIsInJlY2VudCIsInNlZWRzIiwiY3JlYXRlTGlzdCIsInJvdXRlcyIsIm5hbWVzcGFjZSIsInRpbWluZyIsImdldCIsInNjaGVtYSIsInJlcXVlc3QiLCJxdWVyeVBhcmFtcyIsInBhZ2UiLCJwZXJfcGFnZSIsInRvdGFsIiwiYWxsIiwibGVuZ3RoIiwicGFnZVN0YXJ0IiwiTnVtYmVyIiwicGFnZUVuZCIsInVzZXJzIiwic2VyaWFsaXplIiwic2xpY2UiLCJTdHJpbmciLCJwb3N0IiwicGFzc3Rocm91Z2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n"));

/***/ })

});