import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isLoggedInSelector } from '../../selectors/userSelectors';
import ChatMessages from '../../containers/ChatMessages';
import ChatInput from '../../containers/ChatInput';
import LoginButtons from './LoginButtons';
var mapStateToProps = createStructuredSelector({
  isLoggedIn: isLoggedInSelector
});

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "ChatContainer-messages"
}, void 0, _jsx(ChatMessages, {}));

var _ref3 =
/*#__PURE__*/
_jsx(ChatInput, {});

var _ref4 =
/*#__PURE__*/
_jsx(LoginButtons, {});

var ChatContainer = function ChatContainer(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  return _jsx("div", {
    className: "ChatContainer"
  }, void 0, _ref2, _jsx("div", {
    className: "ChatContainer-input ChatInputWrapper"
  }, void 0, isLoggedIn ? _ref3 : _ref4));
};

ChatContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isLoggedIn: PropTypes.bool.isRequired
} : {};
export default connect(mapStateToProps)(ChatContainer);
//# sourceMappingURL=Chat.js.map
