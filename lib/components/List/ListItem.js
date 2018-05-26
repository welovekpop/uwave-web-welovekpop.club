"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A ListItem component wrapper around material-ui's ListItem,
 * with a üWave skin.
 */
var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_ChevronRight.default, {});

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      selected = _ref.selected,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "selected"]);
  return _react.default.createElement(_ListItem.default, (0, _extends2.default)({
    button: true
  }, props, {
    className: (0, _classnames.default)(className, selected && 'is-selected')
  }), children, selected && _ref2);
};

ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  selected: _propTypes.default.bool
} : {};
var _default = ListItem;
exports.default = _default;
//# sourceMappingURL=ListItem.js.map
