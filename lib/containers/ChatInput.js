"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _reactRedux = require("react-redux");

var _reactBus = require("react-bus");

var _reselect = require("reselect");

var _ChatActionCreators = require("../actions/ChatActionCreators");

var _chatSelectors = require("../selectors/chatSelectors");

var _userSelectors = require("../selectors/userSelectors");

var _Input = _interopRequireDefault(require("../components/Chat/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  isLoggedIn: _userSelectors.isLoggedInSelector,
  mentionableUsers: _userSelectors.userListSelector,
  mentionableGroups: _chatSelectors.availableGroupMentionsSelector,
  availableEmoji: _chatSelectors.emojiCompletionsSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onSend: _ChatActionCreators.inputMessage
  }, dispatch);
};

var enhance = (0, _compose.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactBus.withBus)(), (0, _withProps.default)(function (_ref) {
  var bus = _ref.bus;
  return {
    onScroll: function onScroll(direction) {
      return bus.emit('chat:scroll', direction);
    }
  };
}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("span", {});

var ChatInputContainer = function ChatInputContainer(_ref2) {
  var isLoggedIn = _ref2.isLoggedIn,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["isLoggedIn"]);
  return isLoggedIn ? _react.default.createElement(_Input.default, props) : _ref3;
};

ChatInputContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: _propTypes.default.bool.isRequired
} : {};

var _default = enhance(ChatInputContainer);

exports.default = _default;
//# sourceMappingURL=ChatInput.js.map
