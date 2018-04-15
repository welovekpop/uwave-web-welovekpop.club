"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelContainer = function PanelContainer(_ref) {
  var selected = _ref.selected,
      children = _ref.children;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('SidePanel-panel', selected && 'is-selected')
  }, void 0, children);
};

PanelContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  selected: _propTypes.default.bool.isRequired
} : {};
var _default = PanelContainer; //# sourceMappingURL=PanelContainer.js.map

exports.default = _default;
//# sourceMappingURL=PanelContainer.js.map
