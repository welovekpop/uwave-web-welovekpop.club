import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { TableRow, TableCell } from '../../../components/Table';
import Avatar from '../../../components/Avatar';
import Username from '../../../components/Username/WithCard';
import formatJoinDate from '../../../utils/formatJoinDate';

var avatarStyle = {
  width: 48,
  paddingRight: 0
};
var actionsStyle = {
  width: 48,
  paddingLeft: 0,
  paddingRight: 0
};

var anchorOrigin = { horizontal: 'right', vertical: 'top' };
var targetOrigin = { horizontal: 'right', vertical: 'top' };

var _ref2 = _jsx(TableCell, {}, void 0, 'Email');

var _ref3 = _jsx(TableCell, {
  style: actionsStyle
}, void 0, _jsx(IconMenu, {
  iconButtonElement: _jsx(IconButton, {}, void 0, _jsx(MoreVertIcon, {})),
  anchorOrigin: anchorOrigin,
  targetOrigin: targetOrigin
}, void 0, _jsx(MenuItem, {
  primaryText: 'Ban'
})));

var UserRow = function UserRow(_ref) {
  var user = _ref.user;
  return _jsx(TableRow, {}, void 0, _jsx(TableCell, {
    style: avatarStyle
  }, void 0, _jsx(Avatar, {
    user: user
  })), _jsx(TableCell, {}, void 0, _jsx(Username, {
    user: user
  })), _jsx(TableCell, {}, void 0, formatJoinDate(user.createdAt)), _ref2, _jsx(TableCell, {}, void 0, user.roles.join(', ')), _ref3);
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired
} : {};

export default UserRow;
//# sourceMappingURL=Row.js.map
