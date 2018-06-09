"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Message = _interopRequireDefault(require("./Message"));

var _Motd = _interopRequireDefault(require("./Motd"));

var _ScrollDownNotice = _interopRequireDefault(require("./ScrollDownNotice"));

var _specialMessages = _interopRequireDefault(require("./specialMessages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChatMessages =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ChatMessages, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
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
  }; // This usually means that new messages came in;
  // either way it does not hurt to run this multiple times
  // so it is safe to use.
  // eslint-disable-next-line camelcase, react/sort-comp


  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps() {
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

    return (0, _jsx2.default)(_Motd.default, {
      compileOptions: this.props.compileOptions
    }, void 0, this.props.motd);
  };

  _proto.renderMessage = function renderMessage(msg) {
    var SpecialMessage = _specialMessages.default[msg.type];

    if (SpecialMessage) {
      return _react.default.createElement(SpecialMessage, (0, _extends2.default)({
        key: msg._id
      }, msg));
    }

    return _react.default.createElement(_Message.default, (0, _extends2.default)({
      key: msg._id,
      compileOptions: this.props.compileOptions,
      deletable: this.props.canDeleteMessages,
      onDelete: this.props.onDeleteMessage
    }, msg));
  };

  _proto.render = function render() {
    var isScrolledToBottom = this.state.isScrolledToBottom;
    return _react.default.createElement("div", {
      ref: this.refContainer,
      className: "ChatMessages",
      onScroll: this.handleScroll
    }, (0, _jsx2.default)(_ScrollDownNotice.default, {
      show: !isScrolledToBottom,
      onClick: this.handleScrollToBottom
    }), this.renderMotd(), this.props.messages.map(this.renderMessage, this));
  };

  return ChatMessages;
}(_react.default.Component);

exports.default = ChatMessages;
ChatMessages.propTypes = process.env.NODE_ENV !== "production" ? {
  bus: _propTypes.default.object.isRequired,
  messages: _propTypes.default.array,
  motd: _propTypes.default.array,
  canDeleteMessages: _propTypes.default.bool,
  onDeleteMessage: _propTypes.default.func,
  compileOptions: _propTypes.default.shape({
    availableEmoji: _propTypes.default.array,
    emojiImages: _propTypes.default.object
  })
} : {};
//# sourceMappingURL=ChatMessages.js.map
