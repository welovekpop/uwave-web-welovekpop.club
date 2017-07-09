import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import ChatMessages from '../../containers/ChatMessages';
import ChatInput from '../../containers/ChatInput';

var _ref = _jsx('div', {
  className: 'ChatContainer'
}, void 0, _jsx('div', {
  className: 'ChatContainer-messages'
}, void 0, _jsx(ChatMessages, {})), _jsx('div', {
  className: 'ChatContainer-input ChatInputWrapper'
}, void 0, _jsx(ChatInput, {})));

var Chat = function Chat() {
  return _ref;
};

export default Chat;
//# sourceMappingURL=index.js.map
