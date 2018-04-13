"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shortenUrl = _interopRequireDefault(require("shorten-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "href"]);
  return _react.default.createElement("a", (0, _extends2.default)({
    href: href,
    title: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), (0, _shortenUrl.default)(children, 60));
};

Link.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired
} : {};
var _default = Link; //# sourceMappingURL=Link.js.map

exports.default = _default;
//# sourceMappingURL=Link.js.map
