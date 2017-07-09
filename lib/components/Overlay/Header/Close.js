'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyboardArrowDown = require('material-ui/svg-icons/hardware/keyboard-arrow-down');

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _keyboardArrowUp = require('material-ui/svg-icons/hardware/keyboard-arrow-up');

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  bottom: _keyboardArrowDown2.default,
  top: _keyboardArrowUp2.default
};

var fullSizeStyle = {
  height: '100%',
  width: '100%'
};

var Close = function Close(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      direction = _ref.direction;

  var CloseIcon = icons[direction];
  return (0, _jsx3.default)('button', {
    className: (0, _classnames2.default)('OverlayHeaderClose', className),
    onClick: onClose
  }, void 0, (0, _jsx3.default)(CloseIcon, {
    color: '#fff',
    style: fullSizeStyle,
    className: 'OverlayHeaderClose-icon'
  }));
};

Close.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  direction: _propTypes2.default.string.isRequired,
  onClose: _propTypes2.default.func.isRequired
} : {};

exports.default = Close;
//# sourceMappingURL=Close.js.map
//# sourceMappingURL=Close.js.map
