import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../Tooltip';

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { showTooltip: false }, _this.handleMouseEnter = function () {
      _this.setState({ showTooltip: true });
    }, _this.handleMouseLeave = function () {
      _this.setState({ showTooltip: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

    return _jsx('button', {
      className: cx('ResponseButton', disabled && 'ResponseButton--disabled'),
      onClick: disabled ? null : onClick,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave
    }, void 0, _jsx('div', {
      className: 'ResponseButton-content'
    }, void 0, _jsx(Tooltip, {
      label: tooltip,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      show: this.state.showTooltip,
      style: { top: -22 }
    }), _jsx('div', {
      className: 'ResponseButton-icon'
    }, void 0, children), _jsx('span', {
      className: 'ResponseButton-count'
    }, void 0, count)));
  };

  return Button;
}(React.Component);

export default Button;
Button.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  count: PropTypes.number,
  tooltip: PropTypes.string
} : {};
//# sourceMappingURL=Button.js.map
