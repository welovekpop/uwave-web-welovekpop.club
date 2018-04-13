import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from "material-ui/es/Tooltip";
/* eslint-disable */

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      disabled = _ref.disabled,
      count = _ref.count,
      children = _ref.children,
      tooltip = _ref.tooltip;
  return (// Wrapped in a <div> so the tooltip can listen for mouse events.
    _jsx(Tooltip, {
      title: tooltip,
      placement: "top"
    }, void 0, _jsx("div", {}, void 0, _jsx("button", {
      className: cx('ResponseButton', disabled && 'ResponseButton--disabled'),
      disabled: disabled,
      onClick: onClick
    }, void 0, _jsx("div", {
      className: "ResponseButton-content"
    }, void 0, _jsx("div", {
      className: "ResponseButton-icon"
    }, void 0, children), _jsx("span", {
      className: "ResponseButton-count"
    }, void 0, count)))))
  );
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  count: PropTypes.number,
  tooltip: PropTypes.string
} : {};
export default Button;
//# sourceMappingURL=Button.js.map
