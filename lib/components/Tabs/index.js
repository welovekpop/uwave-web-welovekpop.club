'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = require('material-ui/Tabs');

var _TabTemplate = require('./TabTemplate');

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var activeTabStyle = (0, _extends3.default)({}, tabStyle, {
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
      props = (0, _objectWithoutProperties3.default)(_ref, ['tabItemContainerStyle', 'inkBarStyle', 'contentContainerStyle', 'children', 'value']);

  return _react2.default.createElement(_Tabs.Tabs, (0, _extends3.default)({
    tabItemContainerStyle: (0, _extends3.default)({}, baseTabItemContainerStyle, tabItemContainerStyle),
    inkBarStyle: (0, _extends3.default)({}, baseInkBarStyle, inkBarStyle),
    contentContainerStyle: (0, _extends3.default)({}, baseContentStyle, contentContainerStyle),
    tabTemplate: _TabTemplate2.default,
    value: value
  }, props), _react2.default.Children.map(children, function (tab) {
    return _react2.default.cloneElement(tab, {
      style: (0, _extends3.default)({}, value === tab.props.value ? activeTabStyle : tabStyle, tab.props.style)
    });
  }));
};

StyledTabs.propTypes = process.env.NODE_ENV !== "production" ? {
  tabItemContainerStyle: _propTypes2.default.object,
  inkBarStyle: _propTypes2.default.object,
  contentContainerStyle: _propTypes2.default.object,
  children: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired,
  value: _propTypes2.default.string
} : {};

exports.default = StyledTabs;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
