"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireWildcard(require("material-ui/Card"));

var _Button = _interopRequireDefault(require("material-ui/Button"));

var _Typography = _interopRequireDefault(require("material-ui/Typography"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
(0, _jsx2.default)(_Card.CardActions, {}, void 0, (0, _jsx2.default)(_Button.default, {
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
  }, void 0, (0, _jsx2.default)(_Card.CardContent, {}, void 0, _ref2, (0, _jsx2.default)(_Typography.default, {
    component: "p"
  }, void 0, error.message), _ref3), _ref4));
};

FatalError.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes.default.object.isRequired
} : {};
var _default = FatalError; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
