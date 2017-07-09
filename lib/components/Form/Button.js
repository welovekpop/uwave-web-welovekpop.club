'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      text = _ref.text,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'text']);

  return _react2.default.createElement('button', (0, _extends3.default)({ className: (0, _classnames2.default)('Button', className) }, props), text || children);
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  text: _propTypes2.default.string,
  children: _propTypes2.default.node
} : {};

exports.default = Button;
//# sourceMappingURL=Button.js.map
//# sourceMappingURL=Button.js.map
