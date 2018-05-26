"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mention = function Mention(_ref) {
  var className = _ref.className,
      user = _ref.user,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "user"]);
  return _react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)('ChatMention', className)
  }, props), "@", user.username);
};

Mention.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  user: _propTypes.default.shape({
    username: _propTypes.default.string.isRequired
  }).isRequired
} : {};
var _default = Mention;
exports.default = _default;
//# sourceMappingURL=Mention.js.map
