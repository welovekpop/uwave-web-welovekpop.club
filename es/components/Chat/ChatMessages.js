import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Motd from './Motd';
import ScrollDownNotice from './ScrollDownNotice';
import specialMessages from './specialMessages';

var ChatMessages =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ChatMessages, _React$Component);

  function ChatMessages() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      isScrolledToBottom: true
    }, _this.onExternalScroll = function (direction) {
      var el = _this.container;

      if (direction === 'start') {
        el.scrollTop = 0;
      } else if (direction === 'end') {
        el.scrollTop = el.scrollHeight;
      } else {
        el.scrollTop += direction * 250;
      }
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ChatMessages.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var bus = this.props.bus;
    this.scrollToBottom();
    this.shouldScrollToBottom = false;
    bus.on('chat:scroll', this.onExternalScroll); // A window resize may affect the available space.

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize);
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    this.shouldScrollToBottom = this.isScrolledToBottom();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // Keep the chat scrolled to the bottom after a new message is addded.
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var bus = this.props.bus;
    bus.off('chat:scroll', this.onExternalScroll);

    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize);
    }
  };

  _proto.scrollToBottom = function scrollToBottom() {
    var el = this.container;
    el.scrollTop = el.scrollHeight;
  };

  _proto.isScrolledToBottom = function isScrolledToBottom() {
    var el = this.container;
    var lastMessage = el.lastElementChild;

    if (lastMessage) {
      var neededSize = el.scrollTop + el.offsetHeight + lastMessage.offsetHeight;
      return neededSize >= el.scrollHeight - 20;
    }

    return true;
  };

  _proto.renderMotd = function renderMotd() {
    if (!this.props.motd) {
      return null;
    }

    return _jsx(Motd, {
      compileOptions: this.props.compileOptions
    }, void 0, this.props.motd);
  };

  _proto.renderMessage = function renderMessage(msg) {
    var SpecialMessage = specialMessages[msg.type];

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

  _proto.render = function render() {
    var isScrolledToBottom = this.state.isScrolledToBottom;
    return React.createElement("div", {
      ref: this.refContainer,
      className: "ChatMessages",
      onScroll: this.handleScroll
    }, _jsx(ScrollDownNotice, {
      show: !isScrolledToBottom,
      onClick: this.handleScrollToBottom
    }), this.renderMotd(), this.props.messages.map(this.renderMessage, this));
  };

  return ChatMessages;
}(React.Component);

export { ChatMessages as default };
ChatMessages.propTypes = process.env.NODE_ENV !== "production" ? {
  bus: PropTypes.object.isRequired,
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
