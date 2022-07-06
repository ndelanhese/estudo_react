"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/contexts/SidebarDrawerContext.tsx":
/*!**********************************************************!*\
  !*** ./src/components/contexts/SidebarDrawerContext.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": () => (/* binding */ SidebarDrawerProvider),\n/* harmony export */   \"useSidebarDrawer\": () => (/* binding */ useSidebarDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Aqui eu crio o meu contexto utilizando o react NEXT e tipo ele\nconst SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\n// esporto a function recebendo os parametros de children\nfunction SidebarDrawerProvider({ children  }) {\n    //O metodo useDisclosure é um metodo com logica pronta do Chrakra para abrir e fechar a sidebar\n    const disClosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    //Importo as rotas de dentro do nextjs\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // faço um useEffect do react, disparando uma função cada vez que o caminho da URL mudar chamando o metodo onCLose do Chrakra\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        disClosure.onClose();\n    }, [\n        router.asPath\n    ]);\n    return(//Retorno a minha context do sidebar passando todos os metodos do chrakra no value\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarDrawerContext.Provider, {\n        value: disClosure,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/delanhese/Documentos/Estudos/estudo_react/dashgo/src/components/contexts/SidebarDrawerContext.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this));\n}\n//Aqui eu crio o meu proprio hook pra não precisar ficar usando o do react\nconst useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(SidebarDrawerContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0cy9TaWRlYmFyRHJhd2VyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNFO0FBQzlCO0FBQ2dDO0FBVXhFLGlFQUFpRTtBQUNqRSxNQUFNSyxvQkFBb0IsaUJBQUdILG9EQUFhLENBQUMsRUFBRSxDQUE2QjtBQUUxRSx5REFBeUQ7QUFDbEQsU0FBU0kscUJBQXFCLENBQUMsRUFDcENDLFFBQVEsR0FDbUIsRUFBRTtJQUM3QjtJQUNDLE1BQUtDLFVBQVUsR0FBR1IsK0RBQWEsRUFBRTtJQUVsQyxzQ0FBc0M7SUFDdEMsTUFBTVMsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBRTFCO0lBQ0dHLGdEQUFNLENBQUMsSUFBTTtRQUNkSSxVQUFVLENBQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ3RCLEVBQUU7UUFBQ0QsTUFBTSxDQUFDRSxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRXBCLE9BQ0Usa0ZBQWtGO2tCQUNsRiw4REFBQ04sb0JBQW9CLENBQUNPLFFBQVE7UUFBQ0MsS0FBSyxFQUFFTCxVQUFVO2tCQUM3Q0QsUUFBUTs7Ozs7WUFDcUIsRUFDaEM7Q0FDSDtBQUVEO0FBQ08sTUFBTU8sZ0JBQWdCLEdBQUcsSUFBTVgsaURBQVUsQ0FBQ0Usb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rhc2hnby8uL3NyYy9jb21wb25lbnRzL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0LnRzeD85ODZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBDcmlvIGEgaW50ZXJmYWNlIHBhcmEgdGlwYXIgb3MgZGFkb3MgZG8gY2hpbGRyZW4gdXRpbGl6YW5kbyBxdWFscXVlciBkYWRvIHJlYWN0IGNvbW8gcGFyYW1ldHJvXG5pbnRlcmZhY2UgU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG4vLyBBcXVpIGV1IGluZGljbyBwYXJhIG8gdHlwZXNjcmlwdCBxdWUgbyBtZXUgY29udGV4dG8gdmVtIGRvIFVzZURpc2Nsb3N1cmVSZXR1cm4gZGUgZGVudHJvIGRvIGNocmFrcmFcbnR5cGUgU2lkZWJhckRyYXdlckNvbnRleHREYXRhID0gVXNlRGlzY2xvc3VyZVJldHVybjtcblxuLy8gQXF1aSBldSBjcmlvIG8gbWV1IGNvbnRleHRvIHV0aWxpemFuZG8gbyByZWFjdCBORVhUIGUgdGlwbyBlbGVcbmNvbnN0IFNpZGViYXJEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEpO1xuXG4vLyBlc3BvcnRvIGEgZnVuY3Rpb24gcmVjZWJlbmRvIG9zIHBhcmFtZXRyb3MgZGUgY2hpbGRyZW5cbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyRHJhd2VyUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbn06IFNpZGViYXJEcmF3ZXJQcm92aWRlclByb3BzKSB7XG4gIC8vTyBtZXRvZG8gdXNlRGlzY2xvc3VyZSDDqSB1bSBtZXRvZG8gY29tIGxvZ2ljYSBwcm9udGEgZG8gQ2hyYWtyYSBwYXJhIGFicmlyIGUgZmVjaGFyIGEgc2lkZWJhclxuICBjb25zdCBkaXNDbG9zdXJlID0gdXNlRGlzY2xvc3VyZSgpO1xuXG4gIC8vSW1wb3J0byBhcyByb3RhcyBkZSBkZW50cm8gZG8gbmV4dGpzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGZhw6dvIHVtIHVzZUVmZmVjdCBkbyByZWFjdCwgZGlzcGFyYW5kbyB1bWEgZnVuw6fDo28gY2FkYSB2ZXogcXVlIG8gY2FtaW5obyBkYSBVUkwgbXVkYXIgY2hhbWFuZG8gbyBtZXRvZG8gb25DTG9zZSBkbyBDaHJha3JhXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzQ2xvc3VyZS5vbkNsb3NlKCk7XG4gIH0sIFtyb3V0ZXIuYXNQYXRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvL1JldG9ybm8gYSBtaW5oYSBjb250ZXh0IGRvIHNpZGViYXIgcGFzc2FuZG8gdG9kb3Mgb3MgbWV0b2RvcyBkbyBjaHJha3JhIG5vIHZhbHVlXG4gICAgPFNpZGViYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNDbG9zdXJlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NpZGViYXJEcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4vL0FxdWkgZXUgY3JpbyBvIG1ldSBwcm9wcmlvIGhvb2sgcHJhIG7Do28gcHJlY2lzYXIgZmljYXIgdXNhbmRvIG8gZG8gcmVhY3RcbmV4cG9ydCBjb25zdCB1c2VTaWRlYmFyRHJhd2VyID0gKCkgPT4gdXNlQ29udGV4dChTaWRlYmFyRHJhd2VyQ29udGV4dCk7XG4iXSwibmFtZXMiOlsidXNlRGlzY2xvc3VyZSIsInVzZVJvdXRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiU2lkZWJhckRyYXdlckNvbnRleHQiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc0Nsb3N1cmUiLCJyb3V0ZXIiLCJvbkNsb3NlIiwiYXNQYXRoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNpZGViYXJEcmF3ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/contexts/SidebarDrawerContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/themes */ \"./src/styles/themes.ts\");\n/* harmony import */ var _components_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contexts/SidebarDrawerContext */ \"./src/components/contexts/SidebarDrawerContext.tsx\");\n/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mirage */ \"./src/services/mirage/index.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_mirage__WEBPACK_IMPORTED_MODULE_4__]);\n_services_mirage__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nif (true) {\n    (0,_services_mirage__WEBPACK_IMPORTED_MODULE_4__.makeServer)();\n}\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n                theme: _styles_themes__WEBPACK_IMPORTED_MODULE_2__.theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/delanhese/Documentos/Estudos/estudo_react/dashgo/src/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/delanhese/Documentos/Estudos/estudo_react/dashgo/src/pages/_app.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/delanhese/Documentos/Estudos/estudo_react/dashgo/src/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {}, void 0, false, {\n                fileName: \"/home/delanhese/Documentos/Estudos/estudo_react/dashgo/src/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/delanhese/Documentos/Estudos/estudo_react/dashgo/src/pages/_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDVDtBQUMyQztBQUV2QztBQUVlO0FBQ0w7QUFHdkQsSUFBR08sSUFBc0MsRUFBQztJQUN4Q0osNERBQVUsRUFBRTtDQUNiO0FBRUQsTUFBTUssV0FBVyxHQUFHLElBQUlKLG9EQUFXLEVBQUU7QUFFckMsU0FBU0ssS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDakQscUJBQ0UsOERBQUNOLDREQUFtQjtRQUFDTyxNQUFNLEVBQUVKLFdBQVc7OzBCQUN4Qyw4REFBQ1IsNERBQWM7Z0JBQUNDLEtBQUssRUFBRUEsaURBQUs7MEJBRTFCLDRFQUFDQyw0RkFBcUI7OEJBQ3BCLDRFQUFDUSxTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozt3QkFDTjs7Ozs7b0JBQ1Q7MEJBQ2pCLDhEQUFDTCxvRUFBa0I7Ozs7b0JBQUU7Ozs7OztZQUNDLENBQ3RCO0NBQ0g7QUFFRCxpRUFBZUcsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFzaGdvLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL3N0eWxlcy90aGVtZXNcIjtcbmltcG9ydCB7IFNpZGViYXJEcmF3ZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0XCI7XG5cbmltcG9ydCB7bWFrZVNlcnZlcn0gZnJvbSAnLi4vc2VydmljZXMvbWlyYWdlJ1xuXG5pbXBvcnQge1F1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7UmVhY3RRdWVyeURldnRvb2xzfSBmcm9tICdyZWFjdC1xdWVyeS9kZXZ0b29scydcblxuXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKXtcbiAgbWFrZVNlcnZlcigpXG59XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgey8qIHBhc3NvIG8gcHJvdmlkZXIgcGVnYW5kbyB0b2RvIG8gbm9zc28gYXBwICovfVxuICAgICAgPFNpZGViYXJEcmF3ZXJQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9TaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICA8UmVhY3RRdWVyeURldnRvb2xzLz5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJtYWtlU2VydmVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwicHJvY2VzcyIsInF1ZXJ5Q2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": () => (/* binding */ makeServer)\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ \"miragejs\");\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(miragejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__]);\n_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction makeServer() {\n    const server = (0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({})\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Factory.extend({\n                name (i) {\n                    return `User ${i + 1}`;\n                },\n                email () {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.email().toLowerCase();\n                },\n                createdAt () {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.date.recent(10);\n                }\n            })\n        },\n        seeds (server) {\n            server.createList(\"user\", 10);\n        },\n        routes () {\n            this.namespace = \"api\";\n            this.timing = 750;\n            this.get(\"/users\");\n            this.post(\"/users\");\n            this.namespace = \"\";\n            this.passthrough();\n        }\n    });\n    return server;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDaEI7QUFPakMsU0FBU0ksVUFBVSxHQUFHO0lBQzNCLE1BQU1DLE1BQU0sR0FBR0wsc0RBQVksQ0FBQztRQUMxQk0sTUFBTSxFQUFFO1lBQ05DLElBQUksRUFBRUwsa0RBQVksQ0FBZ0IsRUFBRSxDQUFDO1NBQ3RDO1FBRURPLFNBQVMsRUFBRTtZQUNURixJQUFJLEVBQUVOLG9EQUFjLENBQUM7Z0JBQ25CUyxJQUFJLEVBQUNDLENBQVMsRUFBRTtvQkFDZCxPQUFPLENBQUMsS0FBSyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0RDLEtBQUssSUFBRztvQkFDTixPQUFPVCxpRUFBb0IsRUFBRSxDQUFDVyxXQUFXLEVBQUUsQ0FBQztpQkFDN0M7Z0JBQ0RDLFNBQVMsSUFBRztvQkFDVixPQUFPWiw4REFBaUIsQ0FBQyxFQUFFLENBQUM7aUJBQzdCO2FBQ0YsQ0FBQztTQUNIO1FBRURlLEtBQUssRUFBQ2IsTUFBTSxFQUFFO1lBQ1pBLE1BQU0sQ0FBQ2MsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7U0FDOUI7UUFFREMsTUFBTSxJQUFHO1lBQ1AsSUFBSSxDQUFDQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUVsQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVwQixJQUFJLENBQUNILFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDSSxXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGLENBQUM7SUFFRixPQUFPcEIsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ28vLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzPzRmMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VydmVyLCBGYWN0b3J5LCBNb2RlbCB9IGZyb20gXCJtaXJhZ2Vqc1wiO1xuaW1wb3J0IHsgZmFrZXIgfSBmcm9tICdAZmFrZXItanMvZmFrZXInOyAgXG50eXBlIFVzZXIgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgY3JlYXRlZF9hdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKSB7XG4gIGNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcih7XG4gICAgbW9kZWxzOiB7XG4gICAgICB1c2VyOiBNb2RlbC5leHRlbmQ8UGFydGlhbDxVc2VyPj4oe30pLFxuICAgIH0sXG5cbiAgICBmYWN0b3JpZXM6IHtcbiAgICAgIHVzZXI6IEZhY3RvcnkuZXh0ZW5kKHtcbiAgICAgICAgbmFtZShpOiBudW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gYFVzZXIgJHtpICsgMX1gO1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFrZXIuaW50ZXJuZXQuZW1haWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkQXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGZha2VyLmRhdGUucmVjZW50KDEwKVxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSxcblxuICAgIHNlZWRzKHNlcnZlcikge1xuICAgICAgc2VydmVyLmNyZWF0ZUxpc3QoJ3VzZXInLCAxMClcbiAgICB9LFxuXG4gICAgcm91dGVzKCkge1xuICAgICAgdGhpcy5uYW1lc3BhY2UgPSBcImFwaVwiO1xuICAgICAgdGhpcy50aW1pbmcgPSA3NTA7XG5cbiAgICAgIHRoaXMuZ2V0KFwiL3VzZXJzXCIpO1xuICAgICAgdGhpcy5wb3N0KFwiL3VzZXJzXCIpO1xuXG4gICAgICB0aGlzLm5hbWVzcGFjZSA9IFwiXCI7XG4gICAgICB0aGlzLnBhc3N0aHJvdWdoKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHNlcnZlcjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXIiLCJGYWN0b3J5IiwiTW9kZWwiLCJmYWtlciIsIm1ha2VTZXJ2ZXIiLCJzZXJ2ZXIiLCJtb2RlbHMiLCJ1c2VyIiwiZXh0ZW5kIiwiZmFjdG9yaWVzIiwibmFtZSIsImkiLCJlbWFpbCIsImludGVybmV0IiwidG9Mb3dlckNhc2UiLCJjcmVhdGVkQXQiLCJkYXRlIiwicmVjZW50Iiwic2VlZHMiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0IiwicG9zdCIsInBhc3N0aHJvdWdoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n");

