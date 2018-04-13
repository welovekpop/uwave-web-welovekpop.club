import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import RoleColor from '../RoleColor';
var enhance = pure;

var Username = function Username(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return _jsx(RoleColor, {
    className: cx('Username', className),
    roles: user.roles
  }, void 0, user.username);
};

Username.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
} : {};
export default enhance(Username);
//# sourceMappingURL=index.js.map
