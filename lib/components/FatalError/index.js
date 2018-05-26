"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reload() {
  window.location.reload();
}

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Typography.default, {
  variant: "headline"
}, void 0, "\xFCWave Crashed");

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Typography.default, {
  component: "p"
}, void 0, "The admins have been made aware of this issue. Please reload the page.");

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_CardActions.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
  variant: "raised",
  color: "secondary",
  className: "FatalError-reload",
  onClick: reload,
  autoFocus: true
}, void 0, "Reload"));

var FatalError = function FatalError(_ref) {
  var error = _ref.error;
  return (0, _jsx2.default)("div", {
    className: "FatalError"
  }, void 0, (0, _jsx2.default)(_Card.default, {
    raised: true,
    className: "FatalError-paper"
  }, void 0, (0, _jsx2.default)(_CardContent.default, {}, void 0, _ref2, (0, _jsx2.default)(_Typography.default, {
    component: "p"
  }, void 0, error.message), _ref3), _ref4));
};

FatalError.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes.default.object.isRequired
} : {};
var _default = FatalError;
exports.default = _default;
//# sourceMappingURL=index.js.map
