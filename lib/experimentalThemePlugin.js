"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = experimentalThemePlugin;

var _redux = require("redux");

var _ThemeActionCreators = require("./actions/ThemeActionCreators");

function experimentalThemePlugin(instance) {
  // `.store` will not yet be available when this is .use()d.
  function dispatchProxy() {
    var _instance$store;

    return (_instance$store = instance.store).dispatch.apply(_instance$store, arguments);
  }

  Object.assign(instance, (0, _redux.bindActionCreators)({
    debugApplyTheme: _ThemeActionCreators.debugApplyTheme,
    debugResetTheme: _ThemeActionCreators.debugResetTheme
  }, dispatchProxy));
}
//# sourceMappingURL=experimentalThemePlugin.js.map
