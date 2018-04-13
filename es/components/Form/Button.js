import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["children", "className", "text"]);

  return React.createElement("button", _extends({
    className: cx('Button', className)
  }, props), text || children);
};

Button.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
} : {};
export default Button;
//# sourceMappingURL=Button.js.map
