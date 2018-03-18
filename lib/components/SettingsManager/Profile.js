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

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _UserRoles = require('../UserCard/UserRoles');

var _UserRoles2 = _interopRequireDefault(_UserRoles);

var _ChangeUsernameButton = require('./ChangeUsernameButton');

var _ChangeUsernameButton2 = _interopRequireDefault(_ChangeUsernameButton);

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
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('SettingsPanelProfile', className)
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'SettingsPanelProfile-avatar',
    user: user
  }), (0, _jsx3.default)('div', {
    className: 'SettingsPanelProfile-textblock'
  }, void 0, (0, _jsx3.default)('h2', {
    className: 'SettingsPanelProfile-username'
  }, void 0, user.username, (0, _jsx3.default)(_ChangeUsernameButton2.default, {
    onChangeUsername: onChangeUsername,
    initialUsername: user.username
  })), (0, _jsx3.default)(_UserRoles2.default, {
    roles: user.roles
  }), (0, _jsx3.default)('p', {
    className: 'SettingsPanelProfile-date'
  }, void 0, formatJoinDate(user.createdAt))));
};

Profile.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired,

  onChangeUsername: _propTypes2.default.func.isRequired
} : {};

exports.default = Profile;
//# sourceMappingURL=Profile.js.map
//# sourceMappingURL=Profile.js.map
