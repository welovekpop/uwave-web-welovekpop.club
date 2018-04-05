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

var _reactI18next = require('react-i18next');

var _upperCaseFirst = require('upper-case-first');

var _upperCaseFirst2 = _interopRequireDefault(_upperCaseFirst);

var _RoleColor = require('../RoleColor');

var _RoleColor2 = _interopRequireDefault(_RoleColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var UserRole = function UserRole(_ref) {
  var t = _ref.t,
      roleName = _ref.roleName;
  return (0, _jsx3.default)(_RoleColor2.default, {
    component: 'div',
    className: 'UserRole',
    role: roleName
  }, void 0, t('roles.' + roleName, { defaultValue: (0, _upperCaseFirst2.default)(roleName) }));
};

UserRole.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  roleName: _propTypes2.default.string.isRequired
} : {};

exports.default = enhance(UserRole);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
