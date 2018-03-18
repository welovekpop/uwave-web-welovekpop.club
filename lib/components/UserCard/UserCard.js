'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require('material-ui/Card/CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardActions = require('material-ui/Card/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardText = require('material-ui/Card/CardText');

var _CardText2 = _interopRequireDefault(_CardText);

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _UserRoles = require('./UserRoles');

var _UserRoles2 = _interopRequireDefault(_UserRoles);

var _formatJoinDate = require('../../utils/formatJoinDate');

var _formatJoinDate2 = _interopRequireDefault(_formatJoinDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Our cards are much smaller than usual so we remove some padding to make it
// look less strange.
var smallPaddingStyle = {
  paddingTop: 0
};

var UserCard = function UserCard(_ref) {
  var user = _ref.user;
  return (0, _jsx3.default)(_Card2.default, {
    className: 'UserCard'
  }, void 0, (0, _jsx3.default)(_CardHeader2.default, {
    title: user.username,
    subtitle: (0, _jsx3.default)(_UserRoles2.default, {
      roles: user.roles
    }),
    avatar: (0, _jsx3.default)(_Avatar2.default, {
      className: 'UserCard-avatar',
      user: user
    })
  }), (0, _jsx3.default)(_CardText2.default, {
    style: smallPaddingStyle
  }, void 0, 'Joined: ', (0, _formatJoinDate2.default)(user.createdAt)), (0, _jsx3.default)(_CardActions2.default, {
    style: smallPaddingStyle
  }, void 0));
};

UserCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired
} : {};

exports.default = UserCard;
//# sourceMappingURL=UserCard.js.map
//# sourceMappingURL=UserCard.js.map
