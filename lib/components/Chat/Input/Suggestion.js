'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Suggestion = function Suggestion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      select = _ref.select,
      selected = _ref.selected,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'select', 'selected']);

  return _react2.default.createElement(_List.ListItem, (0, _extends3.default)({
    button: true,
    onClick: select,
    className: (0, _classnames2.default)('SuggestionItem', selected && 'is-focused', className)
  }, props), children);
};

Suggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  select: _propTypes2.default.func.isRequired,
  selected: _propTypes2.default.bool.isRequired
} : {};

exports.default = Suggestion;
//# sourceMappingURL=Suggestion.js.map
//# sourceMappingURL=Suggestion.js.map
