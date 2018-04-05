'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorArea = function ErrorArea(_ref) {
  var error = _ref.error,
      onDismiss = _ref.onDismiss;
  return (0, _jsx3.default)('div', {
    className: 'ErrorArea'
  }, void 0, (0, _jsx3.default)(_Snackbar2.default, {
    SnackbarContentProps: { className: 'ErrorArea-snackbar' },
    open: !!error,
    message: error || '',
    onClose: onDismiss
  }));
};

ErrorArea.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes2.default.string,
  onDismiss: _propTypes2.default.func.isRequired
} : {};

exports.default = ErrorArea;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
