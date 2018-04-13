"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("material-ui/Typography"));

var _Card = _interopRequireDefault(require("material-ui/Card/Card"));

var _CardHeader = _interopRequireDefault(require("material-ui/Card/CardHeader"));

var _CardActions = _interopRequireDefault(require("material-ui/Card/CardActions"));

var _CardContent = _interopRequireDefault(require("material-ui/Card/CardContent"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _UserRoles = _interopRequireDefault(require("./UserRoles"));

var _formatJoinDate = _interopRequireDefault(require("../../utils/formatJoinDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCard = function UserCard(_ref) {
  var user = _ref.user;
  return (0, _jsx2.default)(_Card.default, {
    className: "UserCard"
  }, void 0, (0, _jsx2.default)(_CardHeader.default, {
    className: "UserCard-header",
    title: user.username,
    subheader: (0, _jsx2.default)(_UserRoles.default, {
      roles: user.roles
    }),
    avatar: (0, _jsx2.default)(_Avatar.default, {
      className: "UserCard-avatar",
      user: user
    })
  }), (0, _jsx2.default)(_CardContent.default, {
    className: "UserCard-joinDate"
  }, void 0, (0, _jsx2.default)(_Typography.default, {}, void 0, "Joined: ", (0, _formatJoinDate.default)(user.createdAt))), (0, _jsx2.default)(_CardActions.default, {
    className: "UserCard-actions"
  }));
};

UserCard.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired
} : {};
var _default = UserCard; //# sourceMappingURL=UserCard.js.map

exports.default = _default;
//# sourceMappingURL=UserCard.js.map
