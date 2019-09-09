(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./.nuxt/App.js":
/*!**********************!*\
  !*** ./.nuxt/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./.nuxt/utils.js");
/* harmony import */ var _components_nuxt_loading_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nuxt-loading.vue */ "./.nuxt/components/nuxt-loading.vue");
/* harmony import */ var _components_nuxt_build_indicator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nuxt-build-indicator */ "./.nuxt/components/nuxt-build-indicator.vue");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _layouts_default_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts/default.vue */ "./layouts/default.vue");















var layouts = {
  "_default": _layouts_default_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    "title": "website",
    "meta": [{
      "charset": "utf-8"
    }, {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    }, {
      "hid": "description",
      "name": "description",
      "content": "Witnet protocol website"
    }],
    "link": [{
      "rel": "icon",
      "type": "image/x-icon",
      "href": "/favicon.ico"
    }],
    "style": [],
    "script": []
  },
  render: function render(h, props) {
    var loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    var layoutEl = h(this.layout || 'nuxt');
    var templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    var transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter: function beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(function () {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, h(_components_nuxt_build_indicator__WEBPACK_IMPORTED_MODULE_12__["default"]), transitionEl]);
  },
  data: function data() {
    return {
      isOnline: true,
      layout: null,
      layoutName: ''
    };
  },
  beforeCreate: function beforeCreate() {
    vue__WEBPACK_IMPORTED_MODULE_9__["default"].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    vue__WEBPACK_IMPORTED_MODULE_9__["default"].prototype.$nuxt = this; // add to window so we can listen when ready

    if (true) {
      window.$nuxt = this;
      this.refreshOnlineStatus(); // Setup the listeners

      window.addEventListener('online', this.refreshOnlineStatus);
      window.addEventListener('offline', this.refreshOnlineStatus);
    } // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline: function isOffline() {
      return !this.isOnline;
    }
  },
  methods: {
    refreshOnlineStatus: function refreshOnlineStatus() {
      if (true) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true;
        } else {
          this.isOnline = window.navigator.onLine;
        }
      }
    },
    refresh: function () {
      var _refresh = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        var pages, promises;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pages = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getMatchedComponentsInstances"])(this.$route);

                if (pages.length) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                this.$loading.start();
                promises = pages.map(
                /*#__PURE__*/
                function () {
                  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(page) {
                    var p;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            p = [];

                            if (page.$options.fetch) {
                              p.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["promisify"])(page.$options.fetch, _this.context));
                            }

                            if (page.$options.asyncData) {
                              p.push(Object(_utils__WEBPACK_IMPORTED_MODULE_10__["promisify"])(page.$options.asyncData, _this.context).then(function (newData) {
                                for (var key in newData) {
                                  vue__WEBPACK_IMPORTED_MODULE_9__["default"].set(page.$data, key, newData[key]);
                                }
                              }));
                            }

                            return _context.abrupt("return", Promise.all(p));

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context2.prev = 5;
                _context2.next = 8;
                return Promise.all(promises);

              case 8:
                _context2.next = 15;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](5);
                this.$loading.fail();
                Object(_utils__WEBPACK_IMPORTED_MODULE_10__["globalHandleError"])(_context2.t0);
                this.error(_context2.t0);

              case 15:
                this.$loading.finish();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 10]]);
      }));

      function refresh() {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }(),
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    },
    setLayout: function setLayout(layout) {
      if (layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.');

      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout: function loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: _components_nuxt_loading_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  }
});

/***/ }),

/***/ "./.nuxt/client.js":
/*!*************************!*\
  !*** ./.nuxt/client.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs");
/* harmony import */ var _middleware_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./middleware.js */ "./.nuxt/middleware.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils.js */ "./.nuxt/utils.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index.js */ "./.nuxt/index.js");
/* harmony import */ var _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/nuxt-link.client.js */ "./.nuxt/components/nuxt-link.client.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! consola */ "./node_modules/consola/dist/consola.browser.js");
/* harmony import */ var consola__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(consola__WEBPACK_IMPORTED_MODULE_24__);























 // should be included after ./index.js


consola__WEBPACK_IMPORTED_MODULE_24___default.a.wrapConsole();
console.log = console.__log; // Component: <NuxtLink>

vue__WEBPACK_IMPORTED_MODULE_18__["default"].component(_components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_23__["default"].name, _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_23__["default"]);
vue__WEBPACK_IMPORTED_MODULE_18__["default"].component('NLink', _components_nuxt_link_client_js__WEBPACK_IMPORTED_MODULE_23__["default"]);

if (!global.fetch) {
  global.fetch = unfetch__WEBPACK_IMPORTED_MODULE_19__["default"];
} // Global shared references


var _lastPaths = [];
var app;
var router; // Try to rehydrate SSR data from window

var NUXT = window.__NUXT__ || {};
Object.assign(vue__WEBPACK_IMPORTED_MODULE_18__["default"].config, {
  "silent": false,
  "performance": true
});
var logs = NUXT.logs || [];

if (logs.length > 0) {
  console.group("%c🚀 Nuxt SSR Logs", 'font-size: 110%');
  logs.forEach(function (logObj) {
    return consola__WEBPACK_IMPORTED_MODULE_24___default.a[logObj.type](logObj);
  });
  delete NUXT.logs;
  console.groupEnd();
} // Setup global Vue error handler


if (!vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.$nuxt) {
  var defaultErrorHandler = vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.errorHandler;

  vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.errorHandler = function (err, vm, info) {
    // Call other handler if exist
    var handled = null;

    if (typeof defaultErrorHandler === 'function') {
      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      handled = defaultErrorHandler.apply(void 0, [err, vm, info].concat(rest));
    }

    if (handled === true) {
      return handled;
    }

    if (vm && vm.$root) {
      var nuxtApp = Object.keys(vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.$nuxt).find(function (nuxtInstance) {
        return vm.$root[nuxtInstance];
      }); // Show Nuxt Error Page

      if (nuxtApp && vm.$root[nuxtApp].error && info !== 'render function') {
        vm.$root[nuxtApp].error(err);
      }
    }

    if (typeof defaultErrorHandler === 'function') {
      return handled;
    } // Log to console


    if (true) {
      console.error(err);
    } else {}
  };

  vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.$nuxt = {};
}

vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.$nuxt.$nuxt = true;
var errorHandler = vue__WEBPACK_IMPORTED_MODULE_18__["default"].config.errorHandler || console.error; // Create and mount App

Object(_index_js__WEBPACK_IMPORTED_MODULE_22__["createApp"])().then(mountApp).catch(errorHandler);

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }

  var option = component.options[key];

  if (typeof option === 'function') {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return option.apply(void 0, args);
  }

  return option;
}

function mapTransitions(Components, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? {
      name: transition
    } : transition;
  };

  return Components.map(function (Component) {
    // Clone original object to prevent overrides
    var transitions = Object.assign({}, componentTransitions(Component)); // Combine transitions & prefer `leave` transitions of 'from' route

    if (from && from.matched.length && from.matched[0].components.default) {
      var fromTransitions = componentTransitions(from.matched[0].components.default);
      Object.keys(fromTransitions).filter(function (key) {
        return fromTransitions[key] && key.toLowerCase().includes('leave');
      }).forEach(function (key) {
        transitions[key] = fromTransitions[key];
      });
    }

    return transitions;
  });
}

function loadAsyncComponents(_x, _x2, _x3) {
  return _loadAsyncComponents.apply(this, arguments);
}

function _loadAsyncComponents() {
  _loadAsyncComponents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(to, from, next) {
    var _this4 = this;

    var Components, startLoader, err, statusCode, message;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // Check if route path changed (this._pathChanged), only if the page is not an error (for validate())
            this._pathChanged = Boolean(app.nuxt.err) || from.path !== to.path;
            this._queryChanged = JSON.stringify(to.query) !== JSON.stringify(from.query);
            this._diffQuery = this._queryChanged ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getQueryDiff"])(to.query, from.query) : [];

            if (this._pathChanged && this.$loading.start && !this.$loading.manual) {
              this.$loading.start();
            }

            _context3.prev = 4;
            _context3.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["resolveRouteComponents"])(to, function (Component, instance) {
              return {
                Component: Component,
                instance: instance
              };
            });

          case 7:
            Components = _context3.sent;

            if (!this._pathChanged && this._queryChanged) {
              // Add a marker on each component that it needs to refresh or not
              startLoader = Components.some(function (_ref3) {
                var Component = _ref3.Component,
                    instance = _ref3.instance;
                var watchQuery = Component.options.watchQuery;

                if (watchQuery === true) {
                  return true;
                } else if (Array.isArray(watchQuery)) {
                  return watchQuery.some(function (key) {
                    return _this4._diffQuery[key];
                  });
                } else if (typeof watchQuery === 'function') {
                  return watchQuery.apply(instance, [to.query, from.query]);
                }

                return false;
              });

              if (startLoader && this.$loading.start && !this.$loading.manual) {
                this.$loading.start();
              }
            } // Call next()


            next();
            _context3.next = 23;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](4);
            err = _context3.t0 || {};
            statusCode = err.statusCode || err.status || err.response && err.response.status || 500;
            message = err.message || ''; // Handle chunk loading errors
            // This may be due to a new deployment or a network problem

            if (!/^Loading( CSS)? chunk (\d)+ failed\./.test(message)) {
              _context3.next = 20;
              break;
            }

            window.location.reload(true
            /* skip cache */
            );
            return _context3.abrupt("return");

          case 20:
            this.error({
              statusCode: statusCode,
              message: message
            });
            this.$nuxt.$emit('routeChanged', to, from, err);
            next();

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[4, 12]]);
  }));
  return _loadAsyncComponents.apply(this, arguments);
}

function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["applyAsyncData"])(Component, ssrData);
  }

  Component._Ctor = Component;
  return Component;
} // Get matched components


function resolveComponents(router) {
  var path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getLocation"])(router.options.base, router.options.mode);
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["flatMapComponents"])(router.match(path),
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(Component, _, match, key, index) {
      var _Component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              // Sanitize it and save it
              _Component = applySSRData(Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["sanitizeComponent"])(Component), NUXT.data ? NUXT.data[index] : null);
              match.components[key] = _Component;
              return _context.abrupt("return", _Component);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }());
}

function callMiddleware(Components, context, layout) {
  var _this = this;

  var midd = [];
  var unknownMiddleware = false; // If layout is undefined, only call global middleware

  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)

    layout = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["sanitizeComponent"])(layout);

    if (layout.options.middleware) {
      midd = midd.concat(layout.options.middleware);
    }

    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof name === 'function') return name;

    if (typeof _middleware_js__WEBPACK_IMPORTED_MODULE_20__["default"][name] !== 'function') {
      unknownMiddleware = true;

      _this.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _middleware_js__WEBPACK_IMPORTED_MODULE_20__["default"][name];
  });
  if (unknownMiddleware) return;
  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["middlewareSeries"])(midd, context);
}

function render(_x9, _x10, _x11) {
  return _render.apply(this, arguments);
} // Fix components format in matched, it's due to code-splitting of vue-router


