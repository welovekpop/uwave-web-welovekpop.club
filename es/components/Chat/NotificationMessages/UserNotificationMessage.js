import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate, Interpolate } from 'react-i18next';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import withHandlers from 'recompose/withHandlers';
import userCardable from '../../../utils/userCardable';
import Avatar from '../../Avatar';
import Username from '../../Username';
import MessageTimestamp from '../MessageTimestamp';
var enhance = compose(translate(), pure, userCardable(), withHandlers({
  onClick: function onClick(props) {
    return function (event) {
      event.preventDefault();
      props.openUserCard(props.user);
    };
  }
}));

var UserNotificationMessage = function UserNotificationMessage(_ref) {
  var className = _ref.className,
      user = _ref.user,
      timestamp = _ref.timestamp,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["className", "user", "timestamp", "onClick"]);

  return _jsx("div", {
    className: cx('ChatMessage', 'ChatMessage--userNotification', className)
  }, void 0, _jsx(Avatar, {
    className: "ChatMessage-avatar",
    user: user
  }), _jsx("div", {
    className: "ChatMessage-content"
  }, void 0, _jsx("div", {
    className: "ChatMessage-hover"
  }, void 0, _jsx(MessageTimestamp, {
    date: new Date(timestamp)
  })), React.createElement(Interpolate, _extends({
    username: _jsx("button", {
      className: "ChatMessage-username ChatMessage-cardable",
      onClick: onClick
    }, void 0, _jsx(Username, {
      user: user
    }))
  }, props))));
};

UserNotificationMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  timestamp: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
} : {};
export default enhance(UserNotificationMessage);
//# sourceMappingURL=UserNotificationMessage.js.map
