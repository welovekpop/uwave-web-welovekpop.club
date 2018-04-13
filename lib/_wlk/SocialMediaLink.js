"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("material-ui/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaLink = function SocialMediaLink(_ref) {
  var href = _ref.href,
      label = _ref.label,
      children = _ref.children;
  return (0, _jsx2.default)("li", {
    className: "wlk-AboutPage-socialMedia"
  }, void 0, (0, _jsx2.default)(_Button.default, {
    target: "_blank",
    href: href
  }, void 0, (0, _jsx2.default)("span", {
    className: "wlk-AboutPage-socialMediaIcon"
  }, void 0, children), label));
};

SocialMediaLink.propTypes = process.env.NODE_ENV !== "production" ? {
  href: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.element.isRequired
} : {};
var _default = SocialMediaLink; //# sourceMappingURL=SocialMediaLink.js.map

exports.default = _default;
//# sourceMappingURL=SocialMediaLink.js.map