/***/ }),

/***/ "./src/styles/themes.ts":
/*!******************************!*\
  !*** ./src/styles/themes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        gray: {\n            \"900\": \"#181B23\",\n            \"800\": \"#1F2029\",\n            \"700\": \"#353646\",\n            \"600\": \"#4B4D63\",\n            \"500\": \"#616480\",\n            \"400\": \"#797D9A\",\n            \"300\": \"#9699B0\",\n            \"200\": \"#B3B5C6\",\n            \"100\": \"#D1D2DC\",\n            \"50\": \"#EEEEF2\"\n        }\n    },\n    fonts: {\n        heading: \"Roboto\",\n        body: \"Roboto\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"gray.900\",\n                color: \"gray.50\"\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFeEMsTUFBTUMsS0FBSyxHQUFHRCw2REFBVyxDQUFDO0lBQy9CRSxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRjtJQUNEQyxLQUFLLEVBQUU7UUFDTEMsT0FBTyxFQUFFLFFBQVE7UUFDakJDLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDREMsTUFBTSxFQUFFO1FBQ05DLE1BQU0sRUFBRTtZQUNORixJQUFJLEVBQUU7Z0JBQ0pHLEVBQUUsRUFBRSxVQUFVO2dCQUNkQyxLQUFLLEVBQUUsU0FBUzthQUNqQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoZ28vLi9zcmMvc3R5bGVzL3RoZW1lcy50cz82MWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBncmF5OiB7XG4gICAgICBcIjkwMFwiOiBcIiMxODFCMjNcIixcbiAgICAgIFwiODAwXCI6IFwiIzFGMjAyOVwiLFxuICAgICAgXCI3MDBcIjogXCIjMzUzNjQ2XCIsXG4gICAgICBcIjYwMFwiOiBcIiM0QjRENjNcIixcbiAgICAgIFwiNTAwXCI6IFwiIzYxNjQ4MFwiLFxuICAgICAgXCI0MDBcIjogXCIjNzk3RDlBXCIsXG4gICAgICBcIjMwMFwiOiBcIiM5Njk5QjBcIixcbiAgICAgIFwiMjAwXCI6IFwiI0IzQjVDNlwiLFxuICAgICAgXCIxMDBcIjogXCIjRDFEMkRDXCIsXG4gICAgICBcIjUwXCI6IFwiI0VFRUVGMlwiLFxuICAgIH0sXG4gIH0sXG4gIGZvbnRzOiB7XG4gICAgaGVhZGluZzogJ1JvYm90bycsXG4gICAgYm9keTogJ1JvYm90bydcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGJnOiBcImdyYXkuOTAwXCIsXG4gICAgICAgIGNvbG9yOiBcImdyYXkuNTBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJjb2xvcnMiLCJncmF5IiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsInN0eWxlcyIsImdsb2JhbCIsImJnIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/themes.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "miragejs":
/*!***************************!*\
  !*** external "miragejs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("miragejs");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@faker-js/faker");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();