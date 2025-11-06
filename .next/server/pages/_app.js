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

/***/ "./contexts/UserContext.js":
/*!*********************************!*\
  !*** ./contexts/UserContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider),\n/* harmony export */   useUser: () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        const storedUser = localStorage.getItem(\"user\");\n        if (storedToken) setToken(storedToken);\n        if (storedUser) {\n            try {\n                setUser(JSON.parse(storedUser));\n            } catch  {\n                setUser(storedUser);\n            }\n        }\n    }, []);\n    const updateUser = (userData)=>{\n        setUser(userData);\n        localStorage.setItem(\"user\", JSON.stringify(userData));\n    };\n    const updateToken = (tokenData)=>{\n        setToken(tokenData);\n        localStorage.setItem(\"token\", tokenData);\n    };\n    const logout = ()=>{\n        setUser(null);\n        setToken(null);\n        localStorage.removeItem(\"user\");\n        localStorage.removeItem(\"token\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            token,\n            updateUser,\n            updateToken,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Navlix-main\\\\Navlix\\\\contexts\\\\UserContext.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\nconst useUser = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (!context) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBRXRFLE1BQU1JLDRCQUFjSixvREFBYUE7QUFFMUIsTUFBTUssZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztRQUN6QyxNQUFNQyxhQUFhRixhQUFhQyxPQUFPLENBQUM7UUFFeEMsSUFBSUYsYUFBYUQsU0FBU0M7UUFDMUIsSUFBSUcsWUFBWTtZQUNkLElBQUk7Z0JBQ0ZOLFFBQVFPLEtBQUtDLEtBQUssQ0FBQ0Y7WUFDckIsRUFBRSxPQUFNO2dCQUNOTixRQUFRTTtZQUNWO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRyxhQUFhLENBQUNDO1FBQ2xCVixRQUFRVTtRQUNSTixhQUFhTyxPQUFPLENBQUMsUUFBUUosS0FBS0ssU0FBUyxDQUFDRjtJQUM5QztJQUVBLE1BQU1HLGNBQWMsQ0FBQ0M7UUFDbkJaLFNBQVNZO1FBQ1RWLGFBQWFPLE9BQU8sQ0FBQyxTQUFTRztJQUNoQztJQUVBLE1BQU1DLFNBQVM7UUFDYmYsUUFBUTtRQUNSRSxTQUFTO1FBQ1RFLGFBQWFZLFVBQVUsQ0FBQztRQUN4QlosYUFBYVksVUFBVSxDQUFDO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNwQixZQUFZcUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVuQjtZQUFNRTtZQUFPUTtZQUFZSTtZQUFhRTtRQUFPO2tCQUN6RWpCOzs7Ozs7QUFHUCxFQUFDO0FBRU0sTUFBTXFCLFVBQVU7SUFDckIsTUFBTUMsVUFBVTNCLGlEQUFVQSxDQUFDRztJQUMzQixJQUFJLENBQUN3QixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWxhbmRpbmcvLi9jb250ZXh0cy9Vc2VyQ29udGV4dC5qcz8wMDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXG4gICAgXG4gICAgaWYgKHN0b3JlZFRva2VuKSBzZXRUb2tlbihzdG9yZWRUb2tlbilcbiAgICBpZiAoc3RvcmVkVXNlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHN0b3JlZFVzZXIpKVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHNldFVzZXIoc3RvcmVkVXNlcilcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IHVwZGF0ZVVzZXIgPSAodXNlckRhdGEpID0+IHtcbiAgICBzZXRVc2VyKHVzZXJEYXRhKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlVG9rZW4gPSAodG9rZW5EYXRhKSA9PiB7XG4gICAgc2V0VG9rZW4odG9rZW5EYXRhKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuRGF0YSlcbiAgfVxuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBzZXRVc2VyKG51bGwpXG4gICAgc2V0VG9rZW4obnVsbClcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHRva2VuLCB1cGRhdGVVc2VyLCB1cGRhdGVUb2tlbiwgbG9nb3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVVzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVVzZXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFVzZXJQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwic2V0VG9rZW4iLCJzdG9yZWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VyIiwiSlNPTiIsInBhcnNlIiwidXBkYXRlVXNlciIsInVzZXJEYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVwZGF0ZVRva2VuIiwidG9rZW5EYXRhIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/UserContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/UserContext */ \"./contexts/UserContext.js\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Navlix-main\\\\Navlix\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"top-right\",\n                autoClose: 3000,\n                hideProgressBar: false\n            }, void 0, false, {\n                fileName: \"D:\\\\Navlix-main\\\\Navlix\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Navlix-main\\\\Navlix\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2tCO0FBQ0M7QUFDTztBQUV2QyxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCwrREFBWUE7OzBCQUNYLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSiwwREFBY0E7Z0JBQUNLLFVBQVM7Z0JBQVlDLFdBQVc7Z0JBQU1DLGlCQUFpQjs7Ozs7Ozs7Ozs7O0FBRzdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWxhbmRpbmcvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdhbnRkL2Rpc3QvcmVzZXQuY3NzJ1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL1VzZXJDb250ZXh0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1yaWdodFwiIGF1dG9DbG9zZT17MzAwMH0gaGlkZVByb2dyZXNzQmFyPXtmYWxzZX0gLz5cclxuICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJUb2FzdENvbnRhaW5lciIsIlVzZXJQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/react-toastify","vendor-chunks/antd"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();