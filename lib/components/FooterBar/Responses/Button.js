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

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      count = _ref.count,
      children = _ref.children,
      tooltip = _ref.tooltip;
  return (
    // Wrapped in a <div> so the tooltip can listen for mouse events.
    (0, _jsx3.default)(_Tooltip2.default, {
      title: tooltip,
      placement: 'top'
    }, void 0, (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('button', {
      className: (0, _classnames2.default)('ResponseButton', disabled && 'ResponseButton--disabled'),
      disabled: disabled,
      onClick: onClick
    }, void 0, (0, _jsx3.default)('div', {
      className: 'ResponseButton-content'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'ResponseButton-icon'
    }, void 0, children), (0, _jsx3.default)('span', {
      className: 'ResponseButton-count'
    }, void 0, count)))))
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.element.isRequired,
  disabled: _propTypes2.default.bool,
  count: _propTypes2.default.number,
  tooltip: _propTypes2.default.string
} : {};

exports.default = Button;
//# sourceMappingURL=Button.js.map
//# sourceMappingURL=Button.js.map
