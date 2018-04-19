import _jsx from "@babel/runtime/helpers/builtin/jsx";
// Polyfills for browsers that might not yet support Promises or the Fetch API
// (newer & better XMLHttpRequest).
import 'lie/polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer as HotContainer } from 'react-hot-loader';
import { create as createJss } from 'jss';
import { jssPreset } from "material-ui/es/styles";
import JssProvider from 'react-jss/lib/JssProvider';
import createLocale from './locale';
import AppContainer from './containers/App';
import { get as readSession } from './utils/Session';
import generateClassName from './utils/generateClassName';
import configureStore from './store/configureStore';
import { initState, socketConnect, setSessionToken } from './actions/LoginActionCreators';
import { languageSelector } from './selectors/settingSelectors';
import * as api from './api';
import preloadDesktop from './utils/preloadDesktop'; // Register default chat commands.

import './utils/commands';

var Uwave =
/*#__PURE__*/
function () {
  function Uwave(options, session) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    if (session === void 0) {
      session = readSession();
    }

    this.options = {};
    this.sources = {};
    this.sessionToken = null;
    this.renderTarget = null;
    this.aboutPageComponent = null;
    this.jss = createJss(jssPreset());
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
        return _jsx(HotContainer, {}, void 0, getComponent.call(_this));
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

    this.store = configureStore({
      config: this.options
    }, {
      mediaSources: this.sources,
      socketUrl: this.options.socketUrl
    });
    var localePromise = createLocale(languageSelector(this.store.getState()));

    if (this.sessionToken) {
      this.store.dispatch(setSessionToken(this.sessionToken));
      this.sessionToken = null;
    }

    if (typeof window !== 'undefined') {
      this.jss.setup({
        insertionPoint: document.querySelector('#jss')
      });
    }

    if (typeof matchMedia !== 'undefined' && matchMedia('(min-width: 768px)')) {
      this.ready.then(function () {
        preloadDesktop();
      });
    }

    this.store.dispatch(socketConnect());
    return Promise.all([localePromise, this.store.dispatch(initState())]).then(function (_ref) {
      var locale = _ref[0];
      _this2.locale = locale;

      _this2.resolveReady();
    });
  };

  _proto.getComponent = function getComponent() {
    return _jsx(Provider, {
      store: this.store
    }, void 0, _jsx(JssProvider, {
      jss: this.jss,
      generateClassName: generateClassName
    }, void 0, _jsx(AppContainer, {
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
    render(this.getComponent(), target);
  };

  return Uwave;
}();

export { Uwave as default };
//# sourceMappingURL=Uwave.js.map
