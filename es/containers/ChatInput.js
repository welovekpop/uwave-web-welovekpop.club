import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

var _ref2 = _jsx('span', {});

var ChatInputContainer = function ChatInputContainer(_ref) {
  var isLoggedIn = _ref.isLoggedIn,
      props = _objectWithoutProperties(_ref, ['isLoggedIn']);

  return isLoggedIn ? React.createElement(ChatInput, props) : _ref2;
};

ChatInputContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: PropTypes.bool.isRequired
} : {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputContainer);
//# sourceMappingURL=ChatInput.js.map
