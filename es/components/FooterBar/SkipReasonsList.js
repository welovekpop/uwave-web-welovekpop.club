import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

var menuItemStyle = {
  WebkitAppearance: 'initial'
};

var SkipReasonsList = function SkipReasonsList(_ref) {
  var reasons = _ref.reasons,
      onSelect = _ref.onSelect;
  return _jsx(Menu, {
    onItemTouchTap: function onItemTouchTap(event, item) {
      return onSelect(item.props.value);
    }
  }, void 0, reasons.map(function (reason) {
    return _jsx(MenuItem, {
      value: reason.name,
      style: menuItemStyle,
      primaryText: reason.label
    }, reason.name);
  }));
};

SkipReasonsList.propTypes = process.env.NODE_ENV !== "production" ? {
  reasons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  onSelect: PropTypes.func.isRequired
} : {};

export default SkipReasonsList;
//# sourceMappingURL=SkipReasonsList.js.map
