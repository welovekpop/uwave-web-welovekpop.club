import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import SettingsIcon from "@material-ui/icons/es/Settings";
import Avatar from '../Avatar';
var enhance = pure;

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "UserInfo-settings"
}, void 0, _jsx(SettingsIcon, {
  className: "UserInfo-settingsIcon"
}));

var UserInfo = function UserInfo(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onClick = _ref.onClick;
  return _jsx("button", {
    className: cx('UserInfo', className),
    onClick: onClick
  }, void 0, _jsx(Avatar, {
    className: "UserInfo-avatar",
    user: user
  }), _ref2);
};

UserInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func
} : {};
export default enhance(UserInfo);
//# sourceMappingURL=UserInfo.js.map
