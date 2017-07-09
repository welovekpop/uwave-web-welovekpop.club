import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  return React.createElement(
    'div',
    _extends({
      className: cx('FormGroup', className)
    }, props),
    children
  );
};

FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
} : {};

export default FormGroup;
//# sourceMappingURL=Group.js.map
