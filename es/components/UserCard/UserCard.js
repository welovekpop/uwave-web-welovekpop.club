import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card/Card';
import CardHeader from 'material-ui/Card/CardHeader';
import CardActions from 'material-ui/Card/CardActions';
import CardText from 'material-ui/Card/CardText';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Avatar from '../Avatar';

var formatJoinDate = function formatJoinDate(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
};

var tempRoleIDToReadableName = ['User', 'Special', 'Moderator', 'Manager', 'Admin'];

var tempRoleIDToRoleName = {
  0: 'default',
  1: 'special',
  2: 'moderator',
  3: 'manager',
  4: 'admin'
};

// Our cards are much smaller than usual so we remove some padding to make it
// look less strange.
var smallPaddingStyle = {
  paddingTop: 0
};

var UserCard = function UserCard(_ref) {
  var muiTheme = _ref.muiTheme,
      user = _ref.user;
  return _jsx(Card, {
    className: 'UserCard'
  }, void 0, _jsx(CardHeader, {
    title: user.username,
    subtitle: tempRoleIDToReadableName[user.role],
    subtitleColor: muiTheme.rankColors[tempRoleIDToRoleName[user.role]],
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
  muiTheme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
} : {};

export default muiThemeable()(UserCard);
//# sourceMappingURL=UserCard.js.map
