"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _UserRoles = _interopRequireDefault(require("../UserCard/UserRoles"));

var _ChangeUsernameButton = _interopRequireDefault(require("./ChangeUsernameButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatJoinDate = function formatJoinDate(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
};

var Profile = function Profile(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onChangeUsername = _ref.onChangeUsername;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('SettingsPanelProfile', className)
  }, void 0, (0, _jsx2.default)(_Avatar.default, {
    className: "SettingsPanelProfile-avatar",
    user: user
  }), (0, _jsx2.default)("div", {
    className: "SettingsPanelProfile-textblock"
  }, void 0, (0, _jsx2.default)("h2", {
    className: "SettingsPanelProfile-username"
  }, void 0, user.username, (0, _jsx2.default)(_ChangeUsernameButton.default, {
    onChangeUsername: onChangeUsername,
    initialUsername: user.username
  })), (0, _jsx2.default)(_UserRoles.default, {
    roles: user.roles
  }), (0, _jsx2.default)("p", {
    className: "SettingsPanelProfile-date"
  }, void 0, formatJoinDate(user.createdAt))));
};

Profile.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  user: _propTypes.default.object.isRequired,
  onChangeUsername: _propTypes.default.func.isRequired
} : {};
var _default = Profile; //# sourceMappingURL=Profile.js.map

exports.default = _default;
//# sourceMappingURL=Profile.js.map
