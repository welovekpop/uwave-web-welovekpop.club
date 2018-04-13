import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "material-ui/es/Avatar";
import { ListItem, ListItemAvatar, ListItemText, ListItemIcon } from "material-ui/es/List";
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
