"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reactRedux = require("react-redux");

var _reactBus = require("react-bus");

var _reselect = require("reselect");

var _chatSelectors = require("../selectors/chatSelectors");

var _ModerationActionCreators = require("../actions/ModerationActionCreators");

var _ChatMessages = _interopRequireDefault(require("../components/Chat/ChatMessages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  motd: _chatSelectors.motdSelector,
  messages: _chatSelectors.messagesSelector,
  compileOptions: _chatSelectors.markupCompilerOptionsSelector,
  canDeleteMessages: _chatSelectors.canDeleteMessagesSelector
});
var mapDispatchToProps = {
  onDeleteMessage: _ModerationActionCreators.deleteChatMessage
};
var enhance = (0, _compose.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactBus.withBus)());

var _default = enhance(_ChatMessages.default); //# sourceMappingURL=ChatMessages.js.map


exports.default = _default;
//# sourceMappingURL=ChatMessages.js.map
