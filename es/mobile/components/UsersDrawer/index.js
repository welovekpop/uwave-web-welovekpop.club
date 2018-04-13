import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Drawer from "material-ui/es/Drawer";
import UserList from './UserList';

var UsersDrawer = function UsersDrawer(_ref) {
  var currentDJ = _ref.currentDJ,
      users = _ref.users,
      waitlist = _ref.waitlist,
      isLockedWaitlist = _ref.isLockedWaitlist,
      userInWaitlist = _ref.userInWaitlist,
      userIsLoggedIn = _ref.userIsLoggedIn,
      open = _ref.open,
      onDrawerClose = _ref.onDrawerClose,
      onJoinWaitlist = _ref.onJoinWaitlist,
      onLeaveWaitlist = _ref.onLeaveWaitlist;
  return _jsx(Drawer, {
    anchor: "right",
    open: open,
    onClose: onDrawerClose
  }, void 0, _jsx(UserList, {
    currentDJ: currentDJ,
    users: users,
    waitlist: waitlist,
    isLockedWaitlist: isLockedWaitlist,
    userIsLoggedIn: userIsLoggedIn,
    userInWaitlist: userInWaitlist,
    onJoinWaitlist: onJoinWaitlist,
    onLeaveWaitlist: onLeaveWaitlist
  }));
};

UsersDrawer.propTypes = process.env.NODE_ENV !== "production" ? {
  currentDJ: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  waitlist: PropTypes.arrayOf(PropTypes.object).isRequired,
  userIsLoggedIn: PropTypes.bool.isRequired,
  userInWaitlist: PropTypes.bool,
  isLockedWaitlist: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
  onJoinWaitlist: PropTypes.func.isRequired,
  onLeaveWaitlist: PropTypes.func.isRequired
} : {};
export default UsersDrawer;
//# sourceMappingURL=index.js.map
