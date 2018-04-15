"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _userSelectors = require("../../selectors/userSelectors");

var _ChatMessages = _interopRequireDefault(require("../../containers/ChatMessages"));

var _ChatInput = _interopRequireDefault(require("../../containers/ChatInput"));

var _LoginButtons = _interopRequireDefault(require("./LoginButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  isLoggedIn: _userSelectors.isLoggedInSelector
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "ChatContainer-messages"
}, void 0, (0, _jsx2.default)(_ChatMessages.default, {}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_ChatInput.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_LoginButtons.default, {});

var ChatContainer = function ChatContainer(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  return (0, _jsx2.default)("div", {
    className: "ChatContainer"
  }, void 0, _ref2, (0, _jsx2.default)("div", {
    className: "ChatContainer-input ChatInputWrapper"
  }, void 0, isLoggedIn ? _ref3 : _ref4));
};

ChatContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: _propTypes.default.bool.isRequired
} : {};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ChatContainer); //# sourceMappingURL=Chat.js.map


exports.default = _default;
//# sourceMappingURL=Chat.js.map
