"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getResourceName = function getResourceName(i18n, language) {
  return i18n.t("locales." + language);
};

var enhance = (0, _getContext.default)({
  i18n: _propTypes.default.object
});

var LanguagePicker = function LanguagePicker(_ref) {
  var i18n = _ref.i18n,
      props = (0, _objectWithoutProperties2.default)(_ref, ["i18n"]);
  return _react.default.createElement(_Select.default, (0, _extends2.default)({
    className: "LanguagePicker"
  }, props), i18n.availableLanguages.map(function (lang) {
    return (0, _jsx2.default)(_MenuItem.default, {
      value: lang
    }, lang, getResourceName(i18n, lang));
  }));
};

LanguagePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  i18n: _propTypes.default.object.isRequired
} : {};

var _default = enhance(LanguagePicker);

exports.default = _default;
//# sourceMappingURL=LanguagePicker.js.map
