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

var OverlayContent = function OverlayContent(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('Overlay-content', className)
  }, void 0, children);
};

OverlayContent.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
} : {};
var _default = OverlayContent;
exports.default = _default;
//# sourceMappingURL=Content.js.map
