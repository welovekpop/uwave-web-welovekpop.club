"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Close = _interopRequireDefault(require("./Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      onCloseOverlay = _ref.onCloseOverlay,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'bottom' : _ref$direction;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('OverlayHeader', className)
  }, void 0, (0, _jsx2.default)("div", {
    className: "OverlayHeader-title"
  }, void 0, title.toUpperCase()), (0, _jsx2.default)("div", {
    className: "OverlayHeader-content"
  }, void 0, children), (0, _jsx2.default)(_Close.default, {
    direction: direction,
    className: "OverlayHeader-close",
    onClose: onCloseOverlay
  }));
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  direction: _propTypes.default.string,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};
var _default = Header; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