function _render() {
  _render = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(to, from, next) {
    var _this5 = this;

    var fromMatches, nextCalled, _next, matches, Components, layout, _layout, isValid, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, Component, error, _layout2;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!(this._pathChanged === false && this._queryChanged === false)) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", next());

          case 2:
            // Handle first render on SPA mode
            if (to === from) _lastPaths = [];else {
              fromMatches = [];
              _lastPaths = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getMatchedComponents"])(from, fromMatches).map(function (Component, i) {
                return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["compile"])(from.matched[fromMatches[i]].path)(from.params);
              });
            } // nextCalled is true when redirected

            nextCalled = false;

            _next = function _next(path) {
              if (from.path === path.path && _this5.$loading.finish) {
                _this5.$loading.finish();
              }

              if (from.path !== path.path && _this5.$loading.pause) {
                _this5.$loading.pause();
              }

              if (nextCalled) return;
              nextCalled = true;
              next(path);
            }; // Update context


            _context4.next = 7;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["setContext"])(app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 7:
            this._dateLastError = app.nuxt.dateErr;
            this._hadError = Boolean(app.nuxt.err); // Get route's matched components

            matches = [];
            Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getMatchedComponents"])(to, matches); // If no Components matched, generate 404

            if (Components.length) {
              _context4.next = 25;
              break;
            }

            _context4.next = 14;
            return callMiddleware.call(this, Components, app.context);

          case 14:
            if (!nextCalled) {
              _context4.next = 16;
              break;
            }

            return _context4.abrupt("return");

          case 16:
            _context4.next = 18;
            return this.loadLayout(typeof _index_js__WEBPACK_IMPORTED_MODULE_22__["NuxtError"].layout === 'function' ? _index_js__WEBPACK_IMPORTED_MODULE_22__["NuxtError"].layout(app.context) : _index_js__WEBPACK_IMPORTED_MODULE_22__["NuxtError"].layout);

          case 18:
            layout = _context4.sent;
            _context4.next = 21;
            return callMiddleware.call(this, Components, app.context, layout);

          case 21:
            if (!nextCalled) {
              _context4.next = 23;
              break;
            }

            return _context4.abrupt("return");

          case 23:
            // Show error page
            app.context.error({
              statusCode: 404,
              message: "This page could not be found"
            });
            return _context4.abrupt("return", next());

          case 25:
            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            }); // Apply transitions

            this.setTransitions(mapTransitions(Components, to, from));
            _context4.prev = 27;
            _context4.next = 30;
            return callMiddleware.call(this, Components, app.context);

          case 30:
            if (!nextCalled) {
              _context4.next = 32;
              break;
            }

            return _context4.abrupt("return");

          case 32:
            if (!app.context._errored) {
              _context4.next = 34;
              break;
            }

            return _context4.abrupt("return", next());

          case 34:
            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(app.context);
            }

            _context4.next = 38;
            return this.loadLayout(_layout);

          case 38:
            _layout = _context4.sent;
            _context4.next = 41;
            return callMiddleware.call(this, Components, app.context, _layout);

          case 41:
            if (!nextCalled) {
              _context4.next = 43;
              break;
            }

            return _context4.abrupt("return");

          case 43:
            if (!app.context._errored) {
              _context4.next = 45;
              break;
            }

            return _context4.abrupt("return", next());

          case 45:
            // Call .validate()
            isValid = true;
            _context4.prev = 46;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context4.prev = 50;
            _iterator = Components[Symbol.iterator]();

          case 52:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context4.next = 64;
              break;
            }

            Component = _step.value;

            if (!(typeof Component.options.validate !== 'function')) {
              _context4.next = 56;
              break;
            }

            return _context4.abrupt("continue", 61);

          case 56:
            _context4.next = 58;
            return Component.options.validate(app.context);

          case 58:
            isValid = _context4.sent;

            if (isValid) {
              _context4.next = 61;
              break;
            }

            return _context4.abrupt("break", 64);

          case 61:
            _iteratorNormalCompletion = true;
            _context4.next = 52;
            break;

          case 64:
            _context4.next = 70;
            break;

          case 66:
            _context4.prev = 66;
            _context4.t0 = _context4["catch"](50);
            _didIteratorError = true;
            _iteratorError = _context4.t0;

          case 70:
            _context4.prev = 70;
            _context4.prev = 71;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 73:
            _context4.prev = 73;

            if (!_didIteratorError) {
              _context4.next = 76;
              break;
            }

            throw _iteratorError;

          case 76:
            return _context4.finish(73);

          case 77:
            return _context4.finish(70);

          case 78:
            _context4.next = 84;
            break;

          case 80:
            _context4.prev = 80;
            _context4.t1 = _context4["catch"](46);
            // ...If .validate() threw an error
            this.error({
              statusCode: _context4.t1.statusCode || '500',
              message: _context4.t1.message
            });
            return _context4.abrupt("return", next());

          case 84:
            if (isValid) {
              _context4.next = 87;
              break;
            }

            this.error({
              statusCode: 404,
              message: "This page could not be found"
            });
            return _context4.abrupt("return", next());

          case 87:
            _context4.next = 89;
            return Promise.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["compile"])(to.matched[matches[i]].path)(to.params);
              Component._dataRefresh = false; // Check if Component need to be refreshed (call asyncData & fetch)
              // Only if its slug has changed or is watch query changes

              if (_this5._pathChanged && _this5._queryChanged || Component._path !== _lastPaths[i]) {
                Component._dataRefresh = true;
              } else if (!_this5._pathChanged && _this5._queryChanged) {
                var watchQuery = Component.options.watchQuery;

                if (watchQuery === true) {
                  Component._dataRefresh = true;
                } else if (Array.isArray(watchQuery)) {
                  Component._dataRefresh = watchQuery.some(function (key) {
                    return _this5._diffQuery[key];
                  });
                }
              }

              if (!_this5._hadError && _this5._isMounted && !Component._dataRefresh) {
                return Promise.resolve();
              }

              var promises = [];
              var hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
              var hasFetch = Boolean(Component.options.fetch);
              var loadingIncrease = hasAsyncData && hasFetch ? 30 : 45; // Call asyncData(context)

              if (hasAsyncData) {
                var promise = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["promisify"])(Component.options.asyncData, app.context).then(function (asyncDataResult) {
                  Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["applyAsyncData"])(Component, asyncDataResult);

                  if (_this5.$loading.increase) {
                    _this5.$loading.increase(loadingIncrease);
                  }
                });
                promises.push(promise);
              } // Check disabled page loading


              _this5.$loading.manual = Component.options.loading === false; // Call fetch(context)

              if (hasFetch) {
                var p = Component.options.fetch(app.context);

                if (!p || !(p instanceof Promise) && typeof p.then !== 'function') {
                  p = Promise.resolve(p);
                }

                p.then(function (fetchResult) {
                  if (_this5.$loading.increase) {
                    _this5.$loading.increase(loadingIncrease);
                  }
                });
                promises.push(p);
              }

              return Promise.all(promises);
            }));

          case 89:
            if (!nextCalled) {
              if (this.$loading.finish && !this.$loading.manual) {
                this.$loading.finish();
              }

              next();
            }

            _context4.next = 106;
            break;

          case 92:
            _context4.prev = 92;
            _context4.t2 = _context4["catch"](27);
            error = _context4.t2 || {};

            if (!(error.message === 'ERR_REDIRECT')) {
              _context4.next = 97;
              break;
            }

            return _context4.abrupt("return", this.$nuxt.$emit('routeChanged', to, from, error));

          case 97:
            _lastPaths = [];
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["globalHandleError"])(error); // Load error layout

            _layout2 = _index_js__WEBPACK_IMPORTED_MODULE_22__["NuxtError"].layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(app.context);
            }

            _context4.next = 103;
            return this.loadLayout(_layout2);

          case 103:
            this.error(error);
            this.$nuxt.$emit('routeChanged', to, from, error);
            next();

          case 106:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[27, 92], [46, 80], [50, 66, 70, 78], [71,, 73, 77]]);
  }));
  return _render.apply(this, arguments);
}

function normalizeComponents(to, ___) {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["flatMapComponents"])(to, function (Component, _, match, key) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(Component) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = vue__WEBPACK_IMPORTED_MODULE_18__["default"].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }

    return Component;
  });
}

function showNextPage(to) {
  // Hide error component if no error
  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    this.error();
  } // Set layout


  var layout = this.$options.nuxt.err ? _index_js__WEBPACK_IMPORTED_MODULE_22__["NuxtError"].layout : to.matched[0].components.default.options.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  this.setLayout(layout);
} // When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves


function fixPrepatch(to, ___) {
  var _this2 = this;

  if (this._pathChanged === false && this._queryChanged === false) return;
  var matches = [];
  var instances = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getMatchedComponentsInstances"])(to, matches);
  var Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getMatchedComponents"])(to, matches);
  vue__WEBPACK_IMPORTED_MODULE_18__["default"].nextTick(function () {
    instances.forEach(function (instance, i) {
      if (!instance || instance._isDestroyed) return; // if (
      //   !this._queryChanged &&
      //   to.matched[matches[i]].path.indexOf(':') === -1 &&
      //   to.matched[matches[i]].path.indexOf('*') === -1
      // ) return // If not a dynamic route, skip

      if (instance.constructor._dataRefresh && Components[i] === instance.constructor && instance.$vnode.data.keepAlive !== true && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);

        for (var key in newData) {
          vue__WEBPACK_IMPORTED_MODULE_18__["default"].set(instance.$data, key, newData[key]);
        } // Ensure to trigger scroll event after calling scrollBehavior


        window.$nuxt.$nextTick(function () {
          window.$nuxt.$emit('triggerScroll');
        });
      }
    });
    showNextPage.call(_this2, to); // Hot reloading

    setTimeout(function () {
      return hotReloadAPI(_this2);
    }, 100);
  });
}

function nuxtReady(_app) {
  window.onNuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  }); // Special JSDOM

  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  } // Add router hooks


  router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    vue__WEBPACK_IMPORTED_MODULE_18__["default"].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

var noopData = function noopData() {
  return {};
};

var noopFetch = function noopFetch() {}; // Special hot reload with asyncData(context)


function getNuxtChildComponents($parent) {
  var $components = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  $parent.$children.forEach(function ($child) {
    if ($child.$vnode && $child.$vnode.data.nuxtChild && !$components.find(function (c) {
      return c.$options.__file === $child.$options.__file;
    })) {
      $components.push($child);
    }

    if ($child.$children && $child.$children.length) {
      getNuxtChildComponents($child, $components);
    }
  });
  return $components;
}

function hotReloadAPI(_app) {
  if (false) {}
  var $components = getNuxtChildComponents(_app.$nuxt, []);
  $components.forEach(addHotReload.bind(_app));
}

function addHotReload($component, depth) {
  var _this3 = this;

  if ($component.$vnode.data._hasHotReload) return;
  $component.$vnode.data._hasHotReload = true;

  var _forceUpdate = $component.$forceUpdate.bind($component.$parent);

  $component.$vnode.context.$forceUpdate =
  /*#__PURE__*/
  Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var Components, Component, promises, next, context;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Components = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["getMatchedComponents"])(router.currentRoute);
            Component = Components[depth];

            if (Component) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", _forceUpdate());

          case 4:
            if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(Component) === 'object' && !Component.options) {
              // Updated via vue-router resolveAsyncComponents()
              Component = vue__WEBPACK_IMPORTED_MODULE_18__["default"].extend(Component);
              Component._Ctor = Component;
            }

            _this3.error();

            promises = [];

            next = function next(path) {
              this.$loading.finish && this.$loading.finish();
              router.push(path);
            };

            _context2.next = 10;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["setContext"])(app, {
              route: router.currentRoute,
              isHMR: true,
              next: next.bind(_this3)
            });

          case 10:
            context = app.context;
            if (_this3.$loading.start && !_this3.$loading.manual) _this3.$loading.start();
            callMiddleware.call(_this3, Components, context).then(function () {
              // If layout changed
              if (depth !== 0) return Promise.resolve();
              var layout = Component.options.layout || 'default';

              if (typeof layout === 'function') {
                layout = layout(context);
              }

              if (_this3.layoutName === layout) return Promise.resolve();

              var promise = _this3.loadLayout(layout);

              promise.then(function () {
                _this3.setLayout(layout);

                vue__WEBPACK_IMPORTED_MODULE_18__["default"].nextTick(function () {
                  return hotReloadAPI(_this3);
                });
              });
              return promise;
            }).then(function () {
              return callMiddleware.call(_this3, Components, context, _this3.layout);
            }).then(function () {
              // Call asyncData(context)
              var pAsyncData = Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["promisify"])(Component.options.asyncData || noopData, context);
              pAsyncData.then(function (asyncDataResult) {
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["applyAsyncData"])(Component, asyncDataResult);
                _this3.$loading.increase && _this3.$loading.increase(30);
              });
              promises.push(pAsyncData); // Call fetch()

              Component.options.fetch = Component.options.fetch || noopFetch;
              var pFetch = Component.options.fetch(context);

              if (!pFetch || !(pFetch instanceof Promise) && typeof pFetch.then !== 'function') {
                pFetch = Promise.resolve(pFetch);
              }

              pFetch.then(function () {
                return _this3.$loading.increase && _this3.$loading.increase(30);
              });
              promises.push(pFetch);
              return Promise.all(promises);
            }).then(function () {
              _this3.$loading.finish && _this3.$loading.finish();

              _forceUpdate();

              setTimeout(function () {
                return hotReloadAPI(_this3);
              }, 100);
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}

function mountApp(_x12) {
  return _mountApp.apply(this, arguments);
}

function _mountApp() {
  _mountApp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(__app) {
    var Components, _app, mount, clientFirstMount;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // Set global variables
            app = __app.app;
            router = __app.router; // Resolve route components

            _context5.next = 4;
            return Promise.all(resolveComponents(router));

          case 4:
            Components = _context5.sent;
            _app = new vue__WEBPACK_IMPORTED_MODULE_18__["default"](app); // Mounts Vue app to DOM element

            mount = function mount() {
              _app.$mount('#__nuxt'); // Add afterEach router hooks


              router.afterEach(normalizeComponents);
              router.afterEach(fixPrepatch.bind(_app)); // Listen for first Vue update

              vue__WEBPACK_IMPORTED_MODULE_18__["default"].nextTick(function () {
                // Call window.{{globals.readyCallback}} callbacks
                nuxtReady(_app); // Enable hot reloading

                hotReloadAPI(_app);
              });
            }; // Enable transitions


            _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);

            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, router.currentRoute));

              _lastPaths = router.currentRoute.matched.map(function (route) {
                return Object(_utils_js__WEBPACK_IMPORTED_MODULE_21__["compile"])(route.path)(router.currentRoute.params);
              });
            } // Initialize error handler


            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist

            if (NUXT.error) _app.error(NUXT.error); // Add beforeEach router hooks

            router.beforeEach(loadAsyncComponents.bind(_app));
            router.beforeEach(render.bind(_app)); // If page already is server rendered

            if (!NUXT.serverRendered) {
              _context5.next = 16;
              break;
            }

            mount();
            return _context5.abrupt("return");

          case 16:
            // First render on client-side
            clientFirstMount = function clientFirstMount() {
              normalizeComponents(router.currentRoute, router.currentRoute);
              showNextPage.call(_app, router.currentRoute); // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render

              mount();
            };

            render.call(_app, router.currentRoute, router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                clientFirstMount();
                return;
              } // Add a one-time afterEach hook to
              // mount the app wait for redirect and route gets resolved


              var unregisterHook = router.afterEach(function (to, from) {
                unregisterHook();
                clientFirstMount();
              }); // Push the path and let route to be resolved

              router.push(path, undefined, function (err) {
                if (err) errorHandler(err);
              });
            });

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _mountApp.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./.nuxt/components/nuxt-build-indicator.vue":
/*!***************************************************!*\
  !*** ./.nuxt/components/nuxt-build-indicator.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true& */ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&");
