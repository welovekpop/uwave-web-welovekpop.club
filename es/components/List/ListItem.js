import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import mapProps from 'recompose/mapProps';
import { ListItem as MuiListItem } from 'material-ui/List';
import SelectedIcon from 'material-ui/svg-icons/navigation/chevron-right';

/**
 * A ListItem component wrapper around material-ui's ListItem,
 * with a üWave skin.
 */

var selectedStyle = {
  backgroundColor: '#9d2053'
};

var _ref2 = _jsx(SelectedIcon, {
  color: '#fff'
});

var enhance = mapProps(function (_ref) {
  var selected = _ref.selected,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['selected', 'className', 'style']);

  return _extends({
    hoverColor: '#242424',
    rightIcon: selected ? _ref2 : null
  }, props, {
    className: cx(className, selected && 'is-selected'),
    style: selected ? _extends({}, selectedStyle, style) : style
  });
});

var ListItem = enhance(MuiListItem);

ListItem.propTypes = {
  selected: PropTypes.bool
};

export default ListItem;
//# sourceMappingURL=ListItem.js.map
