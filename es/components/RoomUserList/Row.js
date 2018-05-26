import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import ListItem from "@material-ui/core/es/ListItem";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar";
import ListItemText from "@material-ui/core/es/ListItemText";
import userCardable from '../../utils/userCardable';
import Avatar from '../Avatar';
import Username from '../Username';
import Votes from './Votes';
var enhance = compose(userCardable(), withProps(function (props) {
  return {
    onOpenCard: function onOpenCard(event) {
      event.preventDefault();
      props.openUserCard(props.user);
    }
  };
}));

var RoomUserRow = function RoomUserRow(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onOpenCard = _ref.onOpenCard;
  return _jsx(ListItem, {
    button: true,
    className: cx('UserRow', 'UserRow--cardable', className),
    onClick: onOpenCard
  }, void 0, _jsx(ListItemAvatar, {}, void 0, _jsx(Avatar, {
    className: "UserRow-avatar",
    user: user
  })), _jsx(ListItemText, {}, void 0, _jsx(Username, {
    className: "UserRow-username",
    user: user
  })), React.createElement(Votes, _extends({
    className: "UserRow-votes"
  }, user.votes)));
};

RoomUserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
  onOpenCard: PropTypes.func.isRequired
} : {};
export default enhance(RoomUserRow);
//# sourceMappingURL=Row.js.map
