import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import upperCaseFirst from 'upper-case-first';
import RoleColor from '../RoleColor';
var enhance = translate();

var UserRole = function UserRole(_ref) {
  var t = _ref.t,
      roleName = _ref.roleName;
  return _jsx(RoleColor, {
    component: "div",
    className: "UserRole",
    role: roleName
  }, void 0, t("roles." + roleName, {
    defaultValue: upperCaseFirst(roleName)
  }));
};

UserRole.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  roleName: PropTypes.string.isRequired
} : {};
export default enhance(UserRole);
//# sourceMappingURL=index.js.map
