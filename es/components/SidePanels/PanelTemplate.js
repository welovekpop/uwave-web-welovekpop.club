import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import TabTemplate from '../Tabs/TabTemplate';

var PanelTemplate = function PanelTemplate(_ref) {
  var selected = _ref.selected,
      children = _ref.children;
  return _jsx(TabTemplate, {
    selected: selected,
    className: 'SidePanel-panel'
  }, void 0, children);
};

PanelTemplate.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired
} : {};

export default PanelTemplate;
//# sourceMappingURL=PanelTemplate.js.map
