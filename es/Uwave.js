import _typeof from 'babel-runtime/helpers/typeof';
import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
// Polyfills for browsers that might not yet support Promises or the Fetch API
// (newer & better XMLHttpRequest).
import 'lie/polyfill';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as HotContainer } from 'react-hot-loader';
import createLocale from './locale';
import AppContainer from './containers/App';
import { get as readSession } from './utils/Session';
import configureStore from './store/configureStore';
import { initState, socketConnect, setJWT } from './actions/LoginActionCreators';
import { languageSelector } from './selectors/settingSelectors';
import * as api from './api';

// Register default chat commands.
import './utils/commands';

var Uwave = function () {
  function Uwave() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var session = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : readSession();

    _classCallCheck(this, Uwave);

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
        return _jsx(HotContainer, {}, void 0, _this._getComponent());
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

    var type = typeof sourceFactory === 'undefined' ? 'undefined' : _typeof(sourceFactory);
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

    this.store = configureStore({ config: this.options }, { mediaSources: this.sources, socketUrl: this.options.socketUrl });

    var localePromise = createLocale(languageSelector(this.store.getState()));

    if (this.jwt) {
      this.store.dispatch(setJWT(this.jwt));
      this.jwt = null;
    }

    this.store.dispatch(socketConnect());
    return Promise.all([localePromise, this.store.dispatch(initState())]).then(function (_ref) {
      var locale = _ref[0];

      _this2.locale = locale;
      _this2.resolveReady();
    });
  };

  Uwave.prototype.getComponent = function getComponent() {
    return _jsx(Provider, {
      store: this.store
    }, void 0, _jsx(AppContainer, {
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
    render(this.getComponent(), target);
  };

  return Uwave;
}();

export default Uwave;
//# sourceMappingURL=Uwave.js.map