/* harmony import */ var _nuxt_build_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuxt-build-indicator.vue?vue&type=script&lang=js& */ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& */ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _nuxt_build_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71e9e103",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('71e9e103')) {
      api.createRecord('71e9e103', component.options)
    } else {
      api.reload('71e9e103', component.options)
    }
    module.hot.accept(/*! ./nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true& */ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true& */ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&");
(function () {
      api.rerender('71e9e103', {
        render: _nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = ".nuxt/components/nuxt-build-indicator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2-0!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-build-indicator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--3-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_style_index_0_id_71e9e103_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_build_indicator_vue_vue_type_template_id_71e9e103_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./.nuxt/components/nuxt-child.js":
/*!****************************************!*\
  !*** ./.nuxt/components/nuxt-child.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data,
        props = _ref.props;
    data.nuxtChild = true;
    var _parent = parent;
    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    }); // Add triggerScroll event on beforeEnter (fix #1376)

    var beforeEnter = listeners.beforeEnter;

    listeners.beforeEnter = function (el) {
      // Ensure to trigger scroll event after calling scrollBehavior
      window.$nuxt.$nextTick(function () {
        window.$nuxt.$emit('triggerScroll');
      });

      if (beforeEnter) {
        return beforeEnter.call(_parent, el);
      }
    }; // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      var leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = function (el, done) {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    var routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
var transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];

/***/ }),

/***/ "./.nuxt/components/nuxt-error.vue":
/*!*****************************************!*\
  !*** ./.nuxt/components/nuxt-error.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-error.vue?vue&type=template&id=74e3df5b& */ "./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b&");
/* harmony import */ var _nuxt_error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuxt-error.vue?vue&type=script&lang=js& */ "./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuxt-error.vue?vue&type=style&index=0&lang=css& */ "./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _nuxt_error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('74e3df5b')) {
      api.createRecord('74e3df5b', component.options)
    } else {
      api.reload('74e3df5b', component.options)
    }
    module.hot.accept(/*! ./nuxt-error.vue?vue&type=template&id=74e3df5b& */ "./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-error.vue?vue&type=template&id=74e3df5b& */ "./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b&");
(function () {
      api.rerender('74e3df5b', {
        render: _nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = ".nuxt/components/nuxt-error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2-0!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-error.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--3-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-error.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b&":
/*!************************************************************************!*\
  !*** ./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-error.vue?vue&type=template&id=74e3df5b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_template_id_74e3df5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./.nuxt/components/nuxt-link.client.js":
/*!**********************************************!*\
  !*** ./.nuxt/components/nuxt-link.client.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");








var requestIdleCallback = window.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var observer = window.IntersectionObserver && new window.IntersectionObserver(function (entries) {
  entries.forEach(function (_ref) {
    var intersectionRatio = _ref.intersectionRatio,
        link = _ref.target;

    if (intersectionRatio <= 0) {
      return;
    }

    link.__prefetch();
  });
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuxtLink',
  extends: vue__WEBPACK_IMPORTED_MODULE_6__["default"].component('RouterLink'),
  props: {
    noPrefetch: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (!this.noPrefetch) {
      requestIdleCallback(this.observe, {
        timeout: 2e3
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.__observed) {
      observer.unobserve(this.$el);
      delete this.$el.__prefetch;
    }
  },
  methods: {
    observe: function observe() {
      // If no IntersectionObserver, avoid prefetching
      if (!observer) {
        return;
      } // Add to observer


      if (this.shouldPrefetch()) {
        this.$el.__prefetch = this.prefetch.bind(this);
        observer.observe(this.$el);
        this.__observed = true;
      }
    },
    shouldPrefetch: function shouldPrefetch() {
      return this.getPrefetchComponents().length > 0;
    },
    canPrefetch: function canPrefetch() {
      var conn = navigator.connection;
      var hasBadConnection = this.$nuxt.isOffline || conn && ((conn.effectiveType || '').includes('2g') || conn.saveData);
      return !hasBadConnection;
    },
    getPrefetchComponents: function getPrefetchComponents() {
      var ref = this.$router.resolve(this.to, this.$route, this.append);
      var Components = ref.resolved.matched.map(function (r) {
        return r.components.default;
      });
      return Components.filter(function (Component) {
        return typeof Component === 'function' && !Component.options && !Component.__prefetched;
      });
    },
    prefetch: function prefetch() {
      if (!this.canPrefetch()) {
        return;
      } // Stop obersing this link (in case of internet connection changes)


      observer.unobserve(this.$el);
      var Components = this.getPrefetchComponents();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var Component = _step.value;
          var componentOrPromise = Component();

          if (componentOrPromise instanceof Promise) {
            componentOrPromise.catch(function () {});
          }

          Component.__prefetched = true;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./.nuxt/components/nuxt-loading.vue":
/*!*******************************************!*\
  !*** ./.nuxt/components/nuxt-loading.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nuxt_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nuxt-loading.vue?vue&type=script&lang=js& */ "./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nuxt-loading.vue?vue&type=style&index=0&lang=css& */ "./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nuxt_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('41c071cf')) {
      api.createRecord('41c071cf', component.options)
    } else {
      api.reload('41c071cf', component.options)
    }
    
  }
}
component.options.__file = ".nuxt/components/nuxt-loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2-0!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--3-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-loading.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./.nuxt/components/nuxt.js":
/*!**********************************!*\
  !*** ./.nuxt/components/nuxt.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./.nuxt/utils.js");
/* harmony import */ var _nuxt_error_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nuxt-error.vue */ "./.nuxt/components/nuxt-error.vue");
/* harmony import */ var _nuxt_child__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuxt-child */ "./.nuxt/components/nuxt-child.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Nuxt',
  components: {
    NuxtChild: _nuxt_child__WEBPACK_IMPORTED_MODULE_5__["default"],
    NuxtError: _nuxt_error_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    routerViewKey: function routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["compile"])(this.$route.matched[0].path)(this.$route.params);
      }

      var _this$$route$matched = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$route.matched, 1),
          matchedRoute = _this$$route$matched[0];

      if (!matchedRoute) {
        return this.$route.path;
      }

      var Component = matchedRoute.components.default;

      if (Component && Component.options) {
        var options = Component.options;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      var strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate: function beforeCreate() {
    vue__WEBPACK_IMPORTED_MODULE_2__["default"].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render: function render(h) {
    // If there is some error
    if (this.nuxt.err) {
      return h('NuxtError', {
        props: {
          error: this.nuxt.err
        }
      });
    } // Directly return nuxt child


    return h('NuxtChild', {
      key: this.routerViewKey,
      props: this.$props
    });
  }
});

/***/ }),

/***/ "./.nuxt/index.js":
/*!************************!*\
  !*** ./.nuxt/index.js ***!
  \************************/
/*! exports provided: createApp, NuxtError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-meta */ "./node_modules/vue-meta/dist/vue-meta.esm.js");
/* harmony import */ var vue_client_only__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-client-only */ "./node_modules/vue-client-only/dist/vue-client-only.common.js");
/* harmony import */ var vue_client_only__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(vue_client_only__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue_no_ssr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-no-ssr */ "./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js");
/* harmony import */ var vue_no_ssr__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./router.js */ "./.nuxt/router.js");
/* harmony import */ var _components_nuxt_child_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/nuxt-child.js */ "./.nuxt/components/nuxt-child.js");
/* harmony import */ var _components_nuxt_error_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/nuxt-error.vue */ "./.nuxt/components/nuxt-error.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NuxtError", function() { return _components_nuxt_error_vue__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _components_nuxt_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/nuxt.js */ "./.nuxt/components/nuxt.js");
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./App.js */ "./.nuxt/App.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utils */ "./.nuxt/utils.js");
/* harmony import */ var nuxt_plugin_vueparticles_5824b087__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! nuxt_plugin_vueparticles_5824b087 */ "./plugins/vue-particles.js");
/* harmony import */ var nuxt_plugin_i18n_1fba523a__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! nuxt_plugin_i18n_1fba523a */ "./plugins/i18n.js");














function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











/* Plugins */

 // Source: ../plugins/vue-particles.js (mode: 'client')

 // Source: ../plugins/i18n.js (mode: 'client')
// Component: <ClientOnly>

vue__WEBPACK_IMPORTED_MODULE_13__["default"].component(vue_client_only__WEBPACK_IMPORTED_MODULE_15___default.a.name, vue_client_only__WEBPACK_IMPORTED_MODULE_15___default.a); // TODO: Remove in Nuxt 3: <NoSsr>

vue__WEBPACK_IMPORTED_MODULE_13__["default"].component(vue_no_ssr__WEBPACK_IMPORTED_MODULE_16___default.a.name, _objectSpread({}, vue_no_ssr__WEBPACK_IMPORTED_MODULE_16___default.a, {
  render: function render(h, ctx) {
    if ( true && !vue_no_ssr__WEBPACK_IMPORTED_MODULE_16___default.a._warned) {
      vue_no_ssr__WEBPACK_IMPORTED_MODULE_16___default.a._warned = true;
      console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead");
    }

    return vue_no_ssr__WEBPACK_IMPORTED_MODULE_16___default.a.render(h, ctx);
  }
})); // Component: <NuxtChild>

