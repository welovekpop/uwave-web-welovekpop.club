"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _upperCaseFirst = _interopRequireDefault(require("upper-case-first"));

var _RoleColor = _interopRequireDefault(require("../RoleColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var UserRole = function UserRole(_ref) {
  var t = _ref.t,
      roleName = _ref.roleName;
  return (0, _jsx2.default)(_RoleColor.default, {
    component: "div",
    className: "UserRole",
    role: roleName
  }, void 0, t("roles." + roleName, {
    defaultValue: (0, _upperCaseFirst.default)(roleName)
  }));
};

UserRole.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  roleName: _propTypes.default.string.isRequired
} : {};

var _default = enhance(UserRole); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
