"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = require("material-ui/List");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Suggestion = function Suggestion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      select = _ref.select,
      selected = _ref.selected,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "select", "selected"]);
  return _react.default.createElement(_List.ListItem, (0, _extends2.default)({
    button: true,
    onClick: select,
    className: (0, _classnames.default)('SuggestionItem', selected && 'is-focused', className)
  }, props), children);
};

Suggestion.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  select: _propTypes.default.func.isRequired,
  selected: _propTypes.default.bool.isRequired
} : {};
var _default = Suggestion; //# sourceMappingURL=Suggestion.js.map

exports.default = _default;
//# sourceMappingURL=Suggestion.js.map
