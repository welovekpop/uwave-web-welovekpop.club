import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "material-ui/es/IconButton";

var Action = function Action(_ref) {
  var children = _ref.children,
      onAction = _ref.onAction,
      attrs = _objectWithoutProperties(_ref, ["children", "onAction"]);

  return React.createElement(IconButton, _extends({
    className: "MediaActions-action",
    onClick: onAction
  }, attrs), children);
};

Action.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.element,
  onAction: PropTypes.func
} : {};
export default Action;
//# sourceMappingURL=Action.js.map
