import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import LogMessage from './LogMessage';
import Message from './Message';
import JoinMessage from './NotificationMessages/JoinMessage';
import LeaveMessage from './NotificationMessages/LeaveMessage';
import NameChangedMessage from './NotificationMessages/NameChangedMessage';
import Motd from './Motd';
import ScrollDownNotice from './ScrollDownNotice';

var specialTypes = {
  log: LogMessage,
  userJoin: JoinMessage,
  userLeave: LeaveMessage,
  userNameChanged: NameChangedMessage
};

var ChatMessages = function (_React$Component) {
  _inherits(ChatMessages, _React$Component);

  function ChatMessages() {
    var _temp, _this, _ret;

    _classCallCheck(this, ChatMessages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      isScrolledToBottom: true
    }, _this.handleResize = function () {
      if (_this.state.isScrolledToBottom) {
        _this.scrollToBottom();
      }
    }, _this.handleScroll = function () {
      _this.setState({
        isScrolledToBottom: _this.isScrolledToBottom()
      });
    }, _this.handleScrollToBottom = function (event) {
      event.preventDefault();
      _this.scrollToBottom();
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ChatMessages.prototype.componentDidMount = function componentDidMount() {
    this.scrollToBottom();
    this.shouldScrollToBottom = false;

    // A window resize may affect the available space.
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
    }
  };

  ChatMessages.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.shouldScrollToBottom = this.isScrolledToBottom();
  };

  ChatMessages.prototype.componentDidUpdate = function componentDidUpdate() {
    // Keep the chat scrolled to the bottom after a new message is addded.
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  };

  ChatMessages.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  };

  ChatMessages.prototype.scrollToBottom = function scrollToBottom() {
    var el = this.container;
    el.scrollTop = el.scrollHeight;
  };

  ChatMessages.prototype.isScrolledToBottom = function isScrolledToBottom() {
    var el = this.container;
    var lastMessage = el.lastElementChild;
    if (lastMessage) {
      var neededSize = el.scrollTop + el.offsetHeight + lastMessage.offsetHeight;
      return neededSize >= el.scrollHeight - 20;
    }
    return true;
  };

  ChatMessages.prototype.renderMotd = function renderMotd() {
    if (!this.props.motd) {
      return null;
    }
    return _jsx(Motd, {
      compileOptions: this.props.compileOptions
    }, void 0, this.props.motd);
  };

  ChatMessages.prototype.renderMessage = function renderMessage(msg) {
    var SpecialMessage = specialTypes[msg.type];
    if (SpecialMessage) {
      return React.createElement(SpecialMessage, _extends({
        key: msg._id
      }, msg));
    }

    return React.createElement(Message, _extends({
      key: msg._id,
      compileOptions: this.props.compileOptions,
      deletable: this.props.canDeleteMessages,
      onDelete: this.props.onDeleteMessage
    }, msg));
  };

  ChatMessages.prototype.render = function render() {
    var isScrolledToBottom = this.state.isScrolledToBottom;


    return React.createElement(
      'div',
      {
        ref: this.refContainer,
        className: 'ChatMessages',
        onScroll: this.handleScroll
      },
      _jsx(ScrollDownNotice, {
        show: !isScrolledToBottom,
        onClick: this.handleScrollToBottom
      }),
      this.renderMotd(),
      this.props.messages.map(this.renderMessage, this)
    );
  };

  return ChatMessages;
}(React.Component);

export default ChatMessages;
ChatMessages.propTypes = process.env.NODE_ENV !== "production" ? {
  messages: PropTypes.array,
  motd: PropTypes.array,
  canDeleteMessages: PropTypes.bool,
  onDeleteMessage: PropTypes.func,
  compileOptions: PropTypes.shape({
    availableEmoji: PropTypes.array,
    emojiImages: PropTypes.object
  })
} : {};
//# sourceMappingURL=ChatMessages.js.map
