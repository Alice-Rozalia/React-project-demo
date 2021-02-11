webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./config/api.js":
/*!***********************!*\
  !*** ./config/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var url = 'http://127.0.0.1:8360/api/v1';
var request = {
  fetchArticleList: url + '/pub/article',
  // 首页文章列表接口
  fetchArticleByIdApi: url + '/pub/article_byId/',
  // 文章详情页，根据id查询文章接口
  fetchAllTagApi: url + '/pub/tag' // 获取所有标签

};
/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ })

})
//# sourceMappingURL=index.js.9b5405a0b1a63965c953.hot-update.js.map