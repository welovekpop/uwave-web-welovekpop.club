'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _reactRedux = require('react-redux');

var _reactBus = require('react-bus');

var _reselect = require('reselect');

var _ChatActionCreators = require('../actions/ChatActionCreators');

var _chatSelectors = require('../selectors/chatSelectors');

var _userSelectors = require('../selectors/userSelectors');

var _Input = require('../components/Chat/Input');

var _Input2 = _interopRequireDefault(_Input);

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

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactBus.withBus)(), (0, _withProps2.default)(function (_ref) {
  var bus = _ref.bus;
  return {
    onScroll: function onScroll(direction) {
      return bus.emit('chat:scroll', direction);
    }
  };
}));

var _ref3 = (0, _jsx3.default)('span', {});

var ChatInputContainer = function ChatInputContainer(_ref2) {
  var isLoggedIn = _ref2.isLoggedIn,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['isLoggedIn']);

  return isLoggedIn ? _react2.default.createElement(_Input2.default, props) : _ref3;
};

ChatInputContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: _propTypes2.default.bool.isRequired
} : {};

exports.default = enhance(ChatInputContainer);
//# sourceMappingURL=ChatInput.js.map
//# sourceMappingURL=ChatInput.js.map
