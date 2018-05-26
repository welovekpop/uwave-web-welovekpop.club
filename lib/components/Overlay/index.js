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

var Overlay = function Overlay(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'bottom' : _ref$direction,
      children = _ref.children,
      className = _ref.className;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('Overlay', "Overlay--from-" + direction)
  }, void 0, (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('Overlay-body', className)
  }, void 0, children));
};

Overlay.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  direction: _propTypes.default.string
} : {};
var _default = Overlay;
exports.default = _default;
//# sourceMappingURL=index.js.map
