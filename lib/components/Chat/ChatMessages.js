'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LogMessage = require('./LogMessage');

var _LogMessage2 = _interopRequireDefault(_LogMessage);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _JoinMessage = require('./NotificationMessages/JoinMessage');

var _JoinMessage2 = _interopRequireDefault(_JoinMessage);

var _LeaveMessage = require('./NotificationMessages/LeaveMessage');

var _LeaveMessage2 = _interopRequireDefault(_LeaveMessage);

var _NameChangedMessage = require('./NotificationMessages/NameChangedMessage');

var _NameChangedMessage2 = _interopRequireDefault(_NameChangedMessage);

var _Motd = require('./Motd');

var _Motd2 = _interopRequireDefault(_Motd);

var _ScrollDownNotice = require('./ScrollDownNotice');

var _ScrollDownNotice2 = _interopRequireDefault(_ScrollDownNotice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var specialTypes = {
  log: _LogMessage2.default,
  userJoin: _JoinMessage2.default,
  userLeave: _LeaveMessage2.default,
  userNameChanged: _NameChangedMessage2.default
};

var ChatMessages = function (_React$Component) {
  (0, _inherits3.default)(ChatMessages, _React$Component);

  function ChatMessages() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ChatMessages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
    return (0, _jsx3.default)(_Motd2.default, {
      compileOptions: this.props.compileOptions
    }, void 0, this.props.motd);
  };

  ChatMessages.prototype.renderMessage = function renderMessage(msg) {
    var SpecialMessage = specialTypes[msg.type];
    if (SpecialMessage) {
      return _react2.default.createElement(SpecialMessage, (0, _extends3.default)({
        key: msg._id
      }, msg));
    }

    return _react2.default.createElement(_Message2.default, (0, _extends3.default)({
      key: msg._id,
      compileOptions: this.props.compileOptions,
      deletable: this.props.canDeleteMessages,
      onDelete: this.props.onDeleteMessage
    }, msg));
  };

  ChatMessages.prototype.render = function render() {
    var isScrolledToBottom = this.state.isScrolledToBottom;

    return _react2.default.createElement('div', {
      ref: this.refContainer,
      className: 'ChatMessages',
      onScroll: this.handleScroll
    }, (0, _jsx3.default)(_ScrollDownNotice2.default, {
      show: !isScrolledToBottom,
      onClick: this.handleScrollToBottom
    }), this.renderMotd(), this.props.messages.map(this.renderMessage, this));
  };

  return ChatMessages;
}(_react2.default.Component);

exports.default = ChatMessages;

ChatMessages.propTypes = process.env.NODE_ENV !== "production" ? {
  messages: _propTypes2.default.array,
  motd: _propTypes2.default.array,
  canDeleteMessages: _propTypes2.default.bool,
  onDeleteMessage: _propTypes2.default.func,
  compileOptions: _propTypes2.default.shape({
    availableEmoji: _propTypes2.default.array,
    emojiImages: _propTypes2.default.object
  })
} : {};
//# sourceMappingURL=ChatMessages.js.map
//# sourceMappingURL=ChatMessages.js.map
