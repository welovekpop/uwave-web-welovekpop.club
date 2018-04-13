"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _ChatMessages = _interopRequireDefault(require("../../containers/ChatMessages"));

var _ChatInput = _interopRequireDefault(require("../../containers/ChatInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "ChatContainer"
}, void 0, (0, _jsx2.default)("div", {
  className: "ChatContainer-messages"
}, void 0, (0, _jsx2.default)(_ChatMessages.default, {})), (0, _jsx2.default)("div", {
  className: "ChatContainer-input ChatInputWrapper"
}, void 0, (0, _jsx2.default)(_ChatInput.default, {})));

var Chat = function Chat() {
  return _ref;
};

var _default = Chat; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
