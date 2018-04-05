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

var _KeyboardArrowDown = require('material-ui-icons/KeyboardArrowDown');

var _KeyboardArrowDown2 = _interopRequireDefault(_KeyboardArrowDown);

var _KeyboardArrowUp = require('material-ui-icons/KeyboardArrowUp');

var _KeyboardArrowUp2 = _interopRequireDefault(_KeyboardArrowUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  bottom: _KeyboardArrowDown2.default,
  top: _KeyboardArrowUp2.default
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
