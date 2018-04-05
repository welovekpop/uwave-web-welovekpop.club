import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as MuiListItem } from 'material-ui/es/List';
import SelectedIcon from 'material-ui-icons/ChevronRight';

/**
 * A ListItem component wrapper around material-ui's ListItem,
 * with a üWave skin.
 */

var _ref2 = _jsx(SelectedIcon, {});

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ['className', 'children', 'selected']);

  return React.createElement(
    MuiListItem,
    _extends({
      button: true
    }, props, {
      className: cx(className, selected && 'is-selected')
    }),
    children,
    selected && _ref2
  );
};

ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool
} : {};

export default ListItem;
//# sourceMappingURL=ListItem.js.map
