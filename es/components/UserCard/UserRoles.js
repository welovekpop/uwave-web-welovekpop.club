import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import UserRole from '../UserRole';
/**
 * A list of roles.
 */

var UserRoles = function UserRoles(_ref) {
  var roles = _ref.roles;
  return _jsx("div", {
    className: "UserRoles"
  }, void 0, roles.map(function (roleName) {
    return _jsx("div", {
      className: "UserRoles-role"
    }, roleName, _jsx(UserRole, {
      roleName: roleName
    }));
  }));
};

UserRoles.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The roles to display.
   */
  roles: PropTypes.arrayOf(PropTypes.string).isRequired
} : {};
export default UserRoles;
//# sourceMappingURL=UserRoles.js.map
