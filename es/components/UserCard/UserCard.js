import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardActions from 'material-ui/Card/CardActions';
import CardText from 'material-ui/Card/CardText';
import Avatar from '../Avatar';
import UserRoles from './UserRoles';
import formatJoinDate from '../../utils/formatJoinDate';

// Our cards are much smaller than usual so we remove some padding to make it
// look less strange.
var smallPaddingStyle = {
  paddingTop: 0
};

var UserCard = function UserCard(_ref) {
  var user = _ref.user;
  return _jsx(Card, {
    className: 'UserCard'
  }, void 0, _jsx(CardHeader, {
    title: user.username,
    subtitle: _jsx(UserRoles, {
      roles: user.roles
    }),
    avatar: _jsx(Avatar, {
      className: 'UserCard-avatar',
      user: user
    })
  }), _jsx(CardText, {
    style: smallPaddingStyle
  }, void 0, 'Joined: ', formatJoinDate(user.createdAt)), _jsx(CardActions, {
    style: smallPaddingStyle
  }, void 0));
};

UserCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired
} : {};

export default UserCard;
//# sourceMappingURL=UserCard.js.map
