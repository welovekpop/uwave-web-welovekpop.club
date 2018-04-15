"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _Progress = require("material-ui/Progress");

var _userCardable = _interopRequireDefault(require("../../utils/userCardable"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Username = _interopRequireDefault(require("../Username"));

var _compile = _interopRequireDefault(require("./Markup/compile"));

var _DeleteButton = _interopRequireDefault(require("./DeleteButton"));

var _MessageTimestamp = _interopRequireDefault(require("./MessageTimestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)(_pure.default, (0, _userCardable.default)(), (0, _withHandlers.default)({
  onDeleteClick: function onDeleteClick(props) {
    return function () {
      return props.onDelete(props._id);
    };
  },
  onUsernameClick: function onUsernameClick(props) {
    return function (event) {
      event.preventDefault();
      props.openUserCard(props.user);
    };
  }
}));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "ChatMessage-avatar"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
}));

var Message = function Message(_ref) {
  var user = _ref.user,
      text = _ref.text,
      parsedText = _ref.parsedText,
      inFlight = _ref.inFlight,
      isMention = _ref.isMention,
      timestamp = _ref.timestamp,
      compileOptions = _ref.compileOptions,
      deletable = _ref.deletable,
      onDeleteClick = _ref.onDeleteClick,
      onUsernameClick = _ref.onUsernameClick;
  var avatar;

  if (inFlight) {
    avatar = _ref2;
  } else {
    avatar = (0, _jsx2.default)(_Avatar.default, {
      className: "ChatMessage-avatar",
      user: user
    });
  }

  var children = parsedText ? (0, _compile.default)(parsedText, compileOptions) : text;
  var date = new Date(timestamp);
  var className = (0, _classnames.default)('ChatMessage', inFlight && 'ChatMessage--loading', isMention && 'ChatMessage--mention');
  return (0, _jsx2.default)("div", {
    className: className
  }, void 0, avatar, (0, _jsx2.default)("div", {
    className: "ChatMessage-content"
  }, void 0, (0, _jsx2.default)("div", {
    className: "ChatMessage-hover"
  }, void 0, deletable && (0, _jsx2.default)(_DeleteButton.default, {
    onDelete: onDeleteClick
  }), (0, _jsx2.default)(_MessageTimestamp.default, {
    date: date
  })), (0, _jsx2.default)("button", {
    className: "ChatMessage-username ChatMessage-cardable",
    onClick: onUsernameClick
  }, void 0, (0, _jsx2.default)(_Username.default, {
    user: user
  })), (0, _jsx2.default)("span", {
    className: "ChatMessage-text"
  }, void 0, children)));
};

Message.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired,
  text: _propTypes.default.string.isRequired,
  parsedText: _propTypes.default.array.isRequired,
  inFlight: _propTypes.default.bool,
  timestamp: _propTypes.default.number.isRequired,
  isMention: _propTypes.default.bool.isRequired,
  deletable: _propTypes.default.bool.isRequired,
  onDeleteClick: _propTypes.default.func,
  compileOptions: _propTypes.default.shape({
    availableEmoji: _propTypes.default.array,
    emojiImages: _propTypes.default.object
  }),
  onUsernameClick: _propTypes.default.func.isRequired
} : {};

var _default = enhance(Message); //# sourceMappingURL=Message.js.map


exports.default = _default;
//# sourceMappingURL=Message.js.map
