"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugResetTheme = debugResetTheme;
exports.debugApplyTheme = debugApplyTheme;

var _ActionTypes = require("../constants/ActionTypes");

function debugResetTheme() {
  return {
    type: _ActionTypes.RESET_THEME
  };
}

function debugApplyTheme(newValues) {
  return {
    type: _ActionTypes.APPLY_THEME,
    payload: newValues
  };
}
//# sourceMappingURL=ThemeActionCreators.js.map
