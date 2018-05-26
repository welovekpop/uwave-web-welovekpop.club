"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortcode = function shortcode(name) {
  return ":" + name + ":";
};

var url = function url(filename) {
  return "/assets/emoji/" + filename;
};

var Emoji = function Emoji(_ref) {
  var name = _ref.name,
      image = _ref.image;
  return (0, _jsx2.default)(_Tooltip.default, {
    title: shortcode(name),
    placement: "top"
  }, void 0, (0, _jsx2.default)("span", {
    className: "Emoji",
    "data-emoji": name
  }, void 0, (0, _jsx2.default)("img", {
    className: "Emoji-img",
    src: url(image),
    alt: shortcode(name)
  })));
};

Emoji.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes.default.string.isRequired,
  image: _propTypes.default.string.isRequired
} : {};
var _default = Emoji;
exports.default = _default;
//# sourceMappingURL=Emoji.js.map
