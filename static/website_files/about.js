(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages/about"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".content[data-v-0a606064] {\n  color: #3d3d3d;\n  line-height: 25px;\n  width: 50%;\n  margin-left: 5vw;\n}\n.content .title[data-v-0a606064] {\n    color: #6600de;\n}\n@media screen and (max-width: 1200px) {\n.content[data-v-0a606064] {\n    margin-top: 50vw;\n}\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/pages/about.vue","/Users/user/Desktop/Witnet/website/styles/colors.scss"],"names":[],"mappings":"AAcA;EACE,cAAsB;EACtB,iBAAiB;EACjB,UAAU;EACV,gBAAgB;AAAA;AAJlB;IAMI,cCnBqB;AAAA;ADsBzB;AACE;IACE,gBAAgB;AAAA;AACjB","file":"about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n@import '@/styles/colors.scss';\n\n.content {\n  color: rgb(61, 61, 61);\n  line-height: 25px;\n  width: 50%;\n  margin-left: 5vw;\n  .title {\n    color: $purple;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .content {\n    margin-top: 50vw;\n  }\n}\n","//purple\n$purple: rgb(102, 0, 222);\n$purple-1: rgba(104, 0, 222, 0.096);\n$purple-2: rgba(100, 45, 163, 0.24);\n//grey and white\n$white: white;\n$grey-1: rgb(244, 244, 244);\n$grey-2: rgb(61, 61, 61);"]}]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=template&id=0a606064&scoped=true&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=0a606064&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tab-frame" }, [
    _c("div", { staticClass: "content" }, [
      _c("h2", { staticClass: "title" }, [
        _vm._v(_vm._s(this.$t("about-title")))
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("\n      " + _vm._s(this.$t("about-text")) + "\n    ")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0010c830", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./pages/about.vue":
/*!*************************!*\
  !*** ./pages/about.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=0a606064&scoped=true& */ "./pages/about.vue?vue&type=template&id=0a606064&scoped=true&");
/* harmony import */ var _about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& */ "./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a606064",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0a606064')) {
      api.createRecord('0a606064', component.options)
    } else {
      api.reload('0a606064', component.options)
    }
    module.hot.accept(/*! ./about.vue?vue&type=template&id=0a606064&scoped=true& */ "./pages/about.vue?vue&type=template&id=0a606064&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=0a606064&scoped=true& */ "./pages/about.vue?vue&type=template&id=0a606064&scoped=true&");
(function () {
      api.rerender('0a606064', {
        render: _about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "pages/about.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=style&index=0&id=0a606064&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_0a606064_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./pages/about.vue?vue&type=template&id=0a606064&scoped=true&":
/*!********************************************************************!*\
  !*** ./pages/about.vue?vue&type=template&id=0a606064&scoped=true& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=0a606064&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/about.vue?vue&type=template&id=0a606064&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_0a606064_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);