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

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _RoleColor = require('../RoleColor');

var _RoleColor2 = _interopRequireDefault(_RoleColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = _pure2.default;

var Username = function Username(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return (0, _jsx3.default)(_RoleColor2.default, {
    className: (0, _classnames2.default)('Username', className),
    roles: user.roles
  }, void 0, user.username);
};

Username.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.shape({
    username: _propTypes2.default.string,
    roles: _propTypes2.default.arrayOf(_propTypes2.default.string)
  }).isRequired
} : {};

exports.default = enhance(Username);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
