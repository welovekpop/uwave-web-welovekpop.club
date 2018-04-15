import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Typography from "material-ui/es/Typography";
import Card from "material-ui/es/Card/Card";
import CardHeader from "material-ui/es/Card/CardHeader";
import CardActions from "material-ui/es/Card/CardActions";
import CardContent from "material-ui/es/Card/CardContent";
import Avatar from '../Avatar';
import UserRoles from './UserRoles';
import formatJoinDate from '../../utils/formatJoinDate';

var UserCard = function UserCard(_ref) {
  var user = _ref.user;
  return _jsx(Card, {
    className: "UserCard"
  }, void 0, _jsx(CardHeader, {
    className: "UserCard-header",
    title: user.username,
    subheader: _jsx(UserRoles, {
      roles: user.roles
    }),
    avatar: _jsx(Avatar, {
      className: "UserCard-avatar",
      user: user
    })
  }), _jsx(CardContent, {
    className: "UserCard-joinDate"
  }, void 0, _jsx(Typography, {}, void 0, "Joined: ", formatJoinDate(user.createdAt))), _jsx(CardActions, {
    className: "UserCard-actions"
  }));
};

UserCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired
} : {};
export default UserCard;
//# sourceMappingURL=UserCard.js.map
