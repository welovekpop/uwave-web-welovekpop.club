'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require('material-ui/List');

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      props = (0, _objectWithoutProperties3.default)(_ref, ['muiTheme', 'value', 'select', 'selected']);

  return _react2.default.createElement(_List.ListItem, (0, _extends3.default)({
    style: selected ? (0, _extends3.default)({}, listItemStyle, {
      background: (0, _colorManipulator.fade)(muiTheme.palette.textColor, 0.1)
    }) : listItemStyle,
    innerDivStyle: innerDivStyle,
    value: value,
    primaryText: value,
    onClick: select
  }, props));
};

Suggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  value: _propTypes2.default.string.isRequired,
  select: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.bool.isRequired
} : {};

exports.default = (0, _muiThemeable2.default)()(Suggestion);
//# sourceMappingURL=Suggestion.js.map
//# sourceMappingURL=Suggestion.js.map
