import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var TabTemplate = function TabTemplate(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      children = _ref.children;
  return _jsx('div', {
    className: cx('Tabs-panel', className, selected && 'is-visible')
  }, void 0, children);
};

TabTemplate.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
  className: PropTypes.string
} : {};

export default TabTemplate;
//# sourceMappingURL=TabTemplate.js.map
