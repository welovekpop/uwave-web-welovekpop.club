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

var _List = require('material-ui/List');

var _ChevronRight = require('material-ui-icons/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A ListItem component wrapper around material-ui's ListItem,
 * with a üWave skin.
 */

var _ref2 = (0, _jsx3.default)(_ChevronRight2.default, {});

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      selected = _ref.selected,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children', 'selected']);

  return _react2.default.createElement(_List.ListItem, (0, _extends3.default)({
    button: true
  }, props, {
    className: (0, _classnames2.default)(className, selected && 'is-selected')
  }), children, selected && _ref2);
};

ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  selected: _propTypes2.default.bool
} : {};

exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map
//# sourceMappingURL=ListItem.js.map
