import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

var Code = function Code(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("code", props, children);
};

Code.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired
} : {};
export default Code;
//# sourceMappingURL=Code.js.map
