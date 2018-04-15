"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pure = _interopRequireDefault(require("recompose/pure"));

var _RoleColor = _interopRequireDefault(require("../RoleColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = _pure.default;

var Username = function Username(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return (0, _jsx2.default)(_RoleColor.default, {
    className: (0, _classnames.default)('Username', className),
    roles: user.roles
  }, void 0, user.username);
};

Username.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  user: _propTypes.default.shape({
    username: _propTypes.default.string,
    roles: _propTypes.default.arrayOf(_propTypes.default.string)
  }).isRequired
} : {};

var _default = enhance(Username); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
