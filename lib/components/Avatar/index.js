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

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('Avatar', className)
  }, void 0, (0, _jsx2.default)("img", {
    className: "Avatar-image",
    src: user.avatar || "https://sigil.u-wave.net/" + encodeURIComponent(user._id),
    alt: user.username
  }));
};

Avatar.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  user: _propTypes.default.object.isRequired
} : {};
var _default = Avatar; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
