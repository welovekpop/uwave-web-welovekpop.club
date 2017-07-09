import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';

var Action = function Action(_ref) {
  var children = _ref.children,
      onAction = _ref.onAction,
      attrs = _objectWithoutProperties(_ref, ['children', 'onAction']);

  return React.createElement(
    'button',
    _extends({
      className: 'MediaActions-action',
      onClick: onAction
    }, attrs),
    children
  );
};

Action.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.element,
  onAction: PropTypes.func
} : {};

export default Action;
//# sourceMappingURL=Action.js.map
