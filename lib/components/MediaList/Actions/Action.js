'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Action = function Action(_ref) {
  var children = _ref.children,
      onAction = _ref.onAction,
      attrs = (0, _objectWithoutProperties3.default)(_ref, ['children', 'onAction']);

  return _react2.default.createElement('button', (0, _extends3.default)({
    className: 'MediaActions-action',
    onClick: onAction
  }, attrs), children);
};

Action.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element,
  onAction: _propTypes2.default.func
} : {};

exports.default = Action;
//# sourceMappingURL=Action.js.map
//# sourceMappingURL=Action.js.map
