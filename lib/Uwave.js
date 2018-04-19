"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

require("lie/polyfill");

require("whatwg-fetch");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _reactHotLoader = require("react-hot-loader");

var _jss = require("jss");

var _styles = require("material-ui/styles");

var _JssProvider = _interopRequireDefault(require("react-jss/lib/JssProvider"));

var _locale = _interopRequireDefault(require("./locale"));

var _App = _interopRequireDefault(require("./containers/App"));

var _Session = require("./utils/Session");

var _generateClassName = _interopRequireDefault(require("./utils/generateClassName"));

var _configureStore = _interopRequireDefault(require("./store/configureStore"));

var _LoginActionCreators = require("./actions/LoginActionCreators");

var _settingSelectors = require("./selectors/settingSelectors");

var api = _interopRequireWildcard(require("./api"));

var _preloadDesktop = _interopRequireDefault(require("./utils/preloadDesktop"));

require("./utils/commands");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Polyfills for browsers that might not yet support Promises or the Fetch API
// (newer & better XMLHttpRequest).
// Register default chat commands.
var Uwave =
/*#__PURE__*/
function () {
  function Uwave(options, session) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    if (session === void 0) {
      session = (0, _Session.get)();
    }

    this.options = {};
    this.sources = {};
    this.sessionToken = null;
    this.renderTarget = null;
    this.aboutPageComponent = null;
    this.jss = (0, _jss.create)((0, _styles.jssPreset)());
    this.options = options;
    this.sessionToken = session;
    this.ready = new Promise(function (resolve) {
      _this.resolveReady = resolve;
    });
    Object.assign(this, api.constants);
    Object.assign(this, api.components);
    Object.assign(this, api.actions);

    if (module.hot) {
      var getComponent = this.getComponent;

      this.getComponent = function () {
        return (0, _jsx2.default)(_reactHotLoader.AppContainer, {}, void 0, getComponent.call(_this));
      };

      var uw = this;
      module.hot.accept('./containers/App', function () {
        if (uw.renderTarget) {
          uw.renderToDOM(uw.renderTarget);
        }
      });
    }
  }

  var _proto = Uwave.prototype;

  _proto.use = function use(plugin) {
    plugin(this);
    return this;
  };

  _proto.source = function source(sourcePlugin, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var sourceFactory = sourcePlugin.default || sourcePlugin;
    var type = typeof sourceFactory;

    if (type !== 'function' && type !== 'object') {
      throw new TypeError("Source plugin should be a function, got " + type);
    }

    var source = type === 'function' ? sourceFactory(this, opts) : sourceFactory;

    if (typeof source.name !== 'string') {
      throw new TypeError('Source plugin did not provide a name');
    }

    this.sources[source.name] = source;
    return source;
  };

  _proto.setAboutPageComponent = function setAboutPageComponent(AboutPageComponent) {
    this.aboutPageComponent = AboutPageComponent;
  };

  _proto.getAboutPageComponent = function getAboutPageComponent() {
    return this.aboutPageComponent;
  };

  _proto.build = function build() {
    var _this2 = this;

    this.store = (0, _configureStore.default)({
      config: this.options
    }, {
      mediaSources: this.sources,
      socketUrl: this.options.socketUrl
    });
    var localePromise = (0, _locale.default)((0, _settingSelectors.languageSelector)(this.store.getState()));

    if (this.sessionToken) {
      this.store.dispatch((0, _LoginActionCreators.setSessionToken)(this.sessionToken));
      this.sessionToken = null;
    }

    if (typeof window !== 'undefined') {
      this.jss.setup({
        insertionPoint: document.querySelector('#jss')
      });
    }

    if (typeof matchMedia !== 'undefined' && matchMedia('(min-width: 768px)')) {
      this.ready.then(function () {
        (0, _preloadDesktop.default)();
      });
    }

    this.store.dispatch((0, _LoginActionCreators.socketConnect)());
    return Promise.all([localePromise, this.store.dispatch((0, _LoginActionCreators.initState)())]).then(function (_ref) {
      var locale = _ref[0];
      _this2.locale = locale;

      _this2.resolveReady();
    });
  };

  _proto.getComponent = function getComponent() {
    return (0, _jsx2.default)(_reactRedux.Provider, {
      store: this.store
    }, void 0, (0, _jsx2.default)(_JssProvider.default, {
      jss: this.jss,
      generateClassName: _generateClassName.default
    }, void 0, (0, _jsx2.default)(_App.default, {
      mediaSources: this.sources,
      locale: this.locale,
      uwave: this
    })));
  };

  _proto.renderToDOM = function renderToDOM(target) {
    if (!this.store) {
      this.build();
    }

    this.renderTarget = target;
    (0, _reactDom.render)(this.getComponent(), target);
  };

  return Uwave;
}(); //# sourceMappingURL=Uwave.js.map


exports.default = Uwave;
//# sourceMappingURL=Uwave.js.map
