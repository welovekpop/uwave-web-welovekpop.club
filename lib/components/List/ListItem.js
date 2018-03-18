'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapProps = require('recompose/mapProps');

var _mapProps2 = _interopRequireDefault(_mapProps);

var _List = require('material-ui/List');

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A ListItem component wrapper around material-ui's ListItem,
 * with a üWave skin.
 */

var selectedStyle = {
  backgroundColor: '#9d2053'
};

var _ref2 = (0, _jsx3.default)(_chevronRight2.default, {
  color: '#fff'
});

var enhance = (0, _mapProps2.default)(function (_ref) {
  var selected = _ref.selected,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties3.default)(_ref, ['selected', 'className', 'style']);

  return (0, _extends3.default)({
    hoverColor: '#242424',
    rightIcon: selected ? _ref2 : null
  }, props, {
    className: (0, _classnames2.default)(className, selected && 'is-selected'),
    style: selected ? (0, _extends3.default)({}, selectedStyle, style) : style
  });
});

var ListItem = enhance(_List.ListItem);

ListItem.propTypes = {
  selected: _propTypes2.default.bool
};

exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map
//# sourceMappingURL=ListItem.js.map
