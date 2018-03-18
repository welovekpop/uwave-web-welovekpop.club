'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyboardArrowDown = require('material-ui/svg-icons/hardware/keyboard-arrow-down');

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)(_keyboardArrowDown2.default, {
  color: '#fff'
});

var MoveToLast = function MoveToLast(_ref) {
  var onLast = _ref.onLast,
      props = (0, _objectWithoutProperties3.default)(_ref, ['onLast']);

  return _react2.default.createElement(_Action2.default, (0, _extends3.default)({}, props, { onAction: onLast }), _ref2);
};

MoveToLast.propTypes = process.env.NODE_ENV !== "production" ? {
  onLast: _propTypes2.default.func.isRequired
} : {};

exports.default = MoveToLast;
//# sourceMappingURL=MoveToLast.js.map
//# sourceMappingURL=MoveToLast.js.map
