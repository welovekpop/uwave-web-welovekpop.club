import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withBus } from 'react-bus';
import { createStructuredSelector } from 'reselect';
import { motdSelector, messagesSelector, markupCompilerOptionsSelector, canDeleteMessagesSelector } from '../selectors/chatSelectors';
import { deleteChatMessage } from '../actions/ModerationActionCreators';
import ChatMessages from '../components/Chat/ChatMessages';
var mapStateToProps = createStructuredSelector({
  motd: motdSelector,
  messages: messagesSelector,
  compileOptions: markupCompilerOptionsSelector,
  canDeleteMessages: canDeleteMessagesSelector
});
var mapDispatchToProps = {
  onDeleteMessage: deleteChatMessage
};
var enhance = compose(connect(mapStateToProps, mapDispatchToProps), withBus());
export default enhance(ChatMessages);
//# sourceMappingURL=ChatMessages.js.map
