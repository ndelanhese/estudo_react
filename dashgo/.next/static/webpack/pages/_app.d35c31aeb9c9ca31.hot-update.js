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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": function() { return /* binding */ makeServer; }\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! miragejs */ \"./node_modules/miragejs/dist/mirage-esm.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\nfunction makeServer() {\n    var server = (0,miragejs__WEBPACK_IMPORTED_MODULE_1__.createServer)({\n        serializers: {\n            ActiveModelSerializer: miragejs__WEBPACK_IMPORTED_MODULE_1__.ActiveModelSerializer\n        },\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Model.extend({})\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_1__.Factory.extend({\n                name: function name(i) {\n                    return \"User \".concat(i + 1);\n                },\n                email: function email() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.internet.email().toLowerCase();\n                },\n                createdAt: function createdAt() {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.date.recent(10);\n                }\n            })\n        },\n        seeds: function seeds(server) {\n            server.createList(\"user\", 200);\n        },\n        routes: function routes() {\n            this.namespace = \"api\";\n            this.timing = 750;\n            this.get(\"/users\", function(schema, request) {\n                var _queryParams = request.queryParams, _page = _queryParams.page, page = _page === void 0 ? 1 : _page, _per_page = _queryParams.per_page, per_page = _per_page === void 0 ? 10 : _per_page;\n                var total = schema.all(\"user\").length;\n                var pageStart = (Number(page) - 1) * Number(per_page);\n                var pageEnd = pageStart + Number(per_page);\n                var users = this.serialize(schema.all(\"user\")).users.slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_1__.Response(200, {\n                    \"x-total-count\": String(total)\n                }, {\n                    users: users\n                });\n            });\n            this.post(\"/users\");\n            this.get(\"/users/:id\");\n            this.namespace = \"\";\n            this.passthrough();\n        }\n    });\n    return server;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RjtBQUNqRDtBQU9qQyxTQUFTTSxVQUFVLEdBQUc7SUFDM0IsSUFBTUMsTUFBTSxHQUFHUCxzREFBWSxDQUFDO1FBQzFCUSxXQUFXLEVBQUU7WUFDWEoscUJBQXFCLEVBQXJCQSwyREFBcUI7U0FDdEI7UUFDREssTUFBTSxFQUFFO1lBQ05DLElBQUksRUFBRVIsa0RBQVksQ0FBZ0IsRUFBRSxDQUFDO1NBQ3RDO1FBRURVLFNBQVMsRUFBRTtZQUNURixJQUFJLEVBQUVULG9EQUFjLENBQUM7Z0JBQ25CWSxJQUFJLEVBQUpBLFNBQUFBLElBQUksQ0FBQ0MsQ0FBUyxFQUFFO29CQUNkLE9BQU8sT0FBTSxDQUFRLE9BQU5BLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQztpQkFDeEI7Z0JBQ0RDLEtBQUssRUFBTEEsU0FBQUEsS0FBSyxHQUFHO29CQUNOLE9BQU9WLGlFQUFvQixFQUFFLENBQUNZLFdBQVcsRUFBRSxDQUFDO2lCQUM3QztnQkFDREMsU0FBUyxFQUFUQSxTQUFBQSxTQUFTLEdBQUc7b0JBQ1YsT0FBT2IsOERBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQzlCO2FBQ0YsQ0FBQztTQUNIO1FBRURnQixLQUFLLEVBQUxBLFNBQUFBLEtBQUssQ0FBQ2QsTUFBTSxFQUFFO1lBQ1pBLE1BQU0sQ0FBQ2UsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoQztRQUVEQyxNQUFNLEVBQU5BLFNBQUFBLE1BQU0sR0FBRztZQUNQLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFFbEIsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO2dCQUM1QyxJQUFvQ0EsWUFBbUIsR0FBbkJBLE9BQU8sQ0FBQ0MsV0FBVyxVQUFuQkQsWUFBbUIsQ0FBL0NFLElBQUksRUFBSkEsSUFBSSxzQkFBRyxDQUFDLHNCQUFvQkYsWUFBbUIsQ0FBckNHLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxFQUFFO2dCQUMvQixJQUFNQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxNQUFNO2dCQUV2QyxJQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBR00sTUFBTSxDQUFDTCxRQUFRLENBQUM7Z0JBQ3ZELElBQU1NLE9BQU8sR0FBR0YsU0FBUyxHQUFHQyxNQUFNLENBQUNMLFFBQVEsQ0FBQztnQkFFNUMsSUFBTU8sS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixNQUFNLENBQUNNLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDSyxLQUFLLENBQUNFLEtBQUssQ0FDMURMLFNBQVMsRUFDVEUsT0FBTyxDQUNSO2dCQUVELE9BQU8sSUFBSWxDLDhDQUFRLENBQ2pCLEdBQUcsRUFDSDtvQkFDRSxlQUFlLEVBQUVzQyxNQUFNLENBQUNULEtBQUssQ0FBQztpQkFDL0IsRUFDRDtvQkFBRU0sS0FBSyxFQUFMQSxLQUFLO2lCQUFFLENBQ1YsQ0FBQzthQUNILENBQUMsQ0FBQztZQUNILElBQUksQ0FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQ2hCLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUNGLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDbUIsV0FBVyxFQUFFLENBQUM7U0FDcEI7S0FDRixDQUFDO0lBRUYsT0FBT3BDLE1BQU0sQ0FBQztDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy9taXJhZ2UvaW5kZXgudHM/NGYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXIsIEZhY3RvcnksIE1vZGVsLCBSZXNwb25zZSwgQWN0aXZlTW9kZWxTZXJpYWxpemVyIH0gZnJvbSBcIm1pcmFnZWpzXCI7XG5pbXBvcnQgeyBmYWtlciB9IGZyb20gXCJAZmFrZXItanMvZmFrZXJcIjtcbnR5cGUgVXNlciA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlcnZlcigpIHtcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcbiAgICBzZXJpYWxpemVyczoge1xuICAgICAgQWN0aXZlTW9kZWxTZXJpYWxpemVyXG4gICAgfSxcbiAgICBtb2RlbHM6IHtcbiAgICAgIHVzZXI6IE1vZGVsLmV4dGVuZDxQYXJ0aWFsPFVzZXI+Pih7fSksXG4gICAgfSxcblxuICAgIGZhY3Rvcmllczoge1xuICAgICAgdXNlcjogRmFjdG9yeS5leHRlbmQoe1xuICAgICAgICBuYW1lKGk6IG51bWJlcikge1xuICAgICAgICAgIHJldHVybiBgVXNlciAke2kgKyAxfWA7XG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsKCkge1xuICAgICAgICAgIHJldHVybiBmYWtlci5pbnRlcm5ldC5lbWFpbCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWRBdCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFrZXIuZGF0ZS5yZWNlbnQoMTApO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSxcblxuICAgIHNlZWRzKHNlcnZlcikge1xuICAgICAgc2VydmVyLmNyZWF0ZUxpc3QoXCJ1c2VyXCIsIDIwMCk7XG4gICAgfSxcblxuICAgIHJvdXRlcygpIHtcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gXCJhcGlcIjtcbiAgICAgIHRoaXMudGltaW5nID0gNzUwO1xuXG4gICAgICB0aGlzLmdldChcIi91c2Vyc1wiLCBmdW5jdGlvbiAoc2NoZW1hLCByZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHsgcGFnZSA9IDEsIHBlcl9wYWdlID0gMTAgfSA9IHJlcXVlc3QucXVlcnlQYXJhbXM7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gc2NoZW1hLmFsbChcInVzZXJcIikubGVuZ3RoO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VTdGFydCA9IChOdW1iZXIocGFnZSkgLSAxKSAqIE51bWJlcihwZXJfcGFnZSk7XG4gICAgICAgIGNvbnN0IHBhZ2VFbmQgPSBwYWdlU3RhcnQgKyBOdW1iZXIocGVyX3BhZ2UpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJzID0gdGhpcy5zZXJpYWxpemUoc2NoZW1hLmFsbChcInVzZXJcIikpLnVzZXJzLnNsaWNlKFxuICAgICAgICAgIHBhZ2VTdGFydCxcbiAgICAgICAgICBwYWdlRW5kXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ4LXRvdGFsLWNvdW50XCI6IFN0cmluZyh0b3RhbCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHVzZXJzIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb3N0KFwiL3VzZXJzXCIpO1xuICAgICAgdGhpcy5nZXQoXCIvdXNlcnMvOmlkXCIpO1xuXG4gICAgICB0aGlzLm5hbWVzcGFjZSA9IFwiXCI7XG4gICAgICB0aGlzLnBhc3N0aHJvdWdoKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHNlcnZlcjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXIiLCJGYWN0b3J5IiwiTW9kZWwiLCJSZXNwb25zZSIsIkFjdGl2ZU1vZGVsU2VyaWFsaXplciIsImZha2VyIiwibWFrZVNlcnZlciIsInNlcnZlciIsInNlcmlhbGl6ZXJzIiwibW9kZWxzIiwidXNlciIsImV4dGVuZCIsImZhY3RvcmllcyIsIm5hbWUiLCJpIiwiZW1haWwiLCJpbnRlcm5ldCIsInRvTG93ZXJDYXNlIiwiY3JlYXRlZEF0IiwiZGF0ZSIsInJlY2VudCIsInNlZWRzIiwiY3JlYXRlTGlzdCIsInJvdXRlcyIsIm5hbWVzcGFjZSIsInRpbWluZyIsImdldCIsInNjaGVtYSIsInJlcXVlc3QiLCJxdWVyeVBhcmFtcyIsInBhZ2UiLCJwZXJfcGFnZSIsInRvdGFsIiwiYWxsIiwibGVuZ3RoIiwicGFnZVN0YXJ0IiwiTnVtYmVyIiwicGFnZUVuZCIsInVzZXJzIiwic2VyaWFsaXplIiwic2xpY2UiLCJTdHJpbmciLCJwb3N0IiwicGFzc3Rocm91Z2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n"));

/***/ })

});