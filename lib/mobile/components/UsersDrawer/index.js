'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _UserList = require('./UserList');

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _jsx3.default)(_Drawer2.default, {
    anchor: 'right',
    open: open,
    onClose: onDrawerClose
  }, void 0, (0, _jsx3.default)(_UserList2.default, {
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
  currentDJ: _propTypes2.default.object,
  users: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  waitlist: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  userIsLoggedIn: _propTypes2.default.bool.isRequired,
  userInWaitlist: _propTypes2.default.bool,
  isLockedWaitlist: _propTypes2.default.bool,
  open: _propTypes2.default.bool.isRequired,
  onDrawerClose: _propTypes2.default.func.isRequired,
  onJoinWaitlist: _propTypes2.default.func.isRequired,
  onLeaveWaitlist: _propTypes2.default.func.isRequired
} : {};

exports.default = UsersDrawer;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
