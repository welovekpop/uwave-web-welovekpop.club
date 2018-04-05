'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _Progress = require('material-ui/Progress');

var _userCardable = require('../../utils/userCardable');

var _userCardable2 = _interopRequireDefault(_userCardable);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Username = require('../Username');

var _Username2 = _interopRequireDefault(_Username);

var _compile = require('./Markup/compile');

var _compile2 = _interopRequireDefault(_compile);

var _DeleteButton = require('./DeleteButton');

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _MessageTimestamp = require('./MessageTimestamp');

var _MessageTimestamp2 = _interopRequireDefault(_MessageTimestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)(_pure2.default, (0, _userCardable2.default)(), (0, _withHandlers2.default)({
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

var _ref2 = (0, _jsx3.default)('div', {
  className: 'ChatMessage-avatar'
}, void 0, (0, _jsx3.default)(_Progress.CircularProgress, {
  size: '100%'
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

  var avatar = void 0;
  if (inFlight) {
    avatar = _ref2;
  } else {
    avatar = (0, _jsx3.default)(_Avatar2.default, {
      className: 'ChatMessage-avatar',
      user: user
    });
  }

  var children = parsedText ? (0, _compile2.default)(parsedText, compileOptions) : text;

  var date = new Date(timestamp);

  var className = (0, _classnames2.default)('ChatMessage', inFlight && 'ChatMessage--loading', isMention && 'ChatMessage--mention');
  return (0, _jsx3.default)('div', {
    className: className
  }, void 0, avatar, (0, _jsx3.default)('div', {
    className: 'ChatMessage-content'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'ChatMessage-hover'
  }, void 0, deletable && (0, _jsx3.default)(_DeleteButton2.default, {
    onDelete: onDeleteClick
  }), (0, _jsx3.default)(_MessageTimestamp2.default, {
    date: date
  })), (0, _jsx3.default)('button', {
    className: 'ChatMessage-username ChatMessage-cardable',
    onClick: onUsernameClick
  }, void 0, (0, _jsx3.default)(_Username2.default, {
    user: user
  })), (0, _jsx3.default)('span', {
    className: 'ChatMessage-text'
  }, void 0, children)));
};

Message.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired,
  text: _propTypes2.default.string.isRequired,
  parsedText: _propTypes2.default.array.isRequired,
  inFlight: _propTypes2.default.bool,
  timestamp: _propTypes2.default.number.isRequired,
  isMention: _propTypes2.default.bool.isRequired,
  deletable: _propTypes2.default.bool.isRequired,
  onDeleteClick: _propTypes2.default.func,
  compileOptions: _propTypes2.default.shape({
    availableEmoji: _propTypes2.default.array,
    emojiImages: _propTypes2.default.object
  }),
  onUsernameClick: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(Message);
//# sourceMappingURL=Message.js.map
//# sourceMappingURL=Message.js.map
