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

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _muiThemeable = require('material-ui/styles/muiThemeable');

var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO define role names server-side instead of role numbers
var tempRoleIDToRoleName = {
  0: 'default',
  1: 'special',
  2: 'moderator',
  3: 'manager',
  4: 'admin'
};

var Username = function Username(_ref) {
  var muiTheme = _ref.muiTheme,
      className = _ref.className,
      user = _ref.user;
  var rankColors = muiTheme.rankColors;

  var roleName = tempRoleIDToRoleName[Math.min(user.role, 4)];
  var styles = void 0;
  if (rankColors[roleName]) {
    styles = { color: rankColors[roleName] };
  }

  return (0, _jsx3.default)('span', {
    className: (0, _classnames2.default)('Username', 'Username--' + roleName, className),
    style: styles
  }, void 0, user.username);
};

Username.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: _propTypes2.default.object.isRequired,
  className: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _muiThemeable2.default)(), _pure2.default)(Username);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
