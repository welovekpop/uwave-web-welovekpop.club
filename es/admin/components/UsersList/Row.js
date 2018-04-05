import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import withProps from 'recompose/withProps';
import uniqueId from 'lodash/uniqueId';
import IconButton from 'material-ui/es/IconButton';
import Menu, { MenuItem } from 'material-ui/es/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { TableRow, TableCell as MuiTableCell } from 'material-ui/es/Table';
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

var TableCell = withProps({
  className: 'AdminUserRow-cell'
})(MuiTableCell);

var _ref = _jsx(TableCell, {}, void 0, 'Email');

var _ref2 = _jsx(MoreVertIcon, {});

var _ref3 = _jsx(MenuItem, {}, void 0, 'Ban');

var UserRow = function (_React$Component) {
  _inherits(UserRow, _React$Component);

  function UserRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, UserRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      open: false,
      anchorEl: null
    }, _this.menu = uniqueId('menu'), _this.handleOpenMenu = function (event) {
      _this.setState({ open: true, anchorEl: event.currentTarget });
    }, _this.handleCloseMenu = function () {
      _this.setState({ open: false, anchorEl: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UserRow.prototype.render = function render() {
    var user = this.props.user;
    var _state = this.state,
        open = _state.open,
        anchorEl = _state.anchorEl;

    return _jsx(TableRow, {
      className: 'AdminUserRow'
    }, void 0, _jsx(TableCell, {
      style: avatarStyle
    }, void 0, _jsx(Avatar, {
      user: user
    })), _jsx(TableCell, {}, void 0, _jsx(Username, {
      user: user
    })), _jsx(TableCell, {}, void 0, formatJoinDate(user.createdAt)), _ref, _jsx(TableCell, {}, void 0, user.roles.join(', ')), _jsx(TableCell, {
      style: actionsStyle
    }, void 0, _jsx(IconButton, {
      onClick: this.handleOpenMenu,
      'aria-haspopup': 'true',
      'aria-owns': open ? this.menu : null
    }, void 0, _ref2), _jsx(Menu, {
      id: this.menu,
      open: open,
      anchorEl: anchorEl,
      onClose: this.handleCloseMenu
    }, void 0, _ref3)));
  };

  return UserRow;
}(React.Component);

export default UserRow;
UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired
} : {};
//# sourceMappingURL=Row.js.map
