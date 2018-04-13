"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = _interopRequireDefault(require("material-ui/Snackbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorArea = function ErrorArea(_ref) {
  var error = _ref.error,
      onDismiss = _ref.onDismiss;
  return (0, _jsx2.default)("div", {
    className: "ErrorArea"
  }, void 0, (0, _jsx2.default)(_Snackbar.default, {
    SnackbarContentProps: {
      className: 'ErrorArea-snackbar'
    },
    open: !!error,
    message: error || '',
    onClose: onDismiss
  }));
};

ErrorArea.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes.default.string,
  onDismiss: _propTypes.default.func.isRequired
} : {};
var _default = ErrorArea; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
