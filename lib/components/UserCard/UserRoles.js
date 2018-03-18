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

var _UserRole = require('../UserRole');

var _UserRole2 = _interopRequireDefault(_UserRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list of roles.
 */
var UserRoles = function UserRoles(_ref) {
  var roles = _ref.roles;
  return (0, _jsx3.default)('div', {
    className: 'UserRoles'
  }, void 0, roles.map(function (roleName) {
    return (0, _jsx3.default)('div', {
      className: 'UserRoles-role'
    }, roleName, (0, _jsx3.default)(_UserRole2.default, {
      roleName: roleName
    }));
  }));
};

UserRoles.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The roles to display.
   */
  roles: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
} : {};

exports.default = UserRoles;
//# sourceMappingURL=UserRoles.js.map
//# sourceMappingURL=UserRoles.js.map
