import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { connect } from 'react-redux';
import { withBus } from 'react-bus';
import { createStructuredSelector } from 'reselect';
import { inputMessage } from '../actions/ChatActionCreators';
import { availableGroupMentionsSelector, emojiCompletionsSelector } from '../selectors/chatSelectors';
import { userListSelector, isLoggedInSelector } from '../selectors/userSelectors';
import ChatInput from '../components/Chat/Input';
var mapStateToProps = createStructuredSelector({
  isLoggedIn: isLoggedInSelector,
  mentionableUsers: userListSelector,
  mentionableGroups: availableGroupMentionsSelector,
  availableEmoji: emojiCompletionsSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSend: inputMessage
  }, dispatch);
};

var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withBus(), withProps(function (_ref) {
  var bus = _ref.bus;
  return {
    onScroll: function onScroll(direction) {
      return bus.emit('chat:scroll', direction);
    }
  };
}));

var _ref3 =
/*#__PURE__*/
_jsx("span", {});

var ChatInputContainer = function ChatInputContainer(_ref2) {
  var isLoggedIn = _ref2.isLoggedIn,
      props = _objectWithoutProperties(_ref2, ["isLoggedIn"]);

  return isLoggedIn ? React.createElement(ChatInput, props) : _ref3;
};

ChatInputContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: PropTypes.bool.isRequired
} : {};
export default enhance(ChatInputContainer);
//# sourceMappingURL=ChatInput.js.map
