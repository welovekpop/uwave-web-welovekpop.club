import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var OverlayContent = function OverlayContent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _jsx("div", {
    className: cx('Overlay-content', className)
  }, void 0, children);
};

OverlayContent.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
} : {};
export default OverlayContent;
//# sourceMappingURL=Content.js.map
