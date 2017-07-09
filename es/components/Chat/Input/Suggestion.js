import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import { fade } from 'material-ui/utils/colorManipulator';
import muiThemeable from 'material-ui/styles/muiThemeable';

var listItemStyle = {
  WebkitAppearance: 'initial'
};
var innerDivStyle = {
  height: 40,
  lineHeight: '24px',
  padding: '8px 16px 8px 48px'
};

var Suggestion = function Suggestion(_ref) {
  var muiTheme = _ref.muiTheme,
      value = _ref.value,
      select = _ref.select,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ['muiTheme', 'value', 'select', 'selected']);

  return React.createElement(ListItem, _extends({
    style: selected ? _extends({}, listItemStyle, {
      background: fade(muiTheme.palette.textColor, 0.1)
    }) : listItemStyle,
    innerDivStyle: innerDivStyle,
    value: value,
    primaryText: value,
    onTouchTap: select
  }, props));
};

Suggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
} : {};

export default muiThemeable()(Suggestion);
//# sourceMappingURL=Suggestion.js.map
