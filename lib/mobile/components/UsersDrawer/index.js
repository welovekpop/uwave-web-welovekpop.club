"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _UserList = _interopRequireDefault(require("./UserList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var classes = {
  paper: 'UsersDrawer'
};

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
  return (0, _jsx2.default)(_Drawer.default, {
    anchor: "right",
    open: open,
    onClose: onDrawerClose,
    classes: classes
  }, void 0, (0, _jsx2.default)(_UserList.default, {
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
  currentDJ: _propTypes.default.object,
  users: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  waitlist: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  userIsLoggedIn: _propTypes.default.bool.isRequired,
  userInWaitlist: _propTypes.default.bool,
  isLockedWaitlist: _propTypes.default.bool,
  open: _propTypes.default.bool.isRequired,
  onDrawerClose: _propTypes.default.func.isRequired,
  onJoinWaitlist: _propTypes.default.func.isRequired,
  onLeaveWaitlist: _propTypes.default.func.isRequired
} : {};
var _default = UsersDrawer;
exports.default = _default;
//# sourceMappingURL=index.js.map
