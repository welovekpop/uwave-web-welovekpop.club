import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as MuiTabs } from 'material-ui/Tabs';
import TabTemplate from './TabTemplate';

var baseTabItemContainerStyle = {
  height: 56,
  backgroundColor: '#151515'
};

var tabStyle = {
  float: 'left',
  color: '#fff',
  fontSize: '10pt',
  height: '100%',
  backgroundColor: '#151515'
};

var activeTabStyle = _extends({}, tabStyle, {
  backgroundColor: 'rgba(48, 48, 48, 0.3)'
});

var baseInkBarStyle = {
  height: 3,
  marginTop: -3,
  backgroundColor: '#fff'
};

var baseContentStyle = {
  position: 'relative'
};

// This component just wraps the Material-UI tabs with some default styling.
// Our styling isn't quite material design, so we can't just use themes for
// this stuff.
var StyledTabs = function StyledTabs(_ref) {
  var tabItemContainerStyle = _ref.tabItemContainerStyle,
      inkBarStyle = _ref.inkBarStyle,
      contentContainerStyle = _ref.contentContainerStyle,
      children = _ref.children,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ['tabItemContainerStyle', 'inkBarStyle', 'contentContainerStyle', 'children', 'value']);

  return React.createElement(
    MuiTabs,
    _extends({
      tabItemContainerStyle: _extends({}, baseTabItemContainerStyle, tabItemContainerStyle),
      inkBarStyle: _extends({}, baseInkBarStyle, inkBarStyle),
      contentContainerStyle: _extends({}, baseContentStyle, contentContainerStyle),
      tabTemplate: TabTemplate,
      value: value
    }, props),
    React.Children.map(children, function (tab) {
      return React.cloneElement(tab, {
        style: _extends({}, value === tab.props.value ? activeTabStyle : tabStyle, tab.props.style)
      });
    })
  );
};

StyledTabs.propTypes = process.env.NODE_ENV !== "production" ? {
  tabItemContainerStyle: PropTypes.object,
  inkBarStyle: PropTypes.object,
  contentContainerStyle: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  value: PropTypes.string
} : {};

export default StyledTabs;
//# sourceMappingURL=index.js.map
