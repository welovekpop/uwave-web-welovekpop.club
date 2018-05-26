"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _compile = _interopRequireDefault(require("./Markup/compile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Motd = function Motd(_ref) {
  var children = _ref.children,
      compileOptions = _ref.compileOptions;
  return (0, _jsx2.default)("div", {
    className: "ChatMessage ChatMessage--motd"
  }, void 0, (0, _jsx2.default)("div", {
    className: "ChatMessage-content"
  }, void 0, (0, _compile.default)(children, compileOptions)));
};

Motd.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.array.isRequired,
  compileOptions: _propTypes.default.shape({
    availableEmoji: _propTypes.default.array,
    emojiImages: _propTypes.default.object
  })
} : {};

var _default = (0, _pure.default)(Motd);

exports.default = _default;
//# sourceMappingURL=Motd.js.map
