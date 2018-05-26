"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _UserRole = _interopRequireDefault(require("../UserRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A list of roles.
 */
var UserRoles = function UserRoles(_ref) {
  var roles = _ref.roles;
  return (0, _jsx2.default)("div", {
    className: "UserRoles"
  }, void 0, roles.map(function (roleName) {
    return (0, _jsx2.default)("div", {
      className: "UserRoles-role"
    }, roleName, (0, _jsx2.default)(_UserRole.default, {
      roleName: roleName
    }));
  }));
};

UserRoles.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The roles to display.
   */
  roles: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
} : {};
var _default = UserRoles;
exports.default = _default;
//# sourceMappingURL=UserRoles.js.map
