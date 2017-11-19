'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

require('lie/polyfill');

require('whatwg-fetch');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _Session = require('./utils/Session');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _LoginActionCreators = require('./actions/LoginActionCreators');

var _settingSelectors = require('./selectors/settingSelectors');

var _api = require('./api');

var api = _interopRequireWildcard(_api);

require('./utils/commands');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Polyfills for browsers that might not yet support Promises or the Fetch API
// (newer & better XMLHttpRequest).
var Uwave = function () {
  function Uwave() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var session = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _Session.get)();

    (0, _classCallCheck3.default)(this, Uwave);

    this.options = {};
    this.sources = {};
    this.jwt = null;
    this.renderTarget = null;
    this.aboutPageComponent = null;

    this.options = options;
    this.jwt = session;
    this.ready = new Promise(function (resolve) {
      _this.resolveReady = resolve;
    });

    Object.assign(this, api.constants);
    Object.assign(this, api.components);
    Object.assign(this, api.actions);

    if (module.hot) {
      this._getComponent = this.getComponent;
      this.getComponent = function () {
        return (0, _jsx3.default)(_reactHotLoader.AppContainer, {}, void 0, _this._getComponent());
      };
      var uw = this;
      module.hot.accept('./containers/App', function () {
        if (uw.renderTarget) {
          uw.renderToDOM(uw.renderTarget);
        }
      });
    }
  }

  Uwave.prototype.use = function use(plugin) {
    plugin(this);
    return this;
  };

  Uwave.prototype.source = function source(sourceType, sourcePlugin) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var sourceFactory = sourcePlugin.default || sourcePlugin;

    var type = typeof sourceFactory === 'undefined' ? 'undefined' : (0, _typeof3.default)(sourceFactory);
    if (type !== 'function' && type !== 'object') {
      throw new TypeError('Source plugin should be a function, got ' + type);
    }

    var source = type === 'function' ? sourceFactory(this, opts) : sourceFactory;

    this.sources[sourceType] = source;

    return source;
  };

  Uwave.prototype.setAboutPageComponent = function setAboutPageComponent(AboutPageComponent) {
    this.aboutPageComponent = AboutPageComponent;
  };

  Uwave.prototype.getAboutPageComponent = function getAboutPageComponent() {
    return this.aboutPageComponent;
  };

  Uwave.prototype.build = function build() {
    var _this2 = this;

    this.store = (0, _configureStore2.default)({ config: this.options }, { mediaSources: this.sources, socketUrl: this.options.socketUrl });

    var localePromise = (0, _locale2.default)((0, _settingSelectors.languageSelector)(this.store.getState()));

    if (this.jwt) {
      this.store.dispatch((0, _LoginActionCreators.setJWT)(this.jwt));
      this.jwt = null;
    }

    this.store.dispatch((0, _LoginActionCreators.socketConnect)());
    return Promise.all([localePromise, this.store.dispatch((0, _LoginActionCreators.initState)())]).then(function (_ref) {
      var locale = _ref[0];

      _this2.locale = locale;
      _this2.resolveReady();
    });
  };

  Uwave.prototype.getComponent = function getComponent() {
    return (0, _jsx3.default)(_reactRedux.Provider, {
      store: this.store
    }, void 0, (0, _jsx3.default)(_App2.default, {
      mediaSources: this.sources,
      locale: this.locale,
      uwave: this
    }));
  };

  Uwave.prototype.renderToDOM = function renderToDOM(target) {
    if (!this.store) {
      this.build();
    }

    this.renderTarget = target;
    (0, _reactDom.render)(this.getComponent(), target);
  };

  return Uwave;
}();

// Register default chat commands.
exports.default = Uwave;
//# sourceMappingURL=Uwave.js.map
//# sourceMappingURL=Uwave.js.map
