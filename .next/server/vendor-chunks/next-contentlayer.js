"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-contentlayer";
exports.ids = ["vendor-chunks/next-contentlayer"];
exports.modules = {

/***/ "(rsc)/./node_modules/next-contentlayer/dist/hooks/useMDXComponent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-contentlayer/dist/hooks/useMDXComponent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMDXComponent: () => (/* binding */ getMDXComponent),\n/* harmony export */   useMDXComponent: () => (/* binding */ useMDXComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsx-runtime.cjs */ \"(rsc)/./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs\");\n// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503\n\n// NOTE use ESM/CommonJS compat import here until resolved: https://github.com/facebook/react/issues/11503\n\n// @ts-expect-error React version workaround (This CJS workaround can be removed once Contentlayer is only targeting React 18+)\n\nconst getMDXComponent = (code, globals = {})=>{\n    const scope = {\n        React: (react__WEBPACK_IMPORTED_MODULE_0___default()),\n        ReactDOM: (react_dom__WEBPACK_IMPORTED_MODULE_1___default()),\n        _jsx_runtime: _jsx_runtime_cjs__WEBPACK_IMPORTED_MODULE_2__._jsx_runtime,\n        ...globals\n    };\n    const fn = new Function(...Object.keys(scope), code);\n    return fn(...Object.values(scope)).default;\n};\nconst useMDXComponent = (code, globals = {})=>{\n    return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(()=>getMDXComponent(code, globals), [\n        code,\n        globals\n    ]);\n}; //# sourceMappingURL=useMDXComponent.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy91c2VNRFhDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBHQUEwRztBQUNoRjtBQUMxQiwwR0FBMEc7QUFDekU7QUFDakMsK0hBQStIO0FBQzlFO0FBQzFDLE1BQU1HLGtCQUFrQixDQUFDQyxNQUFNQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxNQUFNQyxRQUFRO1FBQUVOLEtBQUtBLGdEQUFBQTtRQUFFQyxRQUFRQSxvREFBQUE7UUFBRUMsWUFBWUEsNERBQUFBO1FBQUUsR0FBR0csT0FBTztJQUFDO0lBQzFELE1BQU1FLEtBQUssSUFBSUMsWUFBWUMsT0FBT0MsSUFBSSxDQUFDSixRQUFRRjtJQUMvQyxPQUFPRyxNQUFNRSxPQUFPRSxNQUFNLENBQUNMLFFBQVFNLE9BQU87QUFDOUMsRUFBRTtBQUNLLE1BQU1DLGtCQUFrQixDQUFDVCxNQUFNQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxPQUFPTCxvREFBYSxDQUFDLElBQU1HLGdCQUFnQkMsTUFBTUMsVUFBVTtRQUFDRDtRQUFNQztLQUFRO0FBQzlFLEVBQUUsQ0FDRiwyQ0FBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYW5lLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy91c2VNRFhDb21wb25lbnQuanM/YWU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOT1RFIHVzZSBFU00vQ29tbW9uSlMgY29tcGF0IGltcG9ydCBoZXJlIHVudGlsIHJlc29sdmVkOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExNTAzXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gTk9URSB1c2UgRVNNL0NvbW1vbkpTIGNvbXBhdCBpbXBvcnQgaGVyZSB1bnRpbCByZXNvbHZlZDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMTUwM1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vLyBAdHMtZXhwZWN0LWVycm9yIFJlYWN0IHZlcnNpb24gd29ya2Fyb3VuZCAoVGhpcyBDSlMgd29ya2Fyb3VuZCBjYW4gYmUgcmVtb3ZlZCBvbmNlIENvbnRlbnRsYXllciBpcyBvbmx5IHRhcmdldGluZyBSZWFjdCAxOCspXG5pbXBvcnQgeyBfanN4X3J1bnRpbWUgfSBmcm9tICcuL2pzeC1ydW50aW1lLmNqcyc7XG5leHBvcnQgY29uc3QgZ2V0TURYQ29tcG9uZW50ID0gKGNvZGUsIGdsb2JhbHMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHNjb3BlID0geyBSZWFjdCwgUmVhY3RET00sIF9qc3hfcnVudGltZSwgLi4uZ2xvYmFscyB9O1xuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKC4uLk9iamVjdC5rZXlzKHNjb3BlKSwgY29kZSk7XG4gICAgcmV0dXJuIGZuKC4uLk9iamVjdC52YWx1ZXMoc2NvcGUpKS5kZWZhdWx0O1xufTtcbmV4cG9ydCBjb25zdCB1c2VNRFhDb21wb25lbnQgPSAoY29kZSwgZ2xvYmFscyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gZ2V0TURYQ29tcG9uZW50KGNvZGUsIGdsb2JhbHMpLCBbY29kZSwgZ2xvYmFsc10pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZU1EWENvbXBvbmVudC5qcy5tYXAiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIl9qc3hfcnVudGltZSIsImdldE1EWENvbXBvbmVudCIsImNvZGUiLCJnbG9iYWxzIiwic2NvcGUiLCJmbiIsIkZ1bmN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsImRlZmF1bHQiLCJ1c2VNRFhDb21wb25lbnQiLCJ1c2VNZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-contentlayer/dist/hooks/useMDXComponent.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs":
/*!*******************************************************************!*\
  !*** ./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst _jsx_runtime = __webpack_require__(/*! react/jsx-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js\");\nmodule.exports._jsx_runtime = _jsx_runtime;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy9qc3gtcnVudGltZS5janMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGVBQWVDLG1CQUFPQSxDQUFDO0FBRTdCQywyQkFBMkIsR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYW5lLW5leHQvLi9ub2RlX21vZHVsZXMvbmV4dC1jb250ZW50bGF5ZXIvZGlzdC9ob29rcy9qc3gtcnVudGltZS5janM/NTZmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfanN4X3J1bnRpbWUgPSByZXF1aXJlKCdyZWFjdC9qc3gtcnVudGltZScpXG5cbm1vZHVsZS5leHBvcnRzLl9qc3hfcnVudGltZSA9IF9qc3hfcnVudGltZVxuIl0sIm5hbWVzIjpbIl9qc3hfcnVudGltZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-contentlayer/dist/hooks/jsx-runtime.cjs\n");

/***/ })

};
;