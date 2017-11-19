'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tooltip = require('../../Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { showTooltip: false }, _this.handleMouseEnter = function () {
      _this.setState({ showTooltip: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ showTooltip: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Button.prototype.render = function render() {
    var _props = this.props,
        onClick = _props.onClick,
        disabled = _props.disabled,
        count = _props.count,
        children = _props.children,
        tooltip = _props.tooltip;
    // Buttons are fake-disabled because mouseleave acts inconsistently with
    // tooltips and actually-disabled buttons, sometimes leaving the tooltip
    // lingering. The cursor and hover effects are removed by the
    // ResponseButton--disabled classname, and the click handler is simply not
    // added.

    return (0, _jsx3.default)('button', {
      className: (0, _classnames2.default)('ResponseButton', disabled && 'ResponseButton--disabled'),
      onClick: disabled ? null : onClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave
    }, void 0, (0, _jsx3.default)('div', {
      className: 'ResponseButton-content'
    }, void 0, (0, _jsx3.default)(_Tooltip2.default, {
      label: tooltip,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      show: this.state.showTooltip,
      style: { top: -22 }
    }), (0, _jsx3.default)('div', {
      className: 'ResponseButton-icon'
    }, void 0, children), (0, _jsx3.default)('span', {
      className: 'ResponseButton-count'
    }, void 0, count)));
  };

  return Button;
}(_react2.default.Component);

exports.default = Button;

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.element.isRequired,
  disabled: _propTypes2.default.bool,
  count: _propTypes2.default.number,
  tooltip: _propTypes2.default.string
} : {};
//# sourceMappingURL=Button.js.map
//# sourceMappingURL=Button.js.map
