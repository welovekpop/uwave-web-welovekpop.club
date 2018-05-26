import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "@material-ui/core/es/Avatar";
import ListItem from "@material-ui/core/es/ListItem";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar";
import ListItemText from "@material-ui/core/es/ListItemText";
import ListItemIcon from "@material-ui/core/es/ListItemIcon";
import Username from '../../../components/Username';

var UserRow = function UserRow(_ref) {
  var user = _ref.user,
      icon = _ref.icon;
  return _jsx(ListItem, {}, void 0, _jsx(ListItemAvatar, {}, void 0, _jsx(Avatar, {
    className: "Avatar",
    src: user.avatar || "https://sigil.u-wave.net/" + user._id
  })), _jsx(ListItemText, {}, void 0, _jsx(Username, {
    user: user
  })), icon && _jsx(ListItemIcon, {}, void 0, icon));
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  icon: PropTypes.node
} : {};
export default UserRow;
//# sourceMappingURL=UserRow.js.map
