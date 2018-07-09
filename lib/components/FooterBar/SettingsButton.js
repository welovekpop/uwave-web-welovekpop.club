"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), _pure.default);

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Settings.default, {});

var SettingsButton = function SettingsButton(_ref) {
  var t = _ref.t,
      onClick = _ref.onClick;
  return (0, _jsx2.default)("span", {}, void 0, (0, _jsx2.default)(_Tooltip.default, {
    title: t('settings.title')
  }, void 0, (0, _jsx2.default)(_IconButton.default, {
    className: "SettingsButton",
    onClick: onClick
  }, void 0, _ref2)));
};

SettingsButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onClick: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SettingsButton);

exports.default = _default;
//# sourceMappingURL=SettingsButton.js.map
