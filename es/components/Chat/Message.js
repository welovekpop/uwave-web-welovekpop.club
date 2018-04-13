import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withHandlers from 'recompose/withHandlers';
import { CircularProgress } from "material-ui/es/Progress";
import userCardable from '../../utils/userCardable';
import Avatar from '../Avatar';
import Username from '../Username';
import compile from './Markup/compile';
import DeleteButton from './DeleteButton';
import MessageTimestamp from './MessageTimestamp';
var enhance = compose(pure, userCardable(), withHandlers({
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
_jsx("div", {
  className: "ChatMessage-avatar"
}, void 0, _jsx(CircularProgress, {
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
    avatar = _jsx(Avatar, {
      className: "ChatMessage-avatar",
      user: user
    });
  }

  var children = parsedText ? compile(parsedText, compileOptions) : text;
  var date = new Date(timestamp);
  var className = cx('ChatMessage', inFlight && 'ChatMessage--loading', isMention && 'ChatMessage--mention');
  return _jsx("div", {
    className: className
  }, void 0, avatar, _jsx("div", {
    className: "ChatMessage-content"
  }, void 0, _jsx("div", {
    className: "ChatMessage-hover"
  }, void 0, deletable && _jsx(DeleteButton, {
    onDelete: onDeleteClick
  }), _jsx(MessageTimestamp, {
    date: date
  })), _jsx("button", {
    className: "ChatMessage-username ChatMessage-cardable",
    onClick: onUsernameClick
  }, void 0, _jsx(Username, {
    user: user
  })), _jsx("span", {
    className: "ChatMessage-text"
  }, void 0, children)));
};

Message.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  parsedText: PropTypes.array.isRequired,
  inFlight: PropTypes.bool,
  timestamp: PropTypes.number.isRequired,
  isMention: PropTypes.bool.isRequired,
  deletable: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func,
  compileOptions: PropTypes.shape({
    availableEmoji: PropTypes.array,
    emojiImages: PropTypes.object
  }),
  onUsernameClick: PropTypes.func.isRequired
} : {};
export default enhance(Message);
//# sourceMappingURL=Message.js.map
