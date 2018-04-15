import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var PanelContainer = function PanelContainer(_ref) {
  var selected = _ref.selected,
      children = _ref.children;
  return _jsx("div", {
    className: cx('SidePanel-panel', selected && 'is-selected')
  }, void 0, children);
};

PanelContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired
} : {};
export default PanelContainer;
//# sourceMappingURL=PanelContainer.js.map
