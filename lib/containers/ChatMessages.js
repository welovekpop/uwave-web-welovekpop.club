'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _chatSelectors = require('../selectors/chatSelectors');

var _ModerationActionCreators = require('../actions/ModerationActionCreators');

var _ChatMessages = require('../components/Chat/ChatMessages');

var _ChatMessages2 = _interopRequireDefault(_ChatMessages);

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ChatMessages2.default);
//# sourceMappingURL=ChatMessages.js.map
//# sourceMappingURL=ChatMessages.js.map
