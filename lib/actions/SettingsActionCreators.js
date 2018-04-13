"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSettings = loadSettings;
exports.set = set;
exports.setLanguage = setLanguage;

var _set = _interopRequireDefault(require("lodash/set"));

var _settings = require("../constants/actionTypes/settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadSettings(obj) {
  return {
    type: _settings.LOAD_SETTINGS,
    payload: obj
  };
}

function set(name, value) {
  var changeset = {};
  (0, _set.default)(changeset, name, value);
  return {
    type: _settings.CHANGE_SETTING,
    payload: changeset
  };
}

function setLanguage(lang) {
  return set('language', lang);
} //# sourceMappingURL=SettingsActionCreators.js.map
//# sourceMappingURL=SettingsActionCreators.js.map