vue__WEBPACK_IMPORTED_MODULE_13__["default"].component(_components_nuxt_child_js__WEBPACK_IMPORTED_MODULE_18__["default"].name, _components_nuxt_child_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
vue__WEBPACK_IMPORTED_MODULE_13__["default"].component('NChild', _components_nuxt_child_js__WEBPACK_IMPORTED_MODULE_18__["default"]); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>`

vue__WEBPACK_IMPORTED_MODULE_13__["default"].component(_components_nuxt_js__WEBPACK_IMPORTED_MODULE_20__["default"].name, _components_nuxt_js__WEBPACK_IMPORTED_MODULE_20__["default"]); // vue-meta configuration

vue__WEBPACK_IMPORTED_MODULE_13__["default"].use(vue_meta__WEBPACK_IMPORTED_MODULE_14__["default"], {
  keyName: 'head',
  // the component option name that vue-meta looks for meta info on.
  attribute: 'data-n-head',
  // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-n-head-ssr',
  // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag

});
var defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": true,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

function createApp(_x) {
  return _createApp.apply(this, arguments);
}

function _createApp() {
  _createApp = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(ssrContext) {
    var router, app, next, route, path, inject;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_router_js__WEBPACK_IMPORTED_MODULE_17__["createRouter"])(ssrContext);

          case 2:
            router = _context2.sent;
            app = _objectSpread({
              router: router,
              nuxt: {
                defaultTransition: defaultTransition,
                transitions: [defaultTransition],
                setTransitions: function setTransitions(transitions) {
                  if (!Array.isArray(transitions)) {
                    transitions = [transitions];
                  }

                  transitions = transitions.map(function (transition) {
                    if (!transition) {
                      transition = defaultTransition;
                    } else if (typeof transition === 'string') {
                      transition = Object.assign({}, defaultTransition, {
                        name: transition
                      });
                    } else {
                      transition = Object.assign({}, defaultTransition, transition);
                    }

                    return transition;
                  });
                  this.$options.nuxt.transitions = transitions;
                  return transitions;
                },
                err: null,
                dateErr: null,
                error: function error(err) {
                  err = err || null;
                  app.context._errored = Boolean(err);
                  err = err ? Object(_utils__WEBPACK_IMPORTED_MODULE_22__["normalizeError"])(err) : null;
                  var nuxt = this.nuxt || this.$options.nuxt;
                  nuxt.dateErr = Date.now();
                  nuxt.err = err; // Used in src/server.js

                  if (ssrContext) ssrContext.nuxt.error = err;
                  return err;
                }
              }
            }, _App_js__WEBPACK_IMPORTED_MODULE_21__["default"]);
            next = ssrContext ? ssrContext.next : function (location) {
              return app.router.push(location);
            }; // Resolve route

            if (ssrContext) {
              route = router.resolve(ssrContext.url).route;
            } else {
              path = Object(_utils__WEBPACK_IMPORTED_MODULE_22__["getLocation"])(router.options.base);
              route = router.resolve(path).route;
            } // Set context to app.context


            _context2.next = 8;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_22__["setContext"])(app, {
              route: route,
              next: next,
              error: app.nuxt.error.bind(app),
              payload: ssrContext ? ssrContext.payload : undefined,
              req: ssrContext ? ssrContext.req : undefined,
              res: ssrContext ? ssrContext.res : undefined,
              beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
              ssrContext: ssrContext
            });

          case 8:
            inject = function inject(key, value) {
              if (!key) throw new Error('inject(key, value) has no key provided');
              if (typeof value === 'undefined') throw new Error('inject(key, value) has no value provided');
              key = '$' + key; // Add into app

              app[key] = value; // Check if plugin not already installed

              var installKey = '__nuxt_' + key + '_installed__';
              if (vue__WEBPACK_IMPORTED_MODULE_13__["default"][installKey]) return;
              vue__WEBPACK_IMPORTED_MODULE_13__["default"][installKey] = true; // Call Vue.use() to install the plugin into vm

              vue__WEBPACK_IMPORTED_MODULE_13__["default"].use(function () {
                if (!vue__WEBPACK_IMPORTED_MODULE_13__["default"].prototype.hasOwnProperty(key)) {
                  Object.defineProperty(vue__WEBPACK_IMPORTED_MODULE_13__["default"].prototype, key, {
                    get: function get() {
                      return this.$root.$options[key];
                    }
                  });
                }
              });
            }; // Plugin execution


            if (!( true && typeof nuxt_plugin_vueparticles_5824b087__WEBPACK_IMPORTED_MODULE_23__["default"] === 'function')) {
              _context2.next = 12;
              break;
            }

            _context2.next = 12;
            return Object(nuxt_plugin_vueparticles_5824b087__WEBPACK_IMPORTED_MODULE_23__["default"])(app.context, inject);

          case 12:
            if (!( true && typeof nuxt_plugin_i18n_1fba523a__WEBPACK_IMPORTED_MODULE_24__["default"] === 'function')) {
              _context2.next = 15;
              break;
            }

            _context2.next = 15;
            return Object(nuxt_plugin_i18n_1fba523a__WEBPACK_IMPORTED_MODULE_24__["default"])(app.context, inject);

          case 15:
            if (true) {
              _context2.next = 18;
              break;
            }

            _context2.next = 18;
            return new Promise(function (resolve, reject) {
              router.push(ssrContext.url, resolve, function () {
                // navigated to a different route in router guard
                var unregister = router.afterEach(
                /*#__PURE__*/
                function () {
                  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(to, from, next) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            ssrContext.url = to.fullPath;
                            _context.next = 3;
                            return Object(_utils__WEBPACK_IMPORTED_MODULE_22__["getRouteData"])(to);

                          case 3:
                            app.context.route = _context.sent;
                            app.context.params = to.params || {};
                            app.context.query = to.query || {};
                            unregister();
                            resolve();

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2, _x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }());
              });
            });

          case 18:
            return _context2.abrupt("return", {
              app: app,
              router: router
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createApp.apply(this, arguments);
}



/***/ }),

/***/ "./.nuxt/middleware.js":
/*!*****************************!*\
  !*** ./.nuxt/middleware.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var middleware = {};
/* harmony default export */ __webpack_exports__["default"] = (middleware);

/***/ }),

/***/ "./.nuxt/router.js":
/*!*************************!*\
  !*** ./.nuxt/router.js ***!
  \*************************/
/*! exports provided: routerOptions, createRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerOptions", function() { return routerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return createRouter; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./.nuxt/utils.js");
/* harmony import */ var _router_scrollBehavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.scrollBehavior.js */ "./.nuxt/router.scrollBehavior.js");





var _15cdf1e9 = function _15cdf1e9() {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["interopDefault"])(__webpack_require__.e(/*! import() | pages/about */ "pages/about").then(__webpack_require__.bind(null, /*! ../pages/about.vue */ "./pages/about.vue")));
};

var _67b66aba = function _67b66aba() {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["interopDefault"])(__webpack_require__.e(/*! import() | pages/participate */ "pages/participate").then(__webpack_require__.bind(null, /*! ../pages/participate.vue */ "./pages/participate.vue")));
};

var _3585ccae = function _3585ccae() {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["interopDefault"])(__webpack_require__.e(/*! import() | pages/index */ "pages/index").then(__webpack_require__.bind(null, /*! ../pages/index.vue */ "./pages/index.vue")));
};

vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: _router_scrollBehavior_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  routes: [{
    path: "/about",
    component: _15cdf1e9,
    name: "about"
  }, {
    path: "/participate",
    component: _67b66aba,
    name: "participate"
  }, {
    path: "/",
    component: _3585ccae,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"](routerOptions);
}

/***/ }),

/***/ "./.nuxt/router.scrollBehavior.js":
/*!****************************************!*\
  !*** ./.nuxt/router.scrollBehavior.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./.nuxt/utils.js");



if (true) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'; // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.

    window.addEventListener('beforeunload', function () {
      window.history.scrollRestoration = 'auto';
    }); // Setting scrollRestoration to manual again when returning to this page.

    window.addEventListener('load', function () {
      window.history.scrollRestoration = 'manual';
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  var position = false; // if no children detected and scrollToTop is not explicitly disabled

  var Pages = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getMatchedComponents"])(to);

  if (Pages.length < 2 && Pages.every(function (Page) {
    return Page.options.scrollToTop !== false;
  })) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(function (Page) {
    return Page.options.scrollToTop;
  })) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  var nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(function () {
      return nuxt.$emit('triggerScroll');
    });
  }

  return new Promise(function (resolve) {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', function () {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        var hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});

/***/ }),

/***/ "./.nuxt/utils.js":
/*!************************!*\
  !*** ./.nuxt/utils.js ***!
  \************************/
/*! exports provided: empty, globalHandleError, interopDefault, applyAsyncData, sanitizeComponent, getMatchedComponents, getMatchedComponentsInstances, flatMapComponents, resolveRouteComponents, getRouteData, setContext, middlewareSeries, promisify, getLocation, urlJoin, compile, getQueryDiff, normalizeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalHandleError", function() { return globalHandleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interopDefault", function() { return interopDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAsyncData", function() { return applyAsyncData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponent", function() { return sanitizeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchedComponents", function() { return getMatchedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchedComponentsInstances", function() { return getMatchedComponentsInstances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatMapComponents", function() { return flatMapComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveRouteComponents", function() { return resolveRouteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouteData", function() { return getRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middlewareSeries", function() { return middlewareSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promisify", function() { return promisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlJoin", function() { return urlJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDiff", function() { return getQueryDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeError", function() { return normalizeError; });
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");
/* harmony import */ var core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_repeat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");





















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (true) {
  window.onNuxtReadyCbs = [];

  window.onNuxtReady = function (cb) {
    window.onNuxtReadyCbs.push(cb);
  };
}

function empty() {}
function globalHandleError(error) {
  if (vue__WEBPACK_IMPORTED_MODULE_20__["default"].config.errorHandler) {
    vue__WEBPACK_IMPORTED_MODULE_20__["default"].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(function (m) {
    return m.default || m;
  });
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  var ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    var data = ComponentData.call(this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return _objectSpread({}, data, {}, asyncData);
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = vue__WEBPACK_IMPORTED_MODULE_20__["default"].extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // For debugging purpose


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
}
function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.instances).map(function (key) {
      matches && matches.push(index);
      return m.instances[key];
    });
  }));
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).reduce(function (promises, key) {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route,
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__["default"])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(Component, instance, match, key) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              match.components[key] = Component = sanitizeComponent(Component);
              return _context.abrupt("return", typeof fn === 'function' ? fn(Component, instance, match, key) : Component);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
}
function getRouteData(_x5) {
  return _getRouteData.apply(this, arguments);
}

function _getRouteData() {
  _getRouteData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(route) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (route) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            _context2.next = 4;
            return resolveRouteComponents(route);

          case 4:
            return _context2.abrupt("return", _objectSpread({}, route, {
              meta: getMatchedComponents(route).map(function (Component, index) {
                return _objectSpread({}, Component.options.meta, {}, (route.matched[index] || {}).meta);
              })
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRouteData.apply(this, arguments);
}

function setContext(_x6, _x7) {
  return _setContext.apply(this, arguments);
}

function _setContext() {
  _setContext = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__["default"])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(app, context) {
    var _ref2, _ref3, currentRouteData, fromRouteData;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // If context not defined, create it
            if (!app.context) {
              app.context = {
                isStatic: false,
                isDev: true,
                isHMR: false,
                app: app,
                payload: context.payload,
                error: context.error,
                base: '/',
                env: {}
              }; // Only set once

              if (context.req) {
                app.context.req = context.req;
              }

              if (context.res) {
                app.context.res = context.res;
              }

              if (context.ssrContext) {
                app.context.ssrContext = context.ssrContext;
              }

              app.context.redirect = function (status, path, query) {
                if (!status) {
                  return;
                }

                app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

                var pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(path);

                if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                  query = path || {};
                  path = status;
                  pathType = Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(path);
                  status = 302;
                }

                if (pathType === 'object') {
                  path = app.router.resolve(path).route.fullPath;
                } // "/absolute/route", "./relative/route" or "../relative/route"


                if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                  app.context.next({
                    path: path,
                    query: query,
                    status: status
                  });
                } else {
                  path = formatUrl(path, query);

                  if (false) {}

                  if (true) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                    window.location.replace(path); // Throw a redirect error

                    throw new Error('ERR_REDIRECT');
                  }
                }
              };

              if (false) {}

              if (true) {
                app.context.nuxtState = window.__NUXT__;
              }
            } // Dynamic keys


            _context3.next = 3;
            return Promise.all([getRouteData(context.route), getRouteData(context.from)]);

          case 3:
            _ref2 = _context3.sent;
            _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2);
            currentRouteData = _ref3[0];
            fromRouteData = _ref3[1];

            if (context.route) {
              app.context.route = currentRouteData;
            }

            if (context.from) {
              app.context.from = fromRouteData;
            }

            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = Boolean(context.isHMR);
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _setContext.apply(this, arguments);
}

function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  var promise;

  if (fn.length === 2) {
    console.warn('Callback-based asyncData, fetch or middleware calls are deprecated. ' + 'Please switch to promises or async/await syntax'); // fn(context, callback)

    promise = new Promise(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (!promise || !(promise instanceof Promise) && typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  return promise;
} // Imported from vue-router

function getLocation(base, mode) {
  var path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
}
function urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
function getQueryDiff(toQuery, fromQuery) {
  var diff = {};

  var queries = _objectSpread({}, toQuery, {}, fromQuery);

  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  var message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = "[".concat(err.constructor.name, "]");
    }
  } else {
    message = err.message || err;
  }

  return _objectSpread({}, err, {
    message: message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__["default"])(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var _i = 0; _i < tokens.length; _i++) {
      var token = tokens[_i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name || 'pathMatch'];
      var segment = void 0;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[_i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[_i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  var protocol;
  var index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  var parts = url.split('/');
  var result = (protocol ? protocol + '://' : '//') + parts.shift();
  var path = parts.filter(Boolean).join('/');
  var hash;
  parts = path.split('#');

  if (parts.length === 2) {
    var _parts = parts;

    var _parts2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_parts, 2);

    path = _parts2[0];
    hash = _parts2[1];
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(function (key) {
    var val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(function (val2) {
        return [key, '=', val2].join('');
      }).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

/***/ }),

/***/ "./assets/discord.svg":
/*!****************************!*\
  !*** ./assets/discord.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/discord.svg";

/***/ }),

/***/ "./assets/dropdown-arrow.svg":
/*!***********************************!*\
  !*** ./assets/dropdown-arrow.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjkyMDIgMS4zMjI0Mkw4LjUwNDI2IDE0LjA0MDdMMS4xOTc5MSAxLjI1OTE1TDE1LjkyMDIgMS4zMjI0MloiIGZpbGw9IiMzRDNEM0QiIHN0cm9rZT0iIzNEM0QzRCIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./assets/github-black-logo.svg":
/*!**************************************!*\
  !*** ./assets/github-black-logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/github-black-logo.svg";

/***/ }),

/***/ "./assets/github-purple-logo.svg":
/*!***************************************!*\
  !*** ./assets/github-purple-logo.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/github-purple-logo.svg";

/***/ }),

/***/ "./assets/github.svg":
/*!***************************!*\
  !*** ./assets/github.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/github.svg";

/***/ }),

/***/ "./assets/logo.svg":
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ "./assets/mail.svg":
/*!*************************!*\
  !*** ./assets/mail.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjA5NzkgNDYuMTk1OEMzNi4zMDIzIDQ2LjE5NTggNDYuMTk1OCAzNi4zMDIyIDQ2LjE5NTggMjQuMDk3OUM0Ni4xOTU4IDExLjg5MzYgMzYuMzAyMyAyIDI0LjA5NzkgMkMxMS44OTM2IDIgMiAxMS44OTM2IDIgMjQuMDk3OUMyIDM2LjMwMjIgMTEuODkzNiA0Ni4xOTU4IDI0LjA5NzkgNDYuMTk1OFoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTExLjA2NzEgMTQuNzlWMTQuOTM2OUwyMS44NzA0IDI0Ljg4NTVDMjMuMTA2NSAyNi4wMjM3IDI1LjA2NDYgMjYuMDIzOSAyNi4zMDA3IDI0Ljg4NTZMMzcuMTI4NyAxNC45MTQ0VjE0Ljc5SDExLjA2NzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzcuMTI4NyAxNi44MDkxTDI5LjA3OTMgMjQuMjIxNEwzNy4xMjg3IDMyLjI3MDhWMTYuODA5MVpNMTEuMDY3MSAxNi44MzJWMzIuNDRMMTkuMTkyNiAyNC4zMTQ1TDExLjA2NzEgMTYuODMyWk0yOC4wNTE1IDI1LjE2OEwyNy4zMjkyIDI1LjgzM0MyNS41NDEgMjcuNDc5OCAyMi42Mjk3IDI3LjQ3OTggMjAuODQxNSAyNS44MzNMMjAuMjIwNSAyNS4yNjEzTDEyLjA3NjIgMzMuNDA1NUgzNi4yODg4TDI4LjA1MTUgMjUuMTY4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./assets/medium.svg":
/*!***************************!*\
  !*** ./assets/medium.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/medium.svg";

/***/ }),

/***/ "./assets/reddit.svg":
/*!***************************!*\
  !*** ./assets/reddit.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/reddit.svg";

/***/ }),

/***/ "./assets/telegram.svg":
/*!*****************************!*\
  !*** ./assets/telegram.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/telegram.svg";

/***/ }),

/***/ "./assets/twitter.svg":
/*!****************************!*\
  !*** ./assets/twitter.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/twitter.svg";

/***/ }),

/***/ "./assets/white-logo.svg":
/*!*******************************!*\
  !*** ./assets/white-logo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/white-logo.svg";

/***/ }),

/***/ "./components/Footer.vue":
/*!*******************************!*\
  !*** ./components/Footer.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=0d2d6594&scoped=true& */ "./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& */ "./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d2d6594",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0d2d6594')) {
      api.createRecord('0d2d6594', component.options)
    } else {
      api.reload('0d2d6594', component.options)
    }
    module.hot.accept(/*! ./Footer.vue?vue&type=template&id=0d2d6594&scoped=true& */ "./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=0d2d6594&scoped=true& */ "./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true&");
(function () {
      api.rerender('0d2d6594', {
        render: _Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_0d2d6594_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true&":
/*!**************************************************************************!*\
  !*** ./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=0d2d6594&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0d2d6594_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/NavBar.vue":
/*!*******************************!*\
  !*** ./components/NavBar.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=0957edea&scoped=true& */ "./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true&");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js& */ "./components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& */ "./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0957edea",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0957edea')) {
      api.createRecord('0957edea', component.options)
    } else {
      api.reload('0957edea', component.options)
    }
    module.hot.accept(/*! ./NavBar.vue?vue&type=template&id=0957edea&scoped=true& */ "./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=0957edea&scoped=true& */ "./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true&");
(function () {
      api.rerender('0957edea', {
        render: _NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/NavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/NavBar.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./components/NavBar.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_0957edea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true&":
/*!**************************************************************************!*\
  !*** ./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=template&id=0957edea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_0957edea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./layouts/default.vue":
/*!*****************************!*\
  !*** ./layouts/default.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.vue?vue&type=template&id=314f53c6& */ "./layouts/default.vue?vue&type=template&id=314f53c6&");
/* harmony import */ var _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.vue?vue&type=script&lang=js& */ "./layouts/default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default.vue?vue&type=style&index=0&lang=css& */ "./layouts/default.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('314f53c6')) {
      api.createRecord('314f53c6', component.options)
    } else {
      api.reload('314f53c6', component.options)
    }
    module.hot.accept(/*! ./default.vue?vue&type=template&id=314f53c6& */ "./layouts/default.vue?vue&type=template&id=314f53c6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.vue?vue&type=template&id=314f53c6& */ "./layouts/default.vue?vue&type=template&id=314f53c6&");
(function () {
      api.rerender('314f53c6', {
        render: _default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "layouts/default.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./layouts/default.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./layouts/default.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./layouts/default.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************!*\
  !*** ./layouts/default.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--3-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./layouts/default.vue?vue&type=template&id=314f53c6&":
/*!************************************************************!*\
  !*** ./layouts/default.vue?vue&type=template&id=314f53c6& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=template&id=314f53c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=template&id=314f53c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_template_id_314f53c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'nuxt-build-indicator',
  data: function data() {
    return {
      building: false,
      progress: 0,
      animatedProgress: 0,
      reconnectAttempts: 0
    };
  },
  mounted: function mounted() {
    if ((typeof EventSource === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(EventSource)) === undefined) {
      return; // Unsupported
    }

    this.sseConnect();
  },
  beforeDestroy: function beforeDestroy() {
    this.sseClose();
    clearInterval(this._progressAnimation);
  },
  computed: {
    options: function options() {
      return {
        "position": "bottom-right",
        "backgroundColor": "#2E495E",
        "color": "#00C48D"
      };
    },
    indicatorStyle: function indicatorStyle() {
      var _ref;

      var _this$options$positio = this.options.position.split('-'),
          _this$options$positio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$options$positio, 2),
          d1 = _this$options$positio2[0],
          d2 = _this$options$positio2[1];

      return _ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, d1, '20px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, d2, '20px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 'background-color', this.options.backgroundColor), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "color", this.options.color), _ref;
    }
  },
  watch: {
    progress: function progress(val, oldVal) {
      var _this = this;

      // Average progress may decrease but ignore it!
      if (val < oldVal) {
        return;
      } // Cancel old animation


      clearInterval(this._progressAnimation); // Jump to edge immediately

      if (val < 10 || val > 90) {
        this.animatedProgress = val;
        return;
      } // Animate to value


      this._progressAnimation = setInterval(function () {
        var diff = _this.progress - _this.animatedProgress;

        if (diff > 0) {
          _this.animatedProgress++;
        } else {
          clearInterval(_this._progressAnimation);
        }
      }, 50);
    }
  },
  methods: {
    sseConnect: function sseConnect() {
      var _this2 = this;

      if (this._connecting) {
        return;
      }

      this._connecting = true;
      this.sse = new EventSource('/_loading/sse');
      this.sse.addEventListener('message', function (event) {
        return _this2.onSseMessage(event);
      });
    },
    onSseMessage: function onSseMessage(message) {
      var _this3 = this;

      var data = JSON.parse(message.data);
      if (!data.states) return;
      this.progress = Math.round(data.states.reduce(function (p, s) {
        return p + s.progress;
      }, 0) / data.states.length);

      if (!data.allDone) {
        this.building = true;
      } else {
        this.$nextTick(function () {
          _this3.building = false;
          _this3.animatedProgress = 0;
          _this3.progress = 0;
          clearInterval(_this3._progressAnimation);
        });
      }
    },
    sseClose: function sseClose() {
      if (this.sse) {
        this.sse.close();
        delete this.sse;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head: function head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }]
    };
  },
  computed: {
    statusCode: function statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message: function message() {
      return this.error.message || "Error";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'NuxtLoading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left: function left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
  },
  methods: {
    clear: function clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start: function start() {
      var _this = this;

      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(function () {
          return _this.startTimer();
        }, this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get: function get() {
      return this.percent;
    },
    increase: function increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease: function decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    resume: function resume() {
      this.startTimer();
      return this;
    },
    finish: function finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      this.clear();
      setTimeout(function () {
        _this2.show = false;

        _this2.$nextTick(function () {
          _this2.percent = 0;
          _this2.reversed = false;
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSucceed = false;
      return this;
    },
    startTimer: function startTimer() {
      var _this3 = this;

      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(function () {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (_this3.skipTimerCount > 0) {
          _this3.skipTimerCount--;
          return;
        }

        if (_this3.reversed) {
          _this3.decrease(_this3._cut);
        } else {
          _this3.increase(_this3._cut);
        }

        if (_this3.continuous) {
          if (_this3.percent >= 100) {
            _this3.skipTimerCount = 1;
            _this3.reversed = !_this3.reversed;
          } else if (_this3.percent <= 0) {
            _this3.skipTimerCount = 1;
            _this3.reversed = !_this3.reversed;
          }
        }
      }, 100);
    }
  },
  render: function render(h) {
    var el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          'width': this.percent + '%',
          'left': this.left
        }
      });
    }

    return el;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      hover: false,
      displayBox: false
    };
  },
  methods: {
    displayDropDown: function displayDropDown() {
      this.displayBox = !this.displayBox;
    },
    changeLanguage: function changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.displayBox = !this.displayBox;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/components/NavBar.vue */ "./components/NavBar.vue");
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Footer.vue */ "./components/Footer.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavBar: _components_NavBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/main.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./styles/main.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".primary {\n  display: inline-block;\n  background-color: #6600de;\n  color: white;\n  border: none;\n  padding: 16px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 30px; }\n\n.seconday-purple {\n  display: inline-block;\n  background-color: none;\n  color: #6600de;\n  border: 1px solid #6600de;\n  padding: 16px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer; }\n\n.secondary-white {\n  display: inline-block;\n  background-color: none;\n  color: white;\n  border: 1px solid white;\n  padding: 16px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer; }\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/styles/main.scss","/Users/user/Desktop/Witnet/website/styles/colors.scss"],"names":[],"mappings":"AAGA;EACE,qBAAqB;EACrB,yBCJuB;EDKvB,YCDW;EDEX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cCjBuB;EDkBvB,yBClBuB;EDmBvB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe,EAAA;;AAGjB;EACE,qBAAqB;EACrB,sBAAsB;EACtB,YCxBW;EDyBX,uBCzBW;ED0BX,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,eAAe,EAAA","file":"main.scss","sourcesContent":["@import \"colors\";\n\n//PRIMARY BUTTON\n.primary {\n  display: inline-block;\n  background-color: $purple;\n  color: $white;\n  border: none;\n  padding: 16px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 30px;\n}\n//SECONDAY PURPLE BUTTON\n.seconday-purple {\n  display: inline-block;\n  background-color: none;\n  color: $purple;\n  border: 1px solid $purple;\n  padding: 16px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n//SECONDAY WHITE BUTTON\n.secondary-white {\n  display: inline-block;\n  background-color: none;\n  color: $white;\n  border: 1px solid $white;\n  padding: 16px 24px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}","//purple\n$purple: rgb(102, 0, 222);\n$purple-1: rgba(104, 0, 222, 0.096);\n$purple-2: rgba(100, 45, 163, 0.24);\n//grey and white\n$white: white;\n$grey-1: rgb(244, 244, 244);\n$grey-2: rgb(61, 61, 61);"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "footer[data-v-0d2d6594] {\n  color: white;\n  padding: 40px;\n  background-color: rgba(100, 45, 163, 0.24);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nfooter .footer-logo[data-v-0d2d6594] {\n    width: 250px;\n}\nfooter .footer-description[data-v-0d2d6594] {\n    margin: 30px 0px;\n    font-size: 14px;\n    width: 450px;\n    display: flex;\n    flex-direction: column;\n}\nfooter .social-bar[data-v-0d2d6594] {\n    padding: 5px;\n    border-bottom: 1px solid white;\n}\nfooter .social-bar .social[data-v-0d2d6594] {\n      width: 30px;\n      margin: 5px;\n}\nfooter .read-btn[data-v-0d2d6594] {\n    margin-top: 56px;\n}\nfooter .column-right[data-v-0d2d6594] {\n    text-align: center;\n}\n@media screen and (max-width: 1200px) {\nfooter[data-v-0d2d6594] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/components/Footer.vue","/Users/user/Desktop/Witnet/website/styles/colors.scss"],"names":[],"mappings":"AAwDA;EACE,YCpDW;EDqDX,aAAa;EACb,0CCxDiC;EDyDjC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AAAA;AANrB;IAQI,YAAY;AAAA;AARhB;IAWI,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,aAAa;IACb,sBAAsB;AAAA;AAf1B;IAkBI,YAAY;IACZ,8BCtES;AAAA;ADmDb;MAqBM,WAAW;MACX,WAAW;AAAA;AAtBjB;IA0BI,gBAAgB;AAAA;AA1BpB;IA6BI,kBAAkB;AAAA;AAGtB;AACE;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAAA;AACvB","file":"Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '@/styles/colors.scss';\n\nfooter {\n  color: $white;\n  padding: 40px;\n  background-color: $purple-2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .footer-logo {\n    width: 250px;\n  }\n  .footer-description {\n    margin: 30px 0px;\n    font-size: 14px;\n    width: 450px;\n    display: flex;\n    flex-direction: column;\n  }\n  .social-bar {\n    padding: 5px;\n    border-bottom: 1px solid $white;\n    .social {\n      width: 30px;\n      margin: 5px;\n    }\n  }\n  .read-btn {\n    margin-top: 56px;\n  }\n  .column-right {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 1200px) {\n  footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n","//purple\n$purple: rgb(102, 0, 222);\n$purple-1: rgba(104, 0, 222, 0.096);\n$purple-2: rgba(100, 45, 163, 0.24);\n//grey and white\n$white: white;\n$grey-1: rgb(244, 244, 244);\n$grey-2: rgb(61, 61, 61);"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "nav[data-v-0957edea] {\n  display: flex;\n  height: 10vh;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\nnav .logo[data-v-0957edea] {\n    margin: 40px 32px;\n    width: 250px;\n}\nnav .tab-container[data-v-0957edea] {\n    list-style: none;\n    display: flex;\n    align-items: center;\n}\nnav .tab-container li a[data-v-0957edea] {\n      display: flex;\n      color: #3d3d3d;\n      align-items: center;\n      text-decoration: none;\n      padding: 24px 32px;\n}\nnav .tab-container li a img[data-v-0957edea] {\n        width: 20px;\n        margin: auto 8px;\n}\nnav .tab-container li a[data-v-0957edea]:hover {\n        color: #6600de;\n}\nnav .tab-container .language-btn[data-v-0957edea] {\n      font-size: 16px;\n      padding: 0 8px;\n      display: flex;\n      height: 30px;\n      margin-right: 1vw;\n      align-items: center;\n      text-justify: center;\n      background-color: rgba(104, 0, 222, 0.096);\n      color: #3d3d3d;\n      border: none;\n      cursor: pointer;\n}\nnav .tab-container .language-btn[data-v-0957edea]:active {\n        outline: none;\n}\nnav .tab-container .language-btn[data-v-0957edea]:hover {\n        opacity: 0.75;\n}\nnav .tab-container .language-btn img[data-v-0957edea] {\n        padding-left: 8px;\n        width: 8px;\n}\nnav .tab-container .smooth-in-move[data-v-0957edea] {\n      transition: all 600ms ease-in-out 50ms;\n}\nnav .tab-container .smooth-in-enter-active[data-v-0957edea] {\n      transition: all 400ms ease-out;\n}\nnav .tab-container .smooth-in-leave-active[data-v-0957edea] {\n      transition: all 200ms ease-in;\n      position: absolute;\n      z-index: 0;\n}\nnav .tab-container .smooth-in-enter[data-v-0957edea],\n    nav .tab-container .smooth-in-leave-to[data-v-0957edea] {\n      opacity: 0;\n}\nnav .tab-container .drop-down[data-v-0957edea] {\n      position: absolute;\n      z-index: 50;\n      margin-top: 16px;\n      display: flex;\n      flex-direction: column;\n}\nnav .tab-container .drop-down .drop-down-item[data-v-0957edea] {\n        background-color: transparent;\n        font-size: 16px;\n        cursor: pointer;\n        border: none;\n        background-color: none;\n        color: #3d3d3d;\n        padding: 8px;\n        border-bottom: 1px solid #3d3d3d;\n}\nnav .tab-container .drop-down .drop-down-item[data-v-0957edea]:hover {\n          opacity: 0.75;\n}\nnav .tab-container .drop-down .drop-down-item[data-v-0957edea]:active {\n          box-shadow: none;\n          outline: none;\n}\n@media screen and (max-width: 1200px) {\nnav[data-v-0957edea] {\n    display: flex;\n    flex-direction: column;\n}\nnav .logo[data-v-0957edea] {\n      margin: 40px 32px;\n      width: 250px;\n}\nnav .tab-container[data-v-0957edea] {\n      opacity: 0;\n      list-style: none;\n      display: flex;\n      align-items: center;\n}\nnav .tab-container li a[data-v-0957edea] {\n        background-color: white;\n        display: flex;\n        color: #3d3d3d;\n        align-items: center;\n        text-decoration: none;\n        padding: 24px 32px;\n}\nnav .tab-container li a img[data-v-0957edea] {\n          width: 20px;\n          margin: auto 8px;\n}\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/components/NavBar.vue","/Users/user/Desktop/Witnet/website/styles/colors.scss"],"names":[],"mappings":"AA4EA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AAAA;AALrB;IAOI,iBAAiB;IACjB,YAAY;AAAA;AARhB;IAWI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AAAA;AAbvB;MAeM,aAAa;MACb,cAAsB;MACtB,mBAAmB;MACnB,qBAAqB;MACrB,kBAAkB;AAAA;AAnBxB;QAqBQ,WAAW;QACX,gBAAgB;AAAA;AAtBxB;QAyBQ,cCpGiB;AAAA;AD2EzB;MA6BM,eAAe;MACf,cAAc;MACd,aAAa;MACb,YAAY;MACZ,iBAAiB;MACjB,mBAAmB;MACnB,oBAAoB;MACpB,0CC9G6B;MD+G7B,cAAsB;MACtB,YAAY;MACZ,eAAe;AAAA;AAvCrB;QAyCQ,aAAa;AAAA;AAzCrB;QA4CQ,aAAa;AAAA;AA5CrB;QA+CQ,iBAAiB;QACjB,UAAU;AAAA;AAhDlB;MAoDM,sCAAsC;AAAA;AApD5C;MAuDM,8BAA8B;AAAA;AAvDpC;MA0DM,6BAA6B;MAC7B,kBAAkB;MAClB,UAAU;AAAA;AA5DhB;;MAgEM,UAAU;AAAA;AAhEhB;MAmEM,kBAAkB;MAClB,WAAW;MACX,gBAAgB;MAChB,aAAa;MACb,sBAAsB;AAAA;AAvE5B;QAyEQ,6BAA6B;QAC7B,eAAe;QACf,eAAe;QACf,YAAY;QACZ,sBAAsB;QACtB,cAAsB;QACtB,YAAY;QACZ,gCAAwC;AAAA;AAhFhD;UAkFU,aAAa;AAAA;AAlFvB;UAqFU,gBAAgB;UAChB,aAAa;AAAA;AAMvB;AACE;IACE,aAAa;IACb,sBAAsB;AAAA;AAFxB;MAKI,iBAAiB;MACjB,YAAY;AAAA;AANhB;MASI,UAAU;MACV,gBAAgB;MAChB,aAAa;MACb,mBAAmB;AAAA;AAZvB;QAcM,uBClLK;QDmLL,aAAa;QACb,cAAsB;QACtB,mBAAmB;QACnB,qBAAqB;QACrB,kBAAkB;AAAA;AAnBxB;UAqBQ,WAAW;UACX,gBAAgB;AAAA;AACjB","file":"NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '@/styles/colors.scss';\n\nnav {\n  display: flex;\n  height: 10vh;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 50px;\n  .logo {\n    margin: 40px 32px;\n    width: 250px;\n  }\n  .tab-container {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    li a {\n      display: flex;\n      color: rgb(61, 61, 61);\n      align-items: center;\n      text-decoration: none;\n      padding: 24px 32px;\n      & img {\n        width: 20px;\n        margin: auto 8px;\n      }\n      &:hover {\n        color: $purple;\n      }\n    }\n    .language-btn {\n      font-size: 16px;\n      padding: 0 8px;\n      display: flex;\n      height: 30px;\n      margin-right: 1vw;\n      align-items: center;\n      text-justify: center;\n      background-color: $purple-1;\n      color: rgb(61, 61, 61);\n      border: none;\n      cursor: pointer;\n      &:active {\n        outline: none;\n      }\n      &:hover {\n        opacity: 0.75;\n      }\n      & img {\n        padding-left: 8px;\n        width: 8px;\n      }\n    }\n    .smooth-in-move {\n      transition: all 600ms ease-in-out 50ms;\n    }\n    .smooth-in-enter-active {\n      transition: all 400ms ease-out;\n    }\n    .smooth-in-leave-active {\n      transition: all 200ms ease-in;\n      position: absolute;\n      z-index: 0;\n    }\n    .smooth-in-enter,\n    .smooth-in-leave-to {\n      opacity: 0;\n    }\n    .drop-down {\n      position: absolute;\n      z-index: 50;\n      margin-top: 16px;\n      display: flex;\n      flex-direction: column;\n      & .drop-down-item {\n        background-color: transparent;\n        font-size: 16px;\n        cursor: pointer;\n        border: none;\n        background-color: none;\n        color: rgb(61, 61, 61);\n        padding: 8px;\n        border-bottom: 1px solid rgb(61, 61, 61);\n        &:hover {\n          opacity: 0.75;\n        }\n        &:active {\n          box-shadow: none;\n          outline: none;\n        }\n      }\n    }\n  }\n}\n@media screen and (max-width: 1200px) {\n  nav {\n    display: flex;\n    flex-direction: column;\n\n    .logo {\n      margin: 40px 32px;\n      width: 250px;\n    }\n    .tab-container {\n      opacity: 0;\n      list-style: none;\n      display: flex;\n      align-items: center;\n      li a {\n        background-color: $white;\n        display: flex;\n        color: rgb(61, 61, 61);\n        align-items: center;\n        text-decoration: none;\n        padding: 24px 32px;\n        & img {\n          width: 20px;\n          margin: auto 8px;\n        }\n      }\n    }\n  }\n}\n","//purple\n$purple: rgb(102, 0, 222);\n$purple-1: rgba(104, 0, 222, 0.096);\n$purple-2: rgba(100, 45, 163, 0.24);\n//grey and white\n$white: white;\n$grey-1: rgb(244, 244, 244);\n$grey-2: rgb(61, 61, 61);"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "\n.nuxt__build_indicator[data-v-71e9e103] {\n  box-sizing: border-box;\n  position: fixed;\n  font-family: monospace;\n  padding: 5px 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);\n  width: 88px;\n  z-index: 2147483647;\n  font-size: 16px;\n  line-height: 1.2rem;\n}\n.v-enter-active[data-v-71e9e103], .v-leave-active[data-v-71e9e103] {\n  transition-delay: 0.2s;\n  transition-property: all;\n  transition-duration: 0.3s;\n}\n.v-leave-to[data-v-71e9e103] {\n  opacity: 0;\n  transform: translateY(20px);\n}\nsvg[data-v-71e9e103] {\n  display: inline-block;\n  vertical-align: baseline;\n  width: 1.1em;\n  position: relative;\n  top: 1px;\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/.nuxt/components/nuxt-build-indicator.vue"],"names":[],"mappings":";AA+GA;EACE,sBAAsB;EACtB,eAAe;EACf,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,2CAA2C;EAC3C,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,2BAA2B;AAC7B;AACA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,QAAQ;AACV","file":"nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nuxt__build_indicator {\n  box-sizing: border-box;\n  position: fixed;\n  font-family: monospace;\n  padding: 5px 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);\n  width: 88px;\n  z-index: 2147483647;\n  font-size: 16px;\n  line-height: 1.2rem;\n}\n.v-enter-active, .v-leave-active {\n  transition-delay: 0.2s;\n  transition-property: all;\n  transition-duration: 0.3s;\n}\n.v-leave-to {\n  opacity: 0;\n  transform: translateY(20px);\n}\nsvg {\n  display: inline-block;\n  vertical-align: baseline;\n  width: 1.1em;\n  position: relative;\n  top: 1px;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/.nuxt/components/nuxt-error.vue"],"names":[],"mappings":";AAqDA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;EAC3B,0BAA0B;EAC1B,8BAA8B;EAC9B,mCAAmC;EACnC,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,UAAU;EACV,YAAY;AACd","file":"nuxt-error.vue?vue&type=style&index=0&lang=css&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 450px;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 15px;\n  color: #47494E;\n  margin-bottom: 8px;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 21px;\n  margin-bottom: 10px;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 12px;\n  bottom: 12px;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: #fff;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/.nuxt/components/nuxt-loading.vue"],"names":[],"mappings":";AA4JA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,SAAS;EACT,UAAU;EACV,oCAAoC;EACpC,sBAAsB;EACtB,eAAe;AACjB;AAEA;EACE,gBAAgB;AAClB;AAEA;EACE,qBAAqB;AACvB","file":"nuxt-loading.vue?vue&type=style&index=0&lang=css&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 2px;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: #fff;\n  z-index: 999999;\n}\n\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n\n.nuxt-progress-failed {\n  background-color: red;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "\nhtml {\n  scroll-behavior: smooth;\n  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, sans-serif;\n  font-size: 16px;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n@media screen and (prefers-reduced-motion: reduce) {\nhtml {\n    scroll-behavior: auto;\n}\n}\n", "",{"version":3,"sources":["/Users/user/Desktop/Witnet/website/layouts/default.vue"],"names":[],"mappings":";AAqBA;EACE,uBAAuB;EACvB;+CAC6C;EAC7C,eAAe;EACf,iBAAiB;EACjB,0BAA0B;EAC1B,8BAA8B;EAC9B,kCAAkC;EAClC,mCAAmC;AACrC;AACA;AACE;IACE,qBAAqB;AACvB;AACF","file":"default.vue?vue&type=style&index=0&lang=css&","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhtml {\n  scroll-behavior: smooth;\n  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',\n    Roboto, 'Helvetica Neue', Arial, sans-serif;\n  font-size: 16px;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  html {\n    scroll-behavior: auto;\n  }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-build-indicator.vue?vue&type=template&id=71e9e103&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { appear: "" } }, [
    _vm.building
      ? _c(
          "div",
          { staticClass: "nuxt__build_indicator", style: _vm.indicatorStyle },
          [
            _c(
              "svg",
              {
                attrs: {
                  viewBox: "0 0 96 72",
                  version: "1",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                  _c("path", {
                    attrs: {
                      d:
                        "M6 66h23l1-3 21-37L40 6 6 66zM79 66h11L62 17l-5 9 22 37v3zM54 31L35 66h38z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M29 69v-1-2H6L40 6l11 20 3-6L44 3s-2-3-4-3-3 1-5 3L1 63c0 1-2 3 0 6 0 1 2 2 5 2h28c-3 0-4-1-5-2z",
                      fill: "#00C58E"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M95 63L67 14c0-1-2-3-5-3-1 0-3 0-4 3l-4 6 3 6 5-9 28 49H79a5 5 0 0 1 0 3c-2 2-5 2-5 2h16c1 0 4 0 5-2 1-1 2-3 0-6z",
                      fill: "#00C58E"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M79 69v-1-2-3L57 26l-3-6-3 6-21 37-1 3a5 5 0 0 0 0 3c1 1 2 2 5 2h40s3 0 5-2zM54 31l19 35H35l19-35z",
                      fill: "#FFF",
                      "fill-rule": "nonzero"
                    }
                  })
                ])
              ]
            ),
            _vm._v("\n    " + _vm._s(_vm.animatedProgress) + "%\n  ")
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=74e3df5b& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "__nuxt-error-page" }, [
    _c("div", { staticClass: "error" }, [
      _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "90",
            height: "90",
            fill: "#DBE1EC",
            viewBox: "0 0 48 48"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "title" }, [_vm._v(_vm._s(_vm.message))]),
      _vm._v(" "),
      _vm.statusCode === 404
        ? _c(
            "p",
            { staticClass: "description" },
            [
              _c(
                "NuxtLink",
                { staticClass: "error-link", attrs: { to: "/" } },
                [_vm._v("Back to the home page")]
              )
            ],
            1
          )
        : _c("p", { staticClass: "description" }, [
            _vm._v(
              "An error occurred while rendering the page. Check developer tools console for details."
            )
          ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c(
        "a",
        {
          attrs: {
            href: "https://nuxtjs.org",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("Nuxt.js")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=0d2d6594&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("footer", [
    _c("div", { staticClass: "column-left" }, [
      _c("img", {
        staticClass: "footer-logo",
        attrs: {
          src: __webpack_require__(/*! assets/white-logo.svg */ "./assets/white-logo.svg"),
          alt: "white witnet-logo"
        }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "footer-description" }, [
        _vm._v("\n      " + _vm._s(this.$t("footer-description")) + "\n    ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "footer-description" }, [
        _vm._v("\n      " + _vm._s(this.$t("footer-copyright")) + "\n    ")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "column-right" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "secondary-white read-btn",
          attrs: { href: "/witnet-whitepaper.pdf", target: "_blank" }
        },
        [_vm._v("\n      " + _vm._s(this.$t("read-btn")) + "\n    ")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-bar" }, [
      _c(
        "a",
        { attrs: { href: "https://twitter.com/witnet_io", target: "_blank" } },
        [
          _c("img", {
            staticClass: "social",
            attrs: { src: __webpack_require__(/*! assets/twitter.svg */ "./assets/twitter.svg"), alt: "social" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://discord.gg/X4uurfP", target: "_blank" } },
        [
          _c("img", {
            staticClass: "social",
            attrs: { src: __webpack_require__(/*! assets/discord.svg */ "./assets/discord.svg"), alt: "social" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://medium.com/witnet", target: "_blank" } },
        [
          _c("img", {
            staticClass: "social",
            attrs: { src: __webpack_require__(/*! assets/medium.svg */ "./assets/medium.svg"), alt: "social" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          attrs: {
            href: "mailto:info@witnet.foundation?subject=Witnet project",
            targer: "_blank"
          }
        },
        [
          _c("img", {
            staticClass: "social",
            attrs: { src: __webpack_require__(/*! assets/mail.svg */ "./assets/mail.svg"), alt: "social" }
          })
        ]
      ),
      _vm._v(" "),
      _c("a", { attrs: { href: "https://t.me/witnetio", target: "_blank" } }, [
        _c("img", {
          staticClass: "social",
          attrs: { src: __webpack_require__(/*! assets/telegram.svg */ "./assets/telegram.svg"), alt: "social" }
        })
      ]),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://github.com/witnet", target: "_blank" } },
        [
          _c("img", {
            staticClass: "social",
            attrs: { src: __webpack_require__(/*! assets/github.svg */ "./assets/github.svg"), alt: "social" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        { attrs: { href: "https://reddit.com/r/witnet", target: "_blank" } },
        [
          _c("img", {
            staticClass: "social",
            attrs: { src: __webpack_require__(/*! assets/reddit.svg */ "./assets/reddit.svg"), alt: "social" }
          })
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=0957edea&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "top" }, [
    _c(
      "nav",
      { staticClass: "NavBar" },
      [
        _c("nuxt-link", { staticClass: "logo-container", attrs: { to: "/" } }, [
          _c("img", {
            staticClass: "logo",
            attrs: {
              src: __webpack_require__(/*! assets/logo.svg */ "./assets/logo.svg"),
              alt: "the witnet protocol"
            }
          })
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "tab-container" }, [
          _c(
            "li",
            [
              _c("nuxt-link", { staticClass: "tab", attrs: { to: "/about" } }, [
                _vm._v("\n          " + _vm._s(this.$t("tab1")) + "\n        ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "nuxt-link",
                { staticClass: "tab", attrs: { to: "/participate" } },
                [
                  _vm._v(
                    "\n          " + _vm._s(this.$t("tab2")) + "\n        "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                mouseover: function($event) {
                  _vm.hover = true
                },
                mouseleave: function($event) {
                  _vm.hover = false
                }
              }
            },
            [
              _c(
                "a",
                {
                  attrs: { href: "https://github.com/witnet", target: "_blank" }
                },
                [
                  _vm._v(
                    "\n          " + _vm._s(this.$t("tab3")) + "\n          "
                  ),
                  _vm.hover
                    ? _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! assets/github-purple-logo.svg */ "./assets/github-purple-logo.svg"),
                          alt: "github-logo"
                        }
                      })
                    : _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! assets/github-black-logo.svg */ "./assets/github-black-logo.svg"),
                          alt: "github-logo"
                        }
                      })
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "div",
                {
                  staticClass: "language-btn",
                  on: { click: _vm.displayDropDown }
                },
                [
                  _vm._v("\n          Language\n          "),
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! assets/dropdown-arrow.svg */ "./assets/dropdown-arrow.svg"),
                      alt: "drop-down-arrow"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "transition",
                {
                  staticClass: "smooth-in",
                  attrs: { tag: "div", name: "smooth-in" }
                },
                [
                  _vm.displayBox
                    ? _c("div", { staticClass: "drop-down" }, [
                        _c(
                          "button",
                          {
                            staticClass: "drop-down-item",
                            on: {
                              click: function($event) {
                                return _vm.changeLanguage("en")
                              }
                            }
                          },
                          [_vm._v("\n              English\n            ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "drop-down-item",
                            on: {
                              click: function($event) {
                                return _vm.changeLanguage("ch")
                              }
                            }
                          },
                          [_vm._v("\n              Chinese\n            ")]
                        )
                      ])
                    : _vm._e()
                ]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=template&id=314f53c6&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=314f53c6& ***!
  \******************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [_c("NavBar"), _vm._v(" "), _c("nuxt"), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("188bb2b2", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/Footer.vue?vue&type=style&index=0&id=0d2d6594&scoped=true&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3dce29aa", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./components/NavBar.vue?vue&type=style&index=0&id=0957edea&scoped=true&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--3-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0e36c2db", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-build-indicator.vue?vue&type=style&index=0&id=71e9e103&scoped=true&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--3-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-error.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("72daabed", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-error.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-error.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-error.vue?vue&type=style&index=0&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--3-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-loading.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3191d5ad", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-loading.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../../node_modules/vue-loader/lib??vue-loader-options!./nuxt-loading.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./.nuxt/components/nuxt-loading.vue?vue&type=style&index=0&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--3-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--3-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("932a8f60", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=style&index=0&lang=css&", function() {
     var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--3-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--3-oneOf-1-2!../node_modules/vue-loader/lib??vue-loader-options!./default.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./layouts/default.vue?vue&type=style&index=0&lang=css&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./plugins/i18n.js":
/*!*************************!*\
  !*** ./plugins/i18n.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var app = _ref.app;
  app.i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: __webpack_require__(/*! ~/static/content-en.json */ "./static/content-en.json"),
      ch: __webpack_require__(/*! ~/static/content-ch.json */ "./static/content-ch.json")
    }
  });
});

/***/ }),

/***/ "./plugins/vue-particles.js":
/*!**********************************!*\
  !*** ./plugins/vue-particles.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_particles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-particles */ "./node_modules/vue-particles/src/vue-particles/index.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_particles__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./static/content-ch.json":
/*!********************************!*\
  !*** ./static/content-ch.json ***!
  \********************************/
/*! exports provided: tab1, tab2, tab3, footer-description, footer-copyright, read-btn, hero-title, hero-description, learn-more-btn, title-section-1, s1-wit, s1-fair, s1-truth, know-more-btn, title-section-2, s2-node, s2-developers, s2-wallet, question1, question2, question3, question4, question5, question6, about-title, about-text, participate-title, participate-text, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tab1\":\"什么是机智？\",\"tab2\":\"怎么参加\",\"tab3\":\" GitHub上\",\"footer-description\":\"Witnet是一个分散的oracle网络，它将智能合约与外部世界联系起来。它旨在允许任何软件检索在任何网址上发布的内容，并提供完整且可验证的完整性证明，并且不会信任任何第三方。\",\"footer-copyright\":\"©2018 Witnet Foundation。保留一些权利。\",\"read-btn\":\"阅读白皮书\",\"hero-title\":\"分散的oracle协议。\",\"hero-description\":\"Witnet不知不觉地将您的智能合约与现实世界联系起来。\",\"learn-more-btn\":\" 学到更多\",\"title-section-1\":\"Lorem ipsum dolor sit amet consectetur\",\"s1-wit\":\"Wit：一个微小的本机令牌\",\"s1-fair\":\"默认情况下是分散和公平的\",\"s1-truth\":\"100％真理，0％信任\",\"know-more-btn\":\"知道更多\",\"title-section-2\":\" 怎么参加？\",\"s2-node\":\"运行节点\",\"s2-developers\":\"Witnet面向开发人员\",\"s2-wallet\":\"拿到你的钱包\",\"question1\":\" 我在哪里可以阅读Witnet白皮书？\",\"question2\":\"Witnet会与以太坊智能合约合作吗？\",\"question3\":\"Witnet的发展路线图是什么？\",\"question4\":\" 甲骨文网络与Augur，Gnosis和预测市场有何不同？\",\"question5\":\"Witnet与其他oracle项目有何不同？\",\"question6\":\"Witnet与其他oracle kkkkkkkkk有何不同？\",\"about-title\":\"什么是机智？\",\"about-text\":\"Lorem ipsum dolor sit amet consectetur adipiscing elit est tempor aliquam praesent nisl cursus, porta facilisi eros nullam nisi parturient quis non curabitur dictum magna nibh. Bibendum vitae mus faucibus class suspendisse egestas dui interdum, ligula at fringilla est pulvinar sociosqu semper cum, fames elementum senectus gravida metus torquent eros.Torquent nisi platea nec purus diam habitasse quisque, dignissim convallis turpis nunc interdum eu in, molestie sagittis auctor id sapien cum. Sociis curabitur orci cum eu platea congue mauris dignissim, duis lobortis eget convallis fermentum cursus curae sed morbi, ac blandit potenti purus tempor cras ultrices. Nascetur nostra rhoncus augue purus ligula lobortis interdum lacus, facilisi luctus neque mattis bibendum fames maecenas, sed nullam vel sociis sagittis sociosqu fermentum. Nulla bibendum aliquam himenaeos torquent hac non urna odio convallis in, molestie sodales habitant sapien tristique justo eleifend lobortis. Magnis euismod suspendisse justo egestas fusce tristique, nostra sem laoreet est quisque, scelerisque congue non vitae sociosqu.Eros sociosqu platea commodo magnis nascetur arcu, velit ullamcorper est nam suscipit integer dapibus, mauris penatibus sodales tempus nisl. Interdum urna non taciti risus sagittis pretium fringilla nec aliquam vehicula habitant platea odio dignissim vel nulla, natoque ad nibh per litora lacus augue suscipit vestibulum dictumst habitasse volutpat nascetur duis. Ante interdum neque ad iaculis mattis sagittis cum feugiat, sollicitudin sem vivamus phasellus egestas cubilia quis venenatis primis, commodo convallis rutrum hendrerit pretium tristique duis.Justo non dictum conubia iaculis praesent parturient porttitor, neque lobortis congue viverra rutrum fames vulputate, convallis tellus torquent nascetur blandit ligula. Porttitor suscipit ut curae torquent tortor proin feugiat suspendisse dis et, taciti in eleifend condimentum quam aptent nascetur mollis lacinia, imperdiet at potenti convallis metus molestie vel pharetra venenatis. Euismod varius sociosqu magna dis blandit sapien etiam sagittis, ullamcorper accumsan consequat arcu malesuada aliquet maecenas integer dictumst, elementum conubia facilisi duis molestie erat mi.Nibh habitant pretium sagittis fermentum habitasse vel, diam metus nunc congue turpis. Fusce quis natoque viverra id magna tellus facilisi erat, donec sem malesuada molestie dignissim sollicitudin ad primis praesent, lacus venenatis nibh luctus tempus elementum volutpat. Congue placerat egestas class integer justo nisi auctor dictumst velit, ridiculus nec lacinia eu accumsan per sollicitudin turpis, tortor sociosqu consequat quam libero dignissim neque iaculis. Risus donec quam mi aenean sem felis cursus in sodales cras accumsan aliquet duis lectus, neque habitant tempor hendrerit ad sollicitudin sagittis nisl.\",\"participate-title\":\"怎么参加\",\"participate-text\":\"Lorem ipsum dolor sit amet consectetur adipiscing elit est tempor aliquam praesent nisl cursus, porta facilisi eros nullam nisi parturient quis non curabitur dictum magna nibh. Bibendum vitae mus faucibus class suspendisse egestas dui interdum, ligula at fringilla est pulvinar sociosqu semper cum, fames elementum senectus gravida metus torquent eros.Torquent nisi platea nec purus diam habitasse quisque, dignissim convallis turpis nunc interdum eu in, molestie sagittis auctor id sapien cum. Sociis curabitur orci cum eu platea congue mauris dignissim, duis lobortis eget convallis fermentum cursus curae sed morbi, ac blandit potenti purus tempor cras ultrices. Nascetur nostra rhoncus augue purus ligula lobortis interdum lacus, facilisi luctus neque mattis bibendum fames maecenas, sed nullam vel sociis sagittis sociosqu fermentum. Nulla bibendum aliquam himenaeos torquent hac non urna odio convallis in, molestie sodales habitant sapien tristique justo eleifend lobortis. Magnis euismod suspendisse justo egestas fusce tristique, nostra sem laoreet est quisque, scelerisque congue non vitae sociosqu.Eros sociosqu platea commodo magnis nascetur arcu, velit ullamcorper est nam suscipit integer dapibus, mauris penatibus sodales tempus nisl. Interdum urna non taciti risus sagittis pretium fringilla nec aliquam vehicula habitant platea odio dignissim vel nulla, natoque ad nibh per litora lacus augue suscipit vestibulum dictumst habitasse volutpat nascetur duis. Ante interdum neque ad iaculis mattis sagittis cum feugiat, sollicitudin sem vivamus phasellus egestas cubilia quis venenatis primis, commodo convallis rutrum hendrerit pretium tristique duis.Justo non dictum conubia iaculis praesent parturient porttitor, neque lobortis congue viverra rutrum fames vulputate, convallis tellus torquent nascetur blandit ligula. Porttitor suscipit ut curae torquent tortor proin feugiat suspendisse dis et, taciti in eleifend condimentum quam aptent nascetur mollis lacinia, imperdiet at potenti convallis metus molestie vel pharetra venenatis. Euismod varius sociosqu magna dis blandit sapien etiam sagittis, ullamcorper accumsan consequat arcu malesuada aliquet maecenas integer dictumst, elementum conubia facilisi duis molestie erat mi.Nibh habitant pretium sagittis fermentum habitasse vel, diam metus nunc congue turpis. Fusce quis natoque viverra id magna tellus facilisi erat, donec sem malesuada molestie dignissim sollicitudin ad primis praesent, lacus venenatis nibh luctus tempus elementum volutpat. Congue placerat egestas class integer justo nisi auctor dictumst velit, ridiculus nec lacinia eu accumsan per sollicitudin turpis, tortor sociosqu consequat quam libero dignissim neque iaculis. Risus donec quam mi aenean sem felis cursus in sodales cras accumsan aliquet duis lectus, neque habitant tempor hendrerit ad sollicitudin sagittis nisl.\"}");

/***/ }),

/***/ "./static/content-en.json":
/*!********************************!*\
  !*** ./static/content-en.json ***!
  \********************************/
/*! exports provided: tab1, tab2, tab3, footer-description, footer-copyright, read-btn, hero-title, hero-description, learn-more-btn, title-section-1, s1-wit, s1-fair, s1-truth, know-more-btn, title-section-2, s2-node, s2-developers, s2-wallet, title-section-3, question1, question2, question3, question4, question5, question6, about-title, about-text, participate-title, participate-text, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"tab1\":\"What is witnet?\",\"tab2\":\"How to participate\",\"tab3\":\"GitHub\",\"footer-description\":\"Witnet is a decentralized oracle network that connects smart contracts to the outer world. It aims to allow any piece of software to retrieve the contents published at any web address with complete and verifiable proof of its integrity and withoutblindly trusting any third party.\",\"footer-copyright\":\"© 2018 Witnet Foundation. Some rights reserved.\",\"read-btn\":\"Read the White paper\",\"hero-title\":\"The decentralized oracle protocol.\",\"hero-description\":\"Witnet trustlessly connects your smart contracts to the real world.\",\"learn-more-btn\":\"Learn more\",\"title-section-1\":\"Lorem ipsum dolor sit amet consectetur\",\"s1-wit\":\"Wit: a minable native token\",\"s1-fair\":\"Decentralized and fair by default\",\"s1-truth\":\"100% truth, 0% trust\",\"know-more-btn\":\"Know more\",\"title-section-2\":\"How to participate?\",\"s2-node\":\"Run a node\",\"s2-developers\":\"Witnet for developers\",\"s2-wallet\":\"Get your wallet\",\"title-section-3\":\"?\",\"question1\":\"Where can I read the Witnet whitepaper?\",\"question2\":\"Will Witnet work with Ethereum smart contracts?\",\"question3\":\"What's the development roadmap for Witnet?\",\"question4\":\"How are oracle networks different from Augur, Gnosis and prediction markets in general?\",\"question5\":\"How's Witnet different from other oracle projects?\",\"question6\":\"How's Witnet different from other oracle kkkkkkkkk?\",\"about-title\":\"What is Witnet?\",\"about-text\":\"Lorem ipsum dolor sit amet consectetur adipiscing elit est tempor aliquam praesent nisl cursus, porta facilisi eros nullam nisi parturient quis non curabitur dictum magna nibh. Bibendum vitae mus faucibus class suspendisse egestas dui interdum, ligula at fringilla est pulvinar sociosqu semper cum, fames elementum senectus gravida metus torquent eros.Torquent nisi platea nec purus diam habitasse quisque, dignissim convallis turpis nunc interdum eu in, molestie sagittis auctor id sapien cum. Sociis curabitur orci cum eu platea congue mauris dignissim, duis lobortis eget convallis fermentum cursus curae sed morbi, ac blandit potenti purus tempor cras ultrices. Nascetur nostra rhoncus augue purus ligula lobortis interdum lacus, facilisi luctus neque mattis bibendum fames maecenas, sed nullam vel sociis sagittis sociosqu fermentum. Nulla bibendum aliquam himenaeos torquent hac non urna odio convallis in, molestie sodales habitant sapien tristique justo eleifend lobortis. Magnis euismod suspendisse justo egestas fusce tristique, nostra sem laoreet est quisque, scelerisque congue non vitae sociosqu.Eros sociosqu platea commodo magnis nascetur arcu, velit ullamcorper est nam suscipit integer dapibus, mauris penatibus sodales tempus nisl. Interdum urna non taciti risus sagittis pretium fringilla nec aliquam vehicula habitant platea odio dignissim vel nulla, natoque ad nibh per litora lacus augue suscipit vestibulum dictumst habitasse volutpat nascetur duis. Ante interdum neque ad iaculis mattis sagittis cum feugiat, sollicitudin sem vivamus phasellus egestas cubilia quis venenatis primis, commodo convallis rutrum hendrerit pretium tristique duis.Justo non dictum conubia iaculis praesent parturient porttitor, neque lobortis congue viverra rutrum fames vulputate, convallis tellus torquent nascetur blandit ligula. Porttitor suscipit ut curae torquent tortor proin feugiat suspendisse dis et, taciti in eleifend condimentum quam aptent nascetur mollis lacinia, imperdiet at potenti convallis metus molestie vel pharetra venenatis. Euismod varius sociosqu magna dis blandit sapien etiam sagittis, ullamcorper accumsan consequat arcu malesuada aliquet maecenas integer dictumst, elementum conubia facilisi duis molestie erat mi.Nibh habitant pretium sagittis fermentum habitasse vel, diam metus nunc congue turpis. Fusce quis natoque viverra id magna tellus facilisi erat, donec sem malesuada molestie dignissim sollicitudin ad primis praesent, lacus venenatis nibh luctus tempus elementum volutpat. Congue placerat egestas class integer justo nisi auctor dictumst velit, ridiculus nec lacinia eu accumsan per sollicitudin turpis, tortor sociosqu consequat quam libero dignissim neque iaculis. Risus donec quam mi aenean sem felis cursus in sodales cras accumsan aliquet duis lectus, neque habitant tempor hendrerit ad sollicitudin sagittis nisl.\",\"participate-title\":\"How to participate\",\"participate-text\":\"Lorem ipsum dolor sit amet consectetur adipiscing elit est tempor aliquam praesent nisl cursus, porta facilisi eros nullam nisi parturient quis non curabitur dictum magna nibh. Bibendum vitae mus faucibus class suspendisse egestas dui interdum, ligula at fringilla est pulvinar sociosqu semper cum, fames elementum senectus gravida metus torquent eros.Torquent nisi platea nec purus diam habitasse quisque, dignissim convallis turpis nunc interdum eu in, molestie sagittis auctor id sapien cum. Sociis curabitur orci cum eu platea congue mauris dignissim, duis lobortis eget convallis fermentum cursus curae sed morbi, ac blandit potenti purus tempor cras ultrices. Nascetur nostra rhoncus augue purus ligula lobortis interdum lacus, facilisi luctus neque mattis bibendum fames maecenas, sed nullam vel sociis sagittis sociosqu fermentum. Nulla bibendum aliquam himenaeos torquent hac non urna odio convallis in, molestie sodales habitant sapien tristique justo eleifend lobortis. Magnis euismod suspendisse justo egestas fusce tristique, nostra sem laoreet est quisque, scelerisque congue non vitae sociosqu.Eros sociosqu platea commodo magnis nascetur arcu, velit ullamcorper est nam suscipit integer dapibus, mauris penatibus sodales tempus nisl. Interdum urna non taciti risus sagittis pretium fringilla nec aliquam vehicula habitant platea odio dignissim vel nulla, natoque ad nibh per litora lacus augue suscipit vestibulum dictumst habitasse volutpat nascetur duis. Ante interdum neque ad iaculis mattis sagittis cum feugiat, sollicitudin sem vivamus phasellus egestas cubilia quis venenatis primis, commodo convallis rutrum hendrerit pretium tristique duis.Justo non dictum conubia iaculis praesent parturient porttitor, neque lobortis congue viverra rutrum fames vulputate, convallis tellus torquent nascetur blandit ligula. Porttitor suscipit ut curae torquent tortor proin feugiat suspendisse dis et, taciti in eleifend condimentum quam aptent nascetur mollis lacinia, imperdiet at potenti convallis metus molestie vel pharetra venenatis. Euismod varius sociosqu magna dis blandit sapien etiam sagittis, ullamcorper accumsan consequat arcu malesuada aliquet maecenas integer dictumst, elementum conubia facilisi duis molestie erat mi.Nibh habitant pretium sagittis fermentum habitasse vel, diam metus nunc congue turpis. Fusce quis natoque viverra id magna tellus facilisi erat, donec sem malesuada molestie dignissim sollicitudin ad primis praesent, lacus venenatis nibh luctus tempus elementum volutpat. Congue placerat egestas class integer justo nisi auctor dictumst velit, ridiculus nec lacinia eu accumsan per sollicitudin turpis, tortor sociosqu consequat quam libero dignissim neque iaculis. Risus donec quam mi aenean sem felis cursus in sodales cras accumsan aliquet duis lectus, neque habitant tempor hendrerit ad sollicitudin sagittis nisl.\"}");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/main.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("203985de", content, false, {"sourceMap":true});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/main.scss", function() {
     var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/main.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************************!*\
  !*** multi eventsource-polyfill webpack-hot-middleware/client?reload=true&timeout=30000&ansiColors=&overlayStyles=&name=client&path=/__webpack_hmr/client ./.nuxt/client.js ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! eventsource-polyfill */"./node_modules/eventsource-polyfill/dist/browserify-eventsource.js");
__webpack_require__(/*! webpack-hot-middleware/client?reload=true&timeout=30000&ansiColors=&overlayStyles=&name=client&path=/__webpack_hmr/client */"./node_modules/webpack-hot-middleware/client.js?reload=true&timeout=30000&ansiColors=&overlayStyles=&name=client&path=/__webpack_hmr/client");
module.exports = __webpack_require__(/*! /Users/user/Desktop/Witnet/website/.nuxt/client.js */"./.nuxt/client.js");


/***/ })

},[[0,"runtime","commons.app","vendors.app"]]]);