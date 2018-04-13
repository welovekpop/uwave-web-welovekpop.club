import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var StrikeThrough = function StrikeThrough(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("s", props, children);
};

StrikeThrough.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired
} : {};
export default StrikeThrough;
//# sourceMappingURL=StrikeThrough.js.map
