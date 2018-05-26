"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pure = _interopRequireDefault(require("recompose/pure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogMessage = function LogMessage(_ref) {
  var text = _ref.text;
  return (0, _jsx2.default)("div", {
    className: "ChatMessage ChatMessage--log"
  }, void 0, (0, _jsx2.default)("div", {
    className: "ChatMessage-content"
  }, void 0, (0, _jsx2.default)("span", {
    className: "ChatMessage-text"
  }, void 0, text)));
};

LogMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes.default.string.isRequired
} : {};

var _default = (0, _pure.default)(LogMessage);

exports.default = _default;
//# sourceMappingURL=LogMessage.js.map
